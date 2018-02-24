# TrackEventor
Event manager for track.

## Installation

### npm

```shell
npm install track-eventor
```

## Usage

```javascript
const TrackEventor      = require('track-eventor');
const TrackEventManager = require('track-eventor/lib/manager');

TrackEventManager.initialize();

// Dispatch event.
TrackEventor.dispatch('hoge', {foo: 'bar'});

// Get event names.
TrackEventor.ON_PUSH_HISTORY;   // Dispatch when history push.
TrackEventor.ON_POP_HISTORY;    // Dispatch when history pop.
TrackEventor.ON_CHANGE_HISTORY; // Dispatch when history pop or history push.
```
