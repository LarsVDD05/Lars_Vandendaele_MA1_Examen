import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import WeaponDetail from './Components/WeaponDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="WeaponsList" 
        component={HomeScreen}
        options={{ title: 'Destiny 2 Weapons' }}
      />
      <Stack.Screen 
        name="WeaponDetail" 
        component={WeaponDetail}
        options={{ title: 'Weapon Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007acc',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ title: 'Guardian Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}