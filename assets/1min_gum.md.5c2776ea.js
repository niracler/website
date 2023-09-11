import{_ as o,C as e,o as p,c as t,H as c,w as n,k as s,a as l}from"./chunks/framework.a4b4067c.js";const k=JSON.parse('{"title":"gum","titleTemplate":"x-cmd 1 分钟快速上手","description":"x-cmd 1 分钟 | gum 快速上手","frontmatter":{"name":"gum","titleTemplate":"x-cmd 1 分钟快速上手","head":[["meta",{"name":"og:title","content":"x-cmd 1 分钟 | gum 快速上手"}],["meta",{"name":"og:description","content":"gum 是一个集成了多款 Terminal UI 命令行工具，可帮助用户在编写脚本提供一个用户友好的命令行界面"}],["meta",{"name":"description","content":"x-cmd 1 分钟 | gum 快速上手"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">choose</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;1&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;2&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;3&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">choose</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;1&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;2&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;3&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"在命令行中构建选项列表界面","en":"Building an option list interface on the command line"},"desc":"在命令行中构建选项列表界面"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">confirm</span><span style=\\"color: #E1E4E8\\"> &amp;&amp; </span><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;Confirm&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">||</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">echo</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;Cancel&quot;</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">confirm</span><span style=\\"color: #24292E\\"> &amp;&amp; </span><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;Confirm&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">||</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">echo</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;Cancel&quot;</span></span></code></pre>\\n</div>","#desc":{"cn":"在命令行中构建确认界面","en":"Building a confirmation interface on the command line"},"desc":"在命令行中构建确认界面"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">touch</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./file</span></span>\\n<span class=\\"line\\"><span style=\\"color: #9ECBFF\\">mkdir</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./test</span></span>\\n<span class=\\"line\\"><span style=\\"color: #9ECBFF\\">touch</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./test/file1</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./test/file2</span></span>\\n<span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">file</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">./</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">touch</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./file</span></span>\\n<span class=\\"line\\"><span style=\\"color: #032F62\\">mkdir</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./test</span></span>\\n<span class=\\"line\\"><span style=\\"color: #032F62\\">touch</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./test/file1</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./test/file2</span></span>\\n<span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">file</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">./</span></span></code></pre>\\n</div>","#desc":{"cn":"在命令行中构建文件选择界面","en":"Building a file selection interface on the command line"},"desc":"在命令行中构建文件选择界面"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #9ECBFF\\">printf</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;%s\\\\n&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;file&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;choose&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">&quot;format&quot;</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #F97583\\">|</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">filter</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #032F62\\">printf</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;%s\\\\n&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;file&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;choose&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">&quot;format&quot;</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #D73A49\\">|</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">filter</span></span></code></pre>\\n</div>","#desc":{"cn":"在命令行中构建筛选值列表","en":"Building a list of filtered values on the command line"},"desc":"在命令行中构建筛选值列表"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gum</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">filter</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--height</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">5</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gum</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">filter</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--height</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">5</span></span></code></pre>\\n</div>","#desc":{"cn":"构建一个 shell 历史命令选取界面","en":"Build a shell history command selection interface"},"desc":"构建一个 shell 历史命令选取界面"}],"aside":false,"outline":false,"x-term-speg":"1min/gum.cn","x-term-name":"gum","x-term-desc":"gum 是一个集成了多款 Terminal UI 命令行工具，可帮助用户在编写脚本提供一个用户友好的命令行界面","x-term-size":"large","links":[{"type":"pkg","text":"gum","link":"/pkg/gum"}]},"headers":[],"relativePath":"1min/gum.md","filePath":"1min/gum.md"}'),r={name:"1min/gum.md"},i=s("h1",{id:"gum",tabindex:"-1"},[l("gum "),s("a",{class:"header-anchor",href:"#gum","aria-label":'Permalink to "gum"'},"​")],-1),u=s("p",{class:"visually-hidden"}," gum 是一个集成了多款 Terminal UI 命令行工具，可帮助用户在编写脚本提供一个用户友好的命令行界面 ",-1),y=s("p",null,[l("本教程演示了 "),s("code",null,"gum"),l(" 的基本功能和用法：")],-1),E=s("ol",null,[s("li",null,[l("使用 "),s("code",null,"gum choose"),l(" 命令构建选项列表界面。")]),s("li",null,[l("使用 "),s("code",null,"gum confirm"),l(" 命令构建确认窗口。")]),s("li",null,[l("使用 "),s("code",null,"gum file"),l(" 命令构建文件选择界面。")]),s("li",null,[l("使用 "),s("code",null,"x gum filter"),l(" 命令构建筛选值列表和 shell 历史命令选择界面。")])],-1),m=s("p",null,"进一步阅读：",-1),d=s("ul",null,[s("li",null,[l("x-cmd 对于 gum 的介绍和快速安装的方法，可以查看: "),s("a",{href:"/pkg/gum"},"x-cmd pkg for gum ")]),s("li",null,[s("a",{href:"https://github.com/charmbracelet/gum#gum",target:"_blank",rel:"noreferrer"},"github: gum")]),s("li",null,[s("a",{href:"https://www.ubuntumint.com/gum-glamorous-shell-scripts-linux/",target:"_blank",rel:"noreferrer"},"Gum – A Tool for Glamorous Shell Scripts in Linux")]),s("li",null,[s("a",{href:"https://trendoceans.com/gum-tool-linux/",target:"_blank",rel:"noreferrer"},"Gum: A Tool for Glamorous Shell Scripts in Linux")]),s("li",null,[s("a",{href:"https://www.linuxmi.com/gum-linux-shell-tool.html#google_vignette",target:"_blank",rel:"noreferrer"},"Gum – Linux 中迷人的 Shell 脚本工具")]),s("li",null,[s("a",{href:"https://github.com/charmbracelet/bubbles",target:"_blank",rel:"noreferrer"},"github: Bubbles")]),s("li",null,[s("a",{href:"https://github.com/charmbracelet/lipgloss",target:"_blank",rel:"noreferrer"},"github: lipgloss")])],-1);function h(g,F,C,f,v,B){const a=e("OneMinutePage");return p(),t("div",null,[c(a,null,{default:n(()=>[i,u]),abstract:n(()=>[y,E,m,d]),_:1})])}const q=o(r,[["render",h]]);export{k as __pageData,q as default};