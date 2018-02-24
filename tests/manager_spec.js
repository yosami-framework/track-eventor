const t                   = require('track-spec');
const Manager             = require('../lib/manager');
const HistoryEventManager = require('../lib/managers/history_event_manager');

t.describe('Manager', () => {
  t.beforeEach(() => {
    process.browser = true;
  });

  t.afterEach(() => {
    process.browser = false;
  });

  t.describe('#initialize', () => {
    const subject = (() => Manager.initialize());

    t.beforeEach(() => {
      HistoryEventManager.initialize = t.spy(HistoryEventManager.initialize);
    });

    t.it('Call HistoryEventManager.initialize', () => {
      subject();
      t.expect(HistoryEventManager.initialize.callCount).equals(1);
    });
  });
});
