SU.Models.Question = Backbone.Model.extend({
  toJSON: function() {
    // TODO: Find out if the attribute cloning here is unnecessary:
    return { question: _.clone(this.attributes) }
  },

  url: "/questions"
});