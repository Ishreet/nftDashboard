(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6176],{57709:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var i=n(63366),o=n(87462),r=n(67294),d=n(27192),l=n(11496),a=n(85893);const s=["children","classes","className","label","notched"],u=(0,l.ZP)("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),p=(0,l.ZP)("legend",{skipSx:!0})((({ownerState:e,theme:t})=>(0,o.Z)({float:"unset"},void 0===e.label&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},void 0!==e.label&&(0,o.Z)({display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})}))));var c=n(54656),h=n(13970),m=n(33616);const f=["components","fullWidth","inputComponent","label","multiline","notched","type"],g=(0,l.ZP)(h.Ej,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiOutlinedInput",slot:"Root",overridesResolver:h.Gx})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return(0,o.Z)({position:"relative",borderRadius:e.shape.borderRadius,[`&:hover .${c.Z.notchedOutline}`]:{borderColor:e.palette.text.primary},"@media (hover: none)":{[`&:hover .${c.Z.notchedOutline}`]:{borderColor:n}},[`&.${c.Z.focused} .${c.Z.notchedOutline}`]:{borderColor:e.palette[t.color].main,borderWidth:2},[`&.${c.Z.error} .${c.Z.notchedOutline}`]:{borderColor:e.palette.error.main},[`&.${c.Z.disabled} .${c.Z.notchedOutline}`]:{borderColor:e.palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&(0,o.Z)({padding:"16.5px 14px"},"small"===t.size&&{padding:"8.5px 14px"}))})),b=(0,l.ZP)((function(e){const{className:t,label:n,notched:r}=e,d=(0,i.Z)(e,s),l=(0,o.Z)({},e,{notched:r,label:n});return(0,a.jsx)(u,(0,o.Z)({"aria-hidden":!0,className:t,ownerState:l},d,{children:(0,a.jsx)(p,{ownerState:l,children:n?(0,a.jsx)("span",{children:n}):(0,a.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}})})}))}),{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})((({theme:e})=>({borderColor:"light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}))),x=(0,l.ZP)(h.rA,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:h._o})((({theme:e,ownerState:t})=>(0,o.Z)({padding:"16.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:"light"===e.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===e.palette.mode?null:"#fff",caretColor:"light"===e.palette.mode?null:"#fff",borderRadius:"inherit"}},"small"===t.size&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0}))),Z=r.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiOutlinedInput"}),{components:r={},fullWidth:l=!1,inputComponent:s="input",label:u,multiline:p=!1,notched:Z,type:O="text"}=n,v=(0,i.Z)(n,f),w=(e=>{const{classes:t}=e,n=(0,d.Z)({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},c.e,t);return(0,o.Z)({},t,n)})(n);return(0,a.jsx)(h.ZP,(0,o.Z)({components:(0,o.Z)({Root:g,Input:x},r),renderSuffix:e=>(0,a.jsx)(b,{className:w.notchedOutline,label:u,notched:"undefined"!==typeof Z?Z:Boolean(e.startAdornment||e.filled||e.focused)}),fullWidth:l,inputComponent:s,multiline:p,ref:t,type:O},v,{classes:(0,o.Z)({},w,{notchedOutline:null})}))}));Z.muiName="Input";var O=Z},54656:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var i=n(28979);function o(e){return(0,i.Z)("MuiOutlinedInput",e)}const r=(0,n(76087).Z)("MuiOutlinedInput",["root","colorSecondary","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","notchedOutline","input","inputSizeSmall","inputMultiline","inputAdornedStart","inputAdornedEnd"]);t.Z=r},7420:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboards/helpdesk",function(){return n(91684)}])},91684:function(e,t,n){"use strict";n.r(t);var i=n(85893),o=n(9008),r=n(21521),d=n(91683),l=n(40179);function a(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:"Helpdesk Dashboard"})}),(0,i.jsx)(l.Z,{})]})}a.getLayout=function(e){return(0,i.jsx)(d._,{children:(0,i.jsx)(r.Z,{children:e})})},t.default=a}},function(e){e.O(0,[9774,6974,4350,6835,447,9258,3825,5464,5927,3970,9048,3548,9927,8360,9755,3133,9073,633,7171,2503,6367,7100,1521,4134,2888,179],(function(){return t=7420,e(e.s=t);var t}));var t=e.O();_N_E=t}]);