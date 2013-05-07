SU.Collections.QuestionComments = Backbone.Collection.extend({
  initialize: function (options) {
    this.question_id = options.question_id
  },

  model: SU.Models.Comment,

  url: function () {
    return "/questions/" + this.question_id + "/comments";
  },
});
