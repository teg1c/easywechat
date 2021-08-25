"use strict";
exports.id = 7878;
exports.ids = [7878];
exports.modules = {

/***/ 38569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-e3529d0c",
  "path": "/3.x/shake-around.html",
  "title": "摇一摇周边",
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
          "title": "开通摇一摇周边",
          "slug": "开通摇一摇周边",
          "children": []
        },
        {
          "level": 3,
          "title": "设备管理",
          "slug": "设备管理",
          "children": []
        },
        {
          "level": 3,
          "title": "页面管理",
          "slug": "页面管理",
          "children": []
        },
        {
          "level": 3,
          "title": "素材管理",
          "slug": "素材管理",
          "children": []
        },
        {
          "level": 3,
          "title": "管理设备与页面的关系",
          "slug": "管理设备与页面的关系",
          "children": []
        },
        {
          "level": 3,
          "title": "摇一摇数据统计",
          "slug": "摇一摇数据统计",
          "children": []
        },
        {
          "level": 3,
          "title": "设备分组管理",
          "slug": "设备分组管理",
          "children": []
        },
        {
          "level": 3,
          "title": "摇一摇红包",
          "slug": "摇一摇红包",
          "children": []
        },
        {
          "level": 3,
          "title": "摇一摇事件通知",
          "slug": "摇一摇事件通知",
          "children": []
        },
        {
          "level": 3,
          "title": "摇一摇周边错误码",
          "slug": "摇一摇周边错误码",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "3.x/shake-around.md",
  "git": {
    "updatedTime": 1629906046000,
    "contributors": []
  }
}


/***/ }),

/***/ 45355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ shake_around_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(84103);
// EXTERNAL MODULE: external "@vue/server-renderer"
var server_renderer_ = __webpack_require__(32745);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.vuepress/.temp/pages/3.x/shake-around.html.vue?vue&type=template&id=3e826c7f



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")

  _push(`<!--[--><h1 id="摇一摇周边" tabindex="-1"><a class="header-anchor" href="#摇一摇周边" aria-hidden="true">#</a> 摇一摇周边</h1><p>摇一摇周边是微信在线下的全新功能, 为线下商户提供近距离连接用户的能力, 并支持线下商户向周边用户提供个性化营销、互动及信息推荐等服务。</p><h2 id="获取实例" tabindex="-1"><a class="header-anchor" href="#获取实例" aria-hidden="true">#</a> 获取实例</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">use</span> <span class="token package">EasyWeChat<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Application</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token variable">\$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token variable">\$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">\$shakearound</span> <span class="token operator">=</span> <span class="token variable">\$app</span><span class="token operator">-&gt;</span><span class="token property">shakearound</span><span class="token punctuation">;</span>

</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><blockquote><p>特别提醒： 1、下述所有的接口调用的方法参数都要严格按照方法参数前的类型传入相应类型的实参，否则可能会得到非预期的结果。 2、涉及需要传入设备id（\$deviceIdentifier）的参数时，该参数是一个以 <code>device_id</code> 或包含 <code>uuid</code> <code>major</code> <code>minor</code> 为key的关联数组。 3、涉及需要传入设备id列表（\$deviceIdentifiers）的参数时，该参数是一个二维数组，第一层为索引类型，第二层为关联类型（\$deviceIdentifier）。</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 参数\$deviceIdentifier的实参形式：</span>
<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10097</span><span class="token punctuation">]</span>
<span class="token comment">// 或</span>
<span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12102</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment">// 参数\$deviceIdentifiers的实参形式：</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10097</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10098</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment">// 或</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12102</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12103</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="开通摇一摇周边" tabindex="-1"><a class="header-anchor" href="#开通摇一摇周边" aria-hidden="true">#</a> 开通摇一摇周边</h3><blockquote><p>提示： 若不是做 <a href="https://open.weixin.qq.com/cgi-bin/frame?t=home/wx_plugin_tmpl&amp;lang=zh_CN" target="_blank" rel="noopener noreferrer">公众号第三方平台`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> 开发，建议直接在微信管理后台申请开通摇一摇周边功能。</p></blockquote><h4 id="申请开通" tabindex="-1"><a class="header-anchor" href="#申请开通" aria-hidden="true">#</a> 申请开通</h4><p>申请开通摇一摇周边功能。成功提交申请请求后，工作人员会在三个工作日内完成审核。若审核不通过，可以重新提交申请请求。若是审核中，请耐心等待工作人员审核，在审核中状态不能再提交申请请求。</p><p>方法</p><blockquote><p>\$shakearound-&gt;register(string \$name, string \$tel, string \$email, string \$industryId, array \$certUrls [, \$reason = &#39;&#39;])</p></blockquote><p>参数</p><blockquote><p>\$name 联系人姓名，不超过20汉字或40个英文字母 \$tel 联系人电话 \$email 联系人邮箱 \$industryId 平台定义的行业代号，具体请查看链接 <a href="http://3gimg.qq.com/shake_nearby/Qualificationdocuments.html" target="_blank" rel="noopener noreferrer">行业代号`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> \$certUrls 相关资质文件的图片url，图片需先上传至微信侧服务器，用“素材管理-上传图片素材”接口上传图片，返回的图片URL再配置在此处；当不需要资质文件时，请传入空数组 \$reason 可选，申请理由，不超过250汉字或500个英文字母</p></blockquote><blockquote><p>注意： 1、相关资质文件的图片是使用本页面下方的素材管理的接口上传的，切勿和另一个 `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/material.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`素材管理`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("素材管理")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 接口混淆。 2、行业代码请务必传入<strong>字符串</strong>类型的实参，否则以数字0开头的行业代码将会被当成八进制数处理（将转换为十进制数），这可能不是期望的。</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;zhang_san&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;13512345678&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;weixin123@qq.com&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;0118&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
   &quot;data&quot;: {

   },
   &quot;errcode&quot;: 0,
   &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">)</span> <span class="token comment">// 空数组</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errmsg</span><span class="token punctuation">)</span> <span class="token comment">// success.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="查询审核状态" tabindex="-1"><a class="header-anchor" href="#查询审核状态" aria-hidden="true">#</a> 查询审核状态</h4><p>查询已经提交的开通摇一摇周边功能申请的审核状态。在申请提交后，工作人员会在三个工作日内完成审核。</p><p>方法</p><blockquote><p>\$shakearound-&gt;getStatus()</p></blockquote><p>参数</p><blockquote><p>无</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;apply_time&quot;: 1432026025,
        &quot;audit_comment&quot;: &quot;test&quot;,
        &quot;audit_status&quot;: 1,
        &quot;audit_time&quot;: 0
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;audit_comment&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="获取摇一摇的设备及用户信息" tabindex="-1"><a class="header-anchor" href="#获取摇一摇的设备及用户信息" aria-hidden="true">#</a> 获取摇一摇的设备及用户信息</h4><p>获取设备信息，包括UUID、major、minor，以及距离、openID等信息。</p><p>方法</p><blockquote><p>\$shakearound-&gt;getShakeInfo(string \$ticket [, int \$needPoi = null])</p></blockquote><p>参数</p><blockquote><p>\$ticket 摇周边业务的ticket，可在摇到的URL中得到，ticket生效时间为30分钟，每一次摇都会重新生成新的ticket \$needPoi 可选，是否需要返回门店poi_id，传1则返回，否则不返回</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">getShakeInfo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;6ab3d8465166598a5f4e8c1b44f44645&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
   &quot;data&quot;: {
       &quot;page_id &quot;: 14211,
       &quot;beacon_info&quot;: {
           &quot;distance&quot;: 55.00620700469034,
           &quot;major&quot;: 10001,
           &quot;minor&quot;: 19007,
           &quot;uuid&quot;: &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;
       },
       &quot;openid&quot;: &quot;oVDmXjp7y8aG2AlBuRpMZTb1-cmA&quot;,
       &quot;poi_id&quot;:1234
   },
   &quot;errcode&quot;: 0,
   &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;page_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 14211</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;beacon_info&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;distance&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 55.00620700469034</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="设备管理" tabindex="-1"><a class="header-anchor" href="#设备管理" aria-hidden="true">#</a> 设备管理</h3><h4 id="申请设备id" tabindex="-1"><a class="header-anchor" href="#申请设备id" aria-hidden="true">#</a> 申请设备ID</h4><p>申请配置设备所需的UUID、Major、Minor。申请成功后返回批次ID，可用返回的批次ID通过“查询设备ID申请状态”接口查询目前申请的审核状态。 一个公众账号最多可申请100000个设备ID，如需申请的设备ID数超过最大限额，请邮件至zhoubian@tencent.com，邮件格式如下：</p><blockquote><p>标题：申请提升设备ID额度 内容： 1、公众账号名称及appid（wx开头的字符串，在mp平台可查看） 2、用途 3、预估需要多少设备ID</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;device()-&gt;apply(int \$quantity, string \$reason [, string \$comment = &#39;&#39; [, int \$poiId = null]])</p></blockquote><p>参数</p><blockquote><p>\$quantity 申请的设备ID的数量，单次新增设备超过500个，需走人工审核流程 \$reason 申请理由，不超过100个汉字或200个英文字母 \$comment 可选，备注，不超过15个汉字或30个英文字母 \$poiId 可选，设备关联的门店ID，关联门店后，在门店1KM的范围内有优先摇出信息的机会</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;测试&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;测试专用&#39;</span><span class="token punctuation">,</span> <span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;apply_id&quot;: 123,
        &quot;audit_status&quot;: 1,
        &quot;audit_comment&quot;: &quot;审核中&quot;
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;apply_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="查询设备id申请审核状态" tabindex="-1"><a class="header-anchor" href="#查询设备id申请审核状态" aria-hidden="true">#</a> 查询设备ID申请审核状态</h4><p>查询设备ID申请的审核状态。若单次申请的设备ID数量小于等于500个，系统会进行快速审核；若单次申请的设备ID数量大于500个，则在三个工作日内完成审核。</p><p>方法</p><blockquote><p>\$shakearound-&gt;device()-&gt;getStatus(int \$applyId)</p></blockquote><p>参数</p><blockquote><p>\$applyId 批次ID，申请设备ID时所返回的批次ID</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;apply_time&quot;: 1432026025,
        &quot;audit_comment&quot;: &quot;test&quot;,
        &quot;audit_status&quot;: 1,
        &quot;audit_time&quot;: 0
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;audit_status&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="编辑设备信息" tabindex="-1"><a class="header-anchor" href="#编辑设备信息" aria-hidden="true">#</a> 编辑设备信息</h4><blockquote><p>仅能修改设备的备注信息。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;device()-&gt;update(array \$deviceIdentifier, string \$comment)</p></blockquote><p>参数</p><blockquote><p>\$deviceIdentifier 设备id，设备编号device_id或UUID、major、minor的关联数组，若二者都填，则以设备编号为优先 \$comment 设备的备注信息，不超过15个汉字或30个英文字母</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10011</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                          <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1002</span><span class="token punctuation">,</span>
                                          <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1223</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="配置设备与门店-其他公众账号门店的关联关系" tabindex="-1"><a class="header-anchor" href="#配置设备与门店-其他公众账号门店的关联关系" aria-hidden="true">#</a> 配置设备与门店/其他公众账号门店的关联关系</h4><p>关联本公众账号门店时，支持创建门店后直接关联在设备上，无需为审核通过状态，摇周边后台自动更新门店的最新信息和状态。 关联其他公众账号门店时，支持设备关联其他公众账号的门店，门店需为审核通过状态。</p><blockquote><p>因为第三方门店不归属本公众账号，所以未保存到设备详情中，查询设备列表接口与获取摇周边的设备及用户信息接口不会返回第三方门店。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;device()-&gt;bindLocation(array \$deviceIdentifier, \$poiId [, \$type = 1 [, \$poiAppid = null]])</p></blockquote><p>参数</p><blockquote><p>\$deviceIdentifier 设备id，设备编号device_id或UUID、major、minor的关联数组，若二者都填，则以设备编号为优先 \$poiId 设备关联的门店ID，关联门店后，在门店1KM的范围内有优先摇出信息的机会。当值为0时，将清除设备已关联的门店ID \$type 可选，为1时，关联的门店和设备归属于同一公众账号；为2时，关联的门店为其他公众账号的门店 \$poiAppid 可选，当\$type为1时该参数为必填</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// 关联本公众账号门店</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">bindLocation</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10011</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1231</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">bindLocation</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1002</span><span class="token punctuation">,</span>
                                                <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1223</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1231</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 关联其他公众账号门店</span>
<span class="token comment">// wxappid为关联门店所归属的公众账号的APPID</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">bindLocation</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10011</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1231</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;wxappid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">bindLocation</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1002</span><span class="token punctuation">,</span>
                                                <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1223</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1231</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;wxappid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="查询设备列表" tabindex="-1"><a class="header-anchor" href="#查询设备列表" aria-hidden="true">#</a> 查询设备列表</h4><p>查询已有的设备ID、UUID、Major、Minor、激活状态、备注信息、关联门店、关联页面等信息。</p><h5 id="根据设备id批量取回设备数据" tabindex="-1"><a class="header-anchor" href="#根据设备id批量取回设备数据" aria-hidden="true">#</a> 根据设备id批量取回设备数据</h5><p>方法</p><blockquote><p>\$shakearound-&gt;device()-&gt;fetchByIds(array \$deviceIdentifiers)</p></blockquote><p>参数</p><blockquote><p>\$deviceIdentifiers 设备id列表</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">fetchByIds</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                                                <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10097</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10098</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">fetchByIds</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                                                <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                 <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
                                                 <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12102</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                 <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
                                                 <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12103</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;devices&quot;: [
            {
                &quot;comment&quot;: &quot;&quot;,
                &quot;device_id&quot;: 10097,
                &quot;major&quot;: 10001,
                &quot;minor&quot;: 12102,
                &quot;status&quot;: 1,
                &quot;last_active_time&quot;:1437276018,
                &quot;poi_id&quot;: 0,
                &quot;uuid&quot;: &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;
            },
            {
                &quot;comment&quot;: &quot;&quot;,
                &quot;device_id&quot;: 10098,
                &quot;major&quot;: 10001,
                &quot;minor&quot;: 12103,
                &quot;status&quot;: 1,
                &quot;last_active_time&quot;:1437276018,
                &quot;poi_appid&quot;:&quot;wxe3813f5d8c546fc7&quot;
                &quot;poi_id&quot;: 123,
                &quot;uuid&quot;: &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;
            }
        ],
        &quot;total_count&quot;: 151
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;devices&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>device_id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 10097</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total_count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 151</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h5 id="分页批量取回设备数据" tabindex="-1"><a class="header-anchor" href="#分页批量取回设备数据" aria-hidden="true">#</a> 分页批量取回设备数据</h5><p>方法</p><blockquote><p>\$shakearound-&gt;device()-&gt;pagination(int \$lastSeen, int \$count)</p></blockquote><p>参数</p><blockquote><p>\$lastSeen 前一次查询列表末尾的设备编号device_id，第一次查询last_seen为0 \$count 待查询的设备数量，不能超过50个</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">pagination</span><span class="token punctuation">(</span><span class="token number">10097</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回结果同上</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="根据申请时的批次id分页批量取回设备数据" tabindex="-1"><a class="header-anchor" href="#根据申请时的批次id分页批量取回设备数据" aria-hidden="true">#</a> 根据申请时的批次ID分页批量取回设备数据</h5><p>方法</p><blockquote><p>\$shakearound-&gt;device()-&gt;fetchByApplyId(int \$applyId, int \$lastSeen, int \$count)</p></blockquote><p>参数</p><blockquote><p>\$applyId 批次ID，申请设备ID时所返回的批次ID \$lastSeen 前一次查询列表末尾的设备编号device_id，第一次查询lastSeen为0 \$count 待查询的设备数量，不能超过50个</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">device</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">fetchByApplyId</span><span class="token punctuation">(</span><span class="token number">1231</span><span class="token punctuation">,</span> <span class="token number">10097</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回结果同上</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理" aria-hidden="true">#</a> 页面管理</h3><h4 id="新增页面" tabindex="-1"><a class="header-anchor" href="#新增页面" aria-hidden="true">#</a> 新增页面</h4><p>新增摇一摇出来的页面信息，包括在摇一摇页面出现的主标题、副标题、图片和点击进去的超链接。其中，图片必须为用素材管理接口上传至微信侧服务器后返回的链接。</p><blockquote><p>注意： 图片是使用本页面下方的素材管理的接口上传的，切勿和另一个 `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/material.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`素材管理`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("素材管理")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(` 接口混淆。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;page()-&gt;add(string \$title, string \$description, strig \$pageUrl, string \$iconUrl [, string \$comment = &#39;&#39;])</p></blockquote><p>参数</p><blockquote><p>\$title 在摇一摇页面展示的主标题，不超过6个汉字或12个英文字母 \$description 在摇一摇页面展示的副标题，不超过7个汉字或14个英文字母 \$pageUrl 点击进去的超链接 \$iconUrl 在摇一摇页面展示的图片。图片需先上传至微信侧服务器，用“素材管理-上传图片素材”接口上传图片，返回的图片URL再配置在此处 \$comment 可选，页面的备注信息，不超过15个汉字或30个英文字母</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;主标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;副标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;https://zb.weixin.qq.com&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;http://3gimg.qq.com/shake_nearby/dy/icon&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
   &quot;data&quot;: {
       &quot;page_id&quot;: 28840
   }
   &quot;errcode&quot;: 0,
   &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;page_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 28840</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="编辑页面信息" tabindex="-1"><a class="header-anchor" href="#编辑页面信息" aria-hidden="true">#</a> 编辑页面信息</h4><p>编辑摇一摇出来的页面信息，包括在摇一摇页面出现的主标题、副标题、图片和点击进去的超链接。</p><p>方法</p><blockquote><p>\$shakearound-&gt;page()-&gt;update(int \$pageId, string \$title, string \$description, string \$pageUrl, string \$iconUrl [, string \$comment = &#39;&#39;])</p></blockquote><p>参数</p><blockquote><p>\$pageId 摇周边页面唯一ID \$title 在摇一摇页面展示的主标题，不超过6个汉字或12个英文字母 \$description 在摇一摇页面展示的副标题，不超过7个汉字或14个英文字母 \$pageUrl 点击进去的超链接 \$iconUrl 在摇一摇页面展示的图片。图片需先上传至微信侧服务器，用“素材管理-上传图片素材”接口上传图片，返回的图片URL再配置在此处 \$comment 可选，页面的备注信息，不超过15个汉字或30个英文字母</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">28840</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;主标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;副标题&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;https://zb.weixin.qq.com&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;http://3gimg.qq.com/shake_nearby/dy/icon&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="查询页面列表" tabindex="-1"><a class="header-anchor" href="#查询页面列表" aria-hidden="true">#</a> 查询页面列表</h4><p>查询已有的页面，包括在摇一摇页面出现的主标题、副标题、图片和点击进去的超链接。</p><h5 id="根据页面id批量取回页面数据" tabindex="-1"><a class="header-anchor" href="#根据页面id批量取回页面数据" aria-hidden="true">#</a> 根据页面id批量取回页面数据</h5><p>方法</p><blockquote><p>\$shakearound-&gt;page()-&gt;fetchByIds(array \$pageIds)</p></blockquote><p>参数</p><blockquote><p>\$pageIds 页面的id列表，索引数组</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">fetchByIds</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">28840</span><span class="token punctuation">,</span> <span class="token number">28842</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
   &quot;data&quot;: {
       &quot;pages&quot;: [
           {
               &quot;comment&quot;: &quot;just for test&quot;,
               &quot;description&quot;: &quot;test&quot;,
               &quot;icon_url&quot;: &quot;https://www.baidu.com/img/bd_logo1&quot;,
               &quot;page_id&quot;: 28840,
               &quot;page_url&quot;: &quot;http://xw.qq.com/testapi1&quot;,
               &quot;title&quot;: &quot;测试1&quot;
           },
           {
               &quot;comment&quot;: &quot;just for test&quot;,
               &quot;description&quot;: &quot;test&quot;,
               &quot;icon_url&quot;: &quot;https://www.baidu.com/img/bd_logo1&quot;,
               &quot;page_id&quot;: 28842,
               &quot;page_url&quot;: &quot;http://xw.qq.com/testapi2&quot;,
               &quot;title&quot;: &quot;测试2&quot;
           }
       ],
       &quot;total_count&quot;: 2
   },
   &quot;errcode&quot;: 0,
   &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;pages&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 测试1</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total_count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h5 id="分页批量取回页面数据" tabindex="-1"><a class="header-anchor" href="#分页批量取回页面数据" aria-hidden="true">#</a> 分页批量取回页面数据</h5><p>方法</p><blockquote><p>\$shakearound-&gt;page()-&gt;pagination(int \$begin, int \$count)</p></blockquote><p>参数</p><blockquote><p>\$begin 页面列表的起始索引值 \$count 待查询的页面数量，不能超过50个</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">pagination</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回结果同上</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="删除页面" tabindex="-1"><a class="header-anchor" href="#删除页面" aria-hidden="true">#</a> 删除页面</h4><p>删除已有的页面，包括在摇一摇页面出现的主标题、副标题、图片和点击进去的超链接。</p><blockquote><p>注意： 只有页面与设备没有关联关系时，才可被删除。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;page()-&gt;delete(int \$pageId)</p></blockquote><p>参数</p><blockquote><p>\$pageId 页面的id</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">page</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">34567</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="素材管理" tabindex="-1"><a class="header-anchor" href="#素材管理" aria-hidden="true">#</a> 素材管理</h3><p>上传在摇一摇功能中需使用到的图片素材，素材保存在微信侧服务器上。图片格式限定为：jpg,jpeg,png,gif。 若图片为在摇一摇页面展示的图片，则其素材为 <code>icon</code> 类型的图片，图片大小建议 <code>120px*120 px</code> ，限制不超过 <code>200 px *200 px</code> ，图片需为 <code>正方形</code> 。 若图片为申请开通摇一摇周边功能需要上传的资质文件图片，则其素材为 <code>license</code> 类型的图片，图片的文件大小不超过 <code>2MB</code> ，尺寸不限，形状不限。</p><p>方法</p><blockquote><p>\$shakearound-&gt;material()-&gt;uploadImage(string \$path [, string \$type = &#39;icon&#39;])</p></blockquote><p>参数</p><blockquote><p>\$path 图片所在路径 \$type 可选，值为icon或license</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">material</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">uploadImage</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;/stubs/image.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;pic_url&quot;: http://shp.qpic.cn/wechat_shakearound_pic/0/1428377032e9dd2797018cad79186e03e8c5aec8dc/120&quot;
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;pic_url&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// http://shp.qpic.cn/wechat_shakearound_pic/0/1428377032e9dd2797018cad79186e03e8c5aec8dc/120</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="管理设备与页面的关系" tabindex="-1"><a class="header-anchor" href="#管理设备与页面的关系" aria-hidden="true">#</a> 管理设备与页面的关系</h3><p>通过接口申请的设备ID，需先配置页面，若未配置页面，则摇不出页面信息。</p><h4 id="配置设备与页面的关联关系" tabindex="-1"><a class="header-anchor" href="#配置设备与页面的关联关系" aria-hidden="true">#</a> 配置设备与页面的关联关系</h4><p>配置完成后，在此设备的信号范围内，即可摇出关联的页面信息。 若设备配置多个页面，则随机出现页面信息。一个设备最多可配置30个关联页面。</p><blockquote><p>注意： 1、配置时传入该设备需要关联的页面的id列表，该设备原有的关联关系将被直接清除。 2、页面的id列表允许为空（<strong>传入空数组</strong>），当页面的id列表为空时则会清除该设备的所有关联关系。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;relation()-&gt;bindPage(array \$deviceIdentifier, array \$pageIds)</p></blockquote><p>参数</p><blockquote><p>\$deviceIdentifier 设备id，设备编号device_id或UUID、major、minor的关联数组，若二者都填，则以设备编号为优先 \$pageIds 页面的id列表，索引数组</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">relation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">bindPage</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10011</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token number">23456</span><span class="token punctuation">,</span> <span class="token number">334567</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">relation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">bindPage</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                              <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1002</span><span class="token punctuation">,</span>
                                              <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1223</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token number">23456</span><span class="token punctuation">,</span> <span class="token number">334567</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="查询设备与页面的关联关系" tabindex="-1"><a class="header-anchor" href="#查询设备与页面的关联关系" aria-hidden="true">#</a> 查询设备与页面的关联关系</h4><h5 id="查询指定设备所关联的页面" tabindex="-1"><a class="header-anchor" href="#查询指定设备所关联的页面" aria-hidden="true">#</a> 查询指定设备所关联的页面</h5><p>根据设备ID或完整的UUID、Major、Minor查询该设备所关联的所有页面信息</p><p>方法</p><blockquote><p>\$shakearound-&gt;relation()-&gt;getPageByDeviceId(array \$deviceIdentifier [, boolean \$raw = false])</p></blockquote><blockquote><p>注意： 该方法默认对返回的数据进行处理后返回一个包含页面id的索引数组。若要返回和 <code>getDeviceByPageId</code> 方法类似的数据，请传入 <code>true</code> 作为第二个参数。</p></blockquote><p>参数</p><blockquote><p>\$deviceIdentifier 设备id，设备编号device_id或UUID、major、minor的关联数组，若二者都填，则以设备编号为优先 \$raw 可选，当为true时，返回值和getDeviceByPageId方法类似，否则返回页面的id列表（索引数组，无关联时为空数组）</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">relation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getPageByDeviceId</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10011</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">relation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getPageByDeviceId</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                       <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1002</span><span class="token punctuation">,</span>
                                                       <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1223</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回结果</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token punctuation">)</span> <span class="token comment">// [50054,50055]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="查询指定页面所关联的设备" tabindex="-1"><a class="header-anchor" href="#查询指定页面所关联的设备" aria-hidden="true">#</a> 查询指定页面所关联的设备</h5><p>指定页面ID分页查询该页面所关联的所有的设备信息</p><p>方法</p><blockquote><p>\$shakearound-&gt;relation()-&gt;getDeviceByPageId(int \$pageId, int \$begin, int \$count)</p></blockquote><p>参数</p><blockquote><p>\$pageId 指定的页面id \$begin 关联关系列表的起始索引值 \$count 待查询的关联关系数量，不能超过50个</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">relation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getDeviceByPageId</span><span class="token punctuation">(</span><span class="token number">50054</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
  &quot;data&quot;: {
      &quot;relations&quot;: [
          {
              &quot;device_id&quot;: 797994,
              &quot;major&quot;: 10001,
              &quot;minor&quot;: 10023,
              &quot;page_id&quot;: 50054,
              &quot;uuid&quot;: &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;
          },
          {
              &quot;device_id&quot;: 797995,
              &quot;major&quot;: 10001,
              &quot;minor&quot;: 10024,
              &quot;page_id&quot;: 50054,
              &quot;uuid&quot;: &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;
          }
      ],
      &quot;total_count&quot;: 2
  },
  &quot;errcode&quot;: 0,
  &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;relations&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 797994</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total_count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="摇一摇数据统计" tabindex="-1"><a class="header-anchor" href="#摇一摇数据统计" aria-hidden="true">#</a> 摇一摇数据统计</h3><blockquote><p>此接口无法获取当天的数据，最早只能获取前一天的数据。 由于系统在凌晨处理前一天的数据，太早调用此接口可能获取不到数据，建议在早上8：00之后调用此接口。</p></blockquote><h4 id="以设备为维度的数据统计" tabindex="-1"><a class="header-anchor" href="#以设备为维度的数据统计" aria-hidden="true">#</a> 以设备为维度的数据统计</h4><p>查询单个设备进行摇周边操作的人数、次数，点击摇周边消息的人数、次数。</p><blockquote><p>注意： 查询的最长时间跨度为30天。只能查询最近90天的数据。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;stats()-&gt;deviceSummary(array \$deviceIdentifier, int \$beginDate, int \$endDate)</p></blockquote><p>参数</p><blockquote><p>\$deviceIdentifier 设备id，设备编号device_id或UUID、major、minor的关联数组，若二者都填，则以设备编号为优先 \$beginDate 起始日期时间戳，最长时间跨度为30天，单位为秒 \$endDate 结束日期时间戳，最长时间跨度为30天，单位为秒</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">deviceSummary</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10011</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1425052800</span><span class="token punctuation">,</span> <span class="token number">1425139200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">deviceSummary</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1002</span><span class="token punctuation">,</span>
                                                <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1223</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1425052800</span><span class="token punctuation">,</span> <span class="token number">1425139200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
   &quot;data&quot;: [
       {
           &quot;click_pv&quot;: 0,
           &quot;click_uv&quot;: 0,
           &quot;ftime&quot;: 1425052800,
           &quot;shake_pv&quot;: 0,
           &quot;shake_uv&quot;: 0
       },
       {
           &quot;click_pv&quot;: 0,
           &quot;click_uv&quot;: 0,
           &quot;ftime&quot;: 1425139200,
           &quot;shake_pv&quot;: 0,
           &quot;shake_uv&quot;: 0
       }
   ],
   &quot;errcode&quot;: 0,
   &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ftime&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 1425052800</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="批量查询设备统计数据" tabindex="-1"><a class="header-anchor" href="#批量查询设备统计数据" aria-hidden="true">#</a> 批量查询设备统计数据</h4><p>查询指定时间商家帐号下的每个设备进行摇周边操作的人数、次数，点击摇周边消息的人数、次数。</p><blockquote><p>只能查询最近90天内的数据，且一次只能查询一天。</p></blockquote><blockquote><p>注意： 对于摇周边人数、摇周边次数、点击摇周边消息的人数、点击摇周边消息的次数都为0的设备，不在结果列表中返回。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;stats()-&gt;batchDeviceSummary(int \$timestamp, int \$pageIndex)</p></blockquote><p>参数</p><blockquote><p>\$timestamp 指定查询日期时间戳，单位为秒 \$pageIndex 指定查询的结果页序号，返回结果按摇周边人数降序排序，每50条记录为一页</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">batchDeviceSummary</span><span class="token punctuation">(</span><span class="token number">1435075200</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;devices&quot;: [
            {
                &quot;device_id&quot;: 10097,
                &quot;major&quot;: 10001,
                &quot;minor&quot;: 12102,
                &quot;uuid&quot;: &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;
                &quot;shake_pv&quot;: 1
                &quot;shake_uv&quot;: 2
                &quot;click_pv&quot;: 3
                &quot;click_uv&quot;: 4
            },
            {
                &quot;device_id&quot;: 10098,
                &quot;major&quot;: 10001,
                &quot;minor&quot;: 12103,
                &quot;uuid&quot;: &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;
                &quot;shake_pv&quot;: 1
                &quot;shake_uv&quot;: 2
                &quot;click_pv&quot;: 3
                &quot;click_uv&quot;: 4
            }
        ],
    },
    &quot;date&quot;:1435075200
    &quot;total_count&quot;: 151
    &quot;page_index&quot;:1
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;devices&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 10097</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">total_count</span><span class="token punctuation">)</span> <span class="token comment">// 151</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h4 id="以页面为维度的数据统计" tabindex="-1"><a class="header-anchor" href="#以页面为维度的数据统计" aria-hidden="true">#</a> 以页面为维度的数据统计</h4><p>查询单个页面通过摇周边摇出来的人数、次数，点击摇周边页面的人数、次数</p><blockquote><p>注意： 查询的最长时间跨度为30天。只能查询最近90天的数据。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;stats()-&gt;pageSummary(int \$pageId, int \$beginDate, int \$endDate);</p></blockquote><p>参数</p><blockquote><p>\$pageId 指定页面的页面ID \$beginDate 起始日期时间戳，最长时间跨度为30天，单位为秒 \$endDate 结束日期时间戳，最长时间跨度为30天，单位为秒</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">pageSummary</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token number">1425052800</span><span class="token punctuation">,</span> <span class="token number">1425139200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
   &quot;data&quot;: [
       {
           &quot;click_pv&quot;: 0,
           &quot;click_uv&quot;: 0,
           &quot;ftime&quot;: 1425052800,
           &quot;shake_pv&quot;: 0,
           &quot;shake_uv&quot;: 0
       },
       {
           &quot;click_pv&quot;: 0,
           &quot;click_uv&quot;: 0,
           &quot;ftime&quot;: 1425139200,
           &quot;shake_pv&quot;: 0,
           &quot;shake_uv&quot;: 0
       }
   ],
   &quot;errcode&quot;: 0,
   &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;ftime&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 1425139200</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="批量查询页面统计数据" tabindex="-1"><a class="header-anchor" href="#批量查询页面统计数据" aria-hidden="true">#</a> 批量查询页面统计数据</h4><p>查询指定时间商家帐号下的每个页面进行摇周边操作的人数、次数，点击摇周边消息的人数、次数。</p><blockquote><p>注意： 对于摇周边人数、摇周边次数、点击摇周边消息的人数、点击摇周边消息的次数都为0的页面，不在结果列表中返回。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;stats()-&gt;batchPageSummary(int \$timestamp, int \$pageIndex);</p></blockquote><p>参数</p><blockquote><p>\$timestamp 指定查询日期时间戳，单位为秒 \$pageIndex 指定查询的结果页序号，返回结果按摇周边人数降序排序，每50条记录为一页</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">batchPageSummary</span><span class="token punctuation">(</span><span class="token number">1435075200</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;pages&quot;: [
            {
                &quot;page_id&quot;:1234
                &quot;click_pv&quot;: 1,
                &quot;click_uv&quot;: 3,
                &quot;shake_pv&quot;: 0,
                &quot;shake_uv&quot;: 0
            },
            {
                &quot;page_id&quot;:5678
                &quot;click_pv&quot;: 1,
                &quot;click_uv&quot;: 2,
                &quot;shake_pv&quot;: 0,
                &quot;shake_uv&quot;: 0
            },
        ],
    },
    &quot;date&quot;:1435075200
    &quot;total_count&quot;: 151
    &quot;page_index&quot;:1
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;pages&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;click_uv&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">total_count</span><span class="token punctuation">)</span> <span class="token comment">// 151</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="设备分组管理" tabindex="-1"><a class="header-anchor" href="#设备分组管理" aria-hidden="true">#</a> 设备分组管理</h3><p>调用H5页面获取设备信息 JS API接口，需要先把设备分组，微信客户端只会返回已在分组中的设备信息。</p><h4 id="新增分组" tabindex="-1"><a class="header-anchor" href="#新增分组" aria-hidden="true">#</a> 新增分组</h4><p>新建设备分组，每个帐号下最多只有1000个分组。</p><p>方法</p><blockquote><p>\$shakearound-&gt;group()-&gt;add(string \$name)</p></blockquote><p>参数</p><blockquote><p>\$name 分组名称，不超过100汉字或200个英文字母</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
  &quot;data&quot;: {
      &quot;group_id&quot; : 123,
      &quot;group_name&quot; : &quot;test&quot;
  },
  &quot;errcode&quot;: 0,
  &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;group_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;group_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="编辑分组信息" tabindex="-1"><a class="header-anchor" href="#编辑分组信息" aria-hidden="true">#</a> 编辑分组信息</h4><p>编辑设备分组信息，目前只能修改分组名。</p><p>方法</p><blockquote><p>\$shakearound-&gt;group()-&gt;update(int \$groupId, string \$name)</p></blockquote><p>参数</p><blockquote><p>\$groupId 分组唯一标识，全局唯一 \$name 分组名称，不超过100汉字或200个英文字母</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;newName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="删除分组" tabindex="-1"><a class="header-anchor" href="#删除分组" aria-hidden="true">#</a> 删除分组</h4><p>删除设备分组，若分组中还存在设备，则不能删除成功。需把设备移除以后，才能删除。</p><blockquote><p>在执行删除前，最好先使用 <code>getDetails</code> 方法查询分组详情，若分组内有设备，先使用 <code>removeDevice</code> 方法移除。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;group()-&gt;delete(int \$groupId)</p></blockquote><p>参数</p><blockquote><p>\$groupId 分组唯一标识，全局唯一</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="查询分组列表" tabindex="-1"><a class="header-anchor" href="#查询分组列表" aria-hidden="true">#</a> 查询分组列表</h4><p>查询账号下所有的分组。</p><p>方法</p><blockquote><p>\$shakearound-&gt;group()-&gt;lists(int \$begin, int \$count)</p></blockquote><p>参数</p><blockquote><p>\$begin 分组列表的起始索引值 \$count 待查询的分组数量，不能超过1000个</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">lists</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;groups&quot;:[
            {
                &quot;group_id&quot; : 123,
                &quot;group_name&quot; : &quot;test1&quot;
            },
            {
                &quot;group_id&quot; : 124,
                &quot;group_name&quot; : &quot;test2&quot;
            }
        ],
        &quot;total_count&quot;: 100
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;groups&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;group_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// test2</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total_count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="查询分组详情" tabindex="-1"><a class="header-anchor" href="#查询分组详情" aria-hidden="true">#</a> 查询分组详情</h4><p>查询分组详情，包括分组名，分组id，分组里的设备列表。</p><p>方法</p><blockquote><p>\$shakearound-&gt;group()-&gt;getDetails(int \$groupId, int \$begin, int \$count)</p></blockquote><p>参数</p><blockquote><p>\$groupId 分组唯一标识，全局唯一 \$begin 分组里设备的起始索引值 \$count 待查询的分组里设备的数量，不能超过1000个</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getDetails</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
        &quot;group_id&quot; : 123,
        &quot;group_name&quot; : &quot;test&quot;,
        &quot;total_count&quot;: 100,
        &quot;devices&quot; :[
            {
                &quot;device_id&quot; : 123456,
                &quot;uuid&quot; : &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;,
                &quot;major&quot; : 10001,
                &quot;minor&quot; : 10001,
                &quot;comment&quot; : &quot;test device1&quot;,
                &quot;poi_id&quot; : 12345,
            },
            {
                &quot;device_id&quot; : 123457,
                &quot;uuid&quot; : &quot;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&quot;,
                &quot;major&quot; : 10001,
                &quot;minor&quot; : 10002,
                &quot;comment&quot; : &quot;test device2&quot;,
                &quot;poi_id&quot; : 12345,
            }
        ]
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;devices&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;comment&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// test device1</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total_count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="添加设备到分组" tabindex="-1"><a class="header-anchor" href="#添加设备到分组" aria-hidden="true">#</a> 添加设备到分组</h4><p>添加设备到分组，每个分组能够持有的设备上限为10000，并且每次添加操作的添加上限为1000。</p><blockquote><p>只有在摇周边申请的设备才能添加到分组。</p></blockquote><p>方法</p><blockquote><p>\$shakearound-&gt;group()-&gt;addDevice(int \$groupId, array \$deviceIdentifiers)</p></blockquote><p>参数</p><blockquote><p>\$groupId 分组唯一标识，全局唯一 \$deviceIdentifiers 设备id列表</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addDevice</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                                                    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10097</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10098</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">addDevice</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                                                    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                    <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
                                                    <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12102</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                    <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
                                                    <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12103</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="从分组中移除设备" tabindex="-1"><a class="header-anchor" href="#从分组中移除设备" aria-hidden="true">#</a> 从分组中移除设备</h4><p>从分组中移除设备，每次删除操作的上限为1000。</p><p>方法</p><blockquote><p>\$shakearound-&gt;group()-&gt;removeDevice(int \$groupId, array \$deviceIdentifiers)</p></blockquote><p>参数</p><blockquote><p>\$groupId 分组唯一标识，全局唯一 \$deviceIdentifiers 设备id列表</p></blockquote><p>示例</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">removeDevice</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                                                    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10097</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;device_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10098</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
<span class="token variable">\$result</span> <span class="token operator">=</span> <span class="token variable">\$shakearound</span><span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">removeDevice</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                                                    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                    <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
                                                    <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12102</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                                                    <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;uuid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;FDA50693-A4E2-4FB1-AFCF-C6EB07647825&#39;</span><span class="token punctuation">,</span>
                                                    <span class="token string single-quoted-string">&#39;major&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10001</span><span class="token punctuation">,</span>
                                                    <span class="token string single-quoted-string">&#39;minor&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">12103</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 返回结果
{
    &quot;data&quot;: {
    },
    &quot;errcode&quot;: 0,
    &quot;errmsg&quot;: &quot;success.&quot;
}
*/</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">\$result</span><span class="token operator">-&gt;</span><span class="token property">errcode</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="摇一摇红包" tabindex="-1"><a class="header-anchor" href="#摇一摇红包" aria-hidden="true">#</a> 摇一摇红包</h3><p>微信官方目前暂停了摇红包接口，该接口可能会有所调整，故而暂时不提供该接口的封装。</p><blockquote><p>官方公告详情请至： <a href="https://zb.weixin.qq.com/nearby/announce.xhtml?announceId=10047" target="_blank" rel="noopener noreferrer">关于摇红包接口暂停的公告`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><h3 id="摇一摇事件通知" tabindex="-1"><a class="header-anchor" href="#摇一摇事件通知" aria-hidden="true">#</a> 摇一摇事件通知</h3><p>用户进入摇一摇界面，在“周边”页卡下摇一摇时，微信会把这个事件推送到开发者填写的URL（登录公众平台进入开发者中心设置）。推送内容包含摇一摇时“周边”页卡展示出来的页面所对应的设备信息，以及附近最多五个属于该公众账号的设备的信息。当摇出列表时，此事件不推送。</p><blockquote><p>摇一摇事件的事件类型：ShakearoundUserShake 关于事件的处理请移步： `)
  _push((0,server_renderer_.ssrRenderComponent)(_component_RouterLink, { to: "/3.x/events.html" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`事件`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("事件")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</p></blockquote><h3 id="摇一摇周边错误码" tabindex="-1"><a class="header-anchor" href="#摇一摇周边错误码" aria-hidden="true">#</a> 摇一摇周边错误码</h3><blockquote><p>摇周边错误码请移步： <a href="https://mp.weixin.qq.com/wiki?action=doc&amp;id=mp1443448163&amp;t=0.17525333335674986" target="_blank" rel="noopener noreferrer">错误码`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p></blockquote><p>有关摇一摇周边接口信息的更多细节请参考微信官方文档相应条目： <a href="http://mp.weixin.qq.com/wiki/" target="_blank" rel="noopener noreferrer">微信官方文档`)
  _push((0,server_renderer_.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><!--]-->`)
}
;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/shake-around.html.vue?vue&type=template&id=3e826c7f

;// CONCATENATED MODULE: ./.vuepress/.temp/pages/3.x/shake-around.html.vue

const script = {}
;
script.ssrRender = (...args) => {
  const ssrContext = args[2].appContext.provides[external_vue_.ssrContextKey]
  ssrContext._registeredComponents.add("/home/runner/work/easywechat/easywechat/docs/node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!/home/runner/work/easywechat/easywechat/docs/node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!/home/runner/work/easywechat/easywechat/docs/.vuepress/.temp/pages/3.x/shake-around.html.vue")
  return ssrRender(...args)
}


/* harmony default export */ const shake_around_html = (script);

/***/ })

};
;
//# sourceMappingURL=7878.app.js.map