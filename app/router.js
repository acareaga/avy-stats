import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('posts', function() {
    this.route('favorites');
  });
  this.route('post', { path: '/post/:post_id' });
  this.route('page-not-found', { path: '/*wildcard' });

  this.route('admin', function() {
    this.route('invitations');
  });

  this.route('zones', function() {
    this.route('new');
    this.route('edit', { path: '/:zone_id/edit' });
  });
  this.route('resources');
});

export default Router;
