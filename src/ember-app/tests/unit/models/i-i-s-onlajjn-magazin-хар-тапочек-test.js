import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-onlajjn-magazin-хар-тапочек', 'Unit | Model | i-i-s-onlajjn-magazin-хар-тапочек', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-onlajjn-magazin-адрес',
    'model:i-i-s-onlajjn-magazin-должность',
    'model:i-i-s-onlajjn-magazin-заказ-сланцев',
    'model:i-i-s-onlajjn-magazin-заказ-тапочек',
    'model:i-i-s-onlajjn-magazin-заказы',
    'model:i-i-s-onlajjn-magazin-категория',
    'model:i-i-s-onlajjn-magazin-клиенты',
    'model:i-i-s-onlajjn-magazin-сланцы',
    'model:i-i-s-onlajjn-magazin-события',
    'model:i-i-s-onlajjn-magazin-сотрудник',
    'model:i-i-s-onlajjn-magazin-тапочки',
    'model:i-i-s-onlajjn-magazin-хар-сланцев',
    'model:i-i-s-onlajjn-magazin-хар-тапочек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
