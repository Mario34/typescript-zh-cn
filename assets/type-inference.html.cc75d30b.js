import{r as p,o,c,a as s,b as e,F as l,e as t,d as n}from"./app.0186264c.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=t(`<h1 id="\u7C7B\u578B\u63A8\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u63A8\u8BBA" aria-hidden="true">#</a> \u7C7B\u578B\u63A8\u8BBA</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u8FD9\u8282\u4ECB\u7ECDTypeScript\u91CC\u7684\u7C7B\u578B\u63A8\u8BBA\u3002\u5373\uFF0C\u7C7B\u578B\u662F\u5728\u54EA\u91CC\u5982\u4F55\u88AB\u63A8\u65AD\u7684\u3002</p><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><p>TypeScript\u91CC\uFF0C\u5728\u6709\u4E9B\u6CA1\u6709\u660E\u786E\u6307\u51FA\u7C7B\u578B\u7684\u5730\u65B9\uFF0C\u7C7B\u578B\u63A8\u8BBA\u4F1A\u5E2E\u52A9\u63D0\u4F9B\u7C7B\u578B\u3002\u5982\u4E0B\u9762\u7684\u4F8B\u5B50</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53D8\u91CF<code>x</code>\u7684\u7C7B\u578B\u88AB\u63A8\u65AD\u4E3A\u6570\u5B57\u3002 \u8FD9\u79CD\u63A8\u65AD\u53D1\u751F\u5728\u521D\u59CB\u5316\u53D8\u91CF\u548C\u6210\u5458\uFF0C\u8BBE\u7F6E\u9ED8\u8BA4\u53C2\u6570\u503C\u548C\u51B3\u5B9A\u51FD\u6570\u8FD4\u56DE\u503C\u65F6\u3002</p><p>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u7C7B\u578B\u63A8\u8BBA\u662F\u76F4\u622A\u4E86\u5F53\u5730\u3002 \u540E\u9762\u7684\u5C0F\u8282\uFF0C\u6211\u4EEC\u4F1A\u6D4F\u89C8\u7C7B\u578B\u63A8\u8BBA\u65F6\u7684\u7EC6\u5FAE\u5DEE\u522B\u3002</p><h2 id="\u6700\u4F73\u901A\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u901A\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u6700\u4F73\u901A\u7528\u7C7B\u578B</h2><p>\u5F53\u9700\u8981\u4ECE\u51E0\u4E2A\u8868\u8FBE\u5F0F\u4E2D\u63A8\u65AD\u7C7B\u578B\u65F6\u5019\uFF0C\u4F1A\u4F7F\u7528\u8FD9\u4E9B\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u6765\u63A8\u65AD\u51FA\u4E00\u4E2A\u6700\u5408\u9002\u7684\u901A\u7528\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E3A\u4E86\u63A8\u65AD<code>x</code>\u7684\u7C7B\u578B\uFF0C\u6211\u4EEC\u5FC5\u987B\u8003\u8651\u6240\u6709\u5143\u7D20\u7684\u7C7B\u578B\u3002 \u8FD9\u91CC\u6709\u4E24\u79CD\u9009\u62E9\uFF1A<code>number</code>\u548C<code>null</code>\u3002 \u8BA1\u7B97\u901A\u7528\u7C7B\u578B\u7B97\u6CD5\u4F1A\u8003\u8651\u6240\u6709\u7684\u5019\u9009\u7C7B\u578B\uFF0C\u5E76\u7ED9\u51FA\u4E00\u4E2A\u517C\u5BB9\u6240\u6709\u5019\u9009\u7C7B\u578B\u7684\u7C7B\u578B\u3002</p><p>\u7531\u4E8E\u6700\u7EC8\u7684\u901A\u7528\u7C7B\u578B\u53D6\u81EA\u5019\u9009\u7C7B\u578B\uFF0C\u6709\u4E9B\u65F6\u5019\u5019\u9009\u7C7B\u578B\u5171\u4EAB\u76F8\u540C\u7684\u901A\u7528\u7C7B\u578B\uFF0C\u4F46\u662F\u5374\u6CA1\u6709\u4E00\u4E2A\u7C7B\u578B\u80FD\u505A\u4E3A\u6240\u6709\u5019\u9009\u7C7B\u578B\u7684\u7C7B\u578B\u3002\u4F8B\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> zoo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Rhino</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Elephant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Snake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\uFF0C\u6211\u4EEC\u60F3\u8BA9zoo\u88AB\u63A8\u65AD\u4E3A<code>Animal[]</code>\u7C7B\u578B\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6570\u7EC4\u91CC\u6CA1\u6709\u5BF9\u8C61\u662F<code>Animal</code>\u7C7B\u578B\u7684\uFF0C\u56E0\u6B64\u4E0D\u80FD\u63A8\u65AD\u51FA\u8FD9\u4E2A\u7ED3\u679C\u3002 \u4E3A\u4E86\u66F4\u6B63\uFF0C\u5F53\u5019\u9009\u7C7B\u578B\u4E0D\u80FD\u4F7F\u7528\u7684\u65F6\u5019\u6211\u4EEC\u9700\u8981\u660E\u786E\u7684\u6307\u51FA\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> zoo<span class="token operator">:</span> Animal<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Rhino</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Elephant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Snake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u6CA1\u6709\u627E\u5230\u6700\u4F73\u901A\u7528\u7C7B\u578B\u7684\u8BDD\uFF0C\u7C7B\u578B\u63A8\u65AD\u7684\u7ED3\u679C\u4E3A\u8054\u5408\u6570\u7EC4\u7C7B\u578B\uFF0C<code>(Rhino | Elephant | Snake)[]</code>\u3002</p><h2 id="\u4E0A\u4E0B\u6587\u5F52\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u6587\u5F52\u7C7B" aria-hidden="true">#</a> \u4E0A\u4E0B\u6587\u5F52\u7C7B</h2><p>TypeScript\u7C7B\u578B\u63A8\u8BBA\u4E5F\u53EF\u80FD\u6309\u7167\u76F8\u53CD\u7684\u65B9\u5411\u8FDB\u884C\u3002 \u8FD9\u88AB\u53EB\u505A\u201C\u4E0A\u4E0B\u6587\u5F52\u7C7B\u201D\u3002\u6309\u4E0A\u4E0B\u6587\u5F52\u7C7B\u4F1A\u53D1\u751F\u5728\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u4E0E\u6240\u5904\u7684\u4F4D\u7F6E\u76F8\u5173\u65F6\u3002\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>mouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mouseEvent<span class="token punctuation">.</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//&lt;- OK</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mouseEvent<span class="token punctuation">.</span>kangaroo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&lt;- Error!</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,20),d=n("\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0CTypeScript\u7C7B\u578B\u68C0\u67E5\u5668\u4F1A\u4F7F\u7528"),k=s("code",null,"Window.onmousedown",-1),m=n("\u51FD\u6570\u7684\u7C7B\u578B\u6765\u63A8\u65AD\u53F3\u8FB9\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\u3002 \u6240\u4EE5\u5B83\u80FD\u591F\u63A8\u65AD\u51FA"),b=s("code",null,"mouseEvent",-1),h=n("\u53C2\u6570\u7684"),_={href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent",target:"_blank",rel:"noopener noreferrer"},v=n("\u7C7B\u578B"),g=n("\u4E2D\u5305\u542B\u4E86"),y=s("code",null,"button",-1),w=n("\u5C5E\u6027\u800C\u4E0D\u5305\u542B"),f=s("code",null,"kangaroo",-1),E=n("\u5C5E\u6027\u3002"),x=t(`<p>TypeScript\u8FD8\u80FD\u591F\u5F88\u597D\u5730\u63A8\u65AD\u51FA\u5176\u5B83\u4E0A\u4E0B\u6587\u4E2D\u7684\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>uiEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uiEvent<span class="token punctuation">.</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&lt;- Error!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,2),S=n("\u4E0A\u9762\u7684\u51FD\u6570\u88AB\u8D4B\u503C\u7ED9"),A=s("code",null,"window.onscroll",-1),I=n("\uFF0C"),T=s("code",null,"TypeScript",-1),z=n("\u80FD\u591F\u77E5\u9053"),U=s("code",null,"uiEvent",-1),N=n("\u662F"),R={href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent",target:"_blank",rel:"noopener noreferrer"},V=n("UIEvent"),W=n("\uFF0C\u800C\u4E0D\u662F"),B={href:"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent",target:"_blank",rel:"noopener noreferrer"},M=n("MouseEvent"),P=n("\u3002"),F=s("code",null,"UIEvent",-1),K=n("\u5BF9\u8C61\u4E0D\u5305\u542B"),L=s("code",null,"button",-1),O=n("\u5C5E\u6027\uFF0C\u56E0\u6B64TypeScript\u4F1A\u62A5\u9519\u3002"),C=t(`<p>\u5982\u679C\u8FD9\u4E2A\u51FD\u6570\u4E0D\u662F\u5728\u4E0A\u4E0B\u6587\u5F52\u7C7B\u7684\u4F4D\u7F6E\u4E0A\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B\u5C06\u9690\u5F0F\u7684\u6210\u4E3A<code>any</code>\u7C7B\u578B\uFF0C\u800C\u4E14\u4E5F\u4E0D\u4F1A\u62A5\u9519\uFF08\u9664\u975E\u4F60\u5F00\u542F\u4E86<code>--noImplicitAny</code>\u9009\u9879\uFF09\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>uiEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uiEvent<span class="token punctuation">.</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&lt;- OK</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u660E\u786E\u5730\u4E3A\u51FD\u6570\u53C2\u6570\u7C7B\u578B\u8D4B\u503C\u6765\u8986\u5199\u4E0A\u4E0B\u6587\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onscroll</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>uiEvent<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uiEvent<span class="token punctuation">.</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//&lt;- Now, no error is given</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F46\u8FD9\u6BB5\u4EE3\u7801\u4F1A\u6253\u5370<code>undefined</code>\uFF0C\u56E0\u4E3A<code>uiEvent</code>\u5E76\u4E0D\u5305\u542B<code>button</code>\u5C5E\u6027\u3002</p><p>\u4E0A\u4E0B\u6587\u5F52\u7C7B\u4F1A\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\u4F7F\u7528\u5230\u3002 \u901A\u5E38\u5305\u542B\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u8D4B\u503C\u8868\u8FBE\u5F0F\u7684\u53F3\u8FB9\uFF0C\u7C7B\u578B\u65AD\u8A00\uFF0C\u5BF9\u8C61\u6210\u5458\u548C\u6570\u7EC4\u5B57\u9762\u91CF\u548C\u8FD4\u56DE\u503C\u8BED\u53E5\u3002 \u4E0A\u4E0B\u6587\u7C7B\u578B\u4E5F\u4F1A\u505A\u4E3A\u6700\u4F73\u901A\u7528\u7C7B\u578B\u7684\u5019\u9009\u7C7B\u578B\u3002\u6BD4\u5982\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createZoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Animal<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Rhino</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Elephant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Snake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u6700\u4F73\u901A\u7528\u7C7B\u578B\u67094\u4E2A\u5019\u9009\u8005\uFF1A<code>Animal</code>\uFF0C<code>Rhino</code>\uFF0C<code>Elephant</code>\u548C<code>Snake</code>\u3002 \u5F53\u7136\uFF0C<code>Animal</code>\u4F1A\u88AB\u505A\u4E3A\u6700\u4F73\u901A\u7528\u7C7B\u578B\u3002</p>`,8);function Z(j,q){const a=p("ExternalLinkIcon");return o(),c(l,null,[r,s("p",null,[d,k,m,b,h,s("a",_,[v,e(a)]),g,y,w,f,E]),x,s("p",null,[S,A,I,T,z,U,N,s("a",R,[V,e(a)]),W,s("a",B,[M,e(a)]),P,F,K,L,O]),C],64)}var H=u(i,[["render",Z]]);export{H as default};
