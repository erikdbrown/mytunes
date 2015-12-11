// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    artist: '',
    title: '',
    url: '',
    count: 0,
    upVotes: false,
    src: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/star-20.png"
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
    this.set('count', this.get('count') + 1);
  }, 

  toggleVote: function() {
    if (this.get('src') === "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/star-20.png") {
      this.set('src', "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-20.png");
    } else {
      this.set('src', "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/star-20.png");
    }
  }

});
