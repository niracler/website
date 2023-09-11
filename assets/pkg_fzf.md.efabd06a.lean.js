import{_ as n,C as o,o as r,c as s,H as i,w as a,k as e,a as l}from"./chunks/framework.a4b4067c.js";const T=JSON.parse('{"title":"fzf","titleTemplate":"x-cmd package | fzf 是一个通用命令行模糊查找器","description":"x-cmd package fzf | fzf 是一个通用命令行模糊查找器","frontmatter":{"name":"fzf","titleTemplate":"x-cmd package | fzf 是一个通用命令行模糊查找器","head":[["meta",{"name":"og:title","content":"fzf | x-cmd package"}],["meta",{"name":"og:description","content":"fzf 是一个通用命令行模糊查找器"}],["meta",{"name":"description","content":"x-cmd package fzf | fzf 是一个通用命令行模糊查找器"}]],"links":[{"type":"1min","text":"fzf","link":"/1min/fzf"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/junegunn/fzf","license":"MIT","version":{"stable":"v0.0.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/fzf/releases","https://gitcode.net/x-cmd-build/fzf/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/fzf.cn","x-term-name":"fzf","x-term-desc":"fzf 是一个通用命令行模糊查找器","x-term-size":"large"},"headers":[],"relativePath":"pkg/fzf.md","filePath":"pkg/fzf.md"}'),f={name:"pkg/fzf.md"},c=e("h1",{id:"fzf",tabindex:"-1"},[l("fzf "),e("a",{class:"header-anchor",href:"#fzf","aria-label":'Permalink to "fzf"'},"​")],-1),d=e("p",{class:"x-desc"},"fzf 是一个通用命令行模糊查找器",-1),h=e("h2",{id:"简介",tabindex:"-1"},[l("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),p=e("p",null,[e("code",null,"fzf"),l(" 是一个由 go 编写的命令行模糊搜索工具，用于在大量文本数据中快速定位和选择内容，可以与任何列表一起使用（e.g. 文件、命令历史记录、进程、主机名、书签、git 提交等）。")],-1),u=e("h2",{id:"首次用户",tabindex:"-1"},[l("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),m=e("ol",null,[e("li",null,[l("本文的 demo 展现了如何组合使用 "),e("code",null,"fzf"),l(" 和其他工具（e.g. "),e("code",null,"cat"),l("、"),e("code",null,"bat"),l("）来查找和预览文件。")]),e("li",null,[l("x-cmd也提供了"),e("a",{href:"/1min/fzf"},"1分钟教程"),l("可以帮你快速入门。")])],-1),g=e("h2",{id:"功能特点",tabindex:"-1"},[l("功能特点 "),e("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),z=e("ol",null,[e("li",null,[e("strong",null,"可移植，无依赖"),l("：没有外部依赖，可以在多个操作系统上方便地安装和使用。")]),e("li",null,[e("strong",null,"速度极快"),l("：fzf 使用高效的模糊匹配算法和预处理技术，能够快速过滤和选择大量的文本数据。")]),e("li",null,[e("strong",null,"功能集全面"),l("：fzf 提供了多种功能，包括模糊匹配、多选、支持正则表达式、自定义布局、自动补全等")]),e("li",null,[e("strong",null,"支持 Vim/Neovim 插件和键盘事件绑定")])],-1),_=e("h2",{id:"竞品和相关作品",tabindex:"-1"},[l("竞品和相关作品 "),e("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),b=e("ol",null,[e("li",null,[e("a",{href:"/mod/pick"},"x pick"),l(" 是 x-cmd 开发的命令行数据选择器，由 shell 和 awk 编写，功能没有 "),e("code",null,"fzf"),l(" 丰富，可在主流 posix shell 上运行，集成在 x-cmd 里面，无需额外下载。")]),e("li",null,[e("a",{href:"https://github.com/davatorium/rofi",target:"_blank",rel:"noreferrer"},"rofi"),l(" 是一个功能强大的窗口小部件，主要用于应用程序启动、文件搜索、窗口选择等任务。虽然它的主要用途不是模糊搜索，但它具有出色的文本选择功能。")]),e("li",null,[e("a",{href:"https://github.com/peco/peco",target:"_blank",rel:"noreferrer"},"peco"),l(" 是另一个交互式过滤工具，专注于命令行选择和搜索。它支持模糊搜索和即时筛选，并且易于集成到不同的命令行工具中。")]),e("li",null,[e("a",{href:"https://github.com/garybernhardt/selecta",target:"_blank",rel:"noreferrer"},"selecta"),l(" 是一个Ruby编写的选择器，允许用户从文本列表中进行交互式选择。它具有类似 fzf 的模糊搜索功能。")]),e("li",null,[e("a",{href:"https://github.com/mooz/percol",target:"_blank",rel:"noreferrer"},"percol"),l(" 是一个Python编写的交互式选择器，它支持 fzf-style的模糊搜索，允许用户通过命令行过滤和选择。")])],-1),x=e("h1",{id:"进一步阅读",tabindex:"-1"},[l("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),k=e("ul",null,[e("li",null,[l("项目托管在"),e("a",{href:"https://github.com/junegunn/fzf",target:"_blank",rel:"noreferrer"},"github: fzf"),l("上，里面的README文档提供了详细的参数功能和使用说明")]),e("li",null,[e("a",{href:"https://www.freecodecamp.org/news/fzf-a-command-line-fuzzy-finder-missing-demo-a7de312403ff/",target:"_blank",rel:"noreferrer"},"Why you should be using fzf, the command line fuzzy finder"),l("，这篇文章详实地介绍了 fzf 的各项优点以及使用技巧，并附带有直接的演示。")]),e("li",null,[e("a",{href:"https://thevaluable.dev/practical-guide-fzf-example/",target:"_blank",rel:"noreferrer"},"A Practical Guide to fzf: Building a File Explorer")]),e("li",null,[e("a",{href:"https://thevaluable.dev/fzf-shell-integration/",target:"_blank",rel:"noreferrer"},"A Practical Guide to fzf: Shell Integration")])],-1),y=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"fzf")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"fzf")])])])],-1);function v(E,P,F,w,C,B){const t=o("PackagePage");return r(),s("div",null,[i(t,null,{default:a(()=>[c,d]),abstract:a(()=>[h,p,u,m,g,z,_,b,x,k]),install:a(()=>[y]),_:1})])}const V=n(f,[["render",v]]);export{T as __pageData,V as default};
