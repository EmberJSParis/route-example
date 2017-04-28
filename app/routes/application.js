import Ember from 'ember';

// index/route.js

export default Ember.Route.extend({
  model() {
    return [
        {
          year: 2010,
          rainfall: 12,
          temperature: 86
        },
        {
          year: 2011,
          rainfall: 15,
          temperature: 88
        },
        {
          year: 2012,
          rainfall: 21,
          temperature: 90
        }
    ];
  }
});

export default Ember.Route.extend({
  actions:{
      press(){
          alert('Hi From Route!');
      }
  }
});
