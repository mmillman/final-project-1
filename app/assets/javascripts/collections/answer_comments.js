SU.Collections.AnswerComments = Backbone.Collection.extend({
  initialize: function (options) {
    this.answer_id = options.answer_id
  },

  model: SU.Models.Comment,

  url: function () {
    return "/answers/" + this.answer_id + "/comments";
  },
});
