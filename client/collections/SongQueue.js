// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this); // listening for a "dequeue" from a song model
    this.on('ended', this.playNext, this)
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst()
    }
  },

  dequeue: function(song) {
    if (this.at(0) === song) { // if the dequeued song is at the beginning
      this.playNext();
    } else {
      this.remove(song);
    }

  },

  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {
    this.shift(); // removes first song in the queue. Trigger a 'remove'
    if (this.length >= 1) {
      this.playFirst(); // if there are songs, play the first one in the queue.
    } else {
      this.trigger('stop'); // if there are no song, stop playing.
    }
  }

  // remove dequeue: 

});