SU.Views.NewCommentView = Backbone.View.extend({
  initialize: function () {
    console.log("NewCommentView initialized");
  },

  template: JST["comments/new"],

  events: {
    "click button.submit-comment": "postComment"
  },

  render: function () {
    var renderedContent = this.template({
      comment: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  postComment: function() {
    console.log("Posting comment for", this.model.escape("commentable_type"));

    this.model.set({
      "body": this.$(".comment").val()
      // set collection for this model
    });

    this.model.save();
  }
});