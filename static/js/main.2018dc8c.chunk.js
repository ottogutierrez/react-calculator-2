(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=(a(12),a(3)),u=a.n(s),l=a(2),p=a(6),b=a(1);a(14);var i=()=>{const e={operand1:0,operand2:0,operation:""},t=Object(n.useState)("0"),a=Object(b.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(e),i=Object(b.a)(s,2),d=i[0],m=i[1],j=Object(n.useState)(!1),O=Object(b.a)(j,2),f=O[0],k=O[1],E=Object(n.useState)(!0),v=Object(b.a)(E,2),w=v[0],x=v[1],S=Object(n.useState)(!1),h=Object(b.a)(S,2),y=h[0],N=h[1],C=Object(n.useState)(""),A=Object(b.a)(C,2),g=A[0],F=A[1],J=function(){var t=Object(p.a)(u.a.mark(function t(a){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=a.target.innerText,t.t0=n,t.next="AC"===t.t0?4:"+"===t.t0?9:"x"===t.t0?9:"-"===t.t0?9:"/"===t.t0?9:"="===t.t0?11:18;break;case 4:return o("0"),m(e),k(!1),x(!0),t.abrupt("break",20);case 9:return f||(m(Object(l.a)(Object(l.a)({},d),{},{operation:n,operand1:parseFloat(c)})),k(!0),x(!1)),t.abrupt("break",20);case 11:if(!f){t.next=17;break}return t.next=14,m(Object(l.a)(Object(l.a)({},d),{},{operand2:parseFloat(c)}));case 14:k(!1),x(!0),N(!0);case 17:return t.abrupt("break",20);case 18:return w?o("0"===c?n:c+n):(o(n),x(!0)),t.abrupt("break",20);case 20:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),B=r.a.useCallback(()=>{var e=0,t="".concat(d.operand1," ").concat(d.operation," ").concat(d.operand2," =");switch(d.operation){case"+":e=d.operand1+d.operand2,t="".concat(t," ").concat(e)}x(!1),o(e),F(t)},[d]);return Object(n.useEffect)(()=>{y&&(B(),N(!1))},[y,d,B]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"display"},c),r.a.createElement("div",{className:"calculator"},["AC","<-","%","/","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="].map((e,t)=>r.a.createElement("button",{onClick:J,key:t},e))),r.a.createElement("div",{className:"history"},r.a.createElement("h3",null,"History"),g))};function d(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null))}const m=document.getElementById("root");o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),m)},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.2018dc8c.chunk.js.map