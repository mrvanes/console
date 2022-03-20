"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1140],{39080:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var i=n(18489),r=n(50390),a=n(38342),s=n.n(a),l=n(86509),o=n(4285),c=n(51002),d=n(25594),u=n(58217),m=n(65771),p=n(70758),h=n(33034),y=n.n(h),x=n(14549),f=n(72462),g=n(62559),j=(0,o.Z)((function(e){return(0,l.Z)({container:{display:"flex",flexFlow:"column",padding:"20px 0 8px 0"},inputWithCopy:{"& .MuiInputBase-root ":{width:"100%",background:"#FBFAFA","& .MuiInputBase-input":{height:".8rem"},"& .MuiInputAdornment-positionEnd":{marginRight:".5rem","& .MuiButtonBase-root":{height:"2rem"}}},"& .MuiButtonBase-root .min-icon":{width:".8rem",height:".8rem"}},inputLabel:(0,i.Z)((0,i.Z)({},f.YI.inputLabel),{},{fontSize:".8rem"})})}))((function(e){var t=e.label,n=void 0===t?"":t,i=e.value,r=void 0===i?"":i,a=e.classes,s=void 0===a?{}:a;return(0,g.jsxs)("div",{className:s.container,children:[(0,g.jsxs)("div",{className:s.inputLabel,children:[n,":"]}),(0,g.jsx)("div",{className:s.inputWithCopy,children:(0,g.jsx)(u.Z,{value:r,readOnly:!0,endAdornment:(0,g.jsx)(m.Z,{position:"end",children:(0,g.jsx)(y(),{text:r,children:(0,g.jsx)(p.Z,{"aria-label":"copy",tooltip:"Copy",onClick:function(){},onMouseDown:function(){},edge:"end",children:(0,g.jsx)(x.TI,{})})})})})})]})})),v=n(47424),w=n(53224),b=function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},K=(0,o.Z)((function(e){return(0,l.Z)({warningBlock:{color:"red",fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}},credentialTitle:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},buttonContainer:{textAlign:"right",marginTop:"1rem"},credentialsPanel:{overflowY:"auto",maxHeight:350},promptTitle:{display:"flex",alignItems:"center"},buttonSpacer:{marginRight:".9rem"},promptIcon:{marginRight:".1rem",display:"flex",alignItems:"center",height:"2rem",width:"2rem"}})}))((function(e){var t=e.classes,n=e.newServiceAccount,a=e.open,l=e.closeModal,o=e.entity;if(!n)return null;var u=s()(n,"console",null),m=s()(n,"idp",!1);return(0,g.jsx)(c.Z,{modalOpen:a,onClose:function(){l()},title:(0,g.jsx)("div",{className:t.promptTitle,children:(0,g.jsxs)("div",{children:["New ",o," Created"]})}),titleIcon:(0,g.jsx)(x.tV,{}),children:(0,g.jsxs)(d.ZP,{container:!0,children:[(0,g.jsxs)(d.ZP,{item:!0,xs:12,className:t.formScrollable,children:["A new ",o," has been created with the following details:",!m&&u&&(0,g.jsx)(r.Fragment,{children:(0,g.jsxs)(d.ZP,{item:!0,xs:12,className:t.credentialsPanel,children:[(0,g.jsx)("div",{className:t.credentialTitle,children:"Console Credentials"}),Array.isArray(u)&&u.map((function(e,t){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j,{label:"Access Key",value:e.accessKey}),(0,g.jsx)(j,{label:"Secret Key",value:e.secretKey})]})})),!Array.isArray(u)&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j,{label:"Access Key",value:u.accessKey}),(0,g.jsx)(j,{label:"Secret Key",value:u.secretKey})]})]})}),m?(0,g.jsx)("div",{className:t.warningBlock,children:"Please Login via the configured external identity provider."}):(0,g.jsxs)("div",{className:t.warningBlock,children:[(0,g.jsx)(v.Z,{}),(0,g.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),(0,g.jsx)(d.ZP,{item:!0,xs:12,className:t.buttonContainer,children:!m&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(w.Z,{id:"download-button",tooltip:"Download credentials in a JSON file formatted for import using mc alias import. This will only include the default login credentials.",text:"Download for import",className:t.buttonSpacer,onClick:function(){var e={};u&&(e=Array.isArray(u)?u.map((function(e){return{url:e.url,accessKey:e.accessKey,secretKey:e.secretKey,api:"s3v4",path:"auto"}}))[0]:{url:u.url,accessKey:u.accessKey,secretKey:u.secretKey,api:"s3v4",path:"auto"});b("credentials.json",JSON.stringify((0,i.Z)({},e)))},icon:(0,g.jsx)(x._8,{}),variant:"contained",color:"primary"}),Array.isArray(u)&&u.length>1&&(0,g.jsx)(w.Z,{id:"download-all-button",tooltip:"Download all access credentials to a JSON file. NOTE: This file is not formatted for import using mc alias import. If you plan to import this alias from the file, please use the Download for Import button. ",text:"Download all access credentials",className:t.buttonSpacer,onClick:function(){var e={};u&&(e=u.map((function(e){return{accessKey:e.accessKey,secretKey:e.secretKey}})));b("all_credentials.json",JSON.stringify((0,i.Z)({},e)))},icon:(0,g.jsx)(x._8,{}),variant:"contained",color:"primary"})]})})]})})}))}}]);
//# sourceMappingURL=1140.f3c8431a.chunk.js.map