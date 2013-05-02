SU.Views.NewAnswerView = Backbone.View.extend({
  initialize: function () {
    console.log("NewAnswerView initialized");
  },

  events: {
    "click button#submit-answer": "postAnswer"
  },

  template: JST["answers/new"],

  render: function () {
    console.log("Rendering NewAnswerView");

    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  },

  postAnswer: function () {
    console.log("Posting answer");

    this.model.set({
      "body": this.$('#answer_body').val()
    });

    this.model.save();
  }
});
