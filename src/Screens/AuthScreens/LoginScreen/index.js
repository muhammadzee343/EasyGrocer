import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppleIcon from '../../../Assets/icons/AppleIcon';
import EyeIcon from '../../../Assets/icons/EyeIcon';
import FacebookIcon from '../../../Assets/icons/FacebookIcon';
import GoogleIcon from '../../../Assets/icons/GoogleIcon';
import ProceedIcon from '../../../Assets/icons/PorceedIcon';
import {button_backgroun} from '../../../Assets/themes/colors';
import AuthScreenFooter from '../../../Components/AuthScreenFooter';
import {GradientBtn} from '../../../Components/GradientBtn';
import SquareTextInput from '../../../Components/SquareTextInput';
import styles from './style';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

GoogleSignin.configure({
  webClientId:
    '35936980572-05ml9m6sf3b59j3hs1dpvm1c2v91gkgc.apps.googleusercontent.com',
});

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIconStatus, setPasswordIconStatus] = React.useState(false);
  const onChangeEmail = value => {
    setEmail(value);
  };
  const onChangePassword = value => {
    setPassword(value);
  };
  const handlePasswordIconPress = () => {
    setPasswordIconStatus(!passwordIconStatus);
  };
  const handleOnPress = () => {
    props.navigation.navigate('Signup');
  };
  const handleProceedOnPress = () => {
    props.navigation.navigate('home');
  };
  const handleGooglePress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };
  const handleFacebookPress = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={button_backgroun} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextStyle}>EASY GROCER</Text>
      </View>
      <View style={styles.decriptionContianer}>
        <View style={{marginTop: 20}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.titleTextStyle}>Login to Your Account</Text>
            <SquareTextInput
              Title={'EMAIL'}
              onChangeText={onChangeEmail}
              placeholder={'Email'}
              value={email}
              editable={true}
              // autoFocus={true}
            />
            <SquareTextInput
              placeholder={'Password'}
              Title={'PASSWORD'}
              onChangeText={onChangePassword}
              rightIcon={<EyeIcon iconColor={button_backgroun} />}
              passwordIconPress={handlePasswordIconPress}
              secureTextEntry={passwordIconStatus}
              passwordIconStatus={passwordIconStatus}
              value={password}
            />
            <TouchableOpacity
              style={styles.processBtnContainer}
              onPress={handleProceedOnPress}>
              <GradientBtn
                name="PROCEED"
                squareWithCenter
                customWidth={'70%'}
                squareBtnRightIcon={<ProceedIcon />}
              />
            </TouchableOpacity>
            <View style={styles.socialMediaIconsContainer}>
              <TouchableOpacity
                style={styles.IconStyle}
                onPress={handleGooglePress}>
                <GoogleIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.IconStyle}
                onPress={handleFacebookPress}>
                <FacebookIcon iconColor="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.IconStyle}>
                <AppleIcon iconColor="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <AuthScreenFooter
          userType={'New User?'}
          UserAction={'Create Account'}
          onPress={handleOnPress}
        />
      </View>
    </View>
  );
}

export default LoginScreen;
