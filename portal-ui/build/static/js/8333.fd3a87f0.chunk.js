"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8333],{28333:function(e,n,t){t.r(n);var l=t(23430),o=t(50390),a=t(21639),c=t(56805),s=t(18201),i=t(49495),r=t(30140),u=t(38342),d=t.n(u),f=t(63020),v=t(21278),p=t(96152),h=t(37882),Z=t(62559),x=(0,h.Z)(o.lazy((function(){return Promise.all([t.e(14),t.e(3152),t.e(2066),t.e(5444),t.e(1666)]).then(t.bind(t,23152))}))),m=(0,h.Z)(o.lazy((function(){return Promise.all([t.e(5444),t.e(7007)]).then(t.bind(t,37007))})));n.default=function(e){var n=e.setErrorSnackMessage,t=e.bucketName,u=(0,o.useState)(null),h=(0,l.Z)(u,2),j=h[0],T=h[1],k=(0,o.useState)(!1),b=(0,l.Z)(k,2),G=b[0],_=b[1],g=(0,o.useState)([]),S=(0,l.Z)(g,2),y=S[0],C=S[1],A=(0,o.useState)(["",""]),E=(0,l.Z)(A,2),U=E[0],z=E[1],N=(0,o.useState)(!1),P=(0,l.Z)(N,2),I=P[0],F=P[1],w=(0,a.Z)((function(e){var n,t;null!=e&&null!=(null===e||void 0===e?void 0:e.details)&&(T(null===e||void 0===e||null===(n=e.details)||void 0===n?void 0:n.tags),C(Object.keys(null===e||void 0===e||null===(t=e.details)||void 0===t?void 0:t.tags)))}),(function(e){n(e)})),B=(0,l.Z)(w,2),K=B[0],O=B[1],D=function(){O("GET","/api/v1/buckets/".concat(t))};return(0,o.useEffect)((function(){D()}),[t]),(0,Z.jsxs)(c.Z,{children:[K?(0,Z.jsx)(s.Z,{color:"primary",size:16,variant:"indeterminate"}):null,(0,Z.jsx)(r.s,{scopes:[i.Ft.S3_GET_BUCKET_TAGGING],resource:t,children:(0,Z.jsxs)(c.Z,{sx:{display:"flex",flexFlow:"column"},children:[(0,Z.jsx)(c.Z,{children:y&&y.map((function(e,n){var l=d()(j,"".concat(e),"");return""!==l?(0,Z.jsx)(r.s,{scopes:[i.Ft.S3_PUT_BUCKET_TAGGING],resource:t,matchAll:!0,errorProps:{deleteIcon:null,onDelete:null},children:(0,Z.jsx)(f.Z,{style:{textTransform:"none",marginRight:"5px"},size:"small",label:"".concat(e," : ").concat(l),color:"primary",deleteIcon:(0,Z.jsx)(v.Z,{}),onDelete:function(){!function(e,n){z([e,n]),F(!0)}(e,l)}})},"chip-".concat(n)):null}))}),(0,Z.jsx)(r.s,{scopes:[i.Ft.S3_PUT_BUCKET_TAGGING],resource:t,errorProps:{disabled:!0,onClick:null},children:(0,Z.jsx)(f.Z,{style:{maxWidth:80,marginTop:"10px"},icon:(0,Z.jsx)(p.Z,{}),clickable:!0,size:"small",label:"Add tag",color:"primary",variant:"outlined",onClick:function(){_(!0)}})})]})}),G&&(0,Z.jsx)(x,{modalOpen:G,currentTags:j,bucketName:t,onCloseAndUpdate:function(e){_(!1),e&&D()}}),I&&(0,Z.jsx)(m,{deleteOpen:I,currentTags:j,bucketName:t,onCloseAndUpdate:function(e){F(!1),e&&D()},selectedTag:U})]})}},21639:function(e,n,t){var l=t(23430),o=t(50390),a=t(30324);n.Z=function(e,n){var t=(0,o.useState)(!1),c=(0,l.Z)(t,2),s=c[0],i=c[1];return[s,function(t,l,o){i(!0),a.Z.invoke(t,l,o).then((function(n){i(!1),e(n)})).catch((function(e){i(!1),n(e)}))}]}},96152:function(e,n,t){var l=t(64119);n.Z=void 0;var o=l(t(66830)),a=t(62559),c=(0,o.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=c}}]);
//# sourceMappingURL=8333.fd3a87f0.chunk.js.map