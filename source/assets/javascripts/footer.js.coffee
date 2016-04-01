
# Positionning funny elements
$RndmElmts = $('span.funnythings')
PositionElmts = ->
  $RndmElmts.each ->
    left = Math.floor((Math.random() * 100))
    top = Math.floor((Math.random() * 100))
    $(this).css('top': top + '%', 'left': left + '%')

# Stellar js
Stellar = ->
  if window.matchMedia('(min-width: 860px)').matches
    $ ->
      $.stellar
        horizontalScrolling: false
        hideDistantElements: false
        off
      return
  return

# $(document).ready Stellar
$(window).load PositionElmts
$(window).load Stellar
