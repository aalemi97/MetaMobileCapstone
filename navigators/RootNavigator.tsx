import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useQuery} from '@realm/react';
import {User} from '../utilities/User';
import {LoginScreen} from '../screens/login/LoginScreen';
import {TabNavigator} from './TabNavigator';
import Color from '../utilities/colors';

const NativeStack = createNativeStackNavigator();

export function RootNavigator(): React.JSX.Element {
  const users = useQuery(User);
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <NativeStack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Color.yellow},
          headerTintColor: Color.green,
          headerBackTitleStyle: {},
          gestureEnabled: false,
        }}>
        {users[0] ? (
          <NativeStack.Screen
            name="Tab Bar"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <NativeStack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
