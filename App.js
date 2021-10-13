import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {button_backgroun} from './src/Assets/themes/colors';
import AuthScreenFooter from './src/Components/AuthScreenFooter';
import NavigationScreen from './src/Navigation';
import RegistrationScreen from './src/Screens/AuthScreens/RegistrationScreen';

function App() {
  return <NavigationScreen />;
}

{
  /* <AuthScreenFooter
      userType={'New User?'}
      UserAction={'Create Accoutnt'}
      onPress={handleOnPress}
    /> */
}
export default App;
