import{_ as n,C as e,o as l,c as o,H as p,w as t,k as s,a as c}from"./chunks/framework.a4b4067c.js";const v=JSON.parse('{"title":"lynis","titleTemplate":"x-cmd 1 分钟快速上手","description":"x-cmd 1 分钟 | lynis 快速上手","frontmatter":{"name":"lynis","titleTemplate":"x-cmd 1 分钟快速上手","head":[["meta",{"name":"og:title","content":"x-cmd 1 分钟 | lynis 快速上手"}],["meta",{"name":"og:description","content":"lynis 是一个基于UNIX的系统的安全审计工具"}],["meta",{"name":"description","content":"x-cmd 1 分钟 | lynis 快速上手"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">lynis</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">audit</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">system</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--quick</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">lynis</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">audit</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">system</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--quick</span></span></code></pre>\\n</div>","#desc":{"cn":"执行本地安全扫描","en":"Perform local security scan"},"desc":"执行本地安全扫描"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">cat</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;/var/log/lynis.log&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">grep</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">Suggestion</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">head</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">-n</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">10</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">cat</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;/var/log/lynis.log&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">grep</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">Suggestion</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">head</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">-n</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">10</span></span></code></pre>\\n</div>","#desc":{"cn":"查看log中的建议内容","en":"Check the suggested content in the log"},"desc":"查看log中的建议内容"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">lynis</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">show</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">categories</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">lynis</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">show</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">categories</span></span></code></pre>\\n</div>","#desc":{"cn":"查看扫描类别","en":"View scan categories"},"desc":"查看扫描类别"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">lynis</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--tests-from-category</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;performance&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--quick</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">lynis</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--tests-from-category</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;performance&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--quick</span></span></code></pre>\\n</div>","#desc":{"cn":"仅对性能进行扫描","en":"Scan only the performance"},"desc":"仅对性能进行扫描"}],"aside":false,"outline":false,"x-term-speg":"1min/lynis.cn","x-term-name":"lynis","x-term-desc":"lynis 是一个基于UNIX的系统的安全审计工具","x-term-size":"large","links":[{"type":"pkg","text":"lynis","link":"/pkg/lynis"}]},"headers":[],"relativePath":"1min/lynis.md","filePath":"1min/lynis.md"}'),r={name:"1min/lynis.md"},i=s("h1",{id:"lynis",tabindex:"-1"},[c("lynis "),s("a",{class:"header-anchor",href:"#lynis","aria-label":'Permalink to "lynis"'},"​")],-1),y=s("p",{class:"visually-hidden"}," lynis 是一个基于UNIX的系统的安全审计工具 ",-1);function d(E,g,h,F,m,u){const a=e("OneMinutePage");return l(),o("div",null,[p(a,null,{default:t(()=>[i,y]),_:1})])}const k=n(r,[["render",d]]);export{v as __pageData,k as default};
