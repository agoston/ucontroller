(window["webpackJsonp-ae-fe/cosmos-1"]=window["webpackJsonp-ae-fe/cosmos-1"]||[]).push([[36,18],{1213:function(n,e,t){"use strict";t.r(e);var r=t(372),a=t.n(r);t.d(e,"rcmd",(function(){return a.a}));var o=t(187);t.d(e,"Gallery",(function(){return o.default})),t.d(e,"List",(function(){return o.default})),t.d(e,"Waterfall",(function(){return o.default}))},187:function(n,e,t){"use strict";t.r(e);var r=t(228),a=t(3),o=t.n(a),i=t(17),u=t.n(i),c=t(36),l=t.n(c),d=t(76),f=t.n(d),s=t(226);var m=function(n){var e=n.data,t=n.columnNum,r=void 0===t?5:t,a=null;return e&&(a=e.length<r?e:e.slice(0,Math.floor(e.length/r)*r)),{cards:a}},v=t(257),p=t.n(v),w=t(161),y=t(231),b=t(256),h=t.n(b),g=function(n){var e=n.children,t=void 0===e?[]:e,r=n.gutter,a=void 0===r?16:r,o=n.autoSize,i=Object(c.useContext)(w.a).scene,u=Object(y.a)((null==n?void 0:n.columnNum)||6,o),d=u.ref,f=u.column;return l.a.createElement("div",{className:h.a.rowContainer,ref:d,"data-spm":i,style:{marginLeft:-1*a/2+"px",marginRight:-1*a/2+"px"}},c.Children.map(t,(function(n,e){return l.a.createElement("div",{className:h.a.child,key:e,style:{maxWidth:1/f*100+"%",paddingLeft:a/2+"px",paddingRight:a/2+"px",flexBasis:1/f*100+"%"}},Object(c.cloneElement)(n,{width:"100%"}))})))},S=["className","data","columnNum","autoSize"];var N=function(n){var e=n.className,t=n.data,r=n.columnNum,a=void 0===r?5:r,i=n.autoSize,c=void 0===i||i,d=u()(n,S),v=m({data:t,columnNum:a}).cards;return(null==v?void 0:v.some((function(n){return"pc_new_card"===n.itemCardType})))?l.a.createElement(g,{columnNum:a,autoSize:c},null==v?void 0:v.map((function(n){return l.a.createElement(s.a,o()({key:n.productId,data:n},d))}))):l.a.createElement("div",{className:f()(p.a.container,e)},null==v?void 0:v.map((function(n,e){return l.a.createElement(s.a,o()({key:n.productId,className:p.a.card,data:n},d))})))},x=Object(r.a)(N,{width:190});e.default=x},231:function(n,e,t){"use strict";var r=t(4),a=t(36),o=function(){var n;return!r.isSSR&&"function"==typeof(null===(n=window)||void 0===n?void 0:n.requestAnimationFrame)};var i=function(n){var e,t=!0;return Object(a.useCallback)((function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var u=function(n,t){return o()?(window.cancelAnimationFrame(e),window.requestAnimationFrame(n)):setTimeout(n,t)};t&&(t=!1,e=u((function(){t=!0,n.apply(void 0,a)}),66))}),[])};function u(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return c(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}var l=r.isSSR?a.useEffect:a.useLayoutEffect;e.a=function(n,e){void 0===e&&(e=!1);var t=Object(a.useRef)(null),r=Object(a.useState)(n),o=r[0],c=r[1],d=i((function(n){var e,t=null==n||null===(e=n.contentRect)||void 0===e?void 0:e.width;t&&c(t>1150?6:5)}));return l((function(){if(e){if(!t.current)return null;if(!window.ResizeObserver)return null;var n=new ResizeObserver((function(n){for(var e,t=u(n);!(e=t()).done;){var r=e.value;d(r)}}));return n.observe(t.current),function(){return n.disconnect()}}return function(){}})),{ref:t,column:o}}},256:function(n,e,t){n.exports={rowContainer:"_1wVX7",child:"_2FypS"}},257:function(n,e,t){n.exports={container:"_1nker",card:"_2S8eq"}}}]);