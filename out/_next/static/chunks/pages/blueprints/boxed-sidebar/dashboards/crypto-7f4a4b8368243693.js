(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5429,6123],{8993:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blueprints/boxed-sidebar/dashboards/crypto",function(){return t(52403)}])},52403:function(n,e,t){"use strict";t.r(e);var a=t(85893),o=t(9008),r=t(94064),i=t(91683),s=t(87166);function c(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{children:(0,a.jsx)("title",{children:"Crypto Dashboard"})}),(0,a.jsx)(s.Z,{})]})}c.getLayout=function(n){return(0,a.jsx)(i._,{children:(0,a.jsx)(r.Z,{children:n})})},e.default=c},49735:function(n,e,t){"use strict";t.d(e,{k:function(){return a}});var a=(0,t(5152).default)((function(){return Promise.all([t.e(5279),t.e(7229)]).then(t.bind(t,47229))}),{loadableGenerated:{webpack:function(){return[47229]},modules:["..\\src\\components\\Chart\\index.js -> react-apexcharts"]},ssr:!1})},86123:function(n,e,t){"use strict";t.d(e,{Z:function(){return q}});var a,o=t(85893),r=t(67294),i=t(11496),s=t(87357),c=t(41796),d=t(78462),l=t(75438),u=t(11163),b=t(86010),p=t(41148),m=t(41664),g=t(45697),h=t.n(g),x=t(58756),f=t(48999),k=t(97212),v=t(11057),y=t(26926),j=t(57922),Z=t(31567),I=t(22993),M=t(79126);function w(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function C(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),a.forEach((function(e){w(n,e,t[e])}))}return n}function T(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var B=(0,i.ZP)((function(n){var e=n.className,t=T(n,["className"]);return(0,o.jsx)(x.Z,C({},t,{classes:{popper:e}}))}))((function(n){var e=n.theme;return w(a={},"& .".concat(f.Z.tooltip),{backgroundColor:e.colors.alpha.black[100],color:e.palette.getContrastText(e.colors.alpha.black[100]),fontSize:e.typography.pxToRem(12),fontWeight:"bold",borderRadius:e.general.borderRadiusSm,boxShadow:"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"}),w(a,"& .".concat(f.Z.arrow),{color:e.colors.alpha.black[100]}),a})),P=function(n){var e=n.children,t=n.link,a=n.icon,i=n.badge,s=n.badgeTooltip,c=n.open,d=n.active,l=n.name,u=T(n,["children","link","icon","badge","badgeTooltip","open","active","name"]),g=(0,r.useState)(c),h=g[0],x=g[1],f=(0,Z.$)().t,w=(0,r.useContext)(p.l).closeSidebar;return e?(0,o.jsxs)(k.ZP,C({component:"div",className:"Mui-children"},u,{children:[(0,o.jsxs)(v.Z,{disableRipple:!0,className:(0,b.Z)({"Mui-active":h}),startIcon:a&&(0,o.jsx)(a,{}),endIcon:h?(0,o.jsx)(I.Z,{}):(0,o.jsx)(M.Z,{}),onClick:function(){x((function(n){return!n}))},children:[s?(0,o.jsx)(B,{title:s,arrow:!0,placement:"right",children:""===i?(0,o.jsx)(y.Z,{color:"primary",variant:"dot"}):(0,o.jsx)(y.Z,{badgeContent:i})}):""===i?(0,o.jsx)(y.Z,{color:"primary",variant:"dot"}):(0,o.jsx)(y.Z,{badgeContent:i}),f(l)]}),(0,o.jsx)(j.Z,{in:h,children:e})]}),l):(0,o.jsx)(k.ZP,C({component:"div"},u,{children:(0,o.jsx)(m.default,{href:t,passHref:!0,children:(0,o.jsxs)(v.Z,{disableRipple:!0,component:"a",className:(0,b.Z)({"Mui-active":d}),onClick:w,startIcon:a&&(0,o.jsx)(a,{}),children:[f(l),s?(0,o.jsx)(B,{title:s,arrow:!0,placement:"right",children:""===i?(0,o.jsx)(y.Z,{color:"primary",variant:"dot"}):(0,o.jsx)(y.Z,{badgeContent:i})}):""===i?(0,o.jsx)(y.Z,{color:"primary",variant:"dot"}):(0,o.jsx)(y.Z,{badgeContent:i})]})})}),l)};P.propTypes={children:h().node,active:h().bool,link:h().string,icon:h().elementType,badge:h().string,badgeTooltip:h().string,open:h().bool,name:h().string.isRequired},P.defaultProps={open:!1,active:!1};var S=P,R=t(47480),O=t(39269),_=t(54870),E=t(50372),A=t(80173),N=t(32212),L=[{heading:"General",items:[{name:"Blueprints",icon:A.Z,items:[{name:"Extended Sidebar",link:"/dashboards/reports",badge:"v3.0",badgeTooltip:"Added in version 3.0"},{name:"Accent Header",link:"/blueprints/accent-header/dashboards/reports",badge:"",badgeTooltip:"Updated"},{name:"Accent Sidebar",link:"/blueprints/accent-sidebar/dashboards/reports"},{name:"Boxed Sidebar",link:"/blueprints/boxed-sidebar/dashboards/reports"},{name:"Collapsed Sidebar",link:"/blueprints/collapsed-sidebar/dashboards/reports"},{name:"Bottom Navigation",link:"/blueprints/bottom-navigation/dashboards/reports"},{name:"Top Navigation",link:"/blueprints/top-navigation/dashboards/reports"}]},{name:"Dashboards",icon:N.Z,link:"/blueprints/boxed-sidebar/dashboards",items:[{name:"Reports",link:"/blueprints/boxed-sidebar/dashboards/reports",badge:"",badgeTooltip:"Reports Dashboard - version 3.0"},{name:"Expenses",link:"/blueprints/boxed-sidebar/dashboards/expenses",badge:"",badgeTooltip:"Expenses Dashboard - version 3.0"},{name:"Products",link:"/blueprints/boxed-sidebar/dashboards/products",badge:"",badgeTooltip:"Products Dashboard - version 3.0"},{name:"Statistics",link:"/blueprints/boxed-sidebar/dashboards/statistics",badge:"",badgeTooltip:"Statistics Dashboard - version 3.0"},{name:"Automation",link:"/blueprints/boxed-sidebar/dashboards/automation"},{name:"Analytics",link:"/blueprints/boxed-sidebar/dashboards/analytics"},{name:"Banking",link:"/blueprints/boxed-sidebar/dashboards/banking"},{name:"Commerce",link:"/blueprints/boxed-sidebar/dashboards/commerce"},{name:"Crypto",link:"/blueprints/boxed-sidebar/dashboards/crypto"},{name:"Finance",link:"/blueprints/boxed-sidebar/dashboards/finance"},{name:"Fitness",link:"/blueprints/boxed-sidebar/dashboards/fitness"},{name:"Healthcare",link:"/blueprints/boxed-sidebar/dashboards/healthcare",items:[{name:"Doctors",link:"/blueprints/boxed-sidebar/dashboards/healthcare/doctor"},{name:"Hospital",link:"/blueprints/boxed-sidebar/dashboards/healthcare/hospital"}]},{name:"Helpdesk",link:"/blueprints/boxed-sidebar/dashboards/helpdesk"},{name:"Learning",link:"/blueprints/boxed-sidebar/dashboards/learning"},{name:"Monitoring",link:"/blueprints/boxed-sidebar/dashboards/monitoring"},{name:"Tasks",link:"/blueprints/boxed-sidebar/dashboards/tasks"}]}]},{heading:"Extra Pages",items:[{name:"Auth Pages",icon:R.Z,items:[{name:"Login",items:[{name:"Basic",link:"/auth/login/basic?demo=true"},{name:"Cover",link:"/auth/login/cover?demo=true"}]},{name:"Register",items:[{name:"Basic",link:"/auth/register/basic?demo=true"},{name:"Cover",link:"/auth/register/cover?demo=true"},{name:"Wizard",link:"/auth/register/wizard?demo=true"}]},{name:"Recover Password",link:"/auth/recover-password?demo=true"}]},{name:"Status",icon:O.Z,items:[{name:"Error 404",link:"/status/404"},{name:"Error 500",link:"/status/500"},{name:"Maintenance",link:"/status/maintenance"},{name:"Coming Soon",link:"/status/coming-soon"}]}]},{heading:"Foundation",items:[{name:"Overview",link:"/",icon:_.Z},{name:"Documentation",icon:E.Z,link:"/docs"}]}],z=(0,i.ZP)(s.Z)((function(n){var e=n.theme;return"\n  .MuiList-root {\n    margin-bottom: ".concat(e.spacing(1.5),";\n    padding: 0;\n\n    & > .MuiList-root {\n      padding: 0 ").concat(e.spacing(0)," ").concat(e.spacing(1),";\n    }\n  }\n\n    .MuiListSubheader-root {\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: ").concat(e.typography.pxToRem(12),";\n      color: ").concat(e.sidebar.menuItemIconColor,";\n      padding: ").concat(e.spacing(1,3.5),";\n      line-height: 1.4;\n    }\n")})),D=(0,i.ZP)(s.Z)((function(n){var e=n.theme;return"\n    .MuiList-root {\n      padding: 0;\n\n      .MuiListItem-root {\n        padding: 1px ".concat(e.spacing(2),";\n    \n        .MuiButton-root {\n          display: flex;\n          color: ").concat(e.sidebar.menuItemColor,";\n          background-color: ").concat(e.sidebar.menuItemBg,";\n          width: 100%;\n          justify-content: flex-start;\n          padding: ").concat(e.spacing(1,2),";\n          position: relative;\n\n          .MuiBadge-root {\n            position: absolute;\n            right: ").concat(e.spacing(3.5),";\n\n            .MuiBadge-standard {\n              background: ").concat(e.colors.primary.main,";\n              border-radius: ").concat(e.general.borderRadiusSm,";\n              font-size: ").concat(e.typography.pxToRem(10),";\n              font-weight: bold;\n              text-transform: uppercase;\n              color: ").concat(e.palette.primary.contrastText,";\n            }\n          }\n    \n          .MuiButton-startIcon,\n          .MuiButton-endIcon {\n            transition: ").concat(e.transitions.create(["color"]),";\n\n            .MuiSvgIcon-root {\n              font-size: inherit;\n              transition: none;\n            }\n          }\n\n          .MuiButton-startIcon {\n            transition: ").concat(e.transitions.create(["all"]),";\n            border-radius: ").concat(e.general.borderRadius,";\n            background: ").concat((0,c.$n)(e.sidebar.menuItemBgActive,.1),";\n            box-shadow: 0px 1px 2px 0 ").concat((0,c.Fq)((0,c._j)(e.sidebar.menuItemIconColor,.2),.46),";\n            font-size: ").concat(e.typography.pxToRem(18),";\n            margin-right: ").concat(e.spacing(1.5),";\n            width: 36px;\n            height: 36px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: ").concat("dark"===e.palette.mode?(0,c.$n)(e.sidebar.menuItemBgActive,.8):e.sidebar.menuItemIconColor,";\n          }\n          \n          .MuiButton-endIcon {\n            margin-left: auto;\n            font-size: ").concat(e.typography.pxToRem(20),";\n          }\n          \n          .MuiButton-StartIcon {\n            font-size: ").concat(e.typography.pxToRem(20),";\n          }\n\n          &.Mui-active,\n          &:hover {\n            color: ").concat(e.sidebar.menuItemColorActive,";\n\n            .MuiButton-startIcon,\n            .MuiButton-endIcon {\n                color: ").concat(e.sidebar.menuItemColorActive,";\n            }\n          }\n\n          &.Mui-active {\n            background-color: ").concat((0,c.Fq)(e.sidebar.menuItemBgActive,.8),";\n            box-shadow: 0px 1px 2px 0 ").concat((0,c.Fq)((0,c._j)(e.sidebar.menuItemIconColor,.2),.46),";\n            color: ").concat(e.sidebar.menuItemColorActive,";\n            font-weight: bold;\n\n\n            .MuiButton-startIcon {\n                background: ").concat(e.colors.primary.main,";\n                color: ").concat(e.palette.primary.contrastText,";\n            }\n          }\n        }\n\n        &.Mui-children {\n          flex-direction: column;\n\n          .MuiBadge-root {\n            position: absolute;\n            right: ").concat(e.spacing(6),";\n          }\n        }\n\n        .MuiCollapse-root {\n          width: 100%;\n\n          .MuiList-root {\n            padding: ").concat(e.spacing(1.5,0),";\n          }\n\n          .MuiListItem-root {\n            padding: ").concat(e.spacing(0),";\n\n            .MuiButton-root {\n              padding: ").concat(e.spacing(.7,2,.7,7),";\n\n              .MuiBadge-root {\n                right: ").concat(e.spacing(2.5),";\n              }\n\n              &.Mui-active,\n              &:hover {\n                box-shadow: none;\n                background-color: ").concat(e.sidebar.menuItemBg,";\n              }\n            }\n          }\n        }\n      }\n    }\n")})),F=function(n){var e=n.items,t=n.path;return(0,o.jsx)(D,{children:(0,o.jsx)(d.Z,{component:"div",children:e.reduce((function(n,e){return H({ev:n,item:e,path:t})}),[])})})},H=function(n){var e=n.ev,t=n.path,a=n.item,r=a.name,i=t.includes(a.link),s=t===a.link;return a.items?e.push((0,o.jsx)(S,{active:i,open:i,name:a.name,icon:a.icon,link:a.link,badge:a.badge,badgeTooltip:a.badgeTooltip,children:F({path:t,items:a.items})},r)):e.push((0,o.jsx)(S,{active:s,name:a.name,link:a.link,badge:a.badge,badgeTooltip:a.badgeTooltip,icon:a.icon},r)),e};var q=function(){var n=(0,Z.$)().t,e=(0,u.useRouter)();return(0,r.useEffect)((function(){e.isReady}),[e.isReady,e.asPath]),(0,o.jsx)(o.Fragment,{children:L.map((function(t){return(0,o.jsx)(z,{children:(0,o.jsx)(d.Z,{component:"div",subheader:(0,o.jsx)(l.Z,{component:"div",disableSticky:!0,children:n(t.heading)}),children:F({items:t.items,path:e.asPath})})},t.heading)}))})}}},function(n){n.O(0,[9774,6974,4350,6835,447,9258,3825,5464,5927,3970,9048,3548,9927,6668,8360,2079,3133,7171,2077,3513,3367,839,6367,7100,4064,7166,2888,179],(function(){return e=8993,n(n.s=e);var e}));var e=n.O();_N_E=e}]);