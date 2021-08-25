"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[241],{1757:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-7fec7a39",path:"/5.x/wework/message.html",title:"消息",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"主动发送消息",slug:"主动发送消息",children:[]},{level:2,title:"接收消息",slug:"接收消息",children:[]},{level:2,title:"更新任务卡片消息状态",slug:"更新任务卡片消息状态",children:[]}],filePathRelative:"5.x/wework/message.md",git:{updatedTime:1629906046e3,contributors:[]}}},98685:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(66252).uE)('<h1 id="消息" tabindex="-1"><a class="header-anchor" href="#消息" aria-hidden="true">#</a> 消息</h1><h2 id="主动发送消息" tabindex="-1"><a class="header-anchor" href="#主动发送消息" aria-hidden="true">#</a> 主动发送消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>TextCard</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">// 获取 Messenger 实例</span>\n<span class="token variable">$messenger</span> <span class="token operator">=</span> <span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">messenger</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 准备消息</span>\n<span class="token variable">$message</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextCard</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;你的请假单审批通过&#39;</span><span class="token punctuation">,</span> \n    <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;单号：1928373, ....&#39;</span><span class="token punctuation">,</span> \n    <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://easywechat.com/oa/....&#39;</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 发送</span>\n<span class="token variable">$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toUser</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>你也可以很方便的发送普通文本消息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;你的请假单（单号：1928373）已经审批通过！&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toUser</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 或者写成</span>\n<span class="token variable">$messenger</span><span class="token operator">-&gt;</span><span class="token function">toUser</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;你的请假单（单号：1928373）已经审批通过！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="接收消息" tabindex="-1"><a class="header-anchor" href="#接收消息" aria-hidden="true">#</a> 接收消息</h2><p>被动接收消息，与回复消息，请参考：<a href="server">服务端</a></p><h2 id="更新任务卡片消息状态" tabindex="-1"><a class="header-anchor" href="#更新任务卡片消息状态" aria-hidden="true">#</a> 更新任务卡片消息状态</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messenger</span><span class="token operator">-&gt;</span><span class="token function">updateTaskcard</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$userids</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$agentId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$taskId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$replaceName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;已收到&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',9),p={render:function(s,n){return e}}}}]);
//# sourceMappingURL=v-7fec7a39.c1d84fd6.js.map