"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4943],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(79443);var l=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),o="tabItem_1uMI",p="tabItemActive_2DSg";var s=function(e){var t,a=e.lazy,r=e.block,s=e.defaultValue,d=e.values,u=e.groupId,c=e.className,m=n.Children.toArray(e.children),h=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=l(),f=k.tabGroupChoices,N=k.setTabGroupChoices,y=(0,n.useState)(g),v=y[0],b=y[1],w=[];if(null!=u){var P=f[u];null!=P&&P!==v&&h.some((function(e){return e.value===P}))&&b(P)}var T=function(e){var t=e.currentTarget,a=w.indexOf(t),n=h[a].value;b(n),null!=u&&(N(u,n),setTimeout((function(){var e,a,n,r,l,i,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,a>=0&&l<=s&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},c)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:T,onClick:T},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},37162:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(55064),o=a(58215),p=["components"],s={title:"Puppet Provider: PadLocal",sidebar_label:"PadLocal"},d=void 0,u={unversionedId:"puppet-providers/padlocal",id:"puppet-providers/padlocal",isDocsHomePage:!1,title:"Puppet Provider: PadLocal",description:"Wechaty Puppet PadLocal",source:"@site/docs/puppet-providers/padlocal.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/padlocal",permalink:"/docs/puppet-providers/padlocal",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-providers/padlocal.md",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1631076557,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"Puppet Provider: PadLocal",sidebar_label:"PadLocal"},sidebar:"docs",previous:{title:"Lark",permalink:"/docs/puppet-providers/lark"},next:{title:"WeChat4U",permalink:"/docs/puppet-providers/wechat4u"}},c=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"History",id:"history",children:[{value:"PadLocal: Wechaty puppet service provider",id:"padlocal-wechaty-puppet-service-provider",children:[]},{value:"Topology",id:"topology",children:[]}]},{value:"Maintainers",id:"maintainers",children:[]},{value:"Blogs",id:"blogs",children:[]}],m={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"padlocal"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-PadLocal-blueviolet",alt:"Wechaty Puppet PadLocal"}))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://wechaty.js.org/assets/2020/padlocal/logo.png",alt:"Wechaty Puppet PadLocal"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-padlocal"},(0,l.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-padlocal.svg",alt:"NPM Version"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-padlocal?activeTab=versions"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-padlocal/next.svg",alt:"npm (tag)"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/padlocal/padlocal-client-ts"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-padlocal--client--ts-brightgreen",alt:"Powered by padlocal-client-ts"}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Repo: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal"},"https://github.com/padlocal/wechaty-puppet-padlocal")),(0,l.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal/issues"},"https://github.com/padlocal/wechaty-puppet-padlocal/issues"))),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("p",null,"PadLocal is a full-featured Wechaty Puppet Provider."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,l.kt)("th",{parentName:"tr",align:null},"padlocal"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"<\u6d88\u606f>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send and receive text"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u53d1\u6587\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send and receive personal business cards"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u53d1\u4e2a\u4eba\u540d\u7247"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send and receive graphic links"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6536\u53d1\u56fe\u6587\u94fe\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send pictures and files"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u56fe\u7247\u3001\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Receive pictures and files"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u56fe\u7247\u3001\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send video"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u89c6\u9891"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Receive video"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u89c6\u9891"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Mini Program"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5c0f\u7a0b\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Receive GIF"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u52a8\u56fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send GIF"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u52a8\u56fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Receive voice message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u8bed\u97f3\u6d88\u606f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send voice message"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8bed\u97f3\u6d88\u606f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forward text"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u6587\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forward the picture"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u56fe\u7247"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forward graphic link"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u56fe\u6587\u94fe\u63a5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forward audio"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u97f3\u9891"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forward the video"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u89c6\u9891"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forward file"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u6587\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forward GIF"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u52a8\u56fe"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Forwarding applet"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Group")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"<\u7fa4\u7ec4>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create group chat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7fa4\u804a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Set group announcement"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7fa4\u516c\u544a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get group announcement"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7fa4\u516c\u544a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group QR Code"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e8c\u7ef4\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pull people into the group"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62c9\u4eba\u8fdb\u7fa4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kick out of the group"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8e22\u4eba\u51fa\u7fa4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Exit group chat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9000\u51fa\u7fa4\u804a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Change group name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6539\u7fa4\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group entry event"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5165\u7fa4\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Outliers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u79bb\u7fa4\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group name change event"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0\u53d8\u66f4\u4e8b\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@\u7fa4\u5458"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group list"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group member list"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group details"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7fa4\u8be6\u60c5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Contact")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"<\u8054\u7cfb\u4eba>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Modification notes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5907\u6ce8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add friends"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u597d\u53cb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pass friends automatically"),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u901a\u8fc7\u597d\u53cb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add friends"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u597d\u53cb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Friends list"),(0,l.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Friends details"),(0,l.kt)("td",{parentName:"tr",align:null},"\u597d\u53cb\u8be6\u60c5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Other")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"<\u5176\u4ed6>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Log in to WeChat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u5fae\u4fe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scan code status"),(0,l.kt)("td",{parentName:"tr",align:null},"\u626b\u7801\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Exit WeChat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9000\u51fa\u5fae\u4fe1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dependency Agreement"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u534f\u8bae"),(0,l.kt)("td",{parentName:"tr",align:null},"iPad")))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TOKEN required")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"PadLocal is a Wechaty Puppet Provider which consumes Wechaty Puppet Service."),(0,l.kt)("p",{parentName:"div"},"Learn about ",(0,l.kt)("a",{parentName:"p",href:"/docs/puppet-services/padlocal"},"how to get a PadLocal TOKEN")))),(0,l.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}\nnpm start\n"))),(0,l.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}\nnpm start\n"))),(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nset WECHATY_PUPPET=wechaty-puppet-padlocal\nset WECHATY_PUPPET_PADLOCAL_TOKEN=${TOKEN}\nnpm start\n")))),(0,l.kt)("h2",{id:"history"},"History"),(0,l.kt)("p",null,"In 2019 to 2020, the padlocal development team started making community-related products, and also started using Wechaty. Gradually their recognition and trust with Wechaty and the entire community was built up."),(0,l.kt)("p",null,'When the developer of Padlocal was working on a crawler system a few years ago, he came into contact with Wechaty. This project needed to regularly push the status information of the crawler and actively query related content crawled. At that time, there was a very popular saying: "Dialogue is a service", so he wondered whether these functions can be realized through WeChat? With the help of Wechaty, all functions were quickly realized, and the final effect was also very good.'),(0,l.kt)("h3",{id:"padlocal-wechaty-puppet-service-provider"},"PadLocal: Wechaty puppet service provider"),(0,l.kt)("p",null,"The puppet in the community was not perfect at that time. There were some gaps in the process of using it. Moreover, the life cycle of puppet is not particularly stable, and it may not be maintained after a period of time. They were worried that this uncertainty would affect their business, so they had the idea of \u200b\u200bdeveloping a puppet themselves."),(0,l.kt)("p",null,"So unpacking from the App, using IDA to decompile WeChat, started a long reverse road. Before doing this, the team expected this process to be difficult and encounter all kinds of difficult roadblocks, but never expected it to be so difficult. The initial stage was quite pleasant, because we could easily see our growth every step of the way, and every time we fought a monster, we felt that we had risen to a level. But on going deeper, a lot of really hard roadblocks turned up. They even considered \u200b\u200bgiving up, but they were not reconciled, and persevered. Here are a few moments of those hardships:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Handling code obfuscation")," : WeChat will obfuscate sensitive code. For code obfuscation, it is recommended that to refer to ollvm. Code obfuscation may have these several methods:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Control flow flattening"),(0,l.kt)("li",{parentName:"ol"},"Fake control flow"),(0,l.kt)("li",{parentName:"ol"},"Instruction replacement.")),(0,l.kt)("p",{parentName:"li"},'Quarkslab\'s article "Deobfuscation: recovering an OLLVM-protected program" also introduces a little deobfuscation method, but the examples mentioned in the article are only insignificant compared to those encountered in WeChat. For example, a certain function of WeChat has more than 7W lines after obfuscation, and it can take a whole day to decompile with IDA. By slowly disclosing these codes every day, many rules have been summarized. So a small tool was written to solve the obfuscation, and through continuous attempts and corrections, the code was finally unobfuscated.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"0305 algorithm")," : WeChat itself performs strict verification on the client, including information such as device environment and device fingerprints. That is to say, using some tools mentioned on the Internet to modify the function of WeChat, it is actually easy to be recognized by WeChat, and it may be a matter of time before the account is blocked. Some encryption and decryption and signature verification mechanisms are needed here, and the 0305 algorithm is one of the more difficult ones. First of all, the code itself has been obfuscated, and secondly, even if it is unobfuscated, it is difficult to see its logic, such as the specific algorithm used, encryption, decryption, and signature verification process. So it can only be explored slowly, the changes in the data have to be constantly observed at each step, and possible patterns had to be explored. In the end, after a lot of attempts, the correct algorithm and process were hit."))),(0,l.kt)("p",null,"After experiencing several difficulties and successfully solving them, the team had a lot of confidence. Even after encountering moments of frustration, the team believed that the challenge could be completed. The journey was one step at a time."),(0,l.kt)("p",null,'In the end, fully implemented puppet called PadLocal was developed. There were a few reasons why the name was decided to be "PadLocal". The next section will explain the overall design of the puppet and how it differs from other puppets. The biggest features of PadLocal are:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Managing account status"),(0,l.kt)("li",{parentName:"ul"},"Communication with WeChatServer")),(0,l.kt)("p",null,"When designing puppet, firstly investigated other puppets in the community were investigated and their implementation principles were studied in great detail. It was observed that most other puppet design ideas were like this: the puppet server manages and maintains the status of the hosting account. All requests are completed through the link puppet -> puppet server -> WeChatServer. In the message push part, a long connection is established between puppet and puppet server, and a corresponding long connection is also established between puppet server and WeChatServer. When a new message is pushed, it reaches the puppet end through the link WeChatServer -> puppet server -> puppet. In this design, the puppet server acts as a stateful proxy, and all traffic is forwarded by the server. In our opinion, such a design may have several potential disadvantages:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Because the puppet server ultimately communicates with WeChatServer, if multiple accounts are hosted on a puppet server, and no proxy policy is configured for each account, then these accounts will share the IP of the puppet server. From the perspective of risk control, risks are prone to arise. Moreover, once some of the accounts have a relatively high risk level, it is easy to pollute other accounts in the same IP pool and harm the innocent."),(0,l.kt)("li",{parentName:"ol"},"All traffic is forwarded through the puppet server, which puts a lot of pressure on its bandwidth, especially when a large number of multimedia resources such as pictures and videos are generated in the hosting account."),(0,l.kt)("li",{parentName:"ol"},"Since the puppet server maintains the status of the hosting account, the puppet server is stateful. From the perspective of system architecture, stateful servers have considerable challenges in terms of system stability, availability, and capacity planning. If some servers in the cluster are down, and the design of the standby switch mechanism is not perfect, some accounts are likely to be in an unavailable state."),(0,l.kt)("li",{parentName:"ol"},"In order to ensure better usability and experience of puppet, the puppet server usually caches (not necessarily permanently saves) certain data (such as chat data). In other words, the server inevitably needs to touch the business data of the hosting account. This requires puppet providers to maintain extremely high industry self-discipline and ensure the security of customer data through adequate mechanisms.")),(0,l.kt)("p",null,"Based on the above considerations, all traffic forwarding work was put into the puppet, which is the source of Local in PadLocal. Two-way communication mechanism of GRPC was used to make puppet a proxy and forward all traffic to WeChatServer through puppet. At the same time, puppet maintains a long connection with WeChatServer. The benefits of this are as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The IP used for the communication between the hosting account and WeChatServer is the IP of the puppet end, and there is no risk of sharing the IP for different accounts."),(0,l.kt)("li",{parentName:"ol"},"The flow of downloading multimedia resources such as pictures and videos does not need to go through the PadLocal server. And without going through the server, the efficiency is higher."),(0,l.kt)("li",{parentName:"ol"},"The account status maintenance is done on the puppet side, so the PadLocal server can be designed as stateless. It will naturally be much simpler to deal with issues such as expansion, simple is beautiful.\nPadLocal server will not save any business data, and there is no risk of data security.")),(0,l.kt)("h3",{id:"topology"},"Topology"),(0,l.kt)("p",null,"The topology diagram of the overall architecture is as follows:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Topology diagram",src:a(1208).Z})),(0,l.kt)("p",null,"By implementing a puppet, the team gained a lot of things ourselves. They now have a more in-depth understanding of Wechaty, and can understand the original intention of the designer and the trade-offs among them. The fact that Wechaty is so easy to use is the result of careful design. Secondly, creating a Wechaty puppet is a very challenging thing, ofcourse it is full of accomplishment to be able to complete such a thing. Furthermore, from an internal perspective, a more in-depth and comprehensive understanding of the WeChat terminal Operating mechanism and design ideas can be had. As a national-level communication software, WeChat's design is excellent. Various mechanisms and design concepts can fully serve as industry standards. It is worthy of being the absolute king in this field."),(0,l.kt)("p",null,"The development team released the PadLocal puppet to the outside world, hoping to help everyone realize various ideas in the WeChat ecosystem, and at the same time help the WeChat ecosystem to develop more abundantly and healthily. For future plans, they will continue to actively maintain this puppet with the iteration of the WeChat version."),(0,l.kt)("p",null,'PadLocal is currently in the beta testing stage, and there are still some minor issues that need to be resolved. More developers are expected to participate and let this puppet move to the next more mature stage. There is a  reward mechanism in place to thank the partners who have contributed to PadLocal, and the specific rules are still being negotiated. At present, Token is gradually opened to everyone in the form of "application + review". If you are interested, please contact the administrator classmates and explain what kind of creativity you achieve through PadLocal. We are also preparing more detailed documents and guidelines, so stay tuned.'),(0,l.kt)("h2",{id:"maintainers"},"Maintainers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/padlocal"},"@padlocal"))),(0,l.kt)("h2",{id:"blogs"},"Blogs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/"},"New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020"))))}h.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})},1208:function(e,t,a){t.Z=a.p+"assets/images/padlocal-topological-graph-6cc38db7c6aae0bfd700e4ca396186de.webp"}}]);