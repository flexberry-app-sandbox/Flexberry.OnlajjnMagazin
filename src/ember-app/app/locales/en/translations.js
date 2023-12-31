import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOnlajjn_magazinАдресLForm from './forms/i-i-s-onlajjn-magazin-адрес-l';
import IISOnlajjn_magazinДолжностьLForm from './forms/i-i-s-onlajjn-magazin-должность-l';
import IISOnlajjn_magazinЗаказыLForm from './forms/i-i-s-onlajjn-magazin-заказы-l';
import IISOnlajjn_magazinКатегорияLForm from './forms/i-i-s-onlajjn-magazin-категория-l';
import IISOnlajjn_magazinКлиентыLForm from './forms/i-i-s-onlajjn-magazin-клиенты-l';
import IISOnlajjn_magazinСланцыLForm from './forms/i-i-s-onlajjn-magazin-сланцы-l';
import IISOnlajjn_magazinСотрудникLForm from './forms/i-i-s-onlajjn-magazin-сотрудник-l';
import IISOnlajjn_magazinТапочкиLForm from './forms/i-i-s-onlajjn-magazin-тапочки-l';
import IISOnlajjn_magazinАдресEForm from './forms/i-i-s-onlajjn-magazin-адрес-e';
import IISOnlajjn_magazinДолжностьEForm from './forms/i-i-s-onlajjn-magazin-должность-e';
import IISOnlajjn_magazinЗаказыEForm from './forms/i-i-s-onlajjn-magazin-заказы-e';
import IISOnlajjn_magazinКатегорияEForm from './forms/i-i-s-onlajjn-magazin-категория-e';
import IISOnlajjn_magazinКлиентыEForm from './forms/i-i-s-onlajjn-magazin-клиенты-e';
import IISOnlajjn_magazinСланцыEForm from './forms/i-i-s-onlajjn-magazin-сланцы-e';
import IISOnlajjn_magazinСотрудникEForm from './forms/i-i-s-onlajjn-magazin-сотрудник-e';
import IISOnlajjn_magazinТапочкиEForm from './forms/i-i-s-onlajjn-magazin-тапочки-e';
import IISOnlajjn_magazinАдресModel from './models/i-i-s-onlajjn-magazin-адрес';
import IISOnlajjn_magazinДолжностьModel from './models/i-i-s-onlajjn-magazin-должность';
import IISOnlajjn_magazinЗаказСланцевModel from './models/i-i-s-onlajjn-magazin-заказ-сланцев';
import IISOnlajjn_magazinЗаказТапочекModel from './models/i-i-s-onlajjn-magazin-заказ-тапочек';
import IISOnlajjn_magazinЗаказыModel from './models/i-i-s-onlajjn-magazin-заказы';
import IISOnlajjn_magazinКатегорияModel from './models/i-i-s-onlajjn-magazin-категория';
import IISOnlajjn_magazinКлиентыModel from './models/i-i-s-onlajjn-magazin-клиенты';
import IISOnlajjn_magazinСланцыModel from './models/i-i-s-onlajjn-magazin-сланцы';
import IISOnlajjn_magazinСобытияModel from './models/i-i-s-onlajjn-magazin-события';
import IISOnlajjn_magazinСотрудникModel from './models/i-i-s-onlajjn-magazin-сотрудник';
import IISOnlajjn_magazinТапочкиModel from './models/i-i-s-onlajjn-magazin-тапочки';
import IISOnlajjn_magazinХарСланцевModel from './models/i-i-s-onlajjn-magazin-хар-сланцев';
import IISOnlajjn_magazinХарТапочекModel from './models/i-i-s-onlajjn-magazin-хар-тапочек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-onlajjn-magazin-адрес': IISOnlajjn_magazinАдресModel,
    'i-i-s-onlajjn-magazin-должность': IISOnlajjn_magazinДолжностьModel,
    'i-i-s-onlajjn-magazin-заказ-сланцев': IISOnlajjn_magazinЗаказСланцевModel,
    'i-i-s-onlajjn-magazin-заказ-тапочек': IISOnlajjn_magazinЗаказТапочекModel,
    'i-i-s-onlajjn-magazin-заказы': IISOnlajjn_magazinЗаказыModel,
    'i-i-s-onlajjn-magazin-категория': IISOnlajjn_magazinКатегорияModel,
    'i-i-s-onlajjn-magazin-клиенты': IISOnlajjn_magazinКлиентыModel,
    'i-i-s-onlajjn-magazin-сланцы': IISOnlajjn_magazinСланцыModel,
    'i-i-s-onlajjn-magazin-события': IISOnlajjn_magazinСобытияModel,
    'i-i-s-onlajjn-magazin-сотрудник': IISOnlajjn_magazinСотрудникModel,
    'i-i-s-onlajjn-magazin-тапочки': IISOnlajjn_magazinТапочкиModel,
    'i-i-s-onlajjn-magazin-хар-сланцев': IISOnlajjn_magazinХарСланцевModel,
    'i-i-s-onlajjn-magazin-хар-тапочек': IISOnlajjn_magazinХарТапочекModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'onlajjn-magazin': {
          caption: 'Onlajjn_magazin',
          title: 'Onlajjn_magazin',
          'i-i-s-onlajjn-magazin-сланцы-l': {
            caption: 'Сланцы',
            title: ''
          },
          'i-i-s-onlajjn-magazin-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-onlajjn-magazin-тапочки-l': {
            caption: 'Тапочки',
            title: ''
          },
          'i-i-s-onlajjn-magazin-категория-l': {
            caption: 'Категория',
            title: ''
          },
          'i-i-s-onlajjn-magazin-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-onlajjn-magazin-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-onlajjn-magazin-заказы-l': {
            caption: 'Заказы',
            title: ''
          },
          'i-i-s-onlajjn-magazin-адрес-l': {
            caption: 'Адрес',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-onlajjn-magazin-адрес-l': IISOnlajjn_magazinАдресLForm,
    'i-i-s-onlajjn-magazin-должность-l': IISOnlajjn_magazinДолжностьLForm,
    'i-i-s-onlajjn-magazin-заказы-l': IISOnlajjn_magazinЗаказыLForm,
    'i-i-s-onlajjn-magazin-категория-l': IISOnlajjn_magazinКатегорияLForm,
    'i-i-s-onlajjn-magazin-клиенты-l': IISOnlajjn_magazinКлиентыLForm,
    'i-i-s-onlajjn-magazin-сланцы-l': IISOnlajjn_magazinСланцыLForm,
    'i-i-s-onlajjn-magazin-сотрудник-l': IISOnlajjn_magazinСотрудникLForm,
    'i-i-s-onlajjn-magazin-тапочки-l': IISOnlajjn_magazinТапочкиLForm,
    'i-i-s-onlajjn-magazin-адрес-e': IISOnlajjn_magazinАдресEForm,
    'i-i-s-onlajjn-magazin-должность-e': IISOnlajjn_magazinДолжностьEForm,
    'i-i-s-onlajjn-magazin-заказы-e': IISOnlajjn_magazinЗаказыEForm,
    'i-i-s-onlajjn-magazin-категория-e': IISOnlajjn_magazinКатегорияEForm,
    'i-i-s-onlajjn-magazin-клиенты-e': IISOnlajjn_magazinКлиентыEForm,
    'i-i-s-onlajjn-magazin-сланцы-e': IISOnlajjn_magazinСланцыEForm,
    'i-i-s-onlajjn-magazin-сотрудник-e': IISOnlajjn_magazinСотрудникEForm,
    'i-i-s-onlajjn-magazin-тапочки-e': IISOnlajjn_magazinТапочкиEForm
  },

});

export default translations;
