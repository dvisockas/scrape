$ ->
  $(document).on 'click', '#navigate', (e) ->
    url = $('#url').val()
    console.log url

    attachIframe(url)

  attachIframe = (url) ->
    $('#frameWrapper').html('')
    iframe = [
      '<iframe src="',
      '/resource?url=http://'
      url,
      '" frameborder="0" id="frame"></iframe>'
    ].join('')
    $(iframe).appendTo('#frameWrapper')
