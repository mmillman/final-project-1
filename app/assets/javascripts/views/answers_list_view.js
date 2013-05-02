SU.Views.AnswersListView = Backbone.View.extend({
  initialize: function (options) {
    this.question_id = options.question_id;
    console.log("AnswersListView initialized");
  },

  template: JST["answers/list"],

  render: function () {
    var that = this;
    console.log("Rendering AnswersListView");

    this.$el.empty();

    // console.log("AnswerListView collection:", this.collection);

    this.collection.each(function (answer) {
      var answerShowView = new SU.Views.AnswerShowView({
        model: answer
      });
      // console.log("answer: ", answer);
      that.$el.append(answerShowView.render().$el);
    });

    // this.$el.html($ul);

    return this;
  },
});