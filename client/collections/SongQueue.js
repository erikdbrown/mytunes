// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(){
      if (this.models.length > 1) {
        this.playQueue();
      } else {
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.remove(this.models[0]);
      if (this.models.length > 0) {
        this.playFirst()
      }
    }, this);

    this.on('dequeue', function() {
      this.remove(this.models[0]);
    }, this)
  },

  playFirst: function() {
    this.models[0].play();
  },

  playQueue: function(){
    _.each(this.models, function(song) {
      song.play()
    });
  }

  // remove dequeue: 

});