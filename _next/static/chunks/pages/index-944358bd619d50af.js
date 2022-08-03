(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,s="millisecond",r="second",i="minute",a="hour",o="day",c="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},_={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+p(s,2,"0")+":"+p(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(s,u),i=n-r<0,a=e.clone().add(s+(i?-1:1),u);return+(-(s+(n-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:d,h:a,m:i,s:r,ms:s,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",x={};x[M]=v;var y=function(t){return t instanceof w},g=function t(e,n,s){var r;if(!e)return M;if("string"==typeof e){var i=e.toLowerCase();x[i]&&(r=i),n&&(x[i]=n,r=i);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;x[o]=e,r=o}return!s&&r&&(M=r),r||!s&&M},j=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},N=_;N.l=g,N.i=y,N.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=g(t.locale,null,!0),this.parse(t)}var p=v.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(N.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(m);if(s){var r=s[2]-1||0,i=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return N},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return j(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<j(t)},p.$g=function(t,e,n){return N.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,s=!!N.u(e)||e,l=N.p(t),f=function(t,e){var r=N.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?r:r.endOf(o)},m=function(t,e){return N.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,v=this.$M,p=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case h:return s?f(1,0):f(31,11);case u:return s?f(1,v):f(0,v+1);case c:var M=this.$locale().weekStart||0,x=($<M?$+7:$)-M;return f(s?p-x:p+(6-x),v);case o:case d:return m(_+"Hours",0);case a:return m(_+"Minutes",1);case i:return m(_+"Seconds",2);case r:return m(_+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,c=N.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[r]=l+"Seconds",n[s]=l+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var $=this.clone().set(d,1);$.$d[f](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[N.p(t)]()},p.add=function(s,l){var d,f=this;s=Number(s);var m=N.p(l),$=function(t){var e=j(f);return N.w(e.date(e.date()+Math.round(t*s)),f)};if(m===u)return this.set(u,this.$M+s);if(m===h)return this.set(h,this.$y+s);if(m===o)return $(1);if(m===c)return $(7);var v=(d={},d[i]=e,d[a]=n,d[r]=t,d)[m]||1,p=this.$d.getTime()+s*v;return N.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",r=N.z(this),i=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,n,r,i){return t&&(t[n]||t(e,s))||r[n].slice(0,i)},h=function(t){return N.s(i%12||12,t,"0")},d=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:N.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:N.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:N.s(i,2,"0"),h:h(1),hh:h(2),a:d(i,a,!0),A:d(i,a,!1),m:String(a),mm:N.s(a,2,"0"),s:String(this.$s),ss:N.s(this.$s,2,"0"),SSS:N.s(this.$ms,3,"0"),Z:r};return s.replace($,(function(t,e){return e||m[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(s,d,f){var m,$=N.p(d),v=j(s),p=(v.utcOffset()-this.utcOffset())*e,_=this-v,M=N.m(this,v);return M=(m={},m[h]=M/12,m[u]=M,m[l]=M/3,m[c]=(_-p)/6048e5,m[o]=(_-p)/864e5,m[a]=_/n,m[i]=_/e,m[r]=_/t,m)[$]||_,f?M:N.a(M)},p.daysInMonth=function(){return this.endOf(u).$D},p.$locale=function(){return x[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=g(t,e,!0);return s&&(n.$L=s),n},p.clone=function(){return N.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),D=w.prototype;return j.prototype=D,[["$ms",s],["$s",r],["$m",i],["$H",a],["$W",o],["$M",u],["$y",h],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,w,j),t.$i=!0),j},j.locale=g,j.isDayjs=y,j.unix=function(t){return j(1e3*t)},j.en=x[M],j.Ls=x,j.p={},j}()},4110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var s=e.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,n,r){return s.fromToBase(t,e,n,r)}n.en.relativeTime=r,s.fromToBase=function(e,s,i,a,o){for(var c,u,l,h=i.$locale().relativeTime||r,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,m=0;m<f;m+=1){var $=d[m];$.d&&(c=a?n(e).diff(i,$.d,!0):i.diff(e,$.d,!0));var v=(t.rounding||Math.round)(Math.abs(c));if(l=c>0,v<=$.r||!$.r){v<=1&&m>0&&($=d[m-1]);var p=h[$.l];o&&(v=o(""+v)),u="string"==typeof p?p.replace("%d",v):p(v,s,$.l,l);break}}if(s)return u;var _=l?h.future:h.past;return"function"==typeof _?_(u):_.replace("%s",u)},s.to=function(t,e){return i(t,e,this,!0)},s.from=function(t,e){return i(t,e,this)};var a=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(a(this),t)},s.fromNow=function(t){return this.from(a(this),t)}}}()},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3899)}])},46:function(t,e,n){"use strict";n.d(e,{p:function(){return d}});var s=n(5893),r=n(7294),i=n(1664),a=n(7484),o=n.n(a),c=n(4110),u=n.n(c),l=n(4790);o().extend(u());var h=function(t){var e=t.item,n=e.authorId,r=e.title,a=e.isoDate,c=e.link,u=e.dateMiliSeconds,h=(0,l.n4)(n);if(!h)return null;var d=new URL(c),f=d.hostname,m=d.origin;return(0,s.jsxs)("article",{className:"post-link",children:[(0,s.jsx)(i.default,{href:(0,l.gb)(h.id),passHref:!0,children:(0,s.jsxs)("a",{className:"post-link__author",children:[(0,s.jsx)("img",{src:h.avatarSrc,className:"post-link__author-img",width:35,height:35,alt:h.name}),(0,s.jsxs)("div",{className:"post-link__author-name",children:[(0,s.jsx)("div",{className:"post-link__author-name",children:h.name}),(0,s.jsx)("time",{dateTime:a,className:"post-link__date",children:o()(a).fromNow()})]})]})}),(0,s.jsxs)("a",{href:c,className:"post-link__main-link",children:[(0,s.jsx)("h2",{className:"post-link__title",children:r}),f&&(0,s.jsxs)("div",{className:"post-link__site",children:[(0,s.jsx)("img",{src:(0,l.s6)(m),width:14,height:14,className:"post-link__site-favicon",alt:f}),f]})]}),u&&u>Date.now()-2592e5&&(0,s.jsx)("div",{className:"post-link__new-label",children:"NEW"})]})},d=function(t){var e,n=(0,r.useState)(32),i=n[0],a=n[1],o=(null===(e=t.items)||void 0===e?void 0:e.length)||0,c=o-i>0;return o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"post-list",children:t.items.slice(0,i).map((function(t,e){return(0,s.jsx)(h,{item:t},"post-item-".concat(e))}))}),c&&(0,s.jsx)("div",{className:"post-list-load",children:(0,s.jsx)("button",{onClick:function(){return a(i+32)},className:"post-list-load__button",children:"LOAD MORE"})})]}):(0,s.jsx)("div",{className:"post-list-empty",children:"No posts yet"})}},3899:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var s=n(5893),r=n(1664),i=n(8928),a=n(9133),o=n(4958),c=n(4790),u=function(){return(0,s.jsx)("div",{className:"scrollable-members",children:o.T.map((function(t,e){return(0,s.jsx)(r.default,{href:(0,c.gb)(t.id),passHref:!0,children:(0,s.jsxs)("a",{className:"scrollable-member__link",children:[(0,s.jsx)("span",{className:"scrollable-member__image",children:(0,s.jsx)("img",{src:t.avatarSrc,alt:t.name,className:"scrollable-member__img",width:80,height:80})}),(0,s.jsx)("span",{className:"scrollable-member__name",children:t.name}),(0,s.jsx)("span",{className:"scrollable-member__role",children:t.role})]})},"scrollable-member-".concat(e))}))})},l=n(46),h=n(7713),d=n(1775),f=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.T,{title:a.v.siteMeta.title,description:a.v.siteMeta.description,path:"/",removeSiteNameFromTitle:!0}),(0,s.jsx)("section",{className:"home-hero",children:(0,s.jsxs)(d.v,{children:[(0,s.jsx)("h1",{className:"home-hero__title",children:a.v.siteMeta.title}),!!a.v.siteMeta.description&&(0,s.jsx)("p",{className:"home-hero__description",children:a.v.siteMeta.description})]})}),(0,s.jsx)("section",{className:"home-members",children:(0,s.jsxs)(d.v,{children:[(0,s.jsxs)("div",{className:"home-section-title-container",children:[(0,s.jsx)("h2",{className:"home-section-title",children:"Sources"}),(0,s.jsx)(r.default,{href:"/members",children:(0,s.jsx)("a",{className:"home-section-link",children:"See Details \u2192"})})]}),(0,s.jsx)("div",{className:"home-members-container",children:(0,s.jsx)(d.a,{children:(0,s.jsx)(u,{})})})]})}),(0,s.jsx)("section",{className:"home-posts",children:(0,s.jsxs)(d.v,{children:[(0,s.jsx)("div",{className:"home-section-title-container",children:(0,s.jsx)("h2",{className:"home-section-title",children:"Articles"})}),(0,s.jsx)("div",{className:"home-posts-container",children:(0,s.jsx)(l.p,{items:i})})]})})]})}}},function(t){t.O(0,[737,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);