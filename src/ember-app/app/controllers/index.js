import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.onlajjn-magazin.caption'),
          title: i18n.t('forms.application.sitemap.onlajjn-magazin.title'),
          children: [{
            link: 'i-i-s-onlajjn-magazin-сланцы-l',
            caption: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-сланцы-l.caption'),
            title: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-сланцы-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-onlajjn-magazin-должность-l',
            caption: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-onlajjn-magazin-тапочки-l',
            caption: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-тапочки-l.caption'),
            title: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-тапочки-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-onlajjn-magazin-категория-l',
            caption: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-категория-l.caption'),
            title: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-категория-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-onlajjn-magazin-клиенты-l',
            caption: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-клиенты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-onlajjn-magazin-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-сотрудник-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-onlajjn-magazin-заказы-l',
            caption: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-заказы-l.caption'),
            title: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-заказы-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-onlajjn-magazin-адрес-l',
            caption: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-адрес-l.caption'),
            title: i18n.t('forms.application.sitemap.onlajjn-magazin.i-i-s-onlajjn-magazin-адрес-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})