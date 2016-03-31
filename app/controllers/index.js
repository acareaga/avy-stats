import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  filteredList: null,
  actions: {
    saveInvitation() {
       alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
       this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
       this.set('emailAddress', '');
     },
    autoComplete(param) {
      if(param !== "") {
        this.store.query('mountain', {city: param}).then((result) => {
          this.set('filteredList',result);
        });
      } else {
        this.set('filteredList').clear();
      }
    },
    search(param) {
      if(param !== "") {
        this.store.query('mountain', {city: param}).then((result) => {
          this.set('model',result);
        });
      } else {
        this.set('model').clear();
      }
    }
  }
});
