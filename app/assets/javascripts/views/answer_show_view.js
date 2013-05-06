SU.Views.AnswerShowView = Backbone.View.extend({
  initialize: function () {

  },

  template: JST["answers/show"],

  events: {
    "click button.add-comment": "showNewCommentView"
  },

  render: function () {
    var renderedContent = this.template({
      answer: this.model
    });

    this.$el.html(renderedContent);

    var newCommentView = new SU.Views.NewCommentView({
      model: new SU.Models.Comment({

      })
    });

    this.$('.new-comment').html(newCommentView.render().$el);

    return this;
  },

  showNewCommentView: function (event) {
    console.log("Showing NewCommentView");
    this.$('.new-comment').toggleClass('hidden');
    this.$('.add-comment').toggleClass('hidden');
  }
});