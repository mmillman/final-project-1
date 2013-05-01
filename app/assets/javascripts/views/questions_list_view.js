SU.Views.QuestionsListView = Backbone.View.extend({
  initialize: function () {
    console.log("QuestionsListView initialized");
  },

  template: JST["questions/list"],

  render: function () {
    console.log("Rendering QuestionsListView");

    var renderedContent = this.template({
      questions: this.collection
    })

    this.$el.html(renderedContent);

    return this;
  },
});