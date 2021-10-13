import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dark, text_grey, white} from '../Assets/themes/colors';
import {
  FONT_KARLA,
  FONT_SIZE_h4,
  FONT_SIZE_h5,
  FONT_SIZE_h7,
} from '../Assets/themes/fonts';
import {GradientBtn} from './GradientBtn';
import SquareButton from './SquareButton';

const PromotionCard = props => {
  const SquareButtOnClickAction = () => {
    console.log('on click of square button');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: props.imageUrl}} style={styles.imageStyle} />
      </View>
      <View style={styles.cardDescriptionContainer}>
        <View style={styles.cardTitleContainer}>
          <View style={{width: '85%', height: 39}}>
            <Text style={styles.cardTitleTextStyle}>{props.promoTitle}</Text>
          </View>
          <View style={styles.promotionDurationContainerStyle}>
            <Text style={styles.cardDurationTextStyle}>
              {props.promotionDuration}
            </Text>
          </View>
        </View>
        <View style={styles.promocodeContainerStyle}>
          <Text style={styles.promocodeTextStyle}>{props.promoCode}</Text>
        </View>
        <View style={styles.cardBtnContainer}>
          <SquareButton
            text="Expired Today"
            onSquareBtnPress={SquareButtOnClickAction}
            width={130}
            height={40}
          />
          <TouchableOpacity onPress={props.onPressGradientBtn} >
            <GradientBtn name="Apply" customWidth={130} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 338,
    backgroundColor: white,
    borderColor: 'transparent',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    width: '95%',
  },
  imgContainer: {
    // flex: 0.2,
    height: 130,
    width: '100%',
  },
  imageStyle: {
    width: '100%',
    height: 138,
    borderColor: 'transparent',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardDescriptionContainer: {
    height: 200,
    borderColor: 'transparent',
    borderBottomLeftRadius: 10,
    width: '100%',
  },
  cardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  cardTitleTextStyle: {
    color: Dark,
    fontSize: FONT_SIZE_h5,
    fontFamily: 'karla',
    fontWeight: 'bold',
  },
  cardDurationTextStyle: {
    color: text_grey,
    fontSize: FONT_SIZE_h4,
    fontFamily: 'roboto',
  },
  cardBtnContainer: {
    backgroundColor: white,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'transparent',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
  },
  promotionDurationContainerStyle: {
    width: '15%',
    alignItems: 'flex-end',
  },
  promocodeContainerStyle: {
    padding: 10,
    width: '90%',
    height: 86,
  },
  promocodeTextStyle: {
    fontFamily: FONT_KARLA,
    fontSize: FONT_SIZE_h7,
    color: text_grey,
  },
  wrapper: {
    width: 100,
    height: 40,
  },
});

export default PromotionCard;
