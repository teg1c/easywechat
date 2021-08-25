"use strict";
exports.id = 5108;
exports.ids = [5108];
exports.modules = {

/***/ 19489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-50f97652",
  "path": "/3.x/mini_program.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "title: 小程序",
      "slug": "title-小程序",
      "children": []
    },
    {
      "level": 2,
      "title": "实例化",
      "slug": "实例化",
      "children": []
    },
    {
      "level": 2,
      "title": "登录",
      "slug": "登录",
      "children": [
        {
          "level": 3,
          "title": "通过 Code 换取 SessionKey",
          "slug": "通过-code-换取-sessionkey",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "加密数据解密",
      "slug": "加密数据解密",
      "children": []
    },
    {
      "level": 2,
      "title": "数据分析",
      "slug": "数据分析",
      "children": [
        {
          "level": 3,
          "title": "API",
          "slug": "api",
          "children": []
        },
        {
          "level": 3,
          "title": "代码示例",
          "slug": "代码示例",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "3.x/mini_program.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 56607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mini_program_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/mini_program.html.vue?vue&type=template&id=74fccf1e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="title-小程序" tabindex="-1"><a class="header-anchor" href="#title-小程序" aria-hidden="true">#</a> title: 小程序</h2><h2 id="实例化" tabindex="-1"><a class="header-anchor" href="#实例化" aria-hidden="true">#</a> 实例化</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token string single-quoted-string">&#39;mini_program&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;app_id&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;component-app-id&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;secret&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;component-app-secret&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;token&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;component-token&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;aes_key&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;component-aes-key&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$miniProgram</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">mini_program</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h2><h3 id="通过-code-换取-sessionkey" tabindex="-1"><a class="header-anchor" href="#通过-code-换取-sessionkey" aria-hidden="true">#</a> 通过 Code 换取 SessionKey</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 3.2 版本</span>
<span class="token variable">\$miniProgram</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">getSessionKey</span><span class="token punctuation">(</span><span class="token variable">\$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.3 版本</span>
<span class="token variable">\$miniProgram</span><span class="token operator">-&gt;</span><span class="token property">sns</span><span class="token operator">-&gt;</span><span class="token function">getSessionKey</span><span class="token punctuation">(</span><span class="token variable">\$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="加密数据解密" tabindex="-1"><a class="header-anchor" href="#加密数据解密" aria-hidden="true">#</a> 加密数据解密</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$miniProgram</span><span class="token operator">-&gt;</span><span class="token property">encryptor</span><span class="token operator">-&gt;</span><span class="token function">decryptData</span><span class="token punctuation">(</span><span class="token variable">\$sessionKey</span><span class="token punctuation">,</span> <span class="token variable">\$iv</span><span class="token punctuation">,</span> <span class="token variable">\$encryptData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="数据分析" tabindex="-1"><a class="header-anchor" href="#数据分析" aria-hidden="true">#</a> 数据分析</h2><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><ul><li><code>summaryTrend(\$from, \$to)</code> 概况趋势，限定查询1天数据，即 <code>\$from</code> 要与 <code>\$to</code> 相同；</li><li><code>dailyVisitTrend(\$from, \$to)</code> 访问日趋势，限定查询1天数据，即 <code>\$from</code> 要与 <code>\$to</code> 相同；</li><li><code>weeklyVisitTrend(\$from, \$to)</code> 访问周趋势， <code>\$from</code> 为周一日期， <code>\$to</code> 为周日日期；</li><li><code>monthlyVisitTrend(\$from, \$to)</code> 访问月趋势， <code>\$from</code> 为月初日期， <code>\$to</code> 为月末日期；</li><li><code>visitDistribution(\$from, \$to)</code> 访问分布，限定查询1天数据，即 <code>\$from</code> 要与 <code>\$to</code> 相同；</li><li><code>dailyRetainInfo(\$from, \$to)</code> 访问日留存，限定查询1天数据，即 <code>\$from</code> 要与 <code>\$to</code> 相同；</li><li><code>weeklyRetainInfo(\$from, \$to)</code> 访问周留存， <code>\$from</code> 为周一日期， <code>\$to</code> 为周日日期；</li><li><code>montylyRetainInfo(\$from, \$to)</code> 访问月留存， <code>\$from</code> 为月初日期， <code>\$to</code> 为月末日期；</li><li><code>visitPage(\$from, \$to)</code> 访问页面，限定查询1天数据，即 <code>\$from</code> 要与 <code>\$to</code> 相同；</li></ul><h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$miniProgram</span><span class="token operator">-&gt;</span><span class="token property">stats</span><span class="token operator">-&gt;</span><span class="token function">summaryTrend</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;20170313&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;20170313&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/mini_program.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/mini_program.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const mini_program_html = (script);

/***/ })

};
;
//# sourceMappingURL=5108.app.js.map