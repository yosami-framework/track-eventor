const TrackEventor = require('../index');

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
        TrackEventor.dispatch(TrackEventor.ON_POP_HISTORY);
        TrackEventor.dispatch(TrackEventor.ON_CHANGE_HISTORY);
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
      const originalMethod = global.history[name].bind(global.history);

      global.history[name] = function(...args) {
        TrackEventor.dispatch(TrackEventor.ON_PUSH_HISTORY);
        TrackEventor.dispatch(TrackEventor.ON_CHANGE_HISTORY);

        return originalMethod(...args);
      };
    }
  }
}

module.exports = HistoryEventManager;
