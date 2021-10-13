import React from 'react';
import {View, Text, StyleSheet, Button, StatusBar, Image} from 'react-native';
import {Dark, white} from '../Assets/themes/colors';
// import Colors from '../assets/theme/Colors';

export const ProductCardBox = props => {
  return (
    <View style={styles.productCardContainer}>
      <View style={props.styles}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCardContainer: {
    marginVertical: 10,
    backgroundColor: white,
    borderRadius: 2,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginHorizontal: 10,
    shadowColor: Dark,
  },
});

export default ProductCardBox;
