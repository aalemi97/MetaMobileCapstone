import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {MMCButton} from '../components/MMCButton';
import Color from '../utilities/colors';
import {MMCLabeledInput} from '../components/MMCLabeledInput';
import {createInitialState, reducer} from './LoginFormData';

export function LoginScreen(): React.JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, createInitialState());
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}>
        <ScrollView keyboardDismissMode="interactive">
          <Text style={styles.title}>Welcome! Please login to continue</Text>
          <MMCLabeledInput
            label="First Name"
            placeholder="First Name"
            target={state.firstName}
            errorText="Please enter a valid name!"
            shouldShowError={state.firstName.touched && !state.firstName.valid}
            onChangeText={name =>
              dispatch({
                type: 'set_firstName',
                value: name,
                target: 'firstName',
              })
            }
            onBlur={() => {
              dispatch({type: 'set_touched', value: '', target: 'firstName'});
            }}
          />
          <MMCLabeledInput
            label="Last Name"
            placeholder="Last Name"
            target={state.lastName}
            errorText="Please enter a valid last name!"
            shouldShowError={state.lastName.touched && !state.lastName.valid}
            onChangeText={name =>
              dispatch({
                type: 'set_lastName',
                value: name,
                target: 'lastName',
              })
            }
            onBlur={() => {
              dispatch({type: 'set_touched', value: '', target: 'lastName'});
            }}
          />

          <MMCLabeledInput
            label="Email Address"
            placeholder="email@example.ca"
            target={state.email}
            errorText="Please enter a valid email address!"
            shouldShowError={state.email.touched && !state.email.valid}
            onChangeText={email =>
              dispatch({
                type: 'set_email',
                value: email,
                target: 'email',
              })
            }
            onBlur={() => {
              dispatch({type: 'set_touched', value: '', target: 'email'});
            }}
          />

          <MMCButton
            title="Login"
            disabled={
              !(
                state.firstName.valid &&
                state.lastName.valid &&
                state.email.valid
              )
            }
            onPress={event => {
              console.log(event);
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.green, justifyContent: 'center'},
  title: {
    color: Color.yellow,
    textAlign: 'center',
    margin: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
});