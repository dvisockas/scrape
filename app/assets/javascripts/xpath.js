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

// input#attributeName
//   span#addAttribute

window.model = {};

$(document).on('click', '.record', function () {
  $(this).toggleClass('active');
  var frameContent = $('#frame').contents(),
      document = frameContent[0];

  if ($(this).hasClass('active')) {
    var s=document.createElement('div');s.innerHTML='Loading...';s.style.color='black';s.style.padding='20px';s.style.position='fixed';s.style.zIndex='9999';s.style.fontSize='3.0em';s.style.border='2px solid black';s.style.right='40px';s.style.top='40px';s.setAttribute('class','selector_gadget_loading');s.style.background='white';document.body.appendChild(s);s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('src','https://dv0akt2986vzh.cloudfront.net/unstable/lib/selectorgadget.js');document.body.appendChild(s);
    setTimeout(function () {
      $('#frame').contents().find('#_sg_div').attr('style', 'bottom: 60px !important');
    }, 4000);
  } else {
    var attrName = $(this).parent().find('input').val();
    window.model[attrName] = frameContent.find('#_sg_div #_sg_path_field').val();
    frameContent.find('#_sg_div input[value=X]').click();
  }
})
