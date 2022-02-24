import{r as e,o as c,c as l,a as s,b as t,w as r,F as u,e as a,d as n}from"./app.0186264c.js";import{_ as i,a as k,b as d,c as g,d as m}from"./paused-demo.006bd60e.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";var q="/assets/new-asp-project.c0dbf639.png",y="/assets/new-asp-project-template.4112e22b.png",h="/assets/src-folder.81b9aa0b.png",_="/assets/open-index.6516c823.png",f="/assets/packageinstaller-angular2.2ae94ccd.png",v="/assets/packageinstaller-systemjs.24aaf59f.png",S="/assets/packageinstaller-typings.c3a80cbe.png",x="/assets/packageinstaller-es6-shim.02ab2572.png";const w={},j=a('<h1 id="asp-net-4" tabindex="-1"><a class="header-anchor" href="#asp-net-4" aria-hidden="true">#</a> ASP.NET 4</h1><h2 id="asp-net-4-1" tabindex="-1"><a class="header-anchor" href="#asp-net-4-1" aria-hidden="true">#</a> ASP.NET 4</h2><blockquote><p>\u6CE8\u610F\uFF1A \u6B64\u6559\u7A0B\u5DF2\u4ECE\u5B98\u65B9\u5220\u9664</p></blockquote><h3 id="\u5B89\u88C5-typescript" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-typescript" aria-hidden="true">#</a> \u5B89\u88C5 TypeScript</h3>',4),T=n("\u5982\u679C\u4F60\u4F7F\u7528\u7684 Visual Studio \u7248\u672C\u8FD8\u4E0D\u652F\u6301 TypeScript\uFF0C \u4F60\u53EF\u4EE5\u5B89\u88C5 "),I={href:"http://www.microsoft.com/en-us/download/details.aspx?id=48593",target:"_blank",rel:"noopener noreferrer"},A=n("Visual Studio 2015"),P=n(" \u6216\u8005 "),E={href:"https://www.microsoft.com/en-us/download/details.aspx?id=48739",target:"_blank",rel:"noopener noreferrer"},M=n("Visual Studio 2013"),N=n("\u3002 \u8FD9\u4E2A\u5FEB\u901F\u4E0A\u624B\u6307\u5357\u4F7F\u7528\u7684\u662F Visual Studio 2015\u3002"),C=a('<h3 id="\u65B0\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u65B0\u5EFA\u9879\u76EE</h3><ol><li><p>\u9009\u62E9 <strong>File</strong></p></li><li><p>\u9009\u62E9 <strong>New Project</strong></p></li><li><p>\u9009\u62E9 <strong>Visual C#</strong></p></li><li><p>\u9009\u62E9 <strong>ASP.NET Web Application</strong></p><p><img src="'+q+'" alt="Create new ASP.NET project"></p></li><li><p>\u9009\u62E9 <strong>MVC</strong></p><p>\u53D6\u6D88\u590D\u9009 &quot;Host in the cloud&quot; \u672C\u6307\u5357\u5C06\u4F7F\u7528\u4E00\u4E2A\u672C\u5730\u793A\u4F8B\u3002 <img src="'+y+'" alt="Use MVC template"></p></li></ol><p>\u8FD0\u884C\u6B64\u5E94\u7528\u4EE5\u786E\u4FDD\u5B83\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002</p><h2 id="\u6DFB\u52A0-typescript" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-typescript" aria-hidden="true">#</a> \u6DFB\u52A0 TypeScript</h2><p>\u4E0B\u4E00\u6B65\u6211\u4EEC\u4E3A TypeScript \u6DFB\u52A0\u4E00\u4E2A\u6587\u4EF6\u5939\u3002</p><p><img src="'+i+'" alt="Create new folder"></p><p>\u5C06\u6587\u4EF6\u5939\u547D\u540D\u4E3A src\u3002</p><p><img src="'+h+'" alt="src folder"></p><h3 id="\u6DFB\u52A0-typescript-\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-typescript-\u4EE3\u7801" aria-hidden="true">#</a> \u6DFB\u52A0 TypeScript \u4EE3\u7801</h3><p>\u5728 <code>src</code> \u4E0A\u53F3\u51FB\u5E76\u9009\u62E9 <strong>New Item</strong>\u3002 \u63A5\u7740\u9009\u62E9 <strong>TypeScript File</strong> \u5E76\u5C06\u6B64\u6587\u4EF6\u547D\u540D\u4E3A <code>app.ts</code>\u3002</p><p><img src="'+k+`" alt="New item"></p><h3 id="\u6DFB\u52A0\u793A\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u793A\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u6DFB\u52A0\u793A\u4F8B\u4EE3\u7801</h3><p>\u5C06\u4EE5\u4E0B\u4EE3\u7801\u5199\u5165 <code>app.ts</code> \u6587\u4EF6\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;compiler&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">const</span> framework <span class="token operator">=</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;framework&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLInputElement<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>compiler<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>framework<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u6784\u5EFA\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u8BBE\u7F6E" aria-hidden="true">#</a> \u6784\u5EFA\u8BBE\u7F6E</h3><p>\u53F3\u51FB\u9879\u76EE\u5E76\u9009\u62E9 <strong>New Item</strong>\u3002 \u63A5\u7740\u9009\u62E9 <strong>TypeScript Configuration File</strong> \u4FDD\u6301\u6587\u4EF6\u7684\u9ED8\u8BA4\u540D\u5B57\u4E3A <code>tsconfig.json</code>\u3002</p><p><img src="`+d+`" alt="Create tsconfig.json"></p><p>\u5C06\u9ED8\u8BA4\u7684 <code>tsconfig.json</code> \u5185\u5BB9\u6539\u4E3A\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./Scripts/App&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/app.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;compileOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u770B\u8D77\u6765\u548C\u9ED8\u8BA4\u7684\u8BBE\u7F6E\u5DEE\u4E0D\u591A\uFF0C\u4F46\u6CE8\u610F\u4EE5\u4E0B\u4E0D\u540C\u4E4B\u5904\uFF1A</p><ol><li>\u8BBE\u7F6E <code>&quot;noImplicitAny&quot;: true</code>\u3002</li><li>\u7279\u522B\u662F\u8FD9\u91CC <code>&quot;outDir&quot;: &quot;./Scripts/App&quot;</code>\u3002</li><li>\u663E\u5F0F\u5217\u51FA\u4E86 <code>&quot;files&quot;</code> \u800C\u4E0D\u662F\u4F9D\u636E <code>&quot;excludes&quot;</code>\u9009\u9879\u3002</li><li>\u8BBE\u7F6E <code>&quot;compileOnSave&quot;: true</code>\u3002</li></ol>`,21),B=n("\u5F53\u4F60\u5199\u65B0\u4EE3\u7801\u65F6\uFF0C\u8BBE\u7F6E "),D=s("code",null,'"noImplicitAny"',-1),V=n(" \u9009\u9879\u662F\u4E2A\u597D\u4E3B\u610F \u2014 \u8FD9\u53EF\u4EE5\u786E\u4FDD\u4F60\u4E0D\u4F1A\u9519\u5199\u4EFB\u4F55\u65B0\u7684\u7C7B\u578B\u3002 \u8BBE\u7F6E "),H=s("code",null,'"compileOnSave"',-1),L=n(" \u9009\u9879\u53EF\u4EE5\u786E\u4FDD\u4F60\u5728\u8FD0\u884Cweb\u7A0B\u5E8F\u524D\u81EA\u52A8\u7F16\u8BD1\u4FDD\u5B58\u53D8\u66F4\u540E\u7684\u4EE3\u7801\u3002 \u66F4\u591A\u4FE1\u606F\u8BF7\u53C2\u89C1 "),F=n("the tsconfig.json documentation"),$=n("\u3002"),O=a('<h3 id="\u5728\u89C6\u56FE\u4E2D\u8C03\u7528\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u5728\u89C6\u56FE\u4E2D\u8C03\u7528\u811A\u672C" aria-hidden="true">#</a> \u5728\u89C6\u56FE\u4E2D\u8C03\u7528\u811A\u672C</h3><ol><li><p>\u5728 <strong>Solution Explorer</strong> \u4E2D, \u6253\u5F00 <strong>Views</strong> | <strong>Home</strong> | <code>Index.cshtml</code>\u3002</p><p><img src="'+_+`" alt="Open Index.cshtml"></p></li><li><p>\u4FEE\u6539\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-markup ext-markup line-numbers-mode"><pre class="language-markup"><code>@{
    ViewBag.Title = &quot;Home Page&quot;;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>~/Scripts/App/app.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    Compiler: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>compiler<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TypeScript<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onkeyup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    Framework: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>framework<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ASP.NET<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onkeyup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ol><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><ol><li>\u8FD0\u884C\u9879\u76EE\u3002</li><li>\u5728\u8F93\u5165\u6846\u4E2D\u952E\u5165\u65F6\uFF0C\u60A8\u5E94\u8BE5\u770B\u5230\u4E00\u4E2A\u6D88\u606F\uFF1A</li></ol><p><img src="`+g+'" alt="Picture of running demo"></p><h3 id="\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5" aria-hidden="true">#</a> \u8C03\u8BD5</h3><ol><li>\u5728 Edge \u6D4F\u89C8\u5668\u4E2D, \u6309 F12 \u952E\u5E76\u9009\u62E9 <strong>Debugger</strong> \u6807\u7B7E\u9875\u3002</li><li>\u5C55\u5F00 localhost \u5217\u8868, \u9009\u62E9 src/app.ts</li><li>\u5728 <code>return</code> \u90A3\u4E00\u884C\u4E0A\u6253\u4E00\u4E2A\u65AD\u70B9\u3002</li><li>\u5728\u8F93\u5165\u6846\u4E2D\u952E\u5165\u4E00\u4E9B\u5185\u5BB9\uFF0C\u786E\u8BA4TypeScript\u4EE3\u7801\u547D\u4E2D\u65AD\u70B9\uFF0C\u89C2\u5BDF\u5B83\u662F\u5426\u80FD\u6B63\u786E\u5730\u5DE5\u4F5C\u3002</li></ol><p><img src="'+m+'" alt="Demo paused on breakpoint"></p><p>\u8FD9\u5C31\u662F\u4F60\u9700\u8981\u77E5\u9053\u7684\u5728ASP.NET\u4E2D\u4F7F\u7528TypeScript\u7684\u57FA\u672C\u77E5\u8BC6\u4E86\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5F15\u5165Angular\uFF0C\u5199\u4E00\u4E2A\u7B80\u5355\u7684Angular\u7A0B\u5E8F\u793A\u4F8B\u3002</p><h2 id="\u6DFB\u52A0-angular-2" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-angular-2" aria-hidden="true">#</a> \u6DFB\u52A0 Angular 2</h2><h3 id="\u4F7F\u7528-npm-\u4E0B\u8F7D\u6240\u9700\u7684\u5305" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-npm-\u4E0B\u8F7D\u6240\u9700\u7684\u5305" aria-hidden="true">#</a> \u4F7F\u7528 NPM \u4E0B\u8F7D\u6240\u9700\u7684\u5305</h3>',11),U=n("\u5B89\u88C5 "),G={href:"https://github.com/madskristensen/PackageInstaller",target:"_blank",rel:"noopener noreferrer"},R=n("PackageInstaller"),Q=n("\u3002"),W=a('<li><p>\u7528 PackageInstaller \u6765\u5B89\u88C5 Angular 2\uFF0C systemjs \u548C Typings\u3002</p><p>\u5728project\u4E0A\u53F3\u51FB, \u9009\u62E9 <strong>Quick Install Package</strong>\u3002</p><p><img src="'+f+'" alt="Use PackageInstaller to install angular2"> <img src="'+v+'" alt="Use PackageInstaller to install systemjs"> <img src="'+S+'" alt="Use PackageInstaller to install Typings"></p></li><li><p>\u7528 PackageInstaller \u5B89\u88C5 es6-shim \u7684\u7C7B\u578B\u6587\u4EF6\u3002</p><p>Angular 2 \u5305\u542B es6-shim \u4EE5\u63D0\u4F9B Promise \u652F\u6301, \u4F46 TypeScript \u8FD8\u9700\u8981\u5B83\u7684\u7C7B\u578B\u6587\u4EF6\u3002 \u5728 PackageInstaller \u4E2D, \u9009\u62E9 Typing \u66FF\u6362 npm \u9009\u9879\u3002\u63A5\u7740\u952E\u5165 &quot;es6-shim&quot;\uFF1A</p><p><img src="'+x+'" alt="Use PackageInstaller to install es6-shim typings"></p></li>',2),z=a(`<h3 id="\u66F4\u65B0-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0-tsconfig-json" aria-hidden="true">#</a> \u66F4\u65B0 tsconfig.json</h3><p>\u73B0\u5728\u5B89\u88C5\u597D\u4E86 Angular 2 \u53CA\u5176\u4F9D\u8D56\u9879\uFF0C \u6211\u4EEC\u8FD8\u9700\u8981\u542F\u7528 TypeScript \u4E2D\u5B9E\u9A8C\u6027\u7684\u88C5\u9970\u5668\u652F\u6301\u5E76\u4E14\u5F15\u5165 es6-shim \u7684\u7C7B\u578B\u6587\u4EF6\u3002 \u5C06\u6765\u7684\u7248\u672C\u4E2D\uFF0C\u88C5\u9970\u5668\u548C ES6 \u9009\u9879\u5C06\u6210\u4E3A\u9ED8\u8BA4\u9009\u9879\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4E0D\u505A\u6B64\u8BBE\u7F6E\u4E86\u3002 \u6DFB\u52A0<code>&quot;experimentalDecorators&quot;: true, &quot;emitDecoratorMetadata&quot;: true</code>\u9009\u9879\u5230<code>&quot;compilerOptions&quot;</code>\uFF0C\u518D\u6DFB\u52A0<code>&quot;./typings/index.d.ts&quot;</code>\u5230<code>&quot;files&quot;</code>\u3002 \u6700\u540E\uFF0C\u6211\u4EEC\u8981\u65B0\u5EFA<code>&quot;./src/model.ts&quot;</code>\u6587\u4EF6\uFF0C\u5E76\u4E14\u5F97\u628A\u5B83\u52A0\u5230<code>&quot;files&quot;</code>\u91CC\u3002 \u73B0\u5728<code>tsconfig.json</code>\u5E94\u8BE5\u662F\u8FD9\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./Scripts/App&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/app.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/model.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/main.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./typings/index.d.ts&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u6DFB\u52A0-copyfiles-\u5230-build-\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-copyfiles-\u5230-build-\u4E2D" aria-hidden="true">#</a> \u6DFB\u52A0 CopyFiles \u5230 build \u4E2D</h3><p>\u6700\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u786E\u4FDD Angular \u6587\u4EF6\u4F5C\u4E3A build \u7684\u4E00\u90E8\u5206\u590D\u5236\u8FDB\u6765\u3002\u8FD9\u6837\u64CD\u4F5C\uFF0C\u53F3\u51FB\u9879\u76EE\u9009\u62E9 &#39;Unload&#39; \uFF0C\u518D\u6B21\u53F3\u51FB\u9879\u76EE\u9009\u62E9 &#39;Edit csproj&#39;\u3002 \u5728 TypeScript \u914D\u7F6E\u9879 PropertyGroup \u4E4B\u540E\uFF0C\u6DFB\u52A0\u4E00\u4E2A ItemGroup \u548C Target \u914D\u7F6E\u9879\u6765\u590D\u5236 Angular \u6587\u4EF6\u3002</p><div class="language-markup ext-markup line-numbers-mode"><pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NodeLib</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$(MSBuildProjectDirectory)\\node_modules\\angular2\\bundles\\angular2.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NodeLib</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$(MSBuildProjectDirectory)\\node_modules\\angular2\\bundles\\angular2-polyfills.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NodeLib</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$(MSBuildProjectDirectory)\\node_modules\\systemjs\\dist\\system.src.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NodeLib</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$(MSBuildProjectDirectory)\\node_modules\\rxjs\\bundles\\Rx.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Target</span> <span class="token attr-name">Name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CopyFiles<span class="token punctuation">&quot;</span></span> <span class="token attr-name">BeforeTargets</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Build<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Copy</span> <span class="token attr-name">SourceFiles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@(NodeLib)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">DestinationFolder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$(MSBuildProjectDirectory)\\Scripts<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Target</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u73B0\u5728\uFF0C\u5728\u5DE5\u7A0B\u4E0A\u53F3\u51FB\u9009\u62E9\u91CD\u65B0\u52A0\u8F7D\u9879\u76EE\u3002 \u6B64\u65F6\u5E94\u5F53\u80FD\u5728\u89E3\u51B3\u65B9\u6848\u8D44\u6E90\u7BA1\u7406\u5668\uFF08Solution Explorer\uFF09\u4E2D\u770B\u5230<code>node_modules</code>\u3002</p><h3 id="\u7528-typescript-\u5199\u4E00\u4E2A\u7B80\u5355\u7684-angular-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u7528-typescript-\u5199\u4E00\u4E2A\u7B80\u5355\u7684-angular-\u5E94\u7528" aria-hidden="true">#</a> \u7528 TypeScript \u5199\u4E00\u4E2A\u7B80\u5355\u7684 Angular \u5E94\u7528</h3><p>\u9996\u5148\uFF0C\u5C06 <code>app.ts</code> \u6539\u6210\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;angular2/core&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>MyModel<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./model&quot;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    selector<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">my-app</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;Hello from {{getCompiler()}}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token punctuation">{</span>
    model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getCompiler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span>compiler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u63A5\u7740\u5728 <code>src</code> \u4E2D\u6DFB\u52A0 TypeScript \u6587\u4EF6 <code>model.ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyModel</span> <span class="token punctuation">{</span>
    compiler <span class="token operator">=</span> <span class="token string">&quot;TypeScript&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u518D\u5728 <code>src</code> \u4E2D\u6DFB\u52A0 <code>main.ts</code>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>bootstrap<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;angular2/platform/browser&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>MyApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./app&quot;</span><span class="token punctuation">;</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span>MyApp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6700\u540E\uFF0C\u5C06 <code>Views/Home/Index.cshtml</code> \u6539\u6210\uFF1A</p><div class="language-markup ext-markup line-numbers-mode"><pre class="language-markup"><code>@{
    ViewBag.Title = &quot;Home Page&quot;;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>~/Scripts/angular2-polyfills.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>~/Scripts/system.src.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>~/Scripts/rx.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>~/Scripts/angular2.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    System<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">packages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/Scripts/App&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;cjs&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">defaultExtension</span><span class="token operator">:</span> <span class="token string">&#39;js&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    System<span class="token punctuation">.</span><span class="token function">import</span><span class="token punctuation">(</span><span class="token string">&#39;/Scripts/App/main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>console<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-app</span><span class="token punctuation">&gt;</span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u8FD9\u91CC\u52A0\u8F7D\u4E86\u6B64\u5E94\u7528\u3002 \u8FD0\u884C ASP.NET \u5E94\u7528\uFF0C\u4F60\u5E94\u8BE5\u80FD\u770B\u5230\u4E00\u4E2A div \u663E\u793A &quot;Loading...&quot; \u7D27\u63A5\u7740\u66F4\u65B0\u6210\u663E\u793A &quot;Hello from TypeScript&quot;\u3002</p>`,17);function J(K,X){const p=e("ExternalLinkIcon"),o=e("RouterLink");return c(),l(u,null,[j,s("p",null,[T,s("a",I,[A,t(p)]),P,s("a",E,[M,t(p)]),N]),C,s("p",null,[B,D,V,H,L,t(o,{to:"/project-config/tsconfig.json.html"},{default:r(()=>[F]),_:1}),$]),O,s("ol",null,[s("li",null,[s("p",null,[U,s("a",G,[R,t(p)]),Q])]),W]),z],64)}var sn=b(w,[["render",J]]);export{sn as default};
