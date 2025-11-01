import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.avatar}
        />
        <Text style={styles.name}>Lars Vandendaele</Text>
        <Text style={styles.role}>Guardian</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.bio}>
          Passionate Destiny 2 player and developer. 
          Always exploring new builds and strategies in Destiny 2.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactValue}>vandendaelelars@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Guardian Rank:</Text>
          <Text style={styles.contactValue}>7</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Favorite Class:</Text>
          <Text style={styles.contactValue}>Warlock</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Weapons</Text>
        <Text style={styles.favoriteWeapons}>
          Thorn, Graviton lance, bad juju
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#007acc',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  contactLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  contactValue: {
    fontSize: 16,
    color: '#666',
  },
  favoriteWeapons: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default ProfileScreen;