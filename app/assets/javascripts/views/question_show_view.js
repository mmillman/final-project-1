SU.Views.QuestionShowView = Backbone.View.extend({
  initialize: function () {
    this.question_id = this.model.get("id");
    this.answers = new SU.Collections.QuestionAnswers({
      question_id: this.question_id
    });
    this.comments = new SU.Collections.QuestionComments({
      question_id: this.question_id
    });
  },

  events: {
    "click button.add-question-comment": "showNewCommentView",
    "blur .new-comment-form .comment": "hideNewCommentView"
  },

  template: JST["questions/show"],

  render: function () {
    this.renderTemplate();
    this.renderNewCommentView();
    this.fetchThenRenderQuestionCommentsList();
    this.renderNewAnswerView();
    this.fetchThenRenderAnswersList();

    return this;
  },

  renderTemplate: function () {
    var renderedContent = this.template({
      question: this.model
    });
    this.$el.html(renderedContent);
  },

  renderNewCommentView: function () {
    var newCommentView = new SU.Views.NewCommentView({
      parentView: this,
      model: new SU.Models.Comment({
        commentable_id: this.model.get("id"),
        commentable_type: "Question"
      })
    });

    this.$('.new-question-comment').html(newCommentView.render().$el);
  },

  fetchThenRenderQuestionCommentsList: function () {
    var that = this;

    this.comments.fetch({
      success: function () {
        that.renderCommentsList();
      },
      error: function () {
        console.log("error fetching question comments!");
      }
    });

  },

  renderCommentsList: function () {
    var questionCommentsListView = new SU.Views.CommentsListView({
      collection: this.comments,
    });

    this.$('.comments-list').html(questionCommentsListView.render().$el);
  },

  renderNewAnswerView: function () {
    var newAnswerView = new SU.Views.NewAnswerView({
      model: new SU.Models.Answer({
        question_id: this.question_id
      }),
      parentView: this,
    });
    this.$('.new-answer').html(newAnswerView.render().$el);
  },

  fetchThenRenderAnswersList: function () {
    var that = this;

    this.answers.fetch({
      success: function () {
        that.renderAnswersList();
      },
      error: function () {
        console.log("error fetching answers!");
      }
    });
  },

  renderAnswersList: function () {
    var answersListView = new SU.Views.AnswersListView({
      question_id: this.question_id,
      collection: this.answers,
      parentView: this
    });

    this.$('.answer-list').html(answersListView.render().$el);
  },

  addAnswer: function (answer) {
    this.answers.add(answer);
  },

  addComment: function (comment) {
    this.comments.add(comment);
  },

  showNewCommentView: function (event) {
    console.log("Showing NewCommentView for question");
    this.$('.new-question-comment').removeClass('hidden');
    this.$('.add-question-comment').addClass('hidden');
  },

  hideNewCommentView: function (event) {
    console.log("1comment body is: ", this.$('.comment-body').val());
    if (this.$('.comment-body').val() === "") { return };
    console.log("2comment body is: ", this.$('.comment-body').val());
    console.log("Hiding NewCommentView for question");
    this.$('.new-question-comment').addClass('hidden');
    this.$('.add-question-comment').removeClass('hidden');
  }
});
