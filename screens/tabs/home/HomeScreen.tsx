import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {useRealm} from '@realm/react';
import Color from '../../../utilities/colors';
import {ListHeaderView} from './ListHeaderView';
import {MenuItemView} from './MenuItemView';
import {MenuItem} from '../../../models/MenuItem';
import {Category} from '../../../models/Category';

export function HomeScreen(): React.JSX.Element {
  const realm = useRealm();
  const [category, setCategory] = React.useState(Category.all);
  const [menuItems, setMenuItems] = React.useState([
    ...realm.objects(MenuItem),
  ]);
  const searchCategory = (category: Category): MenuItem[] => {
    const items = [...realm.objects(MenuItem)];
    setCategory(category);
    if (category == Category.all) {
      return items;
    } else {
      return items.filter(item => {
        return item.category == category.toLocaleLowerCase();
      });
    }
  };
  const onSearch = (text: string) => {
    const items = searchCategory(category);
    const searchText = text.trim();
    if (searchText !== '') {
      setMenuItems(items.filter(item => item.title.includes(searchText)));
    } else {
      setMenuItems(items);
    }
    return;
  };
  const onCategoryPress = (category: Category) => {
    setMenuItems(searchCategory(category));
  };

  const addItems = (items: [MenuItem]) => {
    realm.write(() => {
      items.forEach(item => realm.create(MenuItem, item));
    });
  };
  const getMenuItems = async () => {
    try {
      realm.addListener('change', () =>
        setMenuItems([...realm.objects(MenuItem)]),
      );
      const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu.json',
      );
      const json = await response.json();
      addItems(json.menu);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getMenuItems();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <MenuItemView menuItem={item} />}
        ListHeaderComponent={
          <ListHeaderView onChangeText={onSearch} onPress={onCategoryPress} />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  separator: {
    height: 1,
    backgroundColor: Color.lightGray,
  },
});
