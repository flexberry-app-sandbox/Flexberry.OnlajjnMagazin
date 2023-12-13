import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  размер: DS.attr('number'),
  категория: DS.belongsTo('i-i-s-onlajjn-magazin-категория', { inverse: null, async: false }),
  тапочки: DS.belongsTo('i-i-s-onlajjn-magazin-тапочки', { inverse: 'харТапочек', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-хар-тапочек.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  размер: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-хар-тапочек.validations.размер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  категория: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-хар-тапочек.validations.категория.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тапочки: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-хар-тапочек.validations.тапочки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХарТапочекE', 'i-i-s-onlajjn-magazin-хар-тапочек', {
    количество: attr('Количество', { index: 0 }),
    размер: attr('Размер', { index: 1 }),
    категория: belongsTo('i-i-s-onlajjn-magazin-категория', 'Категория', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });
};
