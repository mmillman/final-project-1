SU.Routers.UsersRouter = Backbone.Router.extend({
  initialize: function () {
    console.log("UsersRouter initialized");
  },

  routes: {
    "users": "usersIndex"
  },

  usersIndex: function () {
    console.log("routing with usersIndex");
  }
});
