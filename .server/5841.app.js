"use strict";
exports.id = 5841;
exports.ids = [5841];
exports.modules = {

/***/ 55217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5c92c703",
  "path": "/4.x/open-work/provider.html",
  "title": "服务商相关接口",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "单点登录",
      "slug": "单点登录",
      "children": [
        {
          "level": 3,
          "title": "获取从第三方单点登录连接",
          "slug": "获取从第三方单点登录连接",
          "children": []
        },
        {
          "level": 3,
          "title": "获取登录用户信息",
          "slug": "获取登录用户信息",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "注册定制化",
      "slug": "注册定制化",
      "children": [
        {
          "level": 3,
          "title": "获取注册码",
          "slug": "获取注册码",
          "children": []
        },
        {
          "level": 3,
          "title": "获取注册Uri",
          "slug": "获取注册uri",
          "children": []
        },
        {
          "level": 3,
          "title": "查询注册状态",
          "slug": "查询注册状态",
          "children": []
        },
        {
          "level": 3,
          "title": "设置授权应用可见范围",
          "slug": "设置授权应用可见范围",
          "children": []
        },
        {
          "level": 3,
          "title": "设置通讯录同步完成",
          "slug": "设置通讯录同步完成",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "4.x/open-work/provider.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 75656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ provider_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/4.x/open-work/provider.html.vue?vue&type=template&id=6c0bcba9

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="服务商相关接口" tabindex="-1"><a class="header-anchor" href="#服务商相关接口" aria-hidden="true">#</a> 服务商相关接口</h1><h2 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录" aria-hidden="true">#</a> 单点登录</h2><h3 id="获取从第三方单点登录连接" tabindex="-1"><a class="header-anchor" href="#获取从第三方单点登录连接" aria-hidden="true">#</a> 获取从第三方单点登录连接</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token operator">-&gt;</span><span class="token function">getLoginUrl</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$redirectUri</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$userType</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">string</span> <span class="token variable">\$state</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\$redirectUri 回调地址  \$userType支持登录的类型</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取登录用户信息" tabindex="-1"><a class="header-anchor" href="#获取登录用户信息" aria-hidden="true">#</a> 获取登录用户信息</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token operator">-&gt;</span><span class="token function">getLoginInfo</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$authCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\$authCode oauth2.0授权企业微信管理员登录产生的code，最长为512字节。只能使用一次，5分钟未被使用自动过期</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="注册定制化" tabindex="-1"><a class="header-anchor" href="#注册定制化" aria-hidden="true">#</a> 注册定制化</h2><h3 id="获取注册码" tabindex="-1"><a class="header-anchor" href="#获取注册码" aria-hidden="true">#</a> 获取注册码</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token operator">-&gt;</span><span class="token function">getRegisterCode</span><span class="token punctuation">(</span>
                        <span class="token keyword type-hint">string</span> <span class="token variable">\$corpName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">//企业名称</span>
                        <span class="token keyword type-declaration">string</span> <span class="token variable">\$adminName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token comment">//管理员姓名</span>
                        <span class="token keyword type-declaration">string</span> <span class="token variable">\$adminMobile</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token comment">//管理员手机号</span>
                        <span class="token keyword type-declaration">string</span> <span class="token variable">\$state</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token comment">//自定义的状态值</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="获取注册uri" tabindex="-1"><a class="header-anchor" href="#获取注册uri" aria-hidden="true">#</a> 获取注册Uri</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token operator">-&gt;</span><span class="token function">getRegisterUri</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$registerCode</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\$registerCode 注册码</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查询注册状态" tabindex="-1"><a class="header-anchor" href="#查询注册状态" aria-hidden="true">#</a> 查询注册状态</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token operator">-&gt;</span><span class="token function">getRegisterInfo</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$registerCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\$registerCode 注册码</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="设置授权应用可见范围" tabindex="-1"><a class="header-anchor" href="#设置授权应用可见范围" aria-hidden="true">#</a> 设置授权应用可见范围</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token operator">-&gt;</span><span class="token function">setAgentScope</span><span class="token punctuation">(</span>
                        <span class="token keyword type-hint">string</span> <span class="token variable">\$accessToken</span><span class="token punctuation">,</span> <span class="token comment">//查询注册状态接口返回的access_token</span>
                        <span class="token keyword type-declaration">string</span> <span class="token variable">\$agentId</span><span class="token punctuation">,</span> <span class="token comment">//	授权方应用id</span>
                        <span class="token keyword type-declaration">array</span> <span class="token variable">\$allowUser</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//应用可见范围（成员）若未填该字段，则清空可见范围中成员列表</span>
                        <span class="token keyword type-declaration">array</span> <span class="token variable">\$allowParty</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//	应用可见范围（部门）若未填该字段，则清空可见范围中部门列表</span>
                        <span class="token keyword type-declaration">array</span> <span class="token variable">\$allowTag</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//应用可见范围（标签）若未填该字段，则清空可见范围中标签列表</span>
                    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="设置通讯录同步完成" tabindex="-1"><a class="header-anchor" href="#设置通讯录同步完成" aria-hidden="true">#</a> 设置通讯录同步完成</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">provider</span><span class="token operator">-&gt;</span><span class="token function">contactSyncSuccess</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">\$accessToken</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\$accessToken //查询注册状态接口返回的access_token</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/4.x/open-work/provider.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/4.x/open-work/provider.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const provider_html = (script);

/***/ })

};
;
//# sourceMappingURL=5841.app.js.map