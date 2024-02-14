import React from 'react';
import {Image} from 'react-native';

export function TabBarIcon({
  name,
  focused,
  size,
}: {
  name: string;
  focused: boolean;
  size: number;
}): React.JSX.Element {
  if (name === 'Home') {
    if (focused) {
      return (
        <Image
          style={{width: size, height: size}}
          source={require('../assets/house.circle.fill.png')}
        />
      );
    } else {
      return (
        <Image
          style={{width: size, height: size}}
          source={require('../assets/house.circle.png')}
        />
      );
    }
  } else if (name === 'Profile') {
    if (focused) {
      return (
        <Image
          style={{width: size, height: size}}
          source={require('../assets/person.circle.fill.png')}
        />
      );
    } else {
      return (
        <Image
          style={{width: size, height: size}}
          source={require('../assets/person.circle.png')}
        />
      );
    }
  }
  return <Image />;
}
