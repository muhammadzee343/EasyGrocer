import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import CartIcon from '../../../Assets/icons/CartIcon';
import LogoutIcon from '../../../Assets/icons/LogoutIcon';
import OrderIcon from '../../../Assets/icons/OrderIcon';
import ProfileIcon from '../../../Assets/icons/ProfileIcon';
import ShoppingListIcon from '../../../Assets/icons/ShoppingListIcon';
import TrackOrderIcon from '../../../Assets/icons/TrackOrderIcon';
import WalletIcon from '../../../Assets/icons/WalletIcon';
import {button_backgroun, Dark} from '../../../Assets/themes/colors';
import AccountCard from '../../../Components/AccountCard';
import CustomHeader from '../../../Components/CustomHeader';
const onWlletPress = () => {
  return console.log('wallet Pressed');
};
const promotion_array = [
  {
    id: 1,
    leftIcon: <WalletIcon iconColor={button_backgroun} />,
    title: 'Wallet',
    onPress: {onWlletPress},
  },
  {
    id: 2,
    leftIcon: <OrderIcon iconColor={button_backgroun} />,
    title: 'My Orders',
    onPress: onWlletPress,
  },
  {
    id: 3,
    leftIcon: <ProfileIcon iconColor={button_backgroun} />,
    title: 'My Profile',
    onPress: onWlletPress,
  },
  {
    id: 4,
    leftIcon: <ShoppingListIcon iconColor={button_backgroun} />,
    title: 'Shopping List',
    onPress: onWlletPress,
  },
  {
    id: 5,
    leftIcon: <CartIcon iconColor={button_backgroun} />,
    title: 'Save Cart',
    onPress: onWlletPress,
  },
  {
    id: 6,
    leftIcon: <TrackOrderIcon iconColor={button_backgroun} />,
    title: 'Track Your Order',
    onPress: onWlletPress,
  },
  {
    id: 7,
    leftIcon: <LogoutIcon iconColor={button_backgroun} />,
    title: 'Log Out',
    onPress: onWlletPress,
  },
];

export default function Account() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor={Dark} />}
          headerTitle="Accounts"
        />
      </View>
      <ScrollView style={{flex: 0.9, backgroundColor: 'red'}}>
        {promotion_array.map((item, index) => {
          return (
            <View key={item.id}>
              <AccountCard
                leftIcon={item.leftIcon}
                title={item.title}
                onPress={item.onPress}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
