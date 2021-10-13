import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Dark, white} from '../Assets/themes/colors';
import {FONT_ROBOTO, FONT_SIZE_h1} from '../Assets/themes/fonts';

function HeaderWithLogo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.LogoConainer}>
        <Image
          source={require('../Assets/images/logo.png')}
          style={{height: 60, width: '100%'}}
        />
      </View>
      <View style={styles.headerWithoutPropsTitleContainer}>
        {props.headerTitle ? (
          <Text style={styles.headerTextStyle}>{props.headerTitle}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.rightIconContainer}
        onPress={
          props.rightIconPressHandle ? props.rightIconPressHandle : () => {}
        }>
        {props.rightIcon ? <Text>{props.rightIcon}</Text> : null}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuIconContainer}
        onPress={
          props.menuIconPressHandle ? props.menuIconPressHandle : () => {}
        }>
        {props.menuIcon ? <Text>{props.menuIcon}</Text> : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    backgroundColor: white,
    flexDirection: 'row',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 9,
  },
  LogoConainer: {
    width: '25%',
    // backgroundColor: 'red',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  headerWithoutPropsTitleContainer: {
    width: '50%',
    // backgroundColor: 'red',
    height: 70,
    justifyContent: 'center',
    paddingLeft: 20,
    // alignItems: 'center',
  },
  headerTextStyle: {
    // fontSize: 17,
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
    color: Dark,
    fontWeight: 'bold',
  },
  rightIconContainer: {
    width: '15%',
    // backgroundColor: 'green',
    height: 70,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  menuIconContainer: {
    width: '12%',
    // backgroundColor: 'red',
    height: 70,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default HeaderWithLogo;
