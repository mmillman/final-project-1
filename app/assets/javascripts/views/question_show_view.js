SU.Views.QuestionShowView = Backbone.View.extend({
  initialize: function () {
    console.log("QuestionShowView initialized");
  },

  template: JST["questions/show"],

  render: function () {
    console.log("Rendering QuestionShowView");

    var renderedContent = this.template({
      question: this.model
    });

    var newAnswer = new SU.Models.Answer({
      question_id: this.model.get("id")
    });

    var newAnswerView = new SU.Views.NewAnswerView({
      model: newAnswer
    });

    this.$el.html(renderedContent);
    this.$el.append(newAnswerView.render().$el);

    return this;
  }
});
