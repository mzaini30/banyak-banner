var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function f(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){t.value=null==n?"":n}let h;function m(t){h=t}function g(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const $=[],y=[],b=[],v=[],x=Promise.resolve();let k=!1;function _(t){b.push(t)}let w=!1;const C=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];m(n),j(n.$$)}for(m(null),$.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];C.has(n)||(C.add(n),n())}b.length=0}while($.length);for(;v.length;)v.pop()();k=!1,w=!1,C.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const B=new Set;function L(t,n){-1===t.$$.dirty[0]&&($.push(t),k||(k=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(a,i,c,l,u,f,d=[-1]){const p=h;m(a);const g=i.props||{},$=a.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let y=!1;if($.ctx=c?c(a,g,((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),y&&L(a,t)),n})):[],$.update(),y=!0,o($.before_update),$.fragment=!!l&&l($.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();i.intro&&((b=a.$$.fragment)&&b.i&&(B.delete(b),b.i(v))),function(t,e,a){const{fragment:i,on_mount:c,on_destroy:s,after_update:l}=t.$$;i&&i.m(e,a),_((()=>{const e=c.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(_)}(a,i.target,i.anchor),E()}var b,v;m(p)}function S(n){let e,r,a,h,m,g,$,y,b,v,x,k,_,w,C,E,j,B,L,O,S,H,z,M,N,P,T,K,q,F,I,D,G,J,Q,R,U,V;return{c(){e=l("br"),r=u(),a=l("div"),h=l("h5"),h.textContent="Banyak Banner "+A,m=u(),g=l("hr"),$=u(),y=l("div"),b=l("div"),v=l("div"),x=l("p"),x.textContent="Orientasi",k=u(),_=l("div"),w=l("input"),C=u(),E=l("label"),E.textContent="Portrait",j=u(),B=l("div"),L=l("input"),O=u(),S=l("label"),S.textContent="Landscape",H=u(),z=l("div"),M=l("label"),M.textContent="Kumpulan link",N=u(),P=l("textarea"),T=u(),K=l("div"),q=l("p"),q.textContent="Kode hasilnya",F=u(),I=l("div"),D=l("textarea"),G=u(),J=l("p"),J.textContent="Preview",Q=u(),R=l("div"),d(h,"class","text-center"),d(w,"type","radio"),d(w,"name","orientasi"),d(w,"class","form-check-input"),d(w,"id","portrait"),w.checked=!0,d(w,"group",A),w.value="portrait",d(E,"class","form-check-label"),d(E,"for","portrait"),d(_,"class","form-check"),d(L,"type","radio"),d(L,"name","orientasi"),d(L,"class","form-check-input"),d(L,"id","landscape"),d(L,"group",A),L.value="landscape",d(S,"class","form-check-label"),d(S,"for","landscape"),d(B,"class","form-check"),d(v,"class","form-group"),d(M,"for","kumpulan-link"),d(P,"class","form-control"),d(P,"id","kumpulan-link"),d(P,"placeholder","https://situs.com/gambarnya.jpg\nhttps://situs.com/target\n\nhttps://situs.com/gambarnya.jpg\nhttps://situs.com/target"),d(z,"class","form-group"),d(b,"class","col-sm-8"),d(D,"class","form-control"),d(D,"rows","5"),D.readOnly=!0,d(I,"class","form-group"),d(R,"class","hasil svelte-ly4oo4"),d(K,"class","col-sm-4"),d(y,"class","row"),d(a,"class","container")},m(t,o){c(t,e,o),c(t,r,o),c(t,a,o),i(a,h),i(a,m),i(a,g),i(a,$),i(a,y),i(y,b),i(b,v),i(v,x),i(v,k),i(v,_),i(_,w),i(_,C),i(_,E),i(v,j),i(v,B),i(B,L),i(B,O),i(B,S),i(b,H),i(b,z),i(z,M),i(z,N),i(z,P),n[4](P),p(P,n[1]),i(y,T),i(y,K),i(K,q),i(K,F),i(K,I),i(I,D),p(D,n[3]),i(K,G),i(K,J),i(K,Q),i(K,R),R.innerHTML=n[3],n[7](R),U||(V=[f(P,"input",n[5]),f(D,"input",n[6])],U=!0)},p(t,[n]){2&n&&p(P,t[1]),8&n&&p(D,t[3]),8&n&&(R.innerHTML=t[3])},i:t,o:t,d(t){t&&s(e),t&&s(r),t&&s(a),n[4](null),n[7](null),U=!1,o(V)}}}let A="portrait";function H(t,n,e){let o,r,a,i="";return g((()=>{localStorage.banyakBanner&&e(1,r=localStorage.banyakBanner);const t=()=>{e(0,o.style.height=window.innerHeight-250+"px",o),e(2,a.style.height=window.innerHeight-360+"px",a)};t(),window.addEventListener("resize",t)})),t.$$.update=()=>{2&t.$$.dirty&&r&&(e(3,i=`\x3c!--\ngenerator: mzaini30.js.org/banyak-banner\n\n${r}\n\n--\x3e`),localStorage.setItem("banyakBanner",r))},[o,r,a,i,function(t){y[t?"unshift":"push"]((()=>{o=t,e(0,o)}))},function(){r=this.value,e(1,r)},function(){i=this.value,e(3,i),e(1,r)},function(t){y[t?"unshift":"push"]((()=>{a=t,e(2,a)}))}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,H,S,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
