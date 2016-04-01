import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('zone');
  },

  actions: {

    deleteZone(zone) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        zone.destroyRecord();
      }
    }
  }

})
