// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  model: SongModel,

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td> \
                        <td><%= title %></td> \
                        <td><a href = "#" class = "dequeue">Remove</a></td>'),

  events: {
    // 'click .play': function() {
    //   this.model.play();
    // },
    // 'click .enqueue': function(){
    //   this.model.enqueue();
    // }
    'click' : function(){
      //this.model.play();
      this.model.dequeue();
    }
    
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }



});
