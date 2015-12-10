// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  model: SongModel,

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td> \
                        <td><%= title %></td> \
                        <td><a href = "#" class = "play">Play Song</a></td> \
                        <td><a href = "#" class = "enqueue">Add to queue</a></td>'),

  events: {
    // 'click .play': function() {
    //   this.model.play();
    // },
    // 'click .enqueue': function(){
    //   this.model.enqueue();
    // }

    'click' : function(){
      // this.model.play();
      this.model.enqueue();
    }
    
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
