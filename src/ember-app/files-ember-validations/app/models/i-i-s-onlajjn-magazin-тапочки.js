import {
  defineNamespace,
  defineProjections,
  Model as ТапочкиMixin
} from '../mixins/regenerated/models/i-i-s-onlajjn-magazin-тапочки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТапочкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
