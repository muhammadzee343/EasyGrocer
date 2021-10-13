import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {white, button_backgroun, primary_brand} from '../Assets/themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {FONT_ROBOTO, FONT_SIZE_11, FONT_SIZE_h4} from '../Assets/themes/fonts';

const CustomCartButton = props => {
  return (
    <View
      style={[
        styles.container,
        {
          width: props.width ? props.width : 100,
          height: props.height ? props.height : 30,
        },
      ]}>
      <Ripple
        rippleColor="gray"
        rippleDuration={1000}
        rippleOpacity={0.87}
        style={[styles.rippleStyle]}
        onPress={props.onSquareBtnPress}>
        <Text style={styles.textDefultStyle}>{props.text}</Text>
      </Ripple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: button_backgroun,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rippleStyle: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDefultStyle: {
    color: white,
    fontSize: FONT_SIZE_h4,
    fontFamily: FONT_ROBOTO,
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_11,
  },
});

export default CustomCartButton;
