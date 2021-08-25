"use strict";
exports.id = 4056;
exports.ids = [4056];
exports.modules = {

/***/ 36427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0f3cfb97",
  "path": "/5.x/mini-program/nearby_poi.html",
  "title": "附近的小程序",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "添加地点",
      "slug": "添加地点",
      "children": []
    },
    {
      "level": 2,
      "title": "更新地点",
      "slug": "更新地点",
      "children": []
    },
    {
      "level": 2,
      "title": "删除地点",
      "slug": "删除地点",
      "children": []
    },
    {
      "level": 2,
      "title": "地点列表",
      "slug": "地点列表",
      "children": []
    },
    {
      "level": 2,
      "title": "设置地点展示状态",
      "slug": "设置地点展示状态",
      "children": []
    }
  ],
  "filePathRelative": "5.x/mini-program/nearby_poi.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 39353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ nearby_poi_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/mini-program/nearby_poi.html.vue?vue&type=template&id=7d2bc0c6

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="附近的小程序" tabindex="-1"><a class="header-anchor" href="#附近的小程序" aria-hidden="true">#</a> 附近的小程序</h1><blockquote><p>微信文档：https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/nearby-poi/nearbyPoi.add.html</p></blockquote><h2 id="添加地点" tabindex="-1"><a class="header-anchor" href="#添加地点" aria-hidden="true">#</a> 添加地点</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;kf_info&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;{&quot;open_kf&quot;:true,&quot;kf_headimg&quot;:&quot;http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITqmP914zSwhajIEJzUPpx40P7R8fRe1QmicneQMhFzpZNhSLjrvU1pIA/0?wx_fmt=jpeg&quot;,&quot;kf_name&quot;:&quot;Harden&quot;}&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;pic_list&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;{&quot;list&quot;:[&quot;http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITqmP914zSwhajIEJzUPpx40P7R8fRe1QmicneQMhFzpZNhSLjrvU1pIA/0?wx_fmt=jpeg&quot;,&quot;http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITRneE5FS9uYruXGMmrtmhsBySwddEWUGOibG8Ze2NT5E3Dyt79I0htNg/0?wx_fmt=jpeg&quot;]}&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;service_infos&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;{&quot;service_infos&quot;:[{&quot;id&quot;:2,&quot;type&quot;:1,&quot;name&quot;:&quot;快递&quot;,&quot;appid&quot;:&quot;wx1373169e494e0c39&quot;,&quot;path&quot;:&quot;index&quot;},{&quot;id&quot;:0,&quot;type&quot;:2,&quot;name&quot;:&quot;自定义&quot;,&quot;appid&quot;:&quot;wx1373169e494e0c39&quot;,&quot;path&quot;:&quot;index&quot;}]}&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;store_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;羊村小马烧烤&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;contract_phone&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;111111111&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;hour&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;00:00-11:11&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;company_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;深圳市腾讯计算机系统有限公司&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;credential&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;156718193518281&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;address&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;新疆维吾尔自治区克拉玛依市克拉玛依区碧水路15-1-8号(碧水云天广场)&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;qualification_list&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;3LaLzqiTrQcD20DlX_o-OV1-nlYMu7sdVAL7SV2PrxVyjZFZZmB3O6LPGaYXlZWq&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">nearby_poi</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="更新地点" tabindex="-1"><a class="header-anchor" href="#更新地点" aria-hidden="true">#</a> 更新地点</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$poiId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;kf_info&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;{&quot;open_kf&quot;:true,&quot;kf_headimg&quot;:&quot;http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITqmP914zSwhajIEJzUPpx40P7R8fRe1QmicneQMhFzpZNhSLjrvU1pIA/0?wx_fmt=jpeg&quot;,&quot;kf_name&quot;:&quot;Harden&quot;}&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;pic_list&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;{&quot;list&quot;:[&quot;http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITqmP914zSwhajIEJzUPpx40P7R8fRe1QmicneQMhFzpZNhSLjrvU1pIA/0?wx_fmt=jpeg&quot;,&quot;http://mmbiz.qpic.cn/mmbiz_jpg/kKMgNtnEfQzDKpLXYhgo3W3Gndl34gITRneE5FS9uYruXGMmrtmhsBySwddEWUGOibG8Ze2NT5E3Dyt79I0htNg/0?wx_fmt=jpeg&quot;]}&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;service_infos&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;{&quot;service_infos&quot;:[{&quot;id&quot;:2,&quot;type&quot;:1,&quot;name&quot;:&quot;快递&quot;,&quot;appid&quot;:&quot;wx1373169e494e0c39&quot;,&quot;path&quot;:&quot;index&quot;},{&quot;id&quot;:0,&quot;type&quot;:2,&quot;name&quot;:&quot;自定义&quot;,&quot;appid&quot;:&quot;wx1373169e494e0c39&quot;,&quot;path&quot;:&quot;index&quot;}]}&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;contract_phone&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;111111111&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;hour&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;00:00-11:11&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;company_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;深圳市腾讯计算机系统有限公司&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;credential&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;156718193518281&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;address&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;新疆维吾尔自治区克拉玛依市克拉玛依区碧水路15-1-8号(碧水云天广场)&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;qualification_list&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;3LaLzqiTrQcD20DlX_o-OV1-nlYMu7sdVAL7SV2PrxVyjZFZZmB3O6LPGaYXlZWq&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">nearby_poi</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token variable">\$poiId</span><span class="token punctuation">,</span> <span class="token variable">\$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="删除地点" tabindex="-1"><a class="header-anchor" href="#删除地点" aria-hidden="true">#</a> 删除地点</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$poiId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">nearby_poi</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">\$poiId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="地点列表" tabindex="-1"><a class="header-anchor" href="#地点列表" aria-hidden="true">#</a> 地点列表</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$page</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token variable">\$pageRows</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">nearby_poi</span><span class="token operator">-&gt;</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token variable">\$page</span><span class="token punctuation">,</span> <span class="token variable">\$pageRows</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="设置地点展示状态" tabindex="-1"><a class="header-anchor" href="#设置地点展示状态" aria-hidden="true">#</a> 设置地点展示状态</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$poiId</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">;</span>
<span class="token variable">\$status</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 0: 不展示，1：展示</span>

<span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">nearby_poi</span><span class="token operator">-&gt;</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token variable">\$poiId</span><span class="token punctuation">,</span> <span class="token variable">\$status</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/mini-program/nearby_poi.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/mini-program/nearby_poi.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const nearby_poi_html = (script);

/***/ })

};
;
//# sourceMappingURL=4056.app.js.map