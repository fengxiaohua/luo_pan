import{_ as x}from"./sub-page-header.73afd2f9.js";import{a as u,o as n,b as s,e as t,t as d,f as i,h as r,i as b,j as g,r as I,k as C,F as M,l as A,p as S,m as $}from"./entry.f4162f10.js";const B={class:"company-info__title flex items-center justify-between"},j={key:0},N={key:1},V={key:2},z={__name:"company-info",props:{data:Object,isActive:Boolean},setup(e){return(l,c)=>{const a=g;return n(),s("div",{class:b(["company-info",{active:e.isActive}])},[t("div",B,[t("p",null,d(e.data.title),1),i(a,{class:"active-arrow",icon:"arrow-down"})]),t("ul",null,[e.data.address?(n(),s("li",j,[i(a,{icon:"locationfill"}),t("span",null,d(e.data.address),1)])):r("",!0),e.data.email?(n(),s("li",N,[i(a,{icon:"email"}),t("span",null,d(e.data.email),1)])):r("",!0),e.data.telephone?(n(),s("li",V,[i(a,{icon:"phone-telephone"}),t("span",null,d(e.data.telephone),1)])):r("",!0)])],2)}}},D=u(z,[["__scopeId","data-v-6affe5a5"]]);const E=e=>(S("data-v-75f6ca33"),e=e(),$(),e),F={class:"wow fadeInUp company main-container flex flex-wrap justify-between"},P={class:"company-list"},H=E(()=>t("div",{id:"map-container"},null,-1)),J={__name:"index",setup(e){const l=[{title:"\u4E0A\u6D77\u603B\u516C\u53F8",address:"\u4E0A\u6D77\u5E02\u9EC4\u6D66\u533A\u56DB\u5DDD\u4E2D\u8DEF681\u53F73\u697C",email:"sanfrancisco@saasly.com",telephone:"021-64470381",position:[121.485775,31.243176]},{title:"\u897F\u5B89\u5206\u516C\u53F8",address:"\u9655\u897F\u7701\u897F\u5B89\u5E02\u9AD8\u65B0\u533A\u4E08\u516B\u4E00\u8DEF\u4E08\u516B\u4E1C\u8DEF\uFF08\u7EFF\u5730\u84DD\u6D77\u5927\u53A6\uFF09-1-2004",email:"lei.wang@wcompass.com",telephone:"18916935801",position:[108.883652,34.197599]},{title:"\u6B66\u6C49\u7814\u53D1\u4E2D\u5FC3",address:"\u6E56\u5317\u7701\u6B66\u6C49\u5E02\u6D2A\u5C71\u533A\u5FB7\u6210\u56FD\u8D38\u4E2D\u5FC3B\u5EA71309",email:"yisheng.wang@wcompass.com",telephone:"18064047603",position:[114.362419,30.57884]},{title:"\u6DF1\u5733\u529E\u4E8B\u5904",address:"\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u5B9D\u5B89\u533A\u534E\u6CF0\u5927\u53A6",email:"",telephone:"13823272670",position:[113.874103,22.575541]}];let c=null;const a=I(0);C(()=>{setTimeout(()=>{f()},500)});const f=()=>{window._AMapSecurityConfig={securityJsCode:"72d8eab47452b6108842de1bc41e8378"},c=new AMap.Map("map-container",{zoom:17,center:l[a.value].position,viewMode:"3D"}),v()},h=o=>{c.setCenter(o)},v=()=>{console.log("map",c),l.forEach(o=>{c.add(new AMap.Marker({icon:"https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",position:o.position}))})},y=(o,m)=>{a.value=m,h(o.position)};return(o,m)=>{const w=x,k=D;return n(),s("div",null,[i(w),t("div",F,[t("div",P,[(n(),s(M,null,A(l,(p,_)=>i(k,{key:p.title,data:p,isActive:a.value===_,onClick:L=>y(p,_)},null,8,["data","isActive","onClick"])),64))]),H])])}}},U=u(J,[["__scopeId","data-v-75f6ca33"]]);export{U as default};
