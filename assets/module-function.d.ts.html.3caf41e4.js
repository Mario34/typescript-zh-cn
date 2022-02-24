import{o as n,c as s,e as a}from"./app.0186264c.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const p={},t={class:"language-typescript ext-ts line-numbers-mode"},o=a(`<pre class="language-typescript"><code><span class="token comment">// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]</span>
<span class="token comment">// Project: [~THE PROJECT NAME~]</span>
<span class="token comment">// Definitions by: [~YOUR NAME~] &lt;[~A URL FOR YOU~]&gt;</span>

<span class="token comment">/*~ This is the module template file for function modules.
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

<span class="token comment">/*~ If this module is a UMD module that exposes a global variable &#39;myFuncLib&#39; when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> myFuncLib<span class="token punctuation">;</span>

<span class="token comment">/*~ This declaration specifies that the function
 *~ is the exported object from the file
 */</span>
<span class="token keyword">export</span> <span class="token operator">=</span> MyFunction<span class="token punctuation">;</span>

<span class="token comment">/*~ This example shows how to have multiple overloads for your function */</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">MyFunction</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> MyFunction<span class="token punctuation">.</span>NamedReturnType<span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">MyFunction</span><span class="token punctuation">(</span>length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> MyFunction<span class="token punctuation">.</span>LengthReturnType<span class="token punctuation">;</span>

<span class="token comment">/*~ If you want to expose types from your module as well, you can
 *~ place them in this block. Often you will want to describe the
 *~ shape of the return type of the function; that type should
 *~ be declared in here, as this example shows.
 *~
 *~ Note that if you decide to include this namespace, the module can be
 *~ incorrectly imported as a namespace object, unless
 *~ --esModuleInterop is turned on:
 *~   import * as x from &#39;[~THE MODULE~]&#39;; // WRONG! DO NOT DO THIS!
 */</span>
<span class="token keyword">declare</span> <span class="token keyword">namespace</span> MyFunction <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">LengthReturnType</span> <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">NamedReturnType</span> <span class="token punctuation">{</span>
        firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*~ If the module also has properties, declare them here. For example,
     *~ this declaration says that this code is legal:
     *~   import f = require(&#39;myFuncLibrary&#39;);
     *~   console.log(f.defaultName);
     */</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> defaultName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> defaultLength<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div>`,2),l=[o];function r(c,i){return n(),s("div",t,l)}var b=e(p,[["render",r]]);export{b as default};
