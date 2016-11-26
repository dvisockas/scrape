window.timeline = function(data) {
  var container = document.getElementById('eventsWrapper');
  container.innerHTML = '';

  var events = data.map(function(datum, index) {
    return {
      id: index + 1,
      content: datum.type,
      start: datum.timestamp
    };
  });

  var items = new vis.DataSet(events);
  var options = {
    zoomable: false,
    moveable: false
  };

  var timeline = new vis.Timeline(container, items, options);
}
