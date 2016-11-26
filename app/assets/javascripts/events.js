window.events = [],
window.eventList = [
  'cut',
  'paste',
  'copy',
  'keyup',
  'click',
  'select',
  // 'mousemove',
];

function startEventRecording (document) {
  eventList.forEach(function (name) {
    document['on' + name] = function (event) {
      events.push({
        event: event,
        type: event.type,
        path: getXPath(event.target),
        timestamp: (new Date()).getTime(),
      });
    };
  });
}

function stopEventRecording (document) {
  eventList.forEach(function (name) {
    document['on' + name] = null;
  });
}