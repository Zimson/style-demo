import 'whatwg-fetch';
import PromisePolyfill from 'es6-promise';

PromisePolyfill.polyfill();


function loadGoogleFont() {
  window.WebFontConfig = {
    google: {families: ['Open+Sans:400,600:latin,cyrillic']}
  };

  (function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
}

function isObject(object) {
  return object !== null && typeof object === 'object';
}



const Utils = {
  loadGoogleFont,
  isObject,
};

export default Utils;
