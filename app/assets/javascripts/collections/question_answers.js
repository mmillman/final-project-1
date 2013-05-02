SU.Collections.QuestionAnswers = Backbone.Collection.extend({
  initialize: function (options) {
    this.question_id = options.question_id
  },

  model: SU.Models.Answer,

  url: function () {
    return "/questions/" + this.question_id + "/answers";
  },
});
