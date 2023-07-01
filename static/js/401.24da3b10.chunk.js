"use strict";(self.webpackChunkanime_collection=self.webpackChunkanime_collection||[]).push([[401],{1609:function(t,n,e){e.d(n,{Ik:function(){return l},i1:function(){return c},xy:function(){return s}});var i,r,a,o=e(168),d=e(1333),l=(0,d.Ps)(i||(i=(0,o.Z)(["\nquery ($id: Int, $page: Int, $perPage: Int, $search: String) {\n\tPage (page: $page, perPage: $perPage) {\n\t\tpageInfo {\n\t\t\ttotal\n\t\t\tcurrentPage\n\t\t\tlastPage\n\t\t\thasNextPage\n\t\t\tperPage\n\t\t}\n\t\tmedia (id: $id, search: $search) {\n\t\t\tid\n\t\t\ttitle {\n\t\t\t\tenglish\n\t\t\t}\n\t\t\tcoverImage {\n\t\t\t\tlarge\n\t\t\t}\n\t\t}\n\t}\n}"]))),s=(0,d.Ps)(r||(r=(0,o.Z)(["\nquery ($id: Int) {\n\tMedia (id: $id) {\n\t\tid\n\t\ttitle {\n\t\t\tenglish\n\t\t}\n\t\tbannerImage\n\t\tdescription\n\t\tcoverImage {\n\t\t\tmedium\n\t\t}\n\t\tstatus\n\t\tchapters\n\t\tpopularity\n\t\tisFavourite\n\t\trankings {\n\t\t\tid\n\t\t\trank\n\t\t}\n\t}\n}"]))),c=(0,d.Ps)(a||(a=(0,o.Z)(["\n\tquery($userId: Int) {\n\t\tMediaListCollection(userId: $userId, type: ANIME) {\n\t\t\tlists {\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n"])))},3401:function(t,n,e){e.r(n),e.d(n,{default:function(){return j}});var i,r=e(1413),a=e(9439),o=e(2791),d=e(5461),l=e(168),s=(0,e(1333).Ps)(i||(i=(0,l.Z)(["\n  query ($id: Int) {\n    User(id: $id) {\n      id\n      name\n    }\n  }\n"]))),c=e(1609),u=e(3173),g=e(9549),p=g.Z.div({padding:"30px 30px",display:"flex",flexWrap:"wrap",borderRadius:5,gap:30,justifyContent:"center"}),f=g.Z.div({display:"flex",flexDirection:"column",alignItems:"center",width:300,height:320,borderRadius:8,background:"white",padding:"15px 10px",cursor:"pointer",boxShadow:"0px 2px 8px -2px rgba(20, 38, 86, 0.16)","&:hover":{transform:"translate(-2px, -2px)"},"&:active":{transform:"translate(2px, 2px)"},"& > img":{width:250,height:250},"& > p":{textAlign:"center",fontWeight:600,fontSize:16,color:"#1e1e1e"}}),x=g.Z.div({display:"flex",justifyContent:"flex-end",padding:"0 30px",cursor:"pointer",marginBottom:40}),h=g.Z.div({display:"flex",gap:5,padding:10}),v=g.Z.div({display:"flex",alignItems:"center",justifyContent:"center",color:"#2E4885",width:32,height:32,borderRadius:8,fontWeight:400,fontSize:14},(function(t){var n=t.active;return{backgroundColor:n?"#2E4885":"#d7dce0",color:n?"white":"#2E4885"}})),m=e(184),P=function(t){var n=t.currentPage,e=t.hasNextPage,i=t.onClick,r=(0,o.useState)([1]),d=(0,a.Z)(r,2),l=d[0],s=d[1];return(0,o.useEffect)((function(){s(n<2?e?[1,2,3]:[1]:e?[n-1,n,n+1]:[n-1,n])}),[n,e]),(0,m.jsx)(x,{children:(0,m.jsxs)(h,{children:[(0,m.jsx)(v,{onClick:function(){return 1!==n&&i(n-1)},children:"left"}),l.map((function(t){return(0,m.jsx)(v,{active:n===t,onClick:function(){return t!==n&&i(t)},children:t})})),(0,m.jsx)(v,{onClick:function(){return e&&i(n+1)},children:"right"})]})})},I=e(7689),k=e(3852),Z=e(2992),j=function(){var t=(0,I.s0)(),n=(0,d.S)(),e=n.user,i=n.saveUser,l=(0,o.useState)(1),g=(0,a.Z)(l,2),x=g[0],h=g[1];(0,u.a)(s,{variables:{id:5813837},skip:!(null===e||void 0===e||!e.id),onCompleted:function(t){return!(null!==e&&void 0!==e&&e.id)&&i((0,r.Z)((0,r.Z)({},null===t||void 0===t?void 0:t.User),{},{collectionList:Z.Q}))}});var v=(0,u.a)(c.Ik,{variables:{page:x,perPage:10}}),j=v.loading,y=v.data;return(0,o.useEffect)((function(){i((0,r.Z)((0,r.Z)({},e),{},{banner:void 0}))}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(p,{children:[!!j&&(0,m.jsx)(k.Z,{}),null===y||void 0===y?void 0:y.Page.media.map((function(n){return(0,m.jsxs)(f,{onClick:function(){return t("/list/".concat(n.id))},children:[(0,m.jsx)("img",{src:null===n||void 0===n?void 0:n.coverImage.large,alt:"banner"}),(0,m.jsx)("p",{children:null===n||void 0===n?void 0:n.title.english})]})}))]}),!j&&(0,m.jsx)(P,{currentPage:null===y||void 0===y?void 0:y.Page.pageInfo.currentPage,hasNextPage:null===y||void 0===y?void 0:y.Page.pageInfo.hasNextPage,onClick:function(t){return h(t)}})]})}}}]);
//# sourceMappingURL=401.24da3b10.chunk.js.map