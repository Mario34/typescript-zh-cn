import{e as n}from"./app.fed89489.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<h1 id="\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u7C7B\u578B</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u4E00\u4E2A\u5B57\u9762\u91CF\u662F\u4E00\u4E2A\u96C6\u4F53\u7C7B\u578B\u4E2D\u66F4\u4E3A\u5177\u4F53\u7684\u4E00\u79CD\u5B50\u7C7B\u578B\u3002\u610F\u601D\u662F\uFF1A<code>&quot;Hello World&quot;</code> \u662F\u4E00\u4E2A <code>string</code>\uFF0C\u4F46\u662F\u4E00\u4E2A <code>string</code> \u4E0D\u662F\u7C7B\u578B\u7CFB\u7EDF\u4E2D\u7684 <code>&quot;Hello World&quot;</code>\u3002</p><p>\u76EE\u524D TypeScript \u4E2D\u6709\u4E09\u79CD\u53EF\u7528\u7684\u5B57\u9762\u91CF\u7C7B\u578B\u96C6\u5408\uFF0C\u5206\u522B\u662F\uFF1A\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u548C\u5E03\u5C14\u503C\u3002\u901A\u8FC7\u4F7F\u7528\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u89C4\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u6216\u5E03\u5C14\u503C\u5FC5\u987B\u542B\u6709\u7684\u786E\u5B9A\u503C\u3002</p><h2 id="\u5B57\u9762\u91CF\u6536\u7A84" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u6536\u7A84" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u6536\u7A84</h2><p>\u5F53\u4F60\u901A\u8FC7 <code>var</code> \u6216 <code>let</code> \u6765\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u5B9E\u9645\u4E0A\u4F60\u5728\u544A\u8BC9\u7F16\u8BD1\u5668\u8FD9\u4E2A\u53D8\u91CF\u4E2D\u7684\u5185\u5BB9\u6709\u53EF\u80FD\u4F1A\u88AB\u6539\u53D8\u3002\u4E0E\u4E4B\u76F8\u5BF9\u5730\uFF0C\u7528 <code>const</code> \u6765\u58F0\u660E\u5BF9\u8C61\u4F1A\u8BA9 TypeScript \u77E5\u9053\u8FD9\u4E2A\u5BF9\u8C61\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u6539\u53D8\u3002</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>// We&#39;re making a guarantee that this variable
// helloWorld will never change, by using const.

// So, TypeScript sets the type to be &quot;Hello World&quot; not string
const helloWorld = &quot;Hello World&quot;;

// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = &quot;Hi World&quot;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4ECE\u65E0\u7A77\u591A\u79CD\u53EF\u80FD\u7684\u4F8B\u5B50\uFF08<code>string</code> \u53D8\u91CF\u7684\u503C\u6709\u65E0\u7A77\u591A\u79CD\uFF09\u5230\u4E00\u4E2A\u66F4\u5C0F\u3001\u786E\u5B9A\u6570\u91CF\u7684\u4F8B\u5B50\uFF08\u5728\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C<code>&quot;Hello Wrold&quot;</code> \u7684\u53EF\u80FD\u503C\u53EA\u6709\u4E00\u79CD\uFF09\u7684\u8FC7\u7A0B\u5C31\u53EB\u6536\u7A84\u3002</p><h2 id="\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B</h2><p>\u5B57\u9762\u91CF\u7C7B\u578B\u53EF\u4EE5\u901A\u8FC7\u8054\u5408\u8054\u7CFB\u3001\u7C7B\u578B\u5B88\u536B\u3001\u7C7B\u578B\u522B\u540D\u6765\u7ED3\u5408\u5B9E\u9645\u5B57\u7B26\u4E32\u503C\u3002\u901A\u8FC7\u8FD9\u4E9B\u7279\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u83B7\u53D6\u4E00\u79CD\u5B57\u7B26\u4E32\u5E76\u4F7F\u5176\u6709\u7C7B\u4F3C\u679A\u4E3E\uFF08enum\uFF09\u7684\u884C\u4E3A\u3002</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>type Easing = &quot;ease-in&quot; | &quot;ease-out&quot; | &quot;ease-in-out&quot;;

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === &quot;ease-in&quot;) {
      // ...
    } else if (easing === &quot;ease-out&quot;) {
    } else if (easing === &quot;ease-in-out&quot;) {
    } else {
      // It&#39;s possible that someone could reach this
      // by ignoring your types though.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, &quot;ease-in&quot;);
button.animate(0, 0, &quot;uneasy&quot;);
// Error: Argument of type &#39;&quot;uneasy&quot;&#39; is not assignable to parameter of type &#39;Easing&#39;.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4F60\u53EF\u4EE5\u4F20\u9012\u4E09\u79CD\u5141\u8BB8\u7684\u5B57\u7B26\u4E32\uFF0C\u4F46\u662F\u5982\u679C\u4F20\u9012\u5176\u4ED6\u7684\u5B57\u7B26\u4E32\u4F1A\u6536\u5230\u5982\u4E0B\u9519\u8BEF\uFF1A</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>Argument of type &#39;&quot;uneasy&quot;&#39; is not assignable to parameter of type &#39;&quot;ease-in&quot; | &quot;ease-out&quot; | &quot;ease-in-out&quot;&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B57\u7B26\u4E32\u5B57\u9762\u53EF\u4EE5\u901A\u8FC7\u76F8\u540C\u7684\u65B9\u5F0F\u7528\u6765\u5206\u522B\u91CD\u8F7D\uFF1A</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>function createElement(tagName: &quot;img&quot;): HTMLImageElement;
function createElement(tagName: &quot;input&quot;): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
  // ... code goes here ...
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u6570\u5B57\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u5B57\u5B57\u9762\u91CF\u7C7B\u578B</h2><p>TypeScript \u8FD8\u6709\u6570\u5B57\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u5B83\u7684\u884C\u4E3A\u548C\u4E0A\u8FF0\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u76F8\u540C\u3002</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6570\u5B57\u5B57\u9762\u91CF\u7C7B\u578B\u7ECF\u5E38\u7528\u6765\u63CF\u8FF0\u914D\u7F6E\u503C\uFF1A</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5E03\u5C14\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u5E03\u5C14\u5B57\u9762\u91CF\u7C7B\u578B</h2><p>TypeScript \u8FD8\u6709\u5E03\u5C14\u503C\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4ED6\u4EEC\u6765\u7EA6\u675F\u67D0\u4E9B\u5C5E\u6027\u4E4B\u95F4\u4E92\u6709\u5173\u8054\u7684\u5BF9\u8C61\u3002</p><div class="language-TypeScript ext-TypeScript line-numbers-mode"><pre class="language-TypeScript"><code>interface ValidationSuccess {
  isValid: true;
  reason: null;
};

interface ValidationFailure {
  isValid: false;
  reason: string;
};

type ValidationResult =
  | ValidationSuccess
  | ValidationFailure;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,23);function r(l,i){return a}var c=e(s,[["render",r]]);export{c as default};
