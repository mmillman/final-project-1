SU.Views.NewAnswerView = Backbone.View.extend({
  initialize: function (options) {
    this.parentView = options.parentView;
  },

  events: {
    "click button#submit-answer": "postAnswer"
  },

  template: JST["answers/new"],

  render: function () {
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    return this;
  },

  postAnswer: function () {
    var that = this;
    console.log("Posting answer");

    this.model.set({
      "body": this.$('#answer_body').val(),
    });

    this.model.save({}, {
      success: function () {
        console.log("new answer successfully saved!");
        that.parentView.addAnswer(that.model);

        that.model = new SU.Models.Answer({
          question_id: that.model.get("question_id")
        });

        that.$("#answer_body").val("");
      }
    });
  }
});
