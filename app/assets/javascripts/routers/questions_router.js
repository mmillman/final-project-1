SU.Routers.QuestionsRouter = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    console.log("QuestionsRouter initialized");
  },

  routes: {
    "questions": "topQuestionsIndex",
    "ask": "newQuestion",
  },

  topQuestionsIndex: function () {
    console.log("routing with topQuestionsIndex");
  },

  newQuestion: function () {
    console.log("routing with newQuestion");

    var newQuestion = new SU.Models.Question();

    var newQuestionView = new SU.Views.NewQuestionView({
      model: newQuestion
    });

    this.$rootEl.html(newQuestionView.render().$el);
  }
});