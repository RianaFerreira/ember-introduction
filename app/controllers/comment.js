import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sayHello: function() {
      alert('Hello');
    },
    toggleBody: function() {
      this.toggleProperty('isShowingBody');
    },
    submitAction: function() {
      alert('Name' + this.get('name'));
      alert('Choice' + this.get('choice'));
    }
  },
  title: "My blog post comment",
  body: "This is the body of the comment",
  authors: ['Mojo Jojo', 'Bubbles Puff', 'Professor X'],
  createdAt: new Date(),
  votes: [
    {
      voter: 'Blossom Puff',
      choice: 'Yes'
    },
    {
      voter: 'Fuzzy Lumpkin',
      choice: 'No'
    },
    {
      voter: 'Blossom Puff',
      choice: 'Yes'
    }
  ]
});
