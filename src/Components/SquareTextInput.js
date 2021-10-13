import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {FONT_ROBOTO, FONT_SIZE_h6, FONT_SIZE_h7} from '../Assets/themes/fonts';
import {button_backgroun, text_grey, Dark} from '../Assets/themes/colors';
import HiddenPasswordIcon from '../Assets/icons/HiddenPassword';

export default function SquareTextInput(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{props.Title}</Text>
      <View style={styles.inputBoxContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              props.onChangeText(text);
            }}
            placeholder={props.placeHolder}
            keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            value={props.value}
            editable={props.isEditable ? props.isEditable : true}
            autoCapitalize={
              props.autoCapitalize ? props.autoCapitalize : 'sentences'
            }
            autoCorrect={props.autoCorrect ? props.autoCorrect : true}
            autoFocus={props.autoFocus ? props.autoFocus : false}
            clearTextOnFocus={
              props.clearTextOnFocus ? props.clearTextOnFocus : false
            }
            keyboardAppearance={
              props.keyboardAppearance ? props.keyboardAppearance : 'default'
            }
            secureTextEntry={
              props.secureTextEntry ? props.secureTextEntry : false
            }
            textAlign={props.textAlign ? props.textAlign : 'left'}
          />
        </View>
        <TouchableOpacity
          style={styles.rightIconContainer}
          onPress={props.passwordIconPress}>
          {props.rightIcon ? (
            props.passwordIconStatus ? (
              props.rightIcon
            ) : (
              <HiddenPasswordIcon iconColor={button_backgroun} />
            )
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  titleTextStyle: {
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h7,
    color: button_backgroun,
  },
  inputBoxContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: button_backgroun,
    borderRadius: 10,
    marginTop: 5,
  },
  inputContainer: {
    width: '82%',
  },
  fullnameContainer: {
    flexDirection: 'row',
  },
  fullnameTextStyle: {
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h6,
    color: Dark,
  },
  input: {
    // height: 40,
    // margin: 12,
    // width: '90%',
    fontSize: FONT_SIZE_h6,
    padding: 10,
  },
  rightIconContainer: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '15%',
  },
});
