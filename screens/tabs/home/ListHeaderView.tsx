import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import Color from '../../../utilities/colors';
import {ListSubHeaderView} from './ListSubHeaderView';
import {Category} from '../../../models/Category';

export function ListHeaderView({
  onPress,
}: {
  onPress: (category: Category) => void;
}): React.JSX.Element {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Little Lemon</Text>
          <Text style={styles.subtitle}>Chicago</Text>
          <Text style={styles.content}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
        </View>
        <Image
          style={styles.image}
          source={require('../../../assets/logo.png')}
        />
      </View>
      <ListSubHeaderView onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 466,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.lightGray,
    height: 324,
    width: Dimensions.get('window').width,
    alignSelf: 'center',
  },
  titleView: {
    flex: 0.9,
    margin: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.gray,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.gray,
  },
  content: {
    fontSize: 18,
    color: Color.gray,
    marginTop: 20,
    textAlign: 'justify',
    marginRight: 10,
  },
  image: {
    width: 140,
    height: 171,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});
