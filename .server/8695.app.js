"use strict";
exports.id = 8695;
exports.ids = [8695];
exports.modules = {

/***/ 40031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-652b7a44",
  "path": "/3.x/payment.html",
  "title": "支付",
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
      "title": "创建订单",
      "slug": "创建订单",
      "children": [
        {
          "level": 3,
          "title": "正常模式",
          "slug": "正常模式",
          "children": []
        },
        {
          "level": 3,
          "title": "子服务商模式",
          "slug": "子服务商模式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "下单接口",
      "slug": "下单接口",
      "children": [
        {
          "level": 3,
          "title": "刷卡支付",
          "slug": "刷卡支付",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "统一下单",
      "slug": "统一下单",
      "children": []
    },
    {
      "level": 2,
      "title": "支付结果通知",
      "slug": "支付结果通知",
      "children": []
    },
    {
      "level": 2,
      "title": "撤销订单API",
      "slug": "撤销订单api",
      "children": []
    },
    {
      "level": 2,
      "title": "查询订单",
      "slug": "查询订单",
      "children": []
    },
    {
      "level": 2,
      "title": "关闭订单",
      "slug": "关闭订单",
      "children": []
    },
    {
      "level": 2,
      "title": "申请退款",
      "slug": "申请退款",
      "children": []
    },
    {
      "level": 2,
      "title": "查询退款",
      "slug": "查询退款",
      "children": []
    },
    {
      "level": 2,
      "title": "下载对账单",
      "slug": "下载对账单",
      "children": []
    },
    {
      "level": 2,
      "title": "测速上报",
      "slug": "测速上报",
      "children": []
    },
    {
      "level": 2,
      "title": "转换短链接",
      "slug": "转换短链接",
      "children": []
    },
    {
      "level": 2,
      "title": "授权码查询OPENID接口",
      "slug": "授权码查询openid接口",
      "children": []
    },
    {
      "level": 2,
      "title": "生成支付 JS 配置",
      "slug": "生成支付-js-配置",
      "children": []
    },
    {
      "level": 2,
      "title": "生成共享收货地址 JS 配置",
      "slug": "生成共享收货地址-js-配置",
      "children": []
    },
    {
      "level": 2,
      "title": "生成 APP 支付配置",
      "slug": "生成-app-支付配置",
      "children": []
    }
  ],
  "filePathRelative": "3.x/payment.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 18984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ payment_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/payment.html.vue?vue&type=template&id=4fa7a490



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="支付" tabindex="-1"><a class="header-anchor" href="#支付" aria-hidden="true">#</a> 支付</h1><p>你在阅读本文之前确认你已经仔细阅读了：<a href="https://pay.weixin.qq.com/wiki/doc/api/index.html" target="_blank" rel="noopener noreferrer">微信支付 | 商户平台开发文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>。</p><p>网友贡献的教程：<a href="https://laravel-china.org/topics/3146" target="_blank" rel="noopener noreferrer">小能手马闯set 发布在 Laravel-China 的文章《基于 Laravel5.1 LTS 版的微信开发》`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>配置在前面的例子中已经提到过了，支付的相关配置如下：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>

<span class="token variable">\$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 前面的appid什么的也得保留哦</span>
    <span class="token string single-quoted-string">&#39;app_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>

    <span class="token comment">// payment</span>
    <span class="token string single-quoted-string">&#39;payment&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;merchant_id&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;your-mch-id&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;key&#39;</span>                <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;key-for-signature&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;cert_path&#39;</span>          <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/cert.pem&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XXX: 绝对路径！！！！</span>
        <span class="token string single-quoted-string">&#39;key_path&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;path/to/your/key&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// XXX: 绝对路径！！！！</span>
        <span class="token string single-quoted-string">&#39;notify_url&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;默认的订单回调地址&#39;</span><span class="token punctuation">,</span>       <span class="token comment">// 你也可以在下单时单独设置来想覆盖它</span>
        <span class="token comment">// &#39;device_info&#39;     =&gt; &#39;013467007045764&#39;,</span>
        <span class="token comment">// &#39;sub_app_id&#39;      =&gt; &#39;&#39;,</span>
        <span class="token comment">// &#39;sub_merchant_id&#39; =&gt; &#39;&#39;,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$payment</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">payment</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="创建订单" tabindex="-1"><a class="header-anchor" href="#创建订单" aria-hidden="true">#</a> 创建订单</h2><h3 id="正常模式" tabindex="-1"><a class="header-anchor" href="#正常模式" aria-hidden="true">#</a> 正常模式</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Payment<span class="token punctuation">\\</span>Order</span><span class="token punctuation">;</span>

<span class="token variable">\$attributes</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;trade_type&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;JSAPI&#39;</span><span class="token punctuation">,</span> <span class="token comment">// JSAPI，NATIVE，APP...</span>
    <span class="token string single-quoted-string">&#39;body&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;iPad mini 16G 白色&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;detail&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;iPad mini 16G 白色&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;1217752501201407033233368018&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_fee&#39;</span>        <span class="token operator">=&gt;</span> <span class="token number">5388</span><span class="token punctuation">,</span> <span class="token comment">// 单位：分</span>
    <span class="token string single-quoted-string">&#39;notify_url&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://xxx.com/order-notify&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支付结果通知网址，如果不设置则会使用配置里的默认地址</span>
    <span class="token string single-quoted-string">&#39;openid&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;当前用户的 openid&#39;</span><span class="token punctuation">,</span> <span class="token comment">// trade_type=JSAPI，此参数必传，用户在商户appid下的唯一标识，</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$order</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token variable">\$attributes</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="子服务商模式" tabindex="-1"><a class="header-anchor" href="#子服务商模式" aria-hidden="true">#</a> 子服务商模式</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Payment<span class="token punctuation">\\</span>Order</span><span class="token punctuation">;</span>

<span class="token variable">\$attributes</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;trade_type&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;JSAPI&#39;</span><span class="token punctuation">,</span> <span class="token comment">// JSAPI，NATIVE，APP...</span>
    <span class="token string single-quoted-string">&#39;body&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;iPad mini 16G 白色&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;detail&#39;</span>           <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;iPad mini 16G 白色&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;1217752501201407033233368018&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;total_fee&#39;</span>        <span class="token operator">=&gt;</span> <span class="token number">5388</span><span class="token punctuation">,</span> <span class="token comment">// 单位：分</span>
    <span class="token string single-quoted-string">&#39;notify_url&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;http://xxx.com/order-notify&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支付结果通知网址，如果不设置则会使用配置里的默认地址</span>
    <span class="token string single-quoted-string">&#39;sub_openid&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;当前用户的 openid&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 如果传入sub_openid, 请在实例化Application时, 同时传入\$sub_app_id, \$sub_merchant_id</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">\$order</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token variable">\$attributes</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>通知url必须为直接可访问的url，不能携带参数。示例：notify_url：“https://pay.weixin.qq.com/wxpay/pay.action”</p><h2 id="下单接口" tabindex="-1"><a class="header-anchor" href="#下单接口" aria-hidden="true">#</a> 下单接口</h2><h3 id="刷卡支付" tabindex="-1"><a class="header-anchor" href="#刷卡支付" aria-hidden="true">#</a> 刷卡支付</h3><p><a href="https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_10" target="_blank" rel="noopener noreferrer">官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">pay</span><span class="token punctuation">(</span><span class="token variable">\$order</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>也许你需要生成二维码图片，参考页面底部相关的包推荐</p></blockquote><h2 id="统一下单" tabindex="-1"><a class="header-anchor" href="#统一下单" aria-hidden="true">#</a> 统一下单</h2><p><a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1" target="_blank" rel="noopener noreferrer">公众号支付`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>、<a href="https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=6_1" target="_blank" rel="noopener noreferrer">扫码支付`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>、<a href="https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1" target="_blank" rel="noopener noreferrer">APP 支付`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 都统一使用此接口完成订单的创建。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token variable">\$order</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">return_code</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;SUCCESS&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">result_code</span> <span class="token operator">==</span> <span class="token string single-quoted-string">&#39;SUCCESS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token variable">\$prepayId</span> <span class="token operator">=</span> <span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">prepay_id</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="支付结果通知" tabindex="-1"><a class="header-anchor" href="#支付结果通知" aria-hidden="true">#</a> 支付结果通知</h2><p>在用户成功支付后，微信服务器会向该 <strong>订单中设置的回调URL</strong> 发起一个 POST 请求，请求的内容为一个 XML。里面包含了所有的详细信息，具体请参考： <a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_7" target="_blank" rel="noopener noreferrer">支付结果通用通知`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><p>在本 SDK 中处理回调真的再简单不过了，请求验证你就不用管了，SDK 已经为你做好了，你只需要关注业务即可：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">payment</span><span class="token operator">-&gt;</span><span class="token function">handleNotify</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$notify</span><span class="token punctuation">,</span> <span class="token variable">\$successful</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 你的逻辑</span>
    <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 或者错误消息</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Laravel 里请使用：return \$response;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这里需要注意的有几个点：</p><ol><li><p><code>handleNotify</code> 只接收一个 <a href="http://php.net/manual/zh/language.types.callable.php" target="_blank" rel="noopener noreferrer"><code>callable</code>`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 参数，通常用一个匿名函数即可。</p></li><li><p>该匿名函数接收两个参数，这两个参数分别为：</p><ul><li><code>\$notify</code> 为封装了通知信息的 <code>EasyWeChat\\Support\\Collection</code> 对象，前面已经讲过这里就不赘述了，你可以以对象或者数组形式来读取通知内容，比如：<code>\$notify-&gt;total_fee</code> 或者 <code>\$notify[&#39;total_fee&#39;]</code>。</li><li><code>\$successful</code> 这个参数其实就是判断 <strong>用户是否付款成功了</strong>（result_code == &#39;SUCCESS&#39;）</li></ul></li><li><p>该函数返回值就是告诉微信 <strong>“我是否处理完成”</strong>，如果你返回一个 <code>false</code> 或者一个具体的错误消息，那么微信会在稍后再次继续通知你，直到你明确的告诉它：“我已经处理完成了”，在函数里 <code>return true;</code> 代表处理完成。</p></li><li><p><code>handleNotify</code> 返回值 <code>\$response</code> 是一个 Response 对象，如果你要直接输出，使用 <code>\$response-&gt;send()</code>, 在一些框架里不是输出而是返回：<code>return \$response</code>。</p></li></ol><p>通常我们的处理逻辑大概是下面这样（<strong>以下只是伪代码</strong>）：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">payment</span><span class="token operator">-&gt;</span><span class="token function">handleNotify</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">\$notify</span><span class="token punctuation">,</span> <span class="token variable">\$successful</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 使用通知里的 &quot;微信支付订单号&quot; 或者 &quot;商户订单号&quot; 去自己的数据库找到订单</span>
    <span class="token variable">\$order</span> <span class="token operator">=</span> 查询订单<span class="token punctuation">(</span><span class="token variable">\$notify</span><span class="token operator">-&gt;</span><span class="token property">out_trade_no</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">\$order</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果订单不存在</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;Order not exist.&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 告诉微信，我已经处理完了，订单没找到，别再通知我了</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果订单存在</span>
    <span class="token comment">// 检查订单是否已经更新过支付状态</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token property">paid_at</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 假设订单字段“支付时间”不为空代表已经支付</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 已经支付成功了就不再更新了</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 用户是否支付成功</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">\$successful</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不是已经支付状态则修改为已经支付状态</span>
        <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token property">paid_at</span> <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新支付时间为当前时间</span>
        <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token property">status</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;paid&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 用户支付失败</span>
        <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token property">status</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;paid_fail&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token variable">\$order</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 保存订单</span>

    <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 返回处理完成</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">\$response</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><blockquote><p>注意：请把 “支付成功与否” 与 “是否处理完成” 分开，它俩没有必然关系。 比如：微信通知你用户支付完成，但是支付失败了(result_code 为 &#39;FAIL&#39;)，你应该<strong>更新你的订单为支付失败</strong>，但是要<strong>告诉微信处理完成</strong>。</p></blockquote><h2 id="撤销订单api" tabindex="-1"><a class="header-anchor" href="#撤销订单api" aria-hidden="true">#</a> 撤销订单API</h2><p>目前只有 <strong>刷卡支付</strong> 有此功能。</p><blockquote><p>调用支付接口后请勿立即调用撤销订单API，建议支付后至少15s后再调用撤销订单接口。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$orderNo</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;商户系统内部的订单号（out_trade_no）&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">\$orderNo</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;微信的订单号（transaction_id）&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">reverseByTransactionId</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="查询订单" tabindex="-1"><a class="header-anchor" href="#查询订单" aria-hidden="true">#</a> 查询订单</h2><p>该接口提供所有微信支付订单的查询，商户可以通过该接口主动查询订单状态，完成下一步的业务逻辑。</p><p>需要调用查询接口的情况：</p><ul><li>当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；</li><li>调用支付接口后，返回系统错误或未知交易状态情况；</li><li>调用被扫支付API，返回USERPAYING的状态；</li><li>调用关单或撤销接口API之前，需确认支付状态；</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$orderNo</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;商户系统内部的订单号（out_trade_no）&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token variable">\$orderNo</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;微信的订单号（transaction_id）&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">queryByTransactionId</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="关闭订单" tabindex="-1"><a class="header-anchor" href="#关闭订单" aria-hidden="true">#</a> 关闭订单</h2><blockquote><p>注意：订单生成后不能马上调用关单接口，最短调用时间间隔为5分钟。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$orderNo</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;商户系统内部的订单号（out_trade_no）&quot;</span><span class="token punctuation">;</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="申请退款" tabindex="-1"><a class="header-anchor" href="#申请退款" aria-hidden="true">#</a> 申请退款</h2><p>当交易发生之后一段时间内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付款退还给买家，微信支付将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退到买家帐号上。</p><p>注意：</p><blockquote><p>1、交易时间超过一年的订单无法提交退款； 2、微信支付退款支持单笔交易分多次退款，多次退款需要提交原支付订单的商户订单号和设置不同的退款单号。一笔退款失败后重新提交，要采用原来的退款单号。总退款金额不能超过用户实际支付金额。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refund</span><span class="token punctuation">(</span>订单号，退款单号，总金额，退款金额，操作员，退款单号类型<span class="token punctuation">(</span>out_trade_no<span class="token operator">/</span>transaction_id<span class="token punctuation">)</span>，退款账户<span class="token punctuation">(</span><span class="token constant">REFUND_SOURCE_UNSETTLED_FUNDS</span><span class="token operator">/</span><span class="token constant">REFUND_SOURCE_RECHARGE_FUNDS</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>参考：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_4</p><p>例子：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># 1. 使用商户订单号退款</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refund</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100 退款 100，操作员：商户号</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refund</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100， 退款 80，操作员：商户号</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refund</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">1900000109</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100， 退款 80，操作员：1900000109</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refund</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">1900000109</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100， 退款 80，操作员：1900000109, 退款单号：使用商户订单号退款</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refund</span><span class="token punctuation">(</span><span class="token variable">\$orderNo</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">1900000109</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;REFUND_SOURCE_RECHARGE_FUNDS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100， 退款 80，操作员：1900000109, 退款单号：使用商户订单号退款, 退款账户：可用余额退款</span>

<span class="token comment"># 2. 使用 TransactionId 退款</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refundByTransactionId</span><span class="token punctuation">(</span><span class="token variable">\$transactionId</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100 退款 100，操作员：商户号</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refundByTransactionId</span><span class="token punctuation">(</span><span class="token variable">\$transactionId</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100， 退款 80，操作员：商户号</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refundByTransactionId</span><span class="token punctuation">(</span><span class="token variable">\$transactionId</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">1900000109</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100， 退款 80，操作员：1900000109</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">refundByTransactionId</span><span class="token punctuation">(</span><span class="token variable">\$transactionId</span><span class="token punctuation">,</span> <span class="token variable">\$refundNo</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">1900000109</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;REFUND_SOURCE_RECHARGE_FUNDS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 总金额 100， 退款 80，操作员：1900000109，退款账户：可用余额退款</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><blockquote><p>\$refundNo 为商户退款单号，自己生成用于自己识别即可。</p></blockquote><h2 id="查询退款" tabindex="-1"><a class="header-anchor" href="#查询退款" aria-hidden="true">#</a> 查询退款</h2><p>提交退款申请后，通过调用该接口查询退款状态。退款有一定延时，用零钱支付的退款20分钟内到账，银行卡支付的退款3个工作日后重新查询退款状态。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">queryRefund</span><span class="token punctuation">(</span><span class="token variable">\$outTradeNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">queryRefundByTransactionId</span><span class="token punctuation">(</span><span class="token variable">\$transactionId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">queryRefundByRefundNo</span><span class="token punctuation">(</span><span class="token variable">\$outRefundNo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">queryRefundByRefundId</span><span class="token punctuation">(</span><span class="token variable">\$refundId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="下载对账单" tabindex="-1"><a class="header-anchor" href="#下载对账单" aria-hidden="true">#</a> 下载对账单</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$bill</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">downloadBill</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;20140603&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// type: ALL</span>
<span class="token comment">// or</span>
<span class="token variable">\$bill</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">downloadBill</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;20140603&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;SUCCESS&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getContents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// type: SUCCESS</span>
<span class="token comment">// bill 为 csv 格式的内容</span>

<span class="token comment">// 保存为文件</span>
<span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;YOUR/PATH/TO/bill-20140603.csv&#39;</span><span class="token punctuation">,</span> <span class="token variable">\$bill</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>第二个参数为类型：</p><ul><li><strong>ALL</strong>：返回当日所有订单信息（默认值）</li><li><strong>SUCCESS</strong>：返回当日成功支付的订单</li><li><strong>REFUND</strong>：返回当日退款订单</li><li><strong>REVOKED</strong>：已撤销的订单</li></ul><h2 id="测速上报" tabindex="-1"><a class="header-anchor" href="#测速上报" aria-hidden="true">#</a> 测速上报</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token variable">\$api</span><span class="token punctuation">,</span> <span class="token variable">\$timeConsuming</span><span class="token punctuation">,</span> <span class="token variable">\$resultCode</span><span class="token punctuation">,</span> <span class="token variable">\$returnCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token variable">\$api</span><span class="token punctuation">,</span> <span class="token variable">\$timeConsuming</span><span class="token punctuation">,</span> <span class="token variable">\$resultCode</span><span class="token punctuation">,</span> <span class="token variable">\$returnCode</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;err_code&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;err_code_des&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;out_trade_no&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;user_ip&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;...&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="转换短链接" tabindex="-1"><a class="header-anchor" href="#转换短链接" aria-hidden="true">#</a> 转换短链接</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$shortUrl</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">urlShorten</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;http://easywechat.org&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="授权码查询openid接口" tabindex="-1"><a class="header-anchor" href="#授权码查询openid接口" aria-hidden="true">#</a> 授权码查询OPENID接口</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">authCodeToOpenId</span><span class="token punctuation">(</span><span class="token variable">\$authCode</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$response</span><span class="token operator">-&gt;</span><span class="token property">openid</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="生成支付-js-配置" tabindex="-1"><a class="header-anchor" href="#生成支付-js-配置" aria-hidden="true">#</a> 生成支付 JS 配置</h2><p>有两种发起支付的方式：<a href="https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=7_7&amp;index=6" target="_blank" rel="noopener noreferrer">WeixinJSBridge`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://mp.weixin.qq.com/wiki?t=resource/res_main&amp;id=mp1421141115&amp;token=&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">JSSDK`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><ol><li><p>WeixinJSBridge:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$json</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">configForPayment</span><span class="token punctuation">(</span><span class="token variable">\$prepayId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 json 字符串，如果想返回数组，传第二个参数 false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>javascript:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">...</span>
WeixinJSBridge<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>
       <span class="token string">&#39;getBrandWCPayRequest&#39;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">=</span> \$json <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
       <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>err_msg <span class="token operator">==</span> <span class="token string">&quot;get_brand_wcpay_request:ok&quot;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 使用以上方式判断前端返回,微信团队郑重提示：</span>
                <span class="token comment">// res.err_msg将在用户支付成功后返回</span>
                <span class="token comment">// ok，但并不保证它绝对可靠。</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p>JSSDK:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">configForJSSDKPayment</span><span class="token punctuation">(</span><span class="token variable">\$prepayId</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回数组</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>javascript:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">chooseWXPay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    timestamp<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token operator">?</span><span class="token operator">=</span> \$config<span class="token punctuation">[</span><span class="token string">&#39;timestamp&#39;</span><span class="token punctuation">]</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    nonceStr<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>nonceStr<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span><span class="token keyword">package</span><span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    signType<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>signType<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span>
    paySign<span class="token operator">:</span> <span class="token string">&#39;&lt;?= \$config[&#39;</span>paySign<span class="token string">&#39;] ?&gt;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支付签名</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 支付成功后的回调函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ol><h2 id="生成共享收货地址-js-配置" tabindex="-1"><a class="header-anchor" href="#生成共享收货地址-js-配置" aria-hidden="true">#</a> 生成共享收货地址 JS 配置</h2><ol><li>发起 OAuth 授权：</li></ol><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Url</span> <span class="token keyword">as</span> UrlHelper<span class="token punctuation">;</span>

<span class="token comment">// 检查当前不是微信 oauth 的回调，则跳过去授权</span>
<span class="token comment">// 注意，授权回调地址为当前页</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">\$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">\$currentUrl</span> <span class="token operator">=</span> <span class="token class-name static-context">UrlHelper</span><span class="token operator">::</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取当前页 URL</span>
    <span class="token variable">\$response</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token operator">-&gt;</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;snsapi_base&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token variable">\$currentUrl</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">\$response</span><span class="token punctuation">;</span> <span class="token comment">// or echo \$response;</span>

<span class="token punctuation">}</span>
<span class="token comment">// 授权回来</span>
<span class="token variable">\$oauthUser</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">oauth</span><span class="token operator">-&gt;</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$token</span> <span class="token operator">=</span> <span class="token variable">\$oauthUser</span><span class="token operator">-&gt;</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">\$configForPickAddress</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">configForShareAddress</span><span class="token punctuation">(</span><span class="token variable">\$token</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 拿着这个生成好的配置 \$configForPickAddress 去订单页（或者直接显示订单页）写 js 调用了</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="生成-app-支付配置" tabindex="-1"><a class="header-anchor" href="#生成-app-支付配置" aria-hidden="true">#</a> 生成 APP 支付配置</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$config</span> <span class="token operator">=</span> <span class="token variable">\$payment</span><span class="token operator">-&gt;</span><span class="token function">configForAppPayment</span><span class="token punctuation">(</span><span class="token variable">\$prepayId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>\$config</code> 为数组格式，你可以用 API 返回给客户端</p><h1 id="二维码生成工具推荐" tabindex="-1"><a class="header-anchor" href="#二维码生成工具推荐" aria-hidden="true">#</a> 二维码生成工具推荐</h1><p>你也许需要生成二维码，那么以下这些供参考：</p><ul><li>https://github.com/endroid/QrCode</li><li>https://github.com/Bacon/BaconQrCode</li><li>https://github.com/SimpleSoftwareIO/simple-qrcode (Bacon/BaconQrCode 的 Laravel 版本)</li><li>https://github.com/aferrandini/PHPQRCode</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/payment.html.vue?vue&type=template&id=4fa7a490

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/payment.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/payment.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const payment_html = (script);

/***/ })

};
;
//# sourceMappingURL=8695.app.js.map