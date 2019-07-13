(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c91517de"],{1113:function(n,e,t){e=n.exports=t("2350")(!1),e.i(t("62dc"),""),e.push([n.i,'\n.vux-fade-enter-active,\n.vux-fade-leave-active {\n  opacity: 1;\n  -webkit-transition: opacity linear 0.2s;\n  transition: opacity linear 0.2s;\n}\n.vux-fade-enter,\n.vux-fade-leave-to {\n  opacity: 0;\n}\n.vux-dialog-enter-active {\n  -webkit-animation: vux-dialog-in 0.5s;\n          animation: vux-dialog-in 0.5s;\n}\n.vux-dialog-leave-active {\n  -webkit-animation: vux-dialog-out 0.3s;\n          animation: vux-dialog-out 0.3s;\n}\n@-webkit-keyframes vux-dialog-in {\n0% {\n    -webkit-transform: scale(1.185);\n            transform: scale(1.185);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes vux-dialog-in {\n0% {\n    -webkit-transform: scale(1.185);\n            transform: scale(1.185);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@-webkit-keyframes vux-dialog-out {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n    opacity: 0;\n}\n}\n@keyframes vux-dialog-out {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85);\n    opacity: 0;\n}\n}\n.vux-mask-enter,\n.vux-mask-leave-active {\n  opacity: 0;\n}\n.vux-mask-leave-active,\n.vux-mask-enter-active {\n  -webkit-transition: opacity 300ms;\n  transition: opacity 300ms;\n}\n/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text size of content\n* zh-CN: 内容文本大小\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-mask {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui-mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n.weui-dialog {\n  position: fixed;\n  display: table;\n  z-index: 5000;\n  width: 80%;\n  max-width: 300px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  background-color: #FFFFFF;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.weui-dialog__hd {\n  padding: 1.3em 1.6em 0.5em;\n}\n.weui-dialog__hd.with-no-content {\n  padding: 1.7em 1.6em;\n}\n.weui-dialog__title {\n  font-weight: 400;\n  font-size: 18px;\n}\n.weui-dialog__bd {\n  padding: 0 1.6em 0.8em;\n  min-height: 40px;\n  font-size: 15px;\n  line-height: 1.3;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #999999;\n}\n.weui-dialog__bd:first-child {\n  padding: 2.7em 20px 1.7em;\n  color: #353535;\n}\n.weui-dialog__ft {\n  position: relative;\n  line-height: 48px;\n  font-size: 18px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.weui-dialog__ft:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-dialog__btn {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #3CC51F;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: relative;\n}\n.weui-dialog__btn:active {\n  background-color: #EEEEEE;\n}\n.weui-dialog__btn:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.weui-dialog__btn:first-child:after {\n  display: none;\n}\n.weui-dialog__btn_default {\n  color: #353535;\n}\n.weui-dialog__btn_primary {\n  color: #0BB20C;\n}\n.weui-dialog__btn_warn {\n  color: #E64340;\n}\n.weui-skin_android .weui-dialog {\n  text-align: left;\n  -webkit-box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n}\n.weui-skin_android .weui-dialog__title {\n  font-size: 21px;\n}\n.weui-skin_android .weui-dialog__hd {\n  text-align: left;\n}\n.weui-skin_android .weui-dialog__bd {\n  color: #999999;\n  padding: 0.25em 1.6em 2em;\n  font-size: 17px;\n  text-align: left;\n}\n.weui-skin_android .weui-dialog__bd:first-child {\n  padding: 1.6em 1.6em 2em;\n  color: #353535;\n}\n.weui-skin_android .weui-dialog__ft {\n  display: block;\n  text-align: right;\n  line-height: 42px;\n  font-size: 16px;\n  padding: 0 1.6em 0.7em;\n}\n.weui-skin_android .weui-dialog__ft:after {\n  display: none;\n}\n.weui-skin_android .weui-dialog__btn {\n  display: inline-block;\n  vertical-align: top;\n  padding: 0 0.8em;\n}\n.weui-skin_android .weui-dialog__btn:after {\n  display: none;\n}\n.weui-skin_android .weui-dialog__btn:active {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.weui-skin_android .weui-dialog__btn:visited {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.weui-skin_android .weui-dialog__btn:last-child {\n  margin-right: -0.8em;\n}\n.weui-skin_android .weui-dialog__btn_default {\n  color: #808080;\n}\n@media screen and (min-width: 1024px) {\n.weui-dialog {\n    width: 35%;\n}\n}\n.vux-x-dialog-absolute .weui-dialog {\n  position: absolute;\n}\n',""])},1222:function(n,e,t){var o=t("b2c4");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("499e").default;i("2c2976a4",o,!0,{})},"3b2b":function(n,e,t){var o=t("7726"),i=t("5dbc"),a=t("86cc").f,r=t("9093").f,l=t("aae3"),s=t("0bfb"),d=o.RegExp,c=d,h=d.prototype,u=/a/g,f=/a/g,p=new d(u)!==u;if(t("9e1e")&&(!p||t("79e5")(function(){return f[t("2b4c")("match")]=!1,d(u)!=u||d(f)==f||"/a/i"!=d(u,"i")}))){d=function(n,e){var t=this instanceof d,o=l(n),a=void 0===e;return!t&&o&&n.constructor===d&&a?n:i(p?new c(o&&!a?n.source:n,e):c((o=n instanceof d)?n.source:n,o&&a?s.call(n):e),t?this:h,d)};for(var m=function(n){n in d||a(d,n,{configurable:!0,get:function(){return c[n]},set:function(e){c[n]=e}})},g=r(c),w=0;g.length>w;)m(g[w++]);h.constructor=d,d.prototype=h,t("2aba")(o,"RegExp",d)}t("7a56")("RegExp")},"62dc":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,".vux-modal-open {\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n}\n.vux-modal-open-for-container {\n  overflow: hidden!important;\n}\n",""])},9175:function(n,e,t){"use strict";t.r(e);var o=t("a27e"),i=function(n){return o["a"].request({url:"videos/list",method:"get",params:n})},a=t("aae3d"),r=t("582b"),l=(r["a"],a["a"],{name:"Videos",directives:{TransferDom:r["a"]},components:{XDialog:a["a"]},data:function(){return{showDialogStyle:!1,listData:[],videoUri:""}},watch:{showDialogStyle:function(n){var e=this;n?this.$nextTick(function(){e.$refs["video"].play()}):this.$refs["video"].pause()}},created:function(){this.getVideosList()},methods:{showVideo:function(n){this.showDialogStyle=!0,this.videoUri=n},getVideosList:function(){var n=this;i().then(function(e){n.listData=e.data})}}}),s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"list"},n._l(n.listData,function(e,o){return t("div",{key:o,staticClass:"item vux-1px-b",on:{click:function(t){return n.showVideo(e.video_uri)}}},[t("div",{staticClass:"cover",style:n._f("bgImgFilter")(e.cover_uri)}),n._v(" "),t("div",{staticClass:"title"},[n._v(n._s(e.title))])])}),0),n._v(" "),t("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[t("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{"max-width":"100%",width:"100%",height:"50%","background-color":"transparent"}},model:{value:n.showDialogStyle,callback:function(e){n.showDialogStyle=e},expression:"showDialogStyle"}},[t("video",{ref:"video",staticStyle:{width:"100%"},attrs:{src:n._f("uriFilter")(n.videoUri),controls:""}}),n._v(" "),t("p",{staticStyle:{color:"#fff","text-align":"center","margin-top":"20px"},on:{click:function(e){n.showDialogStyle=!1}}},[t("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-outline",staticStyle:{fill:"#fff"},attrs:{type:"ios-close-outline",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 512 512"}},[t("path",{staticClass:"st0",attrs:{d:"M403.1 108.9c-81.2-81.2-212.9-81.2-294.2 0s-81.2 212.9 0 294.2c81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2zm-12.3 281.9c-74.3 74.3-195.3 74.3-269.6 0-74.3-74.3-74.3-195.3 0-269.6s195.3-74.3 269.6 0c74.4 74.3 74.4 195.3 0 269.6z"}}),t("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.2-84-83.8-11.8 11.8 84 83.8-84 83.8 11.8 11.8 84-83.8 84.4 84.2 11.8-11.8-84.4-84.2 84.4-84.2z"}})])])])],1)])},d=[],c=t("2455");function h(n){t("1222")}var u=!1,f=h,p="data-v-742fd62e",m=null,g=Object(c["a"])(l,s,d,u,f,p,m);e["default"]=g.exports},a988:function(n,e,t){var o=t("1113");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=t("499e").default;i("e05117fc",o,!0,{})},aae3d:function(n,e,t){"use strict";t("c5f6"),t("a481"),t("3b2b");var o={hasClass:function(n,e){return new RegExp("(\\s|^)"+e+"(\\s|$)").test(n.className)},addClass:function(n,e){n&&(n.classList?n.classList.add(e):this.hasClass(n,e)||(n.className+=""+e))},removeClass:function(n,e){n&&(n.classList?n.classList.remove(e):this.hasClass(n,e)&&(n.className=n.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," ").replace(/^\s+|\s+$/g,"")))}},i="vux-modal-open",a="vux-modal-open-for-container",r="#vux_view_box_body",l={methods:{getLayout:function(){return"undefined"!==typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout?"VIEW_BOX":""},addModalClassName:function(){"function"===typeof this.shouldPreventScroll&&this.shouldPreventScroll()||"VIEW_BOX"===this.getLayout()&&(o.addClass(document.body,i),o.addClass(document.querySelector(r),a))},removeModalClassName:function(){"VIEW_BOX"===this.getLayout()&&(o.removeClass(document.body,i),o.removeClass(document.querySelector(r),a))}},beforeDestroy:function(){this.removeModalClassName()},deactivated:function(){this.removeModalClassName()}},s=(Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[l],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(n){return!0}}},computed:{maskStyle:function(){if("undefined"!==typeof this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!==typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(n){this.$emit("update:show",n),this.$emit(n?"on-show":"on-hide"),n?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var n=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(n&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),d=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===n.layout}},[t("transition",{attrs:{name:n.maskTransition}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],staticClass:"weui-mask",style:n.maskStyle,on:{click:n.hide}})]),n._v(" "),t("transition",{attrs:{name:n.dialogTransition}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],class:n.dialogClass,style:n.dialogStyle},[n._t("default")],2)])],1)},c=[],h=t("2455");function u(n){t("a988")}var f=!1,p=u,m=null,g=null,w=Object(h["a"])(s,d,c,f,p,m,g);e["a"]=w.exports},b2c4:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n.app-container[data-v-742fd62e] {\n  padding: 10px;\n}\n.item[data-v-742fd62e] {\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.cover[data-v-742fd62e] {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-bottom: 75%;\n  background: no-repeat center center;\n  background-size: 100%;\n}\n.title[data-v-742fd62e] {\n  margin: 10px 0 ;\n}\n",""])}}]);
//# sourceMappingURL=chunk-c91517de.2b20d44e.js.map