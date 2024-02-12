/**
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import Color from './utilities/colors';

function App(): React.JSX.Element {
  return (
    <View style={{backgroundColor: Color.green, flex: 1}}>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

export default App;
