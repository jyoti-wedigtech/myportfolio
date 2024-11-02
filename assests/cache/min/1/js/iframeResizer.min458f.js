/*! iFrame Resizer (iframeSizer.min.js ) - v4.3.1 - 2021-01-11
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2021 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
*/!function(e){if("undefined"!=typeof window){var n,i=0,t=!1,o=!1,r=7,a="[iFrameSizer]",s=a.length,f=null,c=window.requestAnimationFrame,l={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},d={},u=null,m={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){w("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},g={};window.jQuery&&((n=window.jQuery).fn?n.fn.iFrameResize||(n.fn.iFrameResize=function(e){return this.filter("iframe").each(function(n,i){H(i,e)}).end()}):$("","Unable to bind to jQuery, it is not fully loaded.")),"function"==typeof define&&define.amd?define([],L):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=L()),window.iFrameResize=window.iFrameResize||L()}function h(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function p(e,n,i){e.addEventListener(n,i,!1)}function b(e,n,i){e.removeEventListener(n,i,!1)}function y(e){return d[e]?d[e].log:t}function v(e,n){_("log",e,n,y(e))}function $(e,n){_("info",e,n,y(e))}function w(e,n){_("warn",e,n,!0)}function _(e,n,i,t){var o,r,s;!0===t&&"object"==typeof window.console&&console[e](a+"["+(s="Host page: "+(r=o=n),window.top!==window.self&&(s=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+r:"Nested host page: "+r),s)+"]",i)}function x(e){function n(){i("Height"),i("Width"),E(function(){O(A),I(B),h("onResized",A)},A,"init")}function i(e){var n=Number(d[B]["max"+e]),i=Number(d[B]["min"+e]),t=e.toLowerCase(),o=Number(A[t]);v(B,"Checking "+t+" is in range "+i+"-"+n),o<i&&(o=i,v(B,"Set "+t+" to min value")),n<o&&(o=n,v(B,"Set "+t+" to max value")),A[t]=""+o}function t(e){return L.substr(L.indexOf(":")+r+e)}function o(e,n){var i,t;i=function(){var i,t;T("Send Page Info","pageInfo:"+(i=document.body.getBoundingClientRect(),JSON.stringify({iframeHeight:(t=A.iframe.getBoundingClientRect()).height,iframeWidth:t.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(t.top-i.top,10),offsetLeft:parseInt(t.left-i.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},g[t=n]||(g[t]=setTimeout(function(){g[t]=null,i()},32))}function c(e){var n=e.getBoundingClientRect();return z(B),{x:Math.floor(Number(n.left)+Number(f.x)),y:Math.floor(Number(n.top)+Number(f.y))}}function l(e){var n=e?c(A.iframe):{x:0,y:0},i={x:Number(A.width)+n.x,y:Number(A.height)+n.y};v(B,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):w(B,"Unable to scroll to requested position, window.parentIFrame not found"):(f=i,u(),v(B,"--"))}function u(){!1!==h("onScroll",f)?I(B):R()}function m(e){var n={};if(0===Number(A.width)&&0===Number(A.height)){var i=t(9).split(":");n={x:i[1],y:i[0]}}else n={x:A.width,y:A.height};h(e,{iframe:A.iframe,screenX:Number(n.x),screenY:Number(n.y),type:A.type})}function h(e,n){return k(B,e,n)}var y,_,x,F,H,S,P,j,L=e.data,A={},B=null;"[iFrameResizerChild]Ready"===L?function(){for(var e in d)T("iFrame requested init",C(e),d[e].iframe,e)}():a===(""+L).substr(0,s)&&L.substr(s).split(":")[0]in d?(S=(H=L.substr(s).split(":"))[1]?parseInt(H[1],10):0,j=getComputedStyle(P=d[H[0]]&&d[H[0]].iframe),d[B=(A={iframe:P,id:H[0],height:S+function(e){if("border-box"!==e.boxSizing)return 0;var n=e.paddingTop?parseInt(e.paddingTop,10):0,i=e.paddingBottom?parseInt(e.paddingBottom,10):0;return n+i}(j)+function(e){if("border-box"!==e.boxSizing)return 0;var n=e.borderTopWidth?parseInt(e.borderTopWidth,10):0,i=e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0;return n+i}(j),width:H[2],type:H[3]}).id]&&(d[B].loaded=!0),(F=A.type in{true:1,false:1,undefined:1})&&v(B,"Ignoring init message from meta parent page"),!F&&(x=!0,d[_=B]||(x=!1,w(A.type+" No settings for "+_+". Message was: "+L)),x)&&(v(B,"Received: "+L),y=!0,null===A.iframe&&(w(B,"IFrame ("+A.id+") not found"),y=!1),y&&function(){var n,i=e.origin,t=d[B]&&d[B].checkOrigin;if(t&&""+i!="null"&&!(t.constructor===Array?function(){var e=0,n=!1;for(v(B,"Checking connection is from allowed list of origins: "+t);e<t.length;e++)if(t[e]===i){n=!0;break}return n}():(n=d[B]&&d[B].remoteHost,v(B,"Checking connection is from: "+n),i===n)))throw Error("Unexpected message received from: "+i+" for "+A.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){var e,i,r,a,s,g;switch(d[B]&&d[B].firstRun&&d[B]&&(d[B].firstRun=!1),A.type){case"close":M(A.iframe);break;case"message":e=t(6),v(B,"onMessage passed: {iframe: "+A.iframe.id+", message: "+e+"}"),h("onMessage",{iframe:A.iframe,message:JSON.parse(e)}),v(B,"--");break;case"mouseenter":m("onMouseEnter");break;case"mouseleave":m("onMouseLeave");break;case"autoResize":d[B].autoResize=JSON.parse(t(9));break;case"scrollTo":l(!1);break;case"scrollToOffset":l(!0);break;case"pageInfo":o(d[B]&&d[B].iframe,B),function(){function e(e,t){function r(){d[i]?o(d[i].iframe,i):n()}["scroll","resize"].forEach(function(n){v(i,e+n+" listener for sendPageInfo"),t(window,n,r)})}function n(){e("Remove ",b)}var i=B;e("Add ",p),d[i]&&(d[i].stopPageInfo=n)}();break;case"pageInfoStop":d[B]&&d[B].stopPageInfo&&(d[B].stopPageInfo(),delete d[B].stopPageInfo);break;case"inPageLink":s=decodeURIComponent(a=(i=t(9)).split("#")[1]||""),(g=document.getElementById(s)||document.getElementsByName(s)[0])?(r=c(g),v(B,"Moving to in page link (#"+a+") at x: "+r.x+" y: "+r.y),f={x:r.x,y:r.y},u(),v(B,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(a):v(B,"In page link #"+a+" not found and window.parentIFrame not found"):v(B,"In page link #"+a+" not found");break;case"reset":W(A);break;case"init":n(),h("onInit",A.iframe);break;default:0===Number(A.width)&&0===Number(A.height)?w("Unsupported message received ("+A.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):n()}}())):$(B,"Ignored: "+L)}function k(e,n,i){var t=null,o=null;if(d[e]){if("function"!=typeof(t=d[e][n]))throw TypeError(n+" on iFrame["+e+"] is not a function");o=t(i)}return o}function F(e){delete d[e.id]}function M(e){var n=e.id;if(!1!==k(n,"onClose",n)){v(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(i){w(i)}k(n,"onClosed",n),v(n,"--"),F(e)}else v(n,"Close iframe cancelled by onClose event")}function z(n){null===f&&v(n,"Get page position: "+(f={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}).x+","+f.y)}function I(e){null!==f&&(window.scrollTo(f.x,f.y),v(e,"Set page position: "+f.x+","+f.y),R())}function R(){f=null}function W(e){v(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),z(e.id),E(function(){O(e),T("reset","reset",e.iframe,e.id)},e,"reset")}function O(e){function n(n){var t,r;t=n,e.id?(e.iframe.style[t]=e[t]+"px",v(e.id,"IFrame ("+i+") "+t+" set to "+e[t]+"px")):v("undefined","messageData id not set"),r=n,o||"0"!==e[r]||(o=!0,v(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){Object.keys(d).forEach(function(e){!function(e){function n(n){return"0px"===(d[e]&&d[e].iframe.style[n])}d[e]&&null!==d[e].iframe.offsetParent&&(n("height")||n("width"))&&T("Visibility change","resize",d[e].iframe,e)}(e)})}var n,i=h();i&&(n=document.querySelector("body"),new i(function n(i){v("window","Mutation observed: "+i[0].target+" "+i[0].type),S(e,16)}).observe(n,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}))}())}var i=e.iframe.id;d[i]&&(d[i].sizeHeight&&n("height"),d[i].sizeWidth&&n("width"))}function E(e,n,i){i!==n.type&&c&&!window.jasmine?(v(n.id,"Requesting animation frame"),c(e)):e()}function T(e,n,i,t,o){var r,s=!1;d[t=t||i.id]&&(i&&"contentWindow"in i&&null!==i.contentWindow?(r=d[t]&&d[t].targetOrigin,v(t,"["+e+"] Sending msg to iframe["+t+"] ("+n+") targetOrigin: "+r),i.contentWindow.postMessage(a+n,r)):w(t,"["+e+"] IFrame("+t+") not found"),o&&d[t]&&d[t].warningTimeout&&(d[t].msgTimeout=setTimeout(function(){!d[t]||d[t].loaded||s||(s=!0,w(t,"IFrame has not responded within "+d[t].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))},d[t].warningTimeout)))}function C(e){return e+":"+d[e].bodyMarginV1+":"+d[e].sizeWidth+":"+d[e].log+":"+d[e].interval+":"+d[e].enablePublicMethods+":"+d[e].autoResize+":"+d[e].bodyMargin+":"+d[e].heightCalculationMethod+":"+d[e].bodyBackground+":"+d[e].bodyPadding+":"+d[e].tolerance+":"+d[e].inPageLinks+":"+d[e].resizeFrom+":"+d[e].widthCalculationMethod+":"+d[e].mouseEvents}function H(n,o){var r,a,s,f,c,u,g,b=(""===(s=n.id)&&(n.id=(a=o&&o.id||m.id+i++,null!==document.getElementById(a)&&(a+=i++),s=a),t=(o||{}).log,v(s,"Added missing iframe ID: "+s+" ("+n.src+")")),s);function y(e){1/0!==d[b][e]&&0!==d[b][e]&&(n.style[e]=d[b][e]+"px",v(b,"Set "+e+" = "+d[b][e]+"px"))}function $(e){if(d[b]["min"+e]>d[b]["max"+e])throw Error("Value for min"+e+" can not be greater than max"+e)}b in d&&"iFrameResizer"in n?w(b,"Ignored iFrame, already setup."):(g=(g=o)||{},d[b]={firstRun:!0,iframe:n,remoteHost:n.src&&n.src.split("index.html").slice(0,3).join("index.html")},function(e){if("object"!=typeof e)throw TypeError("Options is not an object")}(g),Object.keys(g).forEach(function e(n){var i=n.split("Callback");if(2===i.length){var t="on"+i[0].charAt(0).toUpperCase()+i[0].slice(1);this[t]=this[n],delete this[n],w(b,"Deprecated: '"+n+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}},g),function(e){for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&(d[b][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:m[n])}(g),d[b]&&(d[b].targetOrigin=!0===d[b].checkOrigin?""===(r=d[b].remoteHost)||null!==r.match(/^(about:blank|javascript:|file:\/\/)/)?"*":r:"*"),function(){switch(v(b,"IFrame scrolling "+(d[b]&&d[b].scrolling?"enabled":"disabled")+" for "+b),n.style.overflow=!1===(d[b]&&d[b].scrolling)?"hidden":"auto",d[b]&&d[b].scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=d[b]?d[b].scrolling:"no"}}(),$("Height"),$("Width"),y("maxHeight"),y("minHeight"),y("maxWidth"),y("minWidth"),"number"!=typeof(d[b]&&d[b].bodyMargin)&&"0"!==(d[b]&&d[b].bodyMargin)||(d[b].bodyMarginV1=d[b].bodyMargin,d[b].bodyMargin=d[b].bodyMargin+"px"),f=C(b),(u=h())&&(c=u,n.parentNode&&new c(function(e){e.forEach(function(e){Array.prototype.slice.call(e.removedNodes).forEach(function(e){e===n&&M(n)})})}).observe(n.parentNode,{childList:!0})),p(n,"load",function(){var i,t;T("iFrame.onload",f,n,e,!0),i=d[b]&&d[b].firstRun,t=d[b]&&d[b].heightCalculationMethod in l,!i&&t&&W({iframe:n,height:0,width:0,type:"init"})}),T("init",f,n,e,!0),d[b]&&(d[b].iframe.iFrameResizer={close:M.bind(null,d[b].iframe),removeListeners:F.bind(null,d[b].iframe),resize:T.bind(null,"Window resize","resize",d[b].iframe),moveToAnchor:function(e){T("Move to anchor","moveToAnchor:"+e,d[b].iframe,b)},sendMessage:function(e){T("Send Message","message:"+(e=JSON.stringify(e)),d[b].iframe,b)}}))}function S(e,n){null===u&&(u=setTimeout(function(){u=null,e()},n))}function P(){"hidden"!==document.visibilityState&&(v("document","Trigger event: Visiblity change"),S(function(){j("Tab Visable","resize")},16))}function j(e,n){Object.keys(d).forEach(function(i){var t;d[t=i]&&"parent"===d[t].resizeFrom&&d[t].autoResize&&!d[t].firstRun&&T(e,n,d[i].iframe,i)})}function L(){var n;function i(e,i){i&&(function(){if(!i.tagName)throw TypeError("Object is not a valid DOM element");if("IFRAME"!==i.tagName.toUpperCase())throw TypeError("Expected <IFRAME> tag, found <"+i.tagName+">")}(),H(i,e),n.push(i))}return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!c;e+=1)c=window[n[e]+"RequestAnimationFrame"];c?c=c.bind(window):v("setup","RequestAnimationFrame not supported")}(),p(window,"message",x),p(window,"resize",function(){var e="resize";v("window","Trigger event: "+e),S(function(){j("Window "+e,"resize")},16)}),p(document,"visibilitychange",P),p(document,"-webkit-visibilitychange",P),function(t,o){var r;switch(n=[],(r=t)&&r.enablePublicMethods&&w("enablePublicMethods option has been removed, public methods are now always available in the iFrame"),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),i.bind(e,t));break;case"object":i(t,o);break;default:throw TypeError("Unexpected data type ("+typeof o+")")}return n}}}()