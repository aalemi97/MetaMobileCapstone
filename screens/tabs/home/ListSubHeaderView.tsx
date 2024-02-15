import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import Color from '../../../utilities/colors';

export enum Category {
  all = 'All',
  dessert = 'Desserts',
  main = 'Mains',
  starter = 'Starters',
}
const categories = [
  Category.all,
  Category.dessert,
  Category.main,
  Category.starter,
];

export function ListSubHeaderView({
  onPress,
}: {
  onPress: (category: Category) => void;
}): React.JSX.Element {
  const [active, setActive] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Out for Delivery</Text>
        <Image
          style={styles.image}
          source={require('../../../assets/delivery.png')}
        />
      </View>
      <View style={styles.categoriesView}>
        {categories.map((category, index) => (
          <Pressable
            style={active === index ? styles.categoryActive : styles.category}
            onPress={() => {
              setActive(index);
              onPress(category);
            }}>
            <Text numberOfLines={2} style={styles.categoryTitle}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 142,
  },
  titleView: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  categoriesView: {
    flex: 0.7,
    flexDirection: 'row',
    gap: 15,
    alignSelf: 'center',
  },
  category: {
    width: (Dimensions.get('window').width - 85) / 4,
    height: 40,
    backgroundColor: Color.white,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  categoryActive: {
    width: (Dimensions.get('window').width - 85) / 4,
    height: 40,
    backgroundColor: Color.lightGray,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Color.green,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.gray,
    alignSelf: 'center',
    marginRight: 20,
  },
  image: {
    width: 56,
    height: 42,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
