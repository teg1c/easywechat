"use strict";
exports.id = 4217;
exports.ids = [4217];
exports.modules = {

/***/ 7917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-44b62fad",
  "path": "/3.x/oauth.html",
  "title": "网页授权",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "关于 OAuth2.0",
      "slug": "关于-oauth2-0",
      "children": []
    },
    {
      "level": 2,
      "title": "微信 OAuth",
      "slug": "微信-oauth",
      "children": []
    },
    {
      "level": 2,
      "title": "逻辑组成",
      "slug": "逻辑组成",
      "children": []
    },
    {
      "level": 2,
      "title": "开始之前",
      "slug": "开始之前",
      "children": []
    },
    {
      "level": 2,
      "title": "SDK 中 OAuth 模块的 API",
      "slug": "sdk-中-oauth-模块的-api",
      "children": [
        {
          "level": 3,
          "title": "发起授权",
          "slug": "发起授权",
          "children": []
        },
        {
          "level": 3,
          "title": "获取已授权用户",
          "slug": "获取已授权用户",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "网页授权实例",
      "slug": "网页授权实例",
      "children": []
    }
  ],
  "filePathRelative": "3.x/oauth.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 16727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ oauth_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/oauth.html.vue?vue&type=template&id=2c30c46a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="网页授权" tabindex="-1"><a class="header-anchor" href="#网页授权" aria-hidden="true">#</a> 网页授权</h1><h2 id="关于-oauth2-0" tabindex="-1"><a class="header-anchor" href="#关于-oauth2-0" aria-hidden="true">#</a> 关于 OAuth2.0</h2><p>OAuth是一个关于授权（authorization）的开放网络标准，在全世界得到广泛应用，目前的版本是2.0版。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
     +--------+                               +---------------+
     |        |--(A)- Authorization Request -&gt;|   Resource    |
     |        |                               |     Owner     |
     |        |&lt;-(B)-- Authorization Grant ---|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant --&gt;| Authorization |
     | Client |                               |     Server    |
     |        |&lt;-(D)----- Access Token -------|               |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------&gt;|    Resource   |
     |        |                               |     Server    |
     |        |&lt;-(F)--- Protected Resource ---|               |
     +--------+                               +---------------+
                      OAuth 授权流程
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><blockquote><p>摘自：<a href="https://datatracker.ietf.org/doc/rfc6749/?include_text=1" target="_blank" rel="noopener noreferrer">RFC 6749`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><p>步骤解释：</p><pre><code>（A）用户打开客户端以后，客户端要求用户给予授权。
（B）用户同意给予客户端授权。
（C）客户端使用上一步获得的授权，向认证服务器申请令牌。
（D）认证服务器对客户端进行认证以后，确认无误，同意发放令牌。
（E）客户端使用令牌，向资源服务器申请获取资源。
（F）资源服务器确认令牌无误，同意向客户端开放资源。
</code></pre><p>关于 OAuth 协议我们就简单了解到这里，如果还有不熟悉的同学，请 <a href="https://www.google.com.hk/?gws_rd=ssl#safe=strict&amp;q=OAuth2" target="_blank" rel="noopener noreferrer">Google 相关资料`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="微信-oauth" tabindex="-1"><a class="header-anchor" href="#微信-oauth" aria-hidden="true">#</a> 微信 OAuth</h2><p>在微信里的 OAuth 其实有两种：<a href="http://mp.weixin.qq.com/wiki/9/01f711493b5a02f24b04365ac5d8fd95.html" target="_blank" rel="noopener noreferrer">公众平台网页授权获取用户信息`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>、<a href="https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;id=open1419316505&amp;token=&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">开放平台网页登录`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><p>它们的区别有两处，授权地址不同，<code>scope</code> 不同。</p><ul><li><p><strong>公众平台网页授权获取用户信息</strong></p><p><strong>授权 URL</strong>: <code>https://open.weixin.qq.com/connect/oauth2/authorize</code><strong>Scopes</strong>: <code>snsapi_base</code> 与 <code>snsapi_userinfo</code></p></li><li><p><strong>开放平台网页登录</strong></p><p><strong>授权 URL</strong>: <code>https://open.weixin.qq.com/connect/qrconnect</code><strong>Scopes</strong>: <code>snsapi_login</code></p></li></ul><p>他们的逻辑都一样：</p><ol><li>用户尝试访问一个我们的业务页面，例如: <code>/user/profile</code></li><li>如果用户已经登录，则正常显示该页面</li><li>系统检查当前访问的用户并未登录（从 session 或者其它方式检查），则跳转到<strong>跳转到微信授权服务器</strong>（上面的两种中一种<strong>授权 URL</strong>），并告知微信授权服务器我的<strong>回调URL（redirect_uri=callback.php)</strong>，此时用户看到蓝色的授权确认页面（<code>scope</code> 为 <code>snsapi_base</code> 时不显示）</li><li>用户点击确定完成授权，浏览器跳转到<strong>回调URL</strong>: <code>callback.php</code> 并带上 <code>code</code>： <code>?code=CODE&amp;state=STATE</code>。</li><li>在 <code>callback.php</code> 中得到 <code>code</code> 后，通过 <code>code</code> 再次向微信服务器请求得到 <strong>网页授权 access_token</strong> 与 <code>openid</code></li><li>你可以选择拿 <code>openid</code> 去请求 API 得到用户信息（可选）</li><li>将用户信息写入 SESSION。</li><li>跳转到第 3 步写入的 <code>target_url</code> 页面（<code>/user/profile</code>）。</li></ol><blockquote><p>看懵了？没事，使用 SDK，你不用管这么多。😄</p><p>注意，上面的第3步：redirect_uri=callback.php实际上我们会在 <code>callback.php</code> 后面还会带上授权目标页面 <code>user/profile</code>，所以完整的 <code>redirect_uri</code> 应该是下面的这样的PHP去拼出来：<code>&#39;redirect_uri=&#39;.urlencode(&#39;callback.php?target=user/profile&#39;)</code> 结果：redirect_uri=callback.php%3Ftarget%3Duser%2Fprofile</p></blockquote><h2 id="逻辑组成" tabindex="-1"><a class="header-anchor" href="#逻辑组成" aria-hidden="true">#</a> 逻辑组成</h2><p>从上面我们所描述的授权流程来看，我们至少有3个页面：</p><ol><li><strong>业务页面</strong>，也就是需要授权才能访问的页面。</li><li><strong>发起授权页</strong>，此页面其实可以省略，可以做成一个中间件，全局检查未登录就发起授权。</li><li><strong>授权回调页</strong>，接收用户授权后的状态，并获取用户信息，写入用户会话状态（SESSION）。</li></ol><h2 id="开始之前" tabindex="-1"><a class="header-anchor" href="#开始之前" aria-hidden="true">#</a> 开始之前</h2><p>在开始之前请一定要记住，先登录公众号后台，找到<strong>边栏 “开发”</strong> 模块下的 <strong>“接口权限”</strong>，点击 <strong>“网页授权获取用户基本信息”</strong> 后面的修改，添加你的网页授权域名。</p><blockquote><p>如果你的授权地址为：<code>http://www.abc.com/xxxxx</code>，那么请填写 <code>www.abc.com</code>，也就是说请填写与网址匹配的域名，前者如果填写 <code>abc.com</code> 是通过不了的。</p></blockquote><h2 id="sdk-中-oauth-模块的-api" tabindex="-1"><a class="header-anchor" href="#sdk-中-oauth-模块的-api" aria-hidden="true">#</a> SDK 中 OAuth 模块的 API</h2><p>在 SDK 中，我们使用名称为 <code>oauth</code> 的模块来完成授权服务，我们主要用到以下两个 API：</p><h3 id="发起授权" tabindex="-1"><a class="header-anchor" href="#发起授权" aria-hidden="true">#</a> 发起授权</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token operator">-&gt;</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;snsapi_userinfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                          <span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当你的应用是分布式架构且没有会话保持的情况下，你需要自行设置请求对象以实现会话共享。比如在 <a href="http://laravel.com" target="_blank" rel="noopener noreferrer">Laravel`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 框架中支持Session储存在Redis中，那么需要这样：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token operator">-&gt;</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;snsapi_userinfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                          <span class="token operator">-&gt;</span><span class="token function">setRequest</span><span class="token punctuation">(</span><span class="token variable">\$request</span><span class="token punctuation">)</span>
                          <span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//回调后获取user时也要设置\$request对象</span>
<span class="token comment">//\$user = \$app-&gt;oauth-&gt;setRequest(\$request)-&gt;user();</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>它的返回值 <code>\$response</code> 是一个 <a href="http://api.symfony.com/3.0/Symfony/Component/HttpFoundation/RedirectResponse.html" target="_blank" rel="noopener noreferrer">Symfony\\Component\\HttpFoundation\\RedirectResponse`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 实例。</p><p>你可以选择在框架中做一些正确的响应，比如在 <a href="http://laravel.com" target="_blank" rel="noopener noreferrer">Laravel`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 框架中控制器方法是要求返回响应值的，那么你就直接:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token variable">\$response</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在有的框架 (比如yii2) 中是直接 <code>echo</code> 或者 <code>\$this-&gt;display()</code> 这种的时候，你就直接：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Laravel 里请使用：return \$response;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取已授权用户" tabindex="-1"><a class="header-anchor" href="#获取已授权用户" aria-hidden="true">#</a> 获取已授权用户</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$user</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token operator">-&gt;</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \$user 可以用的方法:</span>
<span class="token comment">// \$user-&gt;getId();  // 对应微信的 OPENID</span>
<span class="token comment">// \$user-&gt;getNickname(); // 对应微信的 nickname</span>
<span class="token comment">// \$user-&gt;getName(); // 对应微信的 nickname</span>
<span class="token comment">// \$user-&gt;getAvatar(); // 头像网址</span>
<span class="token comment">// \$user-&gt;getOriginal(); // 原始API返回的结果</span>
<span class="token comment">// \$user-&gt;getToken(); // access_token， 比如用于地址共享时使用</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>返回的 <code>\$user</code> 是 <a href="https://github.com/overtrue/socialite/blob/master/src/User.php" target="_blank" rel="noopener noreferrer">Overtrue\\Socialite\\User`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 对象，你可以从该对象拿到<a href="https://github.com/overtrue/socialite#user-interface" target="_blank" rel="noopener noreferrer">更多的信息`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><blockquote><p>🙏 注意：<code>\$user</code> 里没有 <code>openid</code>， <code>\$user-&gt;id</code> 便是 <code>openid</code>. 如果你想拿微信返回给你的原样的全部信息，请使用：\$user-&gt;getOriginal();</p></blockquote><p>当 <code>scope</code> 为 <code>snsapi_base</code> 时 <code>\$oauth-&gt;user();</code> 对象里只有 <code>id</code>，没有其它信息。</p><h2 id="网页授权实例" tabindex="-1"><a class="header-anchor" href="#网页授权实例" aria-hidden="true">#</a> 网页授权实例</h2><p>我们这里来用原生 PHP 写法举个例子，<code>oauth_callback</code> 是我们的授权回调URL (未urlencode编码的URL), <code>user/profile</code> 是我们需要授权才能访问的页面，它的 PHP 代码如下：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>// http://easywechat.org/user/profile
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
  <span class="token string single-quoted-string">&#39;oauth&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
      <span class="token string single-quoted-string">&#39;scopes&#39;</span>   <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;snsapi_userinfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;callback&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;/oauth_callback&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ..</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$oauth</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token punctuation">;</span>

<span class="token comment">// 未登录</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">\$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wechat_user&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token variable">\$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;target_url&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;user/profile&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token variable">\$oauth</span><span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 这里不一定是return，如果你的框架action不是返回内容的话你就得使用</span>
  <span class="token comment">// \$oauth-&gt;redirect()-&gt;send();</span>
<span class="token punctuation">}</span>

<span class="token comment">// 已经登录过</span>
<span class="token variable">\$user</span> <span class="token operator">=</span> <span class="token variable">\$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wechat_user&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>授权回调页：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>// http://easywechat.org/oauth_callback
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$oauth</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token punctuation">;</span>

<span class="token comment">// 获取 OAuth 授权结果用户信息</span>
<span class="token variable">\$user</span> <span class="token operator">=</span> <span class="token variable">\$oauth</span><span class="token operator">-&gt;</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;wechat_user&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">\$user</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$targetUrl</span> <span class="token operator">=</span> <span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">\$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;target_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string single-quoted-string">&#39;/&#39;</span> <span class="token punctuation">:</span> <span class="token variable">\$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;target_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;location:&#39;</span><span class="token operator">.</span> <span class="token variable">\$targetUrl</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 跳转到 user/profile</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>上面的例子呢都是基于 <code>\$_SESSION</code> 来保持会话的，在微信客户端中，你可以结合 COOKIE 来存储，但是有效期平台不一样时间也不一样，好像 Android 的失效会快一些，不过基本也够用了。</p><p>更多关于微信网页授权 API 请参考： http://mp.weixin.qq.com/wiki/ 更多开放平台网页登录请参考：https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&amp;t=resource/res_list&amp;verify=1&amp;id=open1419316505&amp;token=&amp;lang=zh_CN</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/oauth.html.vue?vue&type=template&id=2c30c46a

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/oauth.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/oauth.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const oauth_html = (script);

/***/ })

};
;
//# sourceMappingURL=4217.app.js.map