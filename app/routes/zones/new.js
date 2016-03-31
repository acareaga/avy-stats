import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('zone');
  },

  actions: {

    saveZone(newZone) {
      newZone.save().then(() => this.transitionTo('zones'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
