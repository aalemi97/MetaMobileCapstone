import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Color from '../../../utilities/colors';
import {ListSubHeaderView} from './ListSubHeaderView';
import {Category} from '../../../models/Category';

export function ListHeaderView({
  onChangeText,
  onPress,
}: {
  onChangeText: (text: string) => void;
  onPress: (category: Category) => void;
}): React.JSX.Element {
  return (
    <View>
      <View style={styles.container}>
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
            source={require('../../../assets/hero.png')}
          />
        </View>
        <View style={styles.search}>
          <Image
            style={styles.icon}
            source={require('../../../assets/magnifyingglass.png')}
          />
          <TextInput style={styles.input} onChangeText={onChangeText} />
        </View>
      </View>
      <ListSubHeaderView onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Color.green,
    height: 324,
  },
  search: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
    height: 40,
    alignSelf: 'center',
    alignContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
  input: {
    // backgroundColor: Color.gray,
    width: Dimensions.get('window').width - 75,
    height: 40,
    padding: 10,
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
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
    color: Color.yellow,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.white,
  },
  content: {
    fontSize: 18,
    color: Color.white,
    marginTop: 20,
    textAlign: 'justify',
    marginRight: 10,
  },
  image: {
    width: 140,
    height: 171,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 20,
  },
});
