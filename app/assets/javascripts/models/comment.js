SU.Models.Comment = Backbone.Model.extend({
  initialize: function (options) {
    this.commentable_id = options.commentable_id;
    this.commentable_type = options.commentable_type;
  },

  url: function () {
    var prefix;
    switch (this.commentable_type) {
      case "Question":
        prefix = "questions";
        break;
      case "Answer":
        prefix = "answers";
        break;
    }

    return "/" + prefix + "/" + this.commentable_id + "/comments";
  },

  toJSON: function () {
    return { "comment": _.clone(this.attributes)  };
  }
});
