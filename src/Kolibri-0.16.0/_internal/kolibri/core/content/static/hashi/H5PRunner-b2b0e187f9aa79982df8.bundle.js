(self.webpackChunkhashi=self.webpackChunkhashi||[]).push([[346],{6809:function(e,t,n){var r=n(8856),i=n(4891);e.exports=function(e,t){return r(e,t,(function(t,n){return i(e,n)}))}},8856:function(e,t,n){var r=n(1860),i=n(1943),o=n(3365);e.exports=function(e,t,n){for(var a=-1,s=t.length,c={};++a<s;){var u=t[a],f=r(e,u);n(f,u)&&i(c,o(u,e),f)}return c}},7327:function(e,t,n){var r=n(9133),i=n(2001),o=n(4620),a=Math.max,s=Math.min;e.exports=function(e,t,n){var c,u,f,l,d,p,v=0,h=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=c,r=u;return c=u=void 0,v=t,l=e.apply(r,n)}function b(e){var n=e-p;return void 0===p||n>=t||n<0||m&&e-v>=f}function w(){var e=i();if(b(e))return x(e);d=setTimeout(w,function(e){var n=t-(e-p);return m?s(n,f-(e-v)):n}(e))}function x(e){return d=void 0,y&&c?g(e):(c=u=void 0,l)}function k(){var e=i(),n=b(e);if(c=arguments,u=this,p=e,n){if(void 0===d)return function(e){return v=e,d=setTimeout(w,t),h?g(e):l}(p);if(m)return clearTimeout(d),d=setTimeout(w,t),g(p)}return void 0===d&&(d=setTimeout(w,t)),l}return t=o(t)||0,r(n)&&(h=!!n.leading,f=(m="maxWait"in n)?a(o(n.maxWait)||0,t):f,y="trailing"in n?!!n.trailing:y),k.cancel=function(){void 0!==d&&clearTimeout(d),v=0,c=p=u=d=void 0},k.flush=function(){return void 0===d?l:x(i())},k}},2001:function(e,t,n){var r=n(521);e.exports=function(){return r.Date.now()}},4208:function(e,t,n){var r=n(6809),i=n(1280)((function(e,t){return null==e?{}:r(e,t)}));e.exports=i},7121:function(e,t){var n,r;n=function(e,t){"use strict";var n=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.edges=[],this.Toposort=e}return e.prototype.add=function(e,t){if("string"!=typeof e||!e)throw new TypeError("Dependent name must be given as a not empty string");if((t=Array.isArray(t)?t:[t]).length>0){var n=t,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}var a=o;if("string"!=typeof a||!a)throw new TypeError("Dependency name must be given as a not empty string");this.edges.push([e,a])}}else this.edges.push([e]);return this},e.prototype.sort=function(){var e=this,t=[],n=this.edges,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}var a=b=o,s=Array.isArray(a),c=0;for(a=s?a:a[Symbol.iterator]();;){var u;if(s){if(c>=a.length)break;u=a[c++]}else{if((c=a.next()).done)break;u=c.value}var f=u;-1===t.indexOf(f)&&t.push(f)}}for(var l=t.length,d=new Array(t.length),p=function n(r,i){if(0!==i.length&&-1!==i.indexOf(r))throw new Error("Cyclic dependency found. "+r+" is dependent of itself.\nDependency chain: "+i.join(" -> ")+" => "+r);var o=t.indexOf(r);if(-1!==o){var a=!1;t[o]=!1;var s=e.edges,c=Array.isArray(s),u=0;for(s=c?s:s[Symbol.iterator]();;){var f;if(c){if(u>=s.length)break;f=s[u++]}else{if((u=s.next()).done)break;f=u.value}var p=f;p[0]===r&&(a=a||i.concat([r]),n(p[1],a))}d[--l]=r}},v=0;v<t.length;v++)if(!1!==(f=t[v])){t[v]=!1;var h=this.edges,m=Array.isArray(h),y=0;for(h=m?h:h[Symbol.iterator]();;){var g,b;if(m){if(y>=h.length)break;g=h[y++]}else{if((y=h.next()).done)break;g=y.value}(b=g)[0]===f&&p(b[1],[f])}d[--l]=f}return d},e.prototype.clear=function(){return this.edges=[],this},e}();t.exports=n},void 0===(r=n.apply(t,[t,e]))||(e.exports=r)},4778:function(e,t,n){e.exports=n(7121)},6933:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ze},replacePaths:function(){return Ie}});var r=n(8552),i=n.n(r),o=n(7467),a=n.n(o),s=n(4208),c=n.n(s),u=n(2907),f=n.n(u),l=n(7327),d=n.n(l),p=n(3718),v=n.n(p),h=n(4778),m=n.n(h),y={},g=Uint8Array,b=Uint16Array,w=Int32Array,x=new g([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),k=new g([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),j=new g([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),P=function(e,t){for(var n=new b(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];var i=new w(n[30]);for(r=1;r<30;++r)for(var o=n[r];o<n[r+1];++o)i[o]=o-n[r]<<5|r;return{b:n,r:i}},S=P(x,2),O=S.b,C=S.r;O[28]=258,C[258]=28;for(var D=P(k,0),A=D.b,E=(D.r,new b(32768)),U=0;U<32768;++U){var L=(43690&U)>>1|(21845&U)<<1;L=(61680&(L=(52428&L)>>2|(13107&L)<<2))>>4|(3855&L)<<4,E[U]=((65280&L)>>8|(255&L)<<8)>>1}var T=function(e,t,n){for(var r=e.length,i=0,o=new b(t);i<r;++i)e[i]&&++o[e[i]-1];var a,s=new b(t);for(i=1;i<t;++i)s[i]=s[i-1]+o[i-1]<<1;if(n){a=new b(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var u=i<<4|e[i],f=t-e[i],l=s[e[i]-1]++<<f,d=l|(1<<f)-1;l<=d;++l)a[E[l]>>c]=u}else for(a=new b(r),i=0;i<r;++i)e[i]&&(a[i]=E[s[e[i]-1]++]>>15-e[i]);return a},I=new g(288);for(U=0;U<144;++U)I[U]=8;for(U=144;U<256;++U)I[U]=9;for(U=256;U<280;++U)I[U]=7;for(U=280;U<288;++U)I[U]=8;var F=new g(32);for(U=0;U<32;++U)F[U]=5;var z=T(I,9,1),H=T(F,5,1),R=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},J=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(7&t)&n},N=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(7&t)},M=function(e){return(e+7)/8|0},W=function(e,t,n){return(null==t||t<0)&&(t=0),(null==n||n>e.length)&&(n=e.length),new g(e.subarray(t,n))},V=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],$=function e(t,n,r){var i=new Error(n||V[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,e),!r)throw i;return i},B=function(e,t,n,r){var i=e.length,o=r?r.length:0;if(!i||t.f&&!t.l)return n||new g(0);var a=!n,s=a||2!=t.i,c=t.i;a&&(n=new g(3*i));var u=function(e){var t=n.length;if(e>t){var r=new g(Math.max(2*t,e));r.set(n),n=r}},f=t.f||0,l=t.p||0,d=t.b||0,p=t.l,v=t.d,h=t.m,m=t.n,y=8*i;do{if(!p){f=J(e,l,1);var b=J(e,l+1,3);if(l+=3,!b){var w=e[(B=M(l)+4)-4]|e[B-3]<<8,P=B+w;if(P>i){c&&$(0);break}s&&u(d+w),n.set(e.subarray(B,P),d),t.b=d+=w,t.p=l=8*P,t.f=f;continue}if(1==b)p=z,v=H,h=9,m=5;else if(2==b){var S=J(e,l,31)+257,C=J(e,l+10,15)+4,D=S+J(e,l+5,31)+1;l+=14;for(var E=new g(D),U=new g(19),L=0;L<C;++L)U[j[L]]=J(e,l+3*L,7);l+=3*C;var I=R(U),F=(1<<I)-1,V=T(U,I,1);for(L=0;L<D;){var B,K=V[J(e,l,F)];if(l+=15&K,(B=K>>4)<16)E[L++]=B;else{var q=0,_=0;for(16==B?(_=3+J(e,l,3),l+=2,q=E[L-1]):17==B?(_=3+J(e,l,7),l+=3):18==B&&(_=11+J(e,l,127),l+=7);_--;)E[L++]=q}}var X=E.subarray(0,S),G=E.subarray(S);h=R(X),m=R(G),p=T(X,h,1),v=T(G,m,1)}else $(1);if(l>y){c&&$(0);break}}s&&u(d+131072);for(var Q=(1<<h)-1,Y=(1<<m)-1,Z=l;;Z=l){var ee=(q=p[N(e,l)&Q])>>4;if((l+=15&q)>y){c&&$(0);break}if(q||$(2),ee<256)n[d++]=ee;else{if(256==ee){Z=l,p=null;break}var te=ee-254;if(ee>264){var ne=x[L=ee-257];te=J(e,l,(1<<ne)-1)+O[L],l+=ne}var re=v[N(e,l)&Y],ie=re>>4;if(re||$(3),l+=15&re,G=A[ie],ie>3&&(ne=k[ie],G+=N(e,l)&(1<<ne)-1,l+=ne),l>y){c&&$(0);break}s&&u(d+131072);var oe=d+te;if(d<G){var ae=o-G,se=Math.min(G,oe);for(ae+d<0&&$(3);d<se;++d)n[d]=r[ae+d]}for(;d<oe;++d)n[d]=n[d-G]}}t.l=p,t.p=Z,t.b=d,t.f=f,p&&(f=1,t.m=h,t.d=v,t.n=m)}while(!f);return d!=n.length&&a?W(n,0,d):n.subarray(0,d)},K=new g(0),q=function(e,t,n){for(var r=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<r.length;++a){var s=r[a],c=o[a];if("function"==typeof s){t+=";"+c+"=";var u=s.toString();if(s.prototype)if(-1!=u.indexOf("[native code]")){var f=u.indexOf(" ",8)+1;t+=u.slice(f,u.indexOf("(",f))}else for(var l in t+=u,s.prototype)t+=";"+c+".prototype."+l+"="+s.prototype[l].toString();else t+=u}else n[c]=s}return t},_=[],X=function(){return[g,b,w,x,k,j,O,A,z,H,E,V,T,R,J,N,M,W,$,B,ne,G,Q]},G=function(e){return postMessage(e,[e.buffer])},Q=function(e){return e&&{out:e.size&&new g(e.size),dictionary:e.dictionary}},Y=function(e,t,n,r,i,o){var a=function(e,t,n,r){if(!_[n]){for(var i="",o={},a=e.length-1,s=0;s<a;++s)i=q(e[s],i,o);_[n]={c:q(e[a],i,o),e:o}}var c=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}({},_[n].e);return function(e,t,n,r,i){var o=new Worker(y[t]||(y[t]=URL.createObjectURL(new Blob([e+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return o.onmessage=function(e){var t=e.data,n=t.$e$;if(n){var r=new Error(n[0]);r.code=n[1],r.stack=n[2],i(r,null)}else i(null,t)},o.postMessage(n,r),o}(_[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",n,c,function(e){var t=[];for(var n in e)e[n].buffer&&t.push((e[n]=new e[n].constructor(e[n])).buffer);return t}(c),r)}(n,r,i,(function(e,t){a.terminate(),o(e,t)}));return a.postMessage([e,t],t.consume?[e.buffer]:[]),function(){a.terminate()}},Z=function(e,t){return e[t]|e[t+1]<<8},ee=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},te=function(e,t){return ee(e,t)+4294967296*ee(e,t+4)};function ne(e,t){return B(e,{i:2},t&&t.out,t&&t.dictionary)}var re="undefined"!=typeof TextDecoder&&new TextDecoder;try{re.decode(K,{stream:!0})}catch(e){}function ie(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(re)return re.decode(e);var i=function(e){for(var t="",n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:W(e,n-1)};i?3==i?(r=((15&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536,t+=String.fromCharCode(55296|r>>10,56320|1023&r)):t+=1&i?String.fromCharCode((31&r)<<6|63&e[n++]):String.fromCharCode((15&r)<<12|(63&e[n++])<<6|63&e[n++]):t+=String.fromCharCode(r)}}(e),o=i.s;return(n=i.r).length&&$(8),o}var oe=function(e,t){for(;1!=Z(e,t);t+=4+Z(e,t+2));return[te(e,t+12),te(e,t+4),te(e,t+20)]},ae="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(e){e()},se=JSON.parse('{"v":"h5p-741035c0caad0682ab29b77f4c592a20.html"}'),ce=JSON.parse('{"js":"application/javascript","json":"application/json","doc":"application/msword","pdf":"application/pdf","rtf":"text/rtf","xls":"application/vnd.ms-excel","ppt":"application/vnd.ms-powerpoint","odp":"application/vnd.oasis.opendocument.presentation","ods":"application/vnd.oasis.opendocument.spreadsheet","odt":"application/vnd.oasis.opendocument.text","pptx":"application/vnd.openxmlformats-officedocument.presentationml.presentation","xlsx":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","docx":"application/vnd.openxmlformats-officedocument.wordprocessingml.document","swf":"application/x-shockwave-flash","xml":"text/xml","mp3":"audio/mpeg","m4a":"audio/x-m4a","ogg":"audio/ogg","wav":"audio/x-wav","otf":"font/otf","ttf":"font/ttf","woff":"font/woff","bmp":"image/x-ms-bmp","gif":"image/gif","jpeg":"image/jpeg","jpg":"image/jpeg","png":"image/png","svg":"image/svg+xml","tif":"image/tiff","tiff":"image/tiff","css":"text/css","csv":"text/csv","md":"text/markdown","txt":"text/plain","vtt":"text/vtt","mp4":"video/mp4","webm":"video/webm"}'),ue=n(1283);function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e,t,n){return(t=be(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ve(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function pe(e){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(e)}function ve(e,t){if(e){if("string"==typeof e)return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?he(e,t):void 0}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,be(r.key),r)}}function ge(e,t,n){return t&&ye(e.prototype,t),n&&ye(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function be(e){var t=function(e,t){if("object"!=pe(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=pe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==pe(t)?t:String(t)}for(var we=se.v,xe=console,ke=function(){function e(t){me(this,e),this.zipfile=t}return ge(e,[{key:"_getFiles",value:function(e){var t=this;return new Promise((function(n,r){!function(e,t,n){n||(n=t,t={}),"function"!=typeof n&&$(7);var r=[],i=function(){for(var e=0;e<r.length;++e)r[e]()},o={},a=function(e,t){ae((function(){n(e,t)}))};ae((function(){a=n}));for(var s=e.length-22;101010256!=ee(e,s);--s)if(!s||e.length-s>65558)return a($(13,0,1),null),i;var c=Z(e,s+8);if(c){var u=c,f=ee(e,s+16),l=4294967295==f||65535==u;if(l){var d=ee(e,s-12);(l=101075792==ee(e,d))&&(u=c=ee(e,d+32),f=ee(e,d+48))}for(var p=t&&t.filter,v=function(t){var n=function(e,t,n){var r=Z(e,t+28),i=ie(e.subarray(t+46,t+46+r),!(2048&Z(e,t+8))),o=t+46+r,a=ee(e,t+20),s=n&&4294967295==a?oe(e,o):[a,ee(e,t+24),ee(e,t+42)],c=s[0],u=s[1],f=s[2];return[Z(e,t+10),c,u,i,o+Z(e,t+30)+Z(e,t+32),f]}(e,f,l),s=n[0],u=n[1],d=n[2],v=n[3],h=n[4],m=n[5],y=function(e,t){return t+30+Z(e,t+26)+Z(e,t+28)}(e,m);f=h;var b=function(e,t){e?(i(),a(e,null)):(t&&(o[v]=t),--c||a(null,o))};if(!p||p({name:v,size:u,originalSize:d,compression:s}))if(s)if(8==s){var w=e.subarray(y,y+u);if(u<32e4)try{b(null,ne(w,{out:new g(d)}))}catch(e){b(e,null)}else r.push(function(e,t,n){return n||(n=t,t={}),"function"!=typeof n&&$(7),Y(e,t,[X],(function(e){return G(ne(e.data[0],Q(e.data[1])))}),1,n)}(w,{size:d},b))}else b($(14,"unknown compression type "+s,1),null);else b(null,W(e,y,y+u));else b(null,null)},h=0;h<u;++h)v()}else a(null,{})}(t.zipfile,{filter:e},(function(e,t){e&&r(e),n(Object.entries(t).map((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){u=!0,i=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}(e,t)||ve(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2);return{name:t[0],obj:t[1]}})))}))}))}},{key:"file",value:function(e){return this._getFiles((function(t){return t.name===e})).then((function(e){return e[0]}))}},{key:"files",value:function(e){return this._getFiles((function(t){return t.name.startsWith(e)}))}}]),e}(),je={},Pe=0,Se=["downloaded","copied","accessed-reuse","accessed-embed","accessed-copyright"];Pe<Se.length;Pe++){var Oe=Se[Pe];je[ue.K[Oe]]=!0}for(var Ce=["answered","interacted"],De={},Ae=0,Ee=["completed","mastered","passed"];Ae<Ee.length;Ae++){var Ue=Ee[Ae];De[ue.K[Ue]]=!0}function Le(e,t){var n="",r=t.split(".").slice(-1)[0];if(r){var i=r.toLowerCase();n=ce[i]}var o=new Blob([e.buffer],{type:n});return URL.createObjectURL(o)}var Te=/(url\(['"]?)([^"')]+)?(['"]?\))/g;function Ie(e,t){return t[e].replace(Te,(function(n,r,i,o){try{var a=new URL(i,new URL(e,"http://b.b/")).pathname.substring(1),s=t[a];if(s)return"".concat(r).concat(s).concat(o)}catch(e){xe.debug("Error during URL handling",e)}return n}))}var Fe=["title","a11yTitle","authors","changes","source","license","licenseVersion","licenseExtras","authorComments","yearFrom","yearTo","defaultLanguage"],ze=function(){function e(t){me(this,e),this.shim=t,this.data=t.data,this.scriptLoader=this.scriptLoader.bind(this)}return ge(e,[{key:"init",value:function(e,t,n,r){var i=this;this.dependencies=[],this.jsDependencies={},this.cssDependencies={},this.packageFiles={},this.contentPaths={},this.contentJson="",this.library=null,this.loadedJs={},this.loadedCss={},this.iframe=e,this.iframe.src="../h5p/".concat(we),this.filepath=t,this.zipcontentUrl=new URL("../../zipcontent/".concat(this.filepath.substring(this.filepath.lastIndexOf("/")+1)),window.location).href,this.loaded=n,this.errored=r,this.contentNamespace="1234567890";var o,a=performance.now();(o=this.filepath,new Promise((function(e,t){try{var n=new window.XMLHttpRequest;n.open("GET",o,!0),n.responseType="arraybuffer",n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status||0===n.status)try{e(new Uint8Array(n.response))}catch(e){t(new Error(e))}else t(new Error("Ajax error for "+o+" : "+n.status+" "+n.statusText))},n.send()}catch(e){t(new Error(e),null)}}))).then((function(e){return i.zip=new ke(e),i.recurseDependencies("h5p.json",!0)})).then((function(){return i.setDependencies(),i.processFiles().then((function(){if(xe.debug("H5P file processed in ".concat(performance.now()-a," ms")),i.metadata=c()(i.rootConfig,Fe),i.processCssDependencies(),i.processJsDependencies(),i.iframe.contentDocument&&"complete"===i.iframe.contentDocument.readyState&&i.iframe.contentWindow.H5P)return i.initH5P();i.iframe.addEventListener("load",(function(){return i.initH5P()}))}))}))}},{key:"stateUpdated",value:function(){this.shim.stateUpdated()}},{key:"initH5P",value:function(){var e=this;return this.shimH5P(this.iframe.contentWindow),this.scriptLoader(this.cssURL,!0).then((function(){return e.scriptLoader(e.javascriptURL).then((function(){try{e.iframe.contentWindow.H5P.init(),e.loaded(),setTimeout((function(){var t,n=de(e.iframe.contentWindow.H5P.instances);try{for(n.s();!(t=n.n()).done;){var r=t.value;e.iframe.contentWindow.H5P.trigger(r,"resize")}}catch(e){n.e(e)}finally{n.f()}}),0)}catch(t){e.errored(t)}}))}))}},{key:"shimH5P",value:function(e){var t=e.document.createElement("div");t.classList.add("h5p-content"),t.setAttribute("data-content-id",this.contentNamespace),e.document.body.appendChild(t);var n=e.H5P,r=n.getPath,o=this;n.getPath=function(e,t){return"#tmp"===e.substr(-4,4)&&(e=e.substr(0,e.length-4)),o.contentPaths[e]?o.contentPaths[e]:r(e,t)},n.getContentPath=function(){return o.zipcontentUrl+"/content"},n.getUserData=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=i()(o.data,[r,t]);return n(void 0,"RESET"===a?null:a)},n.setUserData=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.subContentId,s=void 0===i?0:i,c=r.errorCallback,u=void 0===c?null:c;try{n=JSON.stringify(n)}catch(e){return void(a()(u)&&u(e))}f()(o.data,[s,t],n),o.stateUpdated()},n.deleteUserData=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;v()(o.data,[n,t]),o.stateUpdated()};var s=n.ContentType;n.ContentType=function(e){var t=s(e);return t.prototype.getLibraryFilePath=function(e){return o.packageFiles[this.libraryInfo.versionedNameNoSpaces+"/"][e]||o.zipcontentUrl+"/"+this.libraryInfo.versionedNameNoSpaces+"/"},t},n.XAPIEvent.prototype.setActor=function(){e.xAPI&&e.xAPI.prepareStatement(this.data.statement)};for(var c={},u=0,l=Ce;u<l.length;u++){var p=l[u],h=ue.K[p];c[h]=d()((function(t){e.xAPI.sendStatement(t,!0).catch((function(e){xe.error("Statement: ",t,"gave the following error: ",e)}))}),5e3,{leading:!0,maxWait:3e4})}n.externalDispatcher.on("xAPI",(function(t){if(e.xAPI){var n=t.data.statement;if(n.object&&n.object.id.startsWith(o.H5PContentIdentifier)&&n.object.id!==o.H5PContentIdentifier&&n.verb&&De[n.verb.id]&&(n.verb.id=ue.K.progressed),je[n.verb.id])return;c[n.verb.id]?c[n.verb.id](n):e.xAPI.sendStatement(t.data.statement,!0).catch((function(e){xe.error("Statement: ",n,"gave the following error: ",e)}))}}))}},{key:"H5PContentIdentifier",get:function(){return this.rootConfig&&this.rootConfig.source||"http://kolibri.to/content/".concat(this.contentNamespace)}},{key:"shimH5PIntegration",value:function(e){var t=this;this.integrationShim={get contents(){return le({},(e=t.contentNamespace,"cid-".concat(e)),{library:t.library,jsonContent:t.contentJson,fullScreen:!1,displayOptions:{copyright:!1,download:!1,embed:!1,export:!1,frame:!1,icon:!1},contentUserData:t.data,exportUrl:"",embedCode:"",resizeCode:"",mainId:t.contentNamespace,url:t.H5PContentIdentifier,title:t.rootConfig.title,styles:Object.keys(t.loadedCss),scripts:Object.keys(t.loadedJs),metadata:t.metadata});var e},l10n:{H5P:{}},get loadedJs(){return Object.keys(t.loadedJs)},get loadedCss(){return Object.keys(t.loadedCss)},get user(){return{name:t.userData.userFullName,mail:""}},get urlLibraries(){return t.zipcontentUrl}},Object.defineProperty(e,"H5PIntegration",{value:this.integrationShim,configurable:!0})}},{key:"scriptLoader",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.iframe.contentWindow.document;return new Promise((function(r,i){var o;t?((o=n.createElement("link")).rel="stylesheet",o.type="text/css",o.href=e,r(o)):((o=n.createElement("script")).type="text/javascript",o.src=e,o.async=!0,o.addEventListener("load",(function(){return r(o)})),o.addEventListener("error",i)),n.body.appendChild(o)}))}},{key:"setDependencies",value:function(){var e,t=new(m()),n=de(this.dependencies);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.packageFiles[r.packagePath]={},t.add(r.packagePath,r.dependencies),this.cssDependencies[r.packagePath]=r.preloadedCss,this.jsDependencies[r.packagePath]=r.preloadedJs}}catch(e){n.e(e)}finally{n.f()}this.sortedDependencies=t.sort().reverse()}},{key:"recurseDependencies",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return this.zip.file(e).then((function(e){if(e){var o=JSON.parse(ie(e.obj)),a=o.preloadedDependencies||[];return r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r),t&&(n.rootConfig=o),Promise.all(a.map((function(e){var i="".concat(e.machineName,"-").concat(e.majorVersion,".").concat(e.minorVersion,"/");return t&&!n.library&&e.machineName===o.mainLibrary&&(n.library="".concat(e.machineName," ").concat(e.majorVersion,".").concat(e.minorVersion)),r[i]?Promise.resolve(i):(r[i]=!0,n.recurseDependencies(i+"library.json",!1,r,i).then((function(){return i})))}))).then((function(e){if(i){var t=(o.preloadedJs||[]).map((function(e){return e.path})),r=(o.preloadedCss||[]).map((function(e){return e.path}));n.dependencies.push({packagePath:i,dependencies:e,preloadedCss:r,preloadedJs:t})}}))}}))}},{key:"processJsDependencies",value:function(){var e=this,t=this.sortedDependencies.reduce((function(t,n){return(e.jsDependencies[n]||[]).reduce((function(t,r){return"".concat(t).concat(e.packageFiles[n][r],"\n\n")}),t)}),"");this.javascriptURL=URL.createObjectURL(new Blob([t],{type:"text/javascript"}))}},{key:"processCssDependencies",value:function(){var e=this,t=this.sortedDependencies.reduce((function(t,n){return(e.cssDependencies[n]||[]).reduce((function(t,r){var i=Ie(r,e.packageFiles[n]);return"".concat(t).concat(i,"\n\n")}),t)}),"");this.cssURL=URL.createObjectURL(new Blob([t],{type:"text/css"}))}},{key:"processContent",value:function(e){var t=e.name.replace("content/","");"content.json"===t?this.contentJson=ie(e.obj):this.contentPaths[t]=Le(e.obj,t)}},{key:"processPackageFile",value:function(e,t){var n=e.name.replace(t,""),r=this.jsDependencies[t].indexOf(n)>-1;this.cssDependencies[t].indexOf(n)>-1||r?(r?this.loadedJs[e.name]=!0:this.loadedCss[e.name]=!0,this.packageFiles[t][n]=ie(e.obj)):this.packageFiles[t][n]=Le(e.obj,n)}},{key:"processFiles",value:function(){var e,t=this;return Promise.all([this.zip.files("content/").then((function(e){e.map((function(e){return t.processContent(e)}))}))].concat(function(e){if(Array.isArray(e))return he(e)}(e=Object.keys(this.packageFiles).map((function(e){return t.zip.files(e).then((function(n){n.map((function(n){return t.processPackageFile(n,e)}))}))})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ve(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))}}]),e}()}}]);