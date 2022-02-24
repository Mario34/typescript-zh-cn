import{o as n,c as s,e as a}from"./app.fed89489.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const p={},o={class:"language-typescript ext-ts line-numbers-mode"},t=a(`<pre class="language-typescript"><code><span class="token comment">// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]</span>
<span class="token comment">// Project: [~THE PROJECT NAME~]</span>
<span class="token comment">// Definitions by: [~YOUR NAME~] &lt;[~A URL FOR YOU~]&gt;</span>

<span class="token comment">/*~ This is the module plugin template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for &quot;super-greeter&quot;, this
 *~ file should be &#39;super-greeter/index.d.ts&#39;
 */</span>

<span class="token comment">/*~ On this line, import the module which this module adds to */</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> m <span class="token keyword">from</span> <span class="token string">&#39;someModule&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/*~ You can also import other modules if needed */</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> other <span class="token keyword">from</span> <span class="token string">&#39;anotherModule&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/*~ Here, declare the same module as the one you imported above */</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;someModule&#39;</span> <span class="token punctuation">{</span>
    <span class="token comment">/*~ Inside, add new function, classes, or variables. You can use
     *~ unexported types from the original module if needed. */</span>
    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">theNewMethod</span><span class="token punctuation">(</span>x<span class="token operator">:</span> m<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token operator">:</span> other<span class="token punctuation">.</span>bar<span class="token punctuation">;</span>

    <span class="token comment">/*~ You can also add new properties to existing interfaces from
     *~ the original module by writing interface augmentations */</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SomeModuleOptions</span> <span class="token punctuation">{</span>
        someModuleSetting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*~ New types can also be declared and will appear as if they
     *~ are in the original module */</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MyModulePluginOptions</span> <span class="token punctuation">{</span>
        size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div>`,2),l=[t];function r(c,i){return n(),s("div",o,l)}var b=e(p,[["render",r]]);export{b as default};
