"use strict";
exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 50672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-389e3ebb",
  "path": "/5.x/official-account/server.html",
  "title": "服务端",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基本使用",
      "slug": "基本使用",
      "children": []
    },
    {
      "level": 2,
      "title": "注册多个消息处理器",
      "slug": "注册多个消息处理器",
      "children": []
    },
    {
      "level": 2,
      "title": "注册指定消息类型的消息处理器",
      "slug": "注册指定消息类型的消息处理器",
      "children": []
    },
    {
      "level": 2,
      "title": "请求消息的属性",
      "slug": "请求消息的属性",
      "children": [
        {
          "level": 3,
          "title": "文本：",
          "slug": "文本",
          "children": []
        },
        {
          "level": 3,
          "title": "图片：",
          "slug": "图片",
          "children": []
        },
        {
          "level": 3,
          "title": "语音：",
          "slug": "语音",
          "children": []
        },
        {
          "level": 3,
          "title": "视频：",
          "slug": "视频",
          "children": []
        },
        {
          "level": 3,
          "title": "小视频：",
          "slug": "小视频",
          "children": []
        },
        {
          "level": 3,
          "title": "事件：",
          "slug": "事件",
          "children": []
        },
        {
          "level": 3,
          "title": "地理位置：",
          "slug": "地理位置",
          "children": []
        },
        {
          "level": 3,
          "title": "链接：",
          "slug": "链接",
          "children": []
        },
        {
          "level": 3,
          "title": "文件：",
          "slug": "文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "回复消息",
      "slug": "回复消息",
      "children": []
    },
    {
      "level": 2,
      "title": "消息转发给客服系统",
      "slug": "消息转发给客服系统",
      "children": []
    }
  ],
  "filePathRelative": "5.x/official-account/server.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 42403:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/official-account/server.html.vue?vue&type=template&id=ea7450bc



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h1><p>我们在入门小教程一节以服务端为例讲解了一个基本的消息的处理，这里就不再讲服务器验证的流程了，请直接参考前面的入门实例即可。</p><p>服务端的作用呢，在整个微信开发中主要是负责 <strong><a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_standard_messages.html" target="_blank" rel="noopener noreferrer">接收用户发送过来的消息`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong>，还有 <strong><a href="https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Receiving_event_pushes.html" target="_blank" rel="noopener noreferrer">用户触发的一系列事件`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong>。</p><p>首先我们得理清消息与事件的回复逻辑，当你收到用户消息后（消息由微信服务器推送到你的服务器），在你对消息进行一些处理后，不管是选择回复一个消息还是什么不都回给用户，你也应该给微信服务器一个 “答复”，如果是选择回复一条消息，就直接返回一个消息xml就好，如果选择不作任何回复，你也得回复一个空字符串或者字符串 <code>SUCCESS</code>（不然用户就会看到 <code>该公众号暂时无法提供服务</code>）。</p><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>在 SDK 中使用 <code>\$app-&gt;server-&gt;push(callable \$callback)</code> 来设置消息处理器：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \$message[&#39;FromUserName&#39;] // 用户的 openid</span>
    <span class="token comment">// \$message[&#39;MsgType&#39;] // 消息类型：event, text....</span>
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;您好！欢迎使用 EasyWeChat&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在 laravel 中：</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \$response 为 \`Symfony\\Component\\HttpFoundation\\Response\` 实例</span>
<span class="token comment">// 对于需要直接输出响应的框架，或者原生 PHP 环境下</span>
<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 而 laravel 中直接返回即可：</span>

<span class="token keyword">return</span> <span class="token variable">\$response</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>这里我们使用 <code>push</code> 传入了一个 <strong>闭包（<a href="http://php.net/manual/en/class.closure.php" target="_blank" rel="noopener noreferrer">Closure`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>）</strong>，该闭包接收一个参数 <code>\$message</code> 为消息对象（类型取决于你的配置中 <code>response_type</code>），你可以在全局消息处理器中对消息类型进行筛选：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;MsgType&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;event&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到事件消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;text&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到文字消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到图片消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;voice&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到语音消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;video&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到视频消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;location&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到坐标消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;link&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到链接消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;file&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到文件消息&#39;</span><span class="token punctuation">;</span>
        <span class="token comment">// ... 其它消息</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;收到其它消息&#39;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>当然，因为这里 <code>push</code> 接收一个 <a href="http://php.net/manual/zh/language.types.callable.php" target="_blank" rel="noopener noreferrer"><code>callable</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 的参数，所以你不一定要传入一个 Closure 闭包，你可以选择传入一个函数名，一个 <code>[\$class, \$method]</code> 或者 <code>Foo::bar</code> 这样的类型。</p><p>某些情况，我们需要直接使用 <code>\$message</code> 参数，那么怎么在 <code>push</code> 的闭包外调用呢？</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>    <span class="token variable">\$message</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>{warning} 注意：<code>\$message</code> 的类型取决于你的配置中 <code>response_type</code></p></blockquote><h2 id="注册多个消息处理器" tabindex="-1"><a class="header-anchor" href="#注册多个消息处理器" aria-hidden="true">#</a> 注册多个消息处理器</h2><p>有时候你可能需要对消息记日志，或者一系列的自定义操作，你可以注册多个 handler：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name static-context">MessageLogHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name static-context">MessageReplyHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name static-context">OtherHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>{warning} 注意： 1. 最后一个非空返回值将作为最终应答给用户的消息内容，如果中间某一个 handler 返回值 false, 则将终止整个调用链，不会调用后续的 handlers。 2. 传入的自定义 Handler 类需要实现 <code>\\EasyWeChat\\Kernel\\Contracts\\EventHandlerInterface</code>。</p></blockquote><h2 id="注册指定消息类型的消息处理器" tabindex="-1"><a class="header-anchor" href="#注册指定消息类型的消息处理器" aria-hidden="true">#</a> 注册指定消息类型的消息处理器</h2><p>我们想对特定类型的消息应用不同的处理器，可以在第二个参数传入类型筛选：</p><blockquote><p>注意，第二个参数必须是 <code>\\EasyWeChat\\Kernel\\Messages\\Message</code> 类的常量。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Message</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name static-context">ImageMessageHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name static-context">Message</span><span class="token operator">::</span><span class="token constant">IMAGE</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 图片消息</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name static-context">TextMessageHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name static-context">Message</span><span class="token operator">::</span><span class="token constant">TEXT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 文本消息</span>

<span class="token comment">// 同时处理多种类型的处理器</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name static-context">MediaMessageHandler</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name static-context">Message</span><span class="token operator">::</span><span class="token class-name">VOICE</span><span class="token operator">|</span><span class="token class-name">Message</span><span class="token operator">::</span><span class="token class-name">VIDEO</span><span class="token operator">|</span><span class="token class-name">Message</span><span class="token operator">::</span><span class="token constant">SHORT_VIDEO</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当消息为 三种中任意一种都可触发</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="请求消息的属性" tabindex="-1"><a class="header-anchor" href="#请求消息的属性" aria-hidden="true">#</a> 请求消息的属性</h2><p>当你接收到用户发来的消息时，可能会提取消息中的相关属性，参考：</p><p>请求消息基本属性(以下所有消息都有的基本属性)：</p><blockquote><blockquote><ul><li><code>ToUserName</code> 接收方帐号（该公众号 ID）</li><li><code>FromUserName</code> 发送方帐号（OpenID, 代表用户的唯一标识）</li><li><code>CreateTime</code> 消息创建时间（时间戳）</li><li><code>MsgId</code> 消息 ID（64位整型）</li></ul></blockquote></blockquote><h3 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本：</h3><blockquote><ul><li><code>MsgType</code> text</li><li><code>Content</code> 文本消息内容</li></ul></blockquote><h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片：</h3><blockquote><ul><li><code>MsgType</code> image</li><li><code>MediaId</code> 图片消息媒体id，可以调用多媒体文件下载接口拉取数据。</li><li><code>PicUrl</code> 图片链接</li></ul></blockquote><h3 id="语音" tabindex="-1"><a class="header-anchor" href="#语音" aria-hidden="true">#</a> 语音：</h3><blockquote><ul><li><code>MsgType</code> voice</li><li><code>MediaId</code> 语音消息媒体id，可以调用多媒体文件下载接口拉取数据。</li><li><code>Format</code> 语音格式，如 amr，speex 等</li><li><code>Recognition</code> * 开通语音识别后才有</li></ul></blockquote><blockquote><p>{warning} 请注意，开通语音识别后，用户每次发送语音给公众号时，微信会在推送的语音消息XML数据包中，增加一个 <code>Recongnition</code> 字段</p></blockquote><h3 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频：</h3><blockquote><ul><li><code>MsgType</code> video</li><li><code>MediaId</code> 视频消息媒体id，可以调用多媒体文件下载接口拉取数据。</li><li><code>ThumbMediaId</code> 视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。</li></ul></blockquote><h3 id="小视频" tabindex="-1"><a class="header-anchor" href="#小视频" aria-hidden="true">#</a> 小视频：</h3><blockquote><ul><li><code>MsgType</code> shortvideo</li><li><code>MediaId</code> 视频消息媒体id，可以调用多媒体文件下载接口拉取数据。</li><li><code>ThumbMediaId</code> 视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。</li></ul></blockquote><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件：</h3><blockquote><ul><li><code>MsgType</code> event</li><li><code>Event</code> 事件类型 （如：subscribe(订阅)、unsubscribe(取消订阅) ...， CLICK 等）</li></ul></blockquote><h4 id="扫描带参数二维码事件" tabindex="-1"><a class="header-anchor" href="#扫描带参数二维码事件" aria-hidden="true">#</a> 扫描带参数二维码事件</h4><blockquote><ul><li><code>EventKey</code> 事件KEY值，比如：qrscene_123123，qrscene_为前缀，后面为二维码的参数值</li><li><code>Ticket</code> 二维码的 ticket，可用来换取二维码图片</li></ul></blockquote><h4 id="上报地理位置事件" tabindex="-1"><a class="header-anchor" href="#上报地理位置事件" aria-hidden="true">#</a> 上报地理位置事件</h4><blockquote><ul><li><code>Latitude</code> 23.137466 地理位置纬度</li><li><code>Longitude</code> 113.352425 地理位置经度</li><li><code>Precision</code> 119.385040 地理位置精度</li></ul></blockquote><h4 id="自定义菜单事件" tabindex="-1"><a class="header-anchor" href="#自定义菜单事件" aria-hidden="true">#</a> 自定义菜单事件</h4><blockquote><ul><li><code>EventKey</code> 事件KEY值，与自定义菜单接口中KEY值对应，如：CUSTOM_KEY_001, www.qq.com</li></ul></blockquote><h3 id="地理位置" tabindex="-1"><a class="header-anchor" href="#地理位置" aria-hidden="true">#</a> 地理位置：</h3><blockquote><ul><li><code>MsgType</code> location</li><li><code>Location_X</code> 地理位置纬度</li><li><code>Location_Y</code> 地理位置经度</li><li><code>Scale</code> 地图缩放大小</li><li><code>Label</code> 地理位置信息</li></ul></blockquote><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接：</h3><blockquote><ul><li><code>MsgType</code> link</li><li><code>Title</code> 消息标题</li><li><code>Description</code> 消息描述</li><li><code>Url</code> 消息链接</li></ul></blockquote><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件：</h3><blockquote><ul><li><code>MsgType</code>      file</li><li><code>Title</code>        文件名</li><li><code>Description</code> 文件描述，可能为null</li><li><code>FileKey</code>      文件KEY</li><li><code>FileMd5</code>      文件MD5值</li><li><code>FileTotalLen</code> 文件大小，单位字节</li></ul></blockquote><h2 id="回复消息" tabindex="-1"><a class="header-anchor" href="#回复消息" aria-hidden="true">#</a> 回复消息</h2><p>回复的消息可以为 <code>null</code>，此时 SDK 会返回给微信一个 &quot;SUCCESS&quot;，你也可以回复一个普通字符串，比如：<code>欢迎关注 overtrue.</code>，此时 SDK 会对它进行一个封装，产生一个 <a href="https://github.com/EasyWeChat/message/blob/master/src/Kernel/Messages/Text.php" target="_blank" rel="noopener noreferrer"><code>EasyWeChat\\Kernel\\Messages\\Text</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 类型的消息并在最后的 <code>\$app-&gt;server-&gt;serve();</code> 时生成对应的消息 XML 格式。</p><p>如果你想返回一个自己手动拼的原生 XML 格式消息，请返回一个 <a href="https://github.com/EasyWeChat/message/blob/master/src/Kernel/Messages/Raw.php" target="_blank" rel="noopener noreferrer"><code>EasyWeChat\\Kernel\\Messages\\Raw</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 实例即可。</p><h2 id="消息转发给客服系统" tabindex="-1"><a class="header-anchor" href="#消息转发给客服系统" aria-hidden="true">#</a> 消息转发给客服系统</h2><p>参见：<a href="message-transfer">多客服消息转发</a></p><p>关于消息的使用，请参考 <a href="messages"><code>消息</code></a> 章节。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/server.html.vue?vue&type=template&id=ea7450bc

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/server.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/official-account/server.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const server_html = (script);

/***/ })

};
;
//# sourceMappingURL=784.app.js.map