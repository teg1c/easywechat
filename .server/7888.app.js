"use strict";
exports.id = 7888;
exports.ids = [7888];
exports.modules = {

/***/ 25591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-79ab94b3",
  "path": "/5.x/official-account/store.html",
  "title": "门店小程序",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "拉取门店小程序类目",
      "slug": "拉取门店小程序类目",
      "children": []
    },
    {
      "level": 2,
      "title": "创建门店小程序",
      "slug": "创建门店小程序",
      "children": []
    },
    {
      "level": 2,
      "title": "查询门店小程序审核结果",
      "slug": "查询门店小程序审核结果",
      "children": []
    },
    {
      "level": 2,
      "title": "修改门店小程序信息",
      "slug": "修改门店小程序信息",
      "children": []
    },
    {
      "level": 2,
      "title": "从腾讯地图拉取省市区信息",
      "slug": "从腾讯地图拉取省市区信息",
      "children": []
    },
    {
      "level": 2,
      "title": "在腾讯地图中搜索门店",
      "slug": "在腾讯地图中搜索门店",
      "children": []
    },
    {
      "level": 2,
      "title": "在腾讯地图中创建门店",
      "slug": "在腾讯地图中创建门店",
      "children": []
    },
    {
      "level": 2,
      "title": "添加门店",
      "slug": "添加门店",
      "children": []
    },
    {
      "level": 2,
      "title": "更新门店信息",
      "slug": "更新门店信息",
      "children": []
    }
  ],
  "filePathRelative": "5.x/official-account/store.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 59699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ store_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/official-account/store.html.vue?vue&type=template&id=1b0cf80e

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="门店小程序" tabindex="-1"><a class="header-anchor" href="#门店小程序" aria-hidden="true">#</a> 门店小程序</h1><h2 id="拉取门店小程序类目" tabindex="-1"><a class="header-anchor" href="#拉取门店小程序类目" aria-hidden="true">#</a> 拉取门店小程序类目</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">categories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="创建门店小程序" tabindex="-1"><a class="header-anchor" href="#创建门店小程序" aria-hidden="true">#</a> 创建门店小程序</h2><blockquote><p>说明：创建门店小程序提交后需要公众号管理员确认通过后才可进行审核。如果主管理员24小时超时未确认，才能再次提交。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">createMerchant</span><span class="token punctuation">(</span><span class="token variable">\$baseInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>\$baseInfo</code> 为门店小程序的基本信息数组，<strong><code>qualification_list</code> 字段为类目相关证件的临时素材 <code>mediaid</code> 如果 <code>second_catid</code> 对应的 <code>sensitive_type</code> 为 1 ，则 <code>qualification_list</code> 字段需要填 支持 0~5 个 <code>mediaid</code>，例如 <code>mediaid1</code>。<code>headimg_mediaid</code> 字段为头像 --- 临时素材 <code>mediaid</code>。<code>mediaid</code> 用现有的 <code>media/upload</code> 接口得到的,获取链接： <a href="media">临时素材</a> ( 支持PNG\\JPEG\\JPG\\GIF格式的图片，后续加上其他格式)</strong></li></ul></blockquote><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">\$info</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;first_catid&quot;</span>        <span class="token operator">=&gt;</span> <span class="token number">476</span><span class="token punctuation">,</span> <span class="token comment">//categories 接口获取的一级类目id</span>
    <span class="token string double-quoted-string">&quot;second_catid&quot;</span>       <span class="token operator">=&gt;</span> <span class="token number">477</span><span class="token punctuation">,</span> <span class="token comment">//categories 接口获取的二级类目id</span>
    <span class="token string double-quoted-string">&quot;qualification_list&quot;</span> <span class="token operator">=&gt;</span>  <span class="token string double-quoted-string">&quot;RTZgKZ386yFn5kQSWLTxe4bqxwgzGBjs3OE02cg9CVQk1wRVE3c8fjUFX7jvpi-P&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;headimg_mediaid&quot;</span>    <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;RTZgKZ386yFn5kQSWLTxe4bqxwgzGBjs3OE02cg9CVQk1wRVE3c8fjUFX7jvpi-P&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;nickname&quot;</span>           <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;hardenzhang308&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;intro&quot;</span>              <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;hardenzhangtest&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;org_code&quot;</span>           <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;other_files&quot;</span>        <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">createMerchant</span><span class="token punctuation">(</span><span class="token variable">\$info</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>{warning} 注意：创建门店小程序的审核结果,会以事件形式推送给商户填写的回调 URL</p></blockquote><h2 id="查询门店小程序审核结果" tabindex="-1"><a class="header-anchor" href="#查询门店小程序审核结果" aria-hidden="true">#</a> 查询门店小程序审核结果</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token variable">\$baseInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="修改门店小程序信息" tabindex="-1"><a class="header-anchor" href="#修改门店小程序信息" aria-hidden="true">#</a> 修改门店小程序信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">updateMerchant</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>\$data</code> 需要更新的部分数据，目前仅支持门店头像和门店小程序介绍，<strong>若有填写内容则为覆盖更新,若无内容则视为不修改,维持原有内容。<code>headimg_mediaid</code>、<code>intro</code> 字段参考创建门店小程序</strong></li></ul></blockquote><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;headimg_mediaid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;RTZgKZ386yFn5kQSWLTxe4bqxwgzGBjs3OE02cg9CVQk1wRVE3c8fjUFX7jvpi-P&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;intro&quot;</span>           <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;麦辣鸡腿堡套餐,麦乐鸡,全家桶&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">updateMerchant</span><span class="token punctuation">(</span><span class="token variable">\$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="从腾讯地图拉取省市区信息" tabindex="-1"><a class="header-anchor" href="#从腾讯地图拉取省市区信息" aria-hidden="true">#</a> 从腾讯地图拉取省市区信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">districts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="在腾讯地图中搜索门店" tabindex="-1"><a class="header-anchor" href="#在腾讯地图中搜索门店" aria-hidden="true">#</a> 在腾讯地图中搜索门店</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">searchFromMap</span><span class="token punctuation">(</span><span class="token variable">\$districtId</span><span class="token punctuation">,</span> <span class="token variable">\$keyword</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>\$districtId</code> 为从腾讯地图拉取的地区 <code>id</code></li><li><code>\$keyword</code> 为搜索的关键词</li></ul></blockquote><h2 id="在腾讯地图中创建门店" tabindex="-1"><a class="header-anchor" href="#在腾讯地图中创建门店" aria-hidden="true">#</a> 在腾讯地图中创建门店</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">createFromMap</span><span class="token punctuation">(</span><span class="token variable">\$baseInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$baseInfo</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;name&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;hardenzhang&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;longitude&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;113.323753357&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;latitude&quot;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;23.0974903107&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;province&quot;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;广东省&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;city&quot;</span>       <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;广州市&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;district&quot;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;海珠区&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;address&quot;</span>    <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;TIT&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;category&quot;</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;类目1:类目2&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;telephone&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;12345678901&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;photo&quot;</span>      <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;http://mmbiz.qpic.cn/mmbiz_png/tW66AWE2K6ECFPcyAcIZTG8RlcR0sAqBibOm8gao5xOoLfIic9ZJ6MADAktGPxZI7MZLcadZUT36b14NJ2cHRHA/0?wx_fmt=png&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;license&quot;</span>    <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;http://mmbiz.qpic.cn/mmbiz_png/tW66AWE2K6ECFPcyAcIZTG8RlcR0sAqBibOm8gao5xOoLfIic9ZJ6MADAktGPxZI7MZLcadZUT36b14NJ2cHRHA/0?wx_fmt=png&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;introduct&quot;</span>  <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;districtid&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;440105&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><ul><li><code>\$baseInfo</code>: 门店相关信息</li></ul></blockquote><blockquote><p>事件推送 --- 腾讯地图中创建门店的审核结果。腾讯地图审核周期为3个工作日，请在期间内留意审核结果事件推送。提交后未当即返回事件推送即为审核中，请耐心等待。</p></blockquote><h2 id="添加门店" tabindex="-1"><a class="header-anchor" href="#添加门店" aria-hidden="true">#</a> 添加门店</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token variable">\$baseInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$baseInfo</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;poi_id&quot;</span>             <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;map_poi_id&quot;</span>         <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;2880741500279549033&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;pic_list&quot;</span>           <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;[&#39;list&#39; =&gt; [&#39;http://mmbiz.qpic.cn/mmbiz_jpg/tW66AWvE2K4EJxIYOVpiaGOkfg0iayibiaP2xHOChvbmKQD5uh8ymibbEKlTTPmjTdQ8ia43sULLeG1pT2psOfPic4kTw/0?wx_fmt=jpeg&#39;]]&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;contract_phone&quot;</span>     <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;1111222222&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;credential&quot;</span>         <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;22883878-0&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;qualification_list&quot;</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">&quot;RTZgKZ386yFn5kQSWLTxe4bqxwgzGBjs3OE02cg9CVQk1wRVE3c8fjUFX7jvpi-P&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><ul><li><code>\$baseInfo</code>: 门店相关信息。<code>pic_list</code> 门店图片，可传多张图片 <code>pic_list</code></li></ul></blockquote><blockquote><p>事件推送 - 创建门店的审核结果</p></blockquote><h2 id="更新门店信息" tabindex="-1"><a class="header-anchor" href="#更新门店信息" aria-hidden="true">#</a> 更新门店信息</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">store</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$baseInfo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><ul><li><code>\$baseInfo</code>: 门店相关信息。</li></ul></blockquote><blockquote><p>{warning} 需要注意的是，如果要更新门店的图片，实际相当于走一次重新为门店添加图片的流程，之前的旧图片会全部废弃。并且如果重新添加的图片中有与之前旧图片相同的，此时这个图片不需要重新审核。</p></blockquote><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/official-account/store.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/official-account/store.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const store_html = (script);

/***/ })

};
;
//# sourceMappingURL=7888.app.js.map