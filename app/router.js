import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', {path: 'about'});   // Don't need to specify the path if it's named the same as the route
  this.route('services');
  this.route('contact');
  this.route('events');

  // Nested route
  this.route('posts', {path: '/posts'}, function() {
    this.route('new');
    this.route('post', {path: '/post_id'});
  })
  this.route('comment');
});

export default Router;
