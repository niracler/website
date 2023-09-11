import{_ as p,C as a,o as c,c as d,H as o,w as h,k as t,a as s,Q as e}from"./chunks/framework.a4b4067c.js";const S=JSON.parse('{"title":"x gt repo branch","description":"x gt repo branch | x-cmd module | 仓库分支管理","frontmatter":{"head":[["meta",{"name":"og:title","content":"x gt repo branch | x-cmd"}],["meta",{"name":"og:description","content":"仓库分支管理"}],["meta",{"name":"description","content":"x gt repo branch | x-cmd module | 仓库分支管理"}]]},"headers":[],"relativePath":"mod/gt/repo-branch.md","filePath":"mod/gt/repo-branch.md"}'),i={name:"mod/gt/repo-branch.md"},y=t("h1",{id:"x-gt-repo-branch",tabindex:"-1"},[s("x gt repo branch "),t("a",{class:"header-anchor",href:"#x-gt-repo-branch","aria-label":'Permalink to "x gt repo branch"'},"​")],-1),b=t("p",{class:"x-desc"},"仓库分支管理",-1),g=e('<h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-gt-repo-branch-ls">x gt repo branch ls</a></td><td>罗列仓库分支列表</td></tr><tr><td><a href="#x-gt-repo-branch-info">x gt repo branch info</a></td><td>输出仓库分支详细信息</td></tr><tr><td><a href="#x-gt-repo-branch-create">x gt repo branch create</a></td><td>创建仓库分支</td></tr><tr><td><a href="#x-gt-repo-branch-default">x gt repo branch default</a></td><td>设置仓库默认分支</td></tr><tr><td><a href="#x-gt-repo-branch-protection">x gt repo branch protection</a></td><td>仓库保护分支管理</td></tr></tbody></table></div><h3 id="x-gt-repo-branch-ls" tabindex="-1">x gt repo branch ls <a class="header-anchor" href="#x-gt-repo-branch-ls" aria-label="Permalink to &quot;x gt repo branch ls&quot;">​</a></h3><p>罗列仓库分支列表</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr><tr><td><code>--per_page</code> &lt;num&gt;</td><td></td><td>每页数据量</td></tr><tr><td><code>--page</code> &lt;num&gt;</td><td></td><td>目标页码</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gt-repo-branch-info" tabindex="-1">x gt repo branch info <a class="header-anchor" href="#x-gt-repo-branch-info" aria-label="Permalink to &quot;x gt repo branch info&quot;">​</a></h3><p>输出仓库分支详细信息</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>分支名称</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gt-repo-branch-create" tabindex="-1">x gt repo branch create <a class="header-anchor" href="#x-gt-repo-branch-create" aria-label="Permalink to &quot;x gt repo branch create&quot;">​</a></h3><p>创建仓库分支</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>分支名称</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr><tr><td><code>--refs</code> &lt;branch&gt;</td><td><code>&quot;master&quot;</code></td><td>起点分支名</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gt-repo-branch-default" tabindex="-1">x gt repo branch default <a class="header-anchor" href="#x-gt-repo-branch-default" aria-label="Permalink to &quot;x gt repo branch default&quot;">​</a></h3><p>设置仓库默认分支</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>分支名称</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gt-repo-branch-protection" tabindex="-1">x gt repo branch protection <a class="header-anchor" href="#x-gt-repo-branch-protection" aria-label="Permalink to &quot;x gt repo branch protection&quot;">​</a></h3><p>仓库保护分支管理</p><ul><li><strong>子命令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-gt-repo-branch-protection-set">x gt repo branch protection set</a></td><td>设置仓库保护分支策略</td></tr><tr><td><a href="#x-gt-repo-branch-protection-edit">x gt repo branch protection edit</a></td><td>修改仓库保护分支策略</td></tr><tr><td><a href="#x-gt-repo-branch-protection-unset">x gt repo branch protection unset</a></td><td>移除仓库保护分支策略</td></tr></tbody></table></div><h3 id="x-gt-repo-branch-protection-set" tabindex="-1">x gt repo branch protection set <a class="header-anchor" href="#x-gt-repo-branch-protection-set" aria-label="Permalink to &quot;x gt repo branch protection set&quot;">​</a></h3><p>设置仓库保护分支策略</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">protection</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">protection</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>分支名称</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr></tbody></table></div><ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>以 JSON 格式输出获取数据</td></tr></tbody></table></div><h3 id="x-gt-repo-branch-protection-edit" tabindex="-1">x gt repo branch protection edit <a class="header-anchor" href="#x-gt-repo-branch-protection-edit" aria-label="Permalink to &quot;x gt repo branch protection edit&quot;">​</a></h3><p>修改仓库保护分支策略</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">protection</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">ed</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">protection</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ed</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>目标分支名称或通配符</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul>',61),E=e('<ul><li><strong>指令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>描述</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output origin json data</td></tr></tbody></table></div><h3 id="x-gt-repo-branch-protection-unset" tabindex="-1">x gt repo branch protection unset <a class="header-anchor" href="#x-gt-repo-branch-protection-unset" aria-label="Permalink to &quot;x gt repo branch protection unset&quot;">​</a></h3><p>移除仓库保护分支策略</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">protection</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unset</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">protection</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unset</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>目标分支名称或通配符</td></tr></tbody></table></div><ul><li><strong>选项</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称, 名称简写</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;所属空间地址&gt;/&lt;仓库地址&gt;</td></tr></tbody></table></div><br>',11),u=t("h2",{id:"相关链接",tabindex:"-1"},[s("相关链接 "),t("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),F=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,[s("在交互式终端中（如 zsh, bash ...），可以使用 "),t("kbd",null,"Tab"),s(" 获取补全信息")]),t("p",null,[s("运行 "),t("code",null,"CMD SUBCOMMAND --help"),s(" 可以获取命令的更多信息")])],-1);function C(x,v,m,_,B,f){const l=a("AdsContent"),n=a("DocsGroupTable"),r=a("DocsLinkCard");return c(),d("div",null,[y,b,o(l),g,o(n,{header:'["名称, 名称简写","默认值","描述"]',group:'{"Required":{"active":true,"data":[{"name":"<code>--repo</code>, <code>-r</code> ^lt;owner/repo^gt;","default":"","desc":"^lt;所属空间地址^gt;/^lt;仓库地址^gt;"},{"name":"<code>--pusher</code> ^lt;admin|none|username(separator ;)^gt;","default":"","desc":"允许推送名单"},{"name":"<code>--merger</code> ^lt;admin|none|username(separator ;)^gt;","default":"","desc":"允许合并名单"}]},"Optional":{"active":true,"data":[{"name":"<code>--new_wildcard</code> ^lt;wildcard^gt;","default":"","desc":"更新新通配符"}]},"$NotGroup":{"active":true,"data":[]}}'}),E,o(r,null,{default:h(()=>[u]),_:1}),F])}const O=p(i,[["render",C]]);export{S as __pageData,O as default};