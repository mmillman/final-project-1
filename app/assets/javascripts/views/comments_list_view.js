SU.Views.CommentsListView = Backbone.View.extend({
  initialize: function () {
    console.log("CommentsListView initialized");
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
