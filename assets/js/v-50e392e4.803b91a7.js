"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5365],{72852:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-50e392e4",path:"/6.x/official-account/message.html",title:"消息",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"服务端消息结构",slug:"服务端消息结构",children:[{level:3,title:"文本：",slug:"文本",children:[]},{level:3,title:"图片：",slug:"图片",children:[]},{level:3,title:"语音：",slug:"语音",children:[]},{level:3,title:"视频：",slug:"视频",children:[]},{level:3,title:"小视频：",slug:"小视频",children:[]},{level:3,title:"事件消息",slug:"事件消息",children:[]},{level:3,title:"地理位置：",slug:"地理位置",children:[]},{level:3,title:"链接：",slug:"链接",children:[]},{level:3,title:"文件：",slug:"文件",children:[]}]},{level:2,title:"客服消息结构",slug:"客服消息结构",children:[{level:3,title:"发送文本消息",slug:"发送文本消息",children:[]},{level:3,title:"图片消息",slug:"图片消息",children:[]},{level:3,title:"语音消息",slug:"语音消息",children:[]},{level:3,title:"视频消息",slug:"视频消息",children:[]},{level:3,title:"音乐消息",slug:"音乐消息",children:[]},{level:3,title:"图文消息（点击跳转到外链）",slug:"图文消息-点击跳转到外链",children:[]},{level:3,title:"图文消息（点击跳转到图文消息页面）",slug:"图文消息-点击跳转到图文消息页面",children:[]},{level:3,title:"菜单消息",slug:"菜单消息",children:[]},{level:3,title:"卡券消息",slug:"卡券消息",children:[]}]}],filePathRelative:"6.x/official-account/message.md",git:{updatedTime:1629906046e3,contributors:[]}}},9374:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var e=a(66252);const p=(0,e._)("h1",{id:"消息",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#消息","aria-hidden":"true"},"#"),(0,e.Uk)(" 消息")],-1),t=(0,e.Uk)("公众号消息分为 "),o={href:"https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Passive_user_reply_message.html",target:"_blank",rel:"noopener noreferrer"},l=(0,e._)("strong",null,"服务端被动回复消息",-1),r=(0,e.Uk)(" 和 "),c={href:"https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html",target:"_blank",rel:"noopener noreferrer"},u=(0,e._)("strong",null,"客服消息",-1),i=(0,e.Uk)(" 两个场景。"),d=(0,e.uE)('<p>需要注意的是两个场景的消息虽然类似，但是结构却有些差异，比如服务端使用 XML 结构，而客服消息使用 JSON 结构，且同样类似的消息类型，结构和名称都有些许差异，在使用时请勿混淆。</p><h2 id="服务端消息结构" tabindex="-1"><a class="header-anchor" href="#服务端消息结构" aria-hidden="true">#</a> 服务端消息结构</h2><p>当你接收到用户发来的消息时，可能会提取消息中的相关属性，参考：</p><p>请求消息基本属性(以下所有消息都有的基本属性)：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `ToUserName`    接收方帐号（该公众号 ID）\n  - `FromUserName`  发送方帐号（OpenID, 代表用户的唯一标识）\n  - `CreateTime`    消息创建时间（时间戳）\n  - `MsgId`        消息 ID（64位整型）\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`  text\n  - `Content`  文本消息内容\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`  image\n  - `MediaId`  图片消息媒体id，可以调用多媒体文件下载接口拉取数据。\n  - `PicUrl`   图片链接\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="语音" tabindex="-1"><a class="header-anchor" href="#语音" aria-hidden="true">#</a> 语音：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`        voice\n  - `MediaId`        语音消息媒体id，可以调用多媒体文件下载接口拉取数据。\n  - `Format`         语音格式，如 amr，speex 等\n  - `Recognition`  * 开通语音识别后才有\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>{warning} 请注意，开通语音识别后，用户每次发送语音给公众号时，微信会在推送的语音消息XML数据包中，增加一个 <code>Recongnition</code> 字段</p></blockquote><h3 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`       video\n  - `MediaId`       视频消息媒体id，可以调用多媒体文件下载接口拉取数据。\n  - `ThumbMediaId`  视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="小视频" tabindex="-1"><a class="header-anchor" href="#小视频" aria-hidden="true">#</a> 小视频：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`     shortvideo\n  - `MediaId`     视频消息媒体id，可以调用多媒体文件下载接口拉取数据。\n  - `ThumbMediaId`    视频消息缩略图的媒体id，可以调用多媒体文件下载接口拉取数据。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="事件消息" tabindex="-1"><a class="header-anchor" href="#事件消息" aria-hidden="true">#</a> 事件消息</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`     event\n  - `Event`       事件类型 （如：subscribe(订阅)、unsubscribe(取消订阅) ...， CLICK 等）\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="扫描带参数二维码事件" tabindex="-1"><a class="header-anchor" href="#扫描带参数二维码事件" aria-hidden="true">#</a> 扫描带参数二维码事件</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `EventKey`    事件KEY值，比如：qrscene_123123，qrscene_为前缀，后面为二维码的参数值\n  - `Ticket`      二维码的 ticket，可用来换取二维码图片\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="上报地理位置事件" tabindex="-1"><a class="header-anchor" href="#上报地理位置事件" aria-hidden="true">#</a> 上报地理位置事件</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `Latitude`    23.137466   地理位置纬度\n  - `Longitude`   113.352425  地理位置经度\n  - `Precision`   119.385040  地理位置精度\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="自定义菜单事件" tabindex="-1"><a class="header-anchor" href="#自定义菜单事件" aria-hidden="true">#</a> 自定义菜单事件</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `EventKey`    事件KEY值，与自定义菜单接口中KEY值对应，如：CUSTOM_KEY_001, www.qq.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="地理位置" tabindex="-1"><a class="header-anchor" href="#地理位置" aria-hidden="true">#</a> 地理位置：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`     location\n  - `Location_X`  地理位置纬度\n  - `Location_Y`  地理位置经度\n  - `Scale`       地图缩放大小\n  - `Label`       地理位置信息\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`      link\n  - `Title`        消息标题\n  - `Description`  消息描述\n  - `Url`          消息链接\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件：</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  - `MsgType`      file\n  - `Title`        文件名\n  - `Description`  文件描述，可能为null\n  - `FileKey`      文件KEY\n  - `FileMd5`      文件MD5值\n  - `FileTotalLen` 文件大小，单位字节\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="客服消息结构" tabindex="-1"><a class="header-anchor" href="#客服消息结构" aria-hidden="true">#</a> 客服消息结构</h2><h3 id="发送文本消息" tabindex="-1"><a class="header-anchor" href="#发送文本消息" aria-hidden="true">#</a> 发送文本消息</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span><span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span>\n    <span class="token punctuation">{</span>\n         <span class="token property">&quot;content&quot;</span><span class="token operator">:</span><span class="token string">&quot;Hello World&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="图片消息" tabindex="-1"><a class="header-anchor" href="#图片消息" aria-hidden="true">#</a> 图片消息</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span><span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;MEDIA_ID&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="语音消息" tabindex="-1"><a class="header-anchor" href="#语音消息" aria-hidden="true">#</a> 语音消息</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span><span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;voice&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;voice&quot;</span><span class="token operator">:</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;MEDIA_ID&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="视频消息" tabindex="-1"><a class="header-anchor" href="#视频消息" aria-hidden="true">#</a> 视频消息</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span><span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;video&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;video&quot;</span><span class="token operator">:</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;MEDIA_ID&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;thumb_media_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;MEDIA_ID&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;TITLE&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token string">&quot;DESCRIPTION&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="音乐消息" tabindex="-1"><a class="header-anchor" href="#音乐消息" aria-hidden="true">#</a> 音乐消息</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span><span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;music&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;music&quot;</span><span class="token operator">:</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;MUSIC_TITLE&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token string">&quot;MUSIC_DESCRIPTION&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;musicurl&quot;</span><span class="token operator">:</span><span class="token string">&quot;MUSIC_URL&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;hqmusicurl&quot;</span><span class="token operator">:</span><span class="token string">&quot;HQ_MUSIC_URL&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;thumb_media_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;THUMB_MEDIA_ID&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="图文消息-点击跳转到外链" tabindex="-1"><a class="header-anchor" href="#图文消息-点击跳转到外链" aria-hidden="true">#</a> 图文消息（点击跳转到外链）</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span><span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;news&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;news&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n        <span class="token property">&quot;articles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n         <span class="token punctuation">{</span>\n             <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;Happy Day&quot;</span><span class="token punctuation">,</span>\n             <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token string">&quot;Is Really A Happy Day&quot;</span><span class="token punctuation">,</span>\n             <span class="token property">&quot;url&quot;</span><span class="token operator">:</span><span class="token string">&quot;URL&quot;</span><span class="token punctuation">,</span>\n             <span class="token property">&quot;picurl&quot;</span><span class="token operator">:</span><span class="token string">&quot;PIC_URL&quot;</span>\n         <span class="token punctuation">}</span>\n         <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="图文消息-点击跳转到图文消息页面" tabindex="-1"><a class="header-anchor" href="#图文消息-点击跳转到图文消息页面" aria-hidden="true">#</a> 图文消息（点击跳转到图文消息页面）</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span><span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;mpnews&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;mpnews&quot;</span><span class="token operator">:</span>\n    <span class="token punctuation">{</span>\n         <span class="token property">&quot;media_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;MEDIA_ID&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="菜单消息" tabindex="-1"><a class="header-anchor" href="#菜单消息" aria-hidden="true">#</a> 菜单消息</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msgmenu&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;msgmenu&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;head_content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;您对本次服务是否满意呢? &quot;</span>\n    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;101&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;满意&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;102&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;不满意&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;tail_content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;欢迎再次光临&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="卡券消息" tabindex="-1"><a class="header-anchor" href="#卡券消息" aria-hidden="true">#</a> 卡券消息</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;touser&quot;</span><span class="token operator">:</span><span class="token string">&quot;OPENID&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;msgtype&quot;</span><span class="token operator">:</span><span class="token string">&quot;wxcard&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;wxcard&quot;</span><span class="token operator">:</span>\n  <span class="token punctuation">{</span>\n   <span class="token property">&quot;card_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;123dsdajkasd231jhksad&quot;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>请以官方文档为准。</p></blockquote>',50),b={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,(0,e._)("a",o,[l,(0,e.Wm)(a)]),r,(0,e._)("a",c,[u,(0,e.Wm)(a)]),i]),d],64)}}}}]);
//# sourceMappingURL=v-50e392e4.803b91a7.js.map