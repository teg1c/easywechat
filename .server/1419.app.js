"use strict";
exports.id = 1419;
exports.ids = [1419];
exports.modules = {

/***/ 28675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5630fa44",
  "path": "/5.x/wework/group-robot.html",
  "title": "群机器人",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "使用说明",
      "slug": "使用说明",
      "children": []
    },
    {
      "level": 2,
      "title": "发送文本类型消息",
      "slug": "发送文本类型消息",
      "children": []
    },
    {
      "level": 2,
      "title": "发送 Markdown 类型消息",
      "slug": "发送-markdown-类型消息",
      "children": []
    },
    {
      "level": 2,
      "title": "发送图片类型消息",
      "slug": "发送图片类型消息",
      "children": []
    },
    {
      "level": 2,
      "title": "发送图文类型消息",
      "slug": "发送图文类型消息",
      "children": []
    },
    {
      "level": 2,
      "title": "其他方式",
      "slug": "其他方式",
      "children": []
    }
  ],
  "filePathRelative": "5.x/wework/group-robot.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 49968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ group_robot_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/wework/group-robot.html.vue?vue&type=template&id=3f2dcad6

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="群机器人" tabindex="-1"><a class="header-anchor" href="#群机器人" aria-hidden="true">#</a> 群机器人</h1><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><p>使用前必须先在群组里面添加机器人，然后将 <code>Webhook 地址</code> 中的 <code>key</code> 取出来，作为示例中 <code>\$groupKey</code> 的值。</p><blockquote><p>Webhook 地址示例：https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=<code>ab4f609a-3feb-427c-ae9d-b319ca712d36</code></p></blockquote><blockquote><p>微信文档：https://work.weixin.qq.com/api/doc#90000/90136/91770</p></blockquote><h2 id="发送文本类型消息" tabindex="-1"><a class="header-anchor" href="#发送文本类型消息" aria-hidden="true">#</a> 发送文本类型消息</h2><p>快速发送文本消息</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 获取 Messenger 实例</span>
<span class="token variable">\$messenger</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">group_robot_messenger</span><span class="token punctuation">;</span>

<span class="token comment">// 群组 key</span>
<span class="token variable">\$groupKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;ab4f609a-3feb-427c-ae9d-b319ca712d36&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;大家好，我是本群的&quot;喝水提醒小助手&quot;&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toGroup</span><span class="token punctuation">(</span><span class="token variable">\$groupKey</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者写成</span>
<span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">toGroup</span><span class="token punctuation">(</span><span class="token variable">\$groupKey</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;大家好，我是本群的&quot;喝水提醒小助手&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>使用 <code>Text</code> 发送文本消息</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Work<span class="token punctuation">\\</span>GroupRobot<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Text</span><span class="token punctuation">;</span>

<span class="token comment">// 准备消息</span>
<span class="token variable">\$text</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 发送</span>
<span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$text</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toGroup</span><span class="token punctuation">(</span><span class="token variable">\$groupKey</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>@某人：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Work<span class="token punctuation">\\</span>GroupRobot<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Text</span><span class="token punctuation">;</span>

<span class="token comment">// 通过构造函数传参</span>
<span class="token variable">\$text</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;her-cat&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;18700000000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\$text = new Text(&#39;hello&#39;, [&#39;her-cat&#39;, &#39;overtrue&#39;], [&#39;18700000000&#39;, &#39;18700000001&#39;]);</span>

<span class="token comment">// 通过 userId</span>
<span class="token variable">\$text</span><span class="token operator">-&gt;</span><span class="token function">mention</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;her-cat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\$text-&gt;mention([&#39;her-cat&#39;, &#39;overtrue&#39;]);</span>

<span class="token comment">// 通过手机号</span>
<span class="token variable">\$text</span><span class="token operator">-&gt;</span><span class="token function">mentionByMobile</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;18700000000&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\$text-&gt;mentionByMobile([&#39;18700000000&#39;, &#39;18700000001&#39;]);</span>

<span class="token comment">// @所有人</span>
<span class="token variable">\$text</span><span class="token operator">-&gt;</span><span class="token function">mention</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;@all&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\$text-&gt;mentionByMobile(&#39;@all&#39;);</span>

<span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$text</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toGroup</span><span class="token punctuation">(</span><span class="token variable">\$groupKey</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="发送-markdown-类型消息" tabindex="-1"><a class="header-anchor" href="#发送-markdown-类型消息" aria-hidden="true">#</a> 发送 Markdown 类型消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Work<span class="token punctuation">\\</span>GroupRobot<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Markdown</span><span class="token punctuation">;</span>

<span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;
# 标题一
## 标题二
&lt;font color=&quot;info&quot;&gt;绿色&lt;/font&gt;
&lt;font color=&quot;comment&quot;&gt;灰色&lt;/font&gt;
&lt;font color=&quot;warning&quot;&gt;橙红色&lt;/font&gt;
&gt; 引用文字
&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$markdown</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Markdown</span><span class="token punctuation">(</span><span class="token variable">\$content</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$markdown</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toGroup</span><span class="token punctuation">(</span><span class="token variable">\$groupKey</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="发送图片类型消息" tabindex="-1"><a class="header-anchor" href="#发送图片类型消息" aria-hidden="true">#</a> 发送图片类型消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Work<span class="token punctuation">\\</span>GroupRobot<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>Image</span><span class="token punctuation">;</span>

<span class="token variable">\$img</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://res.mail.qq.com/node/ww/wwopenmng/images/independent/doc/test_pic_msg1.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$image</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token function">base64_encode</span><span class="token punctuation">(</span><span class="token variable">\$img</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">md5</span><span class="token punctuation">(</span><span class="token variable">\$img</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$image</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toGroup</span><span class="token punctuation">(</span><span class="token variable">\$groupKey</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="发送图文类型消息" tabindex="-1"><a class="header-anchor" href="#发送图文类型消息" aria-hidden="true">#</a> 发送图文类型消息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Work<span class="token punctuation">\\</span>GroupRobot<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>News</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Work<span class="token punctuation">\\</span>GroupRobot<span class="token punctuation">\\</span>Messages<span class="token punctuation">\\</span>NewsItem</span><span class="token punctuation">;</span>

<span class="token variable">\$items</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">NewsItem</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;中秋节礼品领取&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;description&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;今年中秋节公司有豪礼相送&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;https://www.easywechat.com&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;image&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://res.mail.qq.com/node/ww/wwopenmng/images/independent/doc/test_pic_msg1.png&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$news</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">News</span><span class="token punctuation">(</span><span class="token variable">\$items</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$messenger</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token variable">\$news</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toGroup</span><span class="token punctuation">(</span><span class="token variable">\$groupKey</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="其他方式" tabindex="-1"><a class="header-anchor" href="#其他方式" aria-hidden="true">#</a> 其他方式</h2><p>使用 <code>group_robot</code> 发送消息。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">group_robot</span><span class="token operator">-&gt;</span><span class="token function">message</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;大家好，我是本群的&quot;喝水提醒小助手&quot;&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toGroup</span><span class="token punctuation">(</span><span class="token variable">\$groupKey</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/wework/group-robot.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/wework/group-robot.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const group_robot_html = (script);

/***/ })

};
;
//# sourceMappingURL=1419.app.js.map