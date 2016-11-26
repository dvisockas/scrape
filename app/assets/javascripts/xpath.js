function getXPath (element) {
  var xpath = '';
  for ( ; element && element.nodeType == 1; element = element.parentNode ) {
    var id = $(element.parentNode).children(element.tagName).index(element) + 1;
    id > 1 ? (id = '[' + id + ']') : (id = '');
    xpath = '/' + element.tagName.toLowerCase() + id + xpath;
  }
  return xpath;
}

function getElementsFromXPath (xpath, document) {
  var result = [];
  var nodesSnapshot = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
  for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
    result.push( nodesSnapshot.snapshotItem(i) );
  }
  return result;
}


function startXPathSelection(attribute) {
  window.model = {};

  window.onmouseup = function(event) {
    // window.model[attribute]

  }
}

$(function() {
  $(document).on('click', '#addAttribute', function() {
    window.currentAttribute = $('input#attributeName').val();
    startXPathSelection(window.currentAttribute);
  })
});

// input#attributeName
//   span#addAttribute