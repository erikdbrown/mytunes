// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('enqueue', function(){
      if (this.models.length === 1) {
        this.playFirst();
      }
    });

    // this.on('ended', function(){
    //   // if (this.length >= 1) {
    //   //   // this.shift();
    //   // }
    // }, this);

    // // this.on('dequeue', function() {
    // //   // this.shift(); // we don't want this
    // //   // remove the song that is triggered dequeue
    // //   // this.playFirst();
    // // }, this)
  },

  playFirst: function() {
    this.models[0].play();
    console.log(this.models[0]);
  }

  // playQueue: function(){
  //   _.each(this.models, function(song) {
  //     song.play()
  //   });
  // }

  // remove dequeue: 

});