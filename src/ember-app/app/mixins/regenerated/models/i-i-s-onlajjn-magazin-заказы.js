import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  колво: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типВручения: DS.attr('i-i-s-onlajjn-magazin-тип-получения'),
  типОплаты: DS.attr('i-i-s-onlajjn-magazin-тип-оплаты'),
  адрес: DS.belongsTo('i-i-s-onlajjn-magazin-адрес', { inverse: null, async: false }),
  клиенты: DS.belongsTo('i-i-s-onlajjn-magazin-клиенты', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-onlajjn-magazin-сотрудник', { inverse: null, async: false }),
  заказТапочек: DS.hasMany('i-i-s-onlajjn-magazin-заказ-тапочек', { inverse: 'заказы', async: false }),
  заказСланцев: DS.hasMany('i-i-s-onlajjn-magazin-заказ-сланцев', { inverse: 'заказы', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колво: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типВручения: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.типВручения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказТапочек: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.заказТапочек.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заказСланцев: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-заказы.validations.заказСланцев.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-onlajjn-magazin-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    типВручения: attr('Тип вручения', { index: 3 }),
    колво: attr('Колво', { index: 4 }),
    комментарий: attr('Комментарий', { index: 5 }),
    сумма: attr('Сумма', { index: 6 }),
    клиенты: belongsTo('i-i-s-onlajjn-magazin-клиенты', 'Клиенты', {
      фамилия: attr('Фамилия', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' }),
    адрес: belongsTo('i-i-s-onlajjn-magazin-адрес', 'Адрес', {
      город: attr('Город', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'город' }),
    сотрудник: belongsTo('i-i-s-onlajjn-magazin-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'фамилия' }),
    заказТапочек: hasMany('i-i-s-onlajjn-magazin-заказ-тапочек', 'Заказ тапочек', {
      комментарий: attr('Комментарий', { index: 0 }),
      тапочки: belongsTo('i-i-s-onlajjn-magazin-тапочки', 'Тапочки', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    }),
    заказСланцев: hasMany('i-i-s-onlajjn-magazin-заказ-сланцев', 'Заказ сланцев', {
      комментарий: attr('Комментарий', { index: 0 }),
      сланцы: belongsTo('i-i-s-onlajjn-magazin-сланцы', 'Сланцы', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-onlajjn-magazin-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    типОплаты: attr('Тип оплаты', { index: 2 }),
    типВручения: attr('Тип вручения', { index: 3 }),
    колво: attr('Колво', { index: 4 }),
    комментарий: attr('Комментарий', { index: 5 }),
    сумма: attr('Сумма', { index: 6 }),
    клиенты: belongsTo('i-i-s-onlajjn-magazin-клиенты', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 7 })
    }, { index: -1, hidden: true }),
    адрес: belongsTo('i-i-s-onlajjn-magazin-адрес', 'Город', {
      город: attr('Город', { index: 8 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-onlajjn-magazin-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
