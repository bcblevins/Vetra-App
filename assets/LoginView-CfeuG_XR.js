import{_ as p,L as v,o as _,c as m,w as i,v as r,d as s,h as c,i as w,p as L,f as x,k as S,e as d,l as b,b as u,g as V}from"./index-DwbItqj6.js";const y={data(){return{username:"",password:"",fail:!1,loading:!1}},methods:{async login(){this.loading=!0,this.fail=!1;try{const e=await v.login(this.username,this.password,!0);if(console.log("Login result: "+e),e)console.log("Login successful"),setTimeout(()=>{this.$router.push({name:"home"})},2e3);else{this.fail=!0;return}}catch(e){console.log("Error: "+e),this.fail=!0}finally{setTimeout(()=>{this.loading=!1},2e3)}}}},a=e=>(L("data-v-a4a1ba56"),e=e(),x(),e),I={class:"main"},k=a(()=>s("img",{src:S,alt:""},null,-1)),T=a(()=>s("input",{type:"submit",value:"Login",class:"login-btn"},null,-1)),E={class:"loading"},R=a(()=>s("div",{class:"dot"},null,-1)),$=a(()=>s("div",{class:"dot"},null,-1)),B=a(()=>s("div",{class:"dot"},null,-1)),N=a(()=>s("div",{class:"dot"},null,-1)),U=[R,$,B,N];function C(e,t,g,h,o,l){return _(),m("div",I,[k,i(s("form",{action:"",onSubmit:t[2]||(t[2]=w((...n)=>l.login&&l.login(...n),["prevent"]))},[i(s("input",{type:"text",placeholder:"username",class:"username","onUpdate:modelValue":t[0]||(t[0]=n=>o.username=n),name:"username"},null,512),[[c,o.username]]),i(s("input",{type:"password",placeholder:"password",class:"password","onUpdate:modelValue":t[1]||(t[1]=n=>o.password=n),name:"password"},null,512),[[c,o.password]]),T,i(s("span",null,"Incorrect username or password",512),[[r,o.fail]])],544),[[r,!o.loading]]),i(s("div",E,U,512),[[r,o.loading]])])}const M=p(y,[["render",C],["__scopeId","data-v-a4a1ba56"]]),A={components:{Login:M},mounted(){document.title="Welcome to VetRA"},created(){this.$store.commit("SET_USER",null)}},D={class:"login-view"};function W(e,t,g,h,o,l){const n=u("Login"),f=u("router-link");return _(),m("div",D,[d(n,{class:"login"}),d(f,{to:{name:"register"},class:"register"},{default:b(()=>[V("Register")]),_:1})])}const q=p(A,[["render",W],["__scopeId","data-v-42864cbe"]]);export{q as default};
