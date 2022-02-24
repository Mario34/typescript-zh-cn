import{e as n}from"./app.fed89489.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u793A\u4F8B\uFF0C\u5F53\u4F60\u60F3\u8981\u5904\u7406\u5982\u4E0B\u7684 JavaScriptr \u7684\u4EE3\u7801\u65F6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> Greeter <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;super-greeter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> greeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
greeter<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u80FD\u591F\u540C\u65F6\u5904\u7406UMD\u5BFC\u5165\u548C\u6A21\u5757\u5BFC\u5165\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]</span>
<span class="token comment">// Project: [~THE PROJECT NAME~]</span>
<span class="token comment">// Definitions by: [~YOUR NAME~] &lt;[~A URL FOR YOU~]&gt;</span>

<span class="token comment">/*~ This is the module template file for class modules.
 *~ You should rename it to index.d.ts and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for &quot;super-greeter&quot;, this
 *~ file should be &#39;super-greeter/index.d.ts&#39;
 */</span>

<span class="token comment">// Note that ES6 modules cannot directly export class objects.</span>
<span class="token comment">// This file should be imported using the CommonJS-style:</span>
<span class="token comment">//   import x = require(&#39;[~THE MODULE~]&#39;);</span>
<span class="token comment">//</span>
<span class="token comment">// Alternatively, if --allowSyntheticDefaultImports or</span>
<span class="token comment">// --esModuleInterop is turned on, this file can also be</span>
<span class="token comment">// imported as a default import:</span>
<span class="token comment">//   import x from &#39;[~THE MODULE~]&#39;;</span>
<span class="token comment">//</span>
<span class="token comment">// Refer to the TypeScript documentation at</span>
<span class="token comment">// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require</span>
<span class="token comment">// to understand common workarounds for this limitation of ES6 modules.</span>

<span class="token comment">/*~ If this module is a UMD module that exposes a global variable &#39;myClassLib&#39; when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> myClassLib<span class="token punctuation">;</span>

<span class="token comment">/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */</span>
<span class="token keyword">export</span> <span class="token operator">=</span> MyClass<span class="token punctuation">;</span>

<span class="token comment">/*~ Write your module&#39;s methods and properties in this class */</span>
<span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>customGreeting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    greet<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

    <span class="token function">myMethod</span><span class="token punctuation">(</span>opts<span class="token operator">:</span> MyClass<span class="token punctuation">.</span>MyClassMethodOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 *~
 *~ Note that if you decide to include this namespace, the module can be
 *~ incorrectly imported as a namespace object, unless
 *~ --esModuleInterop is turned on:
 *~   import * as x from &#39;[~THE MODULE~]&#39;; // WRONG! DO NOT DO THIS!
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> MyClass <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MyClassMethodOptions</span> <span class="token punctuation">{</span>
        width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,4);function p(t,o){return e}var c=s(a,[["render",p]]);export{c as default};
