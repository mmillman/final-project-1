var SU = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function () {
    console.log("SU initialized");

    SU.installNavBar($('.main-nav'));

    new SU.Routers.QuestionsRouter();
    new SU.Routers.UsersRouter();

    Backbone.history.start();
  },

  installNavBar: function ($navbar) {
    console.log("Installing navbar")
    var $ul = $('<ul></ul>');

    var link_names = ["Questions", "Tags", "Users", "Unanswered", "Ask Question"];
    _(link_names).each(function(linkName) {
      $ul.append('<li>' + linkName + '</li>');
    });

    $navbar.append($ul);
  }
}