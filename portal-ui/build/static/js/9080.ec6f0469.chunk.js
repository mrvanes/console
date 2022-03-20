(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9080,1140],{39080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var o=n(18489),r=n(50390),a=n(38342),i=n.n(a),l=n(86509),s=n(4285),c=n(51002),u=n(25594),d=n(58217),p=n(65771),f=n(70758),m=n(33034),y=n.n(m),h=n(14549),g=n(72462),b=n(62559),v=(0,s.Z)((function(e){return(0,l.Z)({container:{display:"flex",flexFlow:"column",padding:"20px 0 8px 0"},inputWithCopy:{"& .MuiInputBase-root ":{width:"100%",background:"#FBFAFA","& .MuiInputBase-input":{height:".8rem"},"& .MuiInputAdornment-positionEnd":{marginRight:".5rem","& .MuiButtonBase-root":{height:"2rem"}}},"& .MuiButtonBase-root .min-icon":{width:".8rem",height:".8rem"}},inputLabel:(0,o.Z)((0,o.Z)({},g.YI.inputLabel),{},{fontSize:".8rem"})})}))((function(e){var t=e.label,n=void 0===t?"":t,o=e.value,r=void 0===o?"":o,a=e.classes,i=void 0===a?{}:a;return(0,b.jsxs)("div",{className:i.container,children:[(0,b.jsxs)("div",{className:i.inputLabel,children:[n,":"]}),(0,b.jsx)("div",{className:i.inputWithCopy,children:(0,b.jsx)(d.Z,{value:r,readOnly:!0,endAdornment:(0,b.jsx)(p.Z,{position:"end",children:(0,b.jsx)(y(),{text:r,children:(0,b.jsx)(f.Z,{"aria-label":"copy",tooltip:"Copy",onClick:function(){},onMouseDown:function(){},edge:"end",children:(0,b.jsx)(h.TI,{})})})})})})]})})),x=n(47424),j=n(53224),w=function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},C=(0,s.Z)((function(e){return(0,l.Z)({warningBlock:{color:"red",fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}},credentialTitle:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},buttonContainer:{textAlign:"right",marginTop:"1rem"},credentialsPanel:{overflowY:"auto",maxHeight:350},promptTitle:{display:"flex",alignItems:"center"},buttonSpacer:{marginRight:".9rem"},promptIcon:{marginRight:".1rem",display:"flex",alignItems:"center",height:"2rem",width:"2rem"}})}))((function(e){var t=e.classes,n=e.newServiceAccount,a=e.open,l=e.closeModal,s=e.entity;if(!n)return null;var d=i()(n,"console",null),p=i()(n,"idp",!1);return(0,b.jsx)(c.Z,{modalOpen:a,onClose:function(){l()},title:(0,b.jsx)("div",{className:t.promptTitle,children:(0,b.jsxs)("div",{children:["New ",s," Created"]})}),titleIcon:(0,b.jsx)(h.tV,{}),children:(0,b.jsxs)(u.ZP,{container:!0,children:[(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.formScrollable,children:["A new ",s," has been created with the following details:",!p&&d&&(0,b.jsx)(r.Fragment,{children:(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:t.credentialsPanel,children:[(0,b.jsx)("div",{className:t.credentialTitle,children:"Console Credentials"}),Array.isArray(d)&&d.map((function(e,t){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v,{label:"Access Key",value:e.accessKey}),(0,b.jsx)(v,{label:"Secret Key",value:e.secretKey})]})})),!Array.isArray(d)&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v,{label:"Access Key",value:d.accessKey}),(0,b.jsx)(v,{label:"Secret Key",value:d.secretKey})]})]})}),p?(0,b.jsx)("div",{className:t.warningBlock,children:"Please Login via the configured external identity provider."}):(0,b.jsxs)("div",{className:t.warningBlock,children:[(0,b.jsx)(x.Z,{}),(0,b.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,b.jsx)(u.ZP,{item:!0,xs:12,className:t.buttonContainer,children:!p&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(j.Z,{id:"download-button",tooltip:"Download credentials in a JSON file formatted for import using mc alias import. This will only include the default login credentials.",text:"Download for import",className:t.buttonSpacer,onClick:function(){var e={};d&&(e=Array.isArray(d)?d.map((function(e){return{url:e.url,accessKey:e.accessKey,secretKey:e.secretKey,api:"s3v4",path:"auto"}}))[0]:{url:d.url,accessKey:d.accessKey,secretKey:d.secretKey,api:"s3v4",path:"auto"});w("credentials.json",JSON.stringify((0,o.Z)({},e)))},icon:(0,b.jsx)(h._8,{}),variant:"contained",color:"primary"}),Array.isArray(d)&&d.length>1&&(0,b.jsx)(j.Z,{id:"download-all-button",tooltip:"Download all access credentials to a JSON file. NOTE: This file is not formatted for import using mc alias import. If you plan to import this alias from the file, please use the Download for Import button. ",text:"Download all access credentials",className:t.buttonSpacer,onClick:function(){var e={};d&&(e=d.map((function(e){return{accessKey:e.accessKey,secretKey:e.secretKey}})));w("all_credentials.json",JSON.stringify((0,o.Z)({},e)))},icon:(0,b.jsx)(h._8,{}),variant:"contained",color:"primary"})]})})]})})}))},51002:function(e,t,n){"use strict";var o=n(23430),r=n(18489),a=n(50390),i=n(34424),l=n(95467),s=n(97771),c=n(84402),u=n(78426),d=n(93085),p=n(86509),f=n(4285),m=n(72462),y=n(44149),h=n(21278),g=n(45980),b=n(62559),v=(0,i.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:y.MK});t.Z=(0,f.Z)((function(e){return(0,p.Z)((0,r.Z)((0,r.Z)({},m.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},m.sN))}))(v((function(e){var t=e.onClose,n=e.modalOpen,i=e.title,p=e.children,f=e.classes,m=e.wideLimit,y=void 0===m||m,v=e.modalSnackMessage,x=e.noContentPadding,j=e.setModalSnackMessage,w=e.titleIcon,C=void 0===w?null:w,O=(0,a.useState)(!1),S=(0,o.Z)(O,2),k=S[0],Z=S[1];(0,a.useEffect)((function(){j("")}),[j]),(0,a.useEffect)((function(){if(v){if(""===v.message)return void Z(!1);"error"!==v.type&&Z(!0)}}),[v]);var D=y?{classes:{paper:f.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},N="";return v&&(N=v.detailedErrorMsg,(""===v.detailedErrorMsg||v.detailedErrorMsg.length<5)&&(N=v.message)),(0,b.jsxs)(c.Z,(0,r.Z)((0,r.Z)({open:n,classes:f},D),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:f.root,children:[(0,b.jsxs)(u.Z,{className:f.title,children:[(0,b.jsxs)("div",{className:f.titleText,children:[C," ",i]}),(0,b.jsx)("div",{className:f.closeContainer,children:(0,b.jsx)(l.Z,{"aria-label":"close",id:"close",className:f.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,b.jsx)(h.Z,{})})})]}),(0,b.jsx)(g.Z,{isModal:!0}),(0,b.jsx)(s.Z,{open:k,className:f.snackBarModal,onClose:function(){Z(!1),j("")},message:N,ContentProps:{className:"".concat(f.snackBar," ").concat(v&&"error"===v.type?f.errorSnackBar:"")},autoHideDuration:v&&"error"===v.type?1e4:5e3}),(0,b.jsx)(d.Z,{className:x?"":f.content,children:p})]}))})))},21278:function(e,t,n){"use strict";var o=n(64119);t.Z=void 0;var r=o(n(66830)),a=n(62559),i=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=i},20409:function(e,t,n){"use strict";var o=n(61498),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,l,s,c,u=!1;t||(t={}),n=t.debug||!1;try{if(i=o(),l=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),c&&document.body.removeChild(c),i()}return u}},12900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=a(n(50390)),r=a(n(20409));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?f(e):t}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n;c(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return y(f(n=d(this,(e=p(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,l=t.children,s=t.options,c=o.default.Children.only(l),u=(0,r.default)(a,s);i&&i(a,u),c&&c.props&&"function"===typeof c.props.onClick&&c.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=s(e,["text","onCopy","options","children"]),r=o.default.Children.only(t);return o.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}],a&&u(n.prototype,a),i&&u(n,i),t}(o.default.PureComponent);t.CopyToClipboard=h,y(h,"defaultProps",{onCopy:void 0,options:void 0})},33034:function(e,t,n){"use strict";var o=n(12900).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},61498:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=9080.ec6f0469.chunk.js.map