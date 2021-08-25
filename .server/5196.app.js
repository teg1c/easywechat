"use strict";
exports.id = 5196;
exports.ids = [5196];
exports.modules = {

/***/ 87995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-70e21f40",
  "path": "/3.x/qrcode.html",
  "title": "二维码",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取实例",
      "slug": "获取实例",
      "children": []
    },
    {
      "level": 2,
      "title": "API",
      "slug": "api",
      "children": [
        {
          "level": 3,
          "title": "创建临时二维码",
          "slug": "创建临时二维码",
          "children": []
        },
        {
          "level": 3,
          "title": "创建永久二维码",
          "slug": "创建永久二维码",
          "children": []
        },
        {
          "level": 3,
          "title": "获取二维码网址",
          "slug": "获取二维码网址",
          "children": []
        },
        {
          "level": 3,
          "title": "创建卡券二维码",
          "slug": "创建卡券二维码",
          "children": []
        },
        {
          "level": 3,
          "title": "获取二维码内容",
          "slug": "获取二维码内容",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "3.x/qrcode.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 72674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ qrcode_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/qrcode.html.vue?vue&type=template&id=02901660

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="二维码" tabindex="-1"><a class="header-anchor" href="#二维码" aria-hidden="true">#</a> 二维码</h1><p>目前有2种类型的二维码：</p><ol><li>临时二维码，是有过期时间的，最长可以设置为在二维码生成后的<strong>30天</strong>后过期，但能够生成较多数量。临时二维码主要用于帐号绑定等不要求二维码永久保存的业务场景</li><li>永久二维码，是无过期时间的，但数量较少（目前为最多10万个）。永久二维码主要用于适用于帐号绑定、用户来源统计等场景。</li></ol><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$qrcode</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">qrcode</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><ul><li><code>Bag temporary(\$sceneId, \$expireSeconds = null)</code> 创建临时二维码；</li><li><code>Bag forever(\$sceneValue)</code> 创建永久二维码</li><li><code>Bag card(array \$card)</code> 创建卡券二维码</li><li><code>string url(\$ticket)</code> 获取二维码网址，用法： <code>&lt;img src=&quot;&lt;?php \$qrcode-&gt;url(\$qrTicket); ?&gt;&quot;&gt;</code>；</li></ul><h3 id="创建临时二维码" tabindex="-1"><a class="header-anchor" href="#创建临时二维码" aria-hidden="true">#</a> 创建临时二维码</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$qrcode</span><span class="token operator">-&gt;</span><span class="token function">temporary</span><span class="token punctuation">(</span><span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$ticket</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">ticket</span><span class="token punctuation">;</span><span class="token comment">// 或者 \$result[&#39;ticket&#39;]</span>
<span class="token variable">\$expireSeconds</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">expire_seconds</span><span class="token punctuation">;</span> <span class="token comment">// 有效秒数</span>
<span class="token variable">\$url</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">url</span><span class="token punctuation">;</span> <span class="token comment">// 二维码图片解析后的地址，开发者可根据该地址自行生成需要的二维码图片</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="创建永久二维码" tabindex="-1"><a class="header-anchor" href="#创建永久二维码" aria-hidden="true">#</a> 创建永久二维码</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$qrcode</span><span class="token operator">-&gt;</span><span class="token function">forever</span><span class="token punctuation">(</span><span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 或者 \$qrcode-&gt;forever(&quot;foo&quot;);</span>

<span class="token variable">\$ticket</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">ticket</span><span class="token punctuation">;</span> <span class="token comment">// 或者 \$result[&#39;ticket&#39;]</span>
<span class="token variable">\$url</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">url</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="获取二维码网址" tabindex="-1"><a class="header-anchor" href="#获取二维码网址" aria-hidden="true">#</a> 获取二维码网址</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$url</span> <span class="token operator">=</span> <span class="token variable">\$qrcode</span><span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token variable">\$ticket</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="创建卡券二维码" tabindex="-1"><a class="header-anchor" href="#创建卡券二维码" aria-hidden="true">#</a> 创建卡券二维码</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$qrcode</span><span class="token operator">-&gt;</span><span class="token function">card</span><span class="token punctuation">(</span><span class="token variable">\$card</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取二维码内容" tabindex="-1"><a class="header-anchor" href="#获取二维码内容" aria-hidden="true">#</a> 获取二维码内容</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$url</span> <span class="token operator">=</span> <span class="token variable">\$qrcode</span><span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token variable">\$ticket</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$content</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">\$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 得到二进制图片内容</span>

<span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/code.jpg&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$content</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 写入文件</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/qrcode.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/qrcode.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const qrcode_html = (script);

/***/ })

};
;
//# sourceMappingURL=5196.app.js.map