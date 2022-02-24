import{o as n,c as s,e as a}from"./app.fed89489.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const p={},o={class:"language-typescript ext-ts line-numbers-mode"},t=a(`<pre class="language-typescript"><code><span class="token comment">// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]</span>
<span class="token comment">// Project: [~THE PROJECT NAME~]</span>
<span class="token comment">// Definitions by: [~YOUR NAME~] &lt;[~A URL FOR YOU~]&gt;</span>

<span class="token comment">/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for &quot;super-greeter&quot;, this
 *~ file should be &#39;super-greeter/index.d.ts&#39;
 */</span>

<span class="token comment">/*~ If this module is a UMD module that exposes a global variable &#39;myLib&#39; when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">as</span> <span class="token keyword">namespace</span> myLib<span class="token punctuation">;</span>

<span class="token comment">/*~ If this module has methods, declare them as functions like so.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myMethod</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myOtherMethod</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token comment">/*~ You can declare types that are available via importing the module */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">someType</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    extras<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*~ You can declare properties of the module using const, let, or var */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> myField<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token comment">/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a &#39;namespace&#39;.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">namespace</span> subProp <span class="token punctuation">{</span>
    <span class="token comment">/*~ For example, given this definition, someone could write:
     *~   import { subProp } from &#39;yourModule&#39;;
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from &#39;yourModule&#39;;
     *~   yourMod.subProp.foo();
     */</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div>`,2),l=[t];function r(c,i){return n(),s("div",o,l)}var b=e(p,[["render",r]]);export{b as default};
