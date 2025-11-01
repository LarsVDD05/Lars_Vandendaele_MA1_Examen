import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const WeaponDetail = ({ route }) => {
  const { weapon } = route.params;

  useEffect(() => {
    console.log('WeaponDetail mounted');
    return () => console.log('WeaponDetail unmounted');
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={weapon.image} 
        style={styles.image}
        resizeMode="cover"
      />
      
      <Text style={styles.title}>{weapon.name}</Text>
      <Text style={styles.type}>Type: {weapon.type}</Text>
      <Text style={styles.power}>Power: {weapon.power}</Text>
      <Text style={styles.rarity}>Rarity: {weapon.rarity}</Text>
      <Text style={styles.description}>{weapon.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  type: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
  },
  power: {
    fontSize: 18,
    color: '#00b4ccff',
    marginBottom: 4,
  },
  rarity: {
    fontSize: 18,
    color: '#8a2be2',
    marginBottom: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default WeaponDetail;