const t                   = require('track-spec');
const TrackEvent          = require('../lib/index');

t.describe('TrackEvent', () => {
  t.beforeEach(() => {
    process.browser = true;
  });

  t.afterEach(() => {
    process.browser = false;
  });

  t.describe('#dispatch', () => {
    const subject = (() => TrackEvent.dispatch('hoge', data));
    let data = null;

    t.beforeEach(() => {
      data = {hoge: 'fuga'};
      global.dispatchEvent = t.spy(global.dispatchEvent);
    });

    t.context('When defined CustomEvent', () => {
      t.beforeEach(() => {
        global.CustomEvent = (class {});
      });

      t.it('Call global.dispatchEvent', () => {
        subject();
        t.expect(global.dispatchEvent.callCount).equals(1);
        t.expect(
          global.dispatchEvent.args[0] instanceof global.CustomEvent
        ).equals(true);
      });
    });

    t.context('When not defined CustomEvent', () => {
      t.beforeEach(() => {
        mockEvent = {
          initCustomEvent: t.spy(),
        };
        global.CustomEvent = null;
        global.document = {
          createEvent: t.spy(() => mockEvent),
        };
      });
      let mockEvent = null;

      t.it('Call global.dispatchEvent', () => {
        subject();
        t.expect(global.dispatchEvent.callCount).equals(1);
        t.expect(global.dispatchEvent.args[0]).equals(mockEvent);
      });
    });
  });
});
