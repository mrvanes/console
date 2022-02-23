"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7551],{53224:function(e,n,t){var i=t(18489),a=t(83738),r=(t(50390),t(70758)),s=t(62449),o=t(62559),c=["onClick","text","disabled","tooltip","icon"],l=(0,s.Z)((function(e){return{root:{padding:"7px",color:function(n){return function(n){var t=n.variant,i=n.color,a=e.palette.primary.main;return"primary"===i&&"contained"===t?a=e.palette.primary.contrastText:"primary"===i&&"outlined"===t?a=e.palette.primary.main:"secondary"===i&&(a=e.palette.secondary.main),a}(n)},borderColor:function(n){return"secondary"===n.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));n.Z=function(e){var n=l(e),t=e.onClick,s=e.text,d=void 0===s?"":s,u=e.disabled,m=void 0!==u&&u,x=e.tooltip,h=e.icon,p=void 0===h?null:h,f=(0,a.Z)(e,c);return(0,o.jsxs)(r.Z,(0,i.Z)((0,i.Z)({classes:n,tooltip:x||d,variant:"outlined",onClick:t,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},f),{},{children:[(0,o.jsx)("span",{children:d})," ",p]}))}},57551:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var i=t(35531),a=t(23430),r=t(18489),s=t(50390),o=t(34424),c=t(86509),l=t(4285),d=t(81378),u=t(25594),m=t(98280),x=t(44149),h=t(72462),p=t(30324),f=t(35721),j=t(38342),Z=t.n(j),g=t(35477),v=t(56805),b=t(28948),y=t(54950),k=t(6369),C=t(49495),S=t(30140),N=t(53224),w=t(44977),P=t(62559),_=(0,l.Z)((function(e){return(0,c.Z)({root:{marginBottom:30,padding:20,color:e.palette.primary.main,border:"#E5E5E5 1px solid",borderRadius:2,"& .min-icon":{height:14,width:14,marginRight:4},"& .MuiTypography-body2":{fontSize:14},"& .MuiCardHeader-content":{wordWrap:"break-word",overflowWrap:"break-word",wordBreak:"break-all",font:"normal normal bold 24px/27px Lato",color:e.palette.primary.main,"& .MuiTypography-root":{fontSize:19,fontWeight:"bold","& .min-icon":{position:"relative",top:4,marginRight:4,height:"24px !important"}}},"& .MuiCardHeader-root":{background:"transparent linear-gradient(0deg, #EEF1F44E 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box"}},checkBoxElement:{width:32,height:32,float:"left",overflow:"hidden","& div":{position:"absolute"}},viewButton:{width:111,color:"white",marginLeft:8,fontSize:12,fontWeight:"normal",boxShadow:"unset",borderRadius:4},manageButton:{borderRadius:4,width:111,color:e.palette.grey[700],textTransform:"unset",fontSize:12,fontWeight:"normal","& .MuiButton-endIcon":{"& .min-icon":{fontSize:18}}},metric:{"& .min-icon":{color:"#000000",width:13,marginRight:5}},metricLabel:{fontSize:14,fontWeight:"bold",color:"#000000"},metricText:{fontSize:24,fontWeight:"bold"},unit:{fontSize:12,fontWeight:"normal"},bucketName:{padding:0,margin:0,fontSize:22},bucketIcon:{"& .min-icon":{height:48,width:48}},bucketInfo:{display:"flex","@media (max-width: 900px)":{flexFlow:"column-reverse"}},bucketStats:{marginTop:15,borderTop:"1px solid rgb(234,234,234, .7)",paddingTop:14},bucketActionButtons:{display:"flex",alignItems:"center",justifyContent:"flex-end","@media (max-width: 900px)":{marginTop:"-33px"}}})}))((function(e){var n=e.classes,t=e.bucket,i=e.onSelect,a=e.selected,r=e.bulkSelect,o=(0,b.ae)("".concat(t.size)||"0"),c=o.split(" ")[0],l=o.split(" ")[1],d=Z()(t,"details.quota.quota","0"),x=(0,b.Am)(d);return(0,P.jsxs)(u.ZP,{container:!0,className:(0,w.Z)(n.root,"bucket-item"),children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsxs)(u.ZP,{container:!0,justifyContent:"space-between",children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,sm:7,children:(0,P.jsxs)(u.ZP,{container:!0,children:[(0,P.jsxs)(u.ZP,{item:!0,xs:12,children:[r&&(0,P.jsx)("div",{className:n.checkBoxElement,onClick:function(e){e.stopPropagation()},children:(0,P.jsx)(y.Z,{checked:a,id:"select-".concat(t.name),label:"",name:"select-".concat(t.name),onChange:function(e){i(e)},value:t.name})}),(0,P.jsx)("h1",{className:n.bucketName,children:t.name})]}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsxs)(u.ZP,{container:!0,className:n.bucketInfo,children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,sm:!0,children:(0,P.jsxs)(g.Z,{variant:"body2",children:["Created: ",t.creation_date]})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,sm:!0,children:(0,P.jsxs)(g.Z,{variant:"body2",children:["Access: ",function(e){var n,t,i,a,r,s;return null===(n=e.rw_access)||void 0===n||!n.read||null!==(t=e.rw_access)&&void 0!==t&&t.write?null!==(i=e.rw_access)&&void 0!==i&&i.read||null===(a=e.rw_access)||void 0===a||!a.write?null!==(r=e.rw_access)&&void 0!==r&&r.read&&null!==(s=e.rw_access)&&void 0!==s&&s.write?"R/W":"":"W":"R"}(t)]})})]})})]})}),(0,P.jsxs)(u.ZP,{item:!0,xs:12,sm:5,className:n.bucketActionButtons,children:[(0,P.jsx)(S.s,{scopes:C.D[C.EI.BUCKET_ADMIN],resource:t.name,children:(0,P.jsx)(k.rU,{to:"/buckets/".concat(t.name,"/admin"),style:{textDecoration:"none"},children:(0,P.jsx)(N.Z,{tooltip:"Manage",onClick:function(){},text:"Manage",icon:(0,P.jsx)(m.ew,{}),color:"primary",variant:"outlined"})})}),(0,P.jsx)(k.rU,{to:"/buckets/".concat(t.name,"/browse"),style:{textDecoration:"none"},children:(0,P.jsx)(N.Z,{tooltip:"Browse",onClick:function(){},text:"Browse",icon:(0,P.jsx)(m.LZ,{}),color:"primary",variant:"contained"})}),(0,P.jsx)(v.Z,{display:{xs:"none",sm:"block"},children:(0,P.jsx)("div",{style:{marginBottom:10}})})]})]})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:n.bucketStats,children:(0,P.jsxs)(u.ZP,{container:!0,justifyContent:"flex-start",spacing:4,children:[(0,P.jsx)(u.ZP,{item:!0,className:n.bucketIcon,children:(0,P.jsx)(m.wN,{})}),(0,P.jsxs)(u.ZP,{item:!0,textAlign:"left",className:n.metric,children:[(0,P.jsx)(m.rH,{}),(0,P.jsx)("span",{className:n.metricLabel,children:"Usage"}),(0,P.jsxs)("div",{className:n.metricText,children:[c,(0,P.jsx)("span",{className:n.unit,children:l}),"0"!==d&&(0,P.jsxs)(s.Fragment,{children:[" ","/ ",x.total,(0,P.jsx)("span",{className:n.unit,children:x.unit})]})]})]}),(0,P.jsxs)(u.ZP,{item:!0,textAlign:"left",className:n.metric,children:[(0,P.jsx)(m.xp,{}),(0,P.jsx)("span",{className:n.metricLabel,children:"Objects"}),(0,P.jsx)("div",{className:n.metricText,children:t.objects?(0,b.CE)(t.objects):0})]})]})})]})})),R=t(94187),F=t(19538),T=t(99528),I=t(66964),B=t(76352),E=t(50280),M=t(76295),L=t(92440),A=t(67754),z=(0,o.$j)(null,{setModalErrorSnackMessage:x.zb}),D=(0,l.Z)((function(e){return(0,c.Z)((0,r.Z)((0,r.Z)({remoteBucketList:{display:"grid",gridTemplateColumns:"auto auto 45px",alignItems:"center",justifyContent:"stretch"},errorIcon:{color:"#C72C48"},successIcon:{color:"#42C91A"},hide:{opacity:0,transitionDuration:"0.3s"}},h.oO),h.AK))}))(z((function(e){var n=e.open,t=e.closeModalAndRefresh,r=e.classes,o=e.buckets,c=e.setModalErrorSnackMessage,l=(0,s.useState)([]),d=(0,a.Z)(l,2),m=d[0],x=d[1],h=(0,s.useState)(!1),f=(0,a.Z)(h,2),j=f[0],g=f[1],v=(0,s.useState)(!1),y=(0,a.Z)(v,2),k=y[0],C=y[1],S=(0,s.useState)(""),N=(0,a.Z)(S,2),w=N[0],_=N[1],z=(0,s.useState)(""),D=(0,a.Z)(z,2),K=D[0],U=D[1],W=(0,s.useState)(""),O=(0,a.Z)(W,2),q=O[0],G=O[1],H=(0,s.useState)(""),V=(0,a.Z)(H,2),Q=V[0],$=V[1],Y=(0,s.useState)(!0),J=(0,a.Z)(Y,2),X=J[0],ee=J[1],ne=(0,s.useState)("async"),te=(0,a.Z)(ne,2),ie=te[0],ae=te[1],re=(0,s.useState)("100"),se=(0,a.Z)(re,2),oe=se[0],ce=se[1],le=(0,s.useState)("Gi"),de=(0,a.Z)(le,2),ue=de[0],me=de[1],xe=(0,s.useState)("60"),he=(0,a.Z)(xe,2),pe=he[0],fe=he[1],je=(0,s.useState)([]),Ze=(0,a.Z)(je,2),ge=Ze[0],ve=Ze[1],be=(0,s.useState)([]),ye=(0,a.Z)(be,2),ke=ye[0],Ce=ye[1],Se=(0,s.useState)([]),Ne=(0,a.Z)(Se,2),we=Ne[0],Pe=Ne[1],_e=ke.map((function(e){return{label:e,value:e}}));(0,s.useEffect)((function(){if(0===ge.length){var e=[],n=[];o.forEach((function(t){e.push(t),n.push("")})),ve(n),x(e)}}),[o,ge.length]);var Re=function(e){var n=e.errString;switch(n){case"":return(0,P.jsx)("div",{className:r.successIcon,children:(0,P.jsx)(T.Z,{})});case"n/a":return null;default:if(n)return(0,P.jsx)("div",{className:r.errorIcon,children:(0,P.jsx)(R.Z,{title:n,placement:"top-start",children:(0,P.jsx)(F.Z,{})})})}return null},Fe=function(e,n){var t=(0,i.Z)(ge);t[e]=n,ve(t)},Te=function(e){var n=(0,i.Z)(m),t=(0,i.Z)(ge);e.forEach((function(e){var i=Z()(e,"errorString","");if(!i||""===i){var a=n.indexOf(e.originBucket);n.splice(a,1),t.splice(a,1)}})),x(n),ve(t)};return(0,P.jsx)(B.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Set Multiple Bucket Replication",children:(0,P.jsx)(M.Z,{loadingStep:j||k,wizardSteps:[{label:"Remote Configuration",componentRender:(0,P.jsxs)(s.Fragment,{children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(E.Z,{label:"Local Buckets to replicate",content:m.join(", ")})}),(0,P.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,P.jsx)("span",{className:r.descriptionText,children:"Please avoid the use of root credentials for this feature"}),(0,P.jsx)("br",{}),(0,P.jsx)("br",{}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(I.Z,{id:"accessKey",name:"accessKey",onChange:function(e){_(e.target.value)},label:"Access Key",value:w})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(I.Z,{id:"secretKey",name:"secretKey",onChange:function(e){U(e.target.value)},label:"Secret Key",value:K})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(I.Z,{id:"targetURL",name:"targetURL",onChange:function(e){G(e.target.value)},placeholder:"play.min.io:9000",label:"Target URL",value:q})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(L.Z,{checked:X,id:"useTLS",name:"useTLS",label:"Use TLS",onChange:function(e){ee(e.target.checked)},value:"yes"})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(I.Z,{id:"region",name:"region",onChange:function(e){$(e.target.value)},label:"Region",value:Q})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(A.Z,{id:"replication_mode",name:"replication_mode",onChange:function(e){ae(e.target.value)},label:"Replication Mode",value:ie,options:[{label:"Asynchronous",value:"async"},{label:"Synchronous",value:"sync"}]})}),"async"===ie&&(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsxs)("div",{className:r.multiContainer,children:[(0,P.jsx)("div",{children:(0,P.jsx)(I.Z,{type:"number",id:"bandwidth_scalar",name:"bandwidth_scalar",onChange:function(e){ce(e.target.value)},label:"Bandwidth",value:oe,min:"0"})}),(0,P.jsx)("div",{className:r.sizeFactorContainer,children:(0,P.jsx)(A.Z,{label:"Unit",id:"bandwidth_unit",name:"bandwidth_unit",value:ue,onChange:function(e){me(e.target.value)},options:(0,b.QU)()})})]})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(I.Z,{id:"healthCheck",name:"healthCheck",onChange:function(e){fe(e.target.value)},label:"Health Check Duration",value:pe})})]}),buttons:[{type:"custom",label:"Next",enabled:!k,action:function(e){var n={accessKey:w,secretKey:K,targetURL:q,useTLS:X};C(!0),p.Z.invoke("POST","/api/v1/list-external-buckets",n).then((function(n){var t=Z()(n,"buckets",[]);if(t&&t.length>0){var i=t.map((function(e){return e.name}));Ce(i)}e("++"),C(!1)})).catch((function(e){C(!1),c(e)}))}}]},{label:"Bucket Assignments",componentRender:(0,P.jsxs)(s.Fragment,{children:[(0,P.jsx)("h3",{children:"Remote Bucket Assignments"}),(0,P.jsx)("span",{className:r.descriptionText,children:"Please select / type the desired remote bucket were you want the local data to be replicated."}),(0,P.jsx)("div",{className:r.remoteBucketList,children:m.map((function(e,n){var t,i=function(e){if(we.length>0){var n=we.find((function(n){return n.originBucket===e}));if(n)return Z()(n,"errorString","")||""}return"n/a"}(e);return(0,P.jsxs)(s.Fragment,{children:[(0,P.jsx)("div",{className:""===i?r.hide:"",children:e}),(0,P.jsx)("div",{className:""===i?r.hide:"",children:(t=n,ke.length>0?(0,P.jsx)(s.Fragment,{children:(0,P.jsx)(A.Z,{label:"",id:"assign-bucket-".concat(t),name:"assign-bucket-".concat(t),value:ge[t],onChange:function(e){Fe(t,e.target.value)},options:_e,disabled:j})}):(0,P.jsx)(s.Fragment,{children:(0,P.jsx)(I.Z,{id:"assign-bucket-".concat(t),name:"assign-bucket-".concat(t),label:"",onChange:function(e){Fe(t,e.target.value)},value:ge[t],disabled:j})}))}),(0,P.jsx)("div",{className:""===i?r.hide:"",children:we.length>0&&(0,P.jsx)(Re,{errString:i})})]},"buckets-assignation-".concat(n.toString(),"-").concat(e))}))})]}),buttons:[{type:"back",label:"Back",enabled:!0},{type:"next",label:"Create",enabled:!j,action:function(){g(!0);var e=m.map((function(e,n){return{originBucket:e,destinationBucket:ge[n]}})),n="".concat(X?"https://":"http://").concat(q),i=parseInt(pe),a={accessKey:w,secretKey:K,targetURL:n,region:Q,bucketsRelation:e,syncMode:ie,bandwidth:"async"===ie?parseInt((0,b.Pw)(oe,ue,!0)):0,healthCheckPeriod:i};p.Z.invoke("POST","/api/v1/buckets-replication",a).then((function(e){g(!1);var n=e.replicationState;Pe(n),0===n.filter((function(e){return e.errorString&&""!==e.errorString})).length?t(!0):setTimeout((function(){Te(n)}),500)})).catch((function(e){g(!1),c(e)}))}}]}],forModal:!0})})}))),K=t(8235),U=t(18221),W=t(11835),O=t(71208),q=t(74524),G=t(25534),H=t(23165),V=t(18572),Q=t(27207),$=t(65703),Y=(0,o.$j)(null,{setModalErrorSnackMessage:x.zb}),J=(0,l.Z)((function(e){return(0,c.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({resultGrid:{display:"grid",gridTemplateColumns:"45px auto",alignItems:"center",justifyContent:"stretch"},errorIcon:{paddingTop:5,color:"#C72C48"},successIcon:{paddingTop:5,color:"#42C91A"},hide:{opacity:0,transitionDuration:"0.3s"}},h.bK),h.ID),h.DF),h.QV))}))(Y((function(e){var n=e.open,t=e.closeModalAndRefresh,i=e.classes,o=e.buckets,c=e.setModalErrorSnackMessage,l=(0,s.useState)(!1),d=(0,a.Z)(l,2),m=d[0],x=d[1],h=(0,s.useState)(!0),f=(0,a.Z)(h,2),j=f[0],g=f[1],v=(0,s.useState)([]),b=(0,a.Z)(v,2),y=b[0],k=b[1],C=(0,s.useState)(""),S=(0,a.Z)(C,2),N=S[0],w=S[1],_=(0,s.useState)(""),z=(0,a.Z)(_,2),D=z[0],K=z[1],U=(0,s.useState)(""),W=(0,a.Z)(U,2),O=W[0],q=W[1],G=(0,s.useState)(""),H=(0,a.Z)(G,2),V=H[0],Y=H[1],J=(0,s.useState)(!1),X=(0,a.Z)(J,2),ee=X[0],ne=X[1],te=(0,s.useState)("0"),ie=(0,a.Z)(te,2),ae=ie[0],re=ie[1],se=(0,s.useState)("0"),oe=(0,a.Z)(se,2),ce=oe[0],le=oe[1],de=(0,s.useState)("expiry"),ue=(0,a.Z)(de,2),me=ue[0],xe=ue[1],he=(0,s.useState)("0"),pe=(0,a.Z)(he,2),fe=pe[0],je=pe[1],Ze=(0,s.useState)("0"),ge=(0,a.Z)(Ze,2),ve=ge[0],be=ge[1],ye=(0,s.useState)(!1),ke=(0,a.Z)(ye,2),Ce=ke[0],Se=ke[1],Ne=(0,s.useState)(null),we=(0,a.Z)(Ne,2),Pe=we[0],_e=we[1];(0,s.useEffect)((function(){j&&p.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){var n=Z()(e,"items",[]);if(null!==n&&n.length>=1){var t=n.map((function(e){var n=e.type,t=Z()(e,"".concat(n,".name"),"");return{label:t,value:t}}));k(t),t.length>0&&q(t[0].value)}g(!1)})).catch((function(e){g(!1),c(e)}))}),[j,c]),(0,s.useEffect)((function(){var e=!0;"expiry"!==me&&""===O&&(e=!1),Se(e)}),[me,fe,ve,O]);var Re=function(e){var n=e.errString;switch(n){case"":return(0,P.jsx)("div",{className:i.successIcon,children:(0,P.jsx)(T.Z,{})});case"n/a":return null;default:if(n)return(0,P.jsx)("div",{className:i.errorIcon,children:(0,P.jsx)(R.Z,{title:n,placement:"top-start",children:(0,P.jsx)(F.Z,{})})})}return null};return(0,P.jsx)(B.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Set Lifecycle to multiple buckets",children:(0,P.jsx)(M.Z,{loadingStep:m||j,wizardSteps:[{label:"Lifecycle Configuration",componentRender:(0,P.jsxs)(s.Fragment,{children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(E.Z,{label:"Local Buckets to replicate",content:o.join(", ")})}),(0,P.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,P.jsx)(u.ZP,{container:!0,children:(0,P.jsxs)(u.ZP,{item:!0,xs:12,className:i.formScrollable,children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,P.jsxs)("fieldset",{className:i.fieldGroup,children:[(0,P.jsx)("legend",{className:i.descriptionText,children:"Lifecycle Configuration"}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(Q.Z,{currentSelection:me,id:"quota_type",name:"quota_type",label:"ILM Rule",onChange:function(e){xe(e.target.value)},selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}]})}),"expiry"===me?(0,P.jsxs)(s.Fragment,{children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,P.jsx)(I.Z,{type:"number",id:"expiry_days",name:"expiry_days",onChange:function(e){je(e.target.value)},label:"Expiry Days",value:fe,min:"0"})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,P.jsx)(I.Z,{type:"number",id:"noncurrentversion_expiration_days",name:"noncurrentversion_expiration_days",onChange:function(e){re(e.target.value)},label:"Non-current Expiration Days",value:ae,min:"0"})})]}):(0,P.jsxs)(s.Fragment,{children:[(0,P.jsx)(u.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,P.jsx)(I.Z,{type:"number",id:"transition_days",name:"transition_days",onChange:function(e){be(e.target.value)},label:"Transition Days",value:ve,min:"0"})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,P.jsx)(I.Z,{type:"number",id:"noncurrentversion_transition_days",name:"noncurrentversion_transition_days",onChange:function(e){le(e.target.value)},label:"Non-current Transition Days",value:ce,min:"0"})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,P.jsx)(I.Z,{id:"noncurrentversion_t_SC",name:"noncurrentversion_t_SC",onChange:function(e){Y(e.target.value)},placeholder:"Set Non-current Version Transition Storage Class",label:"Non-current Version Transition Storage Class",value:V})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,P.jsx)(A.Z,{label:"Storage Class",id:"storage_class",name:"storage_class",value:O,onChange:function(e){q(e.target.value)},options:y})})]})]})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:i.formFieldRow,children:(0,P.jsxs)("fieldset",{className:i.fieldGroup,children:[(0,P.jsx)("legend",{className:i.descriptionText,children:"File Configuration"}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(I.Z,{id:"prefix",name:"prefix",onChange:function(e){w(e.target.value)},label:"Prefix",value:N})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)($.Z,{name:"tags",label:"Tags",elements:D,onChange:function(e){K(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,children:(0,P.jsx)(L.Z,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:ee,onChange:function(e){ne(e.target.checked)},label:"Expired Object Delete Marker"})})]})})]})})]}),buttons:[{type:"custom",label:"Create Rules",enabled:!j&&!m&&Ce,action:function(e){var n={};if("expiry"===me){var t={expiry_days:parseInt(fe)};n=(0,r.Z)((0,r.Z)({},t),{},{noncurrentversion_expiration_days:parseInt(ae)})}else{var i={transition_days:parseInt(ve)};n=(0,r.Z)((0,r.Z)({},i),{},{noncurrentversion_transition_days:parseInt(ce),noncurrentversion_transition_storage_class:V,storage_class:O})}var a=(0,r.Z)({buckets:o,type:me,prefix:N,tags:D,expired_object_delete_marker:ee},n);p.Z.invoke("POST","/api/v1/buckets/multi-lifecycle",a).then((function(n){x(!1),_e(n),e("++")})).catch((function(e){x(!1),c(e)}))}}]},{label:"Results",componentRender:(0,P.jsxs)(s.Fragment,{children:[(0,P.jsx)("h3",{children:"Multi Bucket lifecycle Assignments Results"}),(0,P.jsx)(u.ZP,{container:!0,children:(0,P.jsxs)(u.ZP,{item:!0,xs:12,className:i.formScrollable,children:[(0,P.jsx)("h4",{children:"Buckets Results"}),null===Pe||void 0===Pe?void 0:Pe.results.map((function(e){return(0,P.jsxs)("div",{className:i.resultGrid,children:[Re({errString:e.error||""}),(0,P.jsx)("span",{children:e.bucketName})]})}))]})})]}),buttons:[{type:"custom",label:"Done",enabled:!m,action:function(){return t(!0)}}]}],forModal:!0})})}))),X=t(61317),ee=(0,o.$j)(null,{setErrorSnackMessage:x.Ih})((0,l.Z)((function(e){return(0,c.Z)((0,r.Z)({bulkSelect:{marginLeft:8,"&:hover":{backgroundColor:e.palette.primary.main},"&.MuiButton-contained":{backgroundColor:e.palette.primary.main}},addBucket:{marginLeft:8},bucketList:{marginTop:25,height:"calc(100vh - 210px)"},searchField:(0,r.Z)((0,r.Z)({},h.qg.searchField),{},{minWidth:380,"@media (max-width: 900px)":{minWidth:220}})},(0,h.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.history,r=e.setErrorSnackMessage,o=(0,s.useState)([]),c=(0,a.Z)(o,2),l=c[0],x=c[1],h=(0,s.useState)(!0),j=(0,a.Z)(h,2),Z=j[0],g=j[1],v=(0,s.useState)(""),b=(0,a.Z)(v,2),y=b[0],k=b[1],w=(0,s.useState)([]),R=(0,a.Z)(w,2),F=R[0],T=R[1],I=(0,s.useState)(!1),B=(0,a.Z)(I,2),E=B[0],M=B[1],L=(0,s.useState)(!1),A=(0,a.Z)(L,2),z=A[0],Q=A[1],$=(0,s.useState)(!1),Y=(0,a.Z)($,2),ee=Y[0],ne=Y[1];(0,s.useEffect)((function(){if(Z){g(!0),p.Z.invoke("GET","/api/v1/buckets").then((function(e){g(!1),x(e.buckets||[])})).catch((function(e){g(!1),r(e)}))}}),[Z,r]);var te=l.filter((function(e){return""===y||e.name.indexOf(y)>=0})),ie=function(e){var n=e.target,t=n.value,a=n.checked,r=(0,i.Z)(F);return a?r.push(t):r=r.filter((function(e){return e!==t})),T(r),r},ae=(0,X.Z)("*",[C.Ft.S3_CREATE_BUCKET]);return(0,P.jsxs)(s.Fragment,{children:[E&&(0,P.jsx)(D,{open:E,buckets:F,closeModalAndRefresh:function(e){M(!1),e&&T([])}}),z&&(0,P.jsx)(J,{buckets:F,closeModalAndRefresh:function(e){Q(!1),e&&T([])},open:z}),(0,P.jsx)(f.Z,{label:"Buckets"}),(0,P.jsxs)(G.Z,{children:[(0,P.jsxs)(u.ZP,{item:!0,xs:12,className:n.actionsTray,display:"flex",children:[(0,P.jsx)(H.Z,{onChange:k,placeholder:"Search Buckets",overrideClass:n.searchField,value:y}),(0,P.jsxs)(u.ZP,{item:!0,xs:12,display:"flex",alignItems:"center",justifyContent:"flex-end",children:[(0,P.jsx)(N.Z,{tooltip:ee?"Un Select All":"Select Multiple",onClick:function(){ne(!ee)},text:"",icon:(0,P.jsx)(q.Z,{}),color:"primary",variant:ee?"contained":"outlined"}),(0,P.jsx)(N.Z,{tooltip:"Set Lifecycle",onClick:function(){Q(!0)},text:"",icon:(0,P.jsx)(m.QI,{}),disabled:0===F.length,color:"primary",variant:"outlined"}),(0,P.jsx)(N.Z,{tooltip:"Set Replication",onClick:function(){M(!0)},text:"",icon:(0,P.jsx)(O.Z,{}),disabled:0===F.length,color:"primary",variant:"outlined"}),(0,P.jsx)(N.Z,{tooltip:"Refresh",onClick:function(){g(!0)},text:"",icon:(0,P.jsx)(U.default,{}),color:"primary",variant:"outlined"}),(0,P.jsx)(N.Z,{tooltip:"Create Bucket",onClick:function(){t.push("/add-bucket")},text:"Create Bucket",icon:(0,P.jsx)(m.dt,{}),color:"primary",variant:"contained",disabled:!ae})]})]}),Z&&(0,P.jsx)(d.Z,{}),!Z&&(0,P.jsxs)(u.ZP,{item:!0,xs:12,className:n.bucketList,children:[0!==te.length&&(0,P.jsx)(V.Z,{rowRenderFunction:function(e){var n=te[e]||null;return n?(0,P.jsx)(_,{bucket:n,onSelect:ie,selected:F.includes(n.name),bulkSelect:ee}):null},totalItems:te.length}),0===te.length&&""!==y&&(0,P.jsx)(u.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,P.jsx)(u.ZP,{item:!0,xs:8,children:(0,P.jsx)(K.Z,{iconComponent:(0,P.jsx)(m.wN,{}),title:"No Results",help:(0,P.jsx)(s.Fragment,{children:"No buckets match the filtering condition"})})})}),0===te.length&&""===y&&(0,P.jsx)(u.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,P.jsx)(u.ZP,{item:!0,xs:8,children:(0,P.jsx)(K.Z,{iconComponent:(0,P.jsx)(m.wN,{}),title:"Buckets",help:(0,P.jsxs)(s.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,P.jsxs)(S.s,{scopes:[C.Ft.S3_CREATE_BUCKET],resource:C.C3,children:[(0,P.jsx)("br",{}),(0,P.jsx)("br",{}),"To get started,\xa0",(0,P.jsx)(W.Z,{onClick:function(){t.push("/add-bucket")},children:"Create a Bucket."})]})]})})})})]})]})]})})))},11835:function(e,n,t){var i=t(18489),a=t(83738),r=(t(50390),t(86509)),s=t(4285),o=t(62559),c=["classes","children"];n.Z=(0,s.Z)((function(e){return(0,r.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var n=e.classes,t=e.children,r=(0,a.Z)(e,c);return(0,o.jsx)("button",(0,i.Z)((0,i.Z)({},r),{},{className:n.root,children:t}))}))},54950:function(e,n,t){var i=t(18489),a=t(50390),r=t(25594),s=t(74268),o=t(36554),c=t(94187),l=t(86509),d=t(4285),u=t(72462),m=t(97538),x=t(62559);n.Z=(0,d.Z)((function(e){return(0,l.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},u.YI),u.Hr),u.lM),{},{fieldContainer:(0,i.Z)((0,i.Z)({},u.YI.fieldContainer),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"15px 0",marginBottom:0,flexBasis:"initial"})}))}))((function(e){var n=e.label,t=e.onChange,i=e.value,l=e.id,d=e.name,u=e.checked,h=void 0!==u&&u,p=e.disabled,f=void 0!==p&&p,j=e.tooltip,Z=void 0===j?"":j,g=e.classes;return(0,x.jsx)(a.Fragment,{children:(0,x.jsxs)(r.ZP,{item:!0,xs:12,className:g.fieldContainer,children:[(0,x.jsx)("div",{children:(0,x.jsx)(s.Z,{name:d,id:l,value:i,color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:h,onChange:t,checkedIcon:(0,x.jsx)("span",{className:g.checkedIcon}),icon:(0,x.jsx)("span",{className:g.unCheckedIcon}),disabled:f})}),""!==n&&(0,x.jsxs)(o.Z,{htmlFor:l,className:g.noMinWidthLabel,children:[(0,x.jsx)("span",{children:n}),""!==Z&&(0,x.jsx)("div",{className:g.tooltipContainer,children:(0,x.jsx)(c.Z,{title:Z,placement:"top-start",children:(0,x.jsx)("div",{className:g.tooltip,children:(0,x.jsx)(m.Z,{})})})})]})]})})}))},50280:function(e,n,t){var i=t(18489),a=t(50390),r=t(25594),s=t(86509),o=t(4285),c=t(72462),l=t(62559);n.Z=(0,o.Z)((function(e){return(0,s.Z)((0,i.Z)({},c.xx))}))((function(e){var n=e.classes,t=e.label,i=void 0===t?"":t,s=e.content,o=e.multiLine,c=void 0!==o&&o;return(0,l.jsx)(a.Fragment,{children:(0,l.jsxs)(r.ZP,{className:n.prefinedContainer,children:[""!==i&&(0,l.jsx)(r.ZP,{item:!0,xs:12,className:n.predefinedTitle,children:i}),(0,l.jsx)(r.ZP,{item:!0,xs:12,className:n.predefinedList,children:(0,l.jsx)(r.ZP,{item:!0,xs:12,className:c?n.innerContentMultiline:n.innerContent,children:s})})]})})}))},23165:function(e,n,t){var i=t(36222),a=t(18489),r=(t(50390),t(65771)),s=t(13336),o=t(12066),c=t(4285),l=t(86509),d=t(72462),u=t(62559);n.Z=(0,c.Z)((function(e){return(0,l.Z)({searchField:(0,a.Z)({},d.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,a=e.classes,c=e.onChange,l=e.adornmentPosition,d=void 0===l?"end":l,m=e.overrideClass,x=e.value,h=(0,i.Z)({disableUnderline:!0},"".concat(d,"Adornment"),(0,u.jsx)(r.Z,{position:d,className:a.adornment,children:(0,u.jsx)(s.Z,{})}));return(0,u.jsx)(o.Z,{placeholder:t,className:m||a.searchField,id:"search-resource",label:"",InputProps:h,onChange:function(e){c(e.target.value)},variant:"standard",value:x})}))},18572:function(e,n,t){var i=t(50390),a=t(65742),r=t(10106),s=t(33690),o=t(62559),c={};n.Z=function(e){var n=e.rowRenderFunction,t=e.totalItems,l=e.defaultHeight,d=function(e){var t=e.index,i=e.style;return(0,o.jsx)("div",{style:i,children:n(t)})};return(0,o.jsx)(i.Fragment,{children:(0,o.jsx)(r.Z,{isItemLoaded:function(e){return!!c[e]},loadMoreItems:function(e,n){for(var t=e;t<=n;t++)c[t]=1;for(var i=e;i<=n;i++)c[i]=2},itemCount:t,children:function(e){var n=e.onItemsRendered,i=e.ref;return(0,o.jsx)(s.qj,{children:function(e){var r=e.width,s=e.height;return(0,o.jsx)(a.t7,{itemSize:l||220,height:s,itemCount:t,width:r,ref:i,onItemsRendered:n,children:d})}})}})})}}}]);
//# sourceMappingURL=7551.8d7574b9.chunk.js.map