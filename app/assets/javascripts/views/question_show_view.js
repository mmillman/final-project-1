SU.Views.QuestionShowView = Backbone.View.extend({
  initialize: function () {
    console.log("QuestionShowView initialized");
  },

  template: JST["questions/show"],

  render: function () {
    console.log("Rendering QuestionShowView");

    this.renderStatic();
    this.fetchThenRender();

    return this;
  },

  renderStatic: function () {
    console.log("  renderStatic called");
    var renderedContent = this.template({
      question: this.model
    });
    this.$el.html(renderedContent);

    var newAnswer = new SU.Models.Answer({
      question_id: this.model.get("id")
    });
    var newAnswerView = new SU.Views.NewAnswerView({
      model: newAnswer
    });
    this.$('.new-answer').html(newAnswerView.render().$el);
  },

  fetchThenRender: function () {
    var that = this;
    console.log("  fetchThenRender called");

    var question_answers = new SU.Collections.QuestionAnswers({
      question_id: this.model.get("id")
    });

    question_answers.fetch({
      success: function () {
        console.log("success fetching question_answers!");
        var answersListView = new SU.Views.AnswersListView({
          question_id: that.model.get("id"),
          collection: question_answers
        });

        that.$('.answer-list').html(answersListView.render().$el);
      },
      error: function () {
        console.log("error fetching question_answers!");
      }
    });
  }
});
