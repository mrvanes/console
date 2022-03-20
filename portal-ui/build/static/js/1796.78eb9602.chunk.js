"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1796],{29316:function(e,a,l){l(50390);var t=l(6369),n=l(86509),i=l(4285),s=l(14549),r=l(56805),o=l(62559);a.Z=(0,i.Z)((function(e){return(0,n.Z)({link:{display:"inline-block",alignItems:"center",justifyContent:"center",textDecoration:"none",maxWidth:"40px","&:active":{color:e.palette.primary.light}},icon:{marginRight:"11px",display:"flex",alignItems:"center",justifyContent:"center",height:"35px",width:"35px",borderRadius:"2px","&:hover":{background:"rgba(234,237,238)"},"& svg.min-icon":{width:"18px",height:"12px"}},label:{display:"flex",alignItems:"center",height:"35px",padding:"0 0px 0 5px",fontSize:"18px",fontWeight:600,color:e.palette.primary.light}})}))((function(e){var a=e.to,l=e.label,n=e.classes,i=e.className,u=e.executeOnClick;return(0,o.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(t.rU,{to:a,className:"".concat(n.link," ").concat(i||""),onClick:function(){u&&u()},children:(0,o.jsx)("div",{className:n.icon,children:(0,o.jsx)(s.xC,{})})}),(0,o.jsx)("div",{className:n.label,children:l})]})}))},82461:function(e,a,l){l.d(a,{Z:function(){return S}});var t=l(23430),n=l(18489),i=l(50390),s=l(38342),r=l.n(s),o=l(25594),u=l(36554),c=l(94187),d=l(95467),v=l(46529),p=l(94258),h=l(86509),b=l(4285),m=l(72462),x=l(97538),g=l(82981),f=l(62559),S=(0,b.Z)((function(e){return(0,h.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},m.YI),m.Hr),{},{valueString:{maxWidth:350,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:2},fileInputField:{margin:"13px 0","@media (max-width: 900px)":{flexFlow:"column"}}},m.bV),{},{inputLabel:(0,n.Z)((0,n.Z)({},m.YI.inputLabel),{},{fontWeight:"normal"}),textBoxContainer:(0,n.Z)((0,n.Z)({},m.YI.textBoxContainer),{},{maxWidth:"100%",border:"1px solid #eaeaea",paddingLeft:"15px"})}))}))((function(e){var a=e.label,l=e.classes,n=e.onChange,s=e.id,h=e.name,b=e.disabled,m=void 0!==b&&b,S=e.tooltip,Z=void 0===S?"":S,j=e.required,C=e.error,A=void 0===C?"":C,E=e.accept,y=void 0===E?"":E,w=e.value,N=void 0===w?"":w,T=(0,i.useState)(!1),I=(0,t.Z)(T,2),U=I[0],W=I[1];return(0,f.jsx)(i.Fragment,{children:(0,f.jsxs)(o.ZP,{item:!0,xs:12,className:"".concat(l.fileInputField," ").concat(l.fieldBottom," ").concat(l.fieldContainer," ").concat(""!==A?l.errorInField:""),children:[""!==a&&(0,f.jsxs)(u.Z,{htmlFor:s,className:"".concat(""!==A?l.fieldLabelError:""," ").concat(l.inputLabel),children:[(0,f.jsxs)("span",{children:[a,j?"*":""]}),""!==Z&&(0,f.jsx)("div",{className:l.tooltipContainer,children:(0,f.jsx)(c.Z,{title:Z,placement:"top-start",children:(0,f.jsx)("div",{className:l.tooltip,children:(0,f.jsx)(x.Z,{})})})})]}),U||""===N?(0,f.jsxs)("div",{className:l.textBoxContainer,children:[(0,f.jsx)("input",{type:"file",name:h,onChange:function(e){var a=r()(e,"target.files[0].name","");!function(e,a){var l=e.target.files[0],t=new FileReader;t.readAsDataURL(l),t.onload=function(){var e=t.result;if(e){var l=e.toString().split("base64,");2===l.length&&a(l[1])}}}(e,(function(e){n(e,a)}))},accept:y,required:j,disabled:m,className:l.fileInputField}),""!==N&&(0,f.jsx)(d.Z,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){W(!1)},disableRipple:!1,disableFocusRipple:!1,size:"small",children:(0,f.jsx)(p.Z,{})}),""!==A&&(0,f.jsx)(g.Z,{errorMessage:A})]}):(0,f.jsxs)("div",{className:l.fileReselect,children:[(0,f.jsx)("div",{className:l.valueString,children:N}),(0,f.jsx)(d.Z,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){W(!0)},disableRipple:!1,disableFocusRipple:!1,size:"small",children:(0,f.jsx)(v.Z,{})})]})]})})}))},66964:function(e,a,l){var t=l(18489),n=l(50390),i=l(12066),s=l(25594),r=l(36554),o=l(94187),u=l(95467),c=l(86509),d=l(62449),v=l(4285),p=l(72462),h=l(97538),b=l(44977),m=l(62559),x=(0,d.Z)((function(e){return(0,c.Z)((0,t.Z)({},p.gM))}));function g(e){var a=x();return(0,m.jsx)(i.Z,(0,t.Z)({InputProps:{classes:a}},e))}a.Z=(0,v.Z)((function(e){return(0,c.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},p.YI),p.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,t.Z)((0,t.Z)({},p.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var a=e.label,l=e.onChange,i=e.value,c=e.id,d=e.name,v=e.type,p=void 0===v?"text":v,x=e.autoComplete,f=void 0===x?"off":x,S=e.disabled,Z=void 0!==S&&S,j=e.multiline,C=void 0!==j&&j,A=e.tooltip,E=void 0===A?"":A,y=e.index,w=void 0===y?0:y,N=e.error,T=void 0===N?"":N,I=e.required,U=void 0!==I&&I,W=e.placeholder,k=void 0===W?"":W,O=e.min,P=e.max,R=e.overlayId,L=e.overlayIcon,F=void 0===L?null:L,M=e.overlayObject,z=void 0===M?null:M,B=e.extraInputProps,H=void 0===B?{}:B,K=e.overlayAction,V=e.noLabelMinWidth,q=void 0!==V&&V,G=e.pattern,J=void 0===G?"":G,Y=e.autoFocus,D=void 0!==Y&&Y,X=e.classes,$=e.className,_=void 0===$?"":$,Q=e.onKeyPress,ee=(0,t.Z)({"data-index":w},H);return"number"===p&&O&&(ee.min=O),"number"===p&&P&&(ee.max=P),""!==J&&(ee.pattern=J),(0,m.jsx)(n.Fragment,{children:(0,m.jsxs)(s.ZP,{container:!0,className:(0,b.Z)(""!==_?_:"",""!==T?X.errorInField:X.inputBoxContainer),children:[""!==a&&(0,m.jsxs)(r.Z,{htmlFor:c,className:q?X.noMinWidthLabel:X.inputLabel,children:[(0,m.jsxs)("span",{children:[a,U?"*":""]}),""!==E&&(0,m.jsx)("div",{className:X.tooltipContainer,children:(0,m.jsx)(o.Z,{title:E,placement:"top-start",children:(0,m.jsx)("div",{className:X.tooltip,children:(0,m.jsx)(h.Z,{})})})})]}),(0,m.jsxs)("div",{className:X.textBoxContainer,children:[(0,m.jsx)(g,{id:c,name:d,fullWidth:!0,value:i,autoFocus:D,disabled:Z,onChange:l,type:p,multiline:C,autoComplete:f,inputProps:ee,error:""!==T,helperText:T,placeholder:k,className:X.inputRebase,onKeyPress:Q}),F&&(0,m.jsx)("div",{className:"".concat(X.overlayAction," ").concat(""!==a?"withLabel":""),children:(0,m.jsx)(u.Z,{onClick:K?function(){K()}:function(){return null},id:R,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:F})}),z&&(0,m.jsx)("div",{className:"".concat(X.overlayAction," ").concat(""!==a?"withLabel":""),children:z})]})]})})}))},25534:function(e,a,l){var t=l(18489),n=(l(50390),l(25594)),i=l(86509),s=l(4285),r=l(72462),o=l(62559);a.Z=(0,s.Z)((function(e){return(0,i.Z)((0,t.Z)({},r.Bw))}))((function(e){var a=e.classes,l=e.className,t=void 0===l?"":l,i=e.children;return(0,o.jsx)("div",{className:a.contentSpacer,children:(0,o.jsx)(n.ZP,{container:!0,children:(0,o.jsx)(n.ZP,{item:!0,xs:12,className:t,children:i})})})}))},35721:function(e,a,l){var t=l(50390),n=l(34424),i=l(25594),s=l(86509),r=l(4285),o=l(35477),u=l(95467),c=l(26805),d=l(44078),v=l(5265),p=l(14549),h=l(62559),b={toggleList:v.kQ},m=(0,n.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage,features:e.console.session.features}}),b);a.Z=m((0,r.Z)((function(e){return(0,s.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:21,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var a=e.classes,l=e.label,n=e.actions,s=e.sidebarOpen,r=e.operatorMode,v=e.managerObjects,b=e.toggleList,m=e.middleComponent;return e.features.includes("hide-menu")?(0,h.jsx)(t.Fragment,{}):(0,h.jsxs)(i.ZP,{container:!0,className:"".concat(a.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,h.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:m?3:6,className:a.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!s&&(0,h.jsx)("div",{className:a.logo,children:r?(0,h.jsx)(c.Z,{}):(0,h.jsx)(d.Z,{})}),(0,h.jsx)(o.Z,{variant:"h4",className:a.labelStyle,children:l})]}),m&&(0,h.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:6,className:a.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:m}),(0,h.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:m?3:6,className:a.rightMenu,children:[n&&n,v&&v.length>0&&(0,h.jsx)(u.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){b()},id:"object-manager-toggle",size:"large",children:(0,h.jsx)(p.gx,{})})]})]})})))},41796:function(e,a,l){l.r(a),l.d(a,{default:function(){return B}});var t=l(23430),n=l(18489),i=l(50390),s=l(34424),r=l(38342),o=l.n(r),u=l(25594),c=l(86509),d=l(4285),v=l(56805),p=l(66946),h=l(44149),b=l(72462),m=l(30324),x=l(66964),g=l(82461),f=l(35721),S=l(51444),Z=l(29316),j=l(25534),C=l(49495),A=l(36554),E=l(94187),y=l(95467),w=l(62449),N=l(97538),T=l(44977),I=l(10728),U=l(12066),W=[{label:"US East (Ohio)",value:"us-east-2"},{label:"US East (N. Virginia)",value:"us-east-1"},{label:"US West (N. California)",value:"us-west-1"},{label:"US West (Oregon)",value:"us-west-2"},{label:"Africa (Cape Town)",value:"af-south-1"},{label:"Asia Pacific (Hong Kong)***",value:"ap-east-1"},{label:"Asia Pacific (Jakarta)",value:"ap-southeast-3"},{label:"Asia Pacific (Mumbai)",value:"ap-south-1"},{label:"Asia Pacific (Osaka)",value:"ap-northeast-3"},{label:"Asia Pacific (Seoul)",value:"ap-northeast-2"},{label:"Asia Pacific (Singapore)",value:"ap-southeast-1"},{label:"Asia Pacific (Sydney)",value:"ap-southeast-2"},{label:"Asia Pacific (Tokyo)",value:"ap-northeast-1"},{label:"Canada (Central)",value:"ca-central-1"},{label:"China (Beijing)",value:"cn-north-1"},{label:"China (Ningxia)",value:"cn-northwest-1"},{label:"Europe (Frankfurt)",value:"eu-central-1"},{label:"Europe (Ireland)",value:"eu-west-1"},{label:"Europe (London)",value:"eu-west-2"},{label:"Europe (Milan)",value:"eu-south-1"},{label:"Europe (Paris)",value:"eu-west-3"},{label:"Europe (Stockholm)",value:"eu-north-1"},{label:"South America (S\xe3o Paulo)",value:"sa-east-1"},{label:"Middle East (Bahrain)",value:"me-south-1"},{label:"AWS GovCloud (US-East)",value:"us-gov-east-1"},{label:"AWS GovCloud (US-West)",value:"us-gov-west-1"}],k=[{label:"Montr\xe9al",value:"NORTHAMERICA-NORTHEAST1"},{label:"Toronto",value:"NORTHAMERICA-NORTHEAST2"},{label:"Iowa",value:"US-CENTRAL1"},{label:"South Carolina",value:"US-EAST1"},{label:"Northern Virginia",value:"US-EAST4"},{label:"Oregon",value:"US-WEST1"},{label:"Los Angeles",value:"US-WEST2"},{label:"Salt Lake City",value:"US-WEST3"},{label:"Las Vegas",value:"US-WEST4"},{label:"S\xe3o Paulo",value:"SOUTHAMERICA-EAST1"},{label:"Santiago",value:"SOUTHAMERICA-WEST1"},{label:"Warsaw",value:"EUROPE-CENTRAL2"},{label:"Finland",value:"EUROPE-NORTH1"},{label:"Belgium",value:"EUROPE-WEST1"},{label:"London",value:"EUROPE-WEST2"},{label:"Frankfurt",value:"EUROPE-WEST3"},{label:"Netherlands",value:"EUROPE-WEST4"},{label:"Z\xfcrich",value:"EUROPE-WEST6"},{label:"Taiwan",value:"ASIA-EAST1"},{label:"Hong Kong",value:"ASIA-EAST2"},{label:"Tokyo",value:"ASIA-NORTHEAST1"},{label:"Osaka",value:"ASIA-NORTHEAST2"},{label:"Seoul",value:"ASIA-NORTHEAST3"},{label:"Mumbai",value:"ASIA-SOUTH1"},{label:"Delhi",value:"ASIA-SOUTH2"},{label:"Singapore",value:"ASIA-SOUTHEAST1"},{label:"Jakarta",value:"ASIA-SOUTHEAST2"},{label:"Sydney",value:"AUSTRALIA-SOUTHEAST1"},{label:"Melbourne",value:"AUSTRALIA-SOUTHEAST2"}],O=[{label:"Asia",value:"asia"},{label:"Asia Pacific",value:"asiapacific"},{label:"Australia",value:"australia"},{label:"Australia Central",value:"australiacentral"},{label:"Australia Central 2",value:"australiacentral2"},{label:"Australia East",value:"australiaeast"},{label:"Australia Southeast",value:"australiasoutheast"},{label:"Brazil",value:"brazil"},{label:"Brazil South",value:"brazilsouth"},{label:"Brazil Southeast",value:"brazilsoutheast"},{label:"Canada",value:"canada"},{label:"Canada Central",value:"canadacentral"},{label:"Canada East",value:"canadaeast"},{label:"Central India",value:"centralindia"},{label:"Central US",value:"centralus"},{label:"Central US (Stage)",value:"centralusstage"},{label:"Central US EUAP",value:"centraluseuap"},{label:"East Asia",value:"eastasia"},{label:"East Asia (Stage)",value:"eastasiastage"},{label:"East US",value:"eastus"},{label:"East US (Stage)",value:"eastusstage"},{label:"East US 2",value:"eastus2"},{label:"East US 2 (Stage)",value:"eastus2stage"},{label:"East US 2 EUAP",value:"eastus2euap"},{label:"Europe",value:"europe"},{label:"France",value:"france"},{label:"France Central",value:"francecentral"},{label:"France South",value:"francesouth"},{label:"Germany",value:"germany"},{label:"Germany North",value:"germanynorth"},{label:"Germany West Central",value:"germanywestcentral"},{label:"Global",value:"global"},{label:"India",value:"india"},{label:"Japan",value:"japan"},{label:"Japan East",value:"japaneast"},{label:"Japan West",value:"japanwest"},{label:"Jio India Central",value:"jioindiacentral"},{label:"Jio India West",value:"jioindiawest"},{label:"Korea",value:"korea"},{label:"Korea Central",value:"koreacentral"},{label:"Korea South",value:"koreasouth"},{label:"North Central US",value:"northcentralus"},{label:"North Central US (Stage)",value:"northcentralusstage"},{label:"North Europe",value:"northeurope"},{label:"Norway",value:"norway"},{label:"Norway East",value:"norwayeast"},{label:"Norway West",value:"norwaywest"},{label:"South Africa",value:"southafrica"},{label:"South Africa North",value:"southafricanorth"},{label:"South Africa West",value:"southafricawest"},{label:"South Central US",value:"southcentralus"},{label:"South Central US (Stage)",value:"southcentralusstage"},{label:"South India",value:"southindia"},{label:"Southeast Asia",value:"southeastasia"},{label:"Southeast Asia (Stage)",value:"southeastasiastage"},{label:"Sweden Central",value:"swedencentral"},{label:"Switzerland",value:"switzerland"},{label:"Switzerland North",value:"switzerlandnorth"},{label:"Switzerland West",value:"switzerlandwest"},{label:"UAE Central",value:"uaecentral"},{label:"UAE North",value:"uaenorth"},{label:"UK South",value:"uksouth"},{label:"UK West",value:"ukwest"},{label:"United Arab Emirates",value:"uae"},{label:"United Kingdom",value:"uk"},{label:"United States",value:"unitedstates"},{label:"United States EUAP",value:"unitedstateseuap"},{label:"West Central US",value:"westcentralus"},{label:"West Europe",value:"westeurope"},{label:"West India",value:"westindia"},{label:"West US",value:"westus"},{label:"West US (Stage)",value:"westusstage"},{label:"West US 2",value:"westus2"},{label:"West US 2 (Stage)",value:"westus2stage"},{label:"West US 3",value:"westus3"}],P=l(62559),R=function(e){var a=e.type,l=e.onChange,s=e.inputProps,r=function(e){return"s3"===e?W:"gcs"===e?k:"azure"===e?O:[]}(a),o=i.useState(""),u=(0,t.Z)(o,2),c=u[0],d=u[1];return(0,P.jsx)(I.Z,{sx:{"& .MuiOutlinedInput-root":{padding:0,paddingLeft:"10px",fontSize:13,fontWeight:600},"& .MuiAutocomplete-inputRoot":{"& .MuiOutlinedInput-notchedOutline":{borderColor:"#e5e5e5",borderWidth:1},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#07193E",borderWidth:1},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#07193E",borderWidth:1}}},freeSolo:!0,selectOnFocus:!0,handleHomeEndKeys:!0,onChange:function(e,a){var t,n=a;n="string"===typeof a?{label:a}:a&&a.inputValue?{label:a.inputValue}:a,d(n),l(null===(t=n)||void 0===t?void 0:t.value)},value:c,onInputChange:function(e){var a=(e||{}).target,t=(a=void 0===a?{}:a).value;l(void 0===t?"":t)},getOptionLabel:function(e){return"string"===typeof e?e:e.inputValue?e.inputValue:e.value},options:r,filterOptions:function(e,a){var l=a.inputValue.toLowerCase();return e.filter((function(e){return"".concat(e.label.toLowerCase()).concat(e.value.toLowerCase()).includes(l)}))},renderOption:function(e,a){return(0,P.jsx)("li",(0,n.Z)((0,n.Z)({},e),{},{children:(0,P.jsxs)(v.Z,{sx:{display:"flex",flexFlow:"column",alignItems:"baseline",padding:"4px",borderBottom:"1px solid #eaeaea",cursor:"pointer",width:"100%","& .label":{fontSize:"13px",fontWeight:500},"& .value":{fontSize:"11px",fontWeight:400}},children:[(0,P.jsx)("span",{className:"label",children:a.value}),(0,P.jsx)("span",{className:"value",children:a.label})]})}))},renderInput:function(e){return(0,P.jsx)(U.Z,(0,n.Z)((0,n.Z)((0,n.Z)({},e),s),{},{fullWidth:!0}))}})},L=(0,w.Z)((function(e){return(0,c.Z)((0,n.Z)({},b.gM))})),F=(0,d.Z)((function(e){return(0,c.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},b.YI),b.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative",minWidth:160},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,n.Z)((0,n.Z)({},b.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var a=e.label,l=e.onChange,t=e.id,s=e.name,r=e.type,o=e.tooltip,c=void 0===o?"":o,d=e.index,v=void 0===d?0:d,p=e.error,h=void 0===p?"":p,b=e.required,m=void 0!==b&&b,x=e.overlayId,g=e.overlayIcon,f=void 0===g?null:g,S=e.overlayObject,Z=void 0===S?null:S,j=e.extraInputProps,C=void 0===j?{}:j,w=e.overlayAction,I=e.noLabelMinWidth,U=void 0!==I&&I,W=e.classes,k=e.className,O=void 0===k?"":k,F=L(),M=(0,n.Z)((0,n.Z)({"data-index":v},C),{},{name:s,id:t,classes:F});return(0,P.jsx)(i.Fragment,{children:(0,P.jsxs)(u.ZP,{container:!0,className:(0,T.Z)(""!==O?O:"",""!==h?W.errorInField:W.inputBoxContainer),children:[""!==a&&(0,P.jsxs)(A.Z,{htmlFor:t,className:U?W.noMinWidthLabel:W.inputLabel,children:[(0,P.jsxs)("span",{children:[a,m?"*":""]}),""!==c&&(0,P.jsx)("div",{className:W.tooltipContainer,children:(0,P.jsx)(E.Z,{title:c,placement:"top-start",children:(0,P.jsx)("div",{className:W.tooltip,children:(0,P.jsx)(N.Z,{})})})})]}),(0,P.jsxs)("div",{className:W.textBoxContainer,children:[(0,P.jsx)(R,{type:r,inputProps:M,onChange:l}),f&&(0,P.jsx)("div",{className:"".concat(W.overlayAction," ").concat(""!==a?"withLabel":""),children:(0,P.jsx)(y.Z,{onClick:w?function(){w()}:function(){return null},id:x,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:f})}),Z&&(0,P.jsx)("div",{className:"".concat(W.overlayAction," ").concat(""!==a?"withLabel":""),children:Z})]})]})})})),M={setErrorSnackMessage:h.Ih},z=(0,s.$j)(null,M),B=(0,d.Z)((function(e){return(0,c.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},b.oO),b.Je),b.DF),{},{lambdaNotifTitle:{color:"#07193E",fontSize:16,fontFamily:"Lato,sans-serif",paddingLeft:18},fileInputFieldCss:{margin:"0"},fileTextBoxContainer:{maxWidth:" 100%",flex:1},fileReselectCss:{maxWidth:" 100%",flex:1}},b.bV))}))(z((function(e){var a=e.classes,l=e.setErrorSnackMessage,s=e.match,r=e.history,c=(0,i.useState)(!1),d=(0,t.Z)(c,2),h=d[0],b=d[1],A=(0,i.useState)(""),E=(0,t.Z)(A,2),y=E[0],w=E[1],N=(0,i.useState)(""),T=(0,t.Z)(N,2),I=T[0],U=T[1],W=(0,i.useState)(""),k=(0,t.Z)(W,2),O=k[0],R=k[1],L=(0,i.useState)(""),M=(0,t.Z)(L,2),z=M[0],B=M[1],H=(0,i.useState)(""),K=(0,t.Z)(H,2),V=K[0],q=K[1],G=(0,i.useState)(""),J=(0,t.Z)(G,2),Y=J[0],D=J[1],X=(0,i.useState)(""),$=(0,t.Z)(X,2),_=$[0],Q=$[1],ee=(0,i.useState)(""),ae=(0,t.Z)(ee,2),le=ae[0],te=ae[1],ne=(0,i.useState)(""),ie=(0,t.Z)(ne,2),se=ie[0],re=ie[1],oe=(0,i.useState)(""),ue=(0,t.Z)(oe,2),ce=ue[0],de=ue[1],ve=(0,i.useState)(""),pe=(0,t.Z)(ve,2),he=pe[0],be=pe[1],me=(0,i.useState)(""),xe=(0,t.Z)(me,2),ge=xe[0],fe=xe[1],Se=(0,i.useState)(""),Ze=(0,t.Z)(Se,2),je=Ze[0],Ce=Ze[1],Ae=o()(s,"params.service","s3"),Ee=(0,i.useState)(!0),ye=(0,t.Z)(Ee,2),we=ye[0],Ne=ye[1],Te=(0,i.useState)(""),Ie=(0,t.Z)(Te,2),Ue=Ie[0],We=Ie[1],ke=(0,i.useCallback)((function(){return/^[A-Z0-9-_]+$/.test(y)?(We(""),!0):(We("Please verify that string is uppercase only and contains valid characters (numbers, dashes & underscores)."),!1)}),[y]);(0,i.useEffect)((function(){if(h){var e={},a={name:y,endpoint:I,bucket:O,prefix:z,region:V},t=Ae;switch("minio"===Ae&&(t="s3"),Ae){case"minio":case"s3":e={s3:(0,n.Z)((0,n.Z)({},a),{},{accesskey:_,secretkey:le,storageclass:Y})};break;case"gcs":e={gcs:(0,n.Z)((0,n.Z)({},a),{},{creds:ce})};break;case"azure":e={azure:(0,n.Z)((0,n.Z)({},a),{},{accountname:he,accountkey:ge})}}var i=(0,n.Z)({type:t},e);m.Z.invoke("POST","/api/v1/admin/tiers",i).then((function(){b(!1),r.push(C.gA.TIERS)})).catch((function(e){b(!1),l(e)}))}}),[_,ge,he,O,ce,I,r,y,z,V,h,le,l,Y,Ae]),(0,i.useEffect)((function(){var e=!0;""===Ae&&(e=!1),""!==y&&ke()||(e=!1),""===I&&(e=!1),""===O&&(e=!1),""===z&&(e=!1),""===V&&"minio"!==Ae&&(e=!1),"s3"!==Ae&&"minio"!==Ae||(""===_&&(e=!1),""===le&&(e=!1)),"gcs"===Ae&&""===ce&&(e=!1),"azure"===Ae&&(""===he&&(e=!1),""===ge&&(e=!1)),Ne(e)}),[_,ge,he,O,ce,I,we,y,z,V,le,Y,Ae,ke]),(0,i.useEffect)((function(){switch(Ae){case"gcs":U("https://storage.googleapis.com/"),Ce("Google Cloud");break;case"s3":U("https://s3.amazonaws.com"),Ce("Amazon S3");break;case"azure":U("http://blob.core.windows.net"),Ce("Azure");break;case"minio":U(""),Ce("MinIO")}}),[Ae]);var Oe=S.Bh.find((function(e){return e.serviceName===Ae}));return(0,P.jsxs)(i.Fragment,{children:[(0,P.jsx)(f.Z,{label:(0,P.jsx)(i.Fragment,{children:(0,P.jsx)(Z.Z,{to:C.gA.TIERS_ADD,label:"Add Tier"})}),actions:(0,P.jsx)(i.Fragment,{})}),(0,P.jsx)(j.Z,{children:(0,P.jsx)(u.ZP,{item:!0,xs:12,sx:{border:"1px solid #eaeaea",padding:"25px"},children:(0,P.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),b(!0)},children:[""!==Ae&&Oe?(0,P.jsxs)(u.ZP,{item:!0,xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"start",marginBottom:"20px"},children:[Oe.logo?(0,P.jsx)(v.Z,{sx:{"& .min-icon":{height:"60px",width:"60px"}},children:Oe.logo}):null,(0,P.jsx)("div",{className:a.lambdaNotifTitle,children:(0,P.jsxs)("b",{children:[je||""," - Add Tier Configuration"]})})]},"icon-".concat(Oe.targetTitle)):null,(0,P.jsx)(u.ZP,{item:!0,xs:12,sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gridRowGap:25,gridColumnGap:50},children:""!==Ae&&(0,P.jsxs)(i.Fragment,{children:[(0,P.jsx)(x.Z,{id:"name",name:"name",label:"Name",placeholder:"Enter Name (Eg. REMOTE-TIER)",value:y,onChange:function(e){w(e.target.value.toUpperCase())},error:Ue,required:!0}),(0,P.jsx)(x.Z,{id:"endpoint",name:"endpoint",label:"Endpoint",placeholder:"Enter Endpoint",value:I,onChange:function(e){U(e.target.value)},required:!0}),(Ae===S.b2||Ae===S.Pp)&&(0,P.jsxs)(i.Fragment,{children:[(0,P.jsx)(x.Z,{id:"accessKey",name:"accessKey",label:"Access Key",placeholder:"Enter Access Key",value:_,onChange:function(e){Q(e.target.value)},required:!0}),(0,P.jsx)(x.Z,{id:"secretKey",name:"secretKey",label:"Secret Key",placeholder:"Enter Secret Key",value:le,onChange:function(e){te(e.target.value)},required:!0})]}),Ae===S.f0&&(0,P.jsx)(g.Z,{accept:".json",classes:{fileInputField:a.fileInputFieldCss,textBoxContainer:a.fileTextBoxContainer,fileReselect:a.fileReselectCss},id:"creds",label:"Credentials",name:"creds",onChange:function(e,a){de(e),re(a)},value:se,required:!0}),Ae===S.vB&&(0,P.jsxs)(i.Fragment,{children:[(0,P.jsx)(x.Z,{id:"accountName",name:"accountName",label:"Account Name",placeholder:"Enter Account Name",value:he,onChange:function(e){be(e.target.value)},required:!0}),(0,P.jsx)(x.Z,{id:"accountKey",name:"accountKey",label:"Account Key",placeholder:"Enter Account Key",value:ge,onChange:function(e){fe(e.target.value)},required:!0})]}),(0,P.jsx)(x.Z,{id:"bucket",name:"bucket",label:"Bucket",placeholder:"Enter Bucket",value:O,onChange:function(e){R(e.target.value)},required:!0}),(0,P.jsx)(x.Z,{id:"prefix",name:"prefix",label:"Prefix",placeholder:"Enter Prefix",value:z,onChange:function(e){B(e.target.value)},required:!0}),(0,P.jsx)(F,{onChange:function(e){q(e)},required:"minio"!==Ae,label:"Region",id:"region",name:"region",type:Ae}),Ae===S.b2||Ae===S.Pp&&(0,P.jsx)(x.Z,{id:"storageClass",name:"storageClass",label:"Storage Class",placeholder:"Enter Storage Class",value:Y,onChange:function(e){D(e.target.value)}})]})}),(0,P.jsx)(u.ZP,{item:!0,xs:12,className:a.settingsButtonContainer,children:(0,P.jsx)(p.Z,{type:"submit",variant:"contained",color:"primary",disabled:h||!we,children:"Save Tier Configuration"})})]})})})]})})))},51444:function(e,a,l){l.d(a,{Pp:function(){return i},f0:function(){return s},b2:function(){return r},vB:function(){return o},Bh:function(){return u}});var t=l(14549),n=l(62559),i="minio",s="gcs",r="s3",o="azure",u=[{serviceName:i,targetTitle:"MinIO",logo:(0,n.jsx)(t.$E,{}),logoXs:(0,n.jsx)(t.YE,{})},{serviceName:s,targetTitle:"Google Cloud Storage",logo:(0,n.jsx)(t.UQ,{}),logoXs:(0,n.jsx)(t.Vw,{})},{serviceName:r,targetTitle:"AWS S3",logo:(0,n.jsx)(t.fe,{}),logoXs:(0,n.jsx)(t.Xj,{})},{serviceName:o,targetTitle:"Azure",logo:(0,n.jsx)(t.jz,{}),logoXs:(0,n.jsx)(t.nA,{})}]},82981:function(e,a,l){var t=l(50390),n=l(35477),i=l(86509),s=l(4285),r=l(62559);a.Z=(0,s.Z)((function(e){var a;return(0,i.Z)({errorBlock:{color:(null===(a=e.palette)||void 0===a?void 0:a.error.main)||"#C83B51"}})}))((function(e){var a=e.classes,l=e.errorMessage,i=e.withBreak,s=void 0===i||i;return(0,r.jsxs)(t.Fragment,{children:[s&&(0,r.jsx)("br",{}),(0,r.jsx)(n.Z,{component:"p",variant:"body1",className:a.errorBlock,children:l})]})}))},46529:function(e,a,l){var t=l(64119);a.Z=void 0;var n=t(l(66830)),i=l(62559),s=(0,n.default)((0,i.jsx)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");a.Z=s},94258:function(e,a,l){var t=l(64119);a.Z=void 0;var n=t(l(66830)),i=l(62559),s=(0,n.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");a.Z=s}}]);
//# sourceMappingURL=1796.78eb9602.chunk.js.map