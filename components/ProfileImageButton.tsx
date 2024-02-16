import React from 'react';
import {Image, Pressable} from 'react-native';

type ProfileImageButtonProps = {
  onPress: () => void;
};

export default function ProfileImageButton({
  onPress,
}: ProfileImageButtonProps): React.JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <Image
        style={{width: 35, height: 35, marginRight: 10, marginBottom: 5}}
        source={require('../assets/person.circle.fill.png')}
      />
    </Pressable>
  );
}
