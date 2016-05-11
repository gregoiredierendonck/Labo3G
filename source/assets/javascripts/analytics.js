
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-69304119-2', 'auto');
  ga('send', 'pageview');

  (function(e, t) {
      function r(e, t) {
          e[t] = function() {
              e.push([ t ].concat(Array.prototype.slice.call(arguments, 0)));
          };
      }
      var n = "JacoRecorder";
      (function(e, t, i, s) {
          if (!i.__VERSION) {
              e[n] = i;
              var o = [ "init", "identify", "startRecording", "stopRecording", "removeUserTracking", "setUserInfo" ];
              for (var u = 0; u < o.length; u++) r(i, o[u]);
              i.__VERSION = .9, i.__INIT_TIME = 1 * new Date;
              var a = t.createElement("script");
              a.async = !0, a.setAttribute("crossorigin", "anonymous"), a.src = s;
              var f = t.getElementsByTagName("head")[0];
              f.appendChild(a);
          }
      })(e, t, e[n] || [], "//recorder-assets.getjaco.com/recorder.js");
  }).call(window, window, document), window.JacoRecorder.push([ "init", "3b739754-7f37-4a9a-a4ac-efd1839fe2e3", {} ]);
