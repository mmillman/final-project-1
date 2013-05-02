SU.Views.AnswerShowView = Backbone.View.extend({
  initialize: function () {
    console.log("AnswerShowView initialized");
  },

  template: JST["answers/show"],

  render: function () {
    console.log("Rendering AnswerShowView");

    var renderedContent = this.template({
      answer: this.model
    });

    this.$el.html(renderedContent);

    return this;
  },
});