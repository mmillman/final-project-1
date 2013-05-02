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

    this.$el.html(renderedContent);

    return this;
  }
});
