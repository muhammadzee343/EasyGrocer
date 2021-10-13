// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
// // import Colors from '../assets/theme/Colors';
// import FavIcon from '../Assets/icons/FavIcon';
// import {button_backgroun, Dark, white} from '../Assets/themes/colors';
// import {FONT_KARLA} from '../Assets/themes/fonts';

// export const ProductCard = props => {
//   console.log('data', props.prodcut_data);
//   return (
//     //    <ScrollView horizontal={true}>
//     <ScrollView
//       horizontal={true}
//       showsHorizontalScrollIndicator={false}
//       style={styles.ProductCardContainer}>
//       {props.prodcut_data.map(data => {
//         return (
//           <View style={styles.ProductContainer} key={data.id}>
//             <View>
//               <Image style={styles.imgProductStyle} source={data.productImg} />
//               <View style={styles.productContentSection}>
//                 <Text style={styles.productnameStyle}>{data.productName}</Text>
//                 <Text style={styles.productweightStyle}>
//                   {data.productWeight}
//                 </Text>
//                 <View style={styles.priceProductContainer}>
//                   <Text style={styles.priceProducttxt}>
//                     Rs.{data.productOrignalPrice}
//                   </Text>
//                   <Text style={{...styles.priceProducttxt, ...styles.cutline}}>
//                     Rs.{data.productBeforePrice}
//                   </Text>
//                   <FavIcon />
//                 </View>
//               </View>
//             </View>
//           </View>
//         );
//       })}
//     </ScrollView>
//     //    </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   ProductCardContainer: {
//     flexDirection: 'row',
//   },
//   ProductContainer: {
//     backgroundColor: white,
//     borderTopEndRadius: 10,
//     marginHorizontal: 10,
//     borderBottomLeftRadius: 10,
//     borderTopRightRadius: 10,
//     // height: 200,
//     width: 170,
//     elevation: 5,
//     shadowColor: Dark,
//     marginVertical: 10,
//   },
//   imgProductStyle: {
//     width: '100%',
//     height: 130,
//     borderBottomLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   productnameStyle: {
//     color: Dark,
//     fontSize: 16,
//     fontWeight: 'bold',
//     fontFamily: 'karla',
//     marginTop: 10,
//     paddingLeft: 7,
//   },
//   productweightStyle: {
//     color: Dark,
//     paddingLeft: 7,
//     paddingTop: 3,
//     fontSize: 12,
//     fontFamily: FONT_KARLA,
//     paddingBottom: 7,
//     fontWeight: 'bold',
//   },
//   priceProductContainer: {
//     flexDirection: 'row',
//   },
//   priceProducttxt: {
//     color: button_backgroun,
//     fontSize: 16,
//     fontWeight: 'bold',
//     paddingHorizontal: 5,
//   },
//   cutline: {
//     textDecorationLine: 'line-through',
//     paddingRight: 10,
//   },
//   productContentSection: {
//     paddingHorizontal: 10,
//     paddingBottom: 10,
//   },
// });

// export default ProductCard;
