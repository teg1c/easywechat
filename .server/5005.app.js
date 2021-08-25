"use strict";
exports.id = 5005;
exports.ids = [5005];
exports.modules = {

/***/ 24933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-60629b56",
  "path": "/3.x/notice.html",
  "title": "模板消息",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "获取实例",
      "slug": "获取实例",
      "children": [
        {
          "level": 3,
          "title": "API",
          "slug": "api",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "示例:",
      "slug": "示例",
      "children": [
        {
          "level": 3,
          "title": "模板",
          "slug": "模板",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "模板数据",
      "slug": "模板数据",
      "children": []
    }
  ],
  "filePathRelative": "3.x/notice.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 81125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ notice_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/notice.html.vue?vue&type=template&id=6cb78c1c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="模板消息" tabindex="-1"><a class="header-anchor" href="#模板消息" aria-hidden="true">#</a> 模板消息</h1><p>模板消息仅用于公众号向用户发送重要的服务通知，只能用于符合其要求的服务场景中，如信用卡刷卡通知，商品购买成功通知等。不支持广告等营销类消息以及其它所有可能对用户造成骚扰的消息。</p><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$notice</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">notice</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><ul><li><code>boolean setIndustry(\$industryId1, \$industryId2)</code> 修改账号所属行业；</li><li><code>array getIndustry()</code> 返回所有支持的行业列表，用于做下拉选择行业可视化更新；</li><li><code>string addTemplate(\$shortId)</code> 添加模板并获取模板ID；</li><li><code>collection send(\$message)</code> 发送模板消息, 返回消息ID；</li><li><code>array getPrivateTemplates()</code> 获取所有模板列表；</li><li><code>array deletePrivateTemplate(\$templateId)</code> 删除指定ID的模板。</li></ul><p>非链接调用方法：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$messageId</span> <span class="token operator">=</span> <span class="token variable">\$notice</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;touser&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;user-openid&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;template_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;template-id&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxx&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token comment">//...</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>链式调用方法:</p><pre><code>设置模板ID：template / templateId / uses
设置接收者openId: to / receiver
设置详情链接：url / link / linkTo
设置模板数据：data / with

以上方法都支持 \`withXXX\` 与 \`andXXX\` 形式链式调用
</code></pre><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$messageId</span> <span class="token operator">=</span> <span class="token variable">\$notice</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$userOpenId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">uses</span><span class="token punctuation">(</span><span class="token variable">\$templateId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">andUrl</span><span class="token punctuation">(</span><span class="token variable">\$url</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token variable">\$messageId</span> <span class="token operator">=</span> <span class="token variable">\$notice</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$userOpenId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token variable">\$url</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">template</span><span class="token punctuation">(</span><span class="token variable">\$templateId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">andData</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token variable">\$messageId</span> <span class="token operator">=</span> <span class="token variable">\$notice</span><span class="token operator">-&gt;</span><span class="token function">withTo</span><span class="token punctuation">(</span><span class="token variable">\$userOpenId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withUrl</span><span class="token punctuation">(</span><span class="token variable">\$url</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withTemplate</span><span class="token punctuation">(</span><span class="token variable">\$templateId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withData</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token variable">\$messageId</span> <span class="token operator">=</span> <span class="token variable">\$notice</span><span class="token operator">-&gt;</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token variable">\$userOpenId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token variable">\$url</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withTemplateId</span><span class="token punctuation">(</span><span class="token variable">\$templateId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ... ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例:</h2><h3 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{ first.DATA }}

商品明细：

名称：{{ name.DATA }}
价格：{{ price.DATA }}

{{ remark.DATA }}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>发送模板消息：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$userId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;OPENID&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$templateId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;ngqIpbwh8bUfcSsECmogfXcV14J0tQlEpBO27izEYtY&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$url</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;http://overtrue.me&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
         <span class="token string double-quoted-string">&quot;first&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;恭喜你购买成功！&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;name&quot;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;巧克力&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;price&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;39.8元&quot;</span><span class="token punctuation">,</span>
         <span class="token string double-quoted-string">&quot;remark&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;欢迎再次购买！&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$notice</span><span class="token operator">-&gt;</span><span class="token function">uses</span><span class="token punctuation">(</span><span class="token variable">\$templateId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withUrl</span><span class="token punctuation">(</span><span class="token variable">\$url</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">andData</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">andReceiver</span><span class="token punctuation">(</span><span class="token variable">\$userId</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// {</span>
<span class="token comment">//      &quot;errcode&quot;:0,</span>
<span class="token comment">//      &quot;errmsg&quot;:&quot;ok&quot;,</span>
<span class="token comment">//      &quot;msgid&quot;:200228332</span>
<span class="token comment">//  }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>结果：</p><p><img src="http://7u2jwa.com1.z0.glb.clouddn.com/QQ20160111-0@2x.png" alt="notice-demo"></p><h2 id="模板数据" tabindex="-1"><a class="header-anchor" href="#模板数据" aria-hidden="true">#</a> 模板数据</h2><p>为了方便大家开发，我们拓展支持以下格式的模板数据，其它格式的数据可能会导致接口调用失败：</p><ul><li><p>所有数据项颜色一样的（这是方便的一种方式）:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
    <span class="token string double-quoted-string">&quot;first&quot;</span>    <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;恭喜你购买成功！&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote1&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;巧克力&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote2&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;39.8元&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote3&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;2014年9月16日&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;remark&quot;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;欢迎再次购买！&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>默认颜色为&#39;#173177&#39;, 你可以通过 <code>defaultColor(\$color)</code> 来修改</p></li><li><p>独立设置每个模板项颜色的：</p><ul><li><p>简便型：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
    <span class="token string double-quoted-string">&quot;first&quot;</span>    <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;恭喜你购买成功！&quot;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;#555555&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote1&quot;</span> <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;巧克力&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;#336699&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote2&quot;</span> <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;39.8元&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;#FF0000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote3&quot;</span> <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;2014年9月16日&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;#888888&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;remark&quot;</span>   <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;欢迎再次购买！&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;#5599FF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>复杂型（也是微信官方唯一支持的方式，估计没有人想这么用）：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
    <span class="token string double-quoted-string">&quot;first&quot;</span>    <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;value&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;恭喜你购买成功！&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;color&quot;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;#555555&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote1&quot;</span> <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;value&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;巧克力&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;color&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;#336699&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote2&quot;</span> <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;value&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;39.8元&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;color&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;#FF0000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;keynote3&quot;</span> <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;value&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;2014年9月16日&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;color&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;#888888&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;remark&quot;</span>   <span class="token operator">=&gt;</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;value&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;欢迎再次购买！&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;color&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;#5599FF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li></ul><p>关于模板消息的使用请参考 <a href="http://mp.weixin.qq.com/wiki/" target="_blank" rel="noopener noreferrer">微信官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/notice.html.vue?vue&type=template&id=6cb78c1c

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/notice.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/notice.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const notice_html = (script);

/***/ })

};
;
//# sourceMappingURL=5005.app.js.map