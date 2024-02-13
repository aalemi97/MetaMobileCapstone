import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {MMCButton} from '../components/MMCButton';
import Color from '../utilities/colors';

export function LoginScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <MMCButton
            title="Login"
            disabled={false}
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
});
