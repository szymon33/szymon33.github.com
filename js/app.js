//
// Launch FancyBox
//

$(document).ready(function() {
  $('.fancybox').fancybox({
    padding : 0,
    openEffect  : 'elastic',
    scrolling : 'no',
    overlayShow : true,
    helpers : {
      title : {
        type: 'over'
      }
    },
    afterLoad : function() {
      this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
    }
  });
});


//
// Open external links in new window
//

$(document).ready(function() { 
  var addTarget = function(element) {
      $(element).attr('target', '_blank');
  };

  $('a').each(function (i, e) {
      var href = $(e).attr('href');

      // Anchor without href, like addThis creates them.
      if (!href) { return; }

      // Mailto link usually opens in an app, but webmail users should have it open in a new tab
      if (href.match(/^mailto/)) { return; }

      var first_char = href.substring(0, 1);

      // Relative link
      if (first_char == '/') { return; }

      // Anchor
      if (first_char == '#') { return; }

      // Absolute link to this site
      if (href.match('http?://' + window.location.hostname)) { return; }

      // Not a known type, so assume it's an external link
      addTarget(e);
  });
});


//
// Google Analitics
//

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-32656552-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();