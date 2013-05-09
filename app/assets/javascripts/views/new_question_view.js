SU.Views.NewQuestionView = Backbone.View.extend({
  initialize: function () {
    this.tags = [];
  },

  events: {
    "click button#submit-question": "postQuestion",
    "keypress input.tag-typeahead": "addTagFromTypeahead"
  },

  template: JST["questions/new"],

  render: function () {
    var renderedContent = this.template({
      tagNames: SU.Store.allTagNames
    });

    this.$el.html(renderedContent);

    return this;
  },

  postQuestion: function (event) {
    var that = this;
    console.log("Posting question");

    this.model.set({
      "title": this.$('#question_title').val(),
      "body": this.$('#question_body').val(),
    });

    this.model.save({}, {
      success: function () {
        SU.Store.allQuestions.add(that.model);
        Backbone.history.navigate('#/questions');
      }
    });
  },

  addTagFromTypeahead: function (event) {
    if (event.keyCode === 13) {
      var inputTag = this.$('.tag-typeahead').val();

      var isValidTag = _(SU.Store.allTagNames).contains(inputTag);
      var isNotAlreadyApplied = !_(this.tags).contains(inputTag);
      if (isValidTag && isNotAlreadyApplied) {
        this.$('.tags-list').append(
          $('<div><li class="tag">' + inputTag + '</li></div>')
        )
        this.tags.push(inputTag);
        this.$('.tag-typeahead').val("");
      }
    }
  },
});
