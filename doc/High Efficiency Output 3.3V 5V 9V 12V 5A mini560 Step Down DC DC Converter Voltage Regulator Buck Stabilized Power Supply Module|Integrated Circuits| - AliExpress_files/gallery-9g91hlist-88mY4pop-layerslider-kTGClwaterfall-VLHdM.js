(window["webpackJsonp-ae-fe/cosmos-1"]=window["webpackJsonp-ae-fe/cosmos-1"]||[]).push([[0],{121:function(e,t,r){"use strict";function i(e){var t=Object.keys(e.params).map((function(t){return t+"="+e.params[t]})).join("&");window.goldlog&&window.goldlog.record(e.path,e.event,"st_page_id=".concat(window.dmtrack_pageid,"&").concat(t),"POST")}function n(e){try{window.goldlog?e():(window.goldlog_queue||(window.goldlog_queue=[])).push({action:"goldlog.aplus_pubsub.subscribe",arguments:["goldlogReady",function(){e()}]})}catch(e){}}function o(e){n((function(){i({path:"/ae.pc_click.statweb_ae_click",event:"CLK",params:e})}))}function u(e){n((function(){i({path:"/ae.pc_ctr.statweb_ae_ctr",event:"EXP",params:e})}))}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return u}))},26:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},28:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},29:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e},e.exports.default=e.exports,e.exports.__esModule=!0},30:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={},n=decodeURIComponent,o=encodeURIComponent;function u(e){return"string"==typeof e}function a(e){return u(e)&&""!==e}function s(e){if(!a(e))throw new TypeError("Cookie name must be a non-empty string")}function c(e){return e}i.get=function(e,t){s(e),t="function"==typeof t?{converter:t}:t||{};var r=function(e,t){var r={};if(u(e)&&e.length>0)for(var i,o,a,s=t?n:c,l=e.split(/;\s/g),_=0,f=l.length;_<f;_++){if((a=l[_].match(/([^=]+)=/i))instanceof Array)try{i=n(a[1]),o=s(l[_].substring(a[1].length+1))}catch(e){}else i=n(l[_]),o="";i&&(r[i]=o)}return r}(document.cookie,!t.raw);return(t.converter||c)(r[e])},i.set=function(e,t,r){s(e);var i=(r=r||{}).expires,n=r.domain,u=r.path;r.raw||(t=o(String(t)));var c=e+"="+t,l=i;return"number"==typeof l&&(l=new Date).setDate(l.getDate()+i),l instanceof Date&&(c+="; expires="+l.toUTCString()),a(n)&&(c+="; domain="+n),a(u)&&(c+="; path="+u),r.secure&&(c+="; secure"),document.cookie=c,c},i.remove=function(e,t){return(t=t||{}).expires=new Date(0),this.set(e,"",t)};var l=i;t.default=l},31:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFixedDomainUrl=function(){return i};var i="aliexpress.com";[{reg:/aliexpress.ru/,domain:"aliexpress.ru"},{reg:/tmall.ru/,domain:"tmall.ru"}].forEach((function(e){e.reg.test(window.location.host)&&(i=e.domain)}))},32:function(e,t,r){"use strict";var i=r(26);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(28)),o=i(r(29)),u=i(r(30)),a=i(r(36)),s=r(31),c=new(function(){function e(){(0,n.default)(this,e),this.siteFormat=/^[a-z]{3}(_[a-z]{1})?$/,this.x_localeFormat=/^[a-z]{2}_[A-Z]{2}$/,this.s_localeFormat=/^[a-z]{2}_[A-Z]{2}$/,this.b_localeFormat=/^[a-z]{2}_[A-Z]{2}$/,this.c_tpFormat=/^[A-Z]{3}$/,this.regionFormat=/^[A-Z]{2,3}$/,this.provinceFormat=/^[0-9]{18}$/,this.cityFormat=/^[0-9]{18}$/,this.siFormat=/^(glo|rus|bra|esp|idn|fra|deu|ita)$/,this.signFormat=/^(y|n)$/,this.rmb_ppFormat=/^.*$/,this.x_userFormat=/^.*$/,this.issFormat=/^(y)$/,this.isbFormat=/^(y)$/,this.ispmFormat=/^(y)$/,this.isksFormat=/^(y)$/,this.isgclFormat=/^(y)$/,this.reg_verFormat=/^(new|old)$/,this.x_lFormat=/^[01]{1}$/,this.ber_lFormat=/^A\d$/,this.zero_orderFormat=/^(y)$/,this.ae_u_p_sFormat=/^[012]{1}$/,this.ups_u_tFormat=/^[0-9]{13,}$/,this.re_snsFormat=/^.*$/,this.x_csrfFormat=/^.*$/,this.x_c_chgFormat=/^[01]{1}$/,this.x_c_syncedFormat=/^[01]{1}$/,this.acs_rtFormat=/^[A-Za-z0-9]+$/,this.alimidFormat=/^[0-9]+$/,this.x_as_iFormat=/^([A-Za-z0-9]|(%))+/}return(0,o.default)(e,[{key:"get",value:function(e,t){return u.default.get(e,t)}},{key:"_setcookie",value:function(e,t,r){if(r&&!this.validate(t,r))return!1;var i=u.default.get(e,{domain:(0,s.getFixedDomainUrl)(),path:"/",raw:!0})||"";i=new RegExp("(.*&?"+t+"=)(.*?)(&.*|$)").test(i)?RegExp.$1+r+RegExp.$3:(i?i+"&":"")+t+"="+r,u.default.set(e,i,{domain:(0,s.getFixedDomainUrl)(),path:"/",expires:3650,raw:!0})}},{key:"_getCookie",value:function(e,t){var r=u.default.get(e,{domain:(0,s.getFixedDomainUrl)(),path:"/",raw:!0})||"",i=new RegExp("(.*&?"+t+"=)(.*?)(&.*|$)");r.match(i);var n=RegExp.$2;return i.test(r)&&this.validate(t,n)?n:""}},{key:"validate",value:function(e,t){return!/(&|=)/.test(t)&&!!(t&&this[e+"Format"]&&this[e+"Format"].test(t))}},{key:"getMSite",value:function(e,t){var r=u.default.get(e,{domain:"m.aliexpress.com",path:"/",raw:!0})||"",i=new RegExp("(.*&?"+t+"=)(.*?)(&.*|$)");r.match(i);var n=RegExp.$2;return i.test(r)&&this.validate(t,n)?n:""}},{key:"setSite",value:function(e){this._setcookie("aep_usuc_f","site",e)}},{key:"getSite",value:function(){return this._getCookie("aep_usuc_f","site")}},{key:"setRegion",value:function(e){this._setcookie("aep_usuc_f","region",e)}},{key:"getRegion",value:function(){return this._getCookie("aep_usuc_f","region")}},{key:"setProvince",value:function(e){this._setcookie("aep_usuc_f","province",e)}},{key:"getProvince",value:function(){return this._getCookie("aep_usuc_f","province")}},{key:"setCity",value:function(e){this._setcookie("aep_usuc_f","city",e)}},{key:"getCity",value:function(){return this._getCookie("aep_usuc_f","city")}},{key:"getAlimid",value:function(){return this._getCookie("aep_usuc_f","alimid")}},{key:"getMsiteProvince",value:function(){return u.default.get("ae-msite-province",{domain:(0,s.getFixedDomainUrl)(),path:"/",raw:!0})||""}},{key:"getMsiteCity",value:function(){return u.default.get("ae-msite-city",{domain:(0,s.getFixedDomainUrl)(),path:"/",raw:!0})||""}},{key:"setCurrency",value:function(e){this._setcookie("aep_usuc_f","c_tp",e)}},{key:"getCurrency",value:function(){return this._getCookie("aep_usuc_f","c_tp")}},{key:"setLocale",value:function(e){this._setcookie("xman_us_f","x_locale",e)}},{key:"getLocale",value:function(){return this._getCookie("xman_us_f","x_locale")}},{key:"setSellerLocale",value:function(e){u.default.set("intl_locale",e,{domain:(0,s.getFixedDomainUrl)(),path:"/",expires:365,raw:!0}),this.setLocale(e),this._setcookie("aep_usuc_f","s_locale",e)}},{key:"getSellerLocale",value:function(){return this._getCookie("aep_usuc_f","s_locale")}},{key:"setBuyerLocale",value:function(e){this.setLocale(e),this._setcookie("aep_usuc_f","b_locale",e)}},{key:"getBuyerLocale",value:function(){return this._getCookie("aep_usuc_f","b_locale")}},{key:"getSign",value:function(){return this._getCookie("xman_us_t","sign")}},{key:"isLoggedIn",value:function(){return"y"==this.getSign()}},{key:"getLoginId",value:function(){return this._getCookie("xman_us_t","rmb_pp")}},{key:"getIss",value:function(){return this._getCookie("aep_usuc_f","iss")}},{key:"isSeller",value:function(){return"y"===this.getIss()}},{key:"getIsb",value:function(){return this._getCookie("aep_usuc_f","isb")}},{key:"isBuyer",value:function(){return"y"===this.getIsb()}},{key:"getIsks",value:function(){return this._getCookie("aep_usuc_f","isks")}},{key:"isKaSeller",value:function(){return"y"===this.getIsks()}},{key:"getIsgcl",value:function(){return this._getCookie("aep_usuc_f","isgcl")}},{key:"isGreenChannel",value:function(){return"y"===this.getIsgcl()}},{key:"getIspm",value:function(){return this._getCookie("aep_usuc_f","ispm")}},{key:"isPremiumMember",value:function(){return"y"===this.getIspm()}},{key:"getIsfm",value:function(){return this._getCookie("aep_usuc_f","isfm")}},{key:"isFreeMember",value:function(){return"y"===this.getIsfm()}},{key:"getRegVer",value:function(){return this._getCookie("aep_usuc_f","reg_ver")}},{key:"getOversea",value:function(){return this._getCookie("xman_us_f","x_l")}},{key:"isOversea",value:function(){return"1"!==this.getOversea()}},{key:"_getXUserRaw",value:function(){return this._getCookie("xman_us_f","x_user")}},{key:"getXUserObj",value:function(){var e={country:"",firstName:"",lastName:"",memberSeq:""},t=(this._getXUserRaw()||"").split("|");return t.length>=5&&(e.country=t[0],e.firstName=t[1].replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.lastName=t[2].replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.memberSeq=t[4]),e}},{key:"getMemberSeq",value:function(){return this.getXUserObj().memberSeq}},{key:"isNewUser",value:function(){return""===this.getXUserObj().memberSeq}},{key:"setHistory",value:function(e){e&&a.default.logProduct({id:e})}},{key:"getHistory",value:function(){return a.default.getProducts()}},{key:"setAETest",value:function(){}},{key:"getAETest",value:function(){return""}},{key:"getBerL",value:function(){return this._getCookie("aep_usuc_t","ber_l")}},{key:"getZeroOrder",value:function(){return this._getCookie("xman_us_f","zero_order")}},{key:"isZeroOrderUser",value:function(){return"y"===this.getZeroOrder()}},{key:"getAeUps",value:function(){return this._getCookie("aep_usuc_f","ae_u_p_s")}},{key:"setAeUps",value:function(e){return this._setcookie("aep_usuc_f","ae_u_p_s",e)}},{key:"getAeUpsTime",value:function(){return this._getCookie("aep_usuc_f","ups_u_t")}},{key:"setAeUpsTime",value:function(e){return this._setcookie("aep_usuc_f","ups_u_t",e)}},{key:"getReSns",value:function(){return this._getCookie("aep_usuc_f","re_sns")}},{key:"getCsrfToken",value:function(){var e=this._getCookie("acs_usuc_t","x_csrf");return e||(window.__bl&&window.__bl.api?window.__bl.error(new Error("Cookie.getCsrfToken error")):window.__bl&&(window.__bl.pipe=window.__bl.pipe||[],window.__bl.pipe.push(["error",new Error("Cookie.getCsrfToken error")]))),e}},{key:"getXmanCookieChanged",value:function(){return this._getCookie("xman_us_f","x_c_chg")}},{key:"setXmanCookieChanged",value:function(e){return this._setcookie("xman_us_f","x_c_chg",""+e)}},{key:"getXmanCookieSynced",value:function(){return this._getCookie("xman_us_f","x_c_synced")}},{key:"setXmanCookieSynced",value:function(e){return this._setcookie("xman_us_f","x_c_synced",""+e)}},{key:"getACS_RT",value:function(){return this._getCookie("xman_us_f","acs_rt")}},{key:"getX_AS_I",value:function(){return this._getCookie("xman_us_f","x_as_i")}},{key:"getCNA",value:function(){return u.default.get("cna",{domain:(0,s.getFixedDomainUrl)(),path:"/",raw:!0})||""}},{key:"getAliApacheId",value:function(){return u.default.get("ali_apache_id",{domain:(0,s.getFixedDomainUrl)(),path:"/",raw:!0})||""}},{key:"getAeucid",value:function(){return u.default.get("aeu_cid",{domain:(0,s.getFixedDomainUrl)(),path:"/",raw:!0})||""}}]),e}());window.lib=window.lib||{},window.lib.cookie=c;var l=c;t.default=l},36:function(e,t,r){"use strict";var i=r(26);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(28)),o=i(r(29)),u=i(r(30)),a=r(31),s=new(function(){function e(){(0,n.default)(this,e),this.keywordsSize=8,this.productsSize=8,this.groups={},this.refresh()}return(0,o.default)(e,[{key:"getKeywords",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.groups||!this.groups.keywords)return[];var t=e.limit||0,r=this._sliceArray(this.groups.keywords,t).slice(0);return r}},{key:"getProducts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.groups||!this.groups.product_selloffer)return[];for(var t=e.limit||0,r=this._sliceArray(this.groups.product_selloffer,t),i=[],n=0,o=r.length;n<o;n++){var u=r[n].replace(/^http(s)?:\/\/.*\/(\d+_)?|\.html.*$/gi,"");/^\d+$/.test(u)&&i.push(u)}return i}},{key:"logProduct",value:function(e){if(e&&e.id){var t=this._addItem({array:this.getProducts(),item:e.id,maxSize:this.productsSize}),r=this._buildWholeCookie({keywordArray:this.getKeywords(),productArray:t});u.default.set("aep_history",r,{domain:(0,a.getFixedDomainUrl)(),path:"/",expires:365}),this.refresh()}}},{key:"refresh",value:function(){this.groups=this._parseGroups()}},{key:"_buildWholeCookie",value:function(e){var t=e.keywordArray||[],r=e.productArray||[];return this._buildGroup({group:"keywords",array:t.reverse()})+"\n\n"+this._buildGroup({group:"product_selloffer",array:r.reverse()})}},{key:"_buildGroup",value:function(e){var t=e.group||"",r=e.array||[];return!t||t.length<=0?"":t+"^\n"+t+"\t"+r.join("\t")}},{key:"_addItem",value:function(e){var t=e.array||[],r=e.item||"",i=e.maxSize||"";if(!r||r.length<=0)return t;var n=t.slice(0);return n=n.reverse(),this._appendToArray(r,n),n=n.reverse().splice(0,i)}},{key:"_appendToArray",value:function(e,t){if(Array.isArray(t)){var r=t.indexOf(e);r>=0&&t.splice(r,1),t.push(e)}}},{key:"_sliceArray",value:function(e,t){return t>0?e.splice(0,t):e}},{key:"_parseGroups",value:function(){var e={},t=u.default.get("aep_history",{domain:(0,a.getFixedDomainUrl)(),path:"/"});if(t)for(var r=t.split("\n\n"),i=0,n=r.length;i<n;i++){var o=r[i].split("^\n"),s=o[0],c=o[1],l=this._parseGroupContent(s,c);e[s]=l}return e}},{key:"_parseGroupContent",value:function(e,t){if(!t||0===t.length)return[];var r=t.indexOf(e);r>=0&&(t=t.substring(r+e.length+"\t".length));var i=t.split("\t");return i=i.reverse(),i=this._uniqueArray(i)}},{key:"_uniqueArray",value:function(e){for(var t=e,r=1;r<t.length;r++)t[r]===t[r-1]&&t.splice(r--,1);return t}}]),e}());t.default=s}}]);