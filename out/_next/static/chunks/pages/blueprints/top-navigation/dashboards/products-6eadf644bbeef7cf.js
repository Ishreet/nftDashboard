(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6568,7100,585],{44109:function(n,e,r){"use strict";var t=r(95318);e.Z=void 0;var a=t(r(64938)),o=r(85893),i=(0,a.default)([(0,o.jsx)("path",{d:"M11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3zm1 13.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z",opacity:".3"},"0"),(0,o.jsx)("path",{d:"M11.5 1C6.26 1 2 5.26 2 10.5c0 5.07 3.99 9.23 9 9.49v3.6l1.43-.69C17.56 20.43 21 15.45 21 10.5 21 5.26 16.74 1 11.5 1zM13 20.3V18h-1.5C7.36 18 4 14.64 4 10.5S7.36 3 11.5 3 19 6.36 19 10.5c0 3.73-2.36 7.51-6 9.8zm-2.5-5.8h2v2h-2zm1-10.5c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"},"1")],"ContactSupportTwoTone");e.Z=i},59496:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blueprints/top-navigation/dashboards/products",function(){return r(60963)}])},60963:function(n,e,r){"use strict";r.r(e);var t=r(85893),a=r(9008),o=r(3590),i=r(91683),c=r(49079);function s(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("title",{children:"Products Dashboard"})}),(0,t.jsx)(c.Z,{})]})}s.getLayout=function(n){return(0,t.jsx)(i._,{children:(0,t.jsx)(o.Z,{children:n})})},e.default=s},91683:function(n,e,r){"use strict";r.d(e,{_:function(){return u}});var t=r(85893),a=r(67294),o=r(11163),i=r(45697),c=r.n(i),s=r(77364),l=r(73400),d=r(54776),u=function(n){var e=n.children,r=(0,s.a)(),i=(0,o.useRouter)(),c=(0,a.useState)(!1),u=c[0],p=c[1],h=(0,l.Ds)().enqueueSnackbar;return(0,a.useEffect)((function(){i.isReady&&(r.isAuthenticated?(p(!0),h("You are successfully authenticated!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:2e3,TransitionComponent:d.Z})):i.push({pathname:"/auth/login/cover",query:{backTo:i.asPath}}))}),[i.isReady]),u?(0,t.jsx)(t.Fragment,{children:e}):null};u.propTypes={children:c().node}},49735:function(n,e,r){"use strict";r.d(e,{k:function(){return t}});var t=(0,r(5152).default)((function(){return Promise.all([r.e(5279),r.e(7229)]).then(r.bind(r,47229))}),{loadableGenerated:{webpack:function(){return[47229]},modules:["..\\src\\components\\Chart\\index.js -> react-apexcharts"]},ssr:!1})},20559:function(n,e,r){"use strict";var t=r(85893),a=r(11496),o=r(87357),i=r(58756),c=r(48999),s=r(2734),l=r(79586);function d(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function u(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var p,h=(0,a.ZP)(l.C)((function(n){var e=n.theme;return"\n        color: ".concat(e.palette.text.primary,";\n        display: flex;\n        text-decoration: none;\n        width: 53px;\n        margin: 0 auto;\n        font-weight: ").concat(e.typography.fontWeightBold,";\n")})),m=((0,a.ZP)(o.Z)((function(){return"\n        width: 52px;\n        height: 38px;\n"})),(0,a.ZP)(o.Z)((function(n){var e=n.theme;return"\n        background: ".concat(e.general.reactFrameworkColor,";\n        width: 18px;\n        height: 18px;\n        border-radius: ").concat(e.general.borderRadiusSm,';\n        position: relative;\n        transform: rotate(45deg);\n        top: 3px;\n        left: 17px;\n\n        &:after, \n        &:before {\n            content: "";\n            display: block;\n            width: 18px;\n            height: 18px;\n            position: absolute;\n            top: -1px;\n            right: -20px;\n            transform: rotate(0deg);\n            border-radius: ').concat(e.general.borderRadiusSm,";\n        }\n\n        &:before {\n            background: ").concat(e.palette.primary.main,";\n            right: auto;\n            left: 0;\n            top: 20px;\n        }\n\n        &:after {\n            background: ").concat(e.palette.secondary.main,";\n        }\n")})),(0,a.ZP)(o.Z)((function(n){var e=n.theme;return"\n        width: 16px;\n        height: 16px;\n        position: absolute;\n        top: 12px;\n        left: 12px;\n        z-index: 5;\n        border-radius: ".concat(e.general.borderRadiusSm,";\n        background: ").concat(e.header.background,";\n")})),(0,a.ZP)((function(n){var e=n.className,r=u(n,["className"]);return(0,t.jsx)(i.Z,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){d(n,e,r[e])}))}return n}({},r,{classes:{popper:e}}))}))((function(n){var e=n.theme;return d(p={},"& .".concat(c.Z.tooltip),{backgroundColor:e.colors.alpha.trueWhite[100],color:e.palette.getContrastText(e.colors.alpha.trueWhite[100]),fontSize:e.typography.pxToRem(12),fontWeight:"bold",borderRadius:e.general.borderRadiusSm,boxShadow:"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"}),d(p,"& .".concat(c.Z.arrow),{color:e.colors.alpha.trueWhite[100]}),p})));e.Z=function(){return(0,s.Z)(),(0,t.jsx)(m,{title:"Kapital Logo",arrow:!0,children:(0,t.jsx)(h,{href:"/",children:(0,t.jsx)("img",{src:"/static/images/logo/KapitalLogo.png",height:65,width:215})})})}},17085:function(n,e,r){"use strict";var t=r(85893),a=r(45697),o=r.n(a),i=r(86658),c=r(2734),s=r(87357);function l(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function d(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var u=function(n){n.className;var e=n.children,r=d(n,["className","children"]),a=(0,c.Z)();return(0,t.jsx)(i.$B,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){l(n,e,r[e])}))}return n}({autoHide:!0,universal:!0,renderThumbVertical:function(){return(0,t.jsx)(s.Z,{sx:{width:5,background:"".concat(a.colors.alpha.black[10]),borderRadius:"".concat(a.general.borderRadiusLg),transition:"".concat(a.transitions.create(["background"])),"&:hover":{background:"".concat(a.colors.alpha.black[30])}}})}},r,{children:e}))};u.propTypes={children:o().node,className:o().string},e.Z=u},26121:function(n,e,r){"use strict";var t=r(85893),a=r(67294),o=r(11496),i=r(87357),c=r(58756),s=r(14564),l=r(15861),d=r(11057),u=r(25464),p=r(18972),h=r(67720),m=r(26447),b=r(86567),g=r(17176),f=r(92122),x=r(58032),v=r(31567),j=r(71393),y=r(79586),Z=(0,o.ZP)(i.Z)((function(n){var e=n.theme;return"\n          position: fixed;\n          z-index: 9999;\n          right: ".concat(e.spacing(4),";\n          bottom: ").concat(e.spacing(4),";\n          \n          &::before {\n              width: 30px;\n              height: 30px;\n              content: ' ';\n              position: absolute;\n              border-radius: 100px;\n              left: 13px;\n              top: 13px;\n              background: ").concat(e.colors.primary.main,";\n              animation: ripple 1s infinite;\n              transition: ").concat(e.transitions.create(["all"]),";\n          }\n\n          .MuiSvgIcon-root {\n            animation: pulse 1s infinite;\n            transition: ").concat(e.transitions.create(["all"]),";\n          }\n  ")})),k=(0,o.ZP)(i.Z)((function(n){var e=n.theme;return"\n          padding: ".concat(e.spacing(2),";\n          min-width: 220px;\n  ")})),w=(0,o.ZP)(i.Z)((function(n){var e=n.theme;return"\n        cursor: pointer;\n        position: relative;\n        border-radius: ".concat(e.general.borderRadiusXl,";\n        padding: ").concat(e.spacing(.8),";\n        display: flex;\n        flex-direction: row;\n        align-items: stretch;\n        min-width: 80px;\n        box-shadow: 0 0 0 2px ").concat(e.colors.primary.lighter,";\n\n        &:hover {\n            box-shadow: 0 0 0 2px ").concat(e.colors.primary.light,";\n        }\n\n        &.active {\n            box-shadow: 0 0 0 2px ").concat(e.palette.primary.main,";\n\n            .colorSchemeWrapper {\n                opacity: .6;\n            }\n        }\n  ")})),S=(0,o.ZP)(i.Z)((function(n){var e=n.theme;return"\n\n    position: relative;\n\n    border-radius: ".concat(e.general.borderRadiusXl,";\n    height: 28px;\n    \n    &.colorSchemeWrapper {\n        display: flex;\n        align-items: stretch;\n        width: 100%;\n\n        .primary {\n            border-top-left-radius: ").concat(e.general.borderRadiusXl,";\n            border-bottom-left-radius: ").concat(e.general.borderRadiusXl,";\n        }\n\n        .secondary {\n            border-top-right-radius: ").concat(e.general.borderRadiusXl,";\n            border-bottom-right-radius: ").concat(e.general.borderRadiusXl,";\n        }\n\n        .primary,\n        .secondary,\n        .alternate {\n            flex: 1;\n        }\n    }\n\n    &.pureLight {\n        .primary {\n            background: #5569ff;\n        }\n    \n        .secondary {\n            background: #f2f5f9;\n        }\n    }\n\n    &.greyGoose {\n        .primary {\n            background: #2442AF;\n        }\n    \n        .secondary {\n            background: #F8F8F8;\n        }\n    }\n    \n    &.purpleFlow {\n        .primary {\n            background: #9b52e1;\n        }\n    \n        .secondary {\n            background: #00b795;\n        }\n    }\n    \n    &.nebulaFighter {\n        .primary {\n            background: #8C7CF0;\n        }\n    \n        .secondary {\n            background: #070C27;\n        }\n    }\n\n    &.greenFields {\n        .primary {\n            background: #44a574;\n        }\n    \n        .secondary {\n            background: #141c23;\n        }\n    }\n\n    &.darkSpaces {\n        .primary {\n            background: #CB3C1D;\n        }\n    \n        .secondary {\n            background: #1C1C1C;\n        }\n    }\n\n  ")})),C=(0,o.ZP)(i.Z)((function(n){var e=n.theme;return"\n    background: ".concat(e.palette.success.main,";\n    border-radius: 50px;\n    height: 26px;\n    width: 26px;\n    color: ").concat(e.palette.success.contrastText,";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin: -13px 0 0 -13px;\n    z-index: 5;\n\n    .MuiSvgIcon-root {\n        height: 16px;\n        width: 16px;\n    }\n\n  ")}));e.Z=function(){var n=(0,v.$)().t,e=(0,a.useRef)(null),r=(0,a.useState)(!1),o=r[0],P=r[1],T=(0,a.useContext)(b.N);(0,a.useEffect)((function(){var n=window.localStorage.getItem("appTheme")||"PureLightTheme";I(n)}),[]);var O=(0,a.useState)("PureLightTheme"),N=O[0],I=O[1],M=function(n){I(n),T(n)},R=(0,a.useState)(null),F=R[0],z=R[1],B=Boolean(F);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(Z,{children:[(0,t.jsx)(c.Z,{arrow:!0,title:n("Theme Settings"),children:(0,t.jsx)(x.Z,{ref:e,onClick:function(){P(!0)},color:"primary","aria-label":"add",children:(0,t.jsx)(f.Z,{})})}),(0,t.jsxs)(s.ZP,{disableScrollLock:!0,anchorEl:e.current,onClose:function(){P(!1)},open:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[(0,t.jsxs)(i.Z,{p:2,children:[(0,t.jsx)(l.Z,{sx:{mb:2,textAlign:"center",fontWeight:"bold",textTransform:"uppercase"},variant:"body1",children:"Layout Blueprints"}),(0,t.jsx)(d.Z,{fullWidth:!0,size:"large",variant:"outlined",endIcon:(0,t.jsx)(j.Z,{}),color:"primary","aria-haspopup":"true","aria-expanded":B?"true":void 0,onClick:function(n){z(n.currentTarget)},children:"Choose layout"}),(0,t.jsxs)(u.Z,{disableScrollLock:!0,anchorEl:F,open:B,onClose:function(){z(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:[(0,t.jsx)(p.Z,{sx:{fontWeight:"bold"},component:y.C,href:"/dashboards/reports",children:"Extended Sidebar"}),(0,t.jsx)(p.Z,{sx:{fontWeight:"bold"},component:y.C,href:"/blueprints/accent-header/dashboards/reports",children:"Accent Header"}),(0,t.jsx)(p.Z,{sx:{fontWeight:"bold"},component:y.C,href:"/blueprints/accent-sidebar/dashboards/reports",children:"Accent Sidebar"}),(0,t.jsx)(p.Z,{sx:{fontWeight:"bold"},component:y.C,href:"/blueprints/boxed-sidebar/dashboards/reports",children:"Boxed Sidebar"}),(0,t.jsx)(p.Z,{sx:{fontWeight:"bold"},component:y.C,href:"/blueprints/collapsed-sidebar/dashboards/reports",children:"Collapsed Sidebar"}),(0,t.jsx)(p.Z,{sx:{fontWeight:"bold"},component:y.C,href:"/blueprints/bottom-navigation/dashboards/reports",children:"Bottom Navigation"}),(0,t.jsx)(p.Z,{sx:{fontWeight:"bold"},component:y.C,href:"/blueprints/top-navigation/dashboards/reports",children:"Top Navigation"})]})]}),(0,t.jsx)(h.Z,{}),(0,t.jsxs)(m.Z,{direction:"row",divider:(0,t.jsx)(h.Z,{orientation:"vertical",flexItem:!0}),children:[(0,t.jsxs)(k,{children:[(0,t.jsx)(l.Z,{sx:{mt:1,mb:3,textAlign:"center",fontWeight:"bold",textTransform:"uppercase"},variant:"body1",children:"Light color schemes"}),(0,t.jsxs)(m.Z,{alignItems:"center",spacing:2,children:[(0,t.jsx)(c.Z,{placement:"left",title:"Pure Light",arrow:!0,children:(0,t.jsxs)(w,{className:"PureLightTheme"===N?"active":"",onClick:function(){M("PureLightTheme")},children:["PureLightTheme"===N&&(0,t.jsx)(C,{children:(0,t.jsx)(g.Z,{})}),(0,t.jsxs)(S,{className:"colorSchemeWrapper pureLight",children:[(0,t.jsx)(i.Z,{className:"primary"}),(0,t.jsx)(i.Z,{className:"secondary"})]})]})}),(0,t.jsx)(c.Z,{placement:"left",title:"Grey Goose",arrow:!0,children:(0,t.jsxs)(w,{className:"GreyGooseTheme"===N?"active":"",onClick:function(){M("GreyGooseTheme")},children:["GreyGooseTheme"===N&&(0,t.jsx)(C,{children:(0,t.jsx)(g.Z,{})}),(0,t.jsxs)(S,{className:"colorSchemeWrapper greyGoose",children:[(0,t.jsx)(i.Z,{className:"primary"}),(0,t.jsx)(i.Z,{className:"secondary"})]})]})}),(0,t.jsx)(c.Z,{placement:"left",title:"Purple Flow",arrow:!0,children:(0,t.jsxs)(w,{className:"PurpleFlowTheme"===N?"active":"",onClick:function(){M("PurpleFlowTheme")},children:["PurpleFlowTheme"===N&&(0,t.jsx)(C,{children:(0,t.jsx)(g.Z,{})}),(0,t.jsxs)(S,{className:"colorSchemeWrapper purpleFlow",children:[(0,t.jsx)(i.Z,{className:"primary"}),(0,t.jsx)(i.Z,{className:"secondary"})]})]})})]})]}),(0,t.jsxs)(k,{children:[(0,t.jsx)(l.Z,{sx:{mt:1,mb:3,textAlign:"center",fontWeight:"bold",textTransform:"uppercase"},variant:"body1",children:"Dark color schemes"}),(0,t.jsxs)(m.Z,{alignItems:"center",spacing:2,children:[(0,t.jsx)(c.Z,{placement:"left",title:"Nebula Fighter",arrow:!0,children:(0,t.jsxs)(w,{className:"NebulaFighterTheme"===N?"active":"",onClick:function(){M("NebulaFighterTheme")},children:["NebulaFighterTheme"===N&&(0,t.jsx)(C,{children:(0,t.jsx)(g.Z,{})}),(0,t.jsxs)(S,{className:"colorSchemeWrapper nebulaFighter",children:[(0,t.jsx)(i.Z,{className:"primary"}),(0,t.jsx)(i.Z,{className:"secondary"})]})]})}),(0,t.jsx)(c.Z,{placement:"left",title:"Green Fields",arrow:!0,children:(0,t.jsxs)(w,{className:"GreenFieldsTheme"===N?"active":"",onClick:function(){M("GreenFieldsTheme")},children:["GreenFieldsTheme"===N&&(0,t.jsx)(C,{children:(0,t.jsx)(g.Z,{})}),(0,t.jsxs)(S,{className:"colorSchemeWrapper greenFields",children:[(0,t.jsx)(i.Z,{className:"primary"}),(0,t.jsx)(i.Z,{className:"secondary"})]})]})}),(0,t.jsx)(c.Z,{placement:"left",title:"Dark Spaces",arrow:!0,children:(0,t.jsxs)(w,{className:"DarkSpacesTheme"===N?"active":"",onClick:function(){M("DarkSpacesTheme")},children:["DarkSpacesTheme"===N&&(0,t.jsx)(C,{children:(0,t.jsx)(g.Z,{})}),(0,t.jsxs)(S,{className:"colorSchemeWrapper darkSpaces",children:[(0,t.jsx)(i.Z,{className:"primary"}),(0,t.jsx)(i.Z,{className:"secondary"})]})]})})]})]})]})]})]})})}},77364:function(n,e,r){"use strict";r.d(e,{a:function(){return o}});var t=r(67294),a=r(50694),o=function(){return(0,t.useContext)(a.Vo)}},83827:function(n,e,r){"use strict";r.d(e,{Z:function(){return G}});var t,a=r(85893),o=r(67294),i=r(11496),c=r(87357),s=r(78462),l=r(75438),d=r(86010),u=r(41148),p=r(41664),h=r(45697),m=r.n(h),b=r(58756),g=r(48999),f=r(97212),x=r(11057),v=r(26926),j=r(57922),y=r(31567),Z=r(22993),k=r(79126);function w(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function S(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){w(n,e,r[e])}))}return n}function C(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var P=(0,i.ZP)((function(n){var e=n.className,r=C(n,["className"]);return(0,a.jsx)(b.Z,S({},r,{classes:{popper:e}}))}))((function(n){var e=n.theme;return w(t={},"& .".concat(g.Z.tooltip),{backgroundColor:e.colors.alpha.black[100],color:e.palette.getContrastText(e.colors.alpha.black[100]),fontSize:e.typography.pxToRem(12),fontWeight:"bold",borderRadius:e.general.borderRadiusSm,boxShadow:"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"}),w(t,"& .".concat(g.Z.arrow),{color:e.colors.alpha.black[100]}),t})),T=function(n){var e=n.children,r=n.link,t=n.icon,i=n.badge,c=n.badgeTooltip,s=n.open,l=n.active,h=n.name,m=C(n,["children","link","icon","badge","badgeTooltip","open","active","name"]),b=(0,o.useState)(s),g=b[0],w=b[1],T=(0,y.$)().t,O=(0,o.useContext)(u.l).closeSidebar;return e?(0,a.jsxs)(f.ZP,S({component:"div",className:"Mui-children"},m,{children:[(0,a.jsxs)(x.Z,{className:(0,d.Z)({"Mui-active":g}),startIcon:t&&(0,a.jsx)(t,{}),endIcon:g?(0,a.jsx)(Z.Z,{}):(0,a.jsx)(k.Z,{}),onClick:function(){w((function(n){return!n}))},children:[c?(0,a.jsx)(P,{title:c,arrow:!0,placement:"right",children:""===i?(0,a.jsx)(v.Z,{color:"primary",variant:"dot"}):(0,a.jsx)(v.Z,{badgeContent:i})}):""===i?(0,a.jsx)(v.Z,{color:"primary",variant:"dot"}):(0,a.jsx)(v.Z,{badgeContent:i}),T(h)]}),(0,a.jsx)(j.Z,{in:g,children:e})]}),h):(0,a.jsx)(f.ZP,S({component:"div"},m,{children:(0,a.jsx)(p.default,{href:r,passHref:!0,children:(0,a.jsxs)(x.Z,{disableRipple:!0,component:"a",className:(0,d.Z)({"Mui-active":l}),onClick:O,startIcon:t&&(0,a.jsx)(t,{}),children:[T(h),c?(0,a.jsx)(P,{title:c,arrow:!0,placement:"right",children:""===i?(0,a.jsx)(v.Z,{color:"primary",variant:"dot"}):(0,a.jsx)(v.Z,{badgeContent:i})}):""===i?(0,a.jsx)(v.Z,{color:"primary",variant:"dot"}):(0,a.jsx)(v.Z,{badgeContent:i})]})})}),h)};T.propTypes={children:m().node,active:m().bool,link:m().string,icon:m().elementType,badge:m().string,badgeTooltip:m().string,open:m().bool,name:m().string.isRequired},T.defaultProps={open:!1,active:!1};var O=T,N=r(11163),I=r(47480),M=r(39269),R=r(54870),F=r(50372),z=r(80173),B=r(32212),W=[{heading:"General",items:[{name:"Blueprints",icon:z.Z,items:[{name:"Extended Sidebar",link:"/dashboards/reports",badge:"v3.0",badgeTooltip:"Added in version 3.0"},{name:"Accent Header",link:"/blueprints/accent-header/dashboards/reports",badge:"",badgeTooltip:"Updated"},{name:"Accent Sidebar",link:"/blueprints/accent-sidebar/dashboards/reports"},{name:"Boxed Sidebar",link:"/blueprints/boxed-sidebar/dashboards/reports"},{name:"Collapsed Sidebar",link:"/blueprints/collapsed-sidebar/dashboards/reports"},{name:"Bottom Navigation",link:"/blueprints/bottom-navigation/dashboards/reports"},{name:"Top Navigation",link:"/blueprints/top-navigation/dashboards/reports"}]},{name:"Dashboards",icon:B.Z,link:"/blueprints/accent-header/dashboards",items:[{name:"Reports",link:"/blueprints/accent-header/dashboards/reports",badge:"",badgeTooltip:"Reports Dashboard - version 3.0"},{name:"Expenses",link:"/blueprints/accent-header/dashboards/expenses",badge:"",badgeTooltip:"Expenses Dashboard - version 3.0"},{name:"Products",link:"/blueprints/accent-header/dashboards/products",badge:"",badgeTooltip:"Products Dashboard - version 3.0"},{name:"Statistics",link:"/blueprints/accent-header/dashboards/statistics",badge:"",badgeTooltip:"Statistics Dashboard - version 3.0"},{name:"Automation",link:"/blueprints/accent-header/dashboards/automation"},{name:"Analytics",link:"/blueprints/accent-header/dashboards/analytics"},{name:"Banking",link:"/blueprints/accent-header/dashboards/banking"},{name:"Commerce",link:"/blueprints/accent-header/dashboards/commerce"},{name:"Crypto",link:"/blueprints/accent-header/dashboards/crypto"},{name:"Finance",link:"/blueprints/accent-header/dashboards/finance"},{name:"Fitness",link:"/blueprints/accent-header/dashboards/fitness"},{name:"Healthcare",link:"/blueprints/accent-header/dashboards/healthcare",items:[{name:"Doctors",link:"/blueprints/accent-header/dashboards/healthcare/doctor"},{name:"Hospital",link:"/blueprints/accent-header/dashboards/healthcare/hospital"}]},{name:"Helpdesk",link:"/blueprints/accent-header/dashboards/helpdesk"},{name:"Learning",link:"/blueprints/accent-header/dashboards/learning"},{name:"Monitoring",link:"/blueprints/accent-header/dashboards/monitoring"},{name:"Tasks",link:"/blueprints/accent-header/dashboards/tasks"}]}]},{heading:"Extra Pages",items:[{name:"Auth Pages",icon:I.Z,items:[{name:"Login",items:[{name:"Basic",link:"/auth/login/basic?demo=true"},{name:"Cover",link:"/auth/login/cover?demo=true"}]},{name:"Register",items:[{name:"Basic",link:"/auth/register/basic?demo=true"},{name:"Cover",link:"/auth/register/cover?demo=true"},{name:"Wizard",link:"/auth/register/wizard?demo=true"}]},{name:"Recover Password",link:"/auth/recover-password?demo=true"}]},{name:"Status",icon:M.Z,items:[{name:"Error 404",link:"/status/404"},{name:"Error 500",link:"/status/500"},{name:"Maintenance",link:"/status/maintenance"},{name:"Coming Soon",link:"/status/coming-soon"}]}]},{heading:"Foundation",items:[{name:"Overview",link:"/",icon:R.Z},{name:"Documentation",icon:F.Z,link:"/docs"}]}],L=(0,i.ZP)(c.Z)((function(n){var e=n.theme;return"\n    .MuiList-root {\n      margin-bottom: ".concat(e.spacing(1.5),";\n      padding: 0;\n\n      & > .MuiList-root {\n        padding: 0 ").concat(e.spacing(0)," ").concat(e.spacing(1),";\n      }\n    }\n\n    .MuiListSubheader-root {\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: ").concat(e.typography.pxToRem(12),";\n      color: ").concat(e.sidebar.menuItemIconColor,";\n      padding: ").concat(e.spacing(1,3.5),";\n      line-height: 1.4;\n    }\n")})),E=(0,i.ZP)(c.Z)((function(n){var e=n.theme;return"\n    .MuiList-root {\n\n      .MuiListItem-root {\n        padding: 2px 0;\n        padding-left: ".concat(e.spacing(0),";\n        padding-right: ").concat(e.spacing(2),";\n\n        .MuiBadge-root {\n          position: absolute;\n          right: ").concat(e.spacing(3.5),";\n\n          .MuiBadge-standard {\n            background: ").concat(e.colors.primary.main,";\n            font-size: ").concat(e.typography.pxToRem(10),";\n            font-weight: bold;\n            text-transform: uppercase;\n            color: ").concat(e.palette.primary.contrastText,";\n          }\n        }\n    \n        .MuiButton-root {\n          display: flex;\n          color: ").concat(e.sidebar.menuItemColor,";\n          background-color: ").concat(e.sidebar.menuItemBg,";\n          width: 100%;\n          justify-content: flex-start;\n          padding: ").concat(e.spacing(1,3,1,4),";\n          border-bottom-left-radius: 0;\n          border-top-left-radius: 0;\n          border-bottom-right-radius: 50px;\n          border-top-right-radius: 50px;\n    \n          .MuiButton-startIcon,\n          .MuiButton-endIcon {\n            transition: ").concat(e.transitions.create(["color"]),";\n\n            .MuiSvgIcon-root {\n              font-size: inherit;\n              transition: none;\n            }\n          }\n\n          .MuiButton-startIcon {\n            font-size: ").concat(e.typography.pxToRem(20),";\n            margin-right: ").concat(e.spacing(1),";\n            color: ").concat(e.sidebar.menuItemIconColor,";\n          }\n          \n          .MuiButton-endIcon {\n            margin-left: auto;\n            opacity: .8;\n            font-size: ").concat(e.typography.pxToRem(20),";\n          }\n\n          &.Mui-active,\n          &:hover {\n            background-color: ").concat(e.sidebar.menuItemBgActive,";\n            color: ").concat(e.sidebar.menuItemColorActive,";\n\n            .MuiButton-startIcon,\n            .MuiButton-endIcon {\n                color: ").concat(e.sidebar.menuItemIconColorActive,";\n            }\n          }\n        }\n\n        &.Mui-children {\n          flex-direction: column;\n\n          .MuiBadge-root {\n            position: absolute;\n            right: ").concat(e.spacing(7.5),";\n          }\n        }\n\n        .MuiCollapse-root {\n          width: 100%;\n\n          .MuiList-root {\n            padding: ").concat(e.spacing(1,0),";\n          }\n\n          .MuiListItem-root {\n            padding: 0;\n            padding-left: ").concat(e.spacing(1.2),";\n\n            .MuiListItem-root {\n              padding: 0;\n            }\n\n            .MuiButton-root {\n              .MuiBadge-root {\n                right: ").concat(e.spacing(3.5),";\n              }\n            }\n\n            .MuiButton-root {\n              padding: ").concat(e.spacing(.7,3,.7,5.5),";\n\n              &.Mui-active,\n              &:hover {\n                background-color: ").concat(e.sidebar.menuItemBg,";\n              }\n            }\n          }\n        }\n      }\n    }\n")})),D=function(n){var e=n.items,r=n.path;return(0,a.jsx)(E,{children:(0,a.jsx)(s.Z,{component:"div",children:e.reduce((function(n,e){return A({ev:n,item:e,path:r})}),[])})})},A=function(n){var e=n.ev,r=n.path,t=n.item,o=t.name,i=r.includes(t.link),c=r===t.link;return t.items?e.push((0,a.jsx)(O,{active:i,open:i,name:t.name,icon:t.icon,link:t.link,badge:t.badge,badgeTooltip:t.badgeTooltip,children:D({path:r,items:t.items})},o)):e.push((0,a.jsx)(O,{active:c,name:t.name,link:t.link,badge:t.badge,badgeTooltip:t.badgeTooltip,icon:t.icon},o)),e};var G=function(){var n=(0,y.$)().t,e=(0,N.useRouter)();return(0,o.useEffect)((function(){e.isReady}),[e.isReady,e.asPath]),(0,a.jsx)(a.Fragment,{children:W.map((function(r){return(0,a.jsx)(L,{children:(0,a.jsx)(s.Z,{component:"div",subheader:(0,a.jsx)(l.Z,{component:"div",disableSticky:!0,children:n(r.heading)}),children:D({items:r.items,path:e.asPath})})},r.heading)}))})}},93976:function(n,e,r){"use strict";var t=r(28520),a=r.n(t),o=r(85893),i=r(67294),c=r(77364),s=r(11163),l=r(11496),d=r(11057),u=r(41796),p=r(87357),h=r(15861),m=r(87952),b=r(14564),g=r(67720),f=r(78462),x=r(97212),v=r(59334),j=r(31567),y=r(28847),Z=r(71393),k=r(86754),w=r(32321),S=r(17934);function C(n,e,r,t,a,o,i){try{var c=n[o](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(t,a)}var P=(0,l.ZP)(d.Z)((function(n){var e=n.theme;return"\n    padding: ".concat(e.spacing(1),";\n    background-color: ").concat((0,u.Fq)(e.colors.alpha.black[100],.08),";\n\n    .MuiButton-label {\n      justify-content: flex-start;\n    }\n\n    &:hover {\n      background-color: ").concat((0,u.Fq)(e.colors.alpha.black[100],.12),";\n    }\n")})),T=(0,l.ZP)(p.Z)((function(n){var e=n.theme;return"\n    background: ".concat(e.colors.alpha.black[5],";\n    padding: ").concat(e.spacing(2),";\n")})),O=(0,l.ZP)(p.Z)((function(n){var e=n.theme;return"\n    text-align: left;\n    padding-left: ".concat(e.spacing(1),";\n")})),N=(0,l.ZP)(h.Z)((function(n){var e=n.theme;return"\n    font-weight: ".concat(e.typography.fontWeightBold,";\n    color: ").concat(e.sidebar.menuItemColor,";\n    display: block;\n\n    &.popoverTypo {\n      color: ").concat(e.palette.secondary.main,";\n    }\n")})),I=(0,l.ZP)(h.Z)((function(n){var e=n.theme;return"\n    color: ".concat((0,u.Fq)(e.sidebar.menuItemColor,.6),";\n\n    &.popoverTypo {\n      color: ").concat(e.palette.secondary.light,";\n    }\n")}));e.Z=function(){var n,e=(0,j.$)().t,r=(0,c.a)().logout,t=(0,s.useRouter)(),l=(0,i.useRef)(null),u=(0,i.useState)(!1),h=u[0],M=u[1],R=function(){M(!1)},F=(n=a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,R(),n.next=4,r();case 4:t.push("/"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(t,a){var o=n.apply(e,r);function i(n){C(o,t,a,i,c,"next",n)}function c(n){C(o,t,a,i,c,"throw",n)}i(void 0)}))}),z="/static/images/avatars/1.jpg",B="Rachael Simons",W="Lead Developer";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(P,{fullWidth:!0,color:"secondary",ref:l,onClick:function(){M(!0)},children:[(0,o.jsx)(m.Z,{variant:"rounded",alt:B,src:z}),(0,o.jsxs)(p.Z,{display:"flex",flex:1,alignItems:"center",justifyContent:"space-between",children:[(0,o.jsxs)(O,{children:[(0,o.jsx)(N,{variant:"body1",children:B}),(0,o.jsx)(I,{variant:"body2",children:W})]}),(0,o.jsx)(Z.Z,{fontSize:"small",sx:{ml:1}})]})]}),(0,o.jsxs)(b.ZP,{disableScrollLock:!0,anchorEl:l.current,onClose:R,open:h,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:[(0,o.jsxs)(T,{sx:{minWidth:210},display:"flex",children:[(0,o.jsx)(m.Z,{variant:"rounded",alt:B,src:z}),(0,o.jsxs)(O,{children:[(0,o.jsx)(N,{className:"popoverTypo",variant:"body1",children:B}),(0,o.jsx)(I,{className:"popoverTypo",variant:"body2",children:W})]})]}),(0,o.jsx)(g.Z,{sx:{mb:0}}),(0,o.jsxs)(f.Z,{sx:{p:1},component:"nav",children:[(0,o.jsxs)(x.ZP,{onClick:function(){R()},button:!0,children:[(0,o.jsx)(k.Z,{fontSize:"small"}),(0,o.jsx)(v.Z,{primary:e("Profile")})]}),(0,o.jsxs)(x.ZP,{onClick:function(){R()},button:!0,children:[(0,o.jsx)(y.Z,{fontSize:"small"}),(0,o.jsx)(v.Z,{primary:e("Inbox")})]}),(0,o.jsxs)(x.ZP,{onClick:function(){R()},button:!0,children:[(0,o.jsx)(S.Z,{fontSize:"small"}),(0,o.jsx)(v.Z,{primary:e("Projects")})]})]}),(0,o.jsx)(g.Z,{}),(0,o.jsx)(p.Z,{m:1,children:(0,o.jsxs)(d.Z,{color:"primary",fullWidth:!0,onClick:F,children:[(0,o.jsx)(w.Z,{sx:{mr:1}}),e("Sign out")]})})]})]})}}},function(n){n.O(0,[9774,3662,6974,4350,6835,447,9258,3825,5464,5927,3970,9048,3548,9927,6668,8360,3133,135,7171,3394,1440,3320,2520,7525,3590,3881,2888,179],(function(){return e=59496,n(n.s=e);var e}));var e=n.O();_N_E=e}]);