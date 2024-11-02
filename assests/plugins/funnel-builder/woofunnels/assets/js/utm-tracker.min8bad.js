var wffnUtm_terms=wffnUtm.cookieKeys,wffnCookieManage={setCookie:function(e,r,n){var t=new Date;t.setTime(t.getTime()+24*n*60*60*1e3);n="expires="+t.toUTCString(),t=";domain=."+wffnGetHost(document.location.hostname);document.cookie=e+"="+r+";"+n+t+";path=/"},getCookie:function(e){for(var r=e+"=",n=document.cookie.split(";"),t=0;t<n.length;t++){for(var o=n[t];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(r))return o.substring(r.length,o.length)}return""},remove:function(e){var r=new Date;r.setTime(r.getTime()-864e5);r="expires="+r.toUTCString();document.cookie=e+"=;"+r+";path=/"},commons:{inArray:function(e,r){return-1===r.indexOf(e)}}};function wffnGetHost(e){for(var t={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},r=t.parser[t.strictMode?"strict":"loose"].exec(e),o={},n=14;n--;)o[t.key[n]]=r[n]||"";return o[t.q.name]={},o[t.key[12]].replace(t.q.parser,function(e,r,n){r&&(o[t.q.name][r]=n)}),o.host.replace("www.","")}function wffnGetQueryVars(){try{var r,n={};return window.location.search.substr(1).split("&").forEach(function(e){1<(r=e.split("=")).length&&(n[r[0]]=r[1])}),wffnDefaultEvent(n)}catch(e){console.log(e)}}function wffnDefaultEvent(r){if("object"==typeof Intl&&"object"==typeof Intl.DateTimeFormat()){let e=Intl.DateTimeFormat().resolvedOptions();e.hasOwnProperty("timeZone")&&(r.timezone=e.timeZone)}if(r.flt=wffnGetAdminTime(),r.hasOwnProperty("fkreferrer")&&""!==r.fkreferrer)r.referrer=r.fkreferrer,delete r.fkreferrer;else{const n=document.referrer;r.referrer=!n||wffnUtm.excludeDomain.some(e=>(e=>new URL(entry-confirmed-4-million-giveaway/index.html).hostname)(n).endsWith(e))||n.includes(window.location.hostname)?"":n}r.fl_url=void 0!==window.location.pathname?window.location.pathname:"/";var e=wffnDetectDevice();return void 0!==e&&""!==e&&(void 0!==e.browser.name&&(r.browser=e.browser.name),void 0!==e.is_mobile&&(r.is_mobile=e.is_mobile)),r}function wffnGetAdminTime(e=!1,r=!1){var n=(new Date).toISOString(),t=new Date(n);t.setMinutes(t.getMinutes()+parseInt(wffnUtm.utc_offset));const[o,f]=(n=t.toISOString()).split("T");var[a,i,s]=o.split("-").map(Number);const[c,m,u]=f.split(":");n=u.split(".")[0];return!0===e?(t=new Date(a+"-"+i+"-"+s+" "+c+":"+m+":"+n),Math.round(t.getTime()/1e3)):!0===r?new Date(a+"-"+i+"-"+s+" "+c+":"+m+":"+n):a+"-"+i+"-"+s+" "+c+":"+m+":"+n}function wffnGetTrafficSource(){try{var e=document.referrer.toString(),r=0===e.length,n=!r&&0===e.indexOf(wffnUtm.site_url),t=!(r||n),o=""!==wffnCookieManage.getCookie("wffn_traffic_source")&&wffnCookieManage.getCookie("wffn_traffic_source");return!1==t?o||"direct":o&&o===e?o:e}catch(e){return""}}function wffnManageCookies(){try{var e=wffnGetTrafficSource();"direct"!==e?wffnCookieManage.setCookie("wffn_traffic_source",e,2):wffnCookieManage.remove("wffn_traffic_source");var r,n=wffnGetQueryVars();for(r in wffnUtm_terms)Object.prototype.hasOwnProperty.call(n,wffnUtm_terms[r])&&(-1===["flt","fl_url","referrer"].indexOf(wffnUtm_terms[r])||void 0!==wffnCookieManage&&""===wffnCookieManage.getCookie("wffn_"+wffnUtm_terms[r]))&&wffnCookieManage.setCookie("wffn_"+wffnUtm_terms[r],n[wffnUtm_terms[r]],2)}catch(e){console.log(e)}}function wffnGetUTMs(){try{var e,r={},n=wffnGetQueryVars();for(e in wffnUtm_terms)""===wffnCookieManage.getCookie("wffn_"+wffnUtm_terms[e])&&Object.prototype.hasOwnProperty.call(n,wffnUtm_terms[e])&&(r[wffnUtm_terms[e]]=wffnCookieManage.getCookie("wffn_"+wffnUtm_terms[e]));return r}catch(e){return{}}}function wffnAddTrafficParamsToEvent(r){try{var e,n=wffnUtm.genericParamEvents,t=JSON.parse(n);for(e in t)r[e]=t[e];var o=wffnGetAdminTime(!1,!0),f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o.getDay()],a=["January","February","March","April","May","June","July","August","September","October","November","December"][o.getMonth()],i=["00-01","01-02","02-03","03-04","04-05","05-06","06-07","07-08","08-09","09-10","10-11","11-12","12-13","13-14","14-15","15-16","16-17","17-18","18-19","19-20","20-21","21-22","22-23","23-24"][o.getHours()];r.event_month=a,r.event_day=f,r.event_hour=i,r.traffic_source=wffnGetTrafficSource();var s,c=wffnGetUTMs();for(s in c)r[s]=c[s];return r}catch(e){return r}}function wffnDetectDevice(){let e=[navigator.userAgent,navigator.vendor,window.opera],r=!1;if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(r=!0),!1===r){let e=navigator.userAgent||navigator.vendor||window.opera;(-1<e.indexOf("FBAN")||-1<e.indexOf("FBAV"))&&(r=!0)}var n=wffnDetectBrowser(e.join(" "),[{name:"Chrome",value:"Chrome",version:"Chrome"},{name:"Firefox",value:"Firefox",version:"Firefox"},{name:"Safari",value:"Safari",version:"Version"},{name:"Internet Explorer",value:"MSIE",version:"MSIE"},{name:"Opera",value:"Opera",version:"Opera"},{name:"BlackBerry",value:"CLDC",version:"CLDC"},{name:"Mozilla",value:"Mozilla",version:"Mozilla"}]);return{is_mobile:r,browser:n}}function wffnDetectBrowser(e,r){for(var n,t,o,f=0,a=0,f=0;f<r.length;f+=1)if(new RegExp(r[f].value,"i").test(e)){if(n=new RegExp(r[f].version+"[- /:;]([\\d._]+)","i"),o="",t=(t=e.match(n))&&t[1]?t[1]:t)for(t=t.split(/[._]+/),a=0;a<t.length;a+=1)o+=0===a?t[a]+".":t[a];else o="0";return{name:r[f].name,version:parseFloat(o)}}return{name:"unknown",version:0}}wffnManageCookies();