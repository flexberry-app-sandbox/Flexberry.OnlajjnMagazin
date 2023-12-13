import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипПолученияEnum from '../enums/i-i-s-onlajjn-magazin-тип-получения';

export default FlexberryEnum.extend({
  enum: ТипПолученияEnum,
  sourceType: 'IIS.Onlajjn_magazin.ТипПолучения'
});
