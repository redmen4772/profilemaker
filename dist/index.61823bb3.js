const ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};ze();function U(){}function we(e){return e()}function _e(){return Object.create(null)}function F(e){e.forEach(we)}function Me(e){return typeof e=="function"}function be(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ne;function $e(e,t){return ne||(ne=document.createElement("a")),ne.href=t,e===ne.href}function Ne(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function Oe(e){return document.createTextNode(e)}function S(){return Oe(" ")}function $(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function s(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return e===""?null:+e}function He(e){return Array.from(e.childNodes)}function x(e,t){e.value=t==null?"":t}function fe(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let q;function T(e){q=e}function Ve(){if(!q)throw new Error("Function called outside component initialization");return q}function Le(e){Ve().$$.on_mount.push(e)}const R=[],ie=[],re=[],ye=[],xe=Promise.resolve();let pe=!1;function Be(){pe||(pe=!0,xe.then(ve))}function he(e){re.push(e)}const de=new Set;let se=0;function ve(){const e=q;do{for(;se<R.length;){const t=R[se];se++,T(t),Ae(t.$$)}for(T(null),R.length=0,se=0;ie.length;)ie.pop()();for(let t=0;t<re.length;t+=1){const n=re[t];de.has(n)||(de.add(n),n())}re.length=0}while(R.length);for(;ye.length;)ye.pop()();pe=!1,de.clear(),T(e)}function Ae(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(he)}}const ae=new Set;let Je;function ke(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function Pe(e,t,n,i){if(e&&e.o){if(ae.has(e))return;ae.add(e),Je.c.push(()=>{ae.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function De(e){e&&e.c()}function Ce(e,t,n,i){const{fragment:l,on_mount:o,on_destroy:h,after_update:u}=e.$$;l&&l.m(t,n),i||he(()=>{const b=o.map(we).filter(Me);h?h.push(...b):F(b),e.$$.on_mount=[]}),u.forEach(he)}function Se(e,t){const n=e.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function je(e,t){e.$$.dirty[0]===-1&&(R.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,i,l,o,h,u=[-1]){const b=q;T(e);const f=e.$$={fragment:null,ctx:null,props:o,update:U,not_equal:l,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:_e(),dirty:u,skip_bound:!1,root:t.target||b.$$.root};h&&h(f.root);let N=!1;if(f.ctx=n?n(e,t.props||{},(y,E,...I)=>{const A=I.length?I[0]:E;return f.ctx&&l(f.ctx[y],f.ctx[y]=A)&&(!f.skip_bound&&f.bound[y]&&f.bound[y](A),N&&je(e,y)),E}):[],f.update(),N=!0,F(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const y=He(t.target);f.fragment&&f.fragment.l(y),y.forEach(L)}else f.fragment&&f.fragment.c();t.intro&&ke(e.$$.fragment),Ce(e,t.target,t.anchor,t.customElement),ve()}T(b)}class Ie{$destroy(){Se(this,1),this.$destroy=U}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Re(e){let t,n,i,l,o,h,u,b,f,N,y,E,I,A,z,j,G,Z,K,B,O,Y,H,le,g,c,w,v,k,M,_,d,m,r,J,Q,W,me,X,ee,oe,P,te,ue,ge;return{c(){t=p("header"),n=p("img"),l=S(),o=p("b"),o.textContent="Profile Maker",h=S(),u=p("p"),u.innerHTML=`MADE BY
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="20" height="20" viewBox="0 0 24 28" class="svelte-1uzw52s"><path d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path><path d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path></svg>`,b=S(),f=p("a"),N=S(),y=p("main"),E=p("div"),I=p("canvas"),A=S(),z=p("div"),j=p("h1"),j.textContent="COLOR CUSTOMIZING",G=S(),Z=p("br"),K=S(),B=p("span"),O=p("input"),Y=S(),H=p("input"),le=S(),g=p("span"),c=p("input"),w=S(),v=p("span"),k=p("div"),M=S(),_=p("input"),d=S(),m=p("span"),r=p("input"),J=S(),Q=p("div"),W=p("p"),me=S(),X=p("div"),ee=p("p"),oe=S(),P=p("link"),te=p("style"),te.textContent=`*{\r
            font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;\r
            font-variation-settings: 'wght' 400;\r
        }\r
        b{\r
            font-variation-settings: 'wght' 650;\r
        }\r
        .thin{\r
          font-variation-settings: 'wght' 300;\r
        }`,s(n,"class","logo svelte-1uzw52s"),$e(n.src,i="redmen4772.png")||s(n,"src",i),s(n,"alt",""),s(o,"class","title svelte-1uzw52s"),s(u,"class","author svelte-1uzw52s"),s(f,"download","image.png"),s(f,"target","_blank"),s(f,"href",""),fe(f,"display","none"),s(t,"class","svelte-1uzw52s"),s(I,"width","512px"),s(I,"height","512px"),s(I,"class","svelte-1uzw52s"),s(j,"class","svelte-1uzw52s"),s(O,"class","input1 svelte-1uzw52s"),s(O,"id","hair"),s(O,"name","hair"),s(O,"type","color"),s(H,"class","input2 svelte-1uzw52s"),s(H,"type","text"),s(B,"class","HairInputBox"),s(c,"class","eyeInputH svelte-1uzw52s"),s(c,"type","range"),s(c,"id","eyesH"),s(c,"name","eyesH"),s(c,"min","-23"),s(c,"max","328"),s(g,"class","eyeInputHBox"),s(k,"class","eyeInputSback svelte-1uzw52s"),fe(k,"background","linear-gradient(to left,#ffffff,hsl("+(e[2]+23)+",100%,50%))"),s(_,"class","eyeInputS svelte-1uzw52s"),s(_,"type","range"),s(_,"id","eyesS"),s(_,"name","eyesS"),s(_,"min","0"),s(_,"max","100"),s(v,"class","eyeInputSBox"),s(r,"class","eyeInputV svelte-1uzw52s"),s(r,"type","range"),s(r,"id","eyesV"),s(r,"name","eyesV"),s(r,"min","0"),s(r,"max","50"),s(m,"class","eyeInputVBox svelte-1uzw52s"),s(z,"class","colorInputBox svelte-1uzw52s"),s(W,"class","svelte-1uzw52s"),s(Q,"class","download svelte-1uzw52s"),s(ee,"class","svelte-1uzw52s"),s(X,"class","toss svelte-1uzw52s"),s(E,"class","mainView svelte-1uzw52s"),s(y,"class","screen svelte-1uzw52s"),s(P,"rel","stylesheet"),s(P,"as","style"),s(P,"crossorigin","true"),s(P,"href","https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css")},m(C,V){D(C,t,V),a(t,n),a(t,l),a(t,o),a(t,h),a(t,u),a(t,b),a(t,f),e[9](f),D(C,N,V),D(C,y,V),a(y,E),a(E,I),e[10](I),a(E,A),a(E,z),a(z,j),a(z,G),a(z,Z),a(z,K),a(z,B),a(B,O),x(O,e[1]),a(B,Y),a(B,H),x(H,e[1]),a(z,le),a(z,g),a(g,c),x(c,e[2]),a(z,w),a(z,v),a(v,k),a(v,M),a(v,_),x(_,e[3]),a(z,d),a(z,m),a(m,r),x(r,e[4]),a(E,J),a(E,Q),a(Q,W),a(E,me),a(E,X),a(X,ee),D(C,oe,V),a(document.head,P),a(document.head,te),ue||(ge=[$(u,"click",e[8]),$(O,"input",e[11]),$(O,"change",e[6]),$(H,"input",e[12]),$(H,"keyup",e[6]),$(c,"change",e[13]),$(c,"input",e[13]),$(c,"change",e[6]),$(_,"change",e[14]),$(_,"input",e[14]),$(_,"change",e[6]),$(r,"change",e[15]),$(r,"input",e[15]),$(r,"change",e[6]),$(W,"click",e[7]),$(ee,"click",e[16])],ue=!0)},p(C,[V]){V&2&&x(O,C[1]),V&2&&H.value!==C[1]&&x(H,C[1]),V&4&&x(c,C[2]),V&4&&fe(k,"background","linear-gradient(to left,#ffffff,hsl("+(C[2]+23)+",100%,50%))"),V&8&&x(_,C[3]),V&16&&x(r,C[4])},i:U,o:U,d(C){C&&L(t),e[9](null),C&&L(N),C&&L(y),e[10](null),C&&L(oe),L(P),L(te),ue=!1,F(ge)}}}function Te(e,t,n){let i,l="#482c2c",o=-23,h=0,u=0,b,f,N,y;const E=()=>{const g=[[72,44,44],A(l)],c=[[191,246,255],I(o,(100-h)*.25,100-u)],w=[[0,29,81],I(o+31,(100-h)*1,32-u)],v=[[0,83,171],I(o+23,(100-h)*1,67-u)],k=[[98,212,255],I(o+8,(100-h)*.62,100-u)],M=[[174,236,255],I(o+4,(100-h)*.31,100-u)],_=[[142,192,226],I(o+16,(100-h)*.37,88-u)];let d=structuredClone(N);for(let m=0;m<N.data.length;m+=4)JSON.stringify([...N.data.slice(m,m+3)])==JSON.stringify(g[0])&&(d.data[m]=g[1][0],d.data[m+1]=g[1][1],d.data[m+2]=g[1][2]);for(let m=416e3;m<N.data.length-15e4;m+=2048)for(let r=300+m;r<1200+m;r+=4)switch(JSON.stringify([...N.data.slice(r,r+3)])){case JSON.stringify(c[0]):d.data[r]=c[1][0],d.data[r+1]=c[1][1],d.data[r+2]=c[1][2];break;case JSON.stringify(w[0]):d.data[r]=w[1][0],d.data[r+1]=w[1][1],d.data[r+2]=w[1][2];break;case JSON.stringify(v[0]):d.data[r]=v[1][0],d.data[r+1]=v[1][1],d.data[r+2]=v[1][2];break;case JSON.stringify(k[0]):d.data[r]=k[1][0],d.data[r+1]=k[1][1],d.data[r+2]=k[1][2];break;case JSON.stringify(M[0]):d.data[r]=M[1][0],d.data[r+1]=M[1][1],d.data[r+2]=M[1][2];break;case JSON.stringify(_[0]):d.data[r]=_[1][0],d.data[r+1]=_[1][1],d.data[r+2]=_[1][2];break}f.putImageData(d,0,0)},I=(g,c,w)=>{let v,k,M,_,d,m,r,J;if(g=Math.max(0,Math.min(360,g)),c=Math.max(0,Math.min(100,c)),w=Math.max(0,Math.min(100,w)),c/=100,w/=100,c===0)v=k=M=w;else switch(g/=60,_=Math.floor(g),d=g-_,m=w*(1-c),r=w*(1-c*d),J=w*(1-c*(1-d)),_){case 0:v=w,k=J,M=m;break;case 1:v=r,k=w,M=m;break;case 2:v=m,k=w,M=J;break;case 3:v=m,k=r,M=w;break;case 4:v=J,k=m,M=w;break;default:v=w,k=m,M=r;break}return[Math.round(v*255),Math.round(k*255),Math.round(M*255)]},A=g=>{let c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g);return c?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:[0,0,0]},z=()=>{n(5,y.href=i.toDataURL("image/png").replace("image/png","application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=image.png"),y),y.click()};Le(()=>{b=new Image,b.src="./redmen4772.png",b.onload=()=>{f=i.getContext("2d"),f.drawImage(b,0,0,i.width,i.height),N=f.getImageData(0,0,i.width,i.height),E()}});const j=()=>location.href="https://github.com/redmen4772";function G(g){ie[g?"unshift":"push"](()=>{y=g,n(5,y)})}function Z(g){ie[g?"unshift":"push"](()=>{i=g,n(0,i)})}function K(){l=this.value,n(1,l)}function B(){l=this.value,n(1,l)}function O(){o=ce(this.value),n(2,o)}function Y(){h=ce(this.value),n(3,h)}function H(){u=ce(this.value),n(4,u)}return[i,l,o,h,u,y,E,z,j,G,Z,K,B,O,Y,H,()=>{location.href="https://toss.me/redmen4772"}]}class Ue extends Ie{constructor(t){super(),Ee(this,t,Te,Re,be,{})}}function qe(e){let t,n,i,l,o,h;return t=new Ue({}),{c(){De(t.$$.fragment),n=S(),i=p("div"),l=S(),o=p("style"),o.textContent=`*{
        position: relative;
        margin: 0;
        padding: 0;
    }`},m(u,b){Ce(t,u,b),D(u,n,b),D(u,i,b),D(u,l,b),a(document.head,o),h=!0},p:U,i(u){h||(ke(t.$$.fragment,u),h=!0)},o(u){Pe(t.$$.fragment,u),h=!1},d(u){Se(t,u),u&&L(n),u&&L(i),u&&L(l),L(o)}}}class Fe extends Ie{constructor(t){super(),Ee(this,t,null,qe,be,{})}}new Fe({target:document.getElementById("app")});
