import{r as p,o as e,c as t,a as n,b as c,w as o,F as r,e as l,d as a}from"./app.0186264c.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=l(`<h1 id="\u5BF9\u4E8Ejava-c-\u53D1\u8005\u7684typescript" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8Ejava-c-\u53D1\u8005\u7684typescript" aria-hidden="true">#</a> \u5BF9\u4E8EJava/C#\u53D1\u8005\u7684Typescript</h1><p>TypeScript \u662F\u4E60\u60EF\u4E8E\u4F7F\u7528\u5176\u4ED6\u9759\u6001\u7C7B\u578B\u8BED\u8A00\uFF08\u4F8B\u5982 C# \u548C Java\uFF09\u7684\u7A0B\u5E8F\u5458\u7684\u5408\u9002\u9009\u62E9\u3002</p><p>TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u8BB8\u591A\u76F8\u540C\u7684\u597D\u5904\uFF0C\u4F8B\u5982\u66F4\u597D\u7684\u4EE3\u7801\u5B8C\u6210\u3001\u66F4\u65E9\u7684\u9519\u8BEF\u68C0\u6D4B\u4EE5\u53CA\u7A0B\u5E8F\u5404\u90E8\u5206\u4E4B\u95F4\u66F4\u6E05\u6670\u7684\u901A\u4FE1\u3002\u867D\u7136 TypeScript \u4E3A\u8FD9\u4E9B\u5F00\u53D1\u4EBA\u5458\u63D0\u4F9B\u4E86\u8BB8\u591A\u719F\u6089\u7684\u529F\u80FD\uFF0C\u4F46\u503C\u5F97\u56DE\u987E\u4E00\u4E0B JavaScript\uFF08\u4EE5\u53CA TypeScript\uFF09\u4E0E\u4F20\u7EDF OOP \u8BED\u8A00\u7684\u4E0D\u540C\u4E4B\u5904\u3002\u4E86\u89E3\u8FD9\u4E9B\u5DEE\u5F02\u5C06\u5E2E\u52A9\u60A8\u7F16\u5199\u66F4\u597D\u7684 JavaScript \u4EE3\u7801\uFF0C\u5E76\u907F\u514D\u7A0B\u5E8F\u5458\u76F4\u63A5\u4ECE C#/Java \u8F6C\u5411 TypeScript \u53EF\u80FD\u9677\u5165\u7684\u5E38\u89C1\u9677\u9631\u3002</p><h2 id="\u5171\u540C\u5B66\u4E60-javascript" tabindex="-1"><a class="header-anchor" href="#\u5171\u540C\u5B66\u4E60-javascript" aria-hidden="true">#</a> \u5171\u540C\u5B66\u4E60 JavaScript</h2><p>\u5982\u679C\u60A8\u5DF2\u7ECF\u719F\u6089 JavaScript\uFF0C\u4F46\u4E3B\u8981\u662F Java \u6216 C# \u7A0B\u5E8F\u5458\uFF0C\u5219\u6B64\u4ECB\u7ECD\u6027\u9875\u9762\u53EF\u4EE5\u5E2E\u52A9\u89E3\u91CA\u60A8\u53EF\u80FD\u5BB9\u6613\u53D7\u5230\u7684\u4E00\u4E9B\u5E38\u89C1\u8BEF\u89E3\u548C\u9677\u9631\u3002TypeScript \u5EFA\u6A21\u7C7B\u578B\u7684\u4E00\u4E9B\u65B9\u5F0F\u4E0E Java \u6216 C# \u5B8C\u5168\u4E0D\u540C\uFF0C\u5728\u5B66\u4E60 TypeScript \u65F6\u8BB0\u4F4F\u8FD9\u4E9B\u5F88\u91CD\u8981\u3002</p><p>\u5982\u679C\u60A8\u662F Java \u6216 C# \u7A0B\u5E8F\u5458\uFF0C\u4E00\u822C\u4E0D\u719F\u6089 JavaScript\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5148\u5B66\u4E60\u4E00\u70B9\u4E0D\u5E26\u7C7B\u578B\u7684 JavaScript\uFF0C\u4EE5\u4E86\u89E3 JavaScript \u7684\u8FD0\u884C\u65F6\u884C\u4E3A\u3002\u56E0\u4E3A TypeScript \u4E0D\u4F1A\u6539\u53D8\u4F60\u7684\u4EE3\u7801\u8FD0\u884C\u65B9\u5F0F\uFF0C\u6240\u4EE5\u4F60\u4ECD\u7136\u9700\u8981\u5B66\u4E60 JavaScript \u7684\u5DE5\u4F5C\u539F\u7406\u624D\u80FD\u7F16\u5199\u51FA\u771F\u6B63\u80FD\u505A\u67D0\u4E8B\u7684\u4EE3\u7801\uFF01</p><p>\u91CD\u8981\u7684\u662F\u8981\u8BB0\u4F4F\uFF0CTypeScript \u4F7F\u7528\u4E0E JavaScript \u76F8\u540C\u7684\u8FD0\u884C\u65F6\uFF0C\u56E0\u6B64\u4EFB\u4F55\u5173\u4E8E\u5982\u4F55\u5B8C\u6210\u7279\u5B9A\u8FD0\u884C\u65F6\u884C\u4E3A\uFF08\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u5B57\u3001\u663E\u793A\u8B66\u62A5\u3001\u5C06\u6587\u4EF6\u5199\u5165\u78C1\u76D8\u7B49\uFF09\u7684\u8D44\u6E90\u90FD\u5C06\u540C\u6837\u9002\u7528\u4E8ETypeScript \u7A0B\u5E8F\u3002\u4E0D\u8981\u5C06\u81EA\u5DF1\u9650\u5236\u5728\u7279\u5B9A\u4E8E TypeScript \u7684\u8D44\u6E90\u4E2D\uFF01</p><h2 id="\u91CD\u65B0\u601D\u8003class" tabindex="-1"><a class="header-anchor" href="#\u91CD\u65B0\u601D\u8003class" aria-hidden="true">#</a> \u91CD\u65B0\u601D\u8003Class</h2><p>C# \u548C Java \u662F\u6211\u4EEC\u6240\u8BF4\u7684\u5F3A\u5236\u6027 OOP\u8BED\u8A00\u3002\u5728\u8FD9\u4E9B\u8BED\u8A00\u4E2D\uFF0C\u7C7B\u662F\u4EE3\u7801\u7EC4\u7EC7\u7684\u57FA\u672C\u5355\u5143\uFF0C\u4E5F\u662F\u8FD0\u884C\u65F6\u6240\u6709\u6570\u636E\u548C\u884C\u4E3A\u7684\u57FA\u672C\u5BB9\u5668\u3002\u5BF9\u4E8E\u67D0\u4E9B\u95EE\u9898\uFF0C\u5F3A\u5236\u6240\u6709\u529F\u80FD\u548C\u6570\u636E\u4FDD\u5B58\u5728\u7C7B\u4E2D\u53EF\u80FD\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9886\u57DF\u6A21\u578B\uFF0C\u4F46\u5E76\u4E0D\u662F\u6BCF\u4E2A\u9886\u57DF\u90FD\u9700\u8981\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u8868\u793A\u3002</p><h3 id="\u81EA\u7531\u51FD\u6570\u548C\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u81EA\u7531\u51FD\u6570\u548C\u6570\u636E" aria-hidden="true">#</a> \u81EA\u7531\u51FD\u6570\u548C\u6570\u636E</h3><p>\u5728 JavaScript \u4E2D\uFF0C\u51FD\u6570\u53EF\u4EE5\u5B58\u5728\u4E8E\u4EFB\u4F55\u5730\u65B9\uFF0C\u5E76\u4E14\u6570\u636E\u53EF\u4EE5\u81EA\u7531\u4F20\u9012\uFF0C\u800C\u65E0\u9700\u5728\u9884\u5B9A\u4E49\u7684class\u6216struct. \u8FD9\u79CD\u7075\u6D3B\u6027\u975E\u5E38\u5F3A\u5927\u3002\u5728\u6CA1\u6709\u9690\u542B OOP \u5C42\u6B21\u7ED3\u6784\u7684\u60C5\u51B5\u4E0B\u5904\u7406\u6570\u636E\u7684\u201C\u514D\u8D39\u201D\u51FD\u6570\uFF08\u4E0E\u7C7B\u65E0\u5173\u7684\u51FD\u6570\uFF09\u5F80\u5F80\u662F\u7528 JavaScript \u7F16\u5199\u7A0B\u5E8F\u7684\u9996\u9009\u6A21\u578B\u3002</p><h3 id="\u9759\u6001\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7C7B" aria-hidden="true">#</a> \u9759\u6001\u7C7B</h3><p>\u6B64\u5916\uFF0CTypeScript \u4E2D\u4E0D\u9700\u8981\u6765\u81EA C# \u548C Java \u7684\u67D0\u4E9B\u6784\u9020\uFF0C\u4F8B\u5982\u5355\u4F8B\u548C\u9759\u6001\u7C7B\u3002</p><h2 id="typescript-\u4E2D\u7684-oop" tabindex="-1"><a class="header-anchor" href="#typescript-\u4E2D\u7684-oop" aria-hidden="true">#</a> TypeScript \u4E2D\u7684 OOP</h2><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u4F60\u613F\u610F\uFF0C\u4F60\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528\u7C7B\uFF01\u6709\u4E9B\u95EE\u9898\u975E\u5E38\u9002\u5408\u901A\u8FC7\u4F20\u7EDF\u7684 OOP \u5C42\u6B21\u7ED3\u6784\u6765\u89E3\u51B3\uFF0CTypeScript \u5BF9 JavaScript \u7C7B\u7684\u652F\u6301\u5C06\u4F7F\u8FD9\u4E9B\u6A21\u578B\u66F4\u52A0\u5F3A\u5927\u3002TypeScript \u652F\u6301\u8BB8\u591A\u5E38\u89C1\u6A21\u5F0F\uFF0C\u4F8B\u5982\u5B9E\u73B0\u63A5\u53E3\u3001\u7EE7\u627F\u548C\u9759\u6001\u65B9\u6CD5\u3002</p><p>\u6211\u4EEC\u5C06\u5728\u672C\u6307\u5357\u540E\u9762\u4ECB\u7ECD\u7C7B\u3002</p><h2 id="\u91CD\u65B0\u601D\u8003\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u91CD\u65B0\u601D\u8003\u7C7B\u578B" aria-hidden="true">#</a> \u91CD\u65B0\u601D\u8003\u7C7B\u578B</h2><p>TypeScript \u5BF9\u7C7B\u578B\u7684\u7406\u89E3\u5B9E\u9645\u4E0A\u4E0E C# \u6216 Java \u5B8C\u5168\u4E0D\u540C\u3002\u8BA9\u6211\u4EEC\u63A2\u8BA8\u4E00\u4E9B\u5DEE\u5F02\u3002</p><h3 id="\u540D\u4E49\u5177\u4F53\u5316\u7C7B\u578B\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u540D\u4E49\u5177\u4F53\u5316\u7C7B\u578B\u7CFB\u7EDF" aria-hidden="true">#</a> \u540D\u4E49\u5177\u4F53\u5316\u7C7B\u578B\u7CFB\u7EDF</h3><p>\u5728 C# \u6216 Java \u4E2D\uFF0C\u4EFB\u4F55\u7ED9\u5B9A\u7684\u503C\u6216\u5BF9\u8C61\u90FD\u5177\u6709\u4E00\u79CD\u786E\u5207\u7684\u7C7B\u578B\u2014\u2014null\u539F\u59CB\u7C7B\u578B\u6216\u5DF2\u77E5\u7684\u7C7B\u7C7B\u578B\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u8C03\u7528\u7C7B\u4F3C <code>value.GetType()</code> \u6216\u7684\u65B9\u6CD5 <code>value.getClass()</code> \u6765\u67E5\u8BE2\u786E\u5207\u7684\u7C7B\u578B\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u5B9A\u4E49\u5C06\u9A7B\u7559\u5728\u67D0\u4E2A\u5177\u6709\u67D0\u4E2A\u540D\u79F0\u7684\u7C7B\u4E2D\uFF0C\u9664\u975E\u6709\u660E\u786E\u7684\u7EE7\u627F\u5173\u7CFB\u6216\u5171\u540C\u5B9E\u73B0\u7684\u63A5\u53E3\uFF0C\u5426\u5219\u6211\u4EEC\u4E0D\u80FD\u4F7F\u7528\u5177\u6709\u76F8\u4F3C\u5F62\u72B6\u7684\u4E24\u4E2A\u7C7B\u6765\u4EE3\u66FF\u5F7C\u6B64\u3002</p><p>\u8FD9\u4E9B\u65B9\u9762\u63CF\u8FF0\u4E86\u4E00\u4E2A\u5177\u4F53\u5316\u7684\u3001\u540D\u4E49\u4E0A\u7684\u7C7B\u578B\u7CFB\u7EDF\u3002\u6211\u4EEC\u5728\u4EE3\u7801\u4E2D\u7F16\u5199\u7684\u7C7B\u578B\u5728\u8FD0\u884C\u65F6\u5B58\u5728\uFF0C\u5E76\u4E14\u8FD9\u4E9B\u7C7B\u578B\u901A\u8FC7\u5B83\u4EEC\u7684\u58F0\u660E\u800C\u4E0D\u662F\u5B83\u4EEC\u7684\u7ED3\u6784\u76F8\u5173\u8054\u3002</p><h3 id="\u4F5C\u4E3A\u96C6\u5408\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u96C6\u5408\u7684\u7C7B\u578B" aria-hidden="true">#</a> \u4F5C\u4E3A\u96C6\u5408\u7684\u7C7B\u578B</h3><p>\u5728 C# \u6216 Java \u4E2D\uFF0C\u8003\u8651\u8FD0\u884C\u65F6\u7C7B\u578B\u4E0E\u5176\u7F16\u8BD1\u65F6\u58F0\u660E\u4E4B\u95F4\u7684\u4E00\u4E00\u5BF9\u5E94\u5173\u7CFB\u662F\u6709\u610F\u4E49\u7684\u3002</p><p>\u5728 TypeScript \u4E2D\uFF0C\u6700\u597D\u5C06\u7C7B\u578B\u89C6\u4E3A\u4E00\u7EC4\u5177\u6709\u5171\u540C\u70B9\u7684\u503C\u3002\u56E0\u4E3A\u7C7B\u578B\u53EA\u662F\u96C6\u5408\uFF0C\u4E00\u4E2A\u7279\u5B9A\u7684\u503C\u53EF\u4EE5\u540C\u65F6\u5C5E\u4E8E\u8BB8\u591A\u96C6\u5408\u3002</p><p>\u4E00\u65E6\u60A8\u5F00\u59CB\u5C06\u7C7B\u578B\u89C6\u4E3A\u96C6\u5408\uFF0C\u67D0\u4E9B\u64CD\u4F5C\u5C31\u4F1A\u53D8\u5F97\u975E\u5E38\u81EA\u7136\u3002\u4F8B\u5982\uFF0C\u5728c#\u4E2D\uFF0C\u4F20\u9012\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216int\u578B\u7684\u503C\u662F\u5F88\u5C34\u5C2C\u7684\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4E00\u4E2A\u5355\u72EC\u7684\u7C7B\u578B\u6765\u8868\u793A\u8FD9\u79CD\u7C7B\u578B\u7684\u503C\u3002</p><p>\u5728 TypeScript \u4E2D\uFF0C\u4E00\u65E6\u60A8\u610F\u8BC6\u5230\u6BCF\u79CD\u7C7B\u578B\u90FD\u53EA\u662F\u4E00\u4E2A\u96C6\u5408\uFF0C\u8FD9\u5C06\u53D8\u5F97\u975E\u5E38\u81EA\u7136\u3002\u60A8\u5982\u4F55\u63CF\u8FF0\u5C5E\u4E8Estring\u96C6\u5408\u6216number\u96C6\u5408\u7684\u503C\uFF1F\u5B83\u53EA\u662F\u5C5E\u4E8E\u8FD9\u4E9B\u96C6\u5408\u7684\u5E76\u96C6\uFF1A<code>string | number</code>.</p><p>TypeScript \u63D0\u4F9B\u4E86\u8BB8\u591A\u4EE5\u96C6\u5408\u8BBA\u65B9\u5F0F\u5904\u7406\u7C7B\u578B\u7684\u673A\u5236\uFF0C\u5982\u679C\u60A8\u5C06\u7C7B\u578B\u89C6\u4E3A\u96C6\u5408\uFF0C\u60A8\u4F1A\u53D1\u73B0\u5B83\u4EEC\u66F4\u76F4\u89C2\u3002</p><h3 id="\u64E6\u9664\u7ED3\u6784\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u64E6\u9664\u7ED3\u6784\u7C7B\u578B" aria-hidden="true">#</a> \u64E6\u9664\u7ED3\u6784\u7C7B\u578B</h3><p>\u5728 TypeScript \u4E2D\uFF0C\u5BF9\u8C61\u4E0D\u662F\u5355\u4E00\u7684\u786E\u5207\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u6784\u9020\u4E00\u4E2A\u6EE1\u8DB3\u63A5\u53E3\u7684\u5BF9\u8C61\uFF0C\u5373\u4F7F\u4E24\u8005\u4E4B\u95F4\u6CA1\u6709\u58F0\u660E\u6027\u5173\u7CFB\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728\u671F\u671B\u8BE5\u63A5\u53E3\u7684\u5730\u65B9\u4F7F\u7528\u8BE5\u5BF9\u8C61\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Pointlike</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Named</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">logPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> Pointlike<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;x = &quot;</span> <span class="token operator">+</span> point<span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">&quot;, y = &quot;</span> <span class="token operator">+</span> point<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">logName</span><span class="token punctuation">(</span>x<span class="token operator">:</span> Named<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> x<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Origin&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">logPoint</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">logName</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>TypeScript\u7684\u7C7B\u578B\u7CFB\u7EDF\u662F\u7ED3\u6784\u5316\u7684\uFF0C\u800C\u4E0D\u662F\u540D\u4E49\u4E0A\u7684:\u6211\u4EEC\u53EF\u4EE5\u5C06 <code>obj</code> \u7528\u4F5C <code>Pointlike</code> \u7C7B\u578B\uFF0C\u56E0\u4E3A\u5B83\u7684 <code>x</code> \u548C <code>y</code> \u5C5E\u6027\u90FD\u662F\u6570\u5B57\u3002\u7C7B\u578B\u4E4B\u95F4\u7684\u5173\u7CFB\u53D6\u51B3\u4E8E\u5B83\u4EEC\u6240\u5305\u542B\u7684\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u5B83\u4EEC\u662F\u5426\u7528\u67D0\u79CD\u7279\u5B9A\u7684\u5173\u7CFB\u58F0\u660E\u3002</p><p>TypeScript\u7684\u7C7B\u578B\u7CFB\u7EDF\u4E5F\u6CA1\u6709\u5177\u4F53\u5316:\u8FD0\u884C\u65F6\u6CA1\u6709\u4EFB\u4F55\u4E1C\u897F\u544A\u8BC9\u6211\u4EEC <code>obj</code> \u662F <code>Pointlike</code> \u7684\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u7C7B\u70B9\u7C7B\u578B\u5728\u8FD0\u884C\u65F6\u5E76\u4E0D\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u51FA\u73B0\u3002</p><p>\u56DE\u5230\u7C7B\u578B\u4F5C\u4E3A\u96C6\u5408\u7684\u601D\u60F3\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A <code>obj</code> \u770B\u4F5C\u662F\u7C7B\u70B9\u503C\u96C6\u548C\u547D\u540D\u503C\u96C6\u7684\u6210\u5458\u3002</p><h3 id="\u7ED3\u6784\u7C7B\u578B\u7684\u540E\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u7C7B\u578B\u7684\u540E\u679C" aria-hidden="true">#</a> \u7ED3\u6784\u7C7B\u578B\u7684\u540E\u679C</h3><p>OOP \u7A0B\u5E8F\u5458\u7ECF\u5E38\u5BF9\u7ED3\u6784\u7C7B\u578B\u7684\u4E24\u4E2A\u7279\u5B9A\u65B9\u9762\u611F\u5230\u60CA\u8BB6\u3002</p><h4 id="\u7A7A\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u7C7B\u578B" aria-hidden="true">#</a> \u7A7A\u7C7B\u578B</h4><p>\u9996\u5148\u662F\u7A7A\u7C7B\u578B\u4F3C\u4E4E\u51FA\u4E4E\u610F\u6599\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span>  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> {}

function fn(arg:  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something?</span>
<span class="token punctuation">}</span>

<span class="token comment">// No error, but this isn&#39;t an &#39;Empty&#39; ?</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span> k<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>TypeScript\u901A\u8FC7\u67E5\u770B\u63D0\u4F9B\u7684\u53C2\u6570\u662F\u5426\u4E3A\u6709\u6548\u7684 <code>Empty</code> \u6765\u5224\u65AD\u8FD9\u91CC\u5BF9fn\u7684\u8C03\u7528\u662F\u5426\u6709\u6548\u3002\u5B83\u901A\u8FC7\u68C0\u67E5 <code>{k: 10}</code> \u548C <code>Empty{}</code> \u7C7B\u7684\u7ED3\u6784\u6765\u505A\u5230\u8FD9\u4E00\u70B9\u3002\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 <code>{k: 10}</code> \u5177\u6709 <code>Empty</code> \u6240\u5177\u6709\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u56E0\u4E3AEmpty\u6CA1\u6709\u5C5E\u6027\u3002\u56E0\u6B64\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6709\u6548\u7684\u8C03\u7528!</p><p>\u8FD9\u53EF\u80FD\u770B\u8D77\u6765\u4EE4\u4EBA\u60CA\u8BB6\uFF0C\u4F46\u5B83\u6700\u7EC8\u4E0E\u540D\u4E49OOP\u8BED\u8A00\u4E2D\u5B9E\u65BD\u7684\u5173\u7CFB\u975E\u5E38\u76F8\u4F3C\u3002\u5B50\u7C7B\u4E0D\u80FD\u5220\u9664\u57FA\u7C7B\u7684\u5C5E\u6027\uFF0C\u56E0\u4E3A\u8FD9\u6837\u505A\u4F1A\u7834\u574F\u6D3E\u751F\u7C7B\u4E0E\u5176\u57FA\u7C7B\u4E4B\u95F4\u7684\u81EA\u7136\u5B50\u7C7B\u578B\u5173\u7CFB\u3002\u7ED3\u6784\u7C7B\u578B\u7CFB\u7EDF\u7B80\u5355\u5730\u901A\u8FC7\u63CF\u8FF0\u5177\u6709\u517C\u5BB9\u7C7B\u578B\u5C5E\u6027\u7684\u5B50\u7C7B\u578B\u6765\u9690\u5F0F\u5730\u6807\u8BC6\u8FD9\u79CD\u5173\u7CFB\u3002</p><h4 id="\u76F8\u540C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u76F8\u540C\u7C7B\u578B" aria-hidden="true">#</a> \u76F8\u540C\u7C7B\u578B</h4><p>\u53E6\u4E00\u4E2A\u5E38\u89C1\u7684\u60CA\u559C\u6765\u6E90\u662F\u76F8\u540C\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// hit the gas</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Golfer</span> <span class="token punctuation">{</span>
  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// hit the ball far</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// No error?</span>
<span class="token keyword">let</span> w<span class="token operator">:</span> Car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Golfer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u540C\u6837\uFF0C\u8FD9\u4E0D\u662F\u9519\u8BEF\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u7C7B\u7684\u7ED3\u6784\u662F\u76F8\u540C\u7684\u3002\u867D\u7136\u8FD9\u4F3C\u4E4E\u662F\u4E00\u4E2A\u6F5C\u5728\u7684\u6DF7\u6DC6\u6765\u6E90\uFF0C\u4F46\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u4E0D\u5E94\u8BE5\u76F8\u5173\u7684\u76F8\u540C\u7C7B\u5E76\u4E0D\u5E38\u89C1\u3002</p><p>\u6211\u4EEC\u5C06\u5728\u201C\u7C7B\u201D\u4E00\u7AE0\u4E2D\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u7C7B\u5982\u4F55\u76F8\u4E92\u5173\u8054\u7684\u4FE1\u606F\u3002</p><h3 id="\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5C04" aria-hidden="true">#</a> \u53CD\u5C04</h3><p>OOP programmers are accustomed to being able to query the type of any value, even a generic one:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">// C#</span>
<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token generic-method"><span class="token function">LogType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u56E0\u4E3A TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF\u88AB\u5B8C\u5168\u64E6\u9664\uFF0C\u6240\u4EE5\u5173\u4E8E\u6CDB\u578B\u7C7B\u578B\u53C2\u6570\u7684\u5B9E\u4F8B\u5316\u7B49\u4FE1\u606F\u5728\u8FD0\u884C\u65F6\u4E0D\u53EF\u7528\u3002</p><p>JavaScript\u786E\u5B9E\u6709\u4E00\u4E9B\u6709\u9650\u7684\u7C7B\u578B\u8BED\u53E5\uFF0C\u5982 <code>typeof</code> \u548C <code>instanceof</code> \uFF0C\u4F46\u8BF7\u8BB0\u4F4F\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u7B26\u4ECD\u7136\u5728\u5904\u7406\u5B58\u5728\u4E8E\u7C7B\u578B\u5220\u9664\u8F93\u51FA\u4EE3\u7801\u4E2D\u7684\u503C\u3002\u4F8B\u5982\uFF0C<code>typeof (new Car())</code> \u5C06\u662F <code>\u201Cobject\u201D</code>\uFF0C\u800C\u4E0D\u662F <code>Car</code> \u6216 <code>\u201CCar\u201D</code> \u3002</p><h2 id="\u4E0B\u4E00\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u4E00\u6B65" aria-hidden="true">#</a> \u4E0B\u4E00\u6B65</h2><p>\u8FD9\u662F\u5BF9\u65E5\u5E38 TypeScript \u4E2D\u4F7F\u7528\u7684\u8BED\u6CD5\u548C\u5DE5\u5177\u7684\u7B80\u8981\u6982\u8FF0\u3002\u4ECE\u8FD9\u91CC\uFF0C\u60A8\u53EF\u4EE5\uFF1A</p>`,52),k=a("\u4ECE\u5934\u5230\u5C3E"),b=a(" \u9605\u8BFB\u5B8C\u6574\u7684\u624B\u518C(30m)(30m)"),m=n("li",null,[a("\u63A2\u7D22 "),n("a",{href:"/play#show-examples"},"Playground \u793A\u4F8B")],-1);function h(y,v){const s=p("RouterLink");return e(),t(r,null,[d,n("ul",null,[n("li",null,[c(s,{to:"/zh/docs/handbook/intro.html"},{default:o(()=>[k]),_:1}),b]),m])],64)}var S=i(u,[["render",h]]);export{S as default};
