import React from 'react';
import {
  Text,
  TextInput,
  View,
  Dimensions,
  NativeSyntheticEvent,
  KeyboardTypeOptions,
  TextInputFocusEventData,
  StyleSheet,
} from 'react-native';
import Color from '../utilities/colors';
import {MMCTarget} from '../screens/login/LoginFormData';

type MMCLabeledInputProps = {
  label: string;
  placeholder: string;
  target: MMCTarget;
  keyboardType?: KeyboardTypeOptions;
  errorText: string;
  shouldShowError: boolean;
  onChangeText: (text: string) => void;
  onBlur: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};

export function MMCLabeledInput({
  label,
  placeholder,
  target,
  keyboardType,
  errorText,
  shouldShowError,
  onChangeText,
  onBlur,
}: MMCLabeledInputProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={target.value}
        clearButtonMode="while-editing"
        onChangeText={onChangeText}
        onBlur={onBlur}
        keyboardType={keyboardType}
      />
      {shouldShowError && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 40,
  },
  text: {color: Color.white, fontSize: 20, fontWeight: '600'},
  input: {
    backgroundColor: Color.white,
    width: Dimensions.get('window').width - 40,
    height: 60,
    borderRadius: 15,
    padding: 10,
    fontSize: 25,
    fontWeight: '600',
  },
  error: {
    fontSize: 15,
    color: Color.red,
  },
});
