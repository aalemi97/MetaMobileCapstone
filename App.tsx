/**
 *
 * @format
 */

import React from 'react';
import {RootNavigator} from './navigators/RootNavigator';
import {RealmProvider} from '@realm/react';
import {User} from './utilities/User';

function App(): React.JSX.Element {
  return (
    <RealmProvider schema={[User]}>
      <RootNavigator />
    </RealmProvider>
  );
}

export default App;
