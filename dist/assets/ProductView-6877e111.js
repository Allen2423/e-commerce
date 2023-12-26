import{u as $,s as N,P as p,o as A,r as h,a as B,b as x,c as b,d as e,e as a,w as f,t as c,f as o,g as l,v as i,h as w,F as k,i as F,j as z,k as j,H as M,_ as R,l as D,m as H}from"./index-2b4564b5.js";const I="/e-commerce/assets/Keyboard-584ba651.jpg",T="/e-commerce/assets/product2-faaadbf1.jpg",X="/e-commerce/assets/product3-f240d823.jpg",q="/e-commerce/assets/product4-58dabc56.jpg",E="/e-commerce/assets/product5-2c9cf72d.jpg",K="/e-commerce/assets/product6-b9df477c.jpg",Q={class:"container py-4 flex items-center gap-3"},G=e("i",{class:"fa-solid fa-house"},null,-1),J=e("span",{class:"text-sm text-gray-400"},[e("i",{class:"fa-solid fa-chevron-right"})],-1),O=e("p",{class:"text-gray-600 font-medium"},"Product",-1),W={class:"container grid grid-cols-1 lg:grid-cols-2 gap-6"},Y=z('<div class="overflow-hidden"><img src="'+I+'" alt="product" class="max-h-[34em] object-cover w-full"><div class="grid grid-cols-5 gap-4 mt-4"><img src="'+T+'" alt="product2" class="w-full cursor-pointer border border-primary"><img src="'+X+'" alt="product2" class="w-full cursor-pointer border"><img src="'+q+'" alt="product2" class="w-full cursor-pointer border"><img src="'+E+'" alt="product2" class="w-full cursor-pointer border"><img src="'+K+'" alt="product2" class="w-full cursor-pointer border"></div></div>',1),Z={class:"text-3xl font-medium uppercase mb-2"},ee=z('<div class="flex items-center mb-4"><div class="flex gap-1 text-sm text-yellow-400"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div></div>',1),se={class:"space-y-2"},te={class:"text-gray-800 font-semibold space-x-2"},oe=e("span",null,"Availability: ",-1),re={class:"text-green-600"},ae={class:"space-x-2"},le=e("span",{class:"text-gray-800 font-semibold"},"Category: ",-1),ie={class:"text-gray-600"},de={class:"flex items-baseline mb-1 space-x-2 font-roboto mt-4"},ce={class:"text-xl text-primary font-semibold"},ne={class:"pt-4"},ue=e("h3",{class:"text-sm text-gray-800 uppercase mb-1"},"Size",-1),pe={class:"flex items-center gap-2"},me={class:"size-selector"},_e=e("label",{for:"size-xs",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"XS",-1),fe={class:"size-selector"},ge=e("label",{for:"size-sm",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"S",-1),he={class:"size-selector"},xe=e("label",{for:"size-m",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"M",-1),be={class:"size-selector"},ve=e("label",{for:"size-l",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"L",-1),ye={class:"size-selector"},we=e("label",{for:"size-xl",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"XL",-1),ke={class:"pt-4"},je={class:"text-xl text-gray-800 mb-3 uppercase font-medium"},ze={class:"flex items-center gap-2"},Ce={class:"color-selector"},Ve=e("label",{for:"red",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#fc3d57"}},null,-1),Pe={class:"color-selector"},Se=e("label",{for:"black",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#000"}},null,-1),Ue={class:"color-selector"},Le=e("label",{for:"white",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#fff"}},null,-1),$e={class:"mt-4"},Ne=e("h3",{class:"text-sm text-gray-800 uppercase mb-1"},"Quantity",-1),Ae={class:"flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max"},Be={class:"h-8 w-8 text-base flex items-center justify-center"},Fe={class:"mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5"},Me=e("i",{class:"fa-solid fa-bag-shopping"},null,-1),Re=e("i",{class:"fa-solid fa-heart"},null,-1),De={class:"flex gap-3 mt-4"},He=e("i",{class:"fa-brands fa-facebook-f"},null,-1),Ie=e("i",{class:"fa-brands fa-twitter"},null,-1),Te=e("i",{class:"fa-brands fa-instagram"},null,-1),Xe={class:"container pb-16"},qe=e("h3",{class:"border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium"},"Product details",-1),Ee={class:"w-full md:w-3/5 pt-6"},Ke={class:"text-gray-600"},Qe={class:"container pb-16"},Ge=e("h2",{class:"text-2xl font-medium text-gray-800 uppercase mb-6"},"Related products",-1),Je={class:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"},Ze={__name:"ProductView",setup(Oe){const m=$(),{getSelectedProduct:n,getCurrentCategory:C,getIsLoggedIn:V}=N(m),P=(u,t)=>{m.changeSelectedProduct(u,t)},S=p.filter(u=>u.category==C.value);A(()=>{m.getCart});const v=u=>{V?u=="c"?(m.cartUpdate(n.value),j.push("/cartView")):j.push("/checkoutView"):alert("Please login")},r=h(""),d=h(""),g=h(0),U=()=>{g.value++},L=()=>{g.value--};return(u,t)=>{const _=B("router-link");return x(),b(k,null,[e("div",null,[a(M),a(R),e("div",Q,[a(_,{to:"../index.html",class:"text-primary text-base"},{default:f(()=>[G]),_:1}),J,O]),e("div",W,[Y,e("div",null,[e("h2",Z,c(o(p)[o(n)].name),1),ee,e("div",se,[e("p",te,[oe,e("span",re,c(o(p)[o(n)].stock),1)]),e("p",ae,[le,e("span",ie,c(o(p)[o(n)].category),1)])]),e("div",de,[e("p",ce,c(o(p)[o(n)].price),1)]),e("div",ne,[ue,e("div",pe,[e("div",me,[l(e("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),id:"size-xs",value:"xs",class:"hidden"},null,512),[[i,r.value]]),_e]),e("div",fe,[l(e("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=s=>r.value=s),id:"size-sm",value:"sm",class:"hidden"},null,512),[[i,r.value]]),ge]),e("div",he,[l(e("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=s=>r.value=s),id:"size-m",value:"m",class:"hidden"},null,512),[[i,r.value]]),xe]),e("div",be,[l(e("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=s=>r.value=s),id:"size-l",value:"l",class:"hidden"},null,512),[[i,r.value]]),ve]),e("div",ye,[l(e("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=s=>r.value=s),id:"size-xl",value:"xl",class:"hidden"},null,512),[[i,r.value]]),we])])]),e("div",ke,[e("h3",je,"Color "+c(d.value),1),e("div",ze,[e("div",Ce,[l(e("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=s=>d.value=s),id:"red",value:"red",class:"hidden"},null,512),[[i,d.value]]),Ve]),e("div",Pe,[l(e("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=s=>d.value=s),id:"black",value:"black",class:"hidden"},null,512),[[i,d.value]]),Se]),e("div",Ue,[l(e("input",{type:"radio","onUpdate:modelValue":t[7]||(t[7]=s=>d.value=s),id:"white",value:"white",class:"hidden"},null,512),[[i,d.value]]),Le])])]),e("div",$e,[Ne,e("div",Ae,[e("div",{onClick:L,class:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"},"-"),e("div",Be,c(g.value),1),e("div",{onClick:U,class:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"},"+")])]),e("div",Fe,[e("div",{onClick:t[8]||(t[8]=s=>v("c")),class:"bg-primary border cursor-pointer border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"},[Me,w(" Add to cart ")]),e("div",{onClick:t[9]||(t[9]=s=>v("t")),class:"border border-gray-300 cursor-pointer text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"},[Re,w(" Checkout ")])]),e("div",De,[a(_,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:f(()=>[He]),_:1}),a(_,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:f(()=>[Ie]),_:1}),a(_,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:f(()=>[Te]),_:1})])])]),e("div",Xe,[qe,e("div",Ee,[e("div",Ke,[e("p",null,c(o(p)[o(n)].description),1)])])]),e("div",Qe,[Ge,e("div",Je,[(x(!0),b(k,null,F(o(S),(s,y)=>(x(),b("div",{key:y},[a(D,{onClick:We=>P(y,s.getCurrentCategory),imgPath:s.img,name:s.name,price:s.price,stock:s.stock},null,8,["onClick","imgPath","name","price","stock"])]))),128))])])]),a(H)],64)}}};export{Ze as default};
