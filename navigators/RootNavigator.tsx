import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Color from '../utilities/colors';
import {LoginScreen} from '../screens/LoginScreen';
import {RealmProvider} from '@realm/react';
import {User} from '../utilities/User';

const NativeStack = createNativeStackNavigator();

export function RootNavigator(): React.JSX.Element {
  return (
    <RealmProvider schema={[User]}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <NativeStack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {backgroundColor: Color.yellow},
            headerTintColor: Color.green,
            headerBackTitleStyle: {},
          }}>
          <NativeStack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </NativeStack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  );
}
