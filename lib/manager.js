const HistoryEventManager = require('./managers/history_event_manager');

/**
 * Manager.
 */
class Manager {
  /**
   * Initialize event managers.
   */
  static initialize() {
    if (process.browser) {
      HistoryEventManager.initialize();
    }
  }
}

module.exports = Manager;
