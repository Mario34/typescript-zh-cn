import{e as n}from"./app.0186264c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="global-modifying-module-d-ts" tabindex="-1"><a class="header-anchor" href="#global-modifying-module-d-ts" aria-hidden="true">#</a> global-modifying-module.d.ts</h1><h2 id="\u4FEE\u6539\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u6A21\u5757" aria-hidden="true">#</a> \u4FEE\u6539\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u6A21\u5757</h2><p>\u5BF9\u4E8E\u4FEE\u6539\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u6A21\u5757\u6765\u8BB2\uFF0C\u5728\u5BFC\u5165\u5B83\u4EEC\u65F6\uFF0C\u4F1A\u5BF9\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u503C\u8FDB\u884C\u4FEE\u6539\u3002 \u6BD4\u5982\u5B58\u5728\u67D0\u4E2A\u4EE3\u7801\u5E93\uFF0C\u5F53\u5BFC\u5165\u5B83\u65F6\uFF0C\u5B83\u4F1A\u5411<code>String.prototype</code>\u4E0A\u6DFB\u52A0\u65B0\u7684\u6210\u5458\u3002 \u8BE5\u6A21\u5F0F\u5B58\u5728\u5371\u9669\uFF0C\u56E0\u4E3A\u5B83\u6709\u5BFC\u81F4\u8FD0\u884C\u65F6\u51B2\u7A81\u7684\u53EF\u80FD\u6027\uFF0C \u4F46\u6211\u4EEC\u4ECD\u7136\u53EF\u4EE5\u4E3A\u5176\u7F16\u5199\u58F0\u660E\u6587\u4EF6\u3002</p><h2 id="\u8BC6\u522B\u51FA\u4FEE\u6539\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u8BC6\u522B\u51FA\u4FEE\u6539\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u6A21\u5757" aria-hidden="true">#</a> \u8BC6\u522B\u51FA\u4FEE\u6539\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u6A21\u5757</h2><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6587\u6863\u6765\u8BC6\u522B\u4FEE\u6539\u4E86\u5168\u5C40\u4F5C\u7528\u57DF\u7684\u6A21\u5757\u3002 \u901A\u5E38\u6765\u8BB2\uFF0C\u5B83\u4EEC\u4E0E\u5168\u5C40\u63D2\u4EF6\u7C7B\u4F3C\uFF0C\u4F46\u662F\u9700\u8981<code>require</code>\u8BED\u53E5\u6765\u6FC0\u6D3B\u3002</p><p>\u4F60\u53EF\u80FD\u770B\u5230\u8FC7\u5982\u4E0B\u7684\u6587\u6863\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// &#39;require&#39; call that doesn&#39;t use its return value</span>
<span class="token keyword">var</span> unused <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;magic-string-time&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* or */</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;magic-string-time&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token string">&#39;hello, world&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Creates new methods on built-in types</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">startsWithHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// Creates new methods on built-in types</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span><span class="token function">reverseAndSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]</span>
<span class="token comment">// Project: [~THE PROJECT NAME~]</span>
<span class="token comment">// Definitions by: [~YOUR NAME~] &lt;[~A URL FOR YOU~]&gt;</span>

<span class="token comment">/*~ This is the global-modifying module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for &quot;super-greeter&quot;, this
 *~ file should be &#39;super-greeter/index.d.ts&#39;
 */</span>

<span class="token comment">/*~ Note: If your global-modifying module is callable or constructable, you&#39;ll
 *~ need to combine the patterns here with those in the module-class or module-function
 *~ template files
 */</span>
<span class="token keyword">declare</span> global <span class="token punctuation">{</span>
    <span class="token comment">/*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */</span>
    <span class="token keyword">interface</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
        <span class="token function">fancyFormat</span><span class="token punctuation">(</span>opts<span class="token operator">:</span> StringFormatOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*~ If your module exports types or values, write them as usual */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">StringFormatOptions</span> <span class="token punctuation">{</span>
    fancinessLevel<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*~ For example, declaring a method on the module (in addition to its global side effects) */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

<span class="token comment">/*~ If your module exports nothing, you&#39;ll need this line. Otherwise, delete it */</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,9);function p(t,o){return e}var r=s(a,[["render",p]]);export{r as default};
