window.events = [],
window.eventList = [
  'cut',
  'paste',
  'copy',
  'keyup',
  'click',
  'select',
  // 'scroll',
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

  document.onmouseup = function(event) {
    var selection = document.getSelection();

    if (selection.toString().length > 0) {
      console.log(selection)
      console.log(getXPath(selection.anchorNode.parentNode))
    }
  }
}

function stopEventRecording (document) {
  eventList.forEach(function (name) {
    document['on' + name] = null;
  });
}