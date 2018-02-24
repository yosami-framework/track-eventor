const t                   = require('track-spec');
const TrackEventor        = require('../../lib/index');
const HistoryEventManager = require('../../lib/managers/history_event_manager');

t.describe('HistoryEventManager', () => {
  t.describe('#initialize', () => {
    const subject = (() => HistoryEventManager.initialize());

    t.beforeEach(() => {
      global.history = {};
      global.addEventListener = t.spy();
      TrackEventor.dispatch = t.spy(TrackEventor.dispatch);
    });

    t.it('Call global.addEventListener', () => {
      subject();
      t.expect(global.addEventListener.callCount).equals(1);
      t.expect(global.addEventListener.args[0]).equals('popstate');

      global.addEventListener.args[1]();
      t.expect(TrackEventor.dispatch.callCount).equals(2);
    });

    t.context('When history has replaceState', () => {
      t.beforeEach(() => {
        mockFunc = t.spy();
        global.history.replaceState = mockFunc;
      });
      let mockFunc = null;

      t.it('Rewrite history.replaceState', () => {
        subject();
        global.history.replaceState();
        t.expect(TrackEventor.dispatch.callCount).equals(2);
        t.expect(mockFunc.callCount).equals(1);
      });
    });

    t.context('When history has pushState', () => {
      t.beforeEach(() => {
        mockFunc = t.spy();
        global.history.pushState = mockFunc;
      });
      let mockFunc = null;

      t.it('Rewrite history.replaceState', () => {
        subject();
        global.history.pushState();
        t.expect(TrackEventor.dispatch.callCount).equals(2);
        t.expect(mockFunc.callCount).equals(1);
      });
    });
  });
});
