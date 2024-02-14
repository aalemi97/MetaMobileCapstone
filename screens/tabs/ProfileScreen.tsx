import React from 'react';
import {Text} from 'react-native';
import {useRealm, useQuery} from '@realm/react';
import {User} from '../../utilities/User';
import {MMCButton} from '../../components/MMCButton';

export function ProfileScreen(): React.JSX.Element {
  const realm = useRealm();
  const logout = () => {
    const user = realm.objects(User)[0];
    realm.write(() => {
      realm.delete(user);
    });
  };
  return <MMCButton title="Logout" onPress={logout} disabled={false} />;
}
