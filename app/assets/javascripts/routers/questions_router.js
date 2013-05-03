SU.Routers.QuestionsRouter = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "topQuestionsList",
    "questions": "allQuestions",
    "ask": "newQuestion",
    "questions/:id": "showQuestion",
  },

  topQuestionsList: function () {
  },

  newQuestion: function () {
    var newQuestionView = new SU.Views.NewQuestionView({
      model: new SU.Models.Question()
    });

    this.$rootEl.html(newQuestionView.render().$el);
  },

  allQuestions: function () {
    var questionsListView = new SU.Views.QuestionsListView({
      collection: SU.Store.allQuestions
    });

    this.$rootEl.html(questionsListView.render().$el);
  },

  showQuestion: function (id) {
    var questionShowView = new SU.Views.QuestionShowView({
      model: SU.Store.allQuestions.get(id),
    });

    this.$rootEl.html(questionShowView.render().$el);
  }
});
