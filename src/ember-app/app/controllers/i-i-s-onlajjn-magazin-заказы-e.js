import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-onlajjn-magazin-заказы-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-onlajjn-magazin-заказ-тапочек+тапочки':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'тапочки',
            projection: 'ТапочкиL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-onlajjn-magazin-заказ-сланцев+сланцы':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'сланцы',
            projection: 'СланцыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
