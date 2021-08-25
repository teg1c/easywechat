"use strict";
exports.id = 8219;
exports.ids = [8219];
exports.modules = {

/***/ 98053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-fd36ab22",
  "path": "/3.x/menu.html",
  "title": "自定义菜单",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取菜单模块实例",
      "slug": "获取菜单模块实例",
      "children": []
    },
    {
      "level": 2,
      "title": "API 列表",
      "slug": "api-列表",
      "children": [
        {
          "level": 3,
          "title": "读取（查询）已设置菜单",
          "slug": "读取-查询-已设置菜单",
          "children": []
        },
        {
          "level": 3,
          "title": "添加菜单",
          "slug": "添加菜单",
          "children": []
        },
        {
          "level": 3,
          "title": "删除菜单",
          "slug": "删除菜单",
          "children": []
        },
        {
          "level": 3,
          "title": "测试个性化菜单",
          "slug": "测试个性化菜单",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "3.x/menu.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 51906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/menu.html.vue?vue&type=template&id=9626b37c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="自定义菜单" tabindex="-1"><a class="header-anchor" href="#自定义菜单" aria-hidden="true">#</a> 自定义菜单</h1><p>3.0 的菜单组件有所简化，相比 2.x 版本变化如下：</p><ul><li>去除 <code>MenuItem</code> 类，创建菜单直接使用数组不再支持 <code>callback</code> 与 <code>MenuItem</code> 类似的繁杂的方式</li><li><code>set()</code> 方法与 <code>addConditional()</code> 合并为一个方法 <code>add()</code></li><li><code>get()</code> 改名为 <code>all()</code></li><li><code>delete()</code> 与 <code>deleteById()</code> 合并为 <code>destroy()</code></li><li>所有 API 的返回值（非调用失败情况）均为官方文档原样返回（Collection形式），不再取返回值中部分 <code>key</code> 返回。 <blockquote><p>例如原来的 <code>get()</code> 方法，官方返回的数组为: <code>{ menu: [...]}</code>，SDK 取了其中的 <code>menu</code> 内容作为返回值，在 3.0 后将直接整体返回。</p></blockquote></li></ul><h2 id="获取菜单模块实例" tabindex="-1"><a class="header-anchor" href="#获取菜单模块实例" aria-hidden="true">#</a> 获取菜单模块实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$menu</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">menu</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api-列表" tabindex="-1"><a class="header-anchor" href="#api-列表" aria-hidden="true">#</a> API 列表</h2><h3 id="读取-查询-已设置菜单" tabindex="-1"><a class="header-anchor" href="#读取-查询-已设置菜单" aria-hidden="true">#</a> 读取（查询）已设置菜单</h3><p>微信的菜单读取有两个不同的方式：</p><p>一种叫 <strong><a href="http://mp.weixin.qq.com/wiki/5/f287d1a5b78a35a8884326312ac3e4ed.html" target="_blank" rel="noopener noreferrer">查询菜单`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong>，在 SDK 中以 <code>all()</code> 方法来调用：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$menus</span> <span class="token operator">=</span> <span class="token variable">\$menu</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>另外一种叫 <strong><a href="http://mp.weixin.qq.com/wiki/14/293d0cb8de95e916d1216a33fcb81fd6.html" target="_blank" rel="noopener noreferrer">获取自定义菜单`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></strong>，使用 <code>current()</code> 方法来调用：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$menus</span> <span class="token operator">=</span> <span class="token variable">\$menu</span><span class="token operator">-&gt;</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="添加菜单" tabindex="-1"><a class="header-anchor" href="#添加菜单" aria-hidden="true">#</a> 添加菜单</h3><h4 id="添加普通菜单" tabindex="-1"><a class="header-anchor" href="#添加普通菜单" aria-hidden="true">#</a> 添加普通菜单</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$buttons</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;click&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;今日歌曲&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;key&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;V1001_TODAY_MUSIC&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;name&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;菜单&quot;</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;sub_button&quot;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;view&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;搜索&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;url&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;http://www.soso.com/&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;view&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;视频&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;url&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;http://v.qq.com/&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token string double-quoted-string">&quot;type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;click&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;name&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;赞一下我们&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;key&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;V1001_GOOD&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$menu</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token variable">\$buttons</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>以上将会创建一个普通菜单。</p><h4 id="添加个性化菜单" tabindex="-1"><a class="header-anchor" href="#添加个性化菜单" aria-hidden="true">#</a> 添加个性化菜单</h4><p>与创建普通菜单不同的是，需要在 <code>add()</code> 方法中将个性化匹配规则作为第二个参数传进去：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$buttons</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$matchRule</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;tag_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;sex&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;country&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;中国&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;province&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;广东&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;city&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;广州&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;client_platform_type&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;language&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;zh_CN&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">\$menu</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token variable">\$buttons</span><span class="token punctuation">,</span> <span class="token variable">\$matchRule</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="删除菜单" tabindex="-1"><a class="header-anchor" href="#删除菜单" aria-hidden="true">#</a> 删除菜单</h3><p>有两种删除方式，一种是<strong>全部删除</strong>，另外一种是<strong>根据菜单 ID 来删除</strong>(删除个性化菜单时用，ID 从查询接口获取)：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$menu</span><span class="token operator">-&gt;</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 全部</span>
<span class="token variable">\$menu</span><span class="token operator">-&gt;</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token variable">\$menuId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="测试个性化菜单" tabindex="-1"><a class="header-anchor" href="#测试个性化菜单" aria-hidden="true">#</a> 测试个性化菜单</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$menus</span> <span class="token operator">=</span> <span class="token variable">\$menu</span><span class="token operator">-&gt;</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token variable">\$userId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>\$userId</code> 可以是粉丝的 OpenID，也可以是粉丝的微信号。</p></blockquote><p>返回 <code>\$menus</code> 与指定的 <code>\$userId</code> 匹配的菜单项。</p><p>更多关于微信自定义菜单 API 请参考： http://mp.weixin.qq.com/wiki <code>自定义菜单</code> 章节。</p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/menu.html.vue?vue&type=template&id=9626b37c

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/menu.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/menu.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const menu_html = (script);

/***/ })

};
;
//# sourceMappingURL=8219.app.js.map