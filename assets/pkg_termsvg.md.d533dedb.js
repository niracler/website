import{_ as l,C as r,o as n,c as o,H as i,w as t,k as e,a}from"./chunks/framework.a4b4067c.js";const A=JSON.parse('{"title":"termsvg","titleTemplate":"x-cmd package | 记录，共享和导出您的终端作为一个动画 SVG 图像","description":"x-cmd package termsvg | 记录，共享和导出您的终端作为一个动画 SVG 图像","frontmatter":{"name":"termsvg","titleTemplate":"x-cmd package | 记录，共享和导出您的终端作为一个动画 SVG 图像","head":[["meta",{"name":"og:title","content":"termsvg | x-cmd package"}],["meta",{"name":"og:description","content":"记录，共享和导出您的终端作为一个动画 SVG 图像"}],["meta",{"name":"description","content":"x-cmd package termsvg | 记录，共享和导出您的终端作为一个动画 SVG 图像"}]],"links":[{"type":"1min","text":"termsvg","link":"/1min/termsvg"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/MrMarble/termsvg","license":"MIT","version":{"stable":"v0.6.1"},"support":["linux/arm64","linux/x64","darwin/arm64","darwin/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/termsvg/releases","https://gitcode.net/x-cmd-build/termsvg/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/termsvg.cn","x-term-name":"termsvg","x-term-desc":"记录，共享和导出您的终端作为一个动画 SVG 图像","x-term-size":"large"},"headers":[],"relativePath":"pkg/termsvg.md","filePath":"pkg/termsvg.md"}'),c={name:"pkg/termsvg.md"},m=e("h1",{id:"termsvg",tabindex:"-1"},[a("termsvg "),e("a",{class:"header-anchor",href:"#termsvg","aria-label":'Permalink to "termsvg"'},"​")],-1),d=e("p",{class:"x-desc"},"记录，共享和导出您的终端作为一个动画 SVG 图像",-1),h=e("h2",{id:"简介",tabindex:"-1"},[a("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),g=e("p",null,"termsvg是一款用Go编写命令行工具，可以用来录制终端操作和重新播放，而且可以导出录制文件为 svg 动画。其录制文件使用与 asciinema 相同的格式，因此您可以使用 asciinema 命令来进行播放。",-1),p=e("h2",{id:"首次用户",tabindex:"-1"},[a("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),u=e("ol",null,[e("li",null,"本文的 demo 展现了使用 termsvg 录制终端操作并重新播放。"),e("li",null,[a("x-cmd也提供了"),e("a",{href:"/1min/termsvg"},"1分钟教程"),a("可以帮你快速入门")])],-1),_=e("h2",{id:"简单易用",tabindex:"-1"},[a("简单易用 "),e("a",{class:"header-anchor",href:"#简单易用","aria-label":'Permalink to "简单易用"'},"​")],-1),v=e("p",null,"termsvg 只有三个主要功能，简单易上手：",-1),x=e("ol",null,[e("li",null,[e("code",null,"play"),a("：播放预先录制好的 cast 格式文件。")]),e("li",null,[e("code",null,"rec"),a("：录制终端会话")]),e("li",null,[e("code",null,"export"),a("：将 cast 转换为 SVG 格式文件并导出。")])],-1),b=e("h2",{id:"支持暂停录制",tabindex:"-1"},[a("支持暂停录制 "),e("a",{class:"header-anchor",href:"#支持暂停录制","aria-label":'Permalink to "支持暂停录制"'},"​")],-1),k=e("p",null,"在录制时，如果需要暂停录制，只需使用快捷键 Ctrl+p 暂停，再次按下即可恢复录制。这使得录制更加灵活和方便。",-1),f=e("h2",{id:"兼容asciinema",tabindex:"-1"},[a("兼容asciinema "),e("a",{class:"header-anchor",href:"#兼容asciinema","aria-label":'Permalink to "兼容asciinema"'},"​")],-1),y=e("p",null,[a("termsvg 输出与 "),e("a",{href:"https://github.com/asciinema/asciinema",target:"_blank",rel:"noreferrer"},"asciinema"),a(" 一样，因此您可以使用 Asciinema 站点播放器以及其他由 Asciinema 社区开发的插件和应用程序。我们也引入了agg。 agg 是一个将 Asciicast 转换为 GIF 格式的工具，您感兴趣的话可以通过 x-cmd 的 pkg 来下载，使用命令 "),e("code",null,"x agg")],-1),E=e("h2",{id:"类似工具",tabindex:"-1"},[a("类似工具 "),e("a",{class:"header-anchor",href:"#类似工具","aria-label":'Permalink to "类似工具"'},"​")],-1),P=e("ol",null,[e("li",null,[e("a",{href:"https://github.com/asciinema/asciinema",target:"_blank",rel:"noreferrer"},"asiinema")]),e("li",null,[e("a",{href:"https://github.com/theonewolf/TermRecord",target:"_blank",rel:"noreferrer"},"TermRecord")]),e("li",null,[e("a",{href:"https://github.com/ConradIrwin/showterm",target:"_blank",rel:"noreferrer"},"showterm")]),e("li",null,[e("a",{href:"/pkg/vhs"},"vhs")]),e("li",null,"Linux原生script命令")],-1),C=e("h2",{id:"进一步阅读",tabindex:"-1"},[a("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),F=e("ul",null,[e("li",null,[a("项目所托管的网站 "),e("a",{href:"https://github.com/MrMarble/termsvg",target:"_blank",rel:"noreferrer"},"github"),a(" 提供了详细的使用说明")])],-1),V=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"termsvg")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"termsvg")])])])],-1);function G(S,w,B,T,M,N){const s=r("PackagePage");return n(),o("div",null,[i(s,null,{default:t(()=>[m,d]),abstract:t(()=>[h,g,p,u,_,v,x,b,k,f,y,E,P,C,F]),install:t(()=>[V]),_:1})])}const I=l(c,[["render",G]]);export{A as __pageData,I as default};