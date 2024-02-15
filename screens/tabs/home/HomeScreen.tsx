import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
import Color from '../../../utilities/colors';
import {ListHeaderView} from './ListHeaderView';
import {MenuItemView} from './MenuItemView';

export function HomeScreen(): React.JSX.Element {
  const [menuItems, setMenuItems] = React.useState([]);
  const getMenuItems = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu.json',
      );
      const json = await response.json();
      setMenuItems(json.menu);
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
        ListHeaderComponent={<ListHeaderView onPress={() => {}} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: Color.lightGray,
  },
});
