import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  сланцы: DS.belongsTo('i-i-s-onlajjn-magazin-сланцы', { inverse: null, async: false }),
  заказы: DS.belongsTo('i-i-s-onlajjn-magazin-заказы', { inverse: 'заказСланцев', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказ-сланцев.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сланцы: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказ-сланцев.validations.сланцы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказ-сланцев.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказСланцевE', 'i-i-s-onlajjn-magazin-заказ-сланцев', {
    комментарий: attr('Комментарий', { index: 0 }),
    сланцы: belongsTo('i-i-s-onlajjn-magazin-сланцы', 'Сланцы', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
