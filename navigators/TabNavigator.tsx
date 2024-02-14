import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/tabs/HomeScreen';
import {ProfileScreen} from '../screens/tabs/ProfileScreen';
import Color from '../utilities/colors';

const Tab = createBottomTabNavigator();

export function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Color.yellow},
        headerTintColor: Color.green,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
