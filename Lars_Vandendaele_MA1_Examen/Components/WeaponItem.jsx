import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WeaponItem = ({ weapon, onPress }) => {
  return (
    <TouchableOpacity style={styles.weaponCard} onPress={onPress}>
      <Text style={styles.weaponName}>{weapon.name}</Text>
      <Text style={styles.weaponType}>{weapon.type}</Text>
      <Text style={styles.weaponPower}>Power: {weapon.power}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default WeaponItem;