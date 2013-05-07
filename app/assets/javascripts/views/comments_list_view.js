SU.Views.CommentsListView = Backbone.View.extend({
  initialize: function (options) {
    console.log("CommentsListView initialized");

    this.collection.on('add', this.render, this);
  },

  template: JST["comments/list"],

  render: function () {
    console.log("Rendering CommentsListView");

    var renderedContent = this.template({
      comments: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  },
});
