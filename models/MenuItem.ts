import Realm, {ObjectSchema} from 'realm';

export class MenuItem extends Realm.Object<MenuItem> {
  id!: number;
  title!: string;
  description!: string;
  price!: string;
  image!: string;
  category!: string;
  static schema: ObjectSchema = {
    name: 'MenuItem',
    properties: {
      id: 'int',
      title: 'string',
      description: 'string',
      price: 'string',
      image: 'string',
      category: 'string',
    },
    primaryKey: 'id',
  };
}
