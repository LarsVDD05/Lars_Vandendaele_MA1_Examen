import React from 'react';
import { FlashList } from '@shopify/flash-list';
import WeaponItem from './WeaponItem';

const WeaponsList = ({ weapons, onWeaponPress }) => {
  const renderWeaponItem = ({ item }) => (
    <WeaponItem 
      weapon={item} 
      onPress={() => onWeaponPress(item)} 
    />
  );

  return (
    <FlashList
      data={weapons}
      renderItem={renderWeaponItem}
      keyExtractor={(item) => item.id.toString()}
      estimatedItemSize={100}
    />
  );
};

export default WeaponsList;