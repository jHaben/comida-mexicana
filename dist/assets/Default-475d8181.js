import{p as A,i as W,c as u,r as J,a as D,g as ie,s as B,o as Q,b as re,d as C,f as Te,e as Be,h as Ie,j as we,k as ce,l as M,m as s,n as ve,t as G,q as de,u as me,v as ke,w as Ce,x as L,y as Ae,z as Pe,A as Re,B as fe,C as ee,D as te,E as z,F as $e,G as Le}from"./index-fcff105a.js";import{u as ze,m as q,a as ae,b as E,c as Me,d as Ee,e as Ne,f as He,g as Oe,h as De,i as je,V as Ue,j as X,k as qe,l as Y,n as Fe}from"./VSheet-78927f5c.js";const U=Symbol.for("vuetify:layout"),ye=Symbol.for("vuetify:layout-item"),se=1e3,Ke=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ze=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Xe(){const e=W(U);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ye(e){const o=W(U);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Be()}`,n=ie("useLayoutItem");re(ye,{id:t});const l=B(!1);Ie(()=>l.value=!0),we(()=>l.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:i}=o.register(n,{...e,active:u(()=>l.value?!1:e.active.value),id:t});return ce(()=>o.unregister(t)),{layoutItemStyles:a,layoutRect:o.layoutRect,layoutItemScrimStyles:i}}const Ge=(e,o,t,n)=>{let l={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...l}}];for(const i of e){const d=o.get(i),g=t.get(i),h=n.get(i);if(!d||!g||!h)continue;const r={...l,[d.value]:parseInt(l[d.value],10)+(h.value?parseInt(g.value,10):0)};a.push({id:i,layer:r}),l=r}return a};function We(e){const o=W(U,null),t=u(()=>o?o.rootZIndex.value-100:se),n=J([]),l=D(new Map),a=D(new Map),i=D(new Map),d=D(new Map),g=D(new Map),{resizeRef:h,contentRect:r}=ze(),I=u(()=>{const m=new Map,x=e.overlaps??[];for(const v of x.filter(b=>b.includes(":"))){const[b,y]=v.split(":");if(!n.value.includes(b)||!n.value.includes(y))continue;const k=l.get(b),$=l.get(y),N=a.get(b),H=a.get(y);!k||!$||!N||!H||(m.set(y,{position:k.value,amount:parseInt(N.value,10)}),m.set(b,{position:$.value,amount:-parseInt(H.value,10)}))}return m}),p=u(()=>{const m=[...new Set([...i.values()].map(v=>v.value))].sort((v,b)=>v-b),x=[];for(const v of m){const b=n.value.filter(y=>{var k;return((k=i.get(y))==null?void 0:k.value)===v});x.push(...b)}return Ge(x,l,a,d)}),f=u(()=>!Array.from(g.values()).some(m=>m.value)),S=u(()=>p.value[p.value.length-1].layer),w=u(()=>({"--v-layout-left":C(S.value.left),"--v-layout-right":C(S.value.right),"--v-layout-top":C(S.value.top),"--v-layout-bottom":C(S.value.bottom),...f.value?void 0:{transition:"none"}})),_=u(()=>p.value.slice(1).map((m,x)=>{let{id:v}=m;const{layer:b}=p.value[x],y=a.get(v),k=l.get(v);return{id:v,...b,size:Number(y.value),position:k.value}})),P=m=>_.value.find(x=>x.id===m),c=ie("createLayout"),V=B(!1);Q(()=>{V.value=!0}),re(U,{register:(m,x)=>{let{id:v,order:b,position:y,layoutSize:k,elementSize:$,active:N,disableTransitions:H,absolute:Se}=x;i.set(v,b),l.set(v,y),a.set(v,k),d.set(v,N),H&&g.set(v,H);const le=Te(ye,c==null?void 0:c.vnode).indexOf(m);le>-1?n.value.splice(le,0,v):n.value.push(v);const oe=u(()=>_.value.findIndex(O=>O.id===v)),F=u(()=>t.value+p.value.length*2-oe.value*2),xe=u(()=>{const O=y.value==="left"||y.value==="right",K=y.value==="right",Ve=y.value==="bottom",ne={[y.value]:0,zIndex:F.value,transform:`translate${O?"X":"Y"}(${(N.value?0:-110)*(K||Ve?-1:1)}%)`,position:Se.value||t.value!==se?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!V.value)return ne;const T=_.value[oe.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const Z=I.value.get(v);return Z&&(T[Z.position]+=Z.amount),{...ne,height:O?`calc(100% - ${T.top}px - ${T.bottom}px)`:$.value?`${$.value}px`:void 0,left:K?void 0:`${T.left}px`,right:K?`${T.right}px`:void 0,top:y.value!=="bottom"?`${T.top}px`:void 0,bottom:y.value!=="top"?`${T.bottom}px`:void 0,width:O?$.value?`${$.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),_e=u(()=>({zIndex:F.value-1}));return{layoutItemStyles:xe,layoutItemScrimStyles:_e,zIndex:F}},unregister:m=>{i.delete(m),l.delete(m),a.delete(m),d.delete(m),g.delete(m),n.value=n.value.filter(x=>x!==m)},mainRect:S,mainStyles:w,getLayoutItem:P,items:_,layoutRect:r,rootZIndex:t});const R=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),j=u(()=>({zIndex:t.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:R,layoutStyles:j,getLayoutItem:P,items:_,layoutRect:r,layoutRef:h}}const ge=A({text:String,...q(),...ae()},"VToolbarTitle"),pe=M()({name:"VToolbarTitle",props:ge(),setup(e,o){let{slots:t}=o;return E(()=>{const n=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[n&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),Je=[null,"prominent","default","comfortable","compact"],he=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Je.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Me(),...q(),...Ee(),...Ne(),...ae({tag:"header"}),...ve()},"VToolbar"),ue=M()({name:"VToolbar",props:he(),setup(e,o){var f;let{slots:t}=o;const{backgroundColorClasses:n,backgroundColorStyles:l}=He(G(e,"color")),{borderClasses:a}=Oe(e),{elevationClasses:i}=De(e),{roundedClasses:d}=je(e),{themeClasses:g}=de(e),{rtlClasses:h}=me(),r=B(!!(e.extended||(f=t.extension)!=null&&f.call(t))),I=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=u(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ke({VBtn:{variant:"text"}}),E(()=>{var P;const S=!!(e.title||t.title),w=!!(t.image||e.image),_=(P=t.extension)==null?void 0:P.call(t);return r.value=!!(e.extended||_),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,i.value,d.value,g.value,h.value,e.class],style:[l.value,e.style]},{default:()=>[w&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(X,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Ue,{key:"image-img",cover:!0,src:e.image},null)]),s(X,{defaults:{VTabs:{height:C(I.value)}}},{default:()=>{var c,V,R;return[s("div",{class:"v-toolbar__content",style:{height:C(I.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(c=t.prepend)==null?void 0:c.call(t)]),S&&s(pe,{key:"title",text:e.title},{text:t.title}),(V=t.default)==null?void 0:V.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(R=t.append)==null?void 0:R.call(t)])])]}}),s(X,{defaults:{VTabs:{height:C(p.value)}}},{default:()=>[s(qe,null,{default:()=>[r.value&&s("div",{class:"v-toolbar__extension",style:{height:C(p.value)}},[_])]})]})]})}),{contentHeight:I,extensionHeight:p}}}),Qe=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function et(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let n=0;const l=J(null),a=B(0),i=B(0),d=B(0),g=B(!1),h=B(!1),r=u(()=>Number(e.scrollThreshold)),I=u(()=>Ce((r.value-a.value)/r.value||0)),p=()=>{const f=l.value;!f||t&&!t.value||(n=a.value,a.value="window"in f?f.pageYOffset:f.scrollTop,h.value=a.value<n,d.value=Math.abs(a.value-r.value))};return L(h,()=>{i.value=i.value||a.value}),L(g,()=>{i.value=0}),Q(()=>{L(()=>e.scrollTarget,f=>{var w;const S=f?document.querySelector(f):window;S&&S!==l.value&&((w=l.value)==null||w.removeEventListener("scroll",p),l.value=S,l.value.addEventListener("scroll",p,{passive:!0}))},{immediate:!0})}),ce(()=>{var f;(f=l.value)==null||f.removeEventListener("scroll",p)}),t&&L(t,p,{immediate:!0}),{scrollThreshold:r,currentScroll:a,currentThreshold:d,isScrollActive:g,scrollRatio:I,isScrollingUp:h,savedScroll:i}}function be(){const e=B(!1);return Q(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:u(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ae(e)}}const tt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...he(),...Ze(),...Qe(),height:{type:[Number,String],default:64}},"VAppBar"),at=M()({name:"VAppBar",props:tt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=J(),l=Pe(e,"modelValue"),a=u(()=>{var V;const c=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),i=u(()=>{const c=a.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!l.value}),{currentScroll:d,scrollThreshold:g,isScrollingUp:h,scrollRatio:r}=et(e,{canScroll:i}),I=u(()=>e.collapse||a.value.collapse&&(a.value.inverted?r.value>0:r.value===0)),p=u(()=>e.flat||a.value.elevate&&(a.value.inverted?d.value>0:d.value===0)),f=u(()=>a.value.fadeImage?a.value.inverted?1-r.value:r.value:void 0),S=u(()=>{var R,j;if(a.value.hide&&a.value.inverted)return 0;const c=((R=n.value)==null?void 0:R.contentHeight)??0,V=((j=n.value)==null?void 0:j.extensionHeight)??0;return c+V});function w(){a.value.hide?a.value.inverted?l.value=d.value>g.value:l.value=h.value||d.value<g.value:l.value=!0}Re(()=>!!e.scrollBehavior,()=>{L(d,w,{immediate:!0}),L(a,w)});const{ssrBootStyles:_}=be(),{layoutItemStyles:P}=Ye({id:e.name,order:u(()=>parseInt(e.order,10)),position:G(e,"location"),layoutSize:S,elementSize:B(void 0),active:l,absolute:G(e,"absolute")});return E(()=>{const[c]=ue.filterProps(e);return s(ue,fe({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":f.value,height:void 0,..._.value},e.style]},c,{collapse:I.value,flat:p.value}),t)}),{}}}),lt=M()({name:"VAppBarTitle",props:ge(),setup(e,o){let{slots:t}=o;return E(()=>s(pe,fe(e,{class:"v-app-bar-title"}),t)),{}}}),ot={__name:"AppBar",setup(e){return(o,t)=>(ee(),te(at,{app:"",elevation:2,rounded:"",color:"primary"},{append:z(()=>[s(Y,{icon:"mdi-heart"}),s(Y,{icon:"mdi-magnify"}),s(Y,{icon:"mdi-dots-vertical"})]),default:z(()=>[s(lt,{class:"text-h4 font-weight-bold"},{default:z(()=>[$e(" Comida Mexicana ")]),_:1})]),_:1}))}};const nt=A({scrollable:Boolean,...q(),...ae({tag:"main"})},"VMain"),st=M()({name:"VMain",props:nt(),setup(e,o){let{slots:t}=o;const{mainStyles:n}=Xe(),{ssrBootStyles:l}=be();return E(()=>s(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,l.value,e.style]},{default:()=>{var a,i;return[e.scrollable?s("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),ut={__name:"View",setup(e){return(o,t)=>{const n=Le("router-view");return ee(),te(st,null,{default:z(()=>[s(n)]),_:1})}}};const it=A({...q(),...Ke({fullHeight:!0}),...ve()},"VApp"),rt=M()({name:"VApp",props:it(),setup(e,o){let{slots:t}=o;const n=de(e),{layoutClasses:l,layoutStyles:a,getLayoutItem:i,items:d,layoutRef:g}=We(e),{rtlClasses:h}=me();return E(()=>{var r;return s("div",{ref:g,class:["v-application",n.themeClasses.value,l.value,h.value,e.class],style:[a.value,e.style]},[s("div",{class:"v-application__wrap"},[(r=t.default)==null?void 0:r.call(t)])])}),{getLayoutItem:i,items:d,theme:n}}}),mt={__name:"Default",setup(e){return(o,t)=>(ee(),te(rt,null,{default:z(()=>[s(Fe,{color:"secondary",height:"100%"},{default:z(()=>[s(ot),s(ut)]),_:1})]),_:1}))}};export{mt as default};