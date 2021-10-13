import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dark,
  primary_brand,
  primary_brand_dark,
  white,
} from '../Assets/themes/colors';
import {FONT_ROBOTO, FONT_SIZE_h1} from '../Assets/themes/fonts';

const LocationHeader = props => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1.2, y: 0}}
      colors={[primary_brand, primary_brand_dark]}
      style={{height: 50, width: '100%', flexDirection: 'row'}}>
      <View style={styles.leftWithPropsIconConainer}>
        {props.leftIcon ? props.leftIcon : null}
      </View>
      <View style={styles.locationHeaderTitleContainer}>
        {props.LocationName ? (
          <Text style={styles.locationTextStyle}>{props.LocationName}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.rightIconContainer}
        onPress={
          props.rightIconPressHandle ? props.rightIconPressHandle : () => {}
        }>
        {props.rightIcon ? <Text>{props.rightIcon}</Text> : null}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  leftWithPropsIconConainer: {
    width: '15%',
    // backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  locationHeaderTitleContainer: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h1,
    alignItems: 'center',
    // marginLeft: 5,
  },
  locationTextStyle: {
    fontSize: 17,
    fontFamily: 'sans-serif-condensed',
    color: Dark,
    fontWeight: 'bold',
    color: white,
  },
  rightIconContainer: {
    width: '15%',
    // backgroundColor: 'green',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default LocationHeader;
