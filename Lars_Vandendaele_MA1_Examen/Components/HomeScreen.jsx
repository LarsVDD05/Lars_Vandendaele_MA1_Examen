import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Weapons } from '../Data/weapons';

const HomeScreen = ({ navigation }) => {
  const [weapons, setWeapons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('HomeScreen mounted');
    
    setWeapons(Weapons);

    return () => {
      console.log('HomeScreen unmounted');
    };
  }, []);

  const filteredWeapons = weapons.filter(weapon =>
    weapon.name.toLowerCase().includes(search.toLowerCase())
  );

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
      
      <FlashList
        data={filteredWeapons}
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