import{u as $,s as N,P as p,o as A,r as h,a as B,b as x,c as b,d as s,e as a,w as f,t as c,f as o,g as l,v as i,h as w,F as k,i as F,j as z,k as j,H as M,_ as R,l as D,m as H}from"./index-dd9ceb3f.js";const I="/assets/Keyboard-584ba651.jpg",T="/assets/product2-faaadbf1.jpg",X="/assets/product3-f240d823.jpg",q="/assets/product4-58dabc56.jpg",E="/assets/product5-2c9cf72d.jpg",K="/assets/product6-b9df477c.jpg",Q={class:"container py-4 flex items-center gap-3"},G=s("i",{class:"fa-solid fa-house"},null,-1),J=s("span",{class:"text-sm text-gray-400"},[s("i",{class:"fa-solid fa-chevron-right"})],-1),O=s("p",{class:"text-gray-600 font-medium"},"Product",-1),W={class:"container grid grid-cols-1 lg:grid-cols-2 gap-6"},Y=z('<div class="overflow-hidden"><img src="'+I+'" alt="product" class="max-h-[34em] object-cover w-full"><div class="grid grid-cols-5 gap-4 mt-4"><img src="'+T+'" alt="product2" class="w-full cursor-pointer border border-primary"><img src="'+X+'" alt="product2" class="w-full cursor-pointer border"><img src="'+q+'" alt="product2" class="w-full cursor-pointer border"><img src="'+E+'" alt="product2" class="w-full cursor-pointer border"><img src="'+K+'" alt="product2" class="w-full cursor-pointer border"></div></div>',1),Z={class:"text-3xl font-medium uppercase mb-2"},ss=z('<div class="flex items-center mb-4"><div class="flex gap-1 text-sm text-yellow-400"><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span></div></div>',1),es={class:"space-y-2"},ts={class:"text-gray-800 font-semibold space-x-2"},os=s("span",null,"Availability: ",-1),rs={class:"text-green-600"},as={class:"space-x-2"},ls=s("span",{class:"text-gray-800 font-semibold"},"Category: ",-1),is={class:"text-gray-600"},ds={class:"flex items-baseline mb-1 space-x-2 font-roboto mt-4"},cs={class:"text-xl text-primary font-semibold"},ns={class:"pt-4"},us=s("h3",{class:"text-sm text-gray-800 uppercase mb-1"},"Size",-1),ps={class:"flex items-center gap-2"},ms={class:"size-selector"},_s=s("label",{for:"size-xs",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"XS",-1),fs={class:"size-selector"},gs=s("label",{for:"size-sm",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"S",-1),hs={class:"size-selector"},xs=s("label",{for:"size-m",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"M",-1),bs={class:"size-selector"},vs=s("label",{for:"size-l",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"L",-1),ys={class:"size-selector"},ws=s("label",{for:"size-xl",class:"text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"},"XL",-1),ks={class:"pt-4"},js={class:"text-xl text-gray-800 mb-3 uppercase font-medium"},zs={class:"flex items-center gap-2"},Cs={class:"color-selector"},Vs=s("label",{for:"red",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#fc3d57"}},null,-1),Ps={class:"color-selector"},Ss=s("label",{for:"black",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#000"}},null,-1),Us={class:"color-selector"},Ls=s("label",{for:"white",class:"border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block",style:{"background-color":"#fff"}},null,-1),$s={class:"mt-4"},Ns=s("h3",{class:"text-sm text-gray-800 uppercase mb-1"},"Quantity",-1),As={class:"flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max"},Bs={class:"h-8 w-8 text-base flex items-center justify-center"},Fs={class:"mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5"},Ms=s("i",{class:"fa-solid fa-bag-shopping"},null,-1),Rs=s("i",{class:"fa-solid fa-heart"},null,-1),Ds={class:"flex gap-3 mt-4"},Hs=s("i",{class:"fa-brands fa-facebook-f"},null,-1),Is=s("i",{class:"fa-brands fa-twitter"},null,-1),Ts=s("i",{class:"fa-brands fa-instagram"},null,-1),Xs={class:"container pb-16"},qs=s("h3",{class:"border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium"},"Product details",-1),Es={class:"w-full md:w-3/5 pt-6"},Ks={class:"text-gray-600"},Qs={class:"container pb-16"},Gs=s("h2",{class:"text-2xl font-medium text-gray-800 uppercase mb-6"},"Related products",-1),Js={class:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"},Zs={__name:"ProductView",setup(Os){const m=$(),{getSelectedProduct:n,getCurrentCategory:C,getIsLoggedIn:V}=N(m),P=(u,t)=>{m.changeSelectedProduct(u,t)},S=p.filter(u=>u.category==C.value);A(()=>{m.getCart});const v=u=>{V?u=="c"?(m.cartUpdate(n.value),j.push("/cartView")):j.push("/checkoutView"):alert("Please login")},r=h(""),d=h(""),g=h(0),U=()=>{g.value++},L=()=>{g.value--};return(u,t)=>{const _=B("router-link");return x(),b(k,null,[s("div",null,[a(M),a(R),s("div",Q,[a(_,{to:"../index.html",class:"text-primary text-base"},{default:f(()=>[G]),_:1}),J,O]),s("div",W,[Y,s("div",null,[s("h2",Z,c(o(p)[o(n)].name),1),ss,s("div",es,[s("p",ts,[os,s("span",rs,c(o(p)[o(n)].stock),1)]),s("p",as,[ls,s("span",is,c(o(p)[o(n)].category),1)])]),s("div",ds,[s("p",cs,c(o(p)[o(n)].price),1)]),s("div",ns,[us,s("div",ps,[s("div",ms,[l(s("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),id:"size-xs",value:"xs",class:"hidden"},null,512),[[i,r.value]]),_s]),s("div",fs,[l(s("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),id:"size-sm",value:"sm",class:"hidden"},null,512),[[i,r.value]]),gs]),s("div",hs,[l(s("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>r.value=e),id:"size-m",value:"m",class:"hidden"},null,512),[[i,r.value]]),xs]),s("div",bs,[l(s("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=e=>r.value=e),id:"size-l",value:"l",class:"hidden"},null,512),[[i,r.value]]),vs]),s("div",ys,[l(s("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>r.value=e),id:"size-xl",value:"xl",class:"hidden"},null,512),[[i,r.value]]),ws])])]),s("div",ks,[s("h3",js,"Color "+c(d.value),1),s("div",zs,[s("div",Cs,[l(s("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=e=>d.value=e),id:"red",value:"red",class:"hidden"},null,512),[[i,d.value]]),Vs]),s("div",Ps,[l(s("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=e=>d.value=e),id:"black",value:"black",class:"hidden"},null,512),[[i,d.value]]),Ss]),s("div",Us,[l(s("input",{type:"radio","onUpdate:modelValue":t[7]||(t[7]=e=>d.value=e),id:"white",value:"white",class:"hidden"},null,512),[[i,d.value]]),Ls])])]),s("div",$s,[Ns,s("div",As,[s("div",{onClick:L,class:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"},"-"),s("div",Bs,c(g.value),1),s("div",{onClick:U,class:"h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"},"+")])]),s("div",Fs,[s("div",{onClick:t[8]||(t[8]=e=>v("c")),class:"bg-primary border cursor-pointer border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"},[Ms,w(" Add to cart ")]),s("div",{onClick:t[9]||(t[9]=e=>v("t")),class:"border border-gray-300 cursor-pointer text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"},[Rs,w(" Checkout ")])]),s("div",Ds,[a(_,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:f(()=>[Hs]),_:1}),a(_,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:f(()=>[Is]),_:1}),a(_,{to:"#",class:"text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"},{default:f(()=>[Ts]),_:1})])])]),s("div",Xs,[qs,s("div",Es,[s("div",Ks,[s("p",null,c(o(p)[o(n)].description),1)])])]),s("div",Qs,[Gs,s("div",Js,[(x(!0),b(k,null,F(o(S),(e,y)=>(x(),b("div",{key:y},[a(D,{onClick:Ws=>P(y,e.getCurrentCategory),imgPath:e.img,name:e.name,price:e.price,stock:e.stock},null,8,["onClick","imgPath","name","price","stock"])]))),128))])])]),a(H)],64)}}};export{Zs as default};
