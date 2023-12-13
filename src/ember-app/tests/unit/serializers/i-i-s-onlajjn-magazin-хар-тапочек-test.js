import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-onlajjn-magazin-хар-тапочек', 'Unit | Serializer | i-i-s-onlajjn-magazin-хар-тапочек', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-onlajjn-magazin-хар-тапочек',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-onlajjn-magazin-тип-оплаты',
    'transform:i-i-s-onlajjn-magazin-тип-получения',

    'model:i-i-s-onlajjn-magazin-адрес',
    'model:i-i-s-onlajjn-magazin-должность',
    'model:i-i-s-onlajjn-magazin-заказ-сланцев',
    'model:i-i-s-onlajjn-magazin-заказ-тапочек',
    'model:i-i-s-onlajjn-magazin-заказы',
    'model:i-i-s-onlajjn-magazin-категория',
    'model:i-i-s-onlajjn-magazin-клиенты',
    'model:i-i-s-onlajjn-magazin-сланцы',
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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
