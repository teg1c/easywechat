"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4332],{96727:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-1f14785c",path:"/5.x/customize/replace-service.html",title:"自定义服务模块",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"5.x/customize/replace-service.md",git:{updatedTime:1629906046e3,contributors:[]}}},80466:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(66252).uE)('<h1 id="自定义服务模块" tabindex="-1"><a class="header-anchor" href="#自定义服务模块" aria-hidden="true">#</a> 自定义服务模块</h1><p>由于使用了容器模式来组织各模块的实例，意味着你可以比较容易的替换掉已经有的服务，以公众号服务为例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>\n<span class="token operator">&lt;</span><span class="token operator">...</span><span class="token operator">&gt;</span>\n\n<span class="token variable">$app</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">officialAccount</span><span class="token punctuation">(</span><span class="token variable">$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">rebind</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;request&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyCustomRequest</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这里的 <code>request</code> 为 SDK 内部服务名称。</p>',4),p={render:function(s,n){return e}}}}]);
//# sourceMappingURL=v-1f14785c.5a3a04e8.js.map