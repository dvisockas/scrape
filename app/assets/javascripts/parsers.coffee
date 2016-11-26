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

  $(document).on 'click', '#listen', ->
    $(@).toggleClass 'active'
    doc = frame.contents()[0]

    listening = $(@).hasClass 'active'

    if listening
      # Listen to events
    else
      # Stop listening


