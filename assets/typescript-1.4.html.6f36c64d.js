import{r as e,o,c,a as s,b as p,F as l,d as n,e as t}from"./app.0186264c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=s("h1",{id:"typescript-1-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typescript-1-4","aria-hidden":"true"},"#"),n(" TypeScript 1.4")],-1),k=n("\u5B8C\u6574\u7684\u7834\u574F\u6027\u6539\u52A8\u5217\u8868\u8BF7\u5230\u8FD9\u91CC\u67E5\u770B:"),d={href:"https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+milestone%3A%22TypeScript+1.4%22+label%3A%22breaking+change%22",target:"_blank",rel:"noopener noreferrer"},m=n("breaking change issues"),b=n("\u3002"),g=n("\u9605\u8BFB"),y={href:"https://github.com/Microsoft/TypeScript/issues/868",target:"_blank",rel:"noopener noreferrer"},f=n("issue #868"),h=n("\u4EE5\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u8054\u5408\u7C7B\u578B\u7684\u7834\u574F\u6027\u6539\u52A8\u3002"),v=t(`<h2 id="\u591A\u4E2A\u6700\u4F73\u901A\u7528\u7C7B\u578B\u5019\u9009" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u6700\u4F73\u901A\u7528\u7C7B\u578B\u5019\u9009" aria-hidden="true">#</a> \u591A\u4E2A\u6700\u4F73\u901A\u7528\u7C7B\u578B\u5019\u9009</h2><p>\u5F53\u6709\u591A\u4E2A\u6700\u4F73\u901A\u7528\u7C7B\u578B\u53EF\u7528\u65F6\uFF0C\u73B0\u5728\u7F16\u8BD1\u5668\u4F1A\u505A\u51FA\u9009\u62E9\uFF08\u4F9D\u636E\u7F16\u8BD1\u5668\u7684\u5177\u4F53\u5B9E\u73B0\uFF09\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u7B2C\u4E00\u4E2A\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> a<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E4B\u524D { x: number; z?: number; }[]</span>
<span class="token comment">// \u73B0\u5728 { x: number; y?: number; }[]</span>
<span class="token keyword">var</span> bs <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u4F1A\u5728\u591A\u79CD\u60C5\u51B5\u4E0B\u53D1\u751F\u3002\u5177\u6709\u4E00\u7EC4\u5171\u4EAB\u7684\u5FC5\u9700\u5C5E\u6027\u548C\u4E00\u7EC4\u5176\u5B83\u4E92\u65A5\u7684\uFF08\u53EF\u9009\u6216\u5176\u5B83\uFF09\u5C5E\u6027\uFF0C\u7A7A\u7C7B\u578B\uFF0C\u517C\u5BB9\u7684\u7B7E\u540D\u7C7B\u578B\uFF08\u5305\u62EC\u6CDB\u578B\u548C\u975E\u6CDB\u578B\u7B7E\u540D\uFF0C\u5F53\u7C7B\u578B\u53C2\u6570\u4E0A\u5E94\u7528\u4E86<code>any</code>\u65F6\uFF09\u3002</p><p><strong>\u63A8\u8350</strong> \u4F7F\u7528\u7C7B\u578B\u6CE8\u89E3\u6307\u5B9A\u4F60\u8981\u4F7F\u7528\u7684\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> bs<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u6CDB\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u63A5\u53E3" aria-hidden="true">#</a> \u6CDB\u578B\u63A5\u53E3</h2><p>\u5F53\u5728\u591A\u4E2AT\u7C7B\u578B\u7684\u53C2\u6570\u4E0A\u4F7F\u7528\u4E86\u4E0D\u540C\u7684\u7C7B\u578B\u65F6\u4F1A\u5F97\u5230\u4E00\u4E2A\u9519\u8BEF\uFF0C\u5C31\u7B97\u662F\u6DFB\u52A0\u7EA6\u675F\u4E5F\u4E0D\u884C\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">foo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// r used to be {}, now this is an error</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6DFB\u52A0\u7EA6\u675F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> x <span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Giraffe</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> y <span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Elephant</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> z <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">f</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Animal<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">var</span> g<span class="token operator">:</span> Giraffe<span class="token punctuation">;</span>
<span class="token keyword">var</span> e<span class="token operator">:</span> Elephant<span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,11),_=n("\u5728\u8FD9\u91CC\u67E5\u770B"),w={href:"https://github.com/Microsoft/TypeScript/pull/824#discussion_r18665727",target:"_blank",rel:"noopener noreferrer"},x=n("\u8BE6\u7EC6\u89E3\u91CA"),T=n("\u3002"),A=t(`<p><strong>\u63A8\u8350</strong> \u5982\u679C\u8FD9\u79CD\u4E0D\u5339\u914D\u7684\u884C\u4E3A\u662F\u6545\u610F\u4E3A\u4E4B\uFF0C\u90A3\u4E48\u660E\u786E\u6307\u5B9A\u7C7B\u578B\u53C2\u6570\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token generic-function"><span class="token function">foo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Emulates 1.0 behavior</span>
<span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token generic-function"><span class="token function">foo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Most useful</span>
<span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token generic-function"><span class="token function">foo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Easiest</span>
<span class="token generic-function"><span class="token function">f</span><span class="token generic class-name"><span class="token operator">&lt;</span>Animal<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>_\u6216_\u91CD\u5199\u51FD\u6570\u5B9A\u4E49\u6307\u660E\u5C31\u7B97\u4E0D\u5339\u914D\u4E5F\u6CA1\u95EE\u9898\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">foo</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span><span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token constant">U</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token operator">|</span><span class="token constant">U</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">f</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Animal<span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> Animal<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token operator">|</span><span class="token constant">U</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u6CDB\u578B\u5269\u4F59\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u5269\u4F59\u53C2\u6570" aria-hidden="true">#</a> \u6CDB\u578B\u5269\u4F59\u53C2\u6570</h2><p>\u4E0D\u80FD\u518D\u4F7F\u7528\u6DF7\u6742\u7684\u53C2\u6570\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">makeArray</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token operator">...</span>items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> items<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token keyword">var</span> r <span class="token operator">=</span> <span class="token function">makeArray</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// used to return {}[], now an error</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>new Array(...)</code>\u4E5F\u4E00\u6837</p><p><strong>\u63A8\u8350</strong> \u58F0\u660E\u5411\u540E\u517C\u5BB9\u7684\u7B7E\u540D\uFF0C\u5982\u679C1.0\u7684\u884C\u4E3A\u662F\u4F60\u60F3\u8981\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">makeArray</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token operator">...</span>items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">makeArray</span><span class="token punctuation">(</span><span class="token operator">...</span>items<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">makeArray</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token operator">...</span>items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> items<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5E26\u7C7B\u578B\u53C2\u6570\u63A5\u53E3\u7684\u91CD\u8F7D\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u5E26\u7C7B\u578B\u53C2\u6570\u63A5\u53E3\u7684\u91CD\u8F7D\u89E3\u6790" aria-hidden="true">#</a> \u5E26\u7C7B\u578B\u53C2\u6570\u63A5\u53E3\u7684\u91CD\u8F7D\u89E3\u6790</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> f10<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> r9 <span class="token operator">=</span> <span class="token function">f10</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// r9 was any, now this is an error</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u63A8\u8350</strong> \u624B\u52A8\u6307\u5B9A\u4E00\u4E2A\u7C7B\u578B\u53C2\u6570</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> r9 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">f10</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u7C7B\u58F0\u660E\u4E0E\u7C7B\u578B\u8868\u8FBE\u5F0F\u4EE5\u4E25\u683C\u6A21\u5F0F\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u58F0\u660E\u4E0E\u7C7B\u578B\u8868\u8FBE\u5F0F\u4EE5\u4E25\u683C\u6A21\u5F0F\u89E3\u6790" aria-hidden="true">#</a> \u7C7B\u58F0\u660E\u4E0E\u7C7B\u578B\u8868\u8FBE\u5F0F\u4EE5\u4E25\u683C\u6A21\u5F0F\u89E3\u6790</h2><p>ECMAScript 2015\u8BED\u8A00\u89C4\u8303(ECMA-262 6th Edition)\u6307\u660E_ClassDeclaration_\u548C_ClassExpression_\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\u3002 \u56E0\u6B64\uFF0C\u5728\u89E3\u6790\u7C7B\u58F0\u660E\u6216\u7C7B\u8868\u8FBE\u5F0F\u65F6\u5C06\u4F7F\u7528\u989D\u5916\u7684\u9650\u5236\u3002</p><p>\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">implements</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// Invalid: implements is a reserved word in strict mode</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span>arguments<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// Invalid: &quot;arguments&quot; is not allow as a function argument</span>
        <span class="token keyword">var</span> eval <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>      <span class="token comment">// Invalid: &quot;eval&quot; is not allowed as the left-hand-side expression</span>
        arguments <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">// Invalid: arguments object is immutable</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5173\u4E8E\u4E25\u683C\u6A21\u5F0F\u9650\u5236\u7684\u5B8C\u6574\u5217\u8868\uFF0C\u8BF7\u9605\u8BFB Annex C - The Strict Mode of ECMAScript of ECMA-262 6th Edition\u3002</p>`,19);function q(E,C){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,s("p",null,[k,s("a",d,[m,p(a)]),b]),s("p",null,[g,s("a",y,[f,p(a)]),h]),v,s("p",null,[_,s("a",w,[x,p(a)]),T]),A],64)}var I=r(u,[["render",q]]);export{I as default};
