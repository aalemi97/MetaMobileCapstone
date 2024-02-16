/**
 *
 * @format
 */

import React from 'react';
import {RootNavigator} from './navigators/RootNavigator';
import {RealmProvider} from '@realm/react';
import {User} from './models/User';
import {MenuItem} from './models/MenuItem';

function App(): React.JSX.Element {
  return (
    <RealmProvider schema={[User, MenuItem]}>
      <RootNavigator />
    </RealmProvider>
  );
}

export default App;
