import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from '../Screens/AuthScreens/RegistrationScreen';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import HomeScreen from '../Screens/AppScreens/Home';
import PromotionScreen from '../Screens/AppScreens/Promotion';
import Account from '../Screens/AppScreens/Account';
import MapsScreen from '../Screens/AppScreens/Maps';

const Stack = createNativeStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="maps"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="promotion" component={PromotionScreen} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="maps" component={MapsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
