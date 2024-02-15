import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';
import Color from '../utilities/colors';

type MMCButtonProps = {
  title: string;
  disabled: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

export function MMCButton({
  title,
  onPress,
  disabled,
}: MMCButtonProps): React.JSX.Element {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View style={disabled ? styles.viewDisabled : styles.view}>
        <Text style={disabled ? styles.textDisabled : styles.text}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.yellow,
    width: Dimensions.get('window').width - 40,
    height: 60,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Color.green,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewDisabled: {
    backgroundColor: Color.gray,
    width: Dimensions.get('window').width - 40,
    height: 60,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textDisabled: {
    color: Color.yellow,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
