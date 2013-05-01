SU.Routers.QuestionsRouter = Backbone.Router.extend({
  initialize: function () {
    console.log("QuestionsRouter initialized");
  },

  routes: {
    "questions": "topQuestionsIndex"
  },

  topQuestionsIndex: function () {
    console.log("routing with topQuestionsIndex");
  }
});