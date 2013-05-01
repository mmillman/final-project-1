SU.Views.NavbarView = Backbone.View.extend({
  initialize: function(options) {
    console.log("NavbarView initialized");
    this.links = options.links;
  },

  events: {
    "click li a": "navigate"
  },

  render: function () {
    var $ul = $('<ul></ul>');

    _(this.links).each(function(link) {
      $ul.append('<li><a href="' + link.href + '">' + link.html + '</a></li>');
    });

    this.$el.html($ul);

    return this;
  },

  navigate: function (event) {
    var linkHref = event.target.href;

    console.log("navigating to '", linkHref, "'");
    Backbone.history.navigate(linkHref, { "trigger": true });
  }
});