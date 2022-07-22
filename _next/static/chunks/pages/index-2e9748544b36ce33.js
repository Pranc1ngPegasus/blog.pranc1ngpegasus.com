(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",o="day",c="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,u),i=n-s<0,a=e.clone().add(r+(i?-1:1),u);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:d,h:a,m:i,s:s,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",_={};_[x]=g;var y=function(t){return t instanceof S},M=function t(e,n,r){var s;if(!e)return x;if("string"==typeof e){var i=e.toLowerCase();_[i]&&(s=i),n&&(_[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;_[o]=e,s=o}return!r&&s&&(x=s),s||!r&&x},j=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},w=$;w.l=M,w.i=y,w.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function g(t){this.$L=M(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return j(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<j(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!w.u(e)||e,l=w.p(t),f=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(o)},m=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,g=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case u:return r?f(1,g):f(0,g+1);case c:var x=this.$locale().weekStart||0,_=(p<x?p+7:p)-x;return f(r?v-_:v+(6-_),g);case o:case d:return m($+"Hours",0);case a:return m($+"Minutes",1);case i:return m($+"Seconds",2);case s:return m($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,c=w.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[s]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(r,l){var d,f=this;r=Number(r);var m=w.p(l),p=function(t){var e=j(f);return w.w(e.date(e.date()+Math.round(t*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===o)return p(1);if(m===c)return p(7);var g=(d={},d[i]=e,d[a]=n,d[s]=t,d)[m]||1,v=this.$d.getTime()+r*g;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),i=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].substr(0,i)},h=function(t){return w.s(i%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:w.s(i,2,"0"),h:h(1),hh:h(2),a:d(i,a,!0),A:d(i,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return r.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,d,f){var m,p=w.p(d),g=j(r),v=(g.utcOffset()-this.utcOffset())*e,$=this-g,x=w.m(this,g);return x=(m={},m[h]=x/12,m[u]=x,m[l]=x/3,m[c]=($-v)/6048e5,m[o]=($-v)/864e5,m[a]=$/n,m[i]=$/e,m[s]=$/t,m)[p]||$,f?x:w.a(x)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return _[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),N=S.prototype;return j.prototype=N,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",o],["$M",u],["$y",h],["$D",d]].forEach((function(t){N[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,S,j),t.$i=!0),j},j.locale=M,j.isDayjs=y,j.unix=function(t){return j(1e3*t)},j.en=_[x],j.Ls=_,j.p={},j}()},4110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,n,s){return r.fromToBase(t,e,n,s)}n.en.relativeTime=s,r.fromToBase=function(e,r,i,a,o){for(var c,u,l,h=i.$locale().relativeTime||s,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,m=0;m<f;m+=1){var p=d[m];p.d&&(c=a?n(e).diff(i,p.d,!0):i.diff(e,p.d,!0));var g=(t.rounding||Math.round)(Math.abs(c));if(l=c>0,g<=p.r||!p.r){g<=1&&m>0&&(p=d[m-1]);var v=h[p.l];o&&(g=o(""+g)),u="string"==typeof v?v.replace("%d",g):v(g,r,p.l,l);break}}if(r)return u;var $=l?h.future:h.past;return"function"==typeof $?$(u):$.replace("%s",u)},r.to=function(t,e){return i(t,e,this,!0)},r.from=function(t,e){return i(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3899)}])},4958:function(t,e,n){"use strict";n.d(e,{T:function(){return r}});var r=[{id:"Zenn",name:"Zenn",role:"",bio:"",avatarSrc:"https://pbs.twimg.com/profile_images/1192775453498494977/pb8Shc8G_400x400.jpg",sources:["https://zenn.dev/pranc1ngpegasus/feed"],includeUrlRegex:"zenn.dev",twitterUsername:"pranc1ngpegasus",githubUsername:"Pranc1ngPegasus",websiteUrl:"https://pranc1ngpegasus.com"}]},7713:function(t,e,n){"use strict";n.d(e,{T:function(){return a}});var r=n(5893),s=n(9008),i=n(9133),a=function(t){var e=t.path,n=t.title,a=t.description,o=t.ogImageUrl,c=t.noindex,u=t.removeSiteNameFromTitle,l="".concat(i.v.siteRoot).concat(e||"");return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:u?n:"".concat(n," | ").concat(i.v.siteMeta.title)}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"og:site",content:i.v.siteMeta.title}),(0,r.jsx)("meta",{property:"og:image",content:o||"".concat(i.v.siteRoot,"/og.png")}),!!a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:description",content:a})]}),e&&(0,r.jsx)("link",{rel:"canonical",href:l}),c&&(0,r.jsx)("meta",{name:"robots",content:"noindex"})]})}},46:function(t,e,n){"use strict";n.d(e,{p:function(){return d}});var r=n(5893),s=n(7294),i=n(1664),a=n(7484),o=n.n(a),c=n(4110),u=n.n(c),l=n(4790);o().extend(u());var h=function(t){var e=t.item,n=e.authorId,s=e.title,a=e.isoDate,c=e.link,u=e.dateMiliSeconds,h=(0,l.n4)(n);if(!h)return null;var d=new URL(c),f=d.hostname,m=d.origin;return(0,r.jsxs)("article",{className:"post-link",children:[(0,r.jsx)(i.default,{href:(0,l.gb)(h.id),passHref:!0,children:(0,r.jsxs)("a",{className:"post-link__author",children:[(0,r.jsx)("img",{src:h.avatarSrc,className:"post-link__author-img",width:35,height:35,alt:h.name}),(0,r.jsxs)("div",{className:"post-link__author-name",children:[(0,r.jsx)("div",{className:"post-link__author-name",children:h.name}),(0,r.jsx)("time",{dateTime:a,className:"post-link__date",children:o()(a).fromNow()})]})]})}),(0,r.jsxs)("a",{href:c,className:"post-link__main-link",children:[(0,r.jsx)("h2",{className:"post-link__title",children:s}),f&&(0,r.jsxs)("div",{className:"post-link__site",children:[(0,r.jsx)("img",{src:(0,l.s6)(m),width:14,height:14,className:"post-link__site-favicon",alt:f}),f]})]}),u&&u>Date.now()-2592e5&&(0,r.jsx)("div",{className:"post-link__new-label",children:"NEW"})]})},d=function(t){var e,n=(0,s.useState)(32),i=n[0],a=n[1],o=(null===(e=t.items)||void 0===e?void 0:e.length)||0,c=o-i>0;return o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"post-list",children:t.items.slice(0,i).map((function(t,e){return(0,r.jsx)(h,{item:t},"post-item-".concat(e))}))}),c&&(0,r.jsx)("div",{className:"post-list-load",children:(0,r.jsx)("button",{onClick:function(){return a(i+32)},className:"post-list-load__button",children:"LOAD MORE"})})]}):(0,r.jsx)("div",{className:"post-list-empty",children:"No posts yet"})}},3899:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(5893),s=n(1664),i=n(8928),a=n(9133),o=n(4958),c=n(4790),u=function(){return(0,r.jsx)("div",{className:"scrollable-members",children:o.T.map((function(t,e){return(0,r.jsx)(s.default,{href:(0,c.gb)(t.id),passHref:!0,children:(0,r.jsxs)("a",{className:"scrollable-member__link",children:[(0,r.jsx)("span",{className:"scrollable-member__image",children:(0,r.jsx)("img",{src:t.avatarSrc,alt:t.name,className:"scrollable-member__img",width:80,height:80})}),(0,r.jsx)("span",{className:"scrollable-member__name",children:t.name}),(0,r.jsx)("span",{className:"scrollable-member__role",children:t.role})]})},"scrollable-member-".concat(e))}))})},l=n(46),h=n(7713),d=n(1775),f=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.T,{title:a.v.siteMeta.title,description:a.v.siteMeta.description,path:"/",removeSiteNameFromTitle:!0}),(0,r.jsx)("section",{className:"home-hero",children:(0,r.jsxs)(d.v,{children:[(0,r.jsx)("h1",{className:"home-hero__title",children:a.v.siteMeta.title}),!!a.v.siteMeta.description&&(0,r.jsx)("p",{className:"home-hero__description",children:a.v.siteMeta.description})]})}),(0,r.jsx)("section",{className:"home-members",children:(0,r.jsxs)(d.v,{children:[(0,r.jsxs)("div",{className:"home-section-title-container",children:[(0,r.jsx)("h2",{className:"home-section-title",children:"Sources"}),(0,r.jsx)(s.default,{href:"/members",children:(0,r.jsx)("a",{className:"home-section-link",children:"See Details \u2192"})})]}),(0,r.jsx)("div",{className:"home-members-container",children:(0,r.jsx)(d.a,{children:(0,r.jsx)(u,{})})})]})}),(0,r.jsx)("section",{className:"home-posts",children:(0,r.jsxs)(d.v,{children:[(0,r.jsx)("div",{className:"home-section-title-container",children:(0,r.jsx)("h2",{className:"home-section-title",children:"Articles"})}),(0,r.jsx)("div",{className:"home-posts-container",children:(0,r.jsx)(l.p,{items:i})})]})})]})}},4790:function(t,e,n){"use strict";n.d(e,{n4:function(){return s},s6:function(){return i},gb:function(){return a}});var r=n(4958);n(8928);function s(t){return r.T.find((function(e){return e.id===t}))}function i(t){return"https://www.google.com/s2/favicons?sz=32&domain_url=".concat(t)}function a(t){return"/members/".concat(encodeURIComponent(t))}},9008:function(t,e,n){t.exports=n(3121)},8928:function(t){"use strict";t.exports=JSON.parse('[{"title":"grpc-gateway\u3092\u5229\u7528\u3057\u305fREST API\u306e\u63d0\u4f9b\u304c\u3059\u3054\u304f\u4fbf\u5229\u306a\u4ef6","contentSnippet":"REST API\u3092\u63d0\u4f9b\u3059\u308b\u3068\u304d\u3001API\u306e\u30b9\u30ad\u30fc\u30de\u5b9a\u7fa9\u3092\u3069\u306e\u3088\u3046\u306b\u7ba1\u7406\u3059\u308b\u304b\u60a9\u3080\u3053\u3068\u304c\u3042\u308b\u3002OpenAPI(Swagger)\u3067\u5b9a\u7fa9\u3057\u3066\u30e2\u30c7\u30eb\u3092\u5410\u304d\u51fa\u3059\u3053\u3068\u3082\u3042\u308c\u3070\u3001\u30b3\u30fc\u30c9\u3068\u306f\u5225\u306bMarkdown\u3067\u66f8\u304d\u51fa\u3059\u3053\u3068\u3082\u3042\u308b\u3060\u308d\u3046\u3002\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u69cb\u6210\u3092\u3068\u3063\u305f\u5834\u5408\u306b\u306f\u30b5\u30fc\u30d3\u30b9\u9593\u306e\u901a\u4fe1\u306bgRPC\u3092\u63a1\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3082\u3042\u308a\u3001REST API\u306fSwagger\u3001gRPC\u306fprotobuf\u306a\u3069\u30b9\u30ad\u30fc\u30de\u5b9a\u7fa9\u306e\u7ba1\u7406\u306b\u304b\u304b\u308b\u8907\u96d1\u3055\u306f\u5897\u3059\u3070\u304b\u308a\u3067\u3042\u308b\u3002\u3053\u306e\u3088\u3046\u306a\u72b6\u6cc1\u3092\u89e3\u6c7a\u3067\u304d\u305d\u3046\u306a\u65b9\u6cd5\u304c\u3042\u308a\u3001\u3059\u3054\u304f\u6c17\u306b\u5165\u3063\u305f\u306e\u3067\u7d39\u4ecb\u3059\u308b\u3002 grpc-gatewaygrpc-gateway\u306fgRPC\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308bAPI...","link":"https://zenn.dev/pranc1ngpegasus/articles/2fea24c58614be","isoDate":"2022-03-30T15:00:00.000Z","dateMiliSeconds":1648652400000,"authorName":"Zenn","authorId":"Zenn"},{"title":"\u958b\u767a\u3067\u3088\u304f\u4f7f\u3046\u30c4\u30fc\u30eb\u305f\u3061","contentSnippet":"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u958b\u767a\u3092\u3059\u308b\u3068\u304d\u306b\u3088\u304f\u4f7f\u3046\u30c4\u30fc\u30eb\u3092\u7d39\u4ecb\u3059\u308b\u3002 \u30c4\u30fc\u30eb\u305f\u3061Terminal.app\u540c\u3058\u5f79\u76ee\u306e\u30c4\u30fc\u30eb\u3092\u8907\u6570\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u304f\u306a\u3044\u30de\u30f3\u306a\u306e\u3067\u6a19\u6e96\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u4f7f\u3063\u3066\u3044\u308bHomebrew\u30c4\u30fc\u30eb\u7fa4\u3092\u4e00\u62ec\u7ba1\u7406\u3059\u308b\u30c4\u30fc\u30ebtmux\u30bf\u30fc\u30df\u30ca\u30eb\u306e\u30bf\u30d6\u3092\u4f7f\u3046\u6d3e\u306e\u4eba\u306f\u305d\u308c\u3067\u3044\u3044\u3068\u601d\u3046\u5de6\u30da\u30a4\u30f3\u3067\u30ed\u30b0\u76e3\u8996\u3001\u53f3\u30da\u30a4\u30f3\u3067\u30a8\u30c7\u30a3\u30bf\u3068\u304b\u4f7f\u3048\u3066\u4fbf\u5229fish\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u88dc\u5b8c\u3057\u3066\u304f\u308c\u3066\u4fbf\u5229\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u305f\u304f\u3055\u3093\u5165\u308c\u3066\u3082\u8efd\u3044 (\u6c17\u304c\u3059\u308b)Neovim\u3044\u308d\u3093\u306a\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u5165\u308c\u3066\u30ab\u30b9\u30bf\u30e0\u3057\u3066\u3044\u308b\u597d\u304d\u306a\u30d7\u30e9\u30b0\u30a4\u30f3\u306f\u5f8c\u8ff0fzf\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u3067\u3042\u3044\u307e\u3044...","link":"https://zenn.dev/pranc1ngpegasus/articles/5e22bb48292d94","isoDate":"2022-02-17T15:00:00.000Z","dateMiliSeconds":1645110000000,"authorName":"Zenn","authorId":"Zenn"},{"title":"\u30c1\u30fc\u30e0\u306e\u3075\u308a\u304b\u3048\u308a\u3092Google Drawings\u304b\u3089Trello\u306b\u79fb\u884c\u3057\u305f","contentSnippet":"\u3053\u306e\u8a18\u4e8b\u306fKyash\u30a2\u30c9\u30d9\u30f3\u30c8\u30ab\u30ec\u30f3\u30c0\u30fc2021\u300111\u65e5\u76ee\u306e\u8a18\u4e8b\u3067\u3059\u3002Kyash\u3067\u306f1\u30b9\u30d7\u30ea\u30f3\u30c8\u30921\u9031\u9593\u3068\u3057\u305f\u30b9\u30af\u30e9\u30e0\u958b\u767a\u3092\u884c\u3063\u3066\u304a\u308a\u3001\u30b9\u30d7\u30ea\u30f3\u30c8\u306e\u304a\u308f\u308a\u306b\u3075\u308a\u304b\u3048\u308a\u4f1a\u3092\u958b\u50ac\u3057\u3066\u3044\u307e\u3059\u3002\u4eca\u56de\u306f\u3053\u308c\u307e\u3067Google Drawings\u3092\u4f7f\u3063\u3066\u884c\u3063\u3066\u3044\u305f\u3075\u308a\u304b\u3048\u308a\u3092Trello\u306b\u79fb\u884c\u3057\u3066\u52b9\u7387\u5316\u3057\u305f\u8a71\u3092\u307e\u3068\u3081\u307e\u3059\u3002 \u3053\u308c\u307e\u3067\u306e\u3075\u308a\u304b\u3048\u308a\u3053\u308c\u307e\u3067Kyash\u306e\u3075\u308a\u304b\u3048\u308a\u3067\u306fGoogle Drawings\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3057\u305f\u3002\u3053\u308c\u306f\u30b3\u30ed\u30ca\u4ee5\u524d\u306b\u30aa\u30d5\u30a3\u30b9\u3067\u30db\u30ef\u30a4\u30c8\u30dc\u30fc\u30c9\u3092\u4f7f\u3063\u3066\u884c\u3063\u3066\u3044\u305f\u624b\u6cd5\u3092\u305d\u306e\u307e\u307e\u30aa\u30f3\u30e9\u30a4\u30f3\u306b\u79fb\u690d\u3057\u305f\u65b9\u6cd5\u3067\u3001\u30db\u30ef\u30a4\u30c8\u30dc\u30fc\u30c9\u3084\u6a21\u9020\u7d19\u306a\u3069\u306b\u4ed8\u7b8b\u3092\u8cbc\u3063\u3066\u3044\u304f\u30a4\u30e1\u30fc\u30b8\u3067\u884c\u3063\u3066\u3044\u307e...","link":"https://zenn.dev/pranc1ngpegasus/articles/c09049367657ca","isoDate":"2021-12-10T15:00:00.000Z","dateMiliSeconds":1639148400000,"authorName":"Zenn","authorId":"Zenn"},{"title":"\u30ec\u30d3\u30e5\u30a2\u30fc\u306b\u3084\u3055\u3057\u3044Pull Request\u3068\u306f\u306a\u306b\u304b","contentSnippet":"\u30c1\u30fc\u30e0\u958b\u767a\u3092\u3057\u3066\u3044\u308b\u3068\u6bce\u65e5\u306e\u3088\u3046\u306bPR(Pull Request)\u3092\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u308a\u30ec\u30d3\u30e5\u30fc\u3057\u3066\u3082\u3089\u3063\u305f\u308a\u3059\u308b\u3002\u305d\u306e\u306a\u304b\u3067\u76ee\u7684\u3084\u89e3\u6c7a\u3057\u305f\u3044\u3053\u3068\u3001\u305d\u306e\u7d4c\u7def\u304c\u308f\u304b\u3089\u306a\u3044\u3082\u306e\u3092\u305f\u307e\u306b\u898b\u304b\u3051\u308b\u3002\u30ec\u30d3\u30e5\u30fc\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u3068\u5f8c\u7d9a\u306e\u30bf\u30b9\u30af\u306b\u9032\u3081\u306a\u304b\u3063\u305f\u308a\u3001\u7a4d\u3082\u308a\u7a4d\u3082\u3063\u3066\u30ea\u30ea\u30fc\u30b9\u307e\u3067\u306e\u30ea\u30fc\u30c9\u30bf\u30a4\u30e0\u304c\u9577\u304f\u306a\u3063\u305f\u308a\u3059\u308b\u3002\u3053\u308c\u3092\u6539\u5584\u3059\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u3044\u3044\u306e\u304b\u3002\u7b54\u3048\u306fPR\u306e\u8cea\u306b\u3042\u308b\u3068\u611f\u3058\u308b\u306e\u3067\u7b46\u8005\u304c\u65e5\u9803\u304b\u3089\u6c17\u3092\u4ed8\u3051\u3066\u3044\u308b\u3053\u3068\u3092\u307e\u3068\u3081\u308b\u3002PR\u306e\u30bf\u30a4\u30c8\u30eb\u306f\u77ed\u304f\u7c21\u6f54\u306b\u66f8\u304f\u305f\u3068\u3048\u3070\u300cUser\u306e\u540d\u524d\u3092\u66f4\u65b0\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u300d\u30d1\u30c3\u3068\u3069\u3093\u306a\u3053\u3068\u3092\u3057\u3066\u3044\u308bPR\u306a\u306e\u304b\u3092\u4f1d\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u3059\u308bPR\u306e\u30bf\u30a4\u30c8\u30eb\u306b\u306a\u3044...","link":"https://zenn.dev/pranc1ngpegasus/articles/d188d3b8285ddd","isoDate":"2021-09-05T15:00:00.000Z","dateMiliSeconds":1630854000000,"authorName":"Zenn","authorId":"Zenn"}]')}},function(t){t.O(0,[774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);