import Realm, {BSON, ObjectSchema} from 'realm';

export class User extends Realm.Object<User> {
  _id!: BSON.ObjectId;
  firstName!: string;
  lastName!: string;
  email!: string;
  static schema: ObjectSchema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      firstName: 'string',
      lastName: 'string',
      email: 'string',
    },
    primaryKey: '_id',
  };
}
