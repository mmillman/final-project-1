SU.Views.CommentsListView = Backbone.View.extend({
  initialize: function (options) {
    console.log("CommentsListView initialized");

    this.collection.on('add', this.render, this);
  },

  render: function () {
    var that = this;
    console.log("Rendering CommentsListView");

    this.$el.empty();

    this.collection.each(function (comment) {
      var commentShowView = new SU.Views.CommentShowView({
        model: comment
      });

      that.$el.append(commentShowView.render().$el);
    });

    return this;
  },
});
