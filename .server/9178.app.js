"use strict";
exports.id = 9178;
exports.ids = [9178];
exports.modules = {

/***/ 22559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-5430b75e",
  "path": "/5.x/official-account/goods.html",
  "title": "返佣商品",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "导入商品",
      "slug": "导入商品",
      "children": []
    },
    {
      "level": 2,
      "title": "更新商品",
      "slug": "更新商品",
      "children": []
    },
    {
      "level": 2,
      "title": "查询导入/更新商品状态",
      "slug": "查询导入-更新商品状态",
      "children": []
    },
    {
      "level": 2,
      "title": "获取单个商品信息",
      "slug": "获取单个商品信息",
      "children": []
    },
    {
      "level": 2,
      "title": "分页获取商品信息",
      "slug": "分页获取商品信息",
      "children": []
    }
  ],
  "filePathRelative": "5.x/official-account/goods.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 81739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ goods_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/official-account/goods.html.vue?vue&type=template&id=7c6e2132

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="返佣商品" tabindex="-1"><a class="header-anchor" href="#返佣商品" aria-hidden="true">#</a> 返佣商品</h1><blockquote><p>微信文档：https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&amp;key=11533749572M9ODP&amp;version=1&amp;lang=zh_CN&amp;platform=2</p></blockquote><h2 id="导入商品" tabindex="-1"><a class="header-anchor" href="#导入商品" aria-hidden="true">#</a> 导入商品</h2><p>每次调用支持批量导入不超过1000条的商品信息。每分钟单个商户全局调用次数不得超过200次。每天调用次数不得超过100万次。每次请求包大小不超过2M。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;pid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pid001&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;image_info&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;main_image_list&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.google.com/a.jpg&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.google.com/b.jpg&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        
        <span class="token comment">//...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">goods</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \$result:</span>
<span class="token comment">//{</span>
<span class="token comment">//    &quot;errcode&quot;: 0,</span>
<span class="token comment">//    &quot;errmsg&quot;: &quot;ok&quot;,</span>
<span class="token comment">//    &quot;status_ticket&quot;: &quot;115141102647330200&quot;</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><code>status_ticket</code> 用于获取此次导入的详细结果。</p><h2 id="更新商品" tabindex="-1"><a class="header-anchor" href="#更新商品" aria-hidden="true">#</a> 更新商品</h2><p>更新时，字段不填代表不更新该字段（此处的字段不填，代表无此字段，而不是把字段的值设为空，设为空即代表更新该字段为空）。</p><p>对于字符串类型的选填字段，如副标题，若清空不展示，则可设置为空；对于数字类型的选填字段，如原价，若清空不展示，则需设置为0。</p><blockquote><p>基本字段更新中 <code>pid</code> 为必填字段，且无法修改</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;pid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pid001&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;image_info&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;main_image_list&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.baidu.com/c.jpg&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span>
                    <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://www.baidu.com/d.jpg&#39;</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        
        <span class="token comment">//...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
 
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">goods</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// \$result:</span>
<span class="token comment">//{</span>
<span class="token comment">//    &quot;errcode&quot;: 0,</span>
<span class="token comment">//    &quot;errmsg&quot;: &quot;ok&quot;,</span>
<span class="token comment">//    &quot;status_ticket&quot;: &quot;115141102647330200&quot;</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><blockquote><p>说明：导入商品和更新商品使用的是同一个接口。</p></blockquote><h2 id="查询导入-更新商品状态" tabindex="-1"><a class="header-anchor" href="#查询导入-更新商品状态" aria-hidden="true">#</a> 查询导入/更新商品状态</h2><p>用于查询导入或更新商品的结果，当导入或更新商品失败时，若为系统错误可进行重试；若为其他错误，请排查解决后进行重试。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$status_ticket</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;115141102647330200&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">goods</span><span class="token operator">-&gt;</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token variable">\$status_ticket</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \$result:</span>
<span class="token comment">//{</span>
<span class="token comment">//    &quot;errcode&quot;: 0,</span>
<span class="token comment">//    &quot;errmsg&quot;: &quot;ok&quot;,</span>
<span class="token comment">//    &quot;result&quot;: {</span>
<span class="token comment">//        &quot;succ_cnt&quot;: 2,</span>
<span class="token comment">//        &quot;fail_cnt&quot;: 0,</span>
<span class="token comment">//        &quot;total_cnt&quot;: 2,</span>
<span class="token comment">//        &quot;progress&quot;: &quot;100.00%&quot;,</span>
<span class="token comment">//        &quot;statuses&quot;: [</span>
<span class="token comment">//            {</span>
<span class="token comment">//                &quot;pid&quot;: &quot;pid001&quot;,</span>
<span class="token comment">//                &quot;ret&quot;: 0,</span>
<span class="token comment">//                &quot;err_msg&quot;: &quot;success&quot;,</span>
<span class="token comment">//                &quot;err_msg_zh_cn&quot;: &quot;成功&quot;</span>
<span class="token comment">//            },</span>
<span class="token comment">//            {</span>
<span class="token comment">//                &quot;pid&quot;: &quot;pid002&quot;,</span>
<span class="token comment">//                &quot;ret&quot;: 0,</span>
<span class="token comment">//                &quot;err_msg&quot;: &quot;success&quot;,</span>
<span class="token comment">//                &quot;err_msg_zh_cn&quot;: &quot;成功&quot;</span>
<span class="token comment">//            }</span>
<span class="token comment">//        ]</span>
<span class="token comment">//    }</span>
<span class="token comment">//}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="获取单个商品信息" tabindex="-1"><a class="header-anchor" href="#获取单个商品信息" aria-hidden="true">#</a> 获取单个商品信息</h2><p>使用该接口获取已导入的商品信息，供验证信息及抽查导入情况使用。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$pid</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;pid001&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">goods</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">\$pid</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>返回结果中的 <code>product</code> 字段内容与 <code>导入商品接口</code> 字段一致，导入时未设置的值有可能获取时仍会返回，但显示为空</p></blockquote><h2 id="分页获取商品信息" tabindex="-1"><a class="header-anchor" href="#分页获取商品信息" aria-hidden="true">#</a> 分页获取商品信息</h2><p>使用该接口可获取已导入的全量商品信息，供全量验证信息使用。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$context</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// page 为 1 时传空即可。当 page 大于 1 时必填，填入上一次访问本接口返回的 page_context。</span>
<span class="token variable">\$page</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>      <span class="token comment">// 页码</span>
<span class="token variable">\$size</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>     <span class="token comment">// 每页数据大小，目前限制为100以内，注意一次全量验证过程中该参数的值需保持不变</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">goods</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token variable">\$context</span><span class="token punctuation">,</span> <span class="token variable">\$page</span><span class="token punctuation">,</span> <span class="token variable">\$size</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>返回结果中的 <code>product</code> 字段内容与 <code>导入商品接口</code> 字段一致，导入时未设置的值有可能获取时仍会返回，但显示为空。 <code>page_context</code> 字段用于获取下一页数据时使用。</p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/goods.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/official-account/goods.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const goods_html = (script);

/***/ })

};
;
//# sourceMappingURL=9178.app.js.map