import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import MenuIcon from '../../../Assets/icons/MenuIcon';
import ProfileIcon from '../../../Assets/icons/ProfileIcon';
import SearchIcon from '../../../Assets/icons/SearchIcon';
import TrackOrderIcon from '../../../Assets/icons/TrackOrderIcon';
import {button_backgroun, Dark} from '../../../Assets/themes/colors';
import AccountCard from '../../../Components/AccountCard';
import CustomHeader from '../../../Components/CustomHeader';
import PromotionCard from '../../../Components/PromotionCard';
import styles from './style';

const promotion_array = [
  {
    imgurl:
      'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg',
    promoTitle: 'Super Saver Week Cashback Special for EasyGrocer Club!',
    promoDuration: '3d',
    promoDescription:
      'Use Code: CLUB3299 & get Rs.400 Cashback (Min. Order Rs, 3500)',
    promoCode: 'JK2103',
    onPress: handleOnPress,
  },
  {
    imgurl:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    promoTitle: 'Special Discount for Bank Alfalah Card Users!',
    promoDuration: '2d',
    promoDescription:
      'Pay via your BOP Debit / Credit card and get 20% off on your 1st Order! (Min Order: Rs.1000)',
    promoCode: 'JK2104',
    onPress: handleOnPress,
  },
  {
    imgurl:
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg',
    promoTitle: 'Special Discount for Bank Mezan Card Users!',
    promoDuration: '1d',
    promoDescription:
      'Pay via your Mezan Debit / Credit card and get 40% off on your 1st Order! (Min Order: Rs.1000)',
    promoCode: 'JK2105',
    onPress: handleOnPress,
  },
];
const handleOnPress = () => {
  return console.log('gradient btn press');
};
const PromotionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader
          leftIcon={<ProfileIcon iconColor={button_backgroun} />}
          headerTitle="Promotions"
          rightIcon={<SearchIcon iconColor={Dark} />}
          menuIcon={<MenuIcon iconColor={Dark} />}
        />
      </View>
      <ScrollView style={styles.cardContainer}>
        {promotion_array.map(item => {
          return (
            <PromotionCard
              imageUrl={item.imgurl}
              promoTitle={item.promoTitle}
              promotionDuration={item.promoDuration}
              promoCode={item.promoDescription}
              onPressGradientBtn={item.onPress}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PromotionScreen;
