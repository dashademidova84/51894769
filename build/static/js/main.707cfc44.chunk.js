(window.webpackJsonpminiapp=window.webpackJsonpminiapp||[]).push([[0],{195:function(e,t,r){e.exports=r(308)},286:function(e,t,r){},287:function(e,t,r){},288:function(e,t,r){},308:function(e,t,r){"use strict";r.r(t);r(196),r(222),r(224),r(225),r(227),r(228),r(229),r(230),r(231),r(232),r(233),r(234),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264);var n=r(47),a=r(48),o=r(54),i=r(49),c=r(55),s=r(0),l=r.n(s),u=r(50),p=r.n(u),f=(r(272),r(273),r(15)),h=(r(286),r(287),r(288),r(8)),d=r.n(h),m=r(4),g=r.n(m),b=r(37),v=r(9),_=r(34),y=r(39);function C(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";this.back=Object(v.a)(g.a.mark((function t(){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.state.popout||void 0===e.state.popout){t.next=4;break}return e.setState({popout:null}),window.history.pushState({pop:"popout"},"Title"),t.abrupt("return");case 4:if(1!==(r=e.state.history).length){t.next=9;break}d.a.send("VKWebAppClose",{status:"success"}),t.next=13;break;case 9:if(!(r.length>1)){t.next=13;break}return r.pop(),t.next=13,e.setState({activePanel:r[r.length-1],history:r,snackbar:null});case 13:case"end":return t.stop()}}),t)}))),this.go=function(t){var r=e.state.history;"object"===typeof t&&t.currentTarget&&(t=t.currentTarget.dataset.to),r[r.length-1]!==t&&(r.push(t),window.history.pushState({activePanel:t},"Title"),e.setState({activePanel:t,history:r,snackbar:null}))},this.setActiveModal=function(t){e.setState({activeModal:t})},this.setActivePanel=function(t,r){e.setState({activePanel:t,history:r?[].concat(Object(y.a)(r),[t]):[t]})},this.setPopout=function(t){e.setState({popout:t})},this.setAlert=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{title:"\u041e\u043a",autoclose:!0}];e.setPopout(l.a.createElement(f.b,{actions:n,actionsLayout:"vertical",onClose:function(){return e.setPopout(null)},header:t,text:r}))},this.state.history=[t],this.state.activePanel=t}function k(){return{activePanel:this.state.activePanel,onSwipeBack:this.back,history:this.state.history,popout:this.state.popout}}r(46),r(69);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){return E.apply(this,arguments)}function E(){return(E=Object(v.a)(g.a.mark((function e(t){var r,n,a,o,i=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},n=i.length>2&&void 0!==i[2]?i[2]:{},a=r?"?"+Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent("object"===typeof r[e]?JSON.stringify(r[e]):r[e])})).join("&"):"",o="".concat(t).concat(a),e.next=5,new Promise((function(e,t){fetch(o,O({method:"GET"},n)).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(t){return e({error:{code:-1,text:t.toString()}})}))}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return new Promise((function(t){return setTimeout(t,e)}))}function S(){var e=window.location.search.length>0&&JSON.parse('{"'+decodeURI(window.location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');return e&&e.vk_chat_id&&(e.vk_chat_id=decodeURIComponent(e.vk_chat_id)),e}function P(){return"desktop_web"===S().vk_platform}function F(e){var t=document.createElement("a");t.href=e,t.target="_blank",t.click(),t.remove()}var D=r(38),U=r.n(D);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var A=4,I=2,V=3,B="https://vds2153919.my-ihor.ru:8081/api/",G=B+"apps.get",H=0;function T(){return{2:{2:{0:23,1:24},1:{2:23,3:24}},3:{2:{0:23,1:29,2:30},1:{3:23,4:29,5:30}},4:{2:{0:16,1:20,2:29,3:30},1:{4:16,5:20,6:29,7:30}}}[A]}function R(e,t){var r=T();if(0===e||0===t)return H;for(var n=r[e],a=Object.keys(n).map((function(e){return[e,n[e]]})),o=0;o<a.length;o++){var i=a[o];if(o===a.length-1)return parseInt(i[0]);if(parseInt(t)<=parseInt(i[1]))return parseInt(i[0])}return H}function W(){return Z.apply(this,arguments)}function Z(){return(Z=Object(v.a)(g.a.mark((function e(){var t,r,n,a,o,i,c,s,l,u,p,f,h,m,b,v,_,y,C,k,x,O,E,j,P;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=parseInt(S().vk_app_id||0),e.next=3,w(G,{app_id:t});case 3:for((r=e.sent.response)||(r={app_id:t,group_id_join:new Array(A*V*2).fill(1),group_id_message:new Array(A*I*2).fill(1),save_photo_album:!1,need_panel_upload_photo:!1,tg_urls:[],is_show_tg:!1,categories_for_tg:[],category_group_default:0,album_name:"\ud83e\udd2a",album_caption:"\u0423\u0437\u043d\u0430\u0439 \u043a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0441\u0442\u0438\u043a\u0435\u0440\u044b - vk.com/app51535584#mark",need_upload_default_album_photo:!1,album_default_photo_url:"https://i.ibb.co/vDCcZsf/photo-2023-01-27-14-38-48.jpg"}),n=[],a=[],i=(o=r).category_group_default,c=o.is_show_tg,s=o.categories_for_tg,l=o.need_panel_upload_photo,u=o.need_upload_default_album_photo,p=o.album_default_photo_url,f=o.group_id_join,h=o.group_id_message,m=o.save_photo_album,b=o.tg_urls,H=i,v=0;v<f.length;v+=V)n.push(f.slice(v,v+V));for(_=0;_<h.length;_+=I)a.push(h.slice(_,_+I));return e.next=11,d.a.send("VKWebAppGetUserInfo");case 11:return y=e.sent,C=y.sex,k=y.bdate,x=k&&3===k.split(".").length?(new Date).getFullYear()-parseInt(y.bdate.split(".")[2]):0,O=R(C,x),E=n[O],j=a[O],P={groupsJoinCategory:n,groupsJoinUser:E,groupsMessageCategory:a,groupsMessageUser:j,vk_user:y,app:r,showGroupsCategory:O,savePhotoAlbum:m,need_upload_default_album_photo:u,album_default_photo_url:p,is_show_tg:c,categories_for_tg:s,need_panel_upload_photo:l,need_panel_sex_years:0===C||0===x,tg_urls:b,sex:C,years:x},console.debug(P),e.abrupt("return",P);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){var e=this;return l.a.createElement(f.g,{onChange:function(t){return e.setState({selectedSex:t.target.value})},defaultValue:0===this.state.sex||1===this.state.sex?"1":"2",options:Object.keys(T()).map((function(e){return{value:"".concat(e),label:1==e?"\u0436\u0435\u043d\u0441\u043a\u0438\u0439":"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"}}))})}function z(){var e=this;return l.a.createElement(f.g,{onChange:function(t){return e.setState({selectedYears:t.target.value})},defaultValue:"".concat(T()[2][0]),options:Object.keys(T()[this.state.selectedSex||1]).map((function(t,r,n){var a=T()[e.state.selectedSex||1][t],o=0===r?"\u0434\u043e ".concat(a):n[r+1]?"\u043e\u0442 ".concat(T()[e.state.selectedSex||1][n[r-1]]+1," \u0434\u043e ").concat(a):"\u043e\u0442 ".concat(a);return{value:"".concat(a),label:o}}))})}function K(){return l.a.createElement(l.a.Fragment,null,J.bind(this)(),z.bind(this)())}function N(e){"object"===typeof e&&e.currentTarget&&(e=e.currentTarget.dataset.to);var t=this.state,r=t.selectedSex,n=t.selectedYears;r||(r=0===this.state.sex||1===this.state.sex?"1":"2"),n||(n="".concat(T()[2][0]));try{var a=this.state,o=a.groupsJoinCategory,i=a.groupsMessageCategory,c=R(r,n),s=o[c],l=i[c];this.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({sex:r,years:n,groupsJoinUser:s,groupsMessageUser:l,showGroupsCategory:c},e?{history:[e],activePanel:e}:{})),console.debug({selectedSex:r,selectedYears:n,showGroupsCategory:c,groupsJoinUser:s,groupsMessageUser:l})}catch(u){console.error("ERR",u,this.state),console.debug({selectedSex:r,selectedYears:n})}}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;d.a.subscribe(function(){var r=Object(v.a)(g.a.mark((function r(n){var a,o,i,c,s;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=n.detail,o=a.type,i=a.data,void 0!==o&&console.debug(o,i),"VKWebAppUpdateConfig"===o?(c=document.createAttribute("scheme"),s=i.scheme?"client_light"===i.scheme?"bright_light":i.scheme:"bright_light",c.value=t||s,document.body.attributes.setNamedItem(c),e[o]&&"function"===typeof e[o]&&e[o]()):e[o]&&"function"===typeof e[o]&&e[o]();case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}var L=r(313),Q=r(314),q=r(315),X=r(316);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var te=l.a.createElement("rect",{width:96,height:96,rx:39,fill:"url(#paint0_linear_5_844)"}),re=l.a.createElement("g",{filter:"url(#filter0_f_5_844)"},l.a.createElement("circle",{cx:105.469,cy:18.0938,r:36.0938,fill:"url(#paint1_linear_5_844)"})),ne=l.a.createElement("g",{filter:"url(#filter1_f_5_844)"},l.a.createElement("circle",{cx:23.9062,cy:95.9062,r:36.0938,fill:"url(#paint2_linear_5_844)"})),ae=l.a.createElement("path",{d:"M54.4494 29.9314C57.6664 29.9654 59.3036 30.312 61.0011 31.2199C62.626 32.0889 63.9111 33.374 64.7801 34.9989C65.688 36.6964 66.0346 38.3336 66.0686 41.5506V54.4494C66.0346 57.6664 65.688 59.3036 64.7801 61.0011C63.9111 62.626 62.626 63.9111 61.0011 64.7801C59.3036 65.688 57.6664 66.0346 54.4494 66.0686H41.5506C38.3336 66.0346 36.6964 65.688 34.9989 64.7801C33.374 63.9111 32.0889 62.626 31.2199 61.0011C30.312 59.3036 29.9653 57.6664 29.9314 54.4494V41.5506C29.9653 38.3336 30.312 36.6964 31.2199 34.9989C32.0889 33.374 33.374 32.0889 34.9989 31.2199C36.6964 30.312 38.3336 29.9654 41.5506 29.9314H54.4494ZM41.186 33.2223C38.7557 33.2684 37.6675 33.5188 36.5484 34.1173C35.4961 34.6801 34.68 35.4961 34.1173 36.5484C33.5188 37.6675 33.2684 38.7557 33.2223 41.186V54.814C33.2684 57.2443 33.5188 58.3325 34.1173 59.4516C34.68 60.5039 35.4961 61.3199 36.5484 61.8827C37.6675 62.4812 38.7557 62.7316 41.186 62.7777H54.814C57.2443 62.7316 58.3324 62.4812 59.4515 61.8827C60.5039 61.3199 61.3199 60.5039 61.8827 59.4516C62.4812 58.3325 62.7316 57.2443 62.7777 54.814V41.186C62.7316 38.7557 62.4812 37.6675 61.8827 36.5484C61.3199 35.4961 60.5039 34.6801 59.4515 34.1173C58.3324 33.5188 57.2443 33.2684 54.814 33.2223H41.186Z",fill:"white"}),oe=l.a.createElement("path",{d:"M41.186 33.2223C38.7557 33.2684 37.6675 33.5188 36.5484 34.1173C35.4961 34.6801 34.6801 35.4961 34.1173 36.5484C33.5188 37.6675 33.2684 38.7557 33.2223 41.186V54.814C33.2684 57.2443 33.5188 58.3325 34.1173 59.4516C34.6801 60.5039 35.4961 61.3199 36.5484 61.8827C37.6675 62.4812 38.7557 62.7316 41.186 62.7777H54.814C57.2443 62.7316 58.3324 62.4812 59.4516 61.8827C60.5039 61.3199 61.3199 60.5039 61.8827 59.4516C62.4812 58.3325 62.7316 57.2443 62.7777 54.814V41.186C62.7316 38.7557 62.4812 37.6675 61.8827 36.5484C61.3199 35.4961 60.5039 34.6801 59.4516 34.1173C58.3324 33.5188 57.2443 33.2684 54.814 33.2223H41.186Z",fill:"#3F8AE0"}),ie=l.a.createElement("g",{mask:"url(#mask0_5_844)"},l.a.createElement("circle",{cx:48,cy:76.75,r:19.7143,stroke:"white",strokeWidth:3.28571}),l.a.createElement("path",{d:"M48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM48 40.6071C45.5035 40.6071 43.4821 42.6285 43.4821 45.125C43.4821 47.6215 45.5035 49.6429 48 49.6429C50.4965 49.6429 52.5178 47.6215 52.5178 45.125C52.5178 42.6285 50.4965 40.6071 48 40.6071Z",fill:"white"})),ce=l.a.createElement("path",{d:"M48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM48 40.6071C45.5035 40.6071 43.4821 42.6285 43.4821 45.125C43.4821 47.6215 45.5035 49.6429 48 49.6429C50.4965 49.6429 52.5178 47.6215 52.5178 45.125C52.5178 42.6285 50.4965 40.6071 48 40.6071Z",fill:"white"}),se=l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M61.0011 31.2199C59.3036 30.312 57.6664 29.9654 54.4494 29.9314H41.5506C38.3336 29.9654 36.6964 30.312 34.9989 31.2199C33.374 32.0889 32.0889 33.374 31.2199 34.9989C30.312 36.6964 29.9653 38.3336 29.9314 41.5506V54.4494C29.9653 57.6664 30.312 59.3036 31.2199 61.0011C32.0889 62.626 33.374 63.9111 34.9989 64.7801C36.6964 65.688 38.3336 66.0346 41.5506 66.0686H54.4494C57.6664 66.0346 59.3036 65.688 61.0011 64.7801C62.626 63.9111 63.9111 62.626 64.7801 61.0011C65.688 59.3036 66.0346 57.6664 66.0686 54.4494V41.5506C66.0346 38.3336 65.688 36.6964 64.7801 34.9989C63.9111 33.374 62.626 32.0889 61.0011 31.2199ZM36.5484 34.1173C37.6675 33.5188 38.7557 33.2684 41.186 33.2223H54.814C57.2443 33.2684 58.3324 33.5188 59.4515 34.1173C60.5039 34.6801 61.3199 35.4961 61.8827 36.5484C62.4812 37.6675 62.7316 38.7557 62.7777 41.186V54.814C62.7316 57.2443 62.4812 58.3325 61.8827 59.4516C61.7504 59.699 61.6041 59.9333 61.444 60.1544C57.7731 57.1769 53.0949 55.3929 48 55.3929C42.9051 55.3929 38.2269 57.1769 34.556 60.1544C34.3959 59.9333 34.2496 59.699 34.1173 59.4516C33.5188 58.3325 33.2684 57.2443 33.2223 54.814V41.186C33.2684 38.7557 33.5188 37.6675 34.1173 36.5484C34.68 35.4961 35.4961 34.6801 36.5484 34.1173ZM48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM41.186 62.7777H54.814C56.735 62.7413 57.8174 62.5772 58.7394 62.2144C55.737 59.9925 52.022 58.6786 48 58.6786C43.978 58.6786 40.2629 59.9925 37.2605 62.2144C38.1825 62.5772 39.265 62.7413 41.186 62.7777ZM43.4821 45.125C43.4821 42.6285 45.5035 40.6071 48 40.6071C50.4965 40.6071 52.5178 42.6285 52.5178 45.125C52.5178 47.6215 50.4965 49.6429 48 49.6429C45.5035 49.6429 43.4821 47.6215 43.4821 45.125Z",fill:"white"}),le=l.a.createElement("defs",null,l.a.createElement("filter",{id:"filter0_f_5_844",x:-5.88426,y:-93.2593,width:222.706,height:222.706,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),l.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),l.a.createElement("feGaussianBlur",{stdDeviation:37.6296,result:"effect1_foregroundBlur_5_844"})),l.a.createElement("filter",{id:"filter1_f_5_844",x:-68.4838,y:3.5162,width:184.78,height:184.78,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),l.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),l.a.createElement("feGaussianBlur",{stdDeviation:28.1481,result:"effect1_foregroundBlur_5_844"})),l.a.createElement("linearGradient",{id:"paint0_linear_5_844",x1:-48,y1:48,x2:48,y2:144,gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#70B2FF"}),l.a.createElement("stop",{offset:1,stopColor:"#5C9CE6"})),l.a.createElement("linearGradient",{id:"paint1_linear_5_844",x1:33.2812,y1:18.0938,x2:105.469,y2:90.2812,gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#FFB73D"}),l.a.createElement("stop",{offset:1,stopColor:"#FFA000"})),l.a.createElement("linearGradient",{id:"paint2_linear_5_844",x1:-48.2812,y1:95.9062,x2:23.9062,y2:168.094,gradientUnits:"userSpaceOnUse"},l.a.createElement("stop",{stopColor:"#928FFF"}),l.a.createElement("stop",{offset:1,stopColor:"#4B47B2"})),l.a.createElement("clipPath",{id:"clip0_5_844"},l.a.createElement("rect",{width:96,height:96,rx:39,fill:"white"}))),ue=function(e){var t=e.svgRef,r=e.title,n=ee(e,["svgRef","title"]);return l.a.createElement("svg",$({width:96,height:96,viewBox:"0 0 96 96",fill:"none",ref:t},n),r?l.a.createElement("title",null,r):null,l.a.createElement("g",{clipPath:"url(#clip0_5_844)"},te,re,ne,ae,l.a.createElement("mask",{id:"mask0_5_844",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:33,y:33,width:30,height:30},oe),ie,ce,se),le)};l.a.forwardRef((function(e,t){return l.a.createElement(ue,$({svgRef:t},e))})),r.p;function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(r,!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he="https://cloud-api.yandex.net/v1/disk/public/resources?public_key=",de={margin:"14px 21px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px 12px",paddingBottom:48},me={background:"#E64646",color:"#FFFFFF",cursor:"pointer",height:48,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",gap:8.5,fontFamily:"SF Pro Text",fontWeight:600,fontSize:"17px",lineHeight:"22px"},ge={marginTop:8,paddingBottom:8,color:"#818C99",fontFamily:"SF Pro Text",fontWeight:400,fontSize:"15px",lineHeight:"18px",textAlign:"center"},be=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={},C.bind(Object(_.a)(r))(),r.checkHash=r.checkHash.bind(Object(_.a)(r)),r.fetchDataFromDisk=r.fetchDataFromDisk.bind(Object(_.a)(r)),r.fetchDataFromDiskFolder=r.fetchDataFromDiskFolder.bind(Object(_.a)(r)),r}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,r,n,a,o,i,c,s,l,u=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchDataFromDisk();case 2:return this.checkHash(),Y({VKWebAppChangeFragment:function(){return u.checkHash()}},"bright_light"),e.next=6,W();case 6:t=e.sent,r={},n=0,a=["groupsJoinUser","groupsMessageUser"];case 10:if(!(n<a.length)){e.next=35;break}o=a[n],r[o]=[],i=t[o],c=0;case 15:if(!(c<i.length)){e.next=32;break}return e.prev=16,e.next=19,d.a.send("VKWebAppGetGroupInfo",{group_id:i[c]});case 19:s=e.sent,r[o].push(s),e.next=29;break;case 23:return e.prev=23,e.t0=e.catch(16),console.error(e.t0),c--,e.next=29,j(1e3);case 29:c++,e.next=15;break;case 32:n++,e.next=10;break;case 35:return l=t.need_panel_sex_years?"years":"main",e.next=38,this.setState(fe({},t,{},r,{activePanel:l}));case 38:d.a.send("VKWebAppInit");case 39:case"end":return e.stop()}}),e,this,[[16,23]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){}},{key:"checkHash",value:function(){var e=window.location.hash;return e.startsWith("#")&&this.fetchDataFromDiskFolder(e.substring(1)),!1}},{key:"fetchDataFromDisk",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,r,n,a,o,i,c,s,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U()(he+"https://disk.yandex.ru/d/VN10ZCxJTs3NPQ");case 2:return e.next=4,e.sent.json();case 4:for(t=e.sent,r=t._embedded.items,n=[],a=!0,o=!1,i=void 0,e.prev=10,c=r[Symbol.iterator]();!(a=(s=c.next()).done);a=!0)"dir"===(l=s.value).type&&l.public_url&&n.push({name:l.name,url:l.public_url});e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),o=!0,i=e.t0;case 18:e.prev=18,e.prev=19,a||null==c.return||c.return();case 21:if(e.prev=21,!o){e.next=24;break}throw i;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return console.log({folders:n}),e.next=29,this.setState({folders:n});case 29:case"end":return e.stop()}}),e,this,[[10,14,18,26],[19,,21,25]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchDataFromDiskFolder",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,r,n,a,o,i,c,s,l,u,p,f,h=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h.length>0&&void 0!==h[0]?h[0]:"",r=this.state.folders.find((function(e){return e.name===t}))){e.next=4;break}return e.abrupt("return",r);case 4:return e.next=6,U()(he+r.url);case 6:return e.next=8,e.sent.json();case 8:for(n=e.sent,a=n._embedded.items,o=[],c=!0,s=!1,l=void 0,e.prev=14,u=a[Symbol.iterator]();!(c=(p=u.next()).done);c=!0)"file"===(f=p.value).type&&f.preview?o.push(f.preview):f.name.includes("zip")&&(i=f.file);e.next=22;break;case 18:e.prev=18,e.t0=e.catch(14),s=!0,l=e.t0;case 22:e.prev=22,e.prev=23,c||null==u.return||u.return();case 25:if(e.prev=25,!s){e.next=28;break}throw l;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return console.log({folder:t,stickers_img:o,stickers_zip:i}),e.next=33,this.setState({folder:t,stickers_name:t.split("_").map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" "),stickers_img:o,stickers_zip:i});case 33:case"end":return e.stop()}}),e,this,[[14,18,22,30],[23,,25,29]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.activeModal,n=t.stickers_name,a=t.stickers_img,o=t.stickers_zip,i=t.folder,c=t.groupsJoinUser,s=t.groupsMessageUser;return l.a.createElement(f.n,Object.assign({},k.bind(this)(),{modal:l.a.createElement(f.i,{activeModal:r},l.a.createElement(f.h,{id:"get",onClose:function(){e.setActiveModal(null)}},l.a.createElement("div",{style:ge},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u043d\u0430\u0448\u0438\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432 \u0438 ",l.a.createElement("span",{style:{color:"var(--text_primary)"}},"\u043f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u044b"),", \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"),c&&c.map((function(e,t){return l.a.createElement(f.m,{key:"Cell-".concat(t),before:l.a.createElement(f.d,{size:48,src:e.photo_50}),after:l.a.createElement(L.a,null),onClick:function(){return d.a.send("VKWebAppJoinGroup",{group_id:e.id})}},e.name)})),s&&s.map((function(e,t){return l.a.createElement(f.m,{key:"Cell-".concat(t),before:l.a.createElement(f.d,{size:48,src:e.photo_50}),after:l.a.createElement(Q.a,null),onClick:function(){return d.a.send("VKWebAppAllowMessagesFromGroup",{group_id:e.id})}},e.name)})),l.a.createElement("div",{style:fe({},me,{marginTop:20}),onClick:Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P()){e.next=4;break}F(o),e.next=13;break;case 4:return e.prev=4,e.next=7,d.a.send("VKWebAppDownloadFile",{url:o,filename:"".concat(i,".zip")});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(4),console.error(e.t0),F(o);case 13:case"end":return e.stop()}}),e,null,[[4,9]])})))},l.a.createElement(q.a,null)," \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))}),l.a.createElement(f.j,{id:"main"},l.a.createElement(f.k,null,n),l.a.createElement("div",{style:de},a&&a.map((function(e,t){return l.a.createElement("img",{alt:"sticker",key:"img-".concat(t),src:e,style:{justifySelf:"center"}})}))),l.a.createElement("div",{style:fe({},me,{position:"fixed",bottom:"calc(var(--safe-area-inset-bottom) + 8px)",left:16,right:16}),onClick:Object(v.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setActiveModal("get");case 1:case"end":return t.stop()}}),t)})))},l.a.createElement(q.a,null)," \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u0430\u0431\u043e\u0440")),l.a.createElement(f.j,{id:"years"},l.a.createElement(f.l,{icon:l.a.createElement(X.a,null),header:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u043b \u0438 \u0432\u043e\u0437\u0440\u0430\u0441\u0442",action:l.a.createElement(f.e,{size:"m",onClick:function(){N.bind(e)("main")}},"\u0414\u0430\u043b\u044c\u0448\u0435"),stretched:!0},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},K.bind(this)()))))}}]),t}(l.a.Component),ve=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={},r}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.subscribe((function(t){var r=t.detail,n=r.type,a=r.data;"VKWebAppUpdateConfig"===n&&e.setState({appearance:a.appearance})}))}},{key:"render",value:function(){return l.a.createElement(f.f,{webviewType:f.o.INTERNAL,appearance:this.state.appearance},l.a.createElement(f.a,null,l.a.createElement(f.c,null,l.a.createElement(be,null))))}}]),t}(l.a.Component);p.a.render(l.a.createElement(ve,null),document.getElementById("root"))}},[[195,1,2]]]);
//# sourceMappingURL=main.707cfc44.chunk.js.map