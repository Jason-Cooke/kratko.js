javascript:(function(){var el=document.createElement('script');el.src='https://github.com/kangax/kratko.js/raw/master/dist/kratko.js';el.onload=function(){var objectName = window.prompt('Which object to inspect?'); if (!objectName) return; new TableViewer(Kratko.getStatsFor(eval(objectName)))};document.getElementsByTagName("head")[0].appendChild(el)})();