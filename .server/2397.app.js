"use strict";
exports.id = 2397;
exports.ids = [2397];
exports.modules = {

/***/ 32972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4fa08d12",
  "path": "/5.x/official-account/messages.html",
  "title": "消息",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "消息类型",
      "slug": "消息类型",
      "children": [
        {
          "level": 3,
          "title": "文本消息",
          "slug": "文本消息",
          "children": []
        },
        {
          "level": 3,
          "title": "图片消息",
          "slug": "图片消息",
          "children": []
        },
        {
          "level": 3,
          "title": "视频消息",
          "slug": "视频消息",
          "children": []
        },
        {
          "level": 3,
          "title": "声音消息",
          "slug": "声音消息",
          "children": []
        },
        {
          "level": 3,
          "title": "链接消息",
          "slug": "链接消息",
          "children": []
        },
        {
          "level": 3,
          "title": "坐标消息",
          "slug": "坐标消息",
          "children": []
        },
        {
          "level": 3,
          "title": "图文消息",
          "slug": "图文消息",
          "children": []
        },
        {
          "level": 3,
          "title": "文章",
          "slug": "文章",
          "children": []
        },
        {
          "level": 3,
          "title": "素材消息",
          "slug": "素材消息",
          "children": []
        },
        {
          "level": 3,
          "title": "原始消息",
          "slug": "原始消息",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "在 SDK 中使用消息",
      "slug": "在-sdk-中使用消息",
      "children": [
        {
          "level": 3,
          "title": "在服务端回复消息",
          "slug": "在服务端回复消息",
          "children": []
        },
        {
          "level": 3,
          "title": "作为客服消息发送",
          "slug": "作为客服消息发送",
          "children": []
        },
        {
          "level": 3,
          "title": "群发消息",
          "slug": "群发消息",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "消息转发给客服系统",
      "slug": "消息转发给客服系统",
      "children": []
    }
  ],
  "filePathRelative": "5.x/official-account/messages.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 49342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ messages_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/official-account/messages.html.vue?vue&type=template&id=528668d5



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="消息" tabindex="-1"><a class="header-anchor" href="#消息" aria-hidden="true">#</a> 消息</h1><p>我把微信的 API 里的所有“消息”都按类型抽象出来了，也就是说，你不用区分它是回复消息还是主动推送消息，免去了你去手动拼装微信的 XML 以及乱七八糟命名不统一的 JSON 了。</p><p>在阅读以下内容时请忽略是 <strong>接收消息</strong> 还是 <strong>回复消息</strong>，后面我会给你讲它们的区别。</p><h2 id="消息类型" tabindex="-1"><a class="header-anchor" href="#消息类型" aria-hidden="true">#</a> 消息类型</h2><p>消息分为以下几种：<code>文本</code>、<code>图片</code>、<code>视频</code>、<code>声音</code>、<code>链接</code>、<code>坐标</code>、<code>图文</code>、<code>文章</code> 和一种特殊的 <code>原始消息</code>。</p><p>另外还有一种特殊的消息类型：<strong>素材消息</strong>，用于群发或者客服时发送已有素材用。</p><blockquote><p>{warning} 注意：回复消息与客服消息里的图文类型为：<strong>图文</strong>，群发与素材中的图文为<strong>文章</strong></p></blockquote><p>所有的消息类都在 <code>EasyWeChat\\Kernel\\Messages</code> 这个命名空间下， 下面我们来分开讲解：</p><h3 id="文本消息" tabindex="-1"><a class="header-anchor" href="#文本消息" aria-hidden="true">#</a> 文本消息</h3><p>属性列表：</p><blockquote><ul><li><code>content</code> 文本内容</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Text</span><span class="token punctuation">;</span>

<span class="token variable">\$text</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;您好！overtrue。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>
<span class="token variable">\$text</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$text</span><span class="token operator">-&gt;</span><span class="token property">content</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;您好！overtrue。&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>
<span class="token variable">\$text</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$text</span><span class="token operator">-&gt;</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;您好！overtrue。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="图片消息" tabindex="-1"><a class="header-anchor" href="#图片消息" aria-hidden="true">#</a> 图片消息</h3><p>属性列表：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- media_id 媒体资源 ID
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Image</span><span class="token punctuation">;</span>

<span class="token variable">\$image</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="视频消息" tabindex="-1"><a class="header-anchor" href="#视频消息" aria-hidden="true">#</a> 视频消息</h3><p>属性列表：</p><blockquote><ul><li><code>title</code> 标题</li><li><code>description</code> 描述</li><li><code>media_id</code> 媒体资源 ID</li><li><code>thumb_media_id</code> 封面资源 ID</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Video</span><span class="token punctuation">;</span>

<span class="token variable">\$video</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Video</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">\$title</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="声音消息" tabindex="-1"><a class="header-anchor" href="#声音消息" aria-hidden="true">#</a> 声音消息</h3><p>属性列表：</p><blockquote><ul><li><code>media_id</code> 媒体资源 ID</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Voice</span><span class="token punctuation">;</span>

<span class="token variable">\$voice</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voice</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="链接消息" tabindex="-1"><a class="header-anchor" href="#链接消息" aria-hidden="true">#</a> 链接消息</h3><blockquote><p>{warning} 微信目前不支持回复链接消息</p></blockquote><h3 id="坐标消息" tabindex="-1"><a class="header-anchor" href="#坐标消息" aria-hidden="true">#</a> 坐标消息</h3><blockquote><p>{warning} 微信目前不支持回复坐标消息</p></blockquote><h3 id="图文消息" tabindex="-1"><a class="header-anchor" href="#图文消息" aria-hidden="true">#</a> 图文消息</h3><p>图文消息分为 <code>NewsItem</code> 与 <code>News</code>，<code>NewsItem</code> 为图文内容条目。</p><blockquote><p>{warning} <a href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&amp;announce_id=115383153198yAvN&amp;version=&amp;lang=zh_CN&amp;token=" target="_blank" rel="noopener noreferrer">10月12日起，被动回复消息与客服消息接口的图文消息类型中图文数目只能为一条`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><p><code>NewsItem</code> 属性：</p><blockquote><ul><li><code>title</code> 标题</li><li><code>description</code> 描述</li><li><code>image</code> 图片链接</li><li><code>url</code> 链接 URL</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>News</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>NewsItem</span><span class="token punctuation">;</span>

<span class="token variable">\$items</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">NewsItem</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span>       <span class="token operator">=&gt;</span> <span class="token variable">\$title</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;url&#39;</span>         <span class="token operator">=&gt;</span> <span class="token variable">\$url</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;image&#39;</span>       <span class="token operator">=&gt;</span> <span class="token variable">\$image</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$news</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">News</span><span class="token punctuation">(</span><span class="token variable">\$items</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="文章" tabindex="-1"><a class="header-anchor" href="#文章" aria-hidden="true">#</a> 文章</h3><p>属性列表：</p><blockquote><ul><li><code>title</code> 标题</li><li><code>author</code> 作者</li><li><code>content</code> 具体内容</li><li><code>thumb_media_id</code> 图文消息的封面图片素材id（必须是永久mediaID）</li><li><code>digest</code> 图文消息的摘要，仅有单图文消息才有摘要，多图文此处为空</li><li><code>source_url</code> 来源 URL</li><li><code>show_cover</code> 是否显示封面，0 为 false，即不显示，1 为 true，即显示</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>

<span class="token variable">\$article</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;EasyWeChat&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;author&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;content&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;EasyWeChat 是一个开源的微信 SDK，它... ...&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// or</span>
<span class="token variable">\$article</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Article</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$article</span><span class="token operator">-&gt;</span><span class="token property">title</span>   <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;EasyWeChat&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$article</span><span class="token operator">-&gt;</span><span class="token property">author</span>  <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;overtrue&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$article</span><span class="token operator">-&gt;</span><span class="token property">content</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;微信 SDK ...&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="素材消息" tabindex="-1"><a class="header-anchor" href="#素材消息" aria-hidden="true">#</a> 素材消息</h3><p>素材消息用于群发与客服消息时使用。</p><blockquote><p>素材消息不支持被动回复，如需被动回复素材消息，首先组装后，再 News 方法返回。</p></blockquote><p>属性就一个：<code>media_id</code>。</p><p>在构造时有两个参数：</p><blockquote><ul><li><code>\$type</code> 素材类型，目前只支持：<code>mpnews</code>、 <code>mpvideo</code>、<code>voice</code>、<code>image</code> 等。</li><li><code>\$mediaId</code> 素材 ID，从接口查询或者上传后得到。</li></ul></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Media</span><span class="token punctuation">;</span>

<span class="token variable">\$media</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Media</span><span class="token punctuation">(</span><span class="token variable">\$mediaId</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;mpnews&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>以上呢，是所有微信支持的基本消息类型。</p><blockquote><p>{info} 需要注意的是，你不需要关心微信的消息字段叫啥，因为这里我们使用了更标准的命名，然后最终在中间做了转换，所以你不需要关注。</p></blockquote><h3 id="原始消息" tabindex="-1"><a class="header-anchor" href="#原始消息" aria-hidden="true">#</a> 原始消息</h3><p>原始消息是一种特殊的消息，它的场景是：<strong>你不想使用其它消息类型，你想自己手动拼消息</strong>。比如，回复消息时，你想自己拼 XML，那么你就直接用它就可以了：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Raw</span><span class="token punctuation">;</span>

<span class="token variable">\$message</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Raw</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;&lt;xml&gt;
&lt;ToUserName&gt;&lt;![CDATA[toUser]]&gt;&lt;/ToUserName&gt;
&lt;FromUserName&gt;&lt;![CDATA[fromUser]]&gt;&lt;/FromUserName&gt;
&lt;CreateTime&gt;12345678&lt;/CreateTime&gt;
&lt;MsgType&gt;&lt;![CDATA[image]]&gt;&lt;/MsgType&gt;
&lt;Image&gt;
&lt;MediaId&gt;&lt;![CDATA[media_id]]&gt;&lt;/MediaId&gt;
&lt;/Image&gt;
&lt;/xml&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>比如，你要用于客服消息(客服消息是JSON结构)：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Raw</span><span class="token punctuation">;</span>

<span class="token variable">\$message</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Raw</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;{
    &quot;touser&quot;:&quot;OPENID&quot;,
    &quot;msgtype&quot;:&quot;text&quot;,
    &quot;text&quot;:
    {
         &quot;content&quot;:&quot;Hello World&quot;
    }
}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>总之，就是直接写微信接口要求的格式内容就好，此类型消息在 SDK 中不存在转换行为，所以请注意不要写错格式。</p><h2 id="在-sdk-中使用消息" tabindex="-1"><a class="header-anchor" href="#在-sdk-中使用消息" aria-hidden="true">#</a> 在 SDK 中使用消息</h2><h3 id="在服务端回复消息" tabindex="-1"><a class="header-anchor" href="#在服务端回复消息" aria-hidden="true">#</a> 在服务端回复消息</h3><p>在 <a href="server">服务端</a> 一节中，我们讲了回复消息的写法：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// ... 前面部分省略</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;您好！欢迎关注我!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$server</span><span class="token operator">-&gt;</span><span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>上面 <code>return</code> 了一句普通的文本内容，这里只是为了方便大家，实际上最后会有一个隐式转换为 <code>Text</code> 类型的动作。</p><p>如果你要回复其它类型的消息，就需要返回一个具体的实例了，比如回复一个图片类型的消息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Image</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;media-id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="回复多图文消息" tabindex="-1"><a class="header-anchor" href="#回复多图文消息" aria-hidden="true">#</a> 回复多图文消息</h4><blockquote><p>{warning} <a href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&amp;announce_id=115383153198yAvN&amp;version=&amp;lang=zh_CN&amp;token=" target="_blank" rel="noopener noreferrer">10月12日起，被动回复消息与客服消息接口的图文消息类型中图文数目只能为一条`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><p>多图文消息其实就是单图文消息的一个数组而已了：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>News</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>NewsItem</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>
<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">server</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token variable">\$news</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewsItem</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">News</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">\$news</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="作为客服消息发送" tabindex="-1"><a class="header-anchor" href="#作为客服消息发送" aria-hidden="true">#</a> 作为客服消息发送</h3><p>在客服消息里的使用也一样，都是直接传入消息实例即可：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Text</span><span class="token punctuation">;</span>

<span class="token variable">\$message</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Hello world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$message</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="发送多图文消息" tabindex="-1"><a class="header-anchor" href="#发送多图文消息" aria-hidden="true">#</a> 发送多图文消息</h4><blockquote><p>{warning} <a href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&amp;announce_id=115383153198yAvN&amp;version=&amp;lang=zh_CN&amp;token=" target="_blank" rel="noopener noreferrer">10月12日起，被动回复消息与客服消息接口的图文消息类型中图文数目只能为一条`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><p>多图文消息其实就是单图文消息组成的一个 News 对象而已：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$news1</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NewsItem</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$news</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">News</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">\$news1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">customer_service</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$news</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="群发消息" tabindex="-1"><a class="header-anchor" href="#群发消息" aria-hidden="true">#</a> 群发消息</h3><p>请参考：<a href="broadcasting">群发消息</a></p><h2 id="消息转发给客服系统" tabindex="-1"><a class="header-anchor" href="#消息转发给客服系统" aria-hidden="true">#</a> 消息转发给客服系统</h2><p>参见：<a href="message-transfer">多客服消息转发</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/messages.html.vue?vue&type=template&id=528668d5

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/messages.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/official-account/messages.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const messages_html = (script);

/***/ })

};
;
//# sourceMappingURL=2397.app.js.map