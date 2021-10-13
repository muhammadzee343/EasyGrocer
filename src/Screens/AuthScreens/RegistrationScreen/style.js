import React from 'react';
import {StyleSheet} from 'react-native';
import {
  button_backgroun,
  primary_brand,
  white,
} from '../../../Assets/themes/colors';
import {FONT_ROBOTO} from '../../../Assets/themes/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary_brand,
  },
  headerContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontFamily: FONT_ROBOTO,
    fontSize: 40,
    color: white,
  },
  decriptionContianer: {
    flex: 0.67,
    backgroundColor: white,
    borderTopLeftRadius: 70,
  },
  titleTextStyle: {
    fontFamily: FONT_ROBOTO,
    fontSize: 28,
    color: button_backgroun,
    marginTop: 15,
    fontWeight: 'bold',
  },
  processBtnContainer: {
    margin: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  footerContainer: {
    flex: 0.08,
    backgroundColor: white,
  },
});

export default styles;
