import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Weapons } from '../Data/weapons';

const HomeScreen = ({ navigation }) => {
  const [weapons, setWeapons] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');

  useEffect(() => {
    console.log('HomeScreen mounted');
    
    setWeapons(Weapons);

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
      case 'name':
        return a.name.localeCompare(b.name);
      case 'power':
        return b.power - a.power;
      default:
        return 0;
    }
  });

  const renderWeaponItem = ({ item }) => (
    <View style={styles.weaponCard}>
      <Text style={styles.weaponName}>{item.name}</Text>
      <Text style={styles.weaponType}>{item.type}</Text>
      <Text style={styles.weaponPower}>Power: {item.power}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destiny 2 Weapons</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search weapons by name..."
        value={search}
        onChangeText={setSearch}
      />
      
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort by:</Text>
        <TouchableOpacity 
          style={[styles.sortButton, sortBy === 'name' && styles.sortButtonActive]}
          onPress={() => setSortBy('name')}
        >
          <Text style={styles.sortButtonText}>Name A-Z</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.sortButton, sortBy === 'power' && styles.sortButtonActive]}
          onPress={() => setSortBy('power')}
        >
          <Text style={styles.sortButtonText}>Power</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
  <Text style={styles.filterLabel}>Filter by type:</Text>
  <View style={styles.filterButtons}>
    <TouchableOpacity 
      style={[styles.filterButton, filterBy === 'all' && styles.filterButtonActive]}
      onPress={() => setFilterBy('all')}
    >
      <Text style={styles.filterButtonText}>All</Text>
    </TouchableOpacity>
    {[...new Set(weapons.map(weapon => weapon.type))].map(type => (
        <TouchableOpacity 
            key={type}
            style={[styles.filterButton, filterBy === type && styles.filterButtonActive]}
            onPress={() => setFilterBy(type)}
        >
            <Text style={styles.filterButtonText}>{type}</Text>
        </TouchableOpacity>
        ))}
    </View>
    </View>
      
      <FlashList
        data={sortedWeapons}
        renderItem={renderWeaponItem}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sortLabel: {
    fontSize: 16,
    marginRight: 12,
  },
  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    marginRight: 8,
  },
  sortButtonActive: {
    backgroundColor: '#007acc',
  },
  sortButtonText: {
    fontSize: 14,
  },
  filterContainer: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  filterButtonActive: {
    backgroundColor: '#2e7d32',
  },
  filterButtonText: {
    fontSize: 14,
  },
  weaponCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
  },
  weaponName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weaponType: {
    color: '#666',
    marginTop: 4,
  },
  weaponPower: {
    color: '#00b4ccff',
    marginTop: 2,
  },
});

export default HomeScreen;