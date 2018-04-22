# Routing
Define a route for every state.
2 main ways a route is changed:
1) View interaction that causes the URL to change, i.e. link or form submit.
2) URL is manually typed or browser back button is clicked.

### Route handlers:
1) Conditionally redirect to a new URL.
2) Update a controller that represents a model.
3) Change template or place a new template in an outlet (template within in a template).

### Logging Route Changes
Write out transition events to logs.
```
App = Ember.Application.create({
    LOG_TRANSITIONS: true
  });
```

### Define an alternate Root URL
When app is in a different directory than the root.
```
App.Router.reopen({
    rootURL: '/store'
  });
```

### Defining routes in router.js
Suggested convention is keep the route name and path name the same.
```
App.Router.map(function() {
    this.route('services', { path: '/services' });
    this.route('contact',  { path: '/contact-us' });
  });
```

### Create links in templates to reach routes
```
<nav>
  {{#link-to 'services'}}Services{{/link-to}}
  {{#link-to 'contact'}}Contact Us{{/link-to}}
</nav>
```

### Nested Routes
Use to display templates within another template.
```
Router.map(function() {
    this.route('posts', function() {
        this.route('new');
      });
  });
```

Display of the nested template / route.
```
{{outlet}}
```

### Index Route
Every level of nesting has an index route that is represented by "/".
It does not manually need to be defined.
```
Router.map(function() {
    # this.route('index', { path: '/' });  # auto generated
    this.route('books');
  });
```

### Dynamic Route Segments
Placeholder in the URL that starts with a ":".
```
Router.map(function() {
    this.route('products');
    this.route('product', { path: '/product/:product_id' });
  });
```

### Specify Models in Routes
In `routes/products.js` the route calls the model function to gather all the product data and then render a list of the products.
```
export default Ember.Route.extend({
    model: function() {
      return this.store.findAll('product');
    }
  });
```

### Rendering templates
Default is to render the template with the same name as the route.
Find and render `products.hbs` and `products/new.hbs`.
```
Router.map(function() {
    this.route('products', function() {
        this.route('new');
      });
  });
```

### Redirecting with TransitionTo
Use transition method to redirect before or after the model is known.

Transition before model is known.
```
Router.map(function() {
    this.route('posts');
  });

export default Ember.Route.extend({
    beforeModel() {
      this.transitionTo('posts');
    }
  });
```

Transition after model is known.
```
Router.map(function() {
    this.route('posts');
    this.route('posts', { path: '/post/:post_id' });
  });

export default Ember.Route.extend({
    afterModel(model, transition) {
      if (model.get('length') === 1) {
        this.transitionTo('post', model.get('firstObject'));
      }
    }
  });
```
