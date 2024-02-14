import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/tabs/HomeScreen';
import {ProfileScreen} from '../screens/tabs/ProfileScreen';
import {TabBarIcon} from '../components/TabBarIcon';
import ProfileImageButton from '../components/ProfileImageButton';
import Color from '../utilities/colors';

const Tab = createBottomTabNavigator();

export function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: Color.yellow},
        headerTintColor: Color.green,
        tabBarStyle: {backgroundColor: Color.white},
        tabBarActiveTintColor: Color.green,
        tabBarInactiveTintColor: Color.lightGray,
        tabBarIcon: ({focused, color, size}) => {
          return <TabBarIcon name={route.name} focused={focused} size={size} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <ProfileImageButton
              onPress={() => navigation.navigate('Profile')}
            />
          ),
        })}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
