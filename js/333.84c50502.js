"use strict";(self["webpackChunkrolling"]=self["webpackChunkrolling"]||[]).push([[333],{4238:function(e,t,o){o(7658);var a=o(6154),r=o(9876),s=o(6294);const l=(0,s.Z)();t.Z=(0,r.Q_)("productStore",{state:()=>({products:[],productsPage:[],pagination:{},productsCategory:[],productsType:[],product:{},imageUrl:"",imagesUrl:[],cc:0,lgProducts:[],smProducts:[]}),actions:{async getProducts(){l.isLoadingForStore=!0;const e="https://vue3-course-api.hexschool.io/api/je-api/products/all";try{const t=await a.Z.get(e);l.isLoadingForStore=!1,this.products=t.data.products,this.updateProductsCategoryAndType(),this.scrollToTop()}catch(t){console.error("Error 找不到資料:",t)}},async getProductsPage(e=1){l.isLoadingForStore=!0;const t=`https://vue3-course-api.hexschool.io/api/je-api/admin/products/?page=${e}`;try{const e=await a.Z.get(t);l.isLoadingForStore=!1,e.data.success&&(this.productsPage=e.data.products,this.pagination=e.data.pagination),this.scrollToTop()}catch(o){console.error("Error fetching paginated products:",o)}},async getProduct(e){l.isLoadingForStore=!0;const t=`https://vue3-course-api.hexschool.io/api/je-api/product/${e}`;try{const e=await a.Z.get(t);l.isLoadingForStore=!1,this.product=e.data.product,this.imageUrl=e.data.product.imageUrl,this.imagesUrl=e.data.product.imagesUrl,this.cc=e.data.product.content.comparison.cc,this.scrollToTop()}catch(o){console.error("Error 找不到資料",o)}this.licenseTax(),this.fuelTax()},licenseTax(e){const t=e;return t<=500?1620:t<=600?2160:t<=1200?4320:t<=1800?7120:11230},fuelTax(e){const t=e;return t<=500?900:t<=600?1200:t<=1200?1800:2010},setLgCompProd(e){this.updateProductArray(this.lgProducts,e,4)},setSmCompProd(e){this.updateProductArray(this.smProducts,e,2)},updateProductArray(e,t,o){e.length<o?e.some((e=>e.id===t.id))||e.push(t):e.some((e=>e.id===t.id))||(e.shift(),e.push(t))},updateProductsCategoryAndType(){this.products.forEach((e=>{this.productsCategory.includes(e.category)||this.productsCategory.push(e.category),this.productsType.includes(e.content.comparison.type)||this.productsType.push(e.content.comparison.type)}))},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}})},6294:function(e,t,o){var a=o(9876);t.Z=(0,a.Q_)("statusStore",{state:()=>({isLoadingForStore:!1,cartLoadingItem:""})})},8333:function(e,t,o){o.r(t),o.d(t,{default:function(){return pt}});var a=o(6252),r=o(9963),s=o(3577);const l={class:"container-fluid"},d={class:"row"},i={class:"col-12 border-bottom border-black"},c={class:"container-fluid d-flex justify-content-between align-items-center p-4"},n=(0,a._)("h1",{class:"page-title"},"Products",-1),p=(0,a._)("i",{class:"bi bi-plus-lg"},null,-1),u={key:1,class:"col-12"},m={class:"card mb-4 bg-gray-white"},b={class:"card-body pt-lg-4 mt-lg-3 py-0 px-lg-5"},g={class:"table-responsive p-0 d-flex"},h={class:"table lh-lg mb-0 table-hover"},y=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-secondary text-xxs fw-normal pb-lg-4 pt-sm-0"},"分類"),(0,a._)("th",{class:"text-secondary text-xxs fw-normal pb-lg-4 pt-sm-0"},"名稱"),(0,a._)("th",{class:"text-secondary text-xxs fw-normal pb-lg-4 pt-sm-0"},"售價"),(0,a._)("th",{class:"text-secondary text-xxs fw-normal pb-lg-4 pt-sm-0 text-center"}," 圖片 "),(0,a._)("th",{class:"text-secondary text-xxs fw-normal pb-lg-4 pt-sm-0 text-center"}," 啟用 ")])],-1),f=["onClick"],_={class:""},x={class:""},P={class:"text-center"},v=["src","alt"],w={class:"text-center"},k={key:0},M=(0,a._)("i",{class:"bi bi-check-lg fs-5"},null,-1),U=[M],D={key:1};function L(e,t,o,M,L,T){const j=(0,a.up)("DashboardSkeleton"),F=(0,a.up)("Pagination"),C=(0,a.up)("ProductModal"),A=(0,a.up)("DelModal"),S=(0,a.up)("Loading");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[(0,a._)("div",d,[(0,a._)("div",i,[(0,a._)("div",c,[n,(0,a._)("button",{class:"btn btn-outline-dark border-1 rounded-0 me-lg-3 mb-0 px-lg-5 py-lg-2",type:"button",onClick:t[0]||(t[0]=(0,r.iM)((e=>T.openModal(!0)),["prevent"]))},[p,(0,a.Uk)(" 新增商品 ")])])]),e.isLoadingForStore?((0,a.wg)(),(0,a.j4)(j,{key:0})):(0,a.kq)("",!0),e.isLoadingForStore?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",m,[(0,a._)("div",b,[(0,a._)("div",g,[(0,a._)("table",h,[y,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.productsPage,(t=>((0,a.wg)(),(0,a.iD)("tr",{href:"#",class:"cursor-pointer",onClick:(0,r.iM)((e=>T.openModal(!1,t)),["prevent"]),key:t.id},[(0,a._)("td",_,(0,s.zw)(t.category),1),(0,a._)("td",x,(0,s.zw)(t.title),1),(0,a._)("td",null,"NT$"+(0,s.zw)(e.$filters.currency(t.price)),1),(0,a._)("td",P,[(0,a._)("img",{class:"img-30",src:t.imageUrl,alt:t.title},null,8,v)]),(0,a._)("td",w,[1===t.is_enabled?((0,a.wg)(),(0,a.iD)("span",k,U)):((0,a.wg)(),(0,a.iD)("span",D))])],8,f)))),128))])])])]),(0,a.Wm)(F,{pages:e.pagination,onEmitPages:e.getProductsPage},null,8,["pages","onEmitPages"])])]))])]),(0,a.Wm)(C,{ref:"productModal",product:L.tempProduct,isNew:L.isNew,onUpdateProduct:T.updateProduct,onDelProduct:t[1]||(t[1]=e=>T.openDelProductModal(L.tempProduct))},null,8,["product","isNew","onUpdateProduct"]),(0,a.Wm)(A,{item:L.tempProduct,ref:"delModal",onDelItem:T.delProduct},null,8,["item","onDelItem"]),(0,a.Wm)(S,{active:L.isLoading,zIndex:1e4},null,8,["active"])],64)}var T=o(6154);const j={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},F={class:"modal-dialog modal-xl modal-dialog-centered modal-fullscreen-md-down"},C={class:"modal-content bg-gray-white rounded-0 p-0 border-0"},A=(0,a._)("div",{class:"modal-header border-bottom border-black p-4"},[(0,a._)("h1",{class:"modal-title fs-5 font-family-taipei fw-normal",id:"exampleModalLabel"},"新增 / 編輯商品"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body p-0"},Z={class:"container-fluid"},I={class:"row p-0"},$={class:"col-lg-6 col-sm-12"},V={class:"card border-lg border-bottom border-black px-2 py-4"},N={class:"card-header pb-2 mb-0 d-flex justify-content-between align-items-center"},E=(0,a._)("h6",{class:"mb-0 fs-5 font-family-taipei"},"商品主圖",-1),q=(0,a._)("ins",null,"前往觀看產品",-1),W=[q],H={class:"card-body px-sm-4 d-flex justify-content-center align-items-center"},K={class:"cursor-pointer preview",for:"customFile"},z={key:0,class:"w-100 h-100 border border-black p-3 d-flex justify-content-center align-items-center position-relative"},Y=["src","alt"],O=(0,a._)("div",{class:"position-absolute bg-opacity-50 bg-black p-2 w-100 bottom-0 start-0 text-center text-white"},"編輯",-1),B={key:1,class:"w-100 h-100 border border-black d-flex justify-content-center align-items-center"},G=(0,a._)("p",{class:"m-0 p-0"},"請選擇主圖",-1),Q=[G],J={class:"card border-lg border-bottom border-black px-2 py-4"},R=(0,a._)("div",{class:"card-header pb-2 mb-0"},[(0,a._)("h6",{class:"mb-0 fs-5 font-family-taipei"},[(0,a.Uk)("商品資訊 "),(0,a._)("small",{class:"text-danger font-family-taipei text-xxs"},"(必填)")])],-1),X={class:"card-body"},ee={class:"mb-4"},te=(0,a._)("p",{class:"mb-2 text-black"},"廠牌",-1),oe=(0,a.uE)('<option selected value="" disabled>請選擇廠牌</option><option value="YAMAHA">YAMAHA</option><option value="KAWASAKI">KAWASAKI</option><option value="HONDA">HONDA</option><option value="Harley-Davidson">Harley-Davidson</option><option value="IndianMotorcycle">Indian Motorcycle</option><option value="Ducati">Ducati</option><option value="KTM">KTM</option><option value="BMW">BMW</option><option value="Triumph">Triumph</option><option value="Vespa">Vespa</option>',11),ae=[oe],re={class:"mb-4"},se=(0,a._)("p",{class:"mb-2 text-black"},"商品名稱",-1),le={class:"mb-4"},de=(0,a._)("p",{class:"mb-2 text-black"},"原價",-1),ie={class:"mb-4"},ce=(0,a._)("p",{class:"mb-2 text-black"},"售價",-1),ne={class:"card border-lg px-2 py-4 border-black"},pe=(0,a._)("div",{class:"card-header pb-2 mb-0"},[(0,a._)("h6",{class:"mb-0 fs-5 font-family-taipei"},"是否啟用")],-1),ue={class:"card-body"},me={class:"d-flex justify-content-between align-items-center px-5 pt-5"},be=(0,a._)("label",{for:"true",class:"true px-lg-5 py-lg-2 px-4 py-1 cursor-pointer border-2 rounded-5 fs-5"},[(0,a._)("span",null,"是")],-1),ge=(0,a._)("label",{for:"false",class:"false px-lg-5 py-lg-2 px-4 py-1 cursor-pointer border-2 rounded-5 fs-5"},[(0,a._)("span",null,"否")],-1),he={class:"col-lg-6 col-sm-12"},ye={class:"card border-lg border-start border-black px-2 py-4"},fe=(0,a._)("div",{class:"card-header pb-2 mb-0"},[(0,a._)("h6",{class:"mb-0 fs-5 font-family-taipei"},"車款資訊")],-1),_e={class:"card-body"},xe={class:"mb-4"},Pe=(0,a._)("p",{class:"mb-2 text-black"},"車種",-1),ve={class:"mb-4"},we=(0,a._)("p",{class:"mb-2 text-black"},"引擎",-1),ke={class:"mb-4"},Me=(0,a._)("p",{class:"mb-2 text-black"},"排氣量",-1),Ue={class:"mb-4"},De=(0,a._)("p",{class:"mb-2 text-black"},"馬力",-1),Le={class:"mb-4"},Te=(0,a._)("p",{class:"mb-2 text-black"},"扭力",-1),je={class:"mb-4"},Fe=(0,a._)("p",{class:"mb-2 text-black"},"座高",-1),Ce={class:"mb-4"},Ae=(0,a._)("p",{class:"mb-2 text-black"},"車重",-1),Se={class:"mb-4"},Ze=(0,a._)("p",{class:"mb-2 text-black"},"油箱容量",-1),Ie={class:"mb-4"},$e=(0,a._)("p",{class:"mb-2 text-black"},"平均油耗",-1),Ve={class:"row"},Ne={class:"col-12"},Ee={class:"card border-lg border-top border-bottom border-black px-2 py-4"},qe={class:"card-header pb-2 mb-0"},We={class:"mb-0 fs-5 font-family-taipei"},He={key:0,class:"card-body px-5 d-flex justify-content-lg-start align-items-center flex-sm-column flex-lg-row flex-wrap flex-lg-nowrap justify-content-center"},Ke=["onClick"],ze=["src"],Ye=(0,a._)("div",{class:"position-absolute bg-opacity-50 bg-danger p-1 text-xxs w-100 bottom-0 start-0 text-center"},"移除",-1),Oe={key:0,for:"customFiles",class:"cursor-pointer"},Be=(0,a._)("div",{class:"preview-more border border-black d-flex justify-content-center align-items-center"},[(0,a._)("p",{class:"m-0 p-0"},"新增副圖")],-1),Ge={class:"modal-footer p-lg-5 p-3 bg-sm-color d-flex justify-content-between"},Qe=(0,a._)("p",null,null,-1);function Je(e,t,o,l,d,i){const c=(0,a.up)("Loading"),n=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)("div",j,[(0,a._)("div",F,[(0,a._)("div",C,[A,(0,a._)("div",S,[(0,a._)("div",Z,[(0,a._)("div",I,[(0,a._)("div",$,[(0,a._)("div",V,[(0,a._)("div",N,[E,(0,a._)("a",{href:"#",class:"pe-2",onClick:t[0]||(t[0]=(0,r.iM)((e=>i.getProduct(d.tempProduct.id)),["prevent"]))},W)]),(0,a._)("div",H,[(0,a._)("label",K,[(0,a._)("input",{class:"d-none",type:"file",id:"customFile",onChange:t[1]||(t[1]=(...e)=>i.uploadFile&&i.uploadFile(...e)),ref:"fileInput"},null,544),void 0!==d.tempProduct.imageUrl?((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("img",{class:"w-100",src:d.tempProduct.imageUrl,alt:d.tempProduct.title},null,8,Y),O])):((0,a.wg)(),(0,a.iD)("div",B,Q))])])]),(0,a._)("div",J,[R,(0,a._)("div",X,[(0,a._)("div",ee,[te,(0,a.wy)((0,a._)("select",{class:"form-select border-dark rounded-0 bg-transparent border-1 p-3","aria-label":"Default select example","onUpdate:modelValue":t[2]||(t[2]=e=>d.tempProduct.category=e)},ae,512),[[r.bM,d.tempProduct.category]])]),(0,a._)("div",re,[se,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入商品名稱","aria-label":"example","onUpdate:modelValue":t[3]||(t[3]=e=>d.tempProduct.title=e)},null,512),[[r.nr,d.tempProduct.title]])]),(0,a._)("div",le,[de,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"number",placeholder:"請輸入原價","aria-label":"example","onUpdate:modelValue":t[4]||(t[4]=e=>d.tempProduct.origin_price=e)},null,512),[[r.nr,d.tempProduct.origin_price]])]),(0,a._)("div",ie,[ce,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"number",placeholder:"請輸入售價","aria-label":"example","onUpdate:modelValue":t[5]||(t[5]=e=>d.tempProduct.price=e)},null,512),[[r.nr,d.tempProduct.price]])])])]),(0,a._)("div",ne,[pe,(0,a._)("div",ue,[(0,a._)("div",me,[(0,a.wy)((0,a._)("input",{class:"d-none input-true",type:"radio",name:"select",id:"true",checked:"",value:1,"onUpdate:modelValue":t[6]||(t[6]=e=>d.tempProduct.is_enabled=e)},null,512),[[r.G2,d.tempProduct.is_enabled]]),be,(0,a.wy)((0,a._)("input",{class:"d-none input-false",type:"radio",name:"select",id:"false",value:0,"onUpdate:modelValue":t[7]||(t[7]=e=>d.tempProduct.is_enabled=e)},null,512),[[r.G2,d.tempProduct.is_enabled]]),ge])])])]),(0,a._)("div",he,[(0,a._)("div",ye,[fe,(0,a._)("div",_e,[(0,a._)("div",xe,[Pe,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入車種","aria-label":"example","onUpdate:modelValue":t[8]||(t[8]=e=>d.tempProduct.content.comparison.type=e)},null,512),[[r.nr,d.tempProduct.content.comparison.type]])]),(0,a._)("div",ve,[we,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入引擎","aria-label":"example","onUpdate:modelValue":t[9]||(t[9]=e=>d.tempProduct.content.comparison.engine=e)},null,512),[[r.nr,d.tempProduct.content.comparison.engine]])]),(0,a._)("div",ke,[Me,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入排氣量","aria-label":"example","onUpdate:modelValue":t[10]||(t[10]=e=>d.tempProduct.content.comparison.cc=e)},null,512),[[r.nr,d.tempProduct.content.comparison.cc]])]),(0,a._)("div",Ue,[De,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入馬力","aria-label":"example","onUpdate:modelValue":t[11]||(t[11]=e=>d.tempProduct.content.comparison.hp=e)},null,512),[[r.nr,d.tempProduct.content.comparison.hp]])]),(0,a._)("div",Le,[Te,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入扭力","aria-label":"example","onUpdate:modelValue":t[12]||(t[12]=e=>d.tempProduct.content.comparison.torque=e)},null,512),[[r.nr,d.tempProduct.content.comparison.torque]])]),(0,a._)("div",je,[Fe,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入座高","aria-label":"example","onUpdate:modelValue":t[13]||(t[13]=e=>d.tempProduct.content.comparison.ht=e)},null,512),[[r.nr,d.tempProduct.content.comparison.ht]])]),(0,a._)("div",Ce,[Ae,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入車重","aria-label":"example","onUpdate:modelValue":t[14]||(t[14]=e=>d.tempProduct.content.comparison.wt=e)},null,512),[[r.nr,d.tempProduct.content.comparison.wt]])]),(0,a._)("div",Se,[Ze,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入油箱容量","aria-label":"example","onUpdate:modelValue":t[15]||(t[15]=e=>d.tempProduct.content.comparison.tank=e)},null,512),[[r.nr,d.tempProduct.content.comparison.tank]])]),(0,a._)("div",Ie,[$e,(0,a.wy)((0,a._)("input",{class:"form-control border-dark rounded-0 border-1 bg-transparent p-3",type:"text",placeholder:"請輸入平均油耗","aria-label":"example","onUpdate:modelValue":t[16]||(t[16]=e=>d.tempProduct.content.comparison.afc=e)},null,512),[[r.nr,d.tempProduct.content.comparison.afc]])])])])])]),(0,a._)("div",Ve,[(0,a._)("div",Ne,[(0,a._)("div",Ee,[(0,a._)("div",qe,[(0,a._)("h6",We,[(0,a.Uk)("副圖 "),(0,a._)("small",{class:(0,s.C_)(["text-danger font-family-taipei text-xxs d-inline-block",{"shake-top":d.wrongMessage}])},(0,s.zw)(d.wrongMessage),3)])]),d.tempProduct.imagesUrl?((0,a.wg)(),(0,a.iD)("div",He,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.tempProduct.imagesUrl,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"preview-more rounded-0 cursor-pointer position-relative d-flex justify-content-center align-items-center border border-1 border-black p-2 me-lg-5 mb-4 mb-lg-0",key:e,onClick:(0,r.iM)((t=>i.delImages(e)),["prevent"])},[(0,a._)("img",{src:e,alt:"'副圖'",class:"w-100"},null,8,ze),Ye],8,Ke)))),128)),d.tempProduct.imagesUrl.length<5?((0,a.wg)(),(0,a.iD)("label",Oe,[(0,a._)("input",{class:"d-none",type:"file",name:"",id:"customFiles",onChange:t[17]||(t[17]=(...e)=>i.uploadFiles&&i.uploadFiles(...e)),multiple:"",ref:"filesInput"},null,544),Be])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])])])])]),(0,a._)("div",Ge,[!1===o.isNew?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"btn btn-outline-dark rounded-5 me-3 mb-0 px-lg-5 py-lg-3 px-4 py-2",onClick:t[18]||(t[18]=(0,r.iM)((t=>e.$emit("del-product",d.tempProduct)),["prevent"]))},"刪除")):(0,a.kq)("",!0),Qe,(0,a._)("button",{type:"button",class:"btn btn-dark rounded-5 me-3 mb-0 px-lg-5 py-lg-3 px-4 py-2",onClick:t[19]||(t[19]=(0,r.iM)((t=>e.$emit("update-product",d.tempProduct)),["prevent"]))},"確認")])])]),(0,a.Wm)(c,{active:d.isLoading},null,8,["active"]),(0,a.Wm)(n,{ref:"delModal",onDelItem:i.delImages},null,8,["onDelItem"])],512)}o(7658);var Re=o(1339),Xe=o(1914),et={components:{DelModal:Xe.Z},props:{product:{type:Object,default(){return{}}},isNew:{type:Boolean,required:!0}},data(){return{isLoading:!1,modal:{},tempProduct:{imagesUrl:[],unit:"輛",is_enabled:1,content:{comparison:{type:"",engine:"",cc:"",hp:"",torque:"",ht:"",wt:"",afc:"",tank:""}}},wrongMessage:""}},methods:{async uploadFile(){try{this.isLoading=!0;const e=this.$refs.fileInput.files[0],t=new FormData;t.append("file-to-upload",e);const o="https://vue3-course-api.hexschool.io/api/je-api/admin/upload",a=await T.Z.post(o,t);a.data.success&&(this.tempProduct.imageUrl=a.data.imageUrl,this.isLoading=!1)}catch(e){console.error("Error",e)}this.isLoading=!1},async uploadFiles(){const e=Array.from(this.$refs.filesInput.files);if(e.length+this.tempProduct.imagesUrl.length>5)this.wrongMessage="(最多只能選擇五張圖片)";else{this.isLoading=!0;try{await Promise.all(e.map((async e=>{const t=new FormData;t.append("file-to-upload",e);const o="https://vue3-course-api.hexschool.io/api/je-api/admin/upload",a=await T.Z.post(o,t);a.data.success&&this.tempProduct.imagesUrl.push(a.data.imageUrl)})))}catch(t){console.error("Error:",t)}this.isLoading=!1}},getProduct(e){const t=this.$router.resolve({path:`/product/${e}`});window.open(t.href,"_blank")},delImage(){this.tempProduct.imageUrl="",this.tempProduct.imageUrl=void 0},delImages(e){const t=this.tempProduct.imagesUrl.indexOf(e);this.tempProduct.imagesUrl.splice(t,1)}},watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])}},mixins:[Re.Z]},tt=o(3744);const ot=(0,tt.Z)(et,[["render",Je]]);var at=ot,rt=o(9023),st=o(9876),lt=o(4238),dt=o(6294),it=o(63),ct={components:{ProductModal:at,DelModal:Xe.Z,Pagination:rt.Z,DashboardSkeleton:it.Z},data(){return{tempProduct:{},isNew:!1,isLoading:!1,skeletonNum:15}},computed:{...(0,st.rn)(lt.Z,["productsPage","pagination"]),...(0,st.rn)(dt.Z,["isLoadingForStore"])},methods:{...(0,st.nv)(lt.Z,["getProductsPage"]),openModal(e,t){this.isLoading=!0,this.tempProduct=e?{imagesUrl:[],unit:"輛",is_enabled:1,content:{comparison:{type:"",engine:"",cc:"",hp:"",torque:"",ht:"",wt:"",afc:"",tank:""}}}:{...t},this.isNew=e,this.isLoading=!1,this.$refs.productModal.showModal()},async updateProduct(e){try{this.tempProduct=e;let t="https://vue3-course-api.hexschool.io/api/je-api/admin/product",o="post";this.$refs.productModal.hideModal(),this.getProductsPage(),this.isNew||(t=`https://vue3-course-api.hexschool.io/api/je-api/admin/product/${e.id}`,o="put");const a=await T.Z[o](t,{data:this.tempProduct});this.pushMessageState(a)}catch(t){console.error("Error 找不到資料:",t)}finally{this.$refs.productModal.hideModal(),this.getProductsPage()}},openDelProductModal(e){this.isLoading=!0,this.tempProduct={...e},this.isLoading=!1,this.$refs.delModal.showModal()},async delProduct(){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/je-api/admin/product/${this.tempProduct.id}`;let t;try{t=await T.Z["delete"](e),this.isLoading=!1,this.$refs.delModal.hideModal(),this.getProductsPage(),this.$refs.productModal.hideModal()}catch(o){console.error("Error",o)}finally{this.pushMessageState(t)}}},created(){this.getProductsPage()},inject:["emitter","pushMessageState"]};const nt=(0,tt.Z)(ct,[["render",L]]);var pt=nt}}]);
//# sourceMappingURL=333.84c50502.js.map