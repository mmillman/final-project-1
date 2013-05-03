SU.Views.QuestionShowView = Backbone.View.extend({
  initialize: function () {
    this.question_id = this.model.get("id");
    this.answers = new SU.Collections.QuestionAnswers({
      question_id: this.question_id
    });
  },

  template: JST["questions/show"],

  render: function () {
    this.renderTemplate();
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

  addToAnswers: function (answer) {
    this.answers.add(answer);
  },
});
