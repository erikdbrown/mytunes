// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  model: SongModel,

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td> \
                        <td><%= title %></td> \
                        <td><%= count %></td> \
                        <td><a href = "#" class = "enqueue">Add to queue</a></td>'),

  initialize: function() {
    this.model.on('change:count', this.render, this);
  },

  events: {

    // listening for a click on the "Add to queue" link on the LibEntry
    'click .enqueue': function(){
      this.model.enqueue();
    }
    
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
