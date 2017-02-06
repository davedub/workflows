$ = require 'jquery'

do fill = (item = 'The most creative minds in Art, I guarantee it') ->
  $('.tagline').append "#{item}"
fill