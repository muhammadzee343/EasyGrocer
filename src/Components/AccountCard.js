import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dark, white} from '../Assets/themes/colors';
import {FONT_KARLA, FONT_SIZE_h5} from '../Assets/themes/fonts';

export default function AccountCard(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.iconContainer}>{props.leftIcon}</View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTextStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '95%',
    backgroundColor: white,
    flexDirection: 'row',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 10,
  },
  iconContainer: {
    height: 50,
    backgroundColor: white,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: 50,
    backgroundColor: white,
    width: '80%',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontFamily: FONT_KARLA,
    fontSize: FONT_SIZE_h5,
    fontWeight: 'bold',
    color: Dark,
  },
});
