(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1039:function(e,t,o){"use strict";o(843)},1040:function(e,t,o){var n=o(6)(!1);n.push([e.i,'@media (min-width:1024px){.mobile-only[data-v-6a8896cc]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-6a8896cc]{display:none!important}}@-webkit-keyframes spin-data-v-6a8896cc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-6a8896cc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.new-icons-page .is-loading[data-v-6a8896cc]{position:relative;height:100px}.new-icons-page .is-loading[data-v-6a8896cc]:after{content:"";position:absolute;top:50%;left:50%;margin-top:-1.5rem;margin-left:-1.5rem;width:3rem;height:3rem;border-radius:50%;border:2px solid hsla(0,0%,66.7%,.2);border-top-color:hsla(0,0%,66.7%,.8);-webkit-animation:spin-data-v-6a8896cc 1s linear infinite;animation:spin-data-v-6a8896cc 1s linear infinite}.new-icons-page .title-wrap[data-v-6a8896cc]{display:flex;align-items:center;margin-bottom:24px}.new-icons-page .app-title[data-v-6a8896cc]{font-size:32px;line-height:38px;color:#1a1a1a;margin:0}@media (max-width:535px){.new-icons-page .app-title .selector-container[data-v-6a8896cc]{display:block}}.new-icons-page .app-page-subtitle[data-v-6a8896cc]{max-width:680px;color:#999}.new-icons-page .app-page-section-title[data-v-6a8896cc]:first-child{margin-top:4px}',""]),e.exports=n},3742:function(e,t,o){"use strict";o.r(t);o(12),o(13),o(11),o(14),o(15);var n=o(0),r=(o(19),o(4));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(e){return new Promise((function(t){var o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],r={};e.forEach((function(e){var t=function(e){var t={date:"",code:""},r=new Date(e);switch(function(e){var t=864e5,o=Date.now(),n=new Date(Date.now()),r=new Date(e);return o-e<=t?"today":o-e<2*t?"yesterday":Math.ceil((o-e)/t)<=n.getDay()?"this_week":Math.ceil((o-e)/t)>n.getDay()&&Math.ceil((o-e)/t)<=n.getDay()+7?"last_week":n.getFullYear()===r.getFullYear()?"this_year":"other"}(e)){case"today":t.date="Today",t.code="today";break;case"yesterday":t.date="Yesterday",t.code="yesterday";break;case"this_week":t.date=o[r.getDay()],t.code=t.date.toLowerCase();break;case"last_week":t.date="Last "+o[r.getDay()],t.code="last_"+t.date.toLowerCase();break;case"this_year":t.date=n[r.getMonth()];break;default:t.date="".concat(n[r.getMonth()]," ").concat(r.getFullYear())}return t}(1e3*e.timestamp);r[t.date]=r[t.date]||[],r[t.date].push(e)})),t(r)}))}var f={name:"NewIconsPage",layout:"app",scrollToTop:!0,data:function(){return{icons:[],iconsByDate:{},page:1,allIconsLoaded:!1,activeGrid:void 0,fetchErrorsCount:0,loading:!1,pageSubtitle:null}},computed:l({},Object(r.e)({gridStyle:function(e){return e.ui.iconsGridStyle},platform:function(e){return e.platform},collections:function(e){return e.collections.collections},lang:function(e){return e.i18n.locale}})),asyncData:function(e){e.app,e.route,e.params;var t=e.store,o=e.redirect;if(t.dispatch("setPlatform","all"),"external"===t.state.filters.authors){var n,r=null!==(n=t.state.filters.color)&&void 0!==n?n:"black";o(301,"/icons/new/".concat(r,"--external"))}return{icons:[],iconsByDate:{},error:void 0}},mounted:function(){this.icons.length||this.fetchData(this.$route.params),this.checkError()},methods:{activateGrid:function(e){this.activeGrid=e},fetchData:function(e){var t=this;return this.loading=!0,new Promise((function(o){var n,r,c,f;(n={app:t,store:t.$store,params:e},r=n.app,n.params,c=n.store,n.redirect,f=r.i18n||r.$i18n,new Promise((function(e){c.dispatch("latest",{language:f.localeProperties.iso}).then((function(t){if(t.success){var o=f.t("WEB_APP.NEW_ICONS"),n=f.t("ICON.ICONS.NEW.NEW_PAGE_DESCRIPTION"),r=f.t("ICON.ICONS.NEW.NEW_PAGE_SUBTITLE");c.dispatch("updateSEO",{titlePage:o,descriptionPage:n,title:f.t("WEB_APP.SEO.LATEST.TITLE_ALL"),description:f.t("WEB_APP.SEO.LATEST.META_DESCRIPTION_ALL"),image:t.preview}),d(t.icons).then((function(o){e(l(l({},t),{},{iconsByDate:o,pageSubtitle:r}))}))}else e({error:{message:t.message}})})).catch((function(t){console.log("error",t),e({icons:[],iconsByDate:{},error:{message:t.message}})}))}))).then((function(e){t.loading=!1,t.icons=e.icons,t.iconsByDate=e.iconsByDate,t.pageSubtitle=e.pageSubtitle,t.checkError(e.error),o()})).catch((function(e){t.loading=!1,console.error("error",e),t.checkError(e),o()}))}))},fetchNext:function(e){var t=this;this.$store.dispatch("latest",{page:this.page+1}).then((function(o){t.page++,o.success&&o.icons.length?(o.icons.forEach((function(e){t.icons.push(e)})),d(t.icons).then((function(e){t.iconsByDate=e}))):(e.complete(),t.allIconsLoaded=!0,console.log("--- Loaded Icons ---")),e.loaded()})).catch((function(o){e.loaded(),t.fetchErrorsCount++,3===t.fetchErrorsCount&&(e.complete(),t.allIconsLoaded=!0),console.error("page error",o&&o.message?o.message:o)}))},checkError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.error;e&&(console.error("this.error",this.error),this.error=void 0)}}},h=(o(1039),o(1)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"new-icons-page"},[e.loading?[o("div",{staticClass:"app-page-section custom-padding ph-descr-wrap"},[o("div",{staticClass:"app-page-subtitle is-small is-left"},[o("icon-placeholder",{attrs:{type:"filters",filters:1,shortBottomMargin:!0}})],1)])]:[o("div",{staticClass:"app-page-section custom-padding"},[o("app-header")],1)],e.loading?[o("div",{staticClass:"app-page-section custom-padding"},[o("icon-placeholder",{attrs:{count:27,type:"icon"}})],1)]:[o("div",{staticClass:"app-page-section is-body container"},[e._l(e.iconsByDate,(function(t,n,r){return[o("div",{staticClass:"app-page-section-title"},[e._v(e._s(n))]),o("icon-grid",{staticClass:"icon-grid-content",attrs:{icons:t,"grid-style":e.gridStyle,action:"select",id:n,"active-grid":e.activeGrid},on:{activate:e.activateGrid}})]})),o("div",{staticClass:"app-page-section description-padding"},[o("app-bottom-info",{attrs:{subtitle:e.pageSubtitle}})],1),o("client-only",[o("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!e.allIconsLoaded,expression:"!allIconsLoaded"}],attrs:{distance:450},on:{infinite:e.fetchNext}},[o("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1)],2)]],2)}),[],!1,null,"6a8896cc",null);t.default=component.exports},843:function(e,t,o){var content=o(1040);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(7).default)("53c5531e",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=index.e65cacf6e5884a4826fe.js.map