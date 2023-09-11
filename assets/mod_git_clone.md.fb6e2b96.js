import{_ as l,C as a,o as n,c,H as o,w as r,k as t,a as e,Q as p}from"./chunks/framework.a4b4067c.js";const f=JSON.parse('{"title":"x git clone","description":"x git clone | x-cmd module | 克隆仓库到新目录","frontmatter":{"head":[["meta",{"name":"og:title","content":"x git clone | x-cmd"}],["meta",{"name":"og:description","content":"克隆仓库到新目录"}],["meta",{"name":"description","content":"x git clone | x-cmd module | 克隆仓库到新目录"}]]},"headers":[],"relativePath":"mod/git/clone.md","filePath":"mod/git/clone.md"}'),i={name:"mod/git/clone.md"},h=t("h1",{id:"x-git-clone",tabindex:"-1"},[e("x git clone "),t("a",{class:"header-anchor",href:"#x-git-clone","aria-label":'Permalink to "x git clone"'},"​")],-1),b=t("p",{class:"x-desc"},"克隆仓库到新目录",-1),g=p('<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">2&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">2&gt;</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>repository path</td></tr><tr><td><code>#2</code></td><td>目录</td></tr></tbody></table></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>-o</code>, <code>--origin</code> &lt;name&gt;</td><td></td><td>使用 &lt;name&gt; 上游替代 &#39;origin&#39;</td></tr><tr><td><code>-b</code>, <code>--branch</code> &lt;branch&gt;</td><td></td><td>切换 &lt;branch&gt; 分支</td></tr><tr><td><code>-u</code>, <code>--upload-pack</code> &lt;path&gt;</td><td></td><td>使用远程 git-upload-pack 路径</td></tr><tr><td><code>-j</code>, <code>--jobs</code> &lt;n&gt;</td><td></td><td>并发克隆的 submodules 数量</td></tr><tr><td><code>--separate-git-dir</code> &lt;gitdir&gt;</td><td></td><td>将 git 目录与工作树分开</td></tr><tr><td><code>--depth</code> &lt;depth&gt;</td><td></td><td>创建该深度的浅克隆</td></tr></tbody></table></div><h2 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--recursive</code></td><td>初始化所有包含的子模块</td></tr><tr><td><code>--shallow-submodules</code></td><td>浅克隆任何的子模块</td></tr></tbody></table></div><br>',9),m=t("h2",{id:"相关链接",tabindex:"-1"},[e("相关链接 "),t("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),_=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,[e("在交互式终端中（如 zsh, bash ...），可以使用 "),t("kbd",null,"Tab"),e(" 获取补全信息")]),t("p",null,[e("运行 "),t("code",null,"CMD SUBCOMMAND --help"),e(" 可以获取命令的更多信息")])],-1);function y(u,x,C,E,k,F){const s=a("AdsContent"),d=a("DocsLinkCard");return n(),c("div",null,[h,b,o(s),g,o(d,null,{default:r(()=>[m]),_:1}),_])}const P=l(i,[["render",y]]);export{f as __pageData,P as default};