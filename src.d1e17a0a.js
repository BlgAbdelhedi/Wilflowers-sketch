parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FTFo":[function(require,module,exports) {
var t=Math.PI;function e(t,e){return Math.floor(Math.random()*(e-t+1))+t}var n=document.querySelector("#canvas"),o=document.querySelector("#text_container"),i=n.width=window.innerWidth,r=n.height=window.innerHeight,l=n.getContext("2d"),c=0,h=["#fb8500","#FFB703"],s=100;function a(t){var e=t.x,n=t.y,o=t.thickness,i=t.width,r=t.loss,c=t.direction,h=t.angle,s=t.color;l.beginPath(),l.moveTo(e,n),e+=Math.cos(h)*i,n+=-Math.sin(h)*i,l.strokeStyle=s,l.lineWidth=o,l.lineCap="butt",l.lineJoin="bevel",l.shadowColor=s,l.shadowBlur=10,l.fillStyle=s,l.lineTo(e,n),l.stroke(),l.closePath(),o*=r,i*=r,c?h-=.025:h+=.025,Math.random()>=.9&&setTimeout(function(){a({x:e,y:n,thickness:o,width:1.4*i,loss:r,direction:!c,angle:h,color:s})},2),i>1&&a({x:e,y:n,thickness:o,width:i,loss:r,direction:c,angle:h,color:s})}!function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;c<s&&(a({x:i/2,y:r+5,thickness:12,width:35,loss:.9,direction:e(0,1),angle:e(0,16),color:h[n]}),setTimeout(function(){n===h.length?t():t(++n),c++,o.innerHTML=" ".concat(c," branches")},1))}();
},{}],"Tdrx":[function(require,module,exports) {

},{}],"uBxZ":[function(require,module,exports) {
"use strict";require("./wildflower"),require("./assets/styles/index.scss");
},{"./wildflower":"FTFo","./assets/styles/index.scss":"Tdrx"}]},{},["uBxZ"], null)