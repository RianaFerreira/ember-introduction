import Ember from 'ember';

export default Ember.Controller.extend({
  title: "My blog post comment",
  body: "This is the body of the comment",
  authors: ['Mojo Jojo', 'Bubbles Puff', 'Professor X'],
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
