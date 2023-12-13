import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодСланцев: DS.attr('number'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  харСланцев: DS.hasMany('i-i-s-onlajjn-magazin-хар-сланцев', { inverse: 'сланцы', async: false })
});

export let ValidationRules = {
  кодСланцев: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-сланцы.validations.кодСланцев.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-сланцы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-сланцы.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  харСланцев: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-сланцы.validations.харСланцев.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СланцыE', 'i-i-s-onlajjn-magazin-сланцы', {
    кодСланцев: attr('Код сланцев', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    харСланцев: hasMany('i-i-s-onlajjn-magazin-хар-сланцев', 'Хар сланцев', {
      количество: attr('Количество', { index: 0 }),
      размер: attr('Размер', { index: 1 }),
      категория: belongsTo('i-i-s-onlajjn-magazin-категория', 'Категория', {
        наименование: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('СланцыL', 'i-i-s-onlajjn-magazin-сланцы', {
    кодСланцев: attr('Код сланцев', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};
