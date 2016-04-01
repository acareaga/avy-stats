import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('mountain');
    return this.store.findAll('post');
  },
});
