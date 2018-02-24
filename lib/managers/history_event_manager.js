const TrackEvent = require('../index');

/**
 * History event manager.
 */
class HistoryEventManager {
  /**
   * inititlize managers.
   */
  static initialize() {
    if (global.history) {
      global.addEventListener('popstate', function() {
        TrackEvent.dispatch(TrackEvent.ON_POP_HISTORY);
        TrackEvent.dispatch(TrackEvent.ON_CHANGE_HISTORY);
      });

      this.rewriteMethod('replaceState');
      this.rewriteMethod('pushState');
    }
  }

  /**
   * Rewrite push method.
   * @param {string} name Method name.
   */
  static rewriteMethod(name) {
    if (global.history[name]) {
      const originalMethod = global.history[name];

      global.history[name] = function(...args) {
        TrackEvent.dispatch(TrackEvent.ON_PUSH_HISTORY);
        TrackEvent.dispatch(TrackEvent.ON_CHANGE_HISTORY);

        return originalMethod(...args);
      };
    }
  }
}

module.exports = HistoryEventManager;
