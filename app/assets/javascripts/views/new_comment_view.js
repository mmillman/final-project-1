SU.Views.NewCommentView = Backbone.View.extend({
  initialize: function (options) {
    console.log("NewCommentView initialized");
    this.parentView = options.parentView;
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
    var that = this;
    console.log("Posting comment for", this.model.escape("commentable_type"));

    this.model.set({
      "body": this.$(".comment").val()
    });

    this.model.save({}, {
      success: function () {
        console.log("new comment successfully added!");
        that.parentView.addComment(that.model);

        that.model = new SU.Models.Comment({
          commentable_id: that.model.get("commentable_id"),
          commentable_type: that.model.get("commentable_type")
        });

        that.$(".comment").val("");
      },
      error: function () {
        console.log("error posting comment!");
      }
    });
  }
});