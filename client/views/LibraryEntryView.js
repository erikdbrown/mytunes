// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  model: SongModel,

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td> \
                        <td><%= title %></td> \
                        <td><%= count %></td> \
                        <td><a href = "#" class = "enqueue">Add to queue</a></td> \
                        <td><img class="star" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/star-20.png"></td>' 
                        ),

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  events: {

    // listening for a click on the "Add to queue" link on the LibEntry
    'click .enqueue': function(){
      this.model.enqueue();
    },

    'click img': function() {
      var star = this.model.toggleVote();
      if (star) {
        this.$('.star').attr('src', "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678064-star-20.png")
      } else {
        this.$('.star').attr('src', "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/star-20.png")      
      }
    }
    
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
