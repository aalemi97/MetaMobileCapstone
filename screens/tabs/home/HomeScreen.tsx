import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import Color from '../../../utilities/colors';
import {ListHeaderView} from './ListHeaderView';

export function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <FlatList
        data={null}
        renderItem={null}
        ListHeaderComponent={<ListHeaderView onPress={() => {}} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
