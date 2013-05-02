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

    var newAnswerView = new SU.Views.NewAnswerView({
      model: new SU.Models.Answer()
    });

    this.$el.html(renderedContent);
    this.$el.append(newAnswerView.render().$el);

    return this;
  }
});
