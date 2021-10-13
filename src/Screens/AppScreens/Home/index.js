import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import EditIcon from '../../../Assets/icons/EditIcon';
import LocationIcon from '../../../Assets/icons/LocationIcon';
import MenuIcon from '../../../Assets/icons/MenuIcon';
import SearchIcon from '../../../Assets/icons/SearchIcon';
import {button_backgroun, white} from '../../../Assets/themes/colors';
import HeaderWithLogo from '../../../Components/HeaderWithLogo';
import LocationHeader from '../../../Components/LocationHeader';
import ProductsHeadingContainer from '../../../Components/ProductHeaderContainer';
import styles from './style';
import imgbread from '../../../Assets/images/bread.png';

const prodcut_data = [
  {
    id: '1',
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    productWeight: '(Large)',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
  {
    id: '2',
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    productWeight: '(Large)',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
  {
    id: '3',
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    productWeight: '(Large)',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
  {
    id: '4',
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    productWeight: '(Large)',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
  {
    id: '5',
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    productWeight: '(Large)',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={button_backgroun} />
      <View style={styles.headerContainer}>
        <HeaderWithLogo
          headerTitle="Feature"
          rightIcon={<SearchIcon iconColor="black" />}
          menuIcon={<MenuIcon iconColor="black" />}
        />
      </View>
      <View style={styles.locationHeaderContainer}>
        <LocationHeader
          leftIcon={<LocationIcon iconColor={white} />}
          LocationName="Sheikhupura, Punjab Pakistan"
          rightIcon={<EditIcon />}
        />
      </View>
      <View style={styles.cardDescriptionContainer}>
        <View style={styles.badgeImageContainer}>
          <Image
            source={require('../../../Assets/images/badgeImage.jpg')}
            style={styles.badgeImageStyle}
          />
        </View>
        <ScrollView style={styles.cardContainer}>
          <View style={styles.cardConatinerStyle}>
            <ProductsHeadingContainer
              title={'Featured Products'}
              productList={prodcut_data}
            />
          </View>
          <View style={styles.cardConatinerStyle}>
            <ProductsHeadingContainer
              title={'Top Sellers'}
              productList={prodcut_data}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
