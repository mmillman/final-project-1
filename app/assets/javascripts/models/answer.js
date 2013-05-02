SU.Models.Answer = Backbone.Model.extend({
  initialize: function (options) {
    this.question_id = options.question_id
  },

  urlRoot: function () {
    return "/questions/" + this.question_id + "/answers";
  }
});
