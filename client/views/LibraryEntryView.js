// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    this.model.on('play', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<td><%= playCount %></td><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    console.log("Line 19 of library entry view.js, render function");
    return this.$el.html(this.template(this.model.attributes));
  }

});
