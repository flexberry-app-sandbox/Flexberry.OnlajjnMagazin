import { Serializer as СобытияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-onlajjn-magazin-события';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СобытияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
