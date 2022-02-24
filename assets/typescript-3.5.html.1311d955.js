import{r as e,o,c,a as n,b as p,F as l,e as t,d as s}from"./app.0186264c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=t('<h1 id="typescript-3-5" tabindex="-1"><a class="header-anchor" href="#typescript-3-5" aria-hidden="true">#</a> TypeScript 3.5</h1><h2 id="\u6539\u8FDB\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6539\u8FDB\u901F\u5EA6" aria-hidden="true">#</a> \u6539\u8FDB\u901F\u5EA6</h2><p>TypeScript 3.5 \u4E3A\u7C7B\u578B\u68C0\u67E5\u548C\u589E\u91CF\u6784\u5EFA\u91C7\u7528\u4E86\u51E0\u4E2A\u4F18\u5316\u3002</p><h3 id="\u7C7B\u578B\u68C0\u67E5\u901F\u5EA6\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u68C0\u67E5\u901F\u5EA6\u63D0\u5347" aria-hidden="true">#</a> \u7C7B\u578B\u68C0\u67E5\u901F\u5EA6\u63D0\u5347</h3><p>TypeScript 3.5 \u5305\u542B\u5BF9 TypeScript 3.4 \u7684\u67D0\u4E9B\u4F18\u5316\uFF0C\u53EF\u4EE5\u66F4\u9AD8\u6548\u5730\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\u3002 \u5728\u4EE3\u7801\u8865\u5168\u5217\u8868\u7B49\u7C7B\u578B\u68C0\u67E5\u9A71\u52A8\u7684\u64CD\u4F5C\u4E0A\uFF0C\u8FD9\u4E9B\u6539\u8FDB\u6548\u679C\u663E\u8457\u3002</p><h3 id="\u6539\u8FDB-incremental" tabindex="-1"><a class="header-anchor" href="#\u6539\u8FDB-incremental" aria-hidden="true">#</a> \u6539\u8FDB <code>--incremental</code></h3>',6),k=s("TypeScript 3.5 \u901A\u8FC7\u7F13\u5B58\u8BA1\u7B97\u72B6\u6001\u7684\u4FE1\u606F\uFF08\u7F16\u8BD1\u5668\u8BBE\u7F6E\u3001\u5BFB\u627E\u6587\u4EF6\u7684\u539F\u56E0\u3001\u6587\u4EF6\u5728\u54EA\u91CC\u88AB\u627E\u5230\u7B49\u7B49\uFF09\uFF0C\u6539\u8FDB\u4E86\u5728 3.4 \u4E2D\u7684 "),b=n("code",null,"--incremental",-1),d=s(" \u6784\u5EFA\u6A21\u5F0F\u3002"),m={href:"https://github.com/Microsoft/TypeScript/pull/31101",target:"_blank",rel:"noopener noreferrer"},g=s("\u6211\u4EEC\u53D1\u73B0\u91CD\u65B0\u6784\u5EFA\u82B1\u8D39\u7684\u65F6\u95F4\u6BD4 TypeScript 3.4 \u51CF\u5C11\u4E86 68%"),h=s("!"),y=n("p",null,"\u6709\u5173\u66F4\u591A\u4FE1\u606F\uFF0C\u4F60\u53EF\u4EE5\u67E5\u770B\u8FD9\u4E9B pull requests",-1),_={href:"https://github.com/Microsoft/TypeScript/pull/31100",target:"_blank",rel:"noopener noreferrer"},f=s("\u7F13\u5B58\u6A21\u5757\u89E3\u6790"),v={href:"https://github.com/Microsoft/TypeScript/pull/31101",target:"_blank",rel:"noopener noreferrer"},w=s("\u7F13\u5B58 "),T=n("code",null,"tsconfig.json",-1),x=s(" \u8BA1\u7B97"),S=t(`<h2 id="omit-\u8F85\u52A9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#omit-\u8F85\u52A9\u7C7B\u578B" aria-hidden="true">#</a> <code>Omit</code> \u8F85\u52A9\u7C7B\u578B</h2><p>TypeScript 3.5 \u6DFB\u52A0\u4E86\u65B0\u7684 <code>Omit</code> \u8F85\u52A9\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u7528\u6765\u521B\u5EFA\u4ECE\u539F\u59CB\u7C7B\u578B\u4E2D\u79FB\u9664\u4E86\u67D0\u4E9B\u5C5E\u6027\u7684\u65B0\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  location<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">QuantumPerson</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> <span class="token string">&quot;location&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// \u76F8\u5F53\u4E8E</span>
<span class="token keyword">type</span> <span class="token class-name">QuantumPerson</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4F7F\u7528 <code>Omit</code> \u8F85\u52A9\uFF0C\u6211\u4EEC\u6709\u80FD\u529B\u590D\u5236 <code>Person</code> \u4E2D\u9664\u4E86 <code>location</code> \u4E4B\u5916\u7684\u6240\u6709\u5C5E\u6027\u3002</p>`,4),P=s("\u6709\u5173\u66F4\u591A\u7EC6\u8282\uFF0C"),q={href:"https://github.com/Microsoft/TypeScript/pull/30552",target:"_blank",rel:"noopener noreferrer"},C=s("\u5728 GitHub \u67E5\u770B\u6DFB\u52A0 "),U=n("code",null,"Omit",-1),B=s(" \u7684 pull request"),G=s(", \u4EE5\u53CA"),V={href:"https://github.com/microsoft/TypeScript/pull/31134",target:"_blank",rel:"noopener noreferrer"},F=s("\u6709\u5173\u5269\u4F59\u5BF9\u8C61\u4F7F\u7528 "),N=n("code",null,"Omit",-1),H=s(" \u7684\u66F4\u6539"),L=s("\u3002"),M=t(`<h3 id="\u6539\u8FDB\u4E86\u8054\u5408\u7C7B\u578B\u4E2D\u591A\u4F59\u5C5E\u6027\u7684\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6539\u8FDB\u4E86\u8054\u5408\u7C7B\u578B\u4E2D\u591A\u4F59\u5C5E\u6027\u7684\u68C0\u67E5" aria-hidden="true">#</a> \u6539\u8FDB\u4E86\u8054\u5408\u7C7B\u578B\u4E2D\u591A\u4F59\u5C5E\u6027\u7684\u68C0\u67E5</h3><p>\u5728 TypeScript 3.4 \u53CA\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u4F1A\u51FA\u73B0\u786E\u5B9E\u4E0D\u5E94\u8BE5\u5B58\u5728\u7684\u591A\u4F59\u5C5E\u6027\u5374\u88AB\u5141\u8BB8\u5B58\u5728\u7684\u60C5\u51B5\u3002 \u4F8B\u5982\uFF0CTypeScript 3.4 \u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E0A\u5141\u8BB8\u4E0D\u6B63\u786E\u7684 <code>name</code> \u5C5E\u6027\uFF0C\u751A\u81F3\u5B83\u7684\u7C7B\u578B\u5728 <code>Point</code> \u548C <code>Label</code> \u4E4B\u4E2D\u90FD\u4E0D\u5339\u914D\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Label</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> thing<span class="token operator">:</span> Point <span class="token operator">|</span> Label <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// uh-oh!</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4EE5\u524D\uFF0C\u4E00\u4E2A\u65E0\u533A\u522B\u7684\u8054\u5408\u5728\u5B83\u7684\u6210\u5458\u4E0A\u4E0D\u4F1A\u8FDB\u884C_\u4EFB\u4F55_\u591A\u4F59\u5C5E\u6027\u7684\u68C0\u67E5\uFF0C\u7ED3\u679C\uFF0C\u7C7B\u578B\u9519\u8BEF\u7684 <code>name</code> \u5C5E\u6027\u6E9C\u4E86\u8FDB\u6765\u3002</p><p>\u5728 TypeScript 3.5 \u4E2D\uFF0C\u7C7B\u578B\u68C0\u67E5\u5668\u81F3\u5C11\u4F1A\u9A8C\u8BC1\u6240\u6709\u63D0\u4F9B\u7684\u5C5E\u6027\u5C5E\u4E8E_\u67D0\u4E2A_\u8054\u5408\u7C7B\u578B\u7684\u6210\u5458\uFF0C\u4E14\u7C7B\u578B\u6070\u5F53\uFF0C\u8FD9\u610F\u5473\u7740\uFF0C\u4E0A\u9762\u7684\u4F8B\u5B50\u4F1A\u6B63\u786E\u7684\u8FDB\u884C\u9519\u8BEF\u63D0\u793A\u3002</p><p>\u6CE8\u610F\uFF0C\u53EA\u8981\u5C5E\u6027\u7C7B\u578B\u6709\u6548\uFF0C\u4ECD\u5141\u8BB8\u90E8\u5206\u91CD\u53E0\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> pl<span class="token operator">:</span> Point <span class="token operator">|</span> Label <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;origin&quot;</span> <span class="token comment">// okay</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="allowumdglobalaccess-\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#allowumdglobalaccess-\u6807\u5FD7" aria-hidden="true">#</a> <code>--allowUmdGlobalAccess</code> \u6807\u5FD7</h2><p>\u5728 TypeScript 3.5 \u4E2D\uFF0C\u4F7F\u7528\u65B0\u7684 <code>--allowUmdGlobalAccess</code> \u6807\u5FD7\uFF0C\u4F60\u73B0\u5728\u53EF\u4EE5\u4ECE\u4EFB\u4F55\u4F4D\u7F6E\u5F15\u7528\u5168\u5C40\u7684 UMD \u7533\u660E\u2014\u2014\u751A\u81F3\u6A21\u5757\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u6A21\u5F0F\u589E\u52A0\u4E86\u6DF7\u5408\u548C\u5339\u914D\u7B2C\u4E09\u65B9\u5E93\u7684\u7075\u6D3B\u6027\uFF0C\u5176\u4E2D\u5E93\u58F0\u660E\u7684\u5168\u5C40\u53D8\u91CF\u603B\u662F\u53EF\u4EE5\u88AB\u4F7F\u7528\uFF0C\u751A\u81F3\u53EF\u4EE5\u4ECE\u6A21\u5757\u5185\u90E8\u4F7F\u7528\u3002</p>`,11),O=s("\u6709\u5173\u66F4\u591A\u7EC6\u8282\uFF0C"),E={href:"https://github.com/Microsoft/TypeScript/pull/30776/files",target:"_blank",rel:"noopener noreferrer"},I=s("\u67E5\u770B GitHub \u4E0A\u7684 pull request"),A=s("\u3002"),Q=t(`<h2 id="\u66F4\u667A\u80FD\u7684\u8054\u5408\u7C7B\u578B\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u66F4\u667A\u80FD\u7684\u8054\u5408\u7C7B\u578B\u68C0\u67E5" aria-hidden="true">#</a> \u66F4\u667A\u80FD\u7684\u8054\u5408\u7C7B\u578B\u68C0\u67E5</h2><p>\u5728 TypeScript 3.4 \u4EE5\u53CA\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u4E0B\u9762\u7684\u4F8B\u5B50\u4F1A\u65E0\u6548\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">S</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span> done<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">let</span> source<span class="token operator">:</span> <span class="token constant">S</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">let</span> target<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

target <span class="token operator">=</span> source<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u662F\u56E0\u4E3A <code>S</code> \u65E0\u6CD5\u88AB\u5206\u914D\u7ED9 <code>{ done: false, value: number }</code> \u6216\u8005 <code>{ done: true, value: number }</code>\u3002 \u4E3A\u5565\uFF1F \u56E0\u4E3A\u5C5E\u6027 <code>done</code> \u5728 <code>S</code> \u4E0D\u591F\u5177\u4F53\u2014\u2014\u4ED6\u662F <code>boolean</code>\u3002\u800C <code>T</code> \u7684\u7684\u6BCF\u4E2A\u6210\u5458\u6709\u4E00\u4E2A\u660E\u786E\u7684\u4E3A <code>true</code> \u6216\u8005 <code>false</code> \u5C5E\u6027 <code>done</code>\u3002</p><p>\u8FD9\u5C31\u662F\u6211\u4EEC\u5355\u72EC\u68C0\u67E5\u6BCF\u4E2A\u6210\u5458\u7684\u610F\u4E49\uFF1ATypeScript \u4E0D\u53EA\u662F\u5C06\u6BCF\u4E2A\u5C5E\u6027\u5408\u5E76\u5728\u4E00\u8D77\uFF0C\u770B\u770B\u662F\u5426\u53EF\u4EE5\u8D4B\u4E88 <code>S</code> \u3002</p><p>\u5982\u679C\u8FD9\u6837\u505A\uFF0C\u4E00\u4E9B\u7CDF\u7CD5\u7684\u4EE3\u7801\u53EF\u80FD\u4F1A\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// uh-oh - \u5E78\u8FD0\u7684\u662F\uFF0C TypeScript \u5728\u8FD9\u91CC\u4F1A\u63D0\u793A\u9519\u8BEF!</span>
<span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u7136\u800C\uFF0C\u5BF9\u4E8E\u539F\u59CB\u7684\u4F8B\u5B50\uFF0C\u8FD9\u6709\u70B9\u8FC7\u4E8E\u4E25\u683C\u3002 \u5982\u679C\u4F60\u5F04\u6E05\u9664 <code>S</code> \u7684\u4EFB\u4F55\u53EF\u80FD\u503C\u7684\u7CBE\u786E\u7C7B\u578B\uFF0C\u4F60\u5B9E\u9645\u4E0A\u53EF\u4EE5\u770B\u5230\u5B83\u4E0E <code>T</code> \u4E2D\u7684\u7C7B\u578B\u5B8C\u5168\u5339\u914D\u3002</p><p>\u5728 TypeScript 3.5 \u4E2D\uFF0C\u5F53\u5206\u914D\u5177\u6709\u8FA8\u522B\u5C5E\u6027\u7684\u7C7B\u578B\u65F6\uFF0C\u5982 <code>T</code>\uFF0C\u5B9E\u9645\u4E0A_\u5C06_\u8FDB\u4E00\u6B65\u5C06\u7C7B\u4F3C <code>S</code> \u7684\u7C7B\u578B\u5206\u89E3\u4E3A\u6BCF\u4E2A\u53EF\u80FD\u7684\u6210\u5458\u7C7B\u578B\u7684\u5E76\u96C6\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u7531\u4E8E <code>boolean</code> \u662F <code>true</code> \u548C <code>false</code> \u7684\u8054\u5408\uFF0C<code>S</code> \u5C06\u88AB\u89C6\u4E3A <code>{done\uFF1Afalse\uFF0Cvalue\uFF1Anumber}</code> \u548C <code>{done\uFF1Atrue\uFF0Cvalue\uFF1Anumber }</code>\u3002</p>`,9),j=s("\u6709\u5173\u66F4\u591A\u7EC6\u8282\uFF0C\u4F60\u53EF\u4EE5"),D={href:"https://github.com/microsoft/TypeScript/pull/30779",target:"_blank",rel:"noopener noreferrer"},R=s("\u5728 GitHub \u4E0A\u67E5\u770B\u539F\u59CB\u7684 pull request"),z=s("\u3002"),J=t(`<h2 id="\u6CDB\u578B\u6784\u9020\u51FD\u6570\u7684\u9AD8\u9636\u7C7B\u578B\u63A8\u65AD" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u6784\u9020\u51FD\u6570\u7684\u9AD8\u9636\u7C7B\u578B\u63A8\u65AD" aria-hidden="true">#</a> \u6CDB\u578B\u6784\u9020\u51FD\u6570\u7684\u9AD8\u9636\u7C7B\u578B\u63A8\u65AD</h2><p>\u5728 TypeScript 3.4 \u4E2D\uFF0C\u6211\u4EEC\u6539\u8FDB\u4E86\u5BF9\u8FD4\u56DE\u51FD\u6570\u7684\u6CDB\u578B\u51FD\u6570\u7684\u63A8\u65AD\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">compose</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token function-variable function">f</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token function-variable function">g</span><span class="token operator">:</span> <span class="token punctuation">(</span>y<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">V</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">=&gt;</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5C06\u5176\u4ED6\u6CDB\u578B\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">arrayify</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Box<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token constant">U</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">boxify</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>y<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span><span class="token operator">:</span> Box<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> y <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> newFn <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>arrayify<span class="token punctuation">,</span> boxify<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>TypeScript 3.4 \u7684\u63A8\u65AD\u5141\u8BB8 <code>newFn</code> \u662F\u6CDB\u578B\u7684\u3002\u5B83\u7684\u65B0\u7C7B\u578B\u662F <code>&lt;T&gt;\uFF08x\uFF1AT\uFF09=&gt; Box &lt;T []&gt;</code>\u3002\u800C\u4E0D\u662F\u65E7\u7248\u672C\u63A8\u65AD\u7684\uFF0C\u76F8\u5BF9\u65E0\u7528\u7684\u7C7B\u578B\uFF0C\u5982 <code>\uFF08x\uFF1A{}\uFF09=&gt; Box &lt;{} []&gt;</code>\u3002</p><p>TypeScript 3.5 \u5728\u5904\u7406\u6784\u9020\u51FD\u6570\u7684\u65F6\u5019\u63A8\u5E7F\u4E86\u8FD9\u79CD\u884C\u4E3A\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Box<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&quot;box&quot;</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bag<span class="token operator">&lt;</span><span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  kind<span class="token operator">:</span> <span class="token string">&quot;bag&quot;</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">composeCtor</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token constant">F</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">G</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token punctuation">(</span>y<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">V</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">G</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">F</span></span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">composeCtor</span><span class="token punctuation">(</span>Box<span class="token punctuation">,</span> Bag<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u62E5\u6709\u7C7B\u578B &#39;&lt;T&gt;(x: T) =&gt; Bag&lt;Box&lt;T&gt;&gt;&#39;</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u62E5\u6709\u7C7B\u578B &#39;Bag&lt;Box&lt;number&gt;&gt;&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u9664\u4E86\u4E0A\u9762\u7684\u7EC4\u5408\u6A21\u5F0F\u4E4B\u5916\uFF0C\u8FD9\u79CD\u5BF9\u6CDB\u578B\u6784\u9020\u51FD\u6570\u7684\u65B0\u63A8\u65AD\u610F\u5473\u7740\u5728\u67D0\u4E9B UI \u5E93\uFF08\u5982 React \uFF09\u4E2D\u5BF9\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u64CD\u4F5C\u7684\u51FD\u6570\u53EF\u4EE5\u66F4\u6B63\u786E\u5730\u5BF9\u6CDB\u578B\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u64CD\u4F5C\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ComponentClass<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Component<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">Component<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">myHoc</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token constant">C</span><span class="token operator">:</span> ComponentClass<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> ComponentClass<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">NestedProps<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> stuff<span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">GenericComponent<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span>NestedProps<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token comment">// \u7C7B\u578B\u4E3A &#39;new &lt;T&gt;(props: NestedProps&lt;T&gt;) =&gt; Component&lt;NestedProps&lt;T&gt;&gt;&#39;</span>
<span class="token keyword">const</span> GenericComponent2 <span class="token operator">=</span> <span class="token function">myHoc</span><span class="token punctuation">(</span>GenericComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,10),K=s("\u60F3\u5B66\u4E60\u66F4\u591A\uFF0C"),W={href:"https://github.com/microsoft/TypeScript/pull/31116",target:"_blank",rel:"noopener noreferrer"},X=s("\u5728 GitHub \u4E0A\u67E5\u770B\u539F\u59CB\u7684 pull requet"),Y=s("\u3002"),Z=n("h2",{id:"\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),s(" \u53C2\u8003")],-1),$={href:"https://github.com/microsoft/TypeScript-Handbook/blob/master/pages/release%20notes/TypeScript%203.5.md",target:"_blank",rel:"noopener noreferrer"},nn=s("\u539F\u6587");function sn(an,pn){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,n("p",null,[k,b,d,n("a",m,[g,p(a)]),h]),y,n("ul",null,[n("li",null,[n("a",_,[f,p(a)])]),n("li",null,[n("a",v,[w,T,x,p(a)])])]),S,n("p",null,[P,n("a",q,[C,U,B,p(a)]),G,n("a",V,[F,N,H,p(a)]),L]),M,n("p",null,[O,n("a",E,[I,p(a)]),A]),Q,n("p",null,[j,n("a",D,[R,p(a)]),z]),J,n("p",null,[K,n("a",W,[X,p(a)]),Y]),Z,n("ul",null,[n("li",null,[n("a",$,[nn,p(a)])])])],64)}var on=r(u,[["render",sn]]);export{on as default};
