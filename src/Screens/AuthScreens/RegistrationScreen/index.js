import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EyeIcon from '../../../Assets/icons/EyeIcon';
import ProceedIcon from '../../../Assets/icons/PorceedIcon';
import {button_backgroun, white} from '../../../Assets/themes/colors';
import {FONT_ROBOTO} from '../../../Assets/themes/fonts';
import AuthScreenFooter from '../../../Components/AuthScreenFooter';
import {GradientBtn} from '../../../Components/GradientBtn';
import SquareTextInput from '../../../Components/SquareTextInput';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

function RegistrationScreen(props) {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIconStatus, setPasswordIconStatus] = React.useState(false);
  const onChangeEmail = value => {
    setEmail(value);
  };
  const onChangeUserName = value => {
    setUserName(value);
  };
  const onChangeMobileNumber = value => {
    setMobileNumber(value);
  };
  const onChangePassword = value => {
    setPassword(value);
  };
  const handlePasswordIconPress = () => {
    setPasswordIconStatus(!passwordIconStatus);
  };
  const handleOnPress = () => {
    // console.log('navigation', navigation);
    props.navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={button_backgroun} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextStyle}>EASY GROCER</Text>
      </View>
      <View style={styles.decriptionContianer}>
        <ScrollView style={{marginTop: 20}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.titleTextStyle}>Create Your Account</Text>
            <SquareTextInput
              Title={'EMAIL'}
              onChangeText={onChangeEmail}
              placeholder={'Email'}
              value={email}
              editable={true}
              //   autoFocus={true}
            />
            <SquareTextInput
              Title={'USERNAME'}
              onChangeText={onChangeUserName}
              placeholder={'User Name'}
              value={userName}
              editable={true}
            />
            <SquareTextInput
              Title={'Mobile Number'}
              onChangeText={onChangeMobileNumber}
              placeholder={'Mobile Number'}
              value={mobileNumber}
              editable={true}
              keyboardType="phone-pad"
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
            <TouchableOpacity style={styles.processBtnContainer}>
              <GradientBtn
                name="GET STARTED"
                squareWithCenter
                customWidth={'70%'}
                squareBtnRightIcon={<ProceedIcon />}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <AuthScreenFooter
          userType={'Existing User?'}
          UserAction={'Login'}
          onPress={handleOnPress}
        />
      </View>
    </View>
  );
}

export default RegistrationScreen;
