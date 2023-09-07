"use strict";(self["webpackChunkrolling"]=self["webpackChunkrolling"]||[]).push([[157],{5679:function(e,t,a){function o(e){return{all:e=e||new Map,on:function(t,a){var o=e.get(t);o?o.push(a):e.set(t,[a])},off:function(t,a){var o=e.get(t);o&&(a?o.splice(o.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var o=e.get(t);o&&o.slice().map((function(e){e(a)})),(o=e.get("*"))&&o.slice().map((function(e){e(t,a)}))}}}a.d(t,{Z:function(){return s}});const r=o();var s=r},7587:function(e,t,a){var o=a(5679);t.Z=(e,t="更新")=>{const a="string"===typeof e.data.message?[e.data.message]:e.data.message;e.data.success?o.Z.emit("push-message",{style:"success",title:`${t}成功`,content:a.toString()}):o.Z.emit("push-message",{style:"danger",title:`${t}失敗`,content:a.join("、")})}},4677:function(e,t,a){var o=a(7587),r=a(5679),s=a(6154),l=a(9876),c=a(6294);const n=(0,c.Z)();t.Z=(0,l.Q_)("cartStore",{state:()=>({cartProducts:{},cartProductsData:[],status:{loadingItem:""}}),actions:{async addCart(e){n.cartLoadingItem=e;const t="https://vue3-course-api.hexschool.io/api/je-api/cart",a={product_id:e,qty:1};try{const e=await s.Z.post(t,{data:a});n.cartLoadingItem="",(0,o.Z)(e),r.Z.emit("updateCart")}catch(l){console.error("Error 找不到資料",l)}},async getCartProducts(){const e="https://vue3-course-api.hexschool.io/api/je-api/cart";try{const t=await s.Z.get(e);this.cartProducts=t.data.data,this.cartProductsData=t.data.data.carts}catch(t){console.error("Error 找不到資料",t)}},async updateCart(e,t){n.isLoadingForStore=!0,n.cartLoadingItem=e.id;const a=`https://vue3-course-api.hexschool.io/api/je-api/cart/${e.id}`,l={product_id:e.product_id,qty:t};try{const e=await s.Z.put(a,{data:l});n.isLoadingForStore=!1,n.cartLoadingItem="",this.getCartProducts(),(0,o.Z)(e),r.Z.emit("updateCart")}catch(c){console.error("Error 找不到資料",c)}},async delProduct(e){n.cartLoadingItem=e,n.isLoadingForStore=!0;const t=`https://vue3-course-api.hexschool.io/api/je-api/cart/${e}`;try{const e=await s.Z["delete"](t);n.isLoadingForStore=!1,n.cartLoadingItem="",this.getCartProducts(),(0,o.Z)(e),r.Z.emit("updateCart")}catch(a){console.error("Error 找不到資料",a)}},async addCouponCode(e){n.isLoadingForStore=!0;const t="https://vue3-course-api.hexschool.io/api/je-api/coupon",a={code:e};let r;try{r=await s.Z.post(t,{data:a}),n.isLoadingForStore=!1,this.getCartProducts()}catch(l){console.error("Error 找不到資料",l)}finally{(0,o.Z)(r)}},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}})},6294:function(e,t,a){var o=a(9876);t.Z=(0,o.Q_)("statusStore",{state:()=>({isLoadingForStore:!1,cartLoadingItem:""})})},6129:function(e,t,a){a.d(t,{Z:function(){return d}});var o=a(6252),r=a(3577);const s={class:"page-title-lg"};function l(e,t,a,l,c,n){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("h3",null,(0,r.zw)(a.title),1)])}var c={props:{title:String}},n=a(3744);const i=(0,n.Z)(c,[["render",l]]);var d=i},9157:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var o=a(6252),r=a(3577),s=a(9963);const l={class:"checkbox-box"},c={class:"order-information"},n=(0,o._)("p",null,"訂購人資訊",-1),i={class:"name-phone"},d={class:"name"},u=(0,o._)("label",{for:"name",class:"form-label"},"姓名",-1),m={class:"phone"},p=(0,o._)("label",{for:"tel",class:"form-label"},"手機",-1),f={class:"address"},g=(0,o._)("label",{for:"address",class:"form-label"},"寄送地址",-1),h={class:"mail"},v=(0,o._)("label",{for:"email",class:"form-label"},"電子郵件",-1),_={class:"message"},b=(0,o._)("label",{for:"message",class:"form-label"},"備註(選填)",-1),y={class:"step bg-color"},w=(0,o._)("button",{class:"fill-btn"},"結帳去",-1),Z={class:"products-information"},C=(0,o._)("p",null,"訂單資訊",-1),L={class:"product-box item-underline"},P={class:"img-box"},x=["src","alt"],k={class:"content"},S={class:"price"},V={class:"total-box"},W=(0,o._)("p",null,[(0,o.Uk)(" 運費 "),(0,o._)("span",null,"免運費")],-1),$={class:"item-top-line"};function F(e,t,a,F,U,I){const z=(0,o.up)("LogoNavVue"),T=(0,o.up)("PageTitle"),j=(0,o.up)("Field"),D=(0,o.up)("error-message"),E=(0,o.up)("router-link"),q=(0,o.up)("Form"),N=(0,o.up)("Loading");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(z),(0,o.Wm)(T,{title:"結帳頁面"}),(0,o._)("div",l,[(0,o._)("div",c,[n,(0,o.Wm)(q,{class:"text-deep",onSubmit:I.createOrder},{default:(0,o.w5)((({errors:e})=>[(0,o._)("div",i,[(0,o._)("div",d,[u,(0,o.Wm)(j,{autocomplete:"off",id:"name",name:"姓名",type:"name",rules:"required",class:(0,r.C_)({"is-invalid":e["姓名"]}),placeholder:"請輸入姓名",modelValue:U.form.user.name,"onUpdate:modelValue":t[0]||(t[0]=e=>U.form.user.name=e)},null,8,["class","modelValue"]),(0,o.Wm)(D,{name:"姓名",class:"invalid-feedback"})]),(0,o._)("div",m,[p,(0,o.Wm)(j,{autocomplete:"off",id:"tel",name:"手機",type:"tel",rules:I.isPhone,class:(0,r.C_)({"is-invalid":e["手機"]}),placeholder:"請輸入手機",modelValue:U.form.user.tel,"onUpdate:modelValue":t[1]||(t[1]=e=>U.form.user.tel=e)},null,8,["rules","class","modelValue"]),(0,o.Wm)(D,{name:"手機",class:"invalid-feedback"})])]),(0,o._)("div",f,[g,(0,o.Wm)(j,{autocomplete:"off",id:"address",name:"地址",type:"address",rules:I.isAddress,class:(0,r.C_)({"is-invalid":e["地址"]}),placeholder:"請輸入寄送地址",modelValue:U.form.user.address,"onUpdate:modelValue":t[2]||(t[2]=e=>U.form.user.address=e)},null,8,["rules","class","modelValue"]),(0,o.Wm)(D,{name:"地址",class:"invalid-feedback"})]),(0,o._)("div",h,[v,(0,o.Wm)(j,{autocomplete:"off",id:"email",name:"email",type:"email",rules:"email|required",class:(0,r.C_)({"is-invalid":e["email"]}),placeholder:"請輸入電子郵件",modelValue:U.form.user.email,"onUpdate:modelValue":t[3]||(t[3]=e=>U.form.user.email=e)},null,8,["class","modelValue"]),(0,o.Wm)(D,{name:"email",class:"invalid-feedback"})]),(0,o._)("div",_,[b,(0,o.wy)((0,o._)("textarea",{name:"",id:"message",cols:"10",rows:"1",maxlength:"20",placeholder:"請輸入備註（限20字）","onUpdate:modelValue":t[4]||(t[4]=e=>U.form.message=e)},null,512),[[s.nr,U.form.message]])]),(0,o._)("div",y,[(0,o.Wm)(E,{to:{name:"購物車"},class:"border-btn text-deep"},{default:(0,o.w5)((()=>[(0,o.Uk)(" 上一步 ")])),_:1}),w])])),_:1},8,["onSubmit"])]),(0,o._)("div",Z,[C,(0,o._)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cartProducts.carts,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"product-item",key:t.id},[(0,o._)("div",P,[(0,o._)("img",{src:t.product.imageUrl,alt:t.product.title},null,8,x)]),(0,o._)("div",k,[(0,o._)("p",null,(0,r.zw)(t.product.category),1),(0,o._)("p",null,(0,r.zw)(t.product.title),1),(0,o._)("p",null,"數量："+(0,r.zw)(t.qty)+(0,r.zw)(t.product.unit),1)]),(0,o._)("div",S,[(0,o._)("p",null,"NT$"+(0,r.zw)(e.$filters.currency(t.final_total)),1)])])))),128))]),(0,o._)("div",V,[(0,o._)("p",null,[(0,o.Uk)(" 商品總計 "),(0,o._)("span",null,"NT$"+(0,r.zw)(e.$filters.currency(e.cartProducts.final_total)),1)]),W,(0,o._)("p",$,[(0,o.Uk)(" 總計 "),(0,o._)("span",null,"NT$"+(0,r.zw)(e.$filters.currency(e.cartProducts.final_total)),1)])])])]),(0,o.Wm)(N,{active:e.isLoadingForStore},null,8,["active"])],64)}a(7658);const U={class:"logo-nav bg-color"},I=(0,o._)("p",{class:"logo"},"Rolling",-1),z=[I];function T(e,t){return(0,o.wg)(),(0,o.iD)("nav",U,z)}var j=a(3744);const D={},E=(0,j.Z)(D,[["render",T]]);var q=E,N=a(6129),O=a(6154),A=a(9876),H=a(4677),Q=a(6294),Y={components:{LogoNavVue:q,PageTitle:N.Z},data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},computed:{...(0,A.rn)(H.Z,["cartProducts"]),...(0,A.rn)(Q.Z,["isLoadingForStore"])},methods:{...(0,A.nv)(H.Z,["getCartProducts"]),async createOrder(){const e="https://vue3-course-api.hexschool.io/api/je-api/order",t=this.form;try{const a=await O.Z.post(e,{data:t});a.data.success&&this.$router.push(`/order/${a.data.orderId}`)}catch(a){console.error("Error 找不到資料",a)}},isPhone(e){const t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"},isAddress(e){const t=/(?:(?<city>[^市縣]+[市縣])(?<district>[^市區鄉鎮鄉鎮市區]+[市區鄉鎮鄉鎮市區])?(?<neighborhood>[^村里]+[村里])?(?<lin>[0-9]+[鄰])?(?<street>[^路段]+[路段])?(?<section>[^段]*段)?(?<alley>[0-9]+巷)?(?<lane>[0-9]+弄)?(?<number>[0-9]+號)?(?:-(?<number2>[0-9]+號))?(?<floor>[0-9]+樓)?(?<other>.+)?)/;return!!t.test(e)||"需要正確的地址"}},created(){this.getCartProducts()}};const K=(0,j.Z)(Y,[["render",F]]);var M=K}}]);
//# sourceMappingURL=157.3b259195.js.map