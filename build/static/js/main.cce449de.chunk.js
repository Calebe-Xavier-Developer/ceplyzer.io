(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(46)},46:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(17),r=n.n(o);var l=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then(t=>{let{getCLS:n,getFID:i,getFCP:a,getLCP:o,getTTFB:r}=t;n(e),i(e),a(e),o(e),r(e)})},d=n(18);var c=n.n(d).a.create({baseURL:"https://brasilapi.com.br/api/"});var s=n(2);const u=s.b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  min-height: 150px;
  height: auto;
  border-radius: 15px;
  padding: 15px;
  background: linear-gradient(21deg, #00db82, #12d4ff, #f302eb);
  font-size: 20px;
  color: #000000;
`,p=s.b.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  font-size: 20px;
  color: #000000;

  p{
    padding-top: 18px;
    height: 100%;
  }
`,g=s.b.label`
  width: 100%;
  text-align: left;
  font-size: 12px;
  font-weight: normal;
  color: #000000;
`,b=s.b.input`
  width: 50%;
  height: 40px;
  border: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  

  &:focus{
    border: 1px solid blue;
  }

  &[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
`,f=s.b.p`
  display: ${e=>e.isDisplay?"flex":"none"};
  flex-direction: column;
`;var h=()=>{const[e,t]=Object(i.useState)(""),[n,o]=Object(i.useState)(!1),[r,l]=Object(i.useState)(),d=async n=>{if("Enter"===n.key)if(e.match(/\D/gim))alert("Digite apenas numeros");else try{const n=await(async e=>c.get(`cep/v2/${e}`))(parseInt(e));return l(n.data),n&&(o(!0),t("")),n}catch(i){return o(!0),t(""),i}};return a.a.createElement(u,null,"Descubra seu endere\xe7o pelo cep",a.a.createElement(p,null,a.a.createElement(b,{type:"text",placeholder:"Digite seu CEP",maxLength:8,value:e,onChange:e=>(e=>{o(!1),l(void 0),t(e.currentTarget.value)})(e),onKeyPress:e=>d(e)}),a.a.createElement(f,{isDisplay:n},a.a.createElement(g,null,"Seu endere\xe7o:"),r?`${null===r||void 0===r?void 0:r.city}, ${null===r||void 0===r?void 0:r.state}, ${null===r||void 0===r?void 0:r.neighborhood}, ${null===r||void 0===r?void 0:r.street} - CEP: ${null===r||void 0===r?void 0:r.cep}`:"O seu cep est\xe1 errado!")))};const m=s.b.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,x=()=>a.a.createElement(m,null,a.a.createElement(h,null));var v=s.a`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    background: linear-gradient(180deg, #3de2e2, white, #d82bad);
    font-size: 20px;

    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null),a.a.createElement(x,null)),document.getElementById("root")),l()}},[[22,1,2]]]);
//# sourceMappingURL=main.cce449de.chunk.js.map