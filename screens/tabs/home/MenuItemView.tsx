import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Color from '../../../utilities/colors';
import {MenuItem} from '../../../models/MenuItem';

type MenuItemViewProps = {
  menuItem: MenuItem;
};

export function MenuItemView({menuItem}: MenuItemViewProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{menuItem.title}</Text>
        <Text style={styles.description}>{menuItem.description}</Text>
        <Text style={styles.price}>${menuItem.price}</Text>
      </View>
      <Image
        style={styles.image}
        source={{uri: menuItem.image}}
        defaultSource={require('../../../assets/photo.circle.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  content: {flex: 1, flexDirection: 'column', gap: 10, marginRight: 15},
  title: {color: Color.gray, fontSize: 20},
  description: {color: Color.gray, fontSize: 16},
  price: {color: Color.gray, fontSize: 20},
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 15,
    alignSelf: 'center',
  },
});
