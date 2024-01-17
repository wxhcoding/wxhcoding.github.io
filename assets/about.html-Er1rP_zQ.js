import{_ as i,r as o,o as l,c,d as n,b as s,a,e as t}from"./app-1lTnJ-Z-.js";const d={},r=t('<h1 id="关于" tabindex="-1"><a class="header-anchor" href="#关于" aria-hidden="true">#</a> 关于</h1><h2 id="关于我" tabindex="-1"><a class="header-anchor" href="#关于我" aria-hidden="true">#</a> 关于我</h2><p>😋</p><p>在系统性地学习或者碎片化地学习一些知识的时候，当下学会并不代表以后不会忘，因此来写一些相关的笔记以供后面的时间来回顾相关的知识。</p><p>一直没有适合记笔记的软件平台，无意间发现可以生成自己的博客网站，故搭建此网站来记录自己的学习历程，一起努力向前。</p><p>现在首先要做的就是坚持下来，把自己的知识坚持使用此网站记录下来。</p><p>共勉。</p><h2 id="关于网站" tabindex="-1"><a class="header-anchor" href="#关于网站" aria-hidden="true">#</a> 关于网站</h2>',8),p={href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},u=n("h3",{id:"搭建-前期准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搭建-前期准备","aria-hidden":"true"},"#"),s(" 搭建-前期准备")],-1),v=n("h4",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" git")],-1),m={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),h={href:"https://mirrors.tuna.tsinghua.edu.cn/github-release/git-for-windows/git/",target:"_blank",rel:"noopener noreferrer"},g=n("h4",{id:"node",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#node","aria-hidden":"true"},"#"),s(" node")],-1),k={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),f=n("br",null,null,-1),E=n("h4",{id:"yarn",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#yarn","aria-hidden":"true"},"#"),s(" yarn")],-1),x={href:"https://yarnpkg.com/latest.msi",target:"_blank",rel:"noopener noreferrer"},y=n("h4",{id:"vsdcode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vsdcode","aria-hidden":"true"},"#"),s(" VsdCode")],-1),q={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"az764295.vo.msecnd.net",-1),N=n("code",null,"vscode.cdn.azure.cn",-1),R=t(`<h4 id="查看是否安装成功" tabindex="-1"><a class="header-anchor" href="#查看是否安装成功" aria-hidden="true">#</a> 查看是否安装成功</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 ~/Desktop
$ <span class="token function">node</span> <span class="token parameter variable">-v</span>
v16.20.1

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 ~/Desktop
$ <span class="token function">git</span> <span class="token parameter variable">--version</span>
<span class="token function">git</span> version <span class="token number">2.41</span>.0.windows.3

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 ~/Desktop
$ <span class="token function">yarn</span> <span class="token parameter variable">-v</span>
<span class="token number">1.22</span>.19

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 ~/Desktop
$ <span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token number">8.19</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git简单配置" tabindex="-1"><a class="header-anchor" href="#git简单配置" aria-hidden="true">#</a> git简单配置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 ~/Desktop
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;wxhcoding&quot;</span>

<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 ~/Desktop
$ <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token number">1515398578</span>@qq.com

<span class="token comment"># 查看信息是否写入成功</span>
<span class="token number">18032</span>@DESKTOP-L6REF2N MINGW64 ~/Desktop
$ <span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),S={href:"https://zhuanlan.zhihu.com/p/34584694",target:"_blank",rel:"noopener noreferrer"},w=n("h3",{id:"搭建-正式搭建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搭建-正式搭建","aria-hidden":"true"},"#"),s(" 搭建-正式搭建")],-1),P={href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},D=n("br",null,null,-1),M=n("code",null,"Open Git Bash Here",-1),O=n("br",null,null,-1),V=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建并进入一个新目录</span>
<span class="token function">mkdir</span> vuepress-starter <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> vuepress-starter
<span class="token comment"># 使用你喜欢的包管理器进行初始化</span>
<span class="token function">yarn</span> init <span class="token parameter variable">-y</span>
<span class="token comment"># 将 VuePress 安装为本地依赖</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress
<span class="token comment"># 创建你的第一篇文档</span>
<span class="token function">mkdir</span> docs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
<span class="token comment"># 在VsCode打开此文件夹</span>
code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对<code>package.json</code>文件添加以下内容。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，本地启动服务器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="搭建-遇到的问题" tabindex="-1"><a class="header-anchor" href="#搭建-遇到的问题" aria-hidden="true">#</a> 搭建-遇到的问题</h3>`,6),A={href:"https://blog.csdn.net/weixin_65793170/article/details/126884016",target:"_blank",rel:"noopener noreferrer"},C=n("br",null,null,-1),L={href:"https://blog.csdn.net/kajing6092/article/details/130387375?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-130387375-blog-131082841.235%5Ev38%5Epc_relevant_anti_t3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-130387375-blog-131082841.235%5Ev38%5Epc_relevant_anti_t3&utm_relevant_index=1",target:"_blank",rel:"noopener noreferrer"},T=n("br",null,null,-1),U={href:"http://www.manongjc.com/detail/39-sjvdtvrebzamozp.html",target:"_blank",rel:"noopener noreferrer"},G=n("br",null,null,-1),I={href:"https://xuexiareas.com/index/Articles/details/num/570.html",target:"_blank",rel:"noopener noreferrer"},z=t(`<h3 id="搭建-目录结构" tabindex="-1"><a class="header-anchor" href="#搭建-目录结构" aria-hidden="true">#</a> 搭建-目录结构</h3><p>此部分根据官网配置即可。</p><h3 id="搭建-主题配置" tabindex="-1"><a class="header-anchor" href="#搭建-主题配置" aria-hidden="true">#</a> 搭建-主题配置</h3><p>此部分根据官网配置即可。</p><h3 id="搭建-导航栏配置" tabindex="-1"><a class="header-anchor" href="#搭建-导航栏配置" aria-hidden="true">#</a> 搭建-导航栏配置</h3><p>此部分根据官网配置即可。</p><h3 id="搭建-侧边栏配置" tabindex="-1"><a class="header-anchor" href="#搭建-侧边栏配置" aria-hidden="true">#</a> 搭建-侧边栏配置</h3><p>此部分根据官网配置即可。</p><h3 id="搭建-插件" tabindex="-1"><a class="header-anchor" href="#搭建-插件" aria-hidden="true">#</a> 搭建-插件</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这里说一下返回到顶端的插件。</p></div><p>首先根据官网进行安装，启用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-back-to-top
<span class="token comment"># OR npm install -D @vuepress/plugin-back-to-top</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@vuepress/back-to-top&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面为官网提供的启用方式，我使用之后不生效，后改为对象方式的才生效。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@vuepress/back-to-top&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//返回顶部</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这里说一下更新时间的插件。</p></div><p>如果你使用默认主题，你无需安装本插件，因为 VuePress 的 core 中已经包含此插件，同时，你应该直接使用 themeConfig.lastUpdated 选项。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span><span class="token punctuation">,</span> <span class="token comment">// string | boolean</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">使用须知</p><p>由于<code>lastUpdated</code>是基于<code>git</code>的, 所以你只能在一个基于<code>git</code>的项目中启用它。此外，由于使用的时间戳来自<code>git commit</code>，因此它将仅在给定页的第一次提交之后显示，并且仅在该页面后续提交更改时更新。</p></div><p>故如果发生不显示的问题，大概是是因为没有加入git的仓库，需要先进行初始化仓库，添加到仓库，然后提交，才会显示更新时间，时间是以提交的时间为准。<br> 创建 <code>.gitignore</code> 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 忽略node_modules目录</span>
node_modules/

<span class="token comment"># 忽略 .temp 目录</span>
.temp/

<span class="token comment"># 忽略package-lock.json和yarn.lock文件</span>
package-lock.json
yarn.lock

<span class="token comment"># 忽略dist目录</span>
docs/.vuepress/dist/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面进行加入到git仓库，此时加入的是本地的仓库。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加对远程仓库的连接</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:wxhcoding/myblog.git

<span class="token comment"># 初始化仓库</span>
<span class="token function">git</span> init

<span class="token comment"># 添加全部文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;第一次提交&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是没有添加 <code>.gitignore</code> 文件直接commit的全部文件，需要添加之后，对之前的缓存进行清理，然后再把全部文件add并commit，其中也包括新创建的<code>.gitignore文件</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;.gitignore is now working&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署到github" tabindex="-1"><a class="header-anchor" href="#部署到github" aria-hidden="true">#</a> 部署到GitHub</h3>`,26),F={href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"},K=t(`<blockquote><p>在 <code>docs/.vuepress/config.js</code> 中设置正确的 <code>base</code>。</p></blockquote><blockquote><p>如果你打算发布到 <code>https://&lt;USERNAME&gt;.github.io/</code>，则可以省略这一步，因为 <code>base</code> 默认即是 &quot;/&quot;。</p></blockquote><blockquote><p>如果你打算发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>（也就是说你的仓库在 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>），则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p></blockquote><p>因为我的项目地址为<code>https://github.com/wxhcoding/myblog</code>，故需要设置<code>base</code>为<code>/myblog/</code>。</p><p>在你的项目中，创建一个如下的 <code>deploy.sh</code> 文件（请自行判断去掉高亮行的注释）:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>package.json</code>文件中，添加<code>&quot;deploy&quot;: &quot;bash deploy.sh&quot;</code>命令。如下所示。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs --temp .temp&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),W=n("code",null,"yarn deploy",-1),$=n("code",null,"gh-pages",-1),B=n("code",null,"Settings",-1),H=n("code",null,"Pages",-1),J=n("code",null,"Branch",-1),Q=n("code",null,"gh-pages",-1),X=n("code",null,"/root",-1),Y=n("code",null,"Save",-1),Z={href:"https://wxhcoding.github.io/myblog/",target:"_blank",rel:"noopener noreferrer"},nn=t('<h3 id="后续的更新" tabindex="-1"><a class="header-anchor" href="#后续的更新" aria-hidden="true">#</a> 后续的更新</h3><ol><li>在本地文件夹内使用vscode打开，即输入<code>code .</code></li><li>对md文件进行编辑，更新。</li><li><code>yarn docs:dev</code> 在本地服务器浏览效果。</li><li>git进行<code>add</code>和<code>commit</code></li><li><code>yarn deploy</code>部署到github</li></ol>',2);function sn(en,an){const e=o("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[s("根据 "),n("a",p,[s("VuePress官方文档"),a(e)]),s("先搭建起网站的框架，后续对网站的内容进行更新。")]),u,v,n("p",null,[s("直接从 "),n("a",m,[s("git官网"),a(e)]),s("下载可能比较慢，这里我选择从清华镜像下载，下载之后直接安装，默认配置即可。"),b,n("a",h,[s("点击跳转到清华镜像"),a(e)])]),g,n("p",null,[n("a",k,[s("node.js"),a(e)]),s("下载 直接安装即可。"),_,s(" 推荐使用低于17版本的，后续可能有问题。"),f,s(" 可以在阿里云/清华镜像找到。")]),E,n("p",null,[n("a",x,[s("yarn下载"),a(e)]),s("直接安装即可。")]),y,n("p",null,[n("a",q,[s("VsdCode"),a(e)]),s("下载。把下载地址中的"),j,s(" 换为"),N,s("可以加快下载速度。")]),R,n("p",null,[n("a",S,[s("添加SSHkey秘钥"),a(e)]),s("，可以参考此文章生成自己的秘钥。")]),w,n("p",null,[s("根据 "),n("a",P,[s("VuePress官方文档"),a(e)]),s("进行搭建。"),D,s(" 在自定义的文件夹内，右键，选择"),M,s("，敲以下命令。"),O,s(" 以下内容可以根据官方文档进行。")]),V,n("blockquote",null,[n("p",null,[n("a",A,[s("vue项目报错：error:0308010C:digital envelope routines::unsupported"),a(e)]),C,n("a",L,[s("Vue 报错error:0308010C:digital envelope routines::unsupported 解决方案（三种）"),a(e)]),T,n("a",U,[s("vuepress使用vuepress dev .启动报错Error: Cannot find module 'vue-template-compiler'"),a(e)]),G,n("a",I,[s("Vue packages version mismatch"),a(e)])])]),z,n("p",null,[s("官方文档的"),n("a",F,[s("GitHub Pages"),a(e)]),s("链接。")]),K,n("p",null,[s("最后使用 "),W,s("进行部署。 进入到GitHub的项目仓库，切换到"),$,s("分支，即可看到已经上传，进行到"),B,s("，选择"),H,s("，在"),J,s("中选择"),Q,s("个"),X,s("，进行"),Y,s("，即可打开自己的网站，如"),n("a",Z,[s("Jhw-Blog"),a(e)])]),nn])}const on=i(d,[["render",sn],["__file","about.html.vue"]]);export{on as default};
