import{_ as e,C as o,o as p,c as r,H as l,w as c,k as s,a,Q as d}from"./chunks/framework.a4b4067c.js";const _=JSON.parse('{"title":"x proxy dnf","description":"x proxy dnf | x-cmd module | 设置 dnf 的镜像源","frontmatter":{"head":[["meta",{"name":"og:title","content":"x proxy dnf | x-cmd"}],["meta",{"name":"og:description","content":"设置 dnf 的镜像源"}],["meta",{"name":"description","content":"x proxy dnf | x-cmd module | 设置 dnf 的镜像源"}]]},"headers":[],"relativePath":"mod/proxy/dnf.md","filePath":"mod/proxy/dnf.md"}'),y={name:"mod/proxy/dnf.md"},i=s("h1",{id:"x-proxy-dnf",tabindex:"-1"},[a("x proxy dnf "),s("a",{class:"header-anchor",href:"#x-proxy-dnf","aria-label":'Permalink to "x proxy dnf"'},"​")],-1),h=s("p",{class:"x-desc"},"设置 dnf 的镜像源",-1),x=d('<h2 id="子命令" tabindex="-1">子命令 <a class="header-anchor" href="#子命令" aria-label="Permalink to &quot;子命令&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-proxy-dnf-url">x proxy dnf url</a></td><td>提供镜像源候选项的 url</td></tr><tr><td><a href="#x-proxy-dnf-replace">x proxy dnf replace</a></td><td>Replace the download mirror</td></tr><tr><td><a href="#x-proxy-dnf-rollback">x proxy dnf rollback</a></td><td>Rollback the download mirror</td></tr><tr><td><a href="#x-proxy-dnf-get">x proxy dnf get</a></td><td>获取当前的镜像源的 url</td></tr><tr><td><a href="#x-proxy-dnf-set">x proxy dnf set</a></td><td>设置镜像源，从当前的镜像源中选择一个然后进行设置 (TODO:支持自定义的镜像源)</td></tr><tr><td><a href="#x-proxy-dnf-unset">x proxy dnf unset</a></td><td>将下载源设置为默认的源。</td></tr></tbody></table></div><h3 id="x-proxy-dnf-url" tabindex="-1">x proxy dnf url <a class="header-anchor" href="#x-proxy-dnf-url" aria-label="Permalink to &quot;x proxy dnf url&quot;">​</a></h3><p>提供镜像源候选项的 url</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>Mirror name<br><code>ali</code> | <code>ustc</code> | <code>tuna</code></td></tr></tbody></table></div><h3 id="x-proxy-dnf-replace" tabindex="-1">x proxy dnf replace <a class="header-anchor" href="#x-proxy-dnf-replace" aria-label="Permalink to &quot;x proxy dnf replace&quot;">​</a></h3><p>Replace the download mirror</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">replace</span><span style="color:#F97583;">|</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">replace</span><span style="color:#D73A49;">|</span><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>Mirror name<br><code>ali</code> | <code>ustc</code> | <code>tuna</code></td></tr></tbody></table></div><h3 id="x-proxy-dnf-rollback" tabindex="-1">x proxy dnf rollback <a class="header-anchor" href="#x-proxy-dnf-rollback" aria-label="Permalink to &quot;x proxy dnf rollback&quot;">​</a></h3><p>Rollback the download mirror</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollback</span><span style="color:#929292;"> [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollback</span><span style="color:#6C6C6C;"> [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>参数</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>#1</code></td><td>use the selected file to rollback</td></tr></tbody></table></div><ul><li><strong>子命令</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><a href="#x-proxy-dnf-rollback-ls">x proxy dnf rollback ls</a></td><td>list all file you can rollback</td></tr></tbody></table></div><h3 id="x-proxy-dnf-rollback-ls" tabindex="-1">x proxy dnf rollback ls <a class="header-anchor" href="#x-proxy-dnf-rollback-ls" aria-label="Permalink to &quot;x proxy dnf rollback ls&quot;">​</a></h3><p>list all file you can rollback</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollback</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollback</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span></code></pre></div><h3 id="x-proxy-dnf-get" tabindex="-1">x proxy dnf get <a class="header-anchor" href="#x-proxy-dnf-get" aria-label="Permalink to &quot;x proxy dnf get&quot;">​</a></h3><p>获取当前的镜像源的 url</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span></span></code></pre></div><h3 id="x-proxy-dnf-set" tabindex="-1">x proxy dnf set <a class="header-anchor" href="#x-proxy-dnf-set" aria-label="Permalink to &quot;x proxy dnf set&quot;">​</a></h3><p>设置镜像源，从当前的镜像源中选择一个然后进行设置 (TODO:支持自定义的镜像源)</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span></span></code></pre></div><h3 id="x-proxy-dnf-unset" tabindex="-1">x proxy dnf unset <a class="header-anchor" href="#x-proxy-dnf-unset" aria-label="Permalink to &quot;x proxy dnf unset&quot;">​</a></h3><p>将下载源设置为默认的源。</p><ul><li><strong>使用</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unset</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unset</span></span></code></pre></div><br>',39),E=s("h2",{id:"相关链接",tabindex:"-1"},[a("相关链接 "),s("a",{class:"header-anchor",href:"#相关链接","aria-label":'Permalink to "相关链接"'},"​")],-1),u=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("在交互式终端中（如 zsh, bash ...），可以使用 "),s("kbd",null,"Tab"),a(" 获取补全信息")]),s("p",null,[a("运行 "),s("code",null,"CMD SUBCOMMAND --help"),a(" 可以获取命令的更多信息")])],-1);function b(f,F,g,C,k,v){const n=o("AdsContent"),t=o("DocsLinkCard");return p(),r("div",null,[i,h,l(n),x,l(t,null,{default:c(()=>[E]),_:1}),u])}const B=e(y,[["render",b]]);export{_ as __pageData,B as default};