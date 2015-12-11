// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    artist: '',
    title: '',
    url: '',
    count: 0,
    upVotes: false
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
    this.trigger('upvote', this);
    if (!this.upVotes) {
      this.set('upVotes', true);
      return true;
    } else {
      this.set('upVotes', false);
      return false;
    }
  }

});
