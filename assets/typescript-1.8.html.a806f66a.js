import{r as o,o as p,c,a as s,b as e,F as l,d as n,e as t}from"./app.0186264c.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=s("h1",{id:"typescript-1-8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typescript-1-8","aria-hidden":"true"},"#"),n(" TypeScript 1.8")],-1),d=n("\u5B8C\u6574\u7684\u7834\u574F\u6027\u6539\u52A8\u5217\u8868\u8BF7\u5230\u8FD9\u91CC\u67E5\u770B:"),k={href:"https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+milestone%3A%22TypeScript+1.8%22+label%3A%22Breaking+Change%22+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"},b=n("breaking change issues"),_=n("\u3002"),h=s("h2",{id:"\u73B0\u5728\u751F\u6210\u6A21\u5757\u4EE3\u7801\u65F6\u4F1A\u5E26\u6709-use-strict-\u5934",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u73B0\u5728\u751F\u6210\u6A21\u5757\u4EE3\u7801\u65F6\u4F1A\u5E26\u6709-use-strict-\u5934","aria-hidden":"true"},"#"),n(" \u73B0\u5728\u751F\u6210\u6A21\u5757\u4EE3\u7801\u65F6\u4F1A\u5E26\u6709"),s("code",null,'"use strict";'),n("\u5934")],-1),m=n("\u5728ES6\u6A21\u5F0F\u4E0B\u6A21\u5757\u603B\u662F\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\u89E3\u6790\uFF0C\u5BF9\u4E8E\u751F\u6210\u76EE\u6807\u4E3A\u975EES6\u7684\u5374\u4E0D\u662F\u8FD9\u6837\u3002\u4ECETypeScript 1.8\u5F00\u59CB\uFF0C\u751F\u6210\u7684\u6A21\u5757\u5C06\u603B\u4E3A\u4E25\u683C\u6A21\u5F0F\u3002\u8FD9\u5E94\u8BE5\u4E0D\u4F1A\u5BF9\u73B0\u6709\u7684\u5927\u90E8\u5206\u4EE3\u7801\u4EA7\u751F\u5F71\u54CD\uFF0C\u56E0\u4E3ATypeScript\u628A\u5927\u591A\u6570\u56E0\u4E3A\u4E25\u683C\u6A21\u5F0F\u800C\u4EA7\u751F\u7684\u9519\u8BEF\u5F53\u505A\u7F16\u8BD1\u65F6\u9519\u8BEF\uFF0C\u4F46\u8FD8\u662F\u6709\u4E00\u4E9B\u5728\u8FD0\u884C\u65F6\u624D\u53D1\u751F\u9519\u8BEF\u7684TypeScript\u4EE3\u7801\uFF0C\u6BD4\u5982\u8D4B\u503C\u7ED9"),g=s("code",null,"NaN",-1),y=n("\uFF0C\u73B0\u5728\u5C06\u4F1A\u76F4\u63A5\u62A5\u9519\u3002\u4F60\u53EF\u4EE5\u53C2\u8003"),f={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",target:"_blank",rel:"noopener noreferrer"},w=n("MDN Article"),T=n("\u5B66\u4E60\u5173\u4E8E\u4E25\u683C\u6A21\u5F0F\u4E0E\u975E\u4E25\u683C\u6A21\u5F0F\u7684\u533A\u522B\u3002"),x=t(`<p>\u82E5\u60F3\u7981\u7528\u8FD9\u4E2A\u884C\u4E3A\uFF0C\u5728\u547D\u4EE4\u884C\u91CC\u4F20<code>--noImplicitUseStrict</code>\u9009\u9879\u6216\u5728tsconfig.json\u6587\u4EF6\u91CC\u6307\u5B9A\u3002</p><h2 id="\u4ECE\u6A21\u5757\u91CC\u5BFC\u51FA\u975E\u5C40\u90E8\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u6A21\u5757\u91CC\u5BFC\u51FA\u975E\u5C40\u90E8\u540D\u79F0" aria-hidden="true">#</a> \u4ECE\u6A21\u5757\u91CC\u5BFC\u51FA\u975E\u5C40\u90E8\u540D\u79F0</h2><p>\u4F9D\u636EES6/ES2015\u89C4\u8303\uFF0C\u4ECE\u6A21\u5757\u91CC\u5BFC\u51FA\u975E\u5C40\u90E8\u540D\u79F0\u5C06\u4F1A\u62A5\u9519\u3002</p><p><strong>\u4F8B\u5B50</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token builtin">Promise</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u63A8\u8350</strong></p><p>\u5728\u5BFC\u51FA\u4E4B\u524D\uFF0C\u4F7F\u7528\u5C40\u90E8\u53D8\u91CF\u58F0\u660E\u6355\u83B7\u90A3\u4E2A\u5168\u5C40\u540D\u79F0\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> localPromise <span class="token operator">=</span> <span class="token builtin">Promise</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> localPromise <span class="token keyword">as</span> <span class="token builtin">Promise</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u9ED8\u8BA4\u542F\u7528\u4EE3\u7801\u53EF\u8FBE\u6027-reachability-\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u542F\u7528\u4EE3\u7801\u53EF\u8FBE\u6027-reachability-\u68C0\u67E5" aria-hidden="true">#</a> \u9ED8\u8BA4\u542F\u7528\u4EE3\u7801\u53EF\u8FBE\u6027\uFF08Reachability\uFF09\u68C0\u67E5</h2>`,9),v=n("TypeScript 1.8\u91CC\uFF0C\u6211\u4EEC\u6DFB\u52A0\u4E86\u4E00\u4E9B"),S={href:"https://github.com/Microsoft/TypeScript/pull/4788",target:"_blank",rel:"noopener noreferrer"},M=n("\u53EF\u8FBE\u6027\u68C0\u67E5"),E=n("\u6765\u963B\u6B62\u4E00\u4E9B\u79CD\u7C7B\u7684\u9519\u8BEF\u3002\u7279\u522B\u662F\uFF1A"),L=t(`<ol><li><p>\u68C0\u67E5\u4EE3\u7801\u7684\u53EF\u8FBE\u6027\uFF08\u9ED8\u8BA4\u542F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>allowUnreachableCode</code>\u7F16\u8BD1\u5668\u9009\u9879\u7981\u7528\uFF09</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>   <span class="token keyword">function</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
       <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// error here</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">function</span> <span class="token function">test2</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">else</span> <span class="token punctuation">{</span>
           <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;NYI&quot;</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// error here</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li><li><p>\u68C0\u67E5\u6807\u7B7E\u662F\u5426\u88AB\u4F7F\u7528\uFF08\u9ED8\u8BA4\u542F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>allowUnusedLabels</code>\u7F16\u8BD1\u5668\u9009\u9879\u7981\u7528\uFF09</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>l<span class="token operator">:</span> <span class="token comment">// error will be reported - label \`l\` is unused</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> x<span class="token operator">:</span>x <span class="token punctuation">}</span> <span class="token comment">// error will be reported - label \`x\` is unused</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u68C0\u67E5\u662F\u5426\u51FD\u6570\u91CC\u6240\u6709\u5E26\u6709\u8FD4\u56DE\u503C\u7C7B\u578B\u6CE8\u89E3\u7684\u4EE3\u7801\u8DEF\u5F84\u90FD\u8FD4\u56DE\u4E86\u503C\uFF08\u9ED8\u8BA4\u542F\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>noImplicitReturns</code>\u7F16\u8BD1\u5668\u9009\u9879\u7981\u7528\uFF09</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// error will be reported since function does not return anything explicitly when \`x\` is falsy.</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>\u68C0\u67E5\u63A7\u5236\u6D41\u662F\u5426\u80FD\u8FDB\u5230switch\u8BED\u53E5\u7684case\u91CC\uFF08\u9ED8\u8BA4\u7981\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>noFallthroughCasesInSwitch</code>\u7F16\u8BD1\u5668\u9009\u9879\u542F\u7528\uFF09\u3002\u6CE8\u610F\u6CA1\u6709\u8BED\u53E5\u7684case\u4E0D\u4F1A\u88AB\u68C0\u67E5\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// OK</span>
   <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
       <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
   <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
       <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li></ol><p>\u5982\u679C\u4F60\u770B\u5230\u4E86\u8FD9\u4E9B\u9519\u8BEF\uFF0C\u4F46\u662F\u4F60\u8BA4\u4E3A\u8FD9\u65F6\u7684\u4EE3\u7801\u662F\u5408\u7406\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u7F16\u8BD1\u9009\u9879\u6765\u963B\u6B62\u62A5\u9519\u3002</p><h2 id="module\u4E0D\u5141\u8BB8\u4E0E-outfile\u4E00\u8D77\u51FA\u73B0-\u9664\u975E-module\u88AB\u6307\u5B9A\u4E3Aamd\u6216system" tabindex="-1"><a class="header-anchor" href="#module\u4E0D\u5141\u8BB8\u4E0E-outfile\u4E00\u8D77\u51FA\u73B0-\u9664\u975E-module\u88AB\u6307\u5B9A\u4E3Aamd\u6216system" aria-hidden="true">#</a> <code>--module</code>\u4E0D\u5141\u8BB8\u4E0E<code>--outFile</code>\u4E00\u8D77\u51FA\u73B0\uFF0C\u9664\u975E <code>--module</code>\u88AB\u6307\u5B9A\u4E3A<code>amd</code>\u6216<code>system</code></h2><p>\u4E4B\u524D\u4F7F\u7528\u6A21\u5757\u6307\u5B9A\u8FD9\u4E24\u4E2A\u7684\u65F6\u5019\uFF0C\u4F1A\u751F\u6210\u7A7A\u7684<code>out</code>\u6587\u4EF6\u4E14\u4E0D\u4F1A\u62A5\u9519\u3002</p><h2 id="\u6807\u51C6\u5E93\u91CC\u7684dom-api\u53D8\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u5E93\u91CC\u7684dom-api\u53D8\u52A8" aria-hidden="true">#</a> \u6807\u51C6\u5E93\u91CC\u7684DOM API\u53D8\u52A8</h2>`,5),H=s("strong",null,"ImageData.data",-1),I=n("\u73B0\u5728\u7684\u7C7B\u578B\u4E3A"),B=s("code",null,"Uint8ClampedArray",-1),C=n("\u800C\u4E0D\u662F"),D=s("code",null,"number[]",-1),N=n("\u3002\u67E5\u770B"),R={href:"https://github.com/Microsoft/TypeScript/issues/949",target:"_blank",rel:"noopener noreferrer"},A=n("#949"),P=n("\u3002"),F=s("strong",null,"HTMLSelectElement .options",-1),U=n("\u73B0\u5728\u7684\u7C7B\u578B\u4E3A"),O=s("code",null,"HTMLCollection",-1),V=n("\u800C\u4E0D\u662F"),W=s("code",null,"HTMLSelectElement",-1),j=n("\u3002\u67E5\u770B"),q={href:"https://github.com/Microsoft/TypeScript/issues/1558",target:"_blank",rel:"noopener noreferrer"},z=n("#1558"),J=n("\u3002"),K=t("<strong>HTMLTableElement.createCaption</strong>\uFF0C<strong>HTMLTableElement.createTBody</strong>\uFF0C<strong>HTMLTableElement.createTFoot</strong>\uFF0C<strong>HTMLTableElement.createTHead</strong>\uFF0C<strong>HTMLTableElement.insertRow</strong>\uFF0C<strong>HTMLTableSectionElement.insertRow</strong>\u548C<strong>HTMLTableElement.insertRow</strong>\u73B0\u5728\u8FD4\u56DE<code>HTMLTableRowElement</code>\u800C\u4E0D\u662F<code>HTMLElement</code>\u3002\u67E5\u770B",18),Y={href:"https://github.com/Microsoft/TypeScript/issues/3583",target:"_blank",rel:"noopener noreferrer"},G=n("#3583"),Q=n("\u3002"),X=s("strong",null,"HTMLTableRowElement.insertCell",-1),Z=n("\u73B0\u5728\u8FD4\u56DE"),$=s("code",null,"HTMLTableCellElement",-1),ss=n("\u800C\u4E0D\u662F"),ns=s("code",null,"HTMLElement",-1),as=n("\u67E5\u770B"),es={href:"https://github.com/Microsoft/TypeScript/issues/3583",target:"_blank",rel:"noopener noreferrer"},ts=n("#3583"),os=n("\u3002"),ps=s("strong",null,"IDBObjectStore.createIndex",-1),cs=n("\u548C"),ls=s("strong",null,"IDBDatabase.createIndex",-1),rs=n("\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7C7B\u578B\u4E3A"),is=s("code",null,"IDBObjectStoreParameters",-1),us=n("\u800C\u4E0D\u662F"),ds=s("code",null,"any",-1),ks=n("\u3002\u67E5\u770B"),bs={href:"https://github.com/Microsoft/TypeScript/issues/5932",target:"_blank",rel:"noopener noreferrer"},_s=n("#5932"),hs=n("\u3002"),ms=s("strong",null,"DataTransferItemList.Item",-1),gs=n("\u8FD4\u56DE\u503C\u7C7B\u578B\u53D8\u4E3A"),ys=s("code",null,"DataTransferItem",-1),fs=n("\u800C\u4E0D\u662F"),ws=s("code",null,"File",-1),Ts=n("\u3002\u67E5\u770B"),xs={href:"https://github.com/Microsoft/TypeScript/issues/6106",target:"_blank",rel:"noopener noreferrer"},vs=n("#6106"),Ss=n("\u3002"),Ms=s("strong",null,"Window.open",-1),Es=n("\u8FD4\u56DE\u503C\u7C7B\u578B\u53D8\u4E3A"),Ls=s("code",null,"Window",-1),Hs=n("\u800C\u4E0D\u662F"),Is=s("code",null,"any",-1),Bs=n("\u3002\u67E5\u770B"),Cs={href:"https://github.com/Microsoft/TypeScript/issues/6418",target:"_blank",rel:"noopener noreferrer"},Ds=n("#6418"),Ns=n("\u3002"),Rs=s("strong",null,"WeakMap.clear",-1),As=n("\u88AB\u79FB\u9664\u3002\u67E5\u770B"),Ps={href:"https://github.com/Microsoft/TypeScript/issues/6500",target:"_blank",rel:"noopener noreferrer"},Fs=n("#6500"),Us=n("\u3002"),Os=t(`<h2 id="\u5728super-call\u4E4B\u524D\u4E0D\u5141\u8BB8\u4F7F\u7528this" tabindex="-1"><a class="header-anchor" href="#\u5728super-call\u4E4B\u524D\u4E0D\u5141\u8BB8\u4F7F\u7528this" aria-hidden="true">#</a> \u5728super-call\u4E4B\u524D\u4E0D\u5141\u8BB8\u4F7F\u7528<code>this</code></h2><p>ES6\u4E0D\u5141\u8BB8\u5728\u6784\u9020\u51FD\u6570\u58F0\u660E\u91CC\u8BBF\u95EE<code>this</code>\u3002</p><p>\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>that<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// error;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">D</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> _prop1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_prop1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">// error</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,4);function Vs(Ws,js){const a=o("ExternalLinkIcon");return p(),c(l,null,[u,s("p",null,[d,s("a",k,[b,e(a)]),_]),h,s("p",null,[m,g,y,s("a",f,[w,e(a)]),T]),x,s("p",null,[v,s("a",S,[M,e(a)]),E]),L,s("ul",null,[s("li",null,[H,I,B,C,D,N,s("a",R,[A,e(a)]),P]),s("li",null,[F,U,O,V,W,j,s("a",q,[z,e(a)]),J]),s("li",null,[K,s("a",Y,[G,e(a)]),Q]),s("li",null,[X,Z,$,ss,ns,as,s("a",es,[ts,e(a)]),os]),s("li",null,[ps,cs,ls,rs,is,us,ds,ks,s("a",bs,[_s,e(a)]),hs]),s("li",null,[ms,gs,ys,fs,ws,Ts,s("a",xs,[vs,e(a)]),Ss]),s("li",null,[Ms,Es,Ls,Hs,Is,Bs,s("a",Cs,[Ds,e(a)]),Ns]),s("li",null,[Rs,As,s("a",Ps,[Fs,e(a)]),Us])]),Os],64)}var Js=r(i,[["render",Vs]]);export{Js as default};
