import React, { useState, useEffect } from 'react';
import WeaponsContainer from './WeaponsContainer';
import { Weapons } from '../Data/weapons';

const HomeScreen = ({ navigation }) => {
  const [weapons, setWeapons] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');

  useEffect(() => {
    console.log('HomeScreen mounted');
    setWeapons(Weapons);
    return () => console.log('HomeScreen unmounted');
  }, []);

  const filteredWeapons = weapons.filter(weapon => {
    const matchesSearch = weapon.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterBy === 'all' || weapon.type === filterBy;
    return matchesSearch && matchesFilter;
  });

  const sortedWeapons = [...filteredWeapons].sort((a, b) => {
    switch (sortBy) {
      case 'name': return a.name.localeCompare(b.name);
      case 'power': return b.power - a.power;
      default: return 0;
    }
  });

  const handleWeaponPress = (weapon) => {
    navigation.navigate('WeaponDetail', { weapon });
  };

  return (
    <WeaponsContainer
      weapons={sortedWeapons}
      search={search}
      setSearch={setSearch}
      sortBy={sortBy}
      setSortBy={setSortBy}
      filterBy={filterBy}
      setFilterBy={setFilterBy}
      onWeaponPress={handleWeaponPress}
    />
  );
};

export default HomeScreen;