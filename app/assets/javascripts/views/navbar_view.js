SU.Views.NavbarView = Backbone.View.extend({
  initialize: function(options) {
    console.log("NavbarView initialized");
    this.links = options.links;
  },

  render: function () {
    var $ul = $('<ul></ul>');

    _(this.links).each(function(link) {
      $ul.append('<li><a href="' + link.href + '">' + link.html + '</a></li>');
    });

    this.$el.html($ul);

    return this;
  },
});