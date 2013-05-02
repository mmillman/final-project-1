SU.Routers.QuestionsRouter = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    console.log("QuestionsRouter initialized");
  },

  routes: {
    "": "topQuestionsList",
    "questions": "allQuestions",
    "ask": "newQuestion",
    "questions/:id": "showQuestion",
  },

  topQuestionsList: function () {
    console.log("routing with topQuestionsList");
  },

  newQuestion: function () {
    console.log("routing with newQuestion");

    var newQuestion = new SU.Models.Question();

    var newQuestionView = new SU.Views.NewQuestionView({
      model: newQuestion
    });

    this.$rootEl.html(newQuestionView.render().$el);
  },

  allQuestions: function () {
    console.log("routing with allQuestions");

    var questionsListView = new SU.Views.QuestionsListView({
      collection: SU.Store.allQuestions
    });

    this.$rootEl.html(questionsListView.render().$el);
  },

  showQuestion: function (id) {
    console.log("routing with showQuestion");

    var questionShowView = new SU.Views.QuestionShowView({
      model: SU.Store.allQuestions.get(id)
    });

    this.$rootEl.html(questionShowView.render().$el);
  }
});
