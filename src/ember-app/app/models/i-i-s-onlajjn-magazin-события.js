import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as СобытияMixin
} from '../mixins/regenerated/models/i-i-s-onlajjn-magazin-события';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СобытияMixin, Validations, {
});

export default Model;
