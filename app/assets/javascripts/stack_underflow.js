window.SU = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function ($content, $navbar, questionsData) {
    console.log(questionsData);

    questions = new SU.Collections.Questions();
    _(questionsData).each(function(questionsDatum) {
      questions.add(new SU.Models.Question(questionsDatum));
    });
    console.log(questions);

    SU.Store.allQuestions = questions;

    this.installNavbar($navbar);

    new SU.Routers.QuestionsRouter($content);
    new SU.Routers.UsersRouter($content);

    Backbone.history.start();
    console.log("SU initialized");
  },

  installNavbar: function ($navbar) {
    console.log("Installing navbar");

    var links = [
      {
        "href": "/#/questions",
        "html": "Questions"
      },
      {
        "href": "/#/tags",
        "html": "Tags"
      },
      {
        "href": "/#/users",
        "html": "Users"
      },
      {
        "href": "/#/unanswered",
        "html": "Unanswered"
      },
      {
        "href": "/#/ask",
        "html": "Ask Question"
      },
    ];

    var navBarView = new SU.Views.NavbarView({
      "links": links
    });

    $navbar.html(navBarView.render().$el);
  }
}