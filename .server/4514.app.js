"use strict";
exports.id = 4514;
exports.ids = [4514];
exports.modules = {

/***/ 6537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7e6302cc",
  "path": "/6.x/official-account/server.html",
  "title": "服务端",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "中间件模式",
      "slug": "中间件模式",
      "children": []
    },
    {
      "level": 3,
      "title": "回复消息",
      "slug": "回复消息",
      "children": []
    },
    {
      "level": 3,
      "title": "使用独立的中间件类",
      "slug": "使用独立的中间件类",
      "children": []
    },
    {
      "level": 3,
      "title": "使用 callable 类型中间件",
      "slug": "使用-callable-类型中间件",
      "children": []
    },
    {
      "level": 2,
      "title": "注册指定消息类型的消息处理器",
      "slug": "注册指定消息类型的消息处理器",
      "children": [
        {
          "level": 3,
          "title": "处理普通消息",
          "slug": "处理普通消息",
          "children": []
        },
        {
          "level": 3,
          "title": "处理事件消息",
          "slug": "处理事件消息",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "完整示例",
      "slug": "完整示例",
      "children": []
    }
  ],
  "filePathRelative": "6.x/official-account/server.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 10595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ server_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/6.x/official-account/server.html.vue?vue&type=template&id=22476590



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h1><p>你可以通过 <code>\$app-&gt;getServer()</code> 获取服务端模块，<strong>服务端模块默认处理了服务端验证的逻辑</strong>：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>OfficialAccount<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$server</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="中间件模式" tabindex="-1"><a class="header-anchor" href="#中间件模式" aria-hidden="true">#</a> 中间件模式</h3><p>与 5.x 的设计类似，服务端使用中间件模式来依次调用开发者注册的中间件：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 你的自定义逻辑</span>
    <span class="token keyword">return</span> <span class="token variable">\$next</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>你可以注册多个中间件来处理不同的情况：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span>
    <span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 你的自定义逻辑1</span>
        <span class="token keyword">return</span> <span class="token variable">\$next</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 你的自定义逻辑2</span>
        <span class="token keyword">return</span> <span class="token variable">\$next</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 你的自定义逻辑3</span>
        <span class="token keyword">return</span> <span class="token variable">\$next</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="回复消息" tabindex="-1"><a class="header-anchor" href="#回复消息" aria-hidden="true">#</a> 回复消息</h3><p>当你在中间件里不回复消息时，你将要传递消息给下一个中间件：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 你的自定义逻辑3</span>
    <span class="token keyword">return</span> <span class="token variable">\$next</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果此时你需要返回消息给用户，你可以直接像下面这样回复消息内容：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;感谢你使用 EasyWeChat&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>注意：回复消息后其他没运行的中间件将不再执行，所以请你将全局都需要执行的中间件优先提前注册。</p></blockquote><p>其他类型的消息时，请直接参考 <strong><a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Passive_user_reply_message.html" target="_blank" rel="noopener noreferrer">官方文档消息的 XML 结构`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong> 以数组形式返回即可。</p><p>需要省略 <code>ToUserName</code>、<code>FromUserName</code> 和 <code>CreateTime</code>，以回复图片消息为例:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;MsgType&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;Image&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;MediaId&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;media_id&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="怎么发送多条消息" tabindex="-1"><a class="header-anchor" href="#怎么发送多条消息" aria-hidden="true">#</a> 怎么发送多条消息？</h4><p>服务端只能回复一条消息，如果你想在接收到消息时向用户发送多条消息，你可以调用 <strong><a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html" target="_blank" rel="noopener noreferrer">客服消息`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong> 接口来发送多条。</p><h3 id="使用独立的中间件类" tabindex="-1"><a class="header-anchor" href="#使用独立的中间件类" aria-hidden="true">#</a> 使用独立的中间件类</h3><p>当然，中间件也支持多种类型，比如你可以使用一个独立的类作为中间件：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">MyCustomHandler</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token operator">-&gt;</span><span class="token property">MsgType</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;text&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//...</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token variable">\$next</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>注册中间件：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token class-name static-context">MyCustomHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者</span>

<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyCustomHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="使用-callable-类型中间件" tabindex="-1"><a class="header-anchor" href="#使用-callable-类型中间件" aria-hidden="true">#</a> 使用 callable 类型中间件</h3><p>中间件支持 <strong><a href="http://php.net/manual/zh/language.types.callable.php" target="_blank" rel="noopener noreferrer"><code>callable</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong> 类型的参数，所以你不一定要传入一个闭包（Closure），你可以选择传入一个函数名，一个 <code>[\$class, \$method]</code> 或者 <code>Foo::bar</code> 这样的类型。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">\$object</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;method&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ClassName::method&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="注册指定消息类型的消息处理器" tabindex="-1"><a class="header-anchor" href="#注册指定消息类型的消息处理器" aria-hidden="true">#</a> 注册指定消息类型的消息处理器</h2><p>为了方便开发者处理消息推送，server 类内置了两个便捷方法：</p><h3 id="处理普通消息" tabindex="-1"><a class="header-anchor" href="#处理普通消息" aria-hidden="true">#</a> 处理普通消息</h3><p>当普通微信用户向公众账号发消息时被调用，且匹配对应的事件类型：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">addMessageListener</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>参数</strong></p><ul><li>参数 1 为消息类型，也就是 message 中的 <code>MsgType</code> 字段，例如：<code>image</code>;</li><li>参数 2 是中间件，也就是上面讲到的多种类型的中间件。</li></ul><h3 id="处理事件消息" tabindex="-1"><a class="header-anchor" href="#处理事件消息" aria-hidden="true">#</a> 处理事件消息</h3><p>事件消息中间件仅在推送事件消息时被调用，且匹配对应的事件类型：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;subscribe&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>参数</strong></p><ul><li>参数 1 为事件类型，也就是 message 中的 <code>Event</code> 字段，例如：<code>subscribe</code>;</li><li>参数 2 是中间件，也就是上面讲到的多种类型的中间件。</li></ul><p>关于回复消息的结构，可以查阅 <strong>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/6.x/official-account/message.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`消息`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("消息")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</strong> 章节了解更多。</p><h2 id="完整示例" tabindex="-1"><a class="header-anchor" href="#完整示例" aria-hidden="true">#</a> 完整示例</h2><p>以下示例完成了服务端验证，自定义中间件回复等逻辑：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>OfficialAccount<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$server</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token function">getServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;subscribe&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Closure</span> <span class="token variable">\$next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;感谢您关注 EasyWeChat!&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">\$response</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote><p><code>\$response</code> 是一个 <a href="https://github.com/php-fig/http-message/blob/master/src/ResponseInterface.php" target="_blank" rel="noopener noreferrer">Psr\\Http\\Message\\ResponseInterface`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 实现，所以请自己决定如何适配您的框架。</p></blockquote><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/official-account/server.html.vue?vue&type=template&id=22476590

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/6.x/official-account/server.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/6.x/official-account/server.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const server_html = (script);

/***/ })

};
;
//# sourceMappingURL=4514.app.js.map