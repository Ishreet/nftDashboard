(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[569],{76845:function(t,n,e){"use strict";var o=e(95318);n.Z=void 0;var i=o(e(64938)),a=e(85893),r=(0,i.default)((0,a.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"RefreshTwoTone");n.Z=r},31812:function(t,n,e){"use strict";e.d(n,{Z:function(){return Z}});var o=e(63366),i=e(87462),a=e(67294),r=e(98216),s=e(27192),d=e(11496),l=e(33616),c=e(11057),u=e(66489),p=e(28979);function h(t){return(0,p.Z)("MuiLoadingButton",t)}var m=(0,e(76087).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),x=e(85893);const g=["children","disabled","loading","loadingIndicator","loadingPosition","variant"],f=(0,d.ZP)(c.Z,{shouldForwardProp:t=>(t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t)(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,n)=>[n.root,n.startIconLoadingStart&&{[`& .${m.startIconLoadingStart}`]:n.startIconLoadingStart},n.endIconLoadingEnd&&{[`& .${m.endIconLoadingEnd}`]:n.endIconLoadingEnd}]})((({ownerState:t,theme:n})=>(0,i.Z)({[`& .${m.startIconLoadingStart}, & .${m.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${m.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${m.startIconLoadingStart}, & .${m.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${m.startIconLoadingStart}, & .${m.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}}))),b=(0,d.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.loadingIndicator,n[`loadingIndicator${(0,r.Z)(e.loadingPosition)}`]]}})((({theme:t,ownerState:n})=>(0,i.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10}))),v=(0,x.jsx)(u.Z,{color:"inherit",size:16});var Z=a.forwardRef((function(t,n){const e=(0,l.Z)({props:t,name:"MuiLoadingButton"}),{children:d,disabled:c=!1,loading:u=!1,loadingIndicator:p=v,loadingPosition:m="center",variant:Z="text"}=e,w=(0,o.Z)(e,g),y=(0,i.Z)({},e,{disabled:c,loading:u,loadingIndicator:p,loadingPosition:m,variant:Z}),S=(t=>{const{loading:n,loadingPosition:e,classes:o}=t,a={root:["root",n&&"loading"],startIcon:[n&&`startIconLoading${(0,r.Z)(e)}`],endIcon:[n&&`endIconLoading${(0,r.Z)(e)}`],loadingIndicator:["loadingIndicator",n&&`loadingIndicator${(0,r.Z)(e)}`]},d=(0,s.Z)(a,h,o);return(0,i.Z)({},o,d)})(y);return(0,x.jsx)(f,(0,i.Z)({disabled:c||u,ref:n},w,{variant:Z,classes:S,ownerState:y,children:"end"===y.loadingPosition?(0,x.jsxs)(a.Fragment,{children:[d,u&&(0,x.jsx)(b,{className:S.loadingIndicator,ownerState:y,children:p})]}):(0,x.jsxs)(a.Fragment,{children:[u&&(0,x.jsx)(b,{className:S.loadingIndicator,ownerState:y,children:p}),d]})}))}))},98363:function(t,n,e){"use strict";const o=e(67294).createContext({});n.Z=o},11057:function(t,n,e){"use strict";e.d(n,{Z:function(){return S}});var o=e(63366),i=e(87462),a=e(67294),r=e(86010),s=e(27192),d=e(41796),l=e(11496),c=e(33616),u=e(49990),p=e(98216),h=e(28979);function m(t){return(0,h.Z)("MuiButton",t)}var x=(0,e(76087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=e(98363),f=e(85893);const b=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],v=t=>(0,i.Z)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Z=(0,l.ZP)(u.Z,{shouldForwardProp:t=>(0,l.FO)(t)||"classes"===t,name:"MuiButton",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.root,n[e.variant],n[`${e.variant}${(0,p.Z)(e.color)}`],n[`size${(0,p.Z)(e.size)}`],n[`${e.variant}Size${(0,p.Z)(e.size)}`],"inherit"===e.color&&n.colorInherit,e.disableElevation&&n.disableElevation,e.fullWidth&&n.fullWidth]}})((({theme:t,ownerState:n})=>(0,i.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:t.shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,d.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:(0,d.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:`1px solid ${t.palette[n.color].main}`,backgroundColor:(0,d.Fq)(t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:t.palette.grey.A100,boxShadow:t.shadows[4],"@media (hover: none)":{boxShadow:t.shadows[2],backgroundColor:t.palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:t.palette[n.color].dark,"@media (hover: none)":{backgroundColor:t.palette[n.color].main}}),"&:active":(0,i.Z)({},"contained"===n.variant&&{boxShadow:t.shadows[8]}),[`&.${x.focusVisible}`]:(0,i.Z)({},"contained"===n.variant&&{boxShadow:t.shadows[6]}),[`&.${x.disabled}`]:(0,i.Z)({color:t.palette.action.disabled},"outlined"===n.variant&&{border:`1px solid ${t.palette.action.disabledBackground}`},"outlined"===n.variant&&"secondary"===n.color&&{border:`1px solid ${t.palette.action.disabled}`},"contained"===n.variant&&{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground})},"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid "+("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].main,border:`1px solid ${(0,d.Fq)(t.palette[n.color].main,.5)}`},"contained"===n.variant&&{color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],boxShadow:t.shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})),(({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}})),w=(0,l.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.startIcon,n[`iconSize${(0,p.Z)(e.size)}`]]}})((({ownerState:t})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},v(t)))),y=(0,l.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.endIcon,n[`iconSize${(0,p.Z)(e.size)}`]]}})((({ownerState:t})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},v(t))));var S=a.forwardRef((function(t,n){const e=(0,c.Z)({props:t,name:"MuiButton"}),{className:d,color:l,disabled:u,disableElevation:h,disableFocusRipple:x,disableRipple:v,fullWidth:S,size:k,variant:I}=a.useContext(g.Z),{children:z,className:$,color:j,component:W="button",disabled:R,disableElevation:L,disableFocusRipple:P,disableRipple:C,endIcon:D,focusVisibleClassName:M,fullWidth:U,size:E,startIcon:N,type:O,variant:T}=e,F=(0,o.Z)(e,b),B=j||l||"primary",_=R||u||!1,G=L||h||!1,A=P||x||!1,V=U||S||!1,q=E||k||"medium",X=T||I||"text",H=C||v||!1,J=(0,i.Z)({},e,{color:B,component:W,disabled:_,disableElevation:G,disableFocusRipple:A,fullWidth:V,size:q,type:O,variant:X}),Q=(t=>{const{color:n,disableElevation:e,fullWidth:o,size:a,variant:r,classes:d}=t,l={root:["root",r,`${r}${(0,p.Z)(n)}`,`size${(0,p.Z)(a)}`,`${r}Size${(0,p.Z)(a)}`,"inherit"===n&&"colorInherit",e&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(a)}`]},c=(0,s.Z)(l,m,d);return(0,i.Z)({},d,c)})(J),K=N&&(0,f.jsx)(w,{className:Q.startIcon,ownerState:J,children:N}),Y=D&&(0,f.jsx)(y,{className:Q.endIcon,ownerState:J,children:D});return(0,f.jsxs)(Z,(0,i.Z)({ownerState:J,className:(0,r.Z)($,d),component:W,disabled:_,disableRipple:H,focusRipple:!A,focusVisibleClassName:(0,r.Z)(Q.focusVisible,M),ref:n,type:O},F,{classes:Q,children:[K,z,Y]}))}))},27948:function(t,n,e){"use strict";e.d(n,{Z:function(){return g}});var o=e(63366),i=e(87462),a=e(67294),r=e(86010),s=e(27192),d=e(33616),l=e(11496),c=e(28979);function u(t){return(0,c.Z)("MuiContainer",t)}(0,e(76087).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var p=e(98216),h=e(85893);const m=["className","component","disableGutters","fixed","maxWidth"],x=(0,l.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.root,n[`maxWidth${(0,p.Z)(String(e.maxWidth))}`],e.fixed&&n.fixed,e.disableGutters&&n.disableGutters]}})((({theme:t,ownerState:n})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})),(({theme:t,ownerState:n})=>n.fixed&&Object.keys(t.breakpoints.values).reduce(((n,e)=>{const o=t.breakpoints.values[e];return 0!==o&&(n[t.breakpoints.up(e)]={maxWidth:`${o}${t.breakpoints.unit}`}),n}),{})),(({theme:t,ownerState:n})=>(0,i.Z)({},"xs"===n.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},n.maxWidth&&"xs"!==n.maxWidth&&{[t.breakpoints.up(n.maxWidth)]:{maxWidth:`${t.breakpoints.values[n.maxWidth]}${t.breakpoints.unit}`}})));var g=a.forwardRef((function(t,n){const e=(0,d.Z)({props:t,name:"MuiContainer"}),{className:a,component:l="div",disableGutters:c=!1,fixed:g=!1,maxWidth:f="lg"}=e,b=(0,o.Z)(e,m),v=(0,i.Z)({},e,{component:l,disableGutters:c,fixed:g,maxWidth:f}),Z=(t=>{const{classes:n,fixed:e,disableGutters:o,maxWidth:i}=t,a={root:["root",i&&`maxWidth${(0,p.Z)(String(i))}`,e&&"fixed",o&&"disableGutters"]};return(0,s.Z)(a,u,n)})(v);return(0,h.jsx)(x,(0,i.Z)({as:l,ownerState:v,className:(0,r.Z)(Z.root,a),ref:n},b))}))},50456:function(t,n,e){"use strict";e.d(n,{Z:function(){return P}});var o=e(87462),i=e(63366),a=e(67294),r=e(45697),s=e.n(r),d=e(20539),l=e(8679),c=e.n(l),u=e(2734),p=e(58974),h=e(98396),m=e(85893);const x=["initialWidth","width"],g=["xs","sm","md","lg","xl"],f=(t,n,e=!0)=>e?g.indexOf(t)<=g.indexOf(n):g.indexOf(t)<g.indexOf(n),b=(t,n,e=!1)=>e?g.indexOf(n)<=g.indexOf(t):g.indexOf(n)<g.indexOf(t);var v=(t={})=>n=>{const{withTheme:e=!1,noSSR:r=!1,initialWidth:s}=t;function l(t){const l=(0,u.Z)(),c=t.theme||l,g=(0,d.Z)({theme:c,name:"MuiWithWidth",props:t}),{initialWidth:f,width:b}=g,v=(0,i.Z)(g,x),[Z,w]=a.useState(!1);(0,p.Z)((()=>{w(!0)}),[]);const y=c.breakpoints.keys.slice().reverse().reduce(((t,n)=>{const e=(0,h.Z)(c.breakpoints.up(n));return!t&&e?n:t}),null),S=(0,o.Z)({width:b||(Z||r?y:void 0)||f||s},e?{theme:c}:{},v);return void 0===S.width?null:(0,m.jsx)(n,(0,o.Z)({},S))}return c()(l,n),l};function Z(t){const{children:n,only:e,width:o}=t,i=(0,u.Z)();let a=!0;if(e)if(Array.isArray(e))for(let r=0;r<e.length;r+=1){if(o===e[r]){a=!1;break}}else e&&o===e&&(a=!1);if(a)for(let r=0;r<i.breakpoints.keys.length;r+=1){const n=i.breakpoints.keys[r],e=t[`${n}Up`],s=t[`${n}Down`];if(e&&f(n,o)||s&&b(n,o)){a=!1;break}}return a?n:null}Z.propTypes={children:s().node,className:s().string,implementation:s().oneOf(["js","css"]),initialWidth:s().oneOf(["xs","sm","md","lg","xl"]),lgDown:s().bool,lgUp:s().bool,mdDown:s().bool,mdUp:s().bool,only:s().oneOfType([s().oneOf(["xs","sm","md","lg","xl"]),s().arrayOf(s().oneOf(["xs","sm","md","lg","xl"]))]),smDown:s().bool,smUp:s().bool,width:s().string.isRequired,xlDown:s().bool,xlUp:s().bool,xsDown:s().bool,xsUp:s().bool};var w=v()(Z),y=e(86010),S=e(27192),k=e(98216),I=e(11496),z=e(28979);function $(t){return(0,z.Z)("PrivateHiddenCss",t)}(0,e(76087).Z)("PrivateHiddenCss",["root","xlDown","xlUp","onlyXl","lgDown","lgUp","onlyLg","mdDown","mdUp","onlyMd","smDown","smUp","onlySm","xsDown","xsUp","onlyXs"]);const j=["children","className","only"],W=(0,I.ZP)("div",{name:"PrivateHiddenCss",slot:"Root"})((({theme:t,ownerState:n})=>{const e={display:"none"};return(0,o.Z)({},n.breakpoints.map((({breakpoint:n,dir:o})=>"only"===o?{[t.breakpoints.only(n)]:e}:"up"===o?{[t.breakpoints.up(n)]:e}:{[t.breakpoints.down(n)]:e})).reduce(((t,n)=>(Object.keys(n).forEach((e=>{t[e]=n[e]})),t)),{}))}));var R=function(t){const{children:n,className:e,only:a}=t,r=(0,i.Z)(t,j),s=(0,u.Z)(),d=[];for(let o=0;o<s.breakpoints.keys.length;o+=1){const t=s.breakpoints.keys[o],n=r[`${t}Up`],e=r[`${t}Down`];n&&d.push({breakpoint:t,dir:"up"}),e&&d.push({breakpoint:t,dir:"down"})}if(a){(Array.isArray(a)?a:[a]).forEach((t=>{d.push({breakpoint:t,dir:"only"})}))}const l=(0,o.Z)({},t,{breakpoints:d}),c=(t=>{const{classes:n,breakpoints:e}=t,o={root:["root",...e.map((({breakpoint:t,dir:n})=>"only"===n?`${n}${(0,k.Z)(t)}`:`${t}${(0,k.Z)(n)}`))]};return(0,S.Z)(o,$,n)})(l);return(0,m.jsx)(W,{className:(0,y.Z)(c.root,e),ownerState:l,children:n})};const L=["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"];var P=function(t){const{implementation:n="js",lgDown:e=!1,lgUp:a=!1,mdDown:r=!1,mdUp:s=!1,smDown:d=!1,smUp:l=!1,xlDown:c=!1,xlUp:u=!1,xsDown:p=!1,xsUp:h=!1}=t,x=(0,i.Z)(t,L);return"js"===n?(0,m.jsx)(w,(0,o.Z)({lgDown:e,lgUp:a,mdDown:r,mdUp:s,smDown:d,smUp:l,xlDown:c,xlUp:u,xsDown:p,xsUp:h},x)):(0,m.jsx)(R,(0,o.Z)({lgDown:e,lgUp:a,mdDown:r,mdUp:s,smDown:d,smUp:l,xlDown:c,xlUp:u,xsDown:p,xsUp:h},x))}},98396:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var o=e(67294),i=e(34168),a=e(20539),r=e(58974);function s(t,n={}){const e=(0,i.Z)(),s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:d=!1,matchMedia:l=(s?window.matchMedia:null),noSsr:c=!1,ssrMatchMedia:u=null}=(0,a.Z)({name:"MuiUseMediaQuery",props:n,theme:e});let p="function"===typeof t?t(e):t;p=p.replace(/^@media( ?)/m,"");const[h,m]=o.useState((()=>c&&s?l(p).matches:u?u(p).matches:d));return(0,r.Z)((()=>{let t=!0;if(!s)return;const n=l(p),e=()=>{t&&m(n.matches)};return e(),n.addListener(e),()=>{t=!1,n.removeListener(e)}}),[p,l,s]),h}},11597:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/status/500",function(){return e(64250)}])},64250:function(t,n,e){"use strict";e.r(n);var o=e(85893),i=e(67294),a=e(11496),r=e(86886),s=e(87357),d=e(15861),l=e(27948),c=e(11057),u=e(50456),p=e(6851),h=e(9008),m=e(76845),x=e(31812),g=e(31567),f=(0,a.ZP)(r.ZP)((function(t){var n=t.theme;return"\n    background: ".concat(n.colors.gradients.black1,";\n")})),b=(0,a.ZP)(s.Z)((function(){return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),v=(0,a.ZP)(d.Z)((function(t){var n=t.theme;return"\n      color: ".concat(n.colors.alpha.white[100],";\n")})),Z=(0,a.ZP)(d.Z)((function(t){var n=t.theme;return"\n      color: ".concat(n.colors.alpha.white[70],";\n")}));function w(){var t=(0,g.$)().t,n=(0,i.useState)(!1),e=n[0],a=n[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.default,{children:(0,o.jsx)("title",{children:"Status - 500"})}),(0,o.jsx)(b,{children:(0,o.jsxs)(r.ZP,{container:!0,sx:{height:"100%"},alignItems:"stretch",spacing:0,children:[(0,o.jsx)(r.ZP,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,o.jsx)(l.Z,{maxWidth:"sm",children:(0,o.jsxs)(s.Z,{textAlign:"center",children:[(0,o.jsx)("img",{alt:"500",height:260,src:"/static/images/status/500.svg"}),(0,o.jsx)(d.Z,{variant:"h2",sx:{my:2},children:t("There was an error, please try again later")}),(0,o.jsx)(d.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:t("The server encountered an internal error and was not able to complete your request")}),(0,o.jsx)(x.Z,{onClick:function(){a(!0)},loading:e,variant:"outlined",color:"primary",startIcon:(0,o.jsx)(m.Z,{}),children:t("Refresh view")}),(0,o.jsx)(c.Z,{href:"/",variant:"contained",sx:{ml:1},children:t("Go back")})]})})}),(0,o.jsx)(u.Z,{mdDown:!0,children:(0,o.jsx)(f,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,o.jsx)(l.Z,{maxWidth:"sm",children:(0,o.jsxs)(s.Z,{textAlign:"center",children:[(0,o.jsx)(v,{variant:"h1",sx:{my:2},children:t("Tokyo NextJS Javascript Admin Dashboard")}),(0,o.jsx)(Z,{variant:"h4",fontWeight:"normal",sx:{mb:4},children:t("High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes.")}),(0,o.jsx)(c.Z,{href:"/",size:"large",variant:"contained",children:t("Overview")})]})})})})]})})]})}n.default=w,w.getLayout=function(t){return(0,o.jsx)(p.Z,{children:t})}},6851:function(t,n,e){"use strict";var o=e(85893),i=e(45697),a=e.n(i),r=e(87357),s=function(t){var n=t.children;return(0,o.jsx)(r.Z,{sx:{display:"flex",flex:1,height:"100%"},children:n})};s.propTypes={children:a().node},n.Z=s}},function(t){t.O(0,[6974,447,9774,2888,179],(function(){return n=11597,t(t.s=n);var n}));var n=t.O();_N_E=n}]);