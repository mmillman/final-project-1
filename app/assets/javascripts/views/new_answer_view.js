SU.Views.NewAnswerView = Backbone.View.extend({
  initialize: function () {
    console.log("NewAnswerView initialized");
  },

  template: JST["answers/new"],

  render: function () {
    console.log("Rendering NewAnswerView");

    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  }
});
