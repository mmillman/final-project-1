window.SU = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function ($content, $navbar, questionsData, tagsData) {
    questions = new SU.Collections.Questions();
    _(questionsData).each(function(questionsDatum) {
      questions.add(new SU.Models.Question(questionsDatum));
    });

    SU.Store.allQuestions = questions;

    tags = new SU.Collections.Tags();
    _(tagsData).each(function(tagsDatum) {
      tags.add(new SU.Models.Tag(tagsDatum))
    });

    SU.Store.allTags = tags;
    SU.Store.allTagNames = tags.pluck("name");

    this.installNavbar($navbar);

    new SU.Routers.QuestionsRouter($content);
    new SU.Routers.UsersRouter($content);

    Backbone.history.start();
  },

  installNavbar: function ($navbar) {
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
};
