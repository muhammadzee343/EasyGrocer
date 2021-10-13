import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FullnameIcon from '../Assets/icons/FullnameIcon';
import {Dark, text_grey} from '../Assets/themes/colors';
import {FONT_ROBOTO, FONT_SIZE_h6} from '../Assets/themes/fonts';

export default function CustomTextInput(props) {
  return (
    <View style={styles.container}>
      <View style={styles.fullnameContainer}>
        <View>
          <FullnameIcon />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.fullnameTextStyle}>{props.title}</Text>
        </View>
      </View>
      <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
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
    height: 40,
    // margin: 12,
    borderBottomWidth: 1,
    width: '90%',
    borderColor: text_grey,
    fontSize: FONT_SIZE_h6,
  },
});
