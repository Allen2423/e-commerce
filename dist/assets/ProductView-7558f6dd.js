import{u as N,s as q,o as A,r as v,a as B,b as x,c as b,d as e,e as i,w as h,t as n,f as a,g as d,v as c,h as k,F as z,i as F,j as C,k as j,H as M,_ as R,l as D,m as H}from"./index-21f282fb.js";import{P as p}from"./Products-62085741.js";const I="/e-commerce/assets/Sofa-277e5b2f.jpg",T="/e-commerce/assets/product2-faaadbf1.jpg",X="/e-commerce/assets/product3-f240d823.jpg",E="/e-commerce/assets/product4-58dabc56.jpg",G="/e-commerce/assets/product5-2c9cf72d.jpg",J="/e-commerce/assets/product6-b9df477c.jpg",K={class:"container py-4 flex items-center gap-3"},O=e("i",{class:"fa-solid fa-house"},null,-1),Q=e("span",{class:"text-sm text-gray-400"},[e("i",{class:"fa-solid fa-chevron-right"})],-1),W=e("p",{class:"text-gray-600 font-medium"},"Product",-1),Y={class:"container grid grid-cols-1 lg:grid-cols-2 gap-6"},Z=C('<div class="overflow-hidden"><img src="'+I+'" alt="product" class="max-h-[34em] object-cover w-full"><div class="grid grid-cols-5 gap-4 mt-4"><img src="'+T+'" alt="product2" class="w-full cursor-pointer border border-primary"><img src="'+X+'" alt="product2" class="w-full cursor-pointer border"><img src="'+E+'" alt="product2" class="w-full cursor-pointer border"><img src="'+G+'" alt="product2" class="w-full cursor-pointer border"><img src="'+J+'" alt="product2" class="w-full cursor-pointer border"></div></div>',1),ee={class:"text-3xl font-medium uppercase mb-2"},se=C('<div class="flex items-center mb-4"><div class="flex gap-1 text-sm text-yellow-400"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div></div>',1),te={class:"space-y-2"},oe={class:"text-gray-800 font-semibold space-x-2"},re=e("span",null,"Availability: ",-1),ae={class:"text-green-600"},le={class:"space-x-2"},ie=e("span",{class:"text-gray-800 font-semibold"},"Category: ",-1),de={class:"text-gray-600"},ce={class:"flex items-baseline mb-1 space-x-2 font-roboto mt-4"},ne={class:"text-xl text-primary font-semibold"},ue={class:"pt-4"},pe=e("h3",{class:"text-sm text-gray-800 uppercase mb-1"},"Size",-1),me={class:"flex items-center gap-2"},_e={class:"size-selector"},fe=e("label",{for:"size-xs",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"XS",-1),ge={class:"size-selector"},he=e("label",{for:"size-sm",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"S",-1),ve={class:"size-selector"},xe=e("label",{for:"size-m",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"M",-1),be={class:"size-selector"},ye=e("label",{for:"size-l",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"L",-1),we={class:"size-selector"},ke=e("label",{for:"size-xl",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"XL",-1),ze={class:"pt-4"},je={class:"text-xl text-gray-800 mb-3 uppercase font-medium"},Ce={class:"flex items-center gap-2"},Ve={class:"color-selector"},Pe=e("label",{for:"red",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#fc3d57"}},null,-1),Se={class:"color-selector"},Ue=e("label",{for:"black",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#000"}},null,-1),Le={class:"color-selector"},$e=e("label",{for:"white",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#fff"}},null,-1),Ne={class:"mt-4"},qe=e("h3",{class:"text-sm text-gray-800 uppercase mb-1"},"quantity",-1),Ae={class:"flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max"},Be={class:"h-8 w-8 text-base flex items-center justify-center"},Fe={class:"mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5"},Me=e("i",{class:"fa-solid fa-bag-shopping"},null,-1),Re=e("i",{class:"fa-solid fa-heart"},null,-1),De={class:"flex gap-3 mt-4"},He=e("i",{class:"fa-brands fa-facebook-f"},null,-1),Ie=e("i",{class:"fa-brands fa-twitter"},null,-1),Te=e("i",{class:"fa-brands fa-instagram"},null,-1),Xe={class:"container pb-16"},Ee=e("h3",{class:"border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium"},"Product details",-1),Ge={class:"w-full md:w-3/5 pt-6"},Je={class:"text-gray-600"},Ke={class:"container pb-16"},Oe=e("h2",{class:"text-2xl font-medium text-gray-800 uppercase mb-6"},"Related products",-1),Qe={class:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"},ss={__name:"ProductView",setup(We){const _=N(),{getSelectedProduct:o,getCurrentCategory:V,getIsLoggedIn:P,getProducts01:m}=q(_),S=(u,t)=>{_.changeSelectedProduct(u,t)},U=p.filter(u=>u.category==V.value);A(()=>{_.getCart});const y=u=>{P?(m.value[o.value].size=r.value,m.value[o.value].color=l.value,m.value[o.value].quantity=f.value,u=="c"?(_.cartUpdate(o.value),console.log("................................"+m.value[o.value].size),j.push("/cartView")):j.push("/checkoutView")):alert("Please login")},r=v("sm"),l=v("white"),f=v(1);console.log("................................"+m.value[o.value].size);const L=()=>{f.value++},$=()=>{f.value--};return(u,t)=>{const g=B("router-link");return x(),b(z,null,[e("div",null,[i(M),i(R),e("div",K,[i(g,{to:"#",class:"text-primary text-base"},{default:h(()=>[O]),_:1}),Q,W]),e("div",Y,[Z,e("div",null,[e("h2",ee,n(a(p)[a(o)].name),1),se,e("div",te,[e("p",oe,[re,e("span",ae,n(a(p)[a(o)].stock),1)]),e("p",le,[ie,e("span",de,n(a(p)[a(o)].category),1)])]),e("div",ce,[e("p",ne,n(a(p)[a(o)].price),1)]),e("div",ue,[pe,e("div",me,[e("div",_e,[d(e("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),id:"size-xs",value:"xs",class:"hidden"},null,512),[[c,r.value]]),fe]),e("div",ge,[d(e("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=s=>r.value=s),id:"size-sm",value:"sm",class:"hidden"},null,512),[[c,r.value]]),he]),e("div",ve,[d(e("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=s=>r.value=s),id:"size-m",value:"m",class:"hidden"},null,512),[[c,r.value]]),xe]),e("div",be,[d(e("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=s=>r.value=s),id:"size-l",value:"l",class:"hidden"},null,512),[[c,r.value]]),ye]),e("div",we,[d(e("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=s=>r.value=s),id:"size-xl",value:"xl",class:"hidden"},null,512),[[c,r.value]]),ke])])]),e("div",ze,[e("h3",je,"Color "+n(l.value),1),e("div",Ce,[e("div",Ve,[d(e("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=s=>l.value=s),id:"red",value:"red",class:"hidden"},null,512),[[c,l.value]]),Pe]),e("div",Se,[d(e("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=s=>l.value=s),id:"black",value:"black",class:"hidden"},null,512),[[c,l.value]]),Ue]),e("div",Le,[d(e("input",{type:"radio","onUpdate:modelValue":t[7]||(t[7]=s=>l.value=s),id:"white",value:"white",class:"hidden"},null,512),[[c,l.value]]),$e])])]),e("div",Ne,[qe,e("div",Ae,[e("div",{onClick:$,class:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"},"-"),e("div",Be,n(f.value),1),e("div",{onClick:L,class:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"},"+")])]),e("div",Fe,[e("div",{onClick:t[8]||(t[8]=s=>y("c")),class:"bg-primary border cursor-pointer border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"},[Me,k(" Add to cart ")]),e("div",{onClick:t[9]||(t[9]=s=>y("t")),class:"border border-gray-300 cursor-pointer text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"},[Re,k(" Checkout ")])]),e("div",De,[i(g,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:h(()=>[He]),_:1}),i(g,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:h(()=>[Ie]),_:1}),i(g,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:h(()=>[Te]),_:1})])])]),e("div",Xe,[Ee,e("div",Ge,[e("div",Je,[e("p",null,n(a(p)[a(o)].description),1)])])]),e("div",Ke,[Oe,e("div",Qe,[(x(!0),b(z,null,F(a(U),(s,w)=>(x(),b("div",{key:w},[i(D,{onClick:Ye=>S(w,s.getCurrentCategory),imgPath:s.img,name:s.name,price:s.price,stock:s.stock},null,8,["onClick","imgPath","name","price","stock"])]))),128))])])]),i(H)],64)}}};export{ss as default};
