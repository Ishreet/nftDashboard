"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6291],{92141:function(n,r,e){var a=e(85893),t=e(11496),i=e(66242),s=e(87357),o=e(15861),c=e(79586),l=(0,t.ZP)(i.Z)((function(n){var r=n.theme;return"\n        border-radius: 0;\n        margin-top: ".concat(r.spacing(4),";\n")}));r.Z=function(){return(0,a.jsx)(l,{className:"footer-wrapper",children:(0,a.jsxs)(s.Z,{p:4,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,a.jsx)(s.Z,{children:(0,a.jsx)(o.Z,{variant:"subtitle1",children:"\xa9 2022 - NFT Dashboard"})}),(0,a.jsxs)(o.Z,{sx:{pt:{xs:2,md:0}},variant:"subtitle1",children:["Created By"," ",(0,a.jsx)(c.C,{href:"https://kapitallabs.io/",target:"_blank",rel:"noopener noreferrer",children:"KapitalLabs.io"})]})]})})}},96331:function(n,r,e){var a=e(85893),t=e(45697),i=e.n(t),s=e(11496),o=e(95774);function c(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function l(n,r){if(null==n)return{};var e,a,t=function(n,r){if(null==n)return{};var e,a,t={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],r.indexOf(e)>=0||(t[e]=n[e]);return t}(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)e=i[a],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(t[e]=n[e])}return t}var h=(0,s.ZP)(o.Wo)((function(n){var r=n.theme;return'\n  \n  &.CircularProgressbar {\n    vertical-align: middle;\n    width: 80%;\n    margin: 0 auto;\n    display: flex;\n    \n    & + [data-test-id="CircularProgressbarWithChildren__children"] {\n      margin-top: 0 !important;\n      top: 0;\n    }\n\n    .CircularProgressbar-path {\n      stroke-linecap: round;\n      transition: stroke-dashoffset 0.5s ease 0s;\n    }\n  \n    .CircularProgressbar-trail {\n      stroke-linecap: round;\n    }\n    \n    .CircularProgressbar-text {\n      font-size: '.concat(r.typography.pxToRem(15),";\n      dominant-baseline: middle;\n      text-anchor: middle;\n      font-weight: bold;\n    }\n  \n    &.MuiGauge {\n      &-xsmall {\n        max-width: 48px;\n      }\n      &-small {\n        max-width: 62px;\n        .CircularProgressbar-text {\n          font-weight: bold;\n          font-size: ").concat(r.typography.pxToRem(24),";\n        }\n      }\n      &-medium {\n        max-width: 120px;\n      }\n      &-large {\n        max-width: 140px;\n      }\n      &-xlarge {\n        max-width: 180px;\n      }\n      &-xxlarge {\n        max-width: 230px;\n      }\n      \n      &-primary {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.primary.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.primary.main,", .05);\n        }\n      }\n\n      &-success {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.success.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.success.main,", .05);\n        }\n      }\n\n      &-warning {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.warning.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.warning.main,", .05);\n        }\n      }\n      \n      &-error {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.error.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.error.main,", .05);\n        }\n      }\n      \n      &-info {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.info.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.info.main,", .05);\n        }\n      }\n\n      &-success {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.success.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.success.main,", .05);\n        }\n      }\n\n      &-warning {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.warning.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.warning.main,", .05);\n        }\n      }\n      \n      &-error {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.error.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.error.main,", .05);\n        }\n      }\n      \n      &-info {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.info.main,";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.black[10],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.black[100],";\n        }\n    \n        .CircularProgressbar-background {\n          fill: rgba(").concat(r.colors.info.main,", .05);\n        }\n      }\n      \n      &-white {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.alpha.white[100],";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.white[30],";\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.white[100],";\n        }\n      }\n\n      &-trueWhite {\n\n        .CircularProgressbar-path {\n          stroke: ").concat(r.colors.alpha.trueWhite[100],";\n        }\n    \n        .CircularProgressbar-trail {\n          stroke: ").concat(r.colors.alpha.trueWhite[30],";;\n        }\n    \n        .CircularProgressbar-text {\n          fill: ").concat(r.colors.alpha.trueWhite[100],";\n        }\n      }\n    }\n  }\n")})),d=function(n){n.className;var r=n.color,e=void 0===r?"primary":r,t=n.size,i=void 0===t?"medium":t,s=n.circleRatio,o=n.value,d=n.styles,x=n.text,g=n.strokeWidth,u=n.children,p=l(n,["className","color","size","circleRatio","value","styles","text","strokeWidth","children"]);return(0,a.jsx)(h,function(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),a.forEach((function(r){c(n,r,e[r])}))}return n}({circleRatio:s,value:o,text:x,strokeWidth:g,styles:d,className:"MuiGauge-".concat(e," MuiGauge-").concat(i)},p,{children:u}))};d.propTypes={children:i().node,className:i().string,styles:i().any,value:i().number,text:i().any,strokeWidth:i().number,circleRatio:i().number,color:i().oneOf(["primary","secondary","error","warning","success","info","white","trueWhite"]),size:i().oneOf(["xsmall","small","medium","large","xlarge","xxlarge"])},r.Z=d},53033:function(n,r,e){var a=e(85893),t=e(45697),i=e.n(t),s=e(11496),o=e(87357),c=(0,s.ZP)(o.Z)((function(n){var r=n.theme;return"\n        padding: ".concat(r.spacing(4),";\n")})),l=function(n){var r=n.children;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c,{className:"MuiPageTitle-wrapper",children:r})})};l.propTypes={children:i().node.isRequired},r.Z=l},26291:function(n,r,e){e.d(r,{Z:function(){return Mn}});var a=e(85893),t=e(5152),i=e(2734),s=e(86886),o=e(87952),c=e(15861),l=e(77364),h=e(31567),d=e(32912);var x=function(){var n=(0,h.$)().t,r=(0,l.a)().user,e=(0,i.Z)();return(0,a.jsxs)(s.ZP,{container:!0,alignItems:"center",children:[(0,a.jsx)(s.ZP,{item:!0,children:(0,a.jsx)(o.Z,{sx:{mr:2,width:e.spacing(8),height:e.spacing(8)},variant:"rounded",alt:r.name,src:r.avatar})}),(0,a.jsxs)(s.ZP,{item:!0,children:[(0,a.jsxs)(c.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:[n("Welcome"),", ",r.name,"!"]}),(0,a.jsxs)(c.Z,{variant:"subtitle2",children:[n("These are your analytics stats for today"),","," ",(0,a.jsx)("b",{children:(0,d.Z)(new Date,"MMMM dd yyyy")})]})]})]})},g=e(53033),u=e(92141),p=e(11496),m=e(66242),j=e(87357),b=e(88441),Z=e(19686),v=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      width: ".concat(r.spacing(7),";\n      height: ").concat(r.spacing(7),";\n      border-radius: ").concat(r.general.borderRadius,";\n      background-color: ").concat(r.colors.success.lighter,";\n      color:  ").concat(r.colors.success.main,";\n      margin-bottom: ").concat(r.spacing(3),";\n")}));var y=function(){var n=(0,h.$)().t;return(0,a.jsxs)(m.Z,{sx:{p:3},children:[(0,a.jsx)(v,{children:(0,a.jsx)(Z.Z,{})}),(0,a.jsx)(c.Z,{variant:"h3",sx:{pb:1},children:n("Steps")}),(0,a.jsx)(c.Z,{color:"text.primary",variant:"h1",sx:{pr:.5,display:"inline-flex"},children:"4500"}),(0,a.jsx)(c.Z,{color:"text.secondary",variant:"h4",sx:{pr:2,display:"inline-flex"},children:"/10000"}),(0,a.jsx)(j.Z,{pt:3,children:(0,a.jsx)(b.Z,{value:45,color:"primary",variant:"determinate"})})]})},f=e(446),P=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      width: ".concat(r.spacing(7),";\n      height: ").concat(r.spacing(7),";\n      border-radius: ").concat(r.general.borderRadius,";\n      background-color: ").concat(r.colors.info.lighter,";\n      color:  ").concat(r.colors.info.main,";\n      margin-bottom: ").concat(r.spacing(3),";\n")}));var k=function(){var n=(0,h.$)().t;return(0,a.jsxs)(m.Z,{sx:{p:3},children:[(0,a.jsx)(P,{children:(0,a.jsx)(f.Z,{})}),(0,a.jsx)(c.Z,{variant:"h3",sx:{pb:1},children:n("Energy")}),(0,a.jsx)(c.Z,{color:"text.primary",variant:"h1",sx:{pr:.5,display:"inline-flex"},children:"12%"}),(0,a.jsx)(j.Z,{pt:3,children:(0,a.jsx)(b.Z,{value:12,color:"primary",variant:"determinate"})})]})},w=e(58926),C=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      width: ".concat(r.spacing(7),";\n      height: ").concat(r.spacing(7),";\n      border-radius: ").concat(r.general.borderRadius,";\n      background-color: ").concat(r.colors.warning.lighter,";\n      color:  ").concat(r.colors.warning.main,";\n      margin-bottom: ").concat(r.spacing(3),";\n")}));var W=function(){var n=(0,h.$)().t;return(0,a.jsxs)(m.Z,{sx:{p:3},children:[(0,a.jsx)(C,{children:(0,a.jsx)(w.Z,{})}),(0,a.jsx)(c.Z,{variant:"h3",sx:{pb:1},children:n("Water")}),(0,a.jsx)(c.Z,{color:"text.primary",variant:"h1",sx:{pr:.5,display:"inline-flex"},children:"54%"}),(0,a.jsx)(j.Z,{pt:3,children:(0,a.jsx)(b.Z,{value:54,color:"primary",variant:"determinate"})})]})},I=e(88092),M=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      width: ".concat(r.spacing(7),";\n      height: ").concat(r.spacing(7),";\n      border-radius: ").concat(r.general.borderRadius,";\n      background-color: ").concat(r.colors.error.lighter,";\n      color:  ").concat(r.colors.error.main,";\n      margin-bottom: ").concat(r.spacing(3),";\n")}));var S=function(){var n=(0,h.$)().t;return(0,a.jsxs)(m.Z,{sx:{p:3},children:[(0,a.jsx)(M,{children:(0,a.jsx)(I.Z,{})}),(0,a.jsx)(c.Z,{variant:"h3",sx:{pb:1},children:n("Calories")}),(0,a.jsx)(c.Z,{color:"text.primary",variant:"h1",sx:{pr:.5,display:"inline-flex"},children:"76%"}),(0,a.jsx)(j.Z,{pt:3,children:(0,a.jsx)(b.Z,{value:76,color:"primary",variant:"determinate"})})]})},z=e(67294),O=e(44267),R=e(78445),T=e(67720),F=e(37023),N=e(40044),A=e(11057),D=e(49735),$=e(24759),B=e(96224),_=e(78694),E=e(47480),G=(0,p.ZP)(O.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.alpha.black[5],";\n")})),H=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.warning.lighter,";\n      color: ").concat(r.colors.warning.main,";\n      width: ").concat(r.spacing(10),";\n      height: ").concat(r.spacing(10),";\n      margin: 0 auto ").concat(r.spacing(2),";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(r.typography.pxToRem(42),";\n      }\n")})),L=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.error.lighter,";\n      color: ").concat(r.colors.error.main,";\n      width: ").concat(r.spacing(10),";\n      height: ").concat(r.spacing(10),";\n      margin: 0 auto ").concat(r.spacing(2),";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(r.typography.pxToRem(42),";\n      }\n")}));var Y=function(){var n=(0,h.$)().t,r=(0,i.Z)(),e=(0,z.useState)("daily"),t=e[0],s=e[1],o=[{value:"daily",label:n("Daily")},{value:"weekly",label:n("Weekly")},{value:"monthly",label:n("Monthly")}],l={chart:{background:"transparent",toolbar:{show:!1}},stroke:{curve:"smooth",width:[3,3],dashArray:[0,5],colors:[r.colors.error.main,r.colors.primary.main]},fill:{opacity:[1,.2]},theme:{mode:r.palette.mode},markers:{hover:{sizeOffset:1},shape:"circle",size:5,strokeWidth:2,strokeOpacity:1,strokeColors:r.colors.alpha.white[100],colors:[r.colors.error.main,r.colors.primary.main]},colors:[r.colors.error.main,r.colors.primary.main],labels:["12:00 AM","3:00 AM","6:00 AM","9:00 AM","12:00 PM","3:00 PM","6:00 PM","9:00 PM","12:00 PM"],dataLabels:{enabled:!1},legend:{labels:{useSeriesColors:!0},itemMargin:{horizontal:15,vertical:15},show:!0},xaxis:{axisBorder:{show:!1},labels:{show:!0}},yaxis:{show:!0,labels:{show:!0}},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}},strokeDashArray:5,borderColor:r.colors.alpha.black[10]}};return(0,a.jsxs)(m.Z,{sx:{height:"100%"},children:[(0,a.jsx)(R.Z,{title:(0,a.jsxs)(a.Fragment,{children:[n("Activity")," ",(0,a.jsxs)(c.Z,{variant:"body2",component:"span",fontWeight:"bold",color:"text.secondary",children:["(",n("burned calories"),")"]})]})}),(0,a.jsx)(T.Z,{}),(0,a.jsx)(G,{children:(0,a.jsx)(F.Z,{onChange:function(n,r){s(r)},value:t,variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",children:o.map((function(n){return(0,a.jsx)(N.Z,{label:n.label,value:n.value},n.value)}))})}),(0,a.jsx)(T.Z,{}),(0,a.jsxs)(j.Z,{p:2,children:["daily"===t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D.k,{options:l,series:[{type:"line",name:"Previous Period",data:[344,512,829,696,847,437,935,433,962]},{type:"area",name:"Current Period",data:[740,367,372,478,459,630,894,556,369]}],type:"line",height:322}),(0,a.jsx)(T.Z,{}),(0,a.jsx)(j.Z,{mt:2,sx:{textAlign:"center"},children:(0,a.jsx)(A.Z,{size:"small",variant:"outlined",sx:{borderWidth:"2px","&:hover":{borderWidth:"2px"}},children:n("View more activity charts")})})]}),"weekly"===t&&(0,a.jsxs)(j.Z,{sx:{py:{xs:2,md:6,lg:8},textAlign:"center"},children:[(0,a.jsx)(H,{children:(0,a.jsx)($.Z,{})}),(0,a.jsxs)(c.Z,{variant:"h2",children:[n("No reports, yet"),"!"]}),(0,a.jsxs)(c.Z,{variant:"h4",sx:{pt:1,pb:3},fontWeight:"normal",color:"text.secondary",children:[n("There is not enough data to generate the weekly report, yet"),"!"]}),(0,a.jsx)(A.Z,{size:"small",color:"warning",variant:"outlined",startIcon:(0,a.jsx)(B.Z,{}),sx:{borderWidth:"2px","&:hover":{borderWidth:"2px"}},children:n("Update settings")})]}),"monthly"===t&&(0,a.jsxs)(j.Z,{sx:{py:{xs:2,md:6,lg:8},textAlign:"center"},children:[(0,a.jsx)(L,{children:(0,a.jsx)(_.Z,{})}),(0,a.jsxs)(c.Z,{variant:"h2",children:[n("Not available"),"!"]}),(0,a.jsxs)(c.Z,{variant:"h4",sx:{pt:1,pb:3},fontWeight:"normal",color:"text.secondary",children:[n("Share the share health data, in app settings"),"!"]}),(0,a.jsx)(A.Z,{size:"small",color:"error",variant:"outlined",startIcon:(0,a.jsx)(E.Z,{}),sx:{borderWidth:"2px","&:hover":{borderWidth:"2px"}},children:n("Modify privacy settings")})]})]})]})},U=e(97212),q=e(41796),J=e(58756),V=e(93946),K=e(78462),Q=e(72035),X=e(58461),nn=e(67248),rn=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.primary.lighter,";\n      color: ").concat(r.palette.primary.main,";\n      width: ").concat(r.spacing(5),";\n      height: ").concat(r.spacing(5),";\n")})),en=(0,p.ZP)(j.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.alpha.black[5],";\n      border-radius: ").concat(r.general.borderRadius,";\n      text-align: center;\n      width: ").concat(r.spacing(9),";\n      height: ").concat(r.spacing(9),";\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-right: ").concat(r.spacing(1.5),";\n      flex-shrink: 0;\n      transition: ").concat(r.transitions.create(["background"]),";\n")})),an=(0,p.ZP)(U.ZP)((function(n){var r=n.theme;return"\n      border-radius: 0;\n      padding: ".concat(r.spacing(2),";\n      \n      &:hover {\n        .MuiDate-wrapper {\n            background: ").concat((0,q.Fq)(r.colors.alpha.black[100],.08),";\n        }\n      }\n")}));var tn=function(){var n=(0,h.$)().t;return(0,a.jsxs)(m.Z,{children:[(0,a.jsxs)(j.Z,{p:2,display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsxs)(j.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(rn,{sx:{mr:1.5},children:(0,a.jsx)(Q.Z,{})}),(0,a.jsx)(c.Z,{variant:"h4",children:n("Upcoming Events")})]}),(0,a.jsx)(J.Z,{placement:"top",arrow:!0,title:n("Create new event"),children:(0,a.jsx)(V.Z,{sx:{alignSelf:"center"},color:"primary",children:(0,a.jsx)(X.Z,{})})})]}),(0,a.jsx)(T.Z,{}),(0,a.jsxs)(K.Z,{disablePadding:!0,component:"div",children:[(0,a.jsxs)(an,{alignItems:"flex-start",children:[(0,a.jsx)(en,{className:"MuiDate-wrapper",children:(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{variant:"h2",color:"text.primary",children:"23"}),(0,a.jsx)(c.Z,{variant:"subtitle2",children:n("June")})]})}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{variant:"h4",sx:{pt:1},color:"text.primary",noWrap:!0,gutterBottom:!0,children:n("Healthy Body")}),(0,a.jsx)(c.Z,{variant:"body1",color:"text.secondary",children:n("You will learn how to have a healthy body and how to stay fit in this event.")})]})]}),(0,a.jsx)(T.Z,{}),(0,a.jsxs)(an,{alignItems:"flex-start",children:[(0,a.jsx)(en,{className:"MuiDate-wrapper",children:(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{variant:"h2",color:"text.primary",children:"30"}),(0,a.jsx)(c.Z,{variant:"subtitle2",children:n("July")})]})}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{variant:"h4",sx:{pt:1},color:"text.primary",noWrap:!0,gutterBottom:!0,children:n("Healthy Nutrition - The Power is in You")}),(0,a.jsx)(c.Z,{variant:"body1",color:"text.secondary",children:n("Three day course that will help you harness your inner power in order to have a healthier life.")})]})]}),(0,a.jsx)(T.Z,{}),(0,a.jsxs)(an,{alignItems:"flex-start",children:[(0,a.jsx)(en,{className:"MuiDate-wrapper",children:(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{variant:"h2",color:"text.primary",children:"14"}),(0,a.jsx)(c.Z,{variant:"subtitle2",children:n("August")})]})}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{variant:"h4",sx:{pt:1},color:"text.primary",noWrap:!0,gutterBottom:!0,children:n("Mindfulness Online Course")}),(0,a.jsx)(c.Z,{variant:"body1",color:"text.secondary",children:n("Learn how to better manage the stresses of daily life, improve your overall health.")})]})]})]}),(0,a.jsx)(T.Z,{}),(0,a.jsx)(j.Z,{p:2,children:(0,a.jsx)(A.Z,{variant:"outlined",size:"small",endIcon:(0,a.jsx)(nn.Z,{fontSize:"small"}),children:n("View all")})})]})},sn=e(26447),on=e(25464),cn=e(18972),ln=e(79126),hn=e(95774),dn=e(96331);var xn=function(){var n=(0,h.$)().t,r=(0,z.useRef)(null),e=(0,z.useState)(!1),t=e[0],d=e[1],x=(0,l.a)().user,g=(0,i.Z)(),u=42,b=65,Z=[{value:"today",text:n("Today")},{value:"yesterday",text:n("Yesterday")},{value:"last_month",text:n("Last month")},{value:"last_year",text:n("Last year")}],v=(0,z.useState)(Z[2].text),y=v[0],f=v[1],P=(0,p.ZP)(j.Z)((function(n){var r=n.theme;return"\n      border-radius: ".concat(r.general.borderRadius,";\n      text-align: center;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      color: ").concat(r.colors.alpha.trueWhite[100],";;\n      padding: ").concat(r.spacing(3),";\n")})),k=(0,p.ZP)("span")((function(n){var r=n.theme;return"\n    border-radius: 22px;\n    width: ".concat(r.spacing(1.5),";\n    height: ").concat(r.spacing(1.5),";\n    display: inline-flex;\n    margin-right: ").concat(r.spacing(.8),";\n")})),w=(0,p.ZP)(c.Z)((function(){return"\n      color: ".concat(g.colors.alpha.trueWhite[100],";;\n    ")}));return(0,a.jsxs)(m.Z,{sx:{p:3},children:[(0,a.jsxs)(j.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(o.Z,{sx:{mr:2,width:g.spacing(9),height:g.spacing(9)},variant:"rounded",alt:x.name,src:x.avatar}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{variant:"h4",sx:{fontSize:"".concat(g.typography.pxToRem(18))},gutterBottom:!0,children:x.name}),(0,a.jsx)(c.Z,{variant:"subtitle2",children:"San Francisco, USA"})]})]}),(0,a.jsxs)(sn.Z,{sx:{mt:4,mb:3},direction:"row",divider:(0,a.jsx)(T.Z,{orientation:"vertical",flexItem:!0}),justifyContent:"space-evenly",alignItems:"center",spacing:0,children:[(0,a.jsxs)(j.Z,{p:2,children:[(0,a.jsxs)(c.Z,{align:"center",variant:"h3",gutterBottom:!0,children:["79",(0,a.jsx)(c.Z,{variant:"h4",component:"span",children:n("kg")})]}),(0,a.jsx)(c.Z,{align:"center",variant:"subtitle2",children:n("weight")})]}),(0,a.jsxs)(j.Z,{p:2,children:[(0,a.jsxs)(c.Z,{align:"center",variant:"h3",gutterBottom:!0,children:["182",(0,a.jsx)(c.Z,{variant:"h4",component:"span",children:n("cm")})]}),(0,a.jsx)(c.Z,{align:"center",variant:"subtitle2",children:n("height")})]}),(0,a.jsxs)(j.Z,{p:2,children:[(0,a.jsxs)(c.Z,{align:"center",variant:"h3",gutterBottom:!0,children:["24",(0,a.jsx)(c.Z,{variant:"h4",component:"span",children:n("cm")})]}),(0,a.jsx)(c.Z,{align:"center",variant:"subtitle2",children:n("age")})]})]}),(0,a.jsxs)(j.Z,{mb:3,display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsx)(c.Z,{variant:"h4",children:n("Your Goals")}),(0,a.jsx)(A.Z,{size:"small",variant:"outlined",ref:r,onClick:function(){return d(!0)},endIcon:(0,a.jsx)(ln.Z,{fontSize:"small"}),children:y}),(0,a.jsx)(on.Z,{disableScrollLock:!0,anchorEl:r.current,onClose:function(){return d(!1)},open:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Z.map((function(n){return(0,a.jsx)(cn.Z,{onClick:function(){f(n.text),d(!1)},children:n.text},n.value)}))})]}),(0,a.jsxs)(s.ZP,{spacing:3,container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(P,{sx:{background:g.colors.gradients.blue1},children:[(0,a.jsxs)(j.Z,{children:[(0,a.jsxs)(w,{variant:"subtitle1",sx:{pb:.5,display:"flex",alignItems:"center"},children:[(0,a.jsx)(k,{style:{background:g.colors.success.main}}),n("Weight Loss")]}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(w,{variant:"h3",fontWeight:"bold",sx:{pr:.5,display:"inline-flex"},children:"4.2"}),(0,a.jsx)(w,{variant:"body2",fontWeight:"bold",sx:{display:"inline-flex"},children:"/ 10 kg"})]})]}),(0,a.jsx)(j.Z,{children:(0,a.jsx)(dn.Z,{circleRatio:1,styles:(0,hn.y3)({rotation:.5}),value:u,strokeWidth:8,text:"".concat(u,"%"),color:"trueWhite",size:"medium"})})]})}),(0,a.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(P,{sx:{background:g.colors.gradients.blue3},children:[(0,a.jsxs)(j.Z,{children:[(0,a.jsxs)(w,{variant:"subtitle1",sx:{pb:.5,display:"flex",alignItems:"center"},children:[(0,a.jsx)(k,{style:{background:g.colors.error.main}}),n("Sleep")]}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(w,{variant:"h3",fontWeight:"bold",sx:{pr:.5,display:"inline-flex"},children:"37"}),(0,a.jsx)(w,{variant:"body2",fontWeight:"bold",sx:{display:"inline-flex"},children:"/ 59 hours"})]})]}),(0,a.jsx)(j.Z,{children:(0,a.jsx)(dn.Z,{circleRatio:1,styles:(0,hn.y3)({rotation:.5}),value:b,strokeWidth:8,text:"".concat(b,"%"),color:"trueWhite",size:"medium"})})]})})]})]})},gn=e(99905);var un=function(){var n=(0,h.$)().t,r=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.primary.lighter,";\n      color: ").concat(r.colors.primary.main,";\n      width: ").concat(r.spacing(6),";\n      height: ").concat(r.spacing(6),";\n      margin-top: -").concat(r.spacing(1),";\n")}));return(0,a.jsxs)(m.Z,{sx:{p:1},children:[(0,a.jsx)(R.Z,{avatar:(0,a.jsx)(r,{children:(0,a.jsx)(gn.Z,{})}),action:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{align:"right",variant:"h2",children:"2400"}),(0,a.jsx)(c.Z,{align:"right",variant:"subtitle2",color:"text.secondary",children:n("kCal")})]})}),(0,a.jsxs)(O.Z,{sx:{pt:0},children:[(0,a.jsx)(c.Z,{variant:"h3",sx:{pb:3},children:n("Calories")}),(0,a.jsx)(b.Z,{value:34,color:"primary",variant:"determinate"})]})]})};var pn=function(){var n=(0,h.$)().t,r=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.primary.lighter,";\n      color: ").concat(r.colors.primary.main,";\n      width: ").concat(r.spacing(6),";\n      height: ").concat(r.spacing(6),";\n      margin-top: -").concat(r.spacing(1),";\n")}));return(0,a.jsxs)(m.Z,{sx:{p:1},children:[(0,a.jsx)(R.Z,{avatar:(0,a.jsx)(r,{children:(0,a.jsx)(I.Z,{})}),action:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{align:"right",variant:"h2",children:"3566"}),(0,a.jsx)(c.Z,{align:"right",variant:"subtitle2",color:"text.secondary",children:n("grams")})]})}),(0,a.jsxs)(O.Z,{sx:{pt:0},children:[(0,a.jsx)(c.Z,{variant:"h3",sx:{pb:3},children:n("Protein")}),(0,a.jsx)(b.Z,{value:49,color:"primary",variant:"determinate"})]})]})},mn=e(33211);var jn=function(){var n=(0,h.$)().t,r=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.primary.lighter,";\n      color: ").concat(r.colors.primary.main,";\n      width: ").concat(r.spacing(6),";\n      height: ").concat(r.spacing(6),";\n      margin-top: -").concat(r.spacing(1),";\n")}));return(0,a.jsxs)(m.Z,{sx:{p:1},children:[(0,a.jsx)(R.Z,{avatar:(0,a.jsx)(r,{children:(0,a.jsx)(mn.Z,{})}),action:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{align:"right",variant:"h2",children:"1000"}),(0,a.jsx)(c.Z,{align:"right",variant:"subtitle2",color:"text.secondary",children:n("grams")})]})}),(0,a.jsxs)(O.Z,{sx:{pt:0},children:[(0,a.jsx)(c.Z,{variant:"h3",sx:{pb:3},children:n("Carbs")}),(0,a.jsx)(b.Z,{value:22,color:"primary",variant:"determinate"})]})]})},bn=e(53747);var Zn=function(){var n=(0,h.$)().t,r=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n      background-color: ".concat(r.colors.primary.lighter,";\n      color: ").concat(r.colors.primary.main,";\n      width: ").concat(r.spacing(6),";\n      height: ").concat(r.spacing(6),";\n      margin-top: -").concat(r.spacing(1),";\n")}));return(0,a.jsxs)(m.Z,{sx:{p:1},children:[(0,a.jsx)(R.Z,{avatar:(0,a.jsx)(r,{children:(0,a.jsx)(bn.Z,{})}),action:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{align:"right",variant:"h2",children:"1505"}),(0,a.jsx)(c.Z,{align:"right",variant:"subtitle2",color:"text.secondary",children:n("grams")})]})}),(0,a.jsxs)(O.Z,{sx:{pt:0},children:[(0,a.jsx)(c.Z,{variant:"h3",sx:{pb:3},children:n("Fat")}),(0,a.jsx)(b.Z,{value:79,color:"primary",variant:"determinate"})]})]})},vn=e(73734),yn=e(97249),fn=e(98908),Pn=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n    background-color: ".concat(r.colors.info.lighter,";\n    color: ").concat(r.colors.info.main,";\n    width: ").concat(r.spacing(5),";\n    height: ").concat(r.spacing(5),";\n")})),kn=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n    background-color: ".concat(r.colors.success.lighter,";\n    color: ").concat(r.colors.success.main,";\n    width: ").concat(r.spacing(5),";\n    height: ").concat(r.spacing(5),";\n")})),wn=(0,p.ZP)(o.Z)((function(n){var r=n.theme;return"\n    background-color: ".concat(r.colors.error.lighter,";\n    color: ").concat(r.colors.error.main,";\n    width: ").concat(r.spacing(5),";\n    height: ").concat(r.spacing(5),";\n")}));var Cn=function(){var n=(0,h.$)().t,r=(0,i.Z)(),e={chart:{background:"transparent",toolbar:{show:!1},sparkline:{enabled:!0},zoom:{enabled:!1}},labels:["Monday","Tueday","Wednesday","Thursday","Friday","Saturday","Sunday"],fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,colorStops:[{offset:0,color:r.colors.error.main,opacity:1},{offset:35,color:r.colors.warning.main,opacity:1},{offset:70,color:r.colors.info.main,opacity:1},{offset:100,color:r.colors.success.main,opacity:1}]}},stroke:{curve:"stepline",colors:[r.colors.primary.main],width:3},yaxis:{show:!1},colors:[r.colors.primary.main],grid:{padding:{top:10,right:5,bottom:10,left:5}},tooltip:{followCursor:!0,x:{show:!0},y:{formatter:function(n){return n+" % of target"}}}};return(0,a.jsxs)(s.ZP,{container:!0,spacing:4,children:[(0,a.jsx)(s.ZP,{item:!0,sm:6,md:4,xs:12,children:(0,a.jsxs)(m.Z,{sx:{p:2,overflow:"visible"},children:[(0,a.jsxs)(j.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsxs)(j.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(kn,{sx:{mr:1},children:(0,a.jsx)(vn.Z,{})}),(0,a.jsx)(c.Z,{variant:"h4",children:n("Heart Rate")})]}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{align:"right",lineHeight:1,variant:"h3",children:"65"}),(0,a.jsx)(c.Z,{align:"right",variant:"subtitle1",color:"text.secondary",children:n("bpm")})]})]}),(0,a.jsx)(D.k,{options:e,series:[{name:"Heart rate",data:[22,15,19,7,13,1,18]}],type:"line",height:100})]})}),(0,a.jsx)(s.ZP,{item:!0,sm:6,md:4,xs:12,children:(0,a.jsxs)(m.Z,{sx:{p:2,overflow:"visible"},children:[(0,a.jsxs)(j.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsxs)(j.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(wn,{sx:{mr:1},children:(0,a.jsx)(yn.Z,{})}),(0,a.jsx)(c.Z,{variant:"h4",children:n("Running")})]}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{align:"right",lineHeight:1,variant:"h3",children:"15"}),(0,a.jsx)(c.Z,{align:"right",variant:"subtitle1",color:"text.secondary",children:n("km/h")})]})]}),(0,a.jsx)(D.k,{options:e,series:[{name:"Running",data:[14,18,16,1,3,17,6]}],type:"line",height:100})]})}),(0,a.jsx)(s.ZP,{item:!0,md:4,xs:12,children:(0,a.jsxs)(m.Z,{sx:{p:2,overflow:"visible"},children:[(0,a.jsxs)(j.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsxs)(j.Z,{display:"flex",alignItems:"center",children:[(0,a.jsx)(Pn,{sx:{mr:1},children:(0,a.jsx)(fn.Z,{})}),(0,a.jsx)(c.Z,{variant:"h4",children:n("Swimming")})]}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(c.Z,{align:"right",lineHeight:1,variant:"h3",children:"12"}),(0,a.jsx)(c.Z,{align:"right",variant:"subtitle1",color:"text.secondary",children:n("miles")})]})]}),(0,a.jsx)(D.k,{options:e,series:[{name:"Swimming",data:[171,73,129,141,70,147,130]}],type:"line",height:100})]})})]})},Wn=(0,t.default)((function(){return Promise.all([e.e(7023),e.e(4588)]).then(e.bind(e,39750))}),{loadableGenerated:{webpack:function(){return[39750]},modules:["..\\src\\content\\DashboardPages\\fitness\\index.js -> src/content/Dashboards/Fitness/TrainingPrograms"]},ssr:!0}),In=(0,t.default)((function(){return Promise.all([e.e(3662),e.e(3394),e.e(2889)]).then(e.bind(e,30691))}),{loadableGenerated:{webpack:function(){return[30691]},modules:["..\\src\\content\\DashboardPages\\fitness\\index.js -> src/content/Dashboards/Fitness/MonthlyGoalsTarget"]},ssr:!0});var Mn=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.Z,{children:(0,a.jsx)(x,{})}),(0,a.jsxs)(s.ZP,{sx:{px:4},container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[(0,a.jsx)(s.ZP,{item:!0,lg:6,xs:12,children:(0,a.jsxs)(s.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[(0,a.jsx)(s.ZP,{item:!0,sm:6,md:3,lg:6,xs:12,children:(0,a.jsx)(y,{})}),(0,a.jsx)(s.ZP,{item:!0,sm:6,md:3,lg:6,xs:12,children:(0,a.jsx)(k,{})}),(0,a.jsx)(s.ZP,{item:!0,sm:6,md:3,lg:6,xs:12,children:(0,a.jsx)(W,{})}),(0,a.jsx)(s.ZP,{item:!0,sm:6,md:3,lg:6,xs:12,children:(0,a.jsx)(S,{})})]})}),(0,a.jsx)(s.ZP,{item:!0,lg:6,xs:12,children:(0,a.jsx)(Y,{})}),(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsx)(Wn,{})}),(0,a.jsx)(s.ZP,{item:!0,md:6,xs:12,children:(0,a.jsx)(tn,{})}),(0,a.jsx)(s.ZP,{item:!0,md:6,xs:12,children:(0,a.jsx)(xn,{})}),(0,a.jsx)(s.ZP,{item:!0,md:6,xs:12,children:(0,a.jsx)(In,{})}),(0,a.jsx)(s.ZP,{item:!0,md:6,xs:12,children:(0,a.jsxs)(s.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[(0,a.jsx)(s.ZP,{item:!0,sm:6,xs:12,children:(0,a.jsx)(un,{})}),(0,a.jsx)(s.ZP,{item:!0,sm:6,xs:12,children:(0,a.jsx)(pn,{})}),(0,a.jsx)(s.ZP,{item:!0,sm:6,xs:12,children:(0,a.jsx)(jn,{})}),(0,a.jsx)(s.ZP,{item:!0,sm:6,xs:12,children:(0,a.jsx)(Zn,{})})]})}),(0,a.jsx)(s.ZP,{item:!0,xs:12,children:(0,a.jsx)(Cn,{})})]}),(0,a.jsx)(u.Z,{})]})}}}]);