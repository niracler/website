import{U as u}from"./framework.a4b4067c.js";function v(d={}){const{immediate:l=!1,onNeedRefresh:g,onOfflineReady:t,onRegistered:r,onRegisteredSW:o,onRegisterError:s}=d;let i,n;const c=async(a=!0)=>{await n};async function f(){if("serviceWorker"in navigator){const{Workbox:a}=await u(()=>import("./workbox-window.prod.es5.a7b12eab.js"),[]);i=new a("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),i.addEventListener("installed",e=>{e.isUpdate||t==null||t()}),i.register({immediate:l}).then(e=>{o?o("/sw.js",e):r==null||r(e)}).catch(e=>{s==null||s(e)})}}return n=f(),c}v({immediate:!0});
