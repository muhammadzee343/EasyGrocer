import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dark} from '../Assets/themes/colors';
import {FONT_ROBOTO} from '../Assets/themes/fonts';
// import Colors from '../assets/theme/Colors';

export const TextHeadingProduct = props => {
  return (
    <Text style={{...styles.HeadingTxt, ...props.styles}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  HeadingTxt: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: FONT_ROBOTO,
    color: Dark,
  },
});

export default TextHeadingProduct;
