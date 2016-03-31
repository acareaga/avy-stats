import Ember from 'ember';

export default Ember.Controller.extend({
  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
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
