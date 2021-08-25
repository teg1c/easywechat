"use strict";
exports.id = 9515;
exports.ids = [9515];
exports.modules = {

/***/ 90561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-24d87cd1",
  "path": "/3.x/user-group.html",
  "title": "用户组",
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
          "title": "获取所有分组",
          "slug": "获取所有分组",
          "children": []
        },
        {
          "level": 3,
          "title": "创建分组",
          "slug": "创建分组",
          "children": []
        },
        {
          "level": 3,
          "title": "修改分组信息",
          "slug": "修改分组信息",
          "children": []
        },
        {
          "level": 3,
          "title": "删除分组",
          "slug": "删除分组",
          "children": []
        },
        {
          "level": 3,
          "title": "移动单个用户到指定分组",
          "slug": "移动单个用户到指定分组",
          "children": []
        },
        {
          "level": 3,
          "title": "批量移动用户到指定分组",
          "slug": "批量移动用户到指定分组",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "3.x/user-group.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 18128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ user_group_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/user-group.html.vue?vue&type=template&id=539c0c92

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="用户组" tabindex="-1"><a class="header-anchor" href="#用户组" aria-hidden="true">#</a> 用户组</h1><p>用户组的使用就非常简单了，基本的增删改查。</p><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$group</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">user_group</span><span class="token punctuation">;</span> <span class="token comment">// \$user[&#39;user_group&#39;]</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="获取所有分组" tabindex="-1"><a class="header-anchor" href="#获取所有分组" aria-hidden="true">#</a> 获取所有分组</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">lists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$groups</span> <span class="token operator">=</span> <span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">lists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//     &quot;groups&quot;: [</span>
<span class="token comment">//         {</span>
<span class="token comment">//             &quot;id&quot;: 0,</span>
<span class="token comment">//             &quot;name&quot;: &quot;未分组&quot;,</span>
<span class="token comment">//             &quot;count&quot;: 72596</span>
<span class="token comment">//         },</span>
<span class="token comment">//         {</span>
<span class="token comment">//             &quot;id&quot;: 1,</span>
<span class="token comment">//             &quot;name&quot;: &quot;黑名单&quot;,</span>
<span class="token comment">//             &quot;count&quot;: 36</span>
<span class="token comment">//         },</span>
<span class="token comment">//         ...</span>
<span class="token comment">//     ]</span>
<span class="token comment">// }</span>

<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$groups</span><span class="token operator">-&gt;</span><span class="token property">groups</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// “未分组”</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="创建分组" tabindex="-1"><a class="header-anchor" href="#创建分组" aria-hidden="true">#</a> 创建分组</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="修改分组信息" tabindex="-1"><a class="header-anchor" href="#修改分组信息" aria-hidden="true">#</a> 修改分组信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$groupId</span><span class="token punctuation">,</span> <span class="token variable">\$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$groupId</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;新的组名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="删除分组" tabindex="-1"><a class="header-anchor" href="#删除分组" aria-hidden="true">#</a> 删除分组</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="移动单个用户到指定分组" tabindex="-1"><a class="header-anchor" href="#移动单个用户到指定分组" aria-hidden="true">#</a> 移动单个用户到指定分组</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">moveUser</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">moveUser</span><span class="token punctuation">(</span><span class="token variable">\$openId</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="批量移动用户到指定分组" tabindex="-1"><a class="header-anchor" href="#批量移动用户到指定分组" aria-hidden="true">#</a> 批量移动用户到指定分组</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">moveUsers</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">\$openIds</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>example:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$openIds</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token variable">\$openId1</span><span class="token punctuation">,</span> <span class="token variable">\$openId2</span><span class="token punctuation">,</span> <span class="token variable">\$openId3</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$group</span><span class="token operator">-&gt;</span><span class="token function">moveUsers</span><span class="token punctuation">(</span><span class="token variable">\$openIds</span><span class="token punctuation">,</span> <span class="token variable">\$groupId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>关于用户管理请参考微信官方文档：http://mp.weixin.qq.com/wiki/ <code>用户管理</code> 章节。</p><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/user-group.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/user-group.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const user_group_html = (script);

/***/ })

};
;
//# sourceMappingURL=9515.app.js.map