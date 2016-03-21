$root = $('html')
$nav_header = $('#header')
$nav_header_links = $('#header nav ul li a')
$navicon = $('[data-navicon="button"]')
header_height = $('#header').height()
hero_height = $('#accueil').height()
offset_val = hero_height - header_height
eventType = if document.ontouchstart != null then 'click' else 'touchstart'

# Header appear after scroll
navSlide = ->
  scroll_top = $(window).scrollTop()
  if scroll_top >= offset_val
    $nav_header.addClass 'is-sticky'
  else
    $nav_header.removeClass 'is-sticky'
  return

# Scroll to anchor with animation
anchorLinks = ->
  $('a[href^="#"]').on 'click', (e) ->
    e.preventDefault()
    target = @hash
    $target = $(target)
    $('html, body').stop().animate { 'scrollTop': $target.offset().top }, 900, 'swing'

# Add small nav for small screen sizes
smallMenu = ->
  if $(window).width() <= 860
    $nav_header.addClass('smallmenu')
  else
    $nav_header.removeClass('smallmenu')

# Open and close menu
openMenu = ->
  $navicon.click ->
    $nav_header.toggleClass('isopen')
  $nav_header_links.click ->
    $nav_header.removeClass('isopen')

# Actions
$(window).scroll navSlide
$(document).ready anchorLinks
$(document).ready openMenu
$(document).ready smallMenu
$(window).resize smallMenu
