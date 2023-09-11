import{_ as r,C as t,o as a,c as n,H as u,w as o,k as e,a as s}from"./chunks/framework.a4b4067c.js";const P=JSON.parse('{"title":"osquery","titleTemplate":"x-cmd package | osquery 是一个 SQL 驱动的操作系统检测、监视和分析框架","description":"x-cmd package osquery | osquery 是一个 SQL 驱动的操作系统检测、监视和分析框架","frontmatter":{"name":"osquery","titleTemplate":"x-cmd package | osquery 是一个 SQL 驱动的操作系统检测、监视和分析框架","head":[["meta",{"name":"og:title","content":"osquery | x-cmd package"}],["meta",{"name":"og:description","content":"osquery 是一个 SQL 驱动的操作系统检测、监视和分析框架"}],["meta",{"name":"description","content":"x-cmd package osquery | osquery 是一个 SQL 驱动的操作系统检测、监视和分析框架"}]],"links":[{"type":"1min","text":"osquery","link":"/1min/osquery"},{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/osquery/osquery","license":"MIT","version":{"stable":"5.9.1"},"support":["linux/arm64","darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/osquery/releases","https://gitcode.net/x-cmd-build/osquery/-/releases"]},"aside":false,"outline":false,"x-term-speg":"pkg/osquery.cn","x-term-name":"osquery","x-term-desc":"osquery 是一个 SQL 驱动的操作系统检测、监视和分析框架","x-term-size":"large"},"headers":[],"relativePath":"pkg/osquery.md","filePath":"pkg/osquery.md"}'),i={name:"pkg/osquery.md"},c=e("h1",{id:"osquery",tabindex:"-1"},[s("osquery "),e("a",{class:"header-anchor",href:"#osquery","aria-label":'Permalink to "osquery"'},"​")],-1),d=e("p",{class:"x-desc"},"osquery 是一个 SQL 驱动的操作系统检测、监视和分析框架",-1),y=e("h2",{id:"简介",tabindex:"-1"},[s("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),h=e("p",null,"osquery 是 FaceBook 开源的一款跨平台的系统监控工具，它可以将操作系统映射为关系数据库，用户可以使用 SQL 查询语言来检索和分析操作系统状态。osquery 旨在帮助系统管理员和安全专家更轻松地管理和监控操作系统，它可以实时监控系统状态变化，帮助你及时发现异常和潜在的安全威胁。osquery 有三个主要的组件：",-1),p=e("ol",null,[e("li",null,[e("code",null,"osqueryi"),s(" 是一个交互式 SQL 查询控制台，用于查询操作系统信息。")]),e("li",null,[e("code",null,"osqueryd"),s(" 是主机的监控守护程序，用于执行查询计划和记录操作系统状态更改。")]),e("li",null,[e("code",null,"osqueryctl"),s(" 命令则是用来控制守护程序的启动、停止和检查状态。")])],-1),m=e("h2",{id:"首次用户",tabindex:"-1"},[s("首次用户 "),e("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),q=e("ol",null,[e("li",null,[s("本文的 demo 展现了使用 "),e("code",null,"osqueryi"),s(" 命令来查询与 user 相关的表，以及查看一条进程信息。")]),e("li",null,[s("x-cmd 也提供了 "),e("a",{href:"/1min/osquery"},"1分钟教程"),s(" 可以帮你快速入门")])],-1),g=e("h2",{id:"技术特点",tabindex:"-1"},[s("技术特点 "),e("a",{class:"header-anchor",href:"#技术特点","aria-label":'Permalink to "技术特点"'},"​")],-1),_=e("ol",null,[e("li",null,[e("strong",null,"将操作系统作为高性能关系数据库"),s(": osquery 将系统信息（如进程、文件系统、网络连接等）映射为 SQL 数据表，使用户能够使用熟悉的 SQL 查询语言来获取系统信息。")]),e("li",null,[e("strong",null,"多平台支持"),s("：osquery 支持多种操作系统，包括 Linux、macOS、Windows 和 FreeBSD，使其适用于各种环境。")]),e("li",null,[e("strong",null,"SQL 查询语言"),s("：osquery 使用熟悉的 SQL 查询语言，使用户能够轻松地编写和执行查询，无需专门的编程技能。")]),e("li",null,[e("strong",null,"内置表格"),s("：osquery 提供了大量内置表格，用于表示系统的各种信息，包括进程、文件、注册表等，用户可以立即开始查询这些数据。")]),e("li",null,[e("strong",null,"可扩展性"),s("：你可以扩展 osquery，以适应特定的需求，添加新的表格和查询，以满足个性化的监控和管理要求。")]),e("li",null,[e("strong",null,"实时监控"),s("：osquery 可以实时监控系统的状态变化，帮助你及时发现异常和潜在的安全威胁。")])],-1),x=e("h2",{id:"进一步阅读",tabindex:"-1"},[s("进一步阅读 "),e("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),k=e("ul",null,[e("li",null,[s("项目所托管的网站 "),e("a",{href:"https://github.com/osquery/osquery",target:"_blank",rel:"noreferrer"},"github"),s(" 提供了详细的参数功能介绍和使用说明")]),e("li",null,[e("a",{href:"https://osquery.readthedocs.io/en/stable/",target:"_blank",rel:"noreferrer"},"官方文档")]),e("li",null,[e("a",{href:"https://opensource.com/article/21/6/osquery-linux",target:"_blank",rel:"noreferrer"},"osquery-linux")]),e("li",null,[e("a",{href:"https://www.redhat.com/sysadmin/osquery-system-data",target:"_blank",rel:"noreferrer"},"osquery-system-data")]),e("li",null,[e("a",{href:"https://hackertarget.com/osquery-linux-tutorial/",target:"_blank",rel:"noreferrer"},"osquery Linux Tutorial and Tips")]),e("li",null,[e("a",{href:"https://www.uptycs.com/blog/osquery-what-it-is-how-it-works-and-how-to-use-it",target:"_blank",rel:"noreferrer"},"how to use osquery")])],-1),f=e("div",{class:"language-sh vp-adaptive-theme"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"sh"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"x"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"env"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"use"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#9ECBFF"}},"osquery")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"x"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"env"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"use"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"osquery")])])])],-1);function b(w,E,S,L,v,F){const l=t("PackagePage");return a(),n("div",null,[u(l,null,{default:o(()=>[c,d]),abstract:o(()=>[y,h,p,m,q,g,_,x,k]),install:o(()=>[f]),_:1})])}const C=r(i,[["render",b]]);export{P as __pageData,C as default};
