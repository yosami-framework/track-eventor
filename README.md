# TrackEvent
Event manager for track.

## Installation

### npm

```shell
npm install track-event
```

## Usage

```javascript
const TrackEvent        = require('track-event');
const TrackEventManager = require('track-event/lib/manager');

TrackEventManager.initialize();

// Dispatch event.
TrackEvent.dispatch('hoge', {foo: 'bar'});

// Get event names.
TrackEvent.ON_PUSH_HISTORY;   // Dispatch when history push.
TrackEvent.ON_POP_HISTORY;    // Dispatch when history pop.
TrackEvent.ON_CHANGE_HISTORY; // Dispatch when history pop or history push.
```
