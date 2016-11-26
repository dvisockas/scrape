$ ->
  $(document).on 'click', '.toggle', ->
    $('#sidebar').toggleClass 'active'

  $(document).on 'click', '#navigate', (e) ->
    url = $('#url').val()
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
    frame = $('#frame')
    doc = frame.contents()[0]

    listening = $(@).hasClass 'active'

    if listening
      # Listen to events
      startEventRecording(doc)
      $('#sidebar').hide()
    else
      window.timeline(window.events)
      $('#sidebar').show()
      # Stop listening
      stopEventRecording(doc)
