import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import WeaponsContainer from './WeaponsContainer';
import { Weapons } from '../Data/weapons';

const HomeScreen = ({ navigation }) => {
  const [weapons, setWeapons] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('HomeScreen mounted');
    
    setTimeout(() => {
      setWeapons(Weapons);
      setLoading(false);
    }, 1500);

    return () => {
      console.log('HomeScreen unmounted');
    };
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

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007acc" />
        <Text style={styles.loadingText}>Loading weapons...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Text style={styles.retryText} onPress={() => setError(null)}>
          Tap to retry
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
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
      
      {sortedWeapons.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No weapons found</Text>
          <Text style={styles.emptySubtext}>Try adjusting your search or filters</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 10,
  },
  retryText: {
    fontSize: 14,
    color: '#007acc',
    textDecorationLine: 'underline',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default HomeScreen;