import{S as t,i as e,s as a,r as n,a as r,e as s,m as i,J as c,f as l,c as o,b as d,d as m,n as u,g as h,h as f,p,j as $,t as g,k as D,l as v,o as E,K as w,G as T,A as b,q as A,u as L,v as S,w as _,x as O,y,z as M}from"./client.89bef6dc.js";import{c as x,a as C,h as H,L as R}from"./createOctokit.2702fcf4.js";function I(t,e,a){const n=t.slice();return n[9]=e[a],n}function N(t){let e,a,c,$,g,D=t[4].title+"",v=("closed"===t[4].state?t[4].metadata.start?n.i18n.incidentCompleted:n.i18n.incidentFixed:t[4].metadata.start?n.i18n.incidentScheduled:n.i18n.incidentOngoing)+"";return{c(){e=i(D),a=r(),c=s("span"),$=i(v),this.h()},l(t){e=u(t,D),a=o(t),c=d(t,"SPAN",{class:!0});var n=m(c);$=u(n,v),n.forEach(l),this.h()},h(){h(c,"class",g=T(`tag ${t[4].state}`)+" svelte-4o16l6")},m(t,n){f(t,e,n),f(t,a,n),f(t,c,n),p(c,$)},p(t,a){16&a&&D!==(D=t[4].title+"")&&b(e,D),16&a&&v!==(v=("closed"===t[4].state?t[4].metadata.start?n.i18n.incidentCompleted:n.i18n.incidentFixed:t[4].metadata.start?n.i18n.incidentScheduled:n.i18n.incidentOngoing)+"")&&b($,v),16&a&&g!==(g=T(`tag ${t[4].state}`)+" svelte-4o16l6")&&h(c,"class",g)},d(t){t&&l(e),t&&l(a),t&&l(c)}}}function U(t){let e,a=n.i18n.incidentDetails+"";return{c(){e=i(a)},l(t){e=u(t,a)},m(t,a){f(t,e,a)},p:A,d(t){t&&l(e)}}}function V(t){let e,a,c,$,g,D,v,E,w,T,b,_=n.i18n.incidentViewOnGitHub+"";function O(t,e){return t[4].metadata.start?B:k}let y=O(t),M=y(t);function x(t,e){return t[4].metadata.start&&t[4].metadata.end?P:t[4].closed_at?F:void 0}let C=x(t),H=C&&C(t),R=t[3],N=[];for(let e=0;e<R.length;e+=1)N[e]=G(I(t,R,e));return{c(){e=s("div"),a=s("dl"),M.c(),c=L(),H&&H.c(),$=r(),g=s("div"),D=s("p"),v=s("a"),E=i(_),T=r();for(let t=0;t<N.length;t+=1)N[t].c();b=L(),this.h()},l(t){e=d(t,"DIV",{class:!0});var n=m(e);a=d(n,"DL",{});var r=m(a);M.l(r),c=L(),H&&H.l(r),r.forEach(l),$=o(n),g=d(n,"DIV",{class:!0});var s=m(g);D=d(s,"P",{class:!0});var i=m(D);v=d(i,"A",{href:!0});var h=m(v);E=u(h,_),h.forEach(l),i.forEach(l),s.forEach(l),n.forEach(l),T=o(t);for(let e=0;e<N.length;e+=1)N[e].l(t);b=L(),this.h()},h(){h(v,"href",w=`https://github.com/${n.owner}/${n.repo}/issues/${t[0]}`),h(D,"class","svelte-4o16l6"),h(g,"class","r svelte-4o16l6"),h(e,"class","f")},m(t,n){f(t,e,n),p(e,a),M.m(a,null),p(a,c),H&&H.m(a,null),p(e,$),p(e,g),p(g,D),p(D,v),p(v,E),f(t,T,n);for(let e=0;e<N.length;e+=1)N[e].m(t,n);f(t,b,n)},p(t,e){if(y===(y=O(t))&&M?M.p(t,e):(M.d(1),M=y(t),M&&(M.c(),M.m(a,c))),C===(C=x(t))&&H?H.p(t,e):(H&&H.d(1),H=C&&C(t),H&&(H.c(),H.m(a,null))),1&e&&w!==(w=`https://github.com/${n.owner}/${n.repo}/issues/${t[0]}`)&&h(v,"href",w),40&e){let a;for(R=t[3],a=0;a<R.length;a+=1){const n=I(t,R,a);N[a]?N[a].p(n,e):(N[a]=G(n),N[a].c(),N[a].m(b.parentNode,b))}for(;a<N.length;a+=1)N[a].d(1);N.length=R.length}},i:A,o:A,d(t){t&&l(e),M.d(),H&&H.d(),t&&l(T),S(N,t),t&&l(b)}}}function j(t){let e,a;return e=new R({}),{c(){_(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){y(e,t,n),a=!0},p:A,i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}function k(t){let e,a,r,c,o=n.i18n.incidentOpenedAt+"",h=new Date(t[4].created_at).toLocaleString()+"";return{c(){e=s("dt"),a=i(o),r=s("dd"),c=i(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(l),r=d(t,"DD",{});var s=m(r);c=u(s,h),s.forEach(l)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,c)},p(t,e){16&e&&h!==(h=new Date(t[4].created_at).toLocaleString()+"")&&b(c,h)},d(t){t&&l(e),t&&l(r)}}}function B(t){let e,a,c,h,$,g=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?n.i18n.startedAt:n.i18n.startsAt)+"",D=new Date(t[4].metadata.start).toLocaleString()+"";return{c(){e=s("dt"),a=i(g),c=r(),h=s("dd"),$=i(D)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,g),c=o(n),n.forEach(l),h=d(t,"DD",{});var r=m(h);$=u(r,D),r.forEach(l)},m(t,n){f(t,e,n),p(e,a),p(e,c),f(t,h,n),p(h,$)},p(t,e){16&e&&g!==(g=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?n.i18n.startedAt:n.i18n.startsAt)+"")&&b(a,g),16&e&&D!==(D=new Date(t[4].metadata.start).toLocaleString()+"")&&b($,D)},d(t){t&&l(e),t&&l(h)}}}function F(t){let e,a,r,c,o=n.i18n.incidentClosedAt+"",h=new Date(t[4].closed_at).toLocaleString()+"";return{c(){e=s("dt"),a=i(o),r=s("dd"),c=i(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(l),r=d(t,"DD",{});var s=m(r);c=u(s,h),s.forEach(l)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,c)},p(t,e){16&e&&h!==(h=new Date(t[4].closed_at).toLocaleString()+"")&&b(c,h)},d(t){t&&l(e),t&&l(r)}}}function P(t){let e,a,r,c,o=n.i18n.duration+"",h=n.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"";return{c(){e=s("dt"),a=i(o),r=s("dd"),c=i(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(l),r=d(t,"DD",{});var s=m(r);c=u(s,h),s.forEach(l)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,c)},p(t,e){16&e&&h!==(h=n.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"")&&b(c,h)},d(t){t&&l(e),t&&l(r)}}}function G(t){let e,a,i,c,u,$=t[5](t[9].body)+"",g=n.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${t[9].html_url}>${new Date(t[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${t[9].user.html_url}>@${t[9].user.login}</a>`)+"";return{c(){e=s("article"),a=s("p"),i=r(),c=s("div"),u=r(),this.h()},l(t){e=d(t,"ARTICLE",{});var n=m(e);a=d(n,"P",{class:!0}),m(a).forEach(l),i=o(n),c=d(n,"DIV",{}),m(c).forEach(l),u=o(n),n.forEach(l),this.h()},h(){h(a,"class","svelte-4o16l6")},m(t,n){f(t,e,n),p(e,a),a.innerHTML=$,p(e,i),p(e,c),c.innerHTML=g,p(e,u)},p(t,e){8&e&&$!==($=t[5](t[9].body)+"")&&(a.innerHTML=$),8&e&&g!==(g=n.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${t[9].html_url}>${new Date(t[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${t[9].user.html_url}>@${t[9].user.login}</a>`)+"")&&(c.innerHTML=g)},d(t){t&&l(e)}}}function q(t){let e,a,E,w,T,b,A,L,S,_,O,y,M=n.i18n.incidentBack+"";function x(t,e){return t[2]?U:N}document.title=e=n.i18n.incidentTitle.replace("$NUMBER",t[0]);let C=x(t),H=C(t);const R=[j,V],I=[];function k(t,e){return t[1]?0:1}return b=k(t),A=I[b]=R[b](t),{c(){a=r(),E=s("h2"),H.c(),w=r(),T=s("section"),A.c(),L=r(),S=s("footer"),_=s("a"),O=i(M),this.h()},l(t){c('[data-svelte="svelte-slinv8"]',document.head).forEach(l),a=o(t),E=d(t,"H2",{class:!0});var e=m(E);H.l(e),e.forEach(l),w=o(t),T=d(t,"SECTION",{});var n=m(T);A.l(n),n.forEach(l),L=o(t),S=d(t,"FOOTER",{class:!0});var r=m(S);_=d(r,"A",{href:!0});var s=m(_);O=u(s,M),s.forEach(l),r.forEach(l),this.h()},h(){h(E,"class","svelte-4o16l6"),h(_,"href",n.path),h(S,"class","svelte-4o16l6")},m(t,e){f(t,a,e),f(t,E,e),H.m(E,null),f(t,w,e),f(t,T,e),I[b].m(T,null),f(t,L,e),f(t,S,e),p(S,_),p(_,O),y=!0},p(t,[a]){(!y||1&a)&&e!==(e=n.i18n.incidentTitle.replace("$NUMBER",t[0]))&&(document.title=e),C===(C=x(t))&&H?H.p(t,a):(H.d(1),H=C(t),H&&(H.c(),H.m(E,null)));let r=b;b=k(t),b===r?I[b].p(t,a):($(),g(I[r],1,1,(()=>{I[r]=null})),D(),A=I[b],A?A.p(t,a):(A=I[b]=R[b](t),A.c()),v(A,1),A.m(T,null))},i(t){y||(v(A),y=!0)},o(t){g(A),y=!1},d(t){t&&l(a),t&&l(E),H.d(),t&&l(w),t&&l(T),I[b].d(),t&&l(L),t&&l(S)}}}function z(t,e,a){let{number:r}=e,s=w,i=!0,c=!0;const l=x(),o=n.owner,d=n.repo;let m=[],u={};return E((async()=>{try{if(a(4,u=(await C(`issue-${o}-${d}-${r}`,(()=>l.issues.get({owner:o,repo:d,issue_number:r,sort:"created",direction:"desc"})))).data),a(4,u.metadata={},u),u.body.includes("\x3c!--")){const t=u.body.split("\x3c!--")[1].split("--\x3e")[0];t.split("\n").filter((t=>t.trim())).filter((t=>t.includes(":"))).forEach((t=>{a(4,u.metadata[t.split(/:(.+)/)[0].trim()]=t.split(/:(.+)/)[1].trim(),u)}))}}catch(t){H(t)}a(2,c=!1);try{a(3,m=(await C(`issue-comments-${o}-${d}-${r}`,(()=>l.issues.listComments({owner:o,repo:d,issue_number:r})))).data.reverse())}catch(t){H(t)}a(1,i=!1)})),t.$$set=t=>{"number"in t&&a(0,r=t.number)},[r,i,c,m,u,s]}class J extends t{constructor(t){super(),e(this,t,z,q,a,{number:0})}}function K(t){let e,a;return e=new J({props:{number:t[0]}}),{c(){_(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){y(e,t,n),a=!0},p(t,[a]){const n={};1&a&&(n.number=t[0]),e.$set(n)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}async function Q(t){const{number:e}=t.params;return{number:e}}function W(t,e,a){let{number:n}=e;return t.$$set=t=>{"number"in t&&a(0,n=t.number)},[n]}class X extends t{constructor(t){super(),e(this,t,W,K,a,{number:0})}}export{X as default,Q as preload};
