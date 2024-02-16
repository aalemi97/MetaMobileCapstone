import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import {useRealm, useQuery} from '@realm/react';
import {User} from '../../models/User';
import {MMCButton} from '../../components/MMCButton';
import {MMCLabeledInput} from '../../components/MMCLabeledInput';
import {reducer, createInitialState} from '../login/LoginFormData';
import Color from '../../utilities/colors';

export function ProfileScreen(): React.JSX.Element {
  const [edited, setEdited] = React.useState(false);
  const realm = useRealm();
  const user = useQuery(User)[0];
  const [state, dispatch] = React.useReducer(reducer, createInitialState(user));
  const onSaveChanges = () => {
    const user = realm.objects(User)[0];
    try {
      realm.write(() => {
        user.firstName = state.firstName.value;
        user.lastName = state.lastName.value;
        user.email = state.email.value;
      });
      Alert.alert(
        'Success',
        'You have successfully update your profile information',
        [{text: 'OK', style: 'cancel', onPress: () => setEdited(false)}],
      );
    } catch (error) {
      console.log(error);
    }
  };
  const onLogoutPress = () => {
    Alert.alert(
      'Do you want to Logout?',
      'Once you logged out, all your data will be removed and you will be redirected to Login page.',
      [
        {text: 'Logout', onPress: () => logout(), style: 'destructive'},
        {text: 'Cancel', style: 'cancel'},
      ],
    );
  };
  const logout = () => {
    const user = realm.objects(User)[0];
    try {
      realm.write(() => {
        realm.delete(user);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardDismissMode="interactive" style={{marginTop: 20}}>
        <MMCLabeledInput
          label="First Name"
          placeholder="First Name"
          target={state.firstName}
          errorText="Please enter a valid name!"
          shouldShowError={state.firstName.touched && !state.firstName.valid}
          onChangeText={name => {
            setEdited(true);
            dispatch({
              type: 'set_firstName',
              value: name,
              target: 'firstName',
            });
          }}
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
          onChangeText={name => {
            setEdited(true);
            dispatch({
              type: 'set_lastName',
              value: name,
              target: 'lastName',
            });
          }}
          onBlur={() => {
            dispatch({type: 'set_touched', value: '', target: 'lastName'});
          }}
        />

        <MMCLabeledInput
          label="Email Address"
          placeholder="email@example.ca"
          target={state.email}
          keyboardType="email-address"
          errorText="Please enter a valid email address!"
          shouldShowError={state.email.touched && !state.email.valid}
          onChangeText={email => {
            setEdited(true);
            dispatch({
              type: 'set_email',
              value: email,
              target: 'email',
            });
          }}
          onBlur={() => {
            dispatch({type: 'set_touched', value: '', target: 'email'});
          }}
        />
        <MMCButton
          title="Save Changes"
          onPress={onSaveChanges}
          disabled={
            !(
              state.firstName.valid &&
              state.lastName.valid &&
              state.email.valid
            ) || !edited
          }
        />
        <MMCButton
          title="Logout"
          viewStyle={styles.viewStyle}
          textStyle={styles.textStyle}
          onPress={onLogoutPress}
          disabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.green,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  viewStyle: {
    backgroundColor: Color.destructive,
    width: Dimensions.get('window').width - 40,
    height: 60,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textStyle: {
    color: Color.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
