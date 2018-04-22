http://handlebarsjs.com/

Templates contain basic HTML and some dynamic content that is rendered with data-binding.
Dynamic content is enclosed in {{}}

* Handlebars Expressions {{variable or helper function}}
* The data or context
* The compiler

## Displaying Properties
Templates have context, e.g.
```
Hello, my name is {{name}}  // name is dynamic and read from the context
```
The context is:
* An object from which Handlebars expression get their properties.
* Often a component and templates that are rendered by a route.
* A controller, it can be routed to.

## Pass in variables or values from a controller
```
import Ember from 'ember';
export default Ember.Controller.extend({
    firstName: 'Fuzzy',
    lastName: 'Lumpkin'
  });
```
Access the values in the template
```
I am {{firstName}} {{lastName}}
```

## Conditional Helpers
If conditional statement supported by Handlebars
```
<div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{/if}}
</div>
```

If/Else conditional statement supported by Handlebars
```
<div class="entry">
  {{#if author}}
    <h1>{{firstName}}{{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{/if}}
</div>
```

Unless conditional statement supported by Handlebars
```
<div class="entry">
  {{#unless license}}
    <h3 class="warning">WARNING: this entry does not have a license</h3>
  {{/unless}}
</div>
```

## Each Block Helper
Use to iterate over an object or a collection
```
<ul class="users">
  {{#each users}}
  <li>{{this}}</li>
  {{/each}}
</ul>
```

Use to iterate over an object with keys and values
```
<ul class="users">
  {{#each users as user}}
    <li>{{user.firstName}}</li>
  {{/each}}
</ul>
```

## With Block Helper
Given the context that is an object with properties and values.
```
{
  title: "My first post!",
  author: {
    firstName: "Mojo",
    lastName: "Jojo"
  }
}
```


```
<div class="entry">
  <h1>{{title}}</h1>
  {{#with author}}
    <h2>By {{firstName}} {{lastName}}</h2>
  {{/with}}
</div>
```
