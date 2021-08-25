"use strict";
exports.id = 7876;
exports.ids = [7876];
exports.modules = {

/***/ 65161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-4c1f4452",
  "path": "/4.x/mini-program/app_code.html",
  "title": "小程序码",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取小程序码",
      "slug": "获取小程序码",
      "children": [
        {
          "level": 3,
          "title": "接口A: 适用于需要的码数量较少的业务场景",
          "slug": "接口a-适用于需要的码数量较少的业务场景",
          "children": []
        },
        {
          "level": 3,
          "title": "接口B：适用于需要的码数量极多，或仅临时使用的业务场景",
          "slug": "接口b-适用于需要的码数量极多-或仅临时使用的业务场景",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "获取小程序二维码",
      "slug": "获取小程序二维码",
      "children": []
    },
    {
      "level": 2,
      "title": "",
      "slug": "",
      "children": []
    }
  ],
  "filePathRelative": "4.x/mini-program/app_code.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 85230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ app_code_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/mini-program/app_code.html.vue?vue&type=template&id=a46bd4e6

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="小程序码" tabindex="-1"><a class="header-anchor" href="#小程序码" aria-hidden="true">#</a> 小程序码</h1><h2 id="获取小程序码" tabindex="-1"><a class="header-anchor" href="#获取小程序码" aria-hidden="true">#</a> 获取小程序码</h2><h3 id="接口a-适用于需要的码数量较少的业务场景" tabindex="-1"><a class="header-anchor" href="#接口a-适用于需要的码数量较少的业务场景" aria-hidden="true">#</a> 接口A: 适用于需要的码数量较少的业务场景</h3><p>API:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$app-&gt;app_code-&gt;get(string \$path, array \$optional = []);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中 <code>\$optional</code> 为以下可选参数：</p><blockquote><ul><li><strong>width</strong> Int - 默认 430 二维码的宽度</li><li><strong>auto_color</strong> 默认 false 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调</li><li><strong>line_color</strong> 数组，<code>auto_color</code> 为 <code>false</code> 时生效，使用 rgb 设置颜色 例如 ，示例：<code>[&quot;r&quot; =&gt; 0,&quot;g&quot; =&gt; 0,&quot;b&quot; =&gt; 0]</code>。</li></ul></blockquote><p>示例代码：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">app_code</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;path/to/page&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">app_code</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;path/to/page&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;width&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者指定颜色</span>
<span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">app_code</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;path/to/page&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;width&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">600</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;line_color&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;r&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">105</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;g&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">166</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;b&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">134</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \$response 成功时为 EasyWeChat\\Kernel\\Http\\StreamResponse 实例，失败时为数组或者你指定的 API 返回格式</span>

<span class="token comment">// 保存小程序码到文件</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$response</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>StreamResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$filename</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/directory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 或</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$response</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>StreamResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$filename</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">saveAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/directory&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;appcode.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="接口b-适用于需要的码数量极多-或仅临时使用的业务场景" tabindex="-1"><a class="header-anchor" href="#接口b-适用于需要的码数量极多-或仅临时使用的业务场景" aria-hidden="true">#</a> 接口B：适用于需要的码数量极多，或仅临时使用的业务场景</h3><p>API:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$app-&gt;app_code-&gt;getUnlimit(string \$scene, array \$optional = []);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>其中 \$scene 必填，\$optinal 与 get 方法一致，多一个 page 参数。</p></blockquote><p>示例代码：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">app_code</span><span class="token operator">-&gt;</span><span class="token function">getUnlimit</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;scene-value&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;page&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/page&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;width&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">600</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \$response 成功时为 EasyWeChat\\Kernel\\Http\\StreamResponse 实例，失败为数组或你指定的 API 返回类型</span>

<span class="token comment">// 保存小程序码到文件</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$response</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>StreamResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$filename</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/directory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 或</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$response</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>StreamResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$filename</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">saveAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/directory&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;appcode.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="获取小程序二维码" tabindex="-1"><a class="header-anchor" href="#获取小程序二维码" aria-hidden="true">#</a> 获取小程序二维码</h2><p>API:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\$app-&gt;app_code-&gt;getQrCode(string \$path, int \$width = null);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>其中 \$path 必填，其余参数可留空。</p></blockquote><p>示例代码：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">app_code</span><span class="token operator">-&gt;</span><span class="token function">getQrCode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/page&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \$response 成功时为 EasyWeChat\\Kernel\\Http\\StreamResponse 实例，失败为数组或你指定的 API 返回类型</span>

<span class="token comment">// 保存小程序码到文件</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$response</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>StreamResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$filename</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/directory&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 或</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$response</span> <span class="token keyword">instanceof</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>EasyWeChat<span class="token punctuation">\\</span>Kernel<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>StreamResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$filename</span> <span class="token operator">=</span> <span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">saveAs</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/path/to/directory&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;appcode.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/mini-program/app_code.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/mini-program/app_code.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const app_code_html = (script);

/***/ })

};
;
//# sourceMappingURL=7876.app.js.map