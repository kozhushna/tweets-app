"use strict";(self.webpackChunktweets_app=self.webpackChunktweets_app||[]).push([[308],{687:function(e,t,r){r.r(t),r.d(t,{default:function(){return G}});var n=r(165),s=r(433),a=r(861),i=r(439),c=r(791),u=r(243);u.Z.defaults.baseURL="https://64664418ba7110b6639c25a1.mockapi.io/api/v1";var o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/users",{params:{page:t,limit:r}});case 2:return s=e.sent,e.abrupt("return",{users:s.data,total:20});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.put("/users/".concat(t),{followers:r});case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p="UserListItem_item__phHUQ",f="UserListItem_logo__u40HZ",d="UserListItem_avatar__frZps",m="UserListItem_avatarHolder__Vi808",h="UserListItem_avatarLine__KXhQG",_="UserListItem_cardImage__herWN",v="UserListItem_tweetsText__k+qSm",x="UserListItem_followersText__Wx7br",w="UserListItem_button__+RZ6m",Z="UserListItem_buttonFollow__jp0+I",g=r.p+"static/media/card-image.cf24435a30172b0a75b4.png";var b=r.p+"static/media/go-it.89604f2827917106f320d36dad457a91.svg",j=r(184),k=function(e){var t=e.user,r=e.isFollowing,n=e.onClick,s=t.id,a=t.avatar,i=t.name,c=t.tweets,u=t.followers,o=new Intl.NumberFormat("en-US");return(0,j.jsxs)("li",{className:p,children:[(0,j.jsx)("img",{src:g,alt:"background",className:_}),(0,j.jsx)("img",{src:b,alt:"logo Go It",width:"76",height:"22",className:f}),(0,j.jsx)("div",{className:h,children:" "}),(0,j.jsx)("div",{className:m,children:(0,j.jsx)("img",{src:a,alt:i,width:"64",height:"64",className:d})}),(0,j.jsxs)("p",{className:v,children:[c," tweets"]}),(0,j.jsxs)("p",{className:x,children:[o.format(u)," followers"]}),(0,j.jsx)("button",{type:"button",onClick:function(){return n(s,r?u-1:u+1)},className:r?w:Z,children:r?(0,j.jsx)(j.Fragment,{children:"Following"}):(0,j.jsx)(j.Fragment,{children:"Follow"})})]})},N="UserList_list__FmFkn",I=function(e){var t=e.users,r=e.updateFollowing,u=(0,c.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("followerIds")))&&void 0!==e?e:[]})),o=(0,i.Z)(u,2),l=o[0],p=o[1];(0,c.useEffect)((function(){localStorage.setItem("followerIds",JSON.stringify(l))}),[l]);var f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t,a);case 2:e.sent&&p((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):[].concat((0,s.Z)(e),[t])}));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return(0,j.jsx)("ul",{className:N,children:t.map((function(e){return(0,j.jsx)(k,{user:e,isFollowing:(t=e.id,l.includes(t)),onClick:f},e.id);var t}))})},L="LoadMoreButton_button__30ZiZ",F=function(e){var t=e.onClick;return(0,j.jsx)("button",{type:"button",onClick:t,className:L,children:"Load more"})},U=r(691),S="Loader_loaderContainer__iV9FK",y=function(){return(0,j.jsx)("div",{className:S,children:(0,j.jsx)(U.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#b8c480","#B2A3B5","#F4442E","#51E5FF","#429EA6"]})})},C=r(87),B="GoBackButton_link__Sq1Dy",E=function(e){var t=e.path,r=e.children;return(0,j.jsx)(C.rU,{to:t,className:B,children:r})},A=r(599),G=function(){var e=(0,c.useState)([]),t=(0,i.Z)(e,2),r=t[0],u=t[1],p=(0,c.useState)(""),f=(0,i.Z)(p,2),d=f[0],m=f[1],h=(0,c.useState)(!1),_=(0,i.Z)(h,2),v=_[0],x=_[1],w=(0,c.useState)(1),Z=(0,i.Z)(w,2),g=Z[0],b=Z[1],k=(0,c.useState)(!1),N=(0,i.Z)(k,2),L=N[0],U=N[1];(0,c.useEffect)((function(){function e(){return(e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,o(g,6);case 4:t=e.sent,u((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(t.users))})),U(g<Math.ceil(t.total/6)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),m(e.t0.message);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g]);var S=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,a){var i,c,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(t,a);case 3:return i=e.sent,c=(0,s.Z)(r),o=c.findIndex((function(e){return e.id===t})),c[o]=i,u(c),e.abrupt("return",!0);case 11:e.prev=11,e.t0=e.catch(0),m(e.t0.message);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}();return(0,j.jsx)("main",{children:(0,j.jsx)("section",{children:(0,j.jsxs)("div",{className:A.Z.container,children:[(0,j.jsx)(E,{path:"/",children:"Go back"}),(0,j.jsx)(I,{users:r,updateFollowing:S}),d&&(0,j.jsx)("div",{children:d}),v&&(0,j.jsx)(y,{}),L&&(0,j.jsx)(F,{onClick:function(){b((function(e){return e+1}))}})]})})})}},599:function(e,t){t.Z={container:"App_container__CPNyA"}}}]);
//# sourceMappingURL=308.6dc2e86d.chunk.js.map