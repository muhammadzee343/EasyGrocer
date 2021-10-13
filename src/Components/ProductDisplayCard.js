import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Dark,
  primary_brand,
  text_grey,
  transparent,
  white,
} from '../Assets/themes/colors';
import {
  FONT_KARLA,
  FONT_ROBOTO,
  FONT_SIZE_h1,
  FONT_SIZE_h5,
  FONT_SIZE_h6,
  FONT_SIZE_h8,
} from '../Assets/themes/fonts';
import CustomCartButton from './CustomCartButton';
import {GradientBtn} from './GradientBtn';
import SquareButton from './SquareButton';

const ProductDisplayCard = props => {
  const SquareButtOnClickAction = () => {
    console.log('on click of square button');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#04A046" />
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 5}}>
          <Image
            // {uri: props.profileImageUrl}
            source={require('../Assets/images/productImage.jpg')}
            style={
              props.circleImage
                ? styles.circleImageStyle
                : styles.withoutCircleImageStyle
            }
          />
        </View>
        <View style={{marginLeft: 10}}>
          <View>
            <Text style={styles.titleTextStyle}>{props.ProductTitle}</Text>
            <Text style={styles.quantityTextStyle}>{props.quantity}</Text>
            <Text style={styles.discountStyle}>{props.discount}</Text>
          </View>
          <View style={styles.descriptionStyle}>
            <View>
              <Text style={styles.newPriceStyle}>Rs. 75</Text>
            </View>
            <View>
              <Text style={styles.oldPriceStyle}>Rs. 75</Text>
            </View>
            <TouchableOpacity
              style={styles.cartBtnContainerStyle}
              onPress={SquareButtOnClickAction}>
              <Image source={require('../Assets/images/cartBtn.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: white,
    margin: 10,
    borderColor: transparent,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
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
  circleImageStyle: {
    height: 110,
    width: 110,
    borderColor: transparent,
    borderRadius: 55,
  },
  withoutCircleImageStyle: {
    height: 120,
    width: 120,
    borderColor: transparent,
    borderBottomLeftRadius: 10,
  },
  titleTextStyle: {
    color: Dark,
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h1,
  },
  quantityTextStyle: {
    color: text_grey,
    fontFamily: FONT_KARLA,
    fontSize: FONT_SIZE_h5,
    paddingBottom: 5,
  },
  discountStyle: {
    backgroundColor: primary_brand,
    borderColor: transparent,
    borderRadius: 10,
    paddingLeft: 5,
    fontSize: FONT_SIZE_h8,
    color: white,
    width: 58,
    height: 20,
  },
  descriptionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  newPriceStyle: {
    width: 50,
    color: Dark,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_h5,
  },
  oldPriceStyle: {
    textDecorationLine: 'line-through',
    width: 50,
    color: text_grey,
    fontFamily: FONT_KARLA,
    fontSize: FONT_SIZE_h6,
  },
  cartBtnContainerStyle: {
    marginLeft: 5,
  },
  cartLogoBtnOuterContainer: {
    position: 'absolute',
    top: -10,
    left: -30,
    borderColor: primary_brand,
    borderWidth: 5,
    borderRadius: 27,
    height: 55,
    width: 55,
  },
  cartLogoBtnInnerContainer: {
    height: 45,
    width: 45,
    borderColor: Dark,
    borderWidth: 1,
    borderRadius: 22,
    backgroundColor: white,
  },
  cartLogoImageStyle: {
    height: 35,
    width: 35,
    borderColor: transparent,
    borderRadius: 17,
  },
});

export default ProductDisplayCard;
