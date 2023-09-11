import{_ as n,C as t,o as p,c as o,H as c,w as a,k as s,a as e}from"./chunks/framework.a4b4067c.js";const _=JSON.parse('{"title":"gitleaks","titleTemplate":"x-cmd 1 分钟快速上手","description":"x-cmd 1 分钟 | gitleaks 快速上手","frontmatter":{"name":"gitleaks","titleTemplate":"x-cmd 1 分钟快速上手","head":[["meta",{"name":"og:title","content":"x-cmd 1 分钟 | gitleaks 快速上手"}],["meta",{"name":"og:description","content":"gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌"}],["meta",{"name":"description","content":"x-cmd 1 分钟 | gitleaks 快速上手"}]],"items":[{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">exa</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--tree</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--level=1</span><span style=\\"color: #E1E4E8\\"> &amp;&amp; </span><span style=\\"color: #79B8FF\\">cd</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gitleaks/</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">exa</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--tree</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--level=1</span><span style=\\"color: #24292E\\"> &amp;&amp; </span><span style=\\"color: #005CC5\\">cd</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gitleaks/</span></span></code></pre>\\n</div>","#desc":{"cn":"进入本地 git repo 目录","en":"Enter the local git repo directory"},"desc":"进入本地 git repo 目录"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gitleaks</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">detect</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gitleaks</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">detect</span></span></code></pre>\\n</div>","#desc":{"cn":"检测代码中的 secrets","en":"detect secrets in code"},"desc":"检测代码中的 secrets"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gitleaks</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">detect</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--report-path</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">output.json</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gitleaks</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">detect</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--report-path</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">output.json</span></span></code></pre>\\n</div>","#desc":{"cn":"检测代码中的 secrets，并生成 json 格式的报告","en":"Detect secrets in code and generate a report in json format"},"desc":"检测代码中的 secrets，并生成 json 格式的报告"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gitleaks</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">detect</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--baseline-path</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">output.json</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">\\\\</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E1E4E8\\">--report-path </span><span style=\\"color: #9ECBFF\\">new_output.json</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gitleaks</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">detect</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--baseline-path</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">output.json</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">\\\\</span></span>\\n<span class=\\"line\\"><span style=\\"color: #24292E\\">--report-path </span><span style=\\"color: #032F62\\">new_output.json</span></span></code></pre>\\n</div>","#desc":{"cn":"基于检测报告运行检测命令，报告输出将仅包含新问题","en":"Run the detect command based on the detect report, and the report output will contain only new issues"},"desc":"基于检测报告运行检测命令，报告输出将仅包含新问题"},{"cmd":"<div class=\\"language-sh vp-adaptive-theme\\"><button title=\\"Copy Code\\" class=\\"copy\\"></button><span class=\\"lang\\">sh</span><pre v-pre class=\\"shiki github-dark vp-code-dark\\" ><code><span class=\\"line\\"><span style=\\"color: #79B8FF\\">x</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">gitleaks</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #9ECBFF\\">protect</span><span style=\\"color: #E1E4E8\\"> </span><span style=\\"color: #79B8FF\\">--staged</span></span></code></pre><pre v-pre class=\\"shiki github-light vp-code-light\\" ><code><span class=\\"line\\"><span style=\\"color: #005CC5\\">x</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">gitleaks</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #032F62\\">protect</span><span style=\\"color: #24292E\\"> </span><span style=\\"color: #005CC5\\">--staged</span></span></code></pre>\\n</div>","#desc":{"cn":"保护代码中的 secrets","en":"protect secrets in code"},"desc":"保护代码中的 secrets"}],"aside":false,"outline":false,"x-term-speg":"1min/gitleaks.cn","x-term-name":"gitleaks","x-term-desc":"gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌","x-term-size":"large","links":[{"type":"pkg","text":"gitleaks","link":"/pkg/gitleaks"}]},"headers":[],"relativePath":"1min/gitleaks.md","filePath":"1min/gitleaks.md"}'),r={name:"1min/gitleaks.md"},i=s("h1",{id:"gitleaks",tabindex:"-1"},[e("gitleaks "),s("a",{class:"header-anchor",href:"#gitleaks","aria-label":'Permalink to "gitleaks"'},"​")],-1),d=s("p",{class:"visually-hidden"}," gitleaks 是一个 SAST 工具，用于检测和防止git repos 中的硬编码秘密，如密码、api 密钥和令牌 ",-1),y=s("p",null,[e("本教程演示了 "),s("code",null,"gitleaks"),e(" 的基本功能和用法:")],-1),E=s("ol",null,[s("li",null,[e("使用 "),s("code",null,"detect"),e(" 命令检测存储库、目录和文件的 secrets： "),s("ul",null,[s("li",null,[e("这里我们在 git 存储库中扫描 secrets，并使用 "),s("code",null,"--report-format <type>"),e(" 参数输出 json 格式的检测报告")]),s("li",null,[e("注意，"),s("code",null,"detect"),e(" 命令默认检测存储库的secrets，如果你想要扫描其他目录或文件中，你可以使用 "),s("code",null,"no-git"),e(" 参数。")])])]),s("li",null,[e("基于检测报告进行检测：使用 "),s("code",null,"--baseline-path <file>"),e(" 参数指定报告，输出将仅包含新问题。")]),s("li",null,[e("使用 "),s("code",null,"protect"),e(" 命令扫描 git 存储库中未提交的更改。")])],-1),g=s("p",null,"进一步阅读：",-1),h=s("ul",null,[s("li",null,[s("a",{href:"/pkg/gitleaks"},"x-cmd pkg for gitleaks")])],-1);function u(k,F,m,C,v,x){const l=t("OneMinutePage");return p(),o("div",null,[c(l,null,{default:a(()=>[i,d]),abstract:a(()=>[y,E,g,h]),_:1})])}const b=n(r,[["render",u]]);export{_ as __pageData,b as default};
