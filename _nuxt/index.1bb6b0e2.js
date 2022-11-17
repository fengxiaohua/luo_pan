import{_ as B}from"./sub-page-header.73afd2f9.js";import{a as p,o as l,b as m,e,t as r,D as u,P as U,c as w,w as b,f as d,u as a,E as j,J as D,F as k,l as I}from"./entry.f4162f10.js";import{u as x}from"./useNewsApi.07d5db64.js";import"./fetch.28e51396.js";const O={class:"news_item-footer flex w-full justify-between items-center"},F={class:"footer flex justify-between"},S={class:"time"},C={class:"traffic"},E={__name:"journalism-item-footer",props:{data:{type:Object,default:()=>{}}},setup(o){return(t,n)=>{var s,c;return l(),m("div",O,[e("div",F,[e("div",S,r((s=o.data)==null?void 0:s.date),1),e("div",C,"\u8BBF\u95EE\u91CF\uFF1A"+r((c=o.data)==null?void 0:c.visits),1)])])}}},g=p(E,[["__scopeId","data-v-1d8e11d3"]]),V={class:"news_item_top-content flex flex-col justify-between"},H={class:"news_item_top-title"},R={class:"news_item_top-description"},T=["src","alt"],q={__name:"journalism-item-top",props:{data:{type:Object,default:()=>{}}},setup(o){const t=o,[n,s]=x(),c=u(()=>s.getNewsPageUrl(t.data.scode,t.data.id));return U(),(f,h)=>{const _=j;return l(),w(_,{to:a(c),class:"news_item_top flex justify-between"},{default:b(()=>[e("div",V,[e("div",H,r(t.data.title),1),e("div",R,r(t.data.description),1),d(g,{class:"news_item_top-footer",data:t.data},null,8,["data"])]),e("img",{class:"cover",src:a(n)+t.data.ico,alt:t.data.title},null,8,T)]),_:1},8,["to"])}}},z=p(q,[["__scopeId","data-v-af70af5b"]]),G=["src","alt"],K={class:"news_item_left-title"},M={__name:"journalism-item-left",props:{data:{type:Object}},setup(o){const t=o,[n,s]=x(),c=u(()=>s.getNewsPageUrl(t.data.scode,t.data.id));return U(),(f,h)=>{const _=j;return l(),w(_,{to:a(c),class:"news_item_left flex flex-col"},{default:b(()=>[e("img",{class:"cover",src:a(n)+t.data.ico,alt:t.data.title},null,8,G),e("div",null,[e("div",K,r(t.data.title),1),d(g,{class:"news_item_left-footer",data:t.data},null,8,["data"])])]),_:1},8,["to"])}}},Q=p(M,[["__scopeId","data-v-fb84aa42"]]),W={class:"news_item_small flex justify-center"},X={class:"news_item_small-title"},Y={class:"news_item_small-content"},Z={__name:"journalism-item-small",props:{data:{type:Object}},setup(o){const t=o,[n,s]=x(),c=u(()=>s.getNewsPageUrl(t.data.scode,t.data.id));return(f,h)=>{const _=j;return l(),m("div",W,[d(_,{to:a(c),class:"flex-col"},{default:b(()=>[e("div",X,r(t.data.title),1),e("div",Y,r(t.data.description),1),d(g,{data:t.data},null,8,["data"])]),_:1},8,["to"])])}}},tt=p(Z,[["__scopeId","data-v-e83b7489"]]),et={class:"journalism--bg"},st={class:"journalism main-container flex flex-col items-center"},at={class:"journalism-bottom flex"},ot={class:"journalism-bottom-item flex-col w-min-1/2"},nt={__name:"journalism",async setup(o){let t,n;const[s,c]=x(),{data:f,error:h}=([t,n]=D(()=>c.getAllNewsDatails()),t=await t,n(),t),_=u(()=>{var v,$;return(($=(v=f.value)==null?void 0:v.data)==null?void 0:$.list)||[]}),L=u(()=>[...a(_)].splice(2).splice(0,3)),J=u(()=>[...a(_)].splice(5));return(v,$)=>{const A=z,P=Q,N=tt;return l(),m("div",et,[e("div",st,[d(A,{"data-wow-delay":"1",data:a(_)[0]},null,8,["data"]),e("div",at,[d(P,{"data-wow-delay":"1",data:a(_)[1]},null,8,["data"]),e("div",ot,[(l(!0),m(k,null,I(a(L),(i,y)=>(l(),w(N,{key:`${i.scode}-${i.id}`,"data-wow-delay":y+1,data:i},null,8,["data-wow-delay","data"]))),128))])]),(l(!0),m(k,null,I(a(J),(i,y)=>(l(),w(N,{key:`${i.scode}-${i.id}`,"data-wow-delay":y+1,data:i},null,8,["data-wow-delay","data"]))),128))])])}}},ct=p(nt,[["__scopeId","data-v-086c02e2"]]);const _t={},lt={class:"news"};function dt(o,t){const n=B,s=ct;return l(),m("div",lt,[d(n),d(s,{class:"wow fadeInUp"})])}const pt=p(_t,[["render",dt],["__scopeId","data-v-7034792d"]]);export{pt as default};
