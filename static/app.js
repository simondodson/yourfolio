!function(){"use strict";var r="undefined"==typeof global?self:global;if("function"!=typeof r.require){var e={},n={},t={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,a=function(r,e){for(var n,t=[],i=(o.test(e)?r+"/"+e:e).split("/"),a=0,u=i.length;a<u;a++)n=i[a],".."===n?t.pop():"."!==n&&""!==n&&t.push(n);return t.join("/")},u=function(r){return r.split("/").slice(0,-1).join("/")},c=function(e){return function(n){var t=a(u(e),n);return r.require(t,e)}},l=function(r,e){var t=h&&h.createHot(r),i={id:r,exports:{},hot:t};return n[r]=i,e(i.exports,c(r),i),i.exports},s=function(r){return t[r]?s(t[r]):r},f=function(r,e){return s(a(u(r),e))},p=function(r,t){null==t&&(t="/");var o=s(r);if(i.call(n,o))return n[o].exports;if(i.call(e,o))return l(o,e[o]);throw new Error("Cannot find module '"+r+"' from '"+t+"'")};p.alias=function(r,e){t[e]=r};var d=/\.[^.\/]+$/,v=/\/index(\.[^\/]+)?$/,g=function(r){if(d.test(r)){var e=r.replace(d,"");i.call(t,e)&&t[e].replace(d,"")!==e+"/index"||(t[e]=r)}if(v.test(r)){var n=r.replace(v,"");i.call(t,n)||(t[n]=r)}};p.register=p.define=function(r,t){if(r&&"object"==typeof r)for(var o in r)i.call(r,o)&&p.register(o,r[o]);else e[r]=t,delete n[r],g(r)},p.list=function(){var r=[];for(var n in e)i.call(e,n)&&r.push(n);return r};var h=r._hmr&&new r._hmr(f,p,e,n);p._cache=n,p.hmr=h&&h.wrap,p.brunch=!0,r.require=p}}(),function(){"undefined"==typeof window?this:window;require.register("app.js",function(r,e,n){"use strict";e("modernizr");var t=e("jquery"),i={init:function(){this.initBurgerHandler();var r=t(".project");r.length&&this.initFadeInProjects(r)},initFadeInProjects:function(r){var e=t(window),n=function(){var n=e.scrollTop(),i=n+e.height();return r.each(function(r){var e=t(this);if(e.offset().top<=i)return e.addClass("animated fadeInUp").removeClass("transparent")})};r.addClass("transparent"),e.on("scroll",n),e.trigger("scroll")},initBurgerHandler:function(){var r=t(".nav-container"),e=t(".burger");e.click(function(){r.toggleClass("BurgerMenu--active")})}};n.exports=i}),require.register("___globals___",function(r,e,n){})}(),require("___globals___");