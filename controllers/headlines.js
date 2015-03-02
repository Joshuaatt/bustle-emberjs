Bustle.HeadlinesController = Ember.Controller.extend({
  isStoryShowing: false,
  actions: {
    showStory: function() {
      this.set('isStoryShowing', true);
    },
    hideStory: function() {
      this.set('isStoryShowing', false);
    }
  }
});
