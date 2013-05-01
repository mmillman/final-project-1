SU.Views.NewQuestionView = Backbone.View.extend({
  initialize: function () {
    console.log("NewQuestionView initialized");
  },

  template: JST["questions/new"],

  render: function () {
    console.log("Rendering NewQuestionView");

    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  }
});