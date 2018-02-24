/**
 * TrackEventor
 */
class TrackEventor {
  /**
   * Get name of history push event.
   * @return {string} event name
   */
  static ON_PUSH_HISTORY() {
    return 'te::push-history';
  }

  /**
   * Get name of history pop event.
   * @return {string} event name
   */
  static ON_POP_HISTORY() {
    return 'te::pop-history';
  }

  /**
   * Get name of history change event.
   * @return {string} event name
   */
  static ON_CHANGE_HISTORY() {
    return 'te::change-history';
  }

  /**
   * Dispatch event.
   * @note This method is enabled on browser.
   * @param {string} name Event name.
   * @param {object} data event data.
   */
  static dispatch(name, data = {}) {
    if (process.browser) {
      let evt = null;

      if (global.CustomEvent) {
        evt = new global.CustomEvent(name, {detail: data});
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(name, false, false, data);
      }

      global.dispatchEvent(evt);
    }
  }
}

module.exports = TrackEventor;
