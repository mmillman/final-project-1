var SU = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function () {
    console.log("SU initialized");

    new SU.Routers.QuestionsRouter();
    new SU.Routers.UsersRouter();

    Backbone.history.start();
  }
}