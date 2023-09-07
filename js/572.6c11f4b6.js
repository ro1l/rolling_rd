"use strict";(self["webpackChunkrolling"]=self["webpackChunkrolling"]||[]).push([[572],{9334:function(t,e,i){var r=i(6154),a=i(9876),l=i(6294);const o=(0,l.Z)();e.Z=(0,a.Q_)("articleStore",{state:()=>({articles:[],article:{},pagination:{}}),actions:{async getArticles(t=1){this.scrollToTop(),o.isLoadingForStore=!0;const e=`https://vue3-course-api.hexschool.io/api/je-api/articles/?page=${t}`;try{const t=await r.Z.get(e);o.isLoadingForStore=!1,this.articles=t.data.articles,this.pagination=t.data.pagination}catch(i){console.error("Error 找不到資料",i)}},async getArticle(t){this.scrollToTop();const e=`https://vue3-course-api.hexschool.io/api/je-api/article/${t}`;o.isLoadingForStore=!0;try{o.isLoadingForStore=!1;const t=await r.Z.get(e);this.article=t.data.article}catch(i){console.error("Error 找不到資料",i)}},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}})},6294:function(t,e,i){var r=i(9876);e.Z=(0,r.Q_)("statusStore",{state:()=>({isLoadingForStore:!1,cartLoadingItem:""})})},6129:function(t,e,i){i.d(e,{Z:function(){return u}});var r=i(6252),a=i(3577);const l={class:"page-title-lg"};function o(t,e,i,o,c,s){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("h3",null,(0,a.zw)(i.title),1)])}var c={props:{title:String}},s=i(3744);const n=(0,s.Z)(c,[["render",o]]);var u=n},3098:function(t,e,i){i.d(e,{Z:function(){return p}});var r=i(6252),a=i(3577);const l=["onClick"],o=(0,r._)("i",{class:"bi bi-arrow-right"},null,-1);function c(t,e,i,c,s,n){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.relatedArticles,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"related-articles-box",key:t.id},[(0,r._)("a",{href:"#",onClick:e=>n.getArticle(t.id)},[(0,r.Uk)((0,a.zw)(t.title)+" ",1),o],8,l)])))),128)}i(7658);var s=i(9876),n=i(9334),u=i(6294),d={computed:{...(0,s.rn)(n.Z,["articles","pagination"]),...(0,s.rn)(u.Z,["isLoadingForStore"]),relatedArticles(){return this.articles.slice(0,5)}},methods:{...(0,s.nv)(n.Z,["getArticles"]),getArticle(t){setTimeout((()=>{this.$router.push(`/article/${t}`)}))}},created(){this.getArticles()}},g=i(3744);const h=(0,g.Z)(d,[["render",c]]);var p=h},8572:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var r=i(6252),a=i(3577);const l={class:"article-box"},o={class:"article-title"},c={class:"article"},s={class:"text-shallow"},n={class:"text-shallow article-description"},u={class:"img-box"},d=["src","alt"],g=["innerHTML"],h=(0,r._)("div",{class:"share"},[(0,r._)("p",null,"分享於"),(0,r._)("a",{href:"https://www.facebook.com/"},"FB"),(0,r._)("a",{href:"https://www.instagram.com/"},"IG"),(0,r._)("a",{href:"https://twitter.com/home"},"X")],-1),p={class:"related-articles"},w=(0,r._)("p",null,"最新文章",-1);function v(t,e,i,v,_,f){const m=(0,r.up)("PageTitle"),Z=(0,r.up)("RelatedArticles"),A=(0,r.up)("Loading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(m,{title:t.article.title},null,8,["title"]),(0,r._)("div",l,[(0,r._)("h1",o,(0,a.zw)(t.article.title),1),(0,r._)("div",c,[(0,r._)("p",s,[(0,r.Uk)((0,a.zw)(t.$filters.date(t.article.create_at))+" ",1),(0,r._)("span",null,"By "+(0,a.zw)(t.article.author),1)]),(0,r._)("p",n,"“"+(0,a.zw)(t.article.description)+"”",1),(0,r._)("div",u,[(0,r._)("img",{src:t.article.image,alt:t.article.title},null,8,d)]),(0,r._)("article",{class:"article-content",innerHTML:t.article.content},null,8,g),h]),(0,r._)("div",p,[w,(0,r.Wm)(Z)])]),(0,r.Wm)(A,{active:t.isLoadingForStore},null,8,["active"])],64)}var _=i(3098),f=i(6129),m=i(9876),Z=i(9334),A=i(6294),L={components:{RelatedArticles:_.Z,PageTitle:f.Z},computed:{...(0,m.rn)(Z.Z,["article"]),...(0,m.rn)(A.Z,["isLoadingForStore"])},methods:{...(0,m.nv)(Z.Z,["getArticle"])},created(){const t=this.$route.params.articleId;this.getArticle(t)}},T=i(3744);const S=(0,T.Z)(L,[["render",v]]);var k=S}}]);
//# sourceMappingURL=572.6c11f4b6.js.map