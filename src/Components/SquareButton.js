import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {white, button_backgroun, primary_brand} from '../Assets/themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {FONT_ROBOTO, FONT_SIZE_h4} from '../Assets/themes/fonts';

const SquareButton = props => {
  return (
    <View
      style={
        props.invert
          ? [
              styles.invertContainer,
              {
                width: props.width ? props.width : 100,
                height: props.height ? props.height : 30,
              },
            ]
          : [
              styles.container,
              {
                width: props.width ? props.width : 100,
                height: props.height ? props.height : 30,
              },
            ]
      }>
      <Ripple
        rippleColor="gray"
        rippleDuration={1000}
        rippleOpacity={0.87}
        style={[styles.rippleStyle]}
        onPress={props.onSquareBtnPress}>
        <Text
          style={
            props.invert ? styles.textInvertColor : styles.textDefultColor
          }>
          {props.text}
        </Text>
      </Ripple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: button_backgroun,
    borderWidth: 1,
  },
  rippleStyle: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: button_backgroun,
  },
  textDefultColor: {
    color: button_backgroun,
    fontSize: FONT_SIZE_h4,
    fontFamily: FONT_ROBOTO,
  },
  invertContainer: {
    backgroundColor: button_backgroun,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInvertColor: {
    color: white,
  },
});

export default SquareButton;
