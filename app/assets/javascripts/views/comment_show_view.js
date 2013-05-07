SU.Views.CommentShowView = Backbone.View.extend({
  initialize: function () {

  },

  template: JST["comments/show"],

  render: function () {
    console.log("Rendering CommentShowView");

    var renderedContent = this.template({
      comment: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },
});
