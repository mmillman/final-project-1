SU.Views.AnswersListView = Backbone.View.extend({
  initialize: function (options) {
    this.question_id = options.question_id;

    this.collection.on('add', this.render, this);
  },

  template: JST["answers/list"],

  render: function () {
    var that = this;

    this.$el.empty();

    this.collection.each(function (answer) {
      var answerShowView = new SU.Views.AnswerShowView({
        model: answer
      });

      that.$el.append(answerShowView.render().$el);
    });

    return this;
  },
});