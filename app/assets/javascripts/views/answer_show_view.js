SU.Views.AnswerShowView = Backbone.View.extend({
  initialize: function (options) {
    this.parentView = options.parentView;
    this.comments = new SU.Collections.AnswerComments({
      answer_id: this.model.get("id")
    });
  },

  template: JST["answers/show"],

  events: {
    "click button.add-answer-comment": "showNewCommentView"
  },

  render: function () {
    var renderedContent = this.template({
      answer: this.model
    });

    this.$el.html(renderedContent);

    this.renderNewCommentView();
    this.fetchThenRenderCommentsList();

    return this;
  },

  renderNewCommentView: function () {
    var newCommentView = new SU.Views.NewCommentView({
      model: new SU.Models.Comment({
        commentable_id: this.model.get("id"),
        commentable_type: "Answer"
      })
    });

    this.$('.new-answer-comment').html(newCommentView.render().$el);
  },

  fetchThenRenderCommentsList: function () {
    var that = this;

    this.comments.fetch({
      success: function () {
        that.renderCommentsList();
      },
      error: function () {
        console.log("error fetching answer comments!");
      }
    });
  },

  renderCommentsList: function () {
    var answerCommentsListView = new SU.Views.CommentsListView({
      collection: this.comments
    });

    this.$('.comments-list').html(answerCommentsListView.render().$el);
  },

  showNewCommentView: function (event) {
    console.log("Showing NewCommentView for answer");
    this.$('.new-answer-comment').toggleClass('hidden');
    this.$('.add-answer-comment').toggleClass('hidden');
  }
});