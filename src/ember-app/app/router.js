import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-onlajjn-magazin-адрес-l');
  this.route('i-i-s-onlajjn-magazin-адрес-e',
  { path: 'i-i-s-onlajjn-magazin-адрес-e/:id' });
  this.route('i-i-s-onlajjn-magazin-адрес-e.new',
  { path: 'i-i-s-onlajjn-magazin-адрес-e/new' });
  this.route('i-i-s-onlajjn-magazin-должность-l');
  this.route('i-i-s-onlajjn-magazin-должность-e',
  { path: 'i-i-s-onlajjn-magazin-должность-e/:id' });
  this.route('i-i-s-onlajjn-magazin-должность-e.new',
  { path: 'i-i-s-onlajjn-magazin-должность-e/new' });
  this.route('i-i-s-onlajjn-magazin-заказы-l');
  this.route('i-i-s-onlajjn-magazin-заказы-e',
  { path: 'i-i-s-onlajjn-magazin-заказы-e/:id' });
  this.route('i-i-s-onlajjn-magazin-заказы-e.new',
  { path: 'i-i-s-onlajjn-magazin-заказы-e/new' });
  this.route('i-i-s-onlajjn-magazin-категория-l');
  this.route('i-i-s-onlajjn-magazin-категория-e',
  { path: 'i-i-s-onlajjn-magazin-категория-e/:id' });
  this.route('i-i-s-onlajjn-magazin-категория-e.new',
  { path: 'i-i-s-onlajjn-magazin-категория-e/new' });
  this.route('i-i-s-onlajjn-magazin-клиенты-l');
  this.route('i-i-s-onlajjn-magazin-клиенты-e',
  { path: 'i-i-s-onlajjn-magazin-клиенты-e/:id' });
  this.route('i-i-s-onlajjn-magazin-клиенты-e.new',
  { path: 'i-i-s-onlajjn-magazin-клиенты-e/new' });
  this.route('i-i-s-onlajjn-magazin-сланцы-l');
  this.route('i-i-s-onlajjn-magazin-сланцы-e',
  { path: 'i-i-s-onlajjn-magazin-сланцы-e/:id' });
  this.route('i-i-s-onlajjn-magazin-сланцы-e.new',
  { path: 'i-i-s-onlajjn-magazin-сланцы-e/new' });
  this.route('i-i-s-onlajjn-magazin-сотрудник-l');
  this.route('i-i-s-onlajjn-magazin-сотрудник-e',
  { path: 'i-i-s-onlajjn-magazin-сотрудник-e/:id' });
  this.route('i-i-s-onlajjn-magazin-сотрудник-e.new',
  { path: 'i-i-s-onlajjn-magazin-сотрудник-e/new' });
  this.route('i-i-s-onlajjn-magazin-тапочки-l');
  this.route('i-i-s-onlajjn-magazin-тапочки-e',
  { path: 'i-i-s-onlajjn-magazin-тапочки-e/:id' });
  this.route('i-i-s-onlajjn-magazin-тапочки-e.new',
  { path: 'i-i-s-onlajjn-magazin-тапочки-e/new' });
});

export default Router;
