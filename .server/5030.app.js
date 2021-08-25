"use strict";
exports.id = 5030;
exports.ids = [5030];
exports.modules = {

/***/ 70089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-8acfc53e",
  "path": "/5.x/payment/redpack.html",
  "title": "红包",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "配置",
      "slug": "配置",
      "children": []
    },
    {
      "level": 2,
      "title": "发送红包",
      "slug": "发送红包",
      "children": [
        {
          "level": 3,
          "title": "发送普通红包接口",
          "slug": "发送普通红包接口",
          "children": []
        },
        {
          "level": 3,
          "title": "发送裂变红包接口",
          "slug": "发送裂变红包接口",
          "children": []
        },
        {
          "level": 3,
          "title": "发送小程序红包接口",
          "slug": "发送小程序红包接口",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "红包预下单接口",
      "slug": "红包预下单接口",
      "children": []
    },
    {
      "level": 2,
      "title": "查询红包信息",
      "slug": "查询红包信息",
      "children": []
    }
  ],
  "filePathRelative": "5.x/payment/redpack.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 97769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ redpack_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/5.x/payment/redpack.html.vue?vue&type=template&id=6d2a3769



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="红包" tabindex="-1"><a class="header-anchor" href="#红包" aria-hidden="true">#</a> 红包</h1><p>在阅读本文之前确认你已经仔细阅读了：<a href="https://pay.weixin.qq.com/wiki/doc/api/tools/cash_coupon.php?chapter=13_1" target="_blank" rel="noopener noreferrer">微信支付 | 现金红包文档 `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>与支付接口一样，红包接口也需要配置如下参数，需要特别注意的是，红包相关的全部接口<strong>都需要使用 SSL 证书</strong>，因此<strong>cert_path 以及 cert_key 必须正确配置</strong>。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Factory</span><span class="token punctuation">;</span>

<span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;you-app-id&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;mch_id&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-mch-id&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key-for-signature&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;cert_path&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/cert.pem&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;key_path&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/key&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$payment</span> <span class="token operator">=</span> <span class="token class-name static-context">Factory</span><span class="token operator">::</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token variable">\$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$redpack</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token property">redpack</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>服务商模式下需注意</strong></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 不能传递第二个参数subAppID，否则微信将一直返回签名错误</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">setSubMerchant</span><span class="token punctuation">(</span><span class="token variable">\$subMerchantID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="发送红包" tabindex="-1"><a class="header-anchor" href="#发送红包" aria-hidden="true">#</a> 发送红包</h2><p>微信的现金红包分为<strong>普通红包</strong>和<strong>裂变红包</strong>两类。SDK 中对其分别进行了封装，同时也提供了一个统一的调用方法。</p><p><strong>默认情况下，通过接口发送的红包金额应该在200元以内，但可以通过在调用发送接口时传递场景 ID (scene_id)来发送特定场景的红包，不同场景红包可以由商户自己登录商户平台设置最大金额。scene_id 的可选值及对应含义可参阅微信支付官方文档。</strong></p><h3 id="发送普通红包接口" tabindex="-1"><a class="header-anchor" href="#发送普通红包接口" aria-hidden="true">#</a> 发送普通红包接口</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$redpackData</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;mch_billno&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xy123456&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;send_name&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试红包&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;re_openid&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oxTWIuGaIt6gTKsQRLau2M0yL16E&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_num&#39;</span>    <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">//固定为1，可不传</span>
    <span class="token string single-quoted-string">&#39;total_amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">,</span>  <span class="token comment">//单位为分，不小于100</span>
    <span class="token string single-quoted-string">&#39;wishing&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;祝福语&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;client_ip&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;192.168.0.1&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//可不传，不传则由 SDK 取当前客户端 IP</span>
    <span class="token string single-quoted-string">&#39;act_name&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试活动&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;remark&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试备注&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$redpack</span><span class="token operator">-&gt;</span><span class="token function">sendNormal</span><span class="token punctuation">(</span><span class="token variable">\$redpackData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="发送裂变红包接口" tabindex="-1"><a class="header-anchor" href="#发送裂变红包接口" aria-hidden="true">#</a> 发送裂变红包接口</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$redpackData</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;mch_billno&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xy123456&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;send_name&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试红包&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;re_openid&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oxTWIuGaIt6gTKsQRLau2M0yL16E&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_num&#39;</span>    <span class="token operator">=&gt;</span> <span class="token number">3</span><span class="token punctuation">,</span>  <span class="token comment">//不小于3</span>
    <span class="token string single-quoted-string">&#39;total_amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">300</span><span class="token punctuation">,</span>  <span class="token comment">//单位为分，不小于300</span>
    <span class="token string single-quoted-string">&#39;wishing&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;祝福语&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;act_name&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试活动&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;remark&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试备注&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;amt_type&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ALL_RAND&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//可不传</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$redpack</span><span class="token operator">-&gt;</span><span class="token function">sendGroup</span><span class="token punctuation">(</span><span class="token variable">\$redpackData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="发送小程序红包接口" tabindex="-1"><a class="header-anchor" href="#发送小程序红包接口" aria-hidden="true">#</a> 发送小程序红包接口</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$redpackData</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;mch_billno&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xy123456&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;send_name&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试红包&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;re_openid&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oxTWIuGaIt6gTKsQRLau2M0yL16E&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">,</span>  <span class="token comment">//单位为分，不小于100</span>
    <span class="token string single-quoted-string">&#39;wishing&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;祝福语&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;client_ip&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;192.168.0.1&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//可不传，不传则由 SDK 取当前客户端 IP</span>
    <span class="token string single-quoted-string">&#39;act_name&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试活动&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;remark&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试备注&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$redpack</span><span class="token operator">-&gt;</span><span class="token function">sendMiniprogramNormal</span><span class="token punctuation">(</span><span class="token variable">\$redpackData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="红包预下单接口" tabindex="-1"><a class="header-anchor" href="#红包预下单接口" aria-hidden="true">#</a> 红包预下单接口</h2><p>红包预下单接口是为摇一摇红包接口配合使用的，在开发摇一摇周边的摇红包相关功能时，需要调用本接口获取红包单号。详情参见<a href="http://mp.weixin.qq.com/wiki/7/0ddd50ed2421b99fedd071281c074aab.html#.E7.BA.A2.E5.8C.85.E9.A2.84.E4.B8.8B.E5.8D.95.E6.8E.A5.E5.8F.A3" target="_blank" rel="noopener noreferrer">官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$redpackData</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;hb_type&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;NORMAL&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//NORMAL 或 GROUP</span>
    <span class="token string single-quoted-string">&#39;mch_billno&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xy123456&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;send_name&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试红包&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;re_openid&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;oxTWIuGaIt6gTKsQRLau2M0yL16E&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_num&#39;</span>    <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">//普通红包固定为1，裂变红包不小于3</span>
    <span class="token string single-quoted-string">&#39;total_amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">,</span>  <span class="token comment">//单位为分，普通红包不小于100，裂变红包不小于300</span>
    <span class="token string single-quoted-string">&#39;wishing&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;祝福语&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;client_ip&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;192.168.0.1&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//可不传，不传则由 SDK 取当前客户端 IP</span>
    <span class="token string single-quoted-string">&#39;act_name&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试活动&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;remark&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;测试备注&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;amt_type&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ALL_RAND&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$redpack</span><span class="token operator">-&gt;</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token variable">\$redpackData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="查询红包信息" tabindex="-1"><a class="header-anchor" href="#查询红包信息" aria-hidden="true">#</a> 查询红包信息</h2><p>用于商户对已发放的红包进行查询红包的具体信息以及领取情况 ，普通红包和裂变包均使用这一接口进行查询。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$mchBillNo</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;商户系统内部的订单号（mch_billno）&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$redpack</span><span class="token operator">-&gt;</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token variable">\$mchBillNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/redpack.html.vue?vue&type=template&id=6d2a3769

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/5.x/payment/redpack.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/5.x/payment/redpack.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const redpack_html = (script);

/***/ })

};
;
//# sourceMappingURL=5030.app.js.map