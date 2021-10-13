import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {button_backgroun, white} from '../Assets/themes/colors';
import {FONT_ROBOTO, FONT_SIZE_h1} from '../Assets/themes/fonts';

export default function AuthScreenFooter(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>{props.userType}</Text>
        <TouchableOpacity onPress={props.onPress}>
          <Text
            style={[
              styles.textStyle,
              {textDecorationLine: 'underline', fontWeight: 'bold'},
            ]}>
            {props.UserAction}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: button_backgroun,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderTopRightRadius: 60,
    position: 'absolute',
    bottom: 0,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  textStyle: {
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h1,
    color: white,
    paddingRight: 5,
  },
});
