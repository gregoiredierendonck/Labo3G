!function(){var n,t,o;n=$("span.funnythings"),t=function(){return n.each(function(){var n,t;return n=Math.floor(90*Math.random()),t=Math.floor(90*Math.random()),$(this).css({top:t+"%",left:n+"%"})})},o=function(){window.matchMedia("(min-width: 860px)").matches&&$(function(){$.stellar({horizontalScrolling:!1,horizontalOffset:0,verticalOffset:0})})},$(window).load(t),$(window).load(o)}.call(this);