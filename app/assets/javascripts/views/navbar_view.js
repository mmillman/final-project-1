SU.Views.NavbarView = Backbone.View.extend({
  initialize: function(options) {
    this.links = options.links;
  },

  template: JST["navbars/main"],

  render: function () {
    var renderedContent = this.template({
      links: this.links
    });

    this.$el.html(renderedContent);

    return this;
  },
});
