import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../../Components/CustomHeader';

export default function Account() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor={Dark} />}
          headerTitle="Promotions"
          rightIcon={<SearchIcon iconColor={Dark} />}
          menuIcon={<MenuIcon iconColor={Dark} />}
        />
      </View>
    </View>
  );
}
