import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('zone', params.zone_id);
  },

  actions: {

    saveZone(newZone) {
      newZone.save().then(() => this.transitionTo('zones'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
