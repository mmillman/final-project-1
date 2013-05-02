SU.Views.NewQuestionView = Backbone.View.extend({
  initialize: function () {
    console.log("NewQuestionView initialized");
  },

  events: {
    "click button#submit-question": "postQuestion"
  },

  template: JST["questions/new"],

  render: function () {
    console.log("Rendering NewQuestionView");

    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  },

  postQuestion: function (event) {
    console.log("Posting question");

    var question = new SU.Models.Question({
      "title": this.$('#question_title').val(),
      "body": this.$('#question_body').val(),
    });

    question.save();
  },
});
