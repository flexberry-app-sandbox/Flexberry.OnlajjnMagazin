import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаказСланцевMixin
} from '../mixins/regenerated/models/i-i-s-onlajjn-magazin-заказ-сланцев';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаказСланцевMixin, Validations, {
});

defineProjections(Model);

export default Model;
