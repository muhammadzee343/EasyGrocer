import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Dark, white} from '../Assets/themes/colors';
import {FONT_ROBOTO, FONT_SIZE_h1} from '../Assets/themes/fonts';

const CustomHeader = props => {
  return (
    <View style={styles.container}>
      <View
        style={
          props.leftIcon
            ? styles.leftWithPropsIconConainer
            : styles.leftWithoutPropsIconConainer
        }>
        {props.leftIcon ? props.leftIcon : null}
      </View>
      <View
        style={
          props.leftIcon
            ? styles.headerWithPropsTitleContainer
            : styles.headerWithoutPropsTitleContainer
        }>
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
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '100%',
    backgroundColor: white,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  leftWithPropsIconConainer: {
    width: '10%',
    // backgroundColor: 'red',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  leftWithoutPropsIconConainer: {
    width: '2%',
    // backgroundColor: 'gray',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  headerWithPropsTitleContainer: {
    width: '60%',
    height: 55,
    justifyContent: 'center',
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h1,
    // alignItems: 'center',
    marginLeft: 5,
  },
  headerWithoutPropsTitleContainer: {
    width: '75%',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 17,
    fontFamily: 'sans-serif-condensed',
    color: Dark,
    fontWeight: 'bold',
  },
  rightIconContainer: {
    width: '15%',
    // backgroundColor: 'green',
    height: 55,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  menuIconContainer: {
    width: '12%',
    // backgroundColor: 'green',
    height: 55,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default CustomHeader;
