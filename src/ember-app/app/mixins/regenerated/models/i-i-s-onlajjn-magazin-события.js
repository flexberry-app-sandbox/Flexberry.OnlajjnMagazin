import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  код: DS.attr('number'),
  описание: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-события.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-onlajjn-magazin-события.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
