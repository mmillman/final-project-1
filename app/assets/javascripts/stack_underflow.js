window.SU = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function ($content) {
    this.installNavbar($('.main-nav'));

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