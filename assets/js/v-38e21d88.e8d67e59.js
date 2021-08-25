"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1618],{89212:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-38e21d88",path:"/5.x/open-work/service.html",title:"第三方应用接口",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"获取应用suite_access_token",slug:"获取应用suite-access-token",children:[]},{level:2,title:"获取预授权码",slug:"获取预授权码",children:[]},{level:2,title:"设置授权配置",slug:"设置授权配置",children:[]},{level:2,title:"获取企业永久授权码",slug:"获取企业永久授权码",children:[]},{level:2,title:"获取企业授权信息",slug:"获取企业授权信息",children:[]},{level:2,title:"获取应用的管理员列表",slug:"获取应用的管理员列表",children:[]},{level:2,title:"网页授权登录第三方",slug:"网页授权登录第三方",children:[{level:3,title:"构造第三方oauth2链接",slug:"构造第三方oauth2链接",children:[]},{level:3,title:"第三方根据code获取企业成员信息",slug:"第三方根据code获取企业成员信息",children:[]},{level:3,title:"第三方使用user_ticket获取成员详情",slug:"第三方使用user-ticket获取成员详情",children:[]}]}],filePathRelative:"5.x/open-work/service.md",git:{updatedTime:1629906046e3,contributors:[]}}},82670:(s,a,n)=>{n.r(a),n.d(a,{default:()=>p});const e=(0,n(66252).uE)('<h1 id="第三方应用接口" tabindex="-1"><a class="header-anchor" href="#第三方应用接口" aria-hidden="true">#</a> 第三方应用接口</h1><h2 id="获取应用suite-access-token" tabindex="-1"><a class="header-anchor" href="#获取应用suite-access-token" aria-hidden="true">#</a> 获取应用suite_access_token</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">suite_access_token</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取预授权码" tabindex="-1"><a class="header-anchor" href="#获取预授权码" aria-hidden="true">#</a> 获取预授权码</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getPreAuthCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="设置授权配置" tabindex="-1"><a class="header-anchor" href="#设置授权配置" aria-hidden="true">#</a> 设置授权配置</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">setSession</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$preAuthCode</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$sessionInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取企业永久授权码" tabindex="-1"><a class="header-anchor" href="#获取企业永久授权码" aria-hidden="true">#</a> 获取企业永久授权码</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getPermanentByCode</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$preAuthCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//传入临时授权码</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取企业授权信息" tabindex="-1"><a class="header-anchor" href="#获取企业授权信息" aria-hidden="true">#</a> 获取企业授权信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getAuthorization</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$authCorpId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$permanentCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//$authCorpId 授权的企业corp_id $permanentCode 授权的永久授权码</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="获取应用的管理员列表" tabindex="-1"><a class="header-anchor" href="#获取应用的管理员列表" aria-hidden="true">#</a> 获取应用的管理员列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getManagers</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$authCorpId</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$agentId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//$authCorpId 授权的企业corp_id  $agentId 授权方安装的应用agentid</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="网页授权登录第三方" tabindex="-1"><a class="header-anchor" href="#网页授权登录第三方" aria-hidden="true">#</a> 网页授权登录第三方</h2><h3 id="构造第三方oauth2链接" tabindex="-1"><a class="header-anchor" href="#构造第三方oauth2链接" aria-hidden="true">#</a> 构造第三方oauth2链接</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">//$redirectUri 回调uri 这里可以覆盖 默认读取配置文件</span>\n<span class="token comment">//$scope 应用授权作用域。</span>\n<span class="token comment">//$state 自定义安全值</span>\n<span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getOAuthRedirectUrl</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$redirectUri</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$scope</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;snsapi_userinfo&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">$state</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="第三方根据code获取企业成员信息" tabindex="-1"><a class="header-anchor" href="#第三方根据code获取企业成员信息" aria-hidden="true">#</a> 第三方根据code获取企业成员信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getUserByCode</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="第三方使用user-ticket获取成员详情" tabindex="-1"><a class="header-anchor" href="#第三方使用user-ticket获取成员详情" aria-hidden="true">#</a> 第三方使用user_ticket获取成员详情</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token property">corp</span><span class="token operator">-&gt;</span><span class="token function">getUserByTicket</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$userTicket</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',20),p={render:function(s,a){return e}}}}]);
//# sourceMappingURL=v-38e21d88.e8d67e59.js.map