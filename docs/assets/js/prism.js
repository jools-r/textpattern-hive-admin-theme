var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var a=/\blang(?:uage)?-(\w+)\b/i,b=0,c=_self.Prism={util:{encode:function(a){return a instanceof d?new d(a.type,c.util.encode(a.content),a.alias):"Array"===c.util.type(a)?a.map(c.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++b}),a.__id},clone:function(a){var b=c.util.type(a);switch(b){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=c.util.clone(a[e]));return d;case"Array":return a.map&&a.map(function(a){return c.util.clone(a)})}return a}},languages:{extend:function(a,b){var d=c.util.clone(c.languages[a]);for(var e in b)d[e]=b[e];return d},insertBefore:function(a,b,d,e){e=e||c.languages;var f=e[a];if(2==arguments.length){d=arguments[1];for(var g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);return f}var h={};for(var i in f)if(f.hasOwnProperty(i)){if(i==b)for(var g in d)d.hasOwnProperty(g)&&(h[g]=d[g]);h[i]=f[i]}return c.languages.DFS(c.languages,function(b,c){c===e[a]&&b!=a&&(this[b]=h)}),e[a]=h},DFS:function(a,b,d,e){e=e||{};for(var f in a)a.hasOwnProperty(f)&&(b.call(a,f,a[f],d||f),"Object"!==c.util.type(a[f])||e[c.util.objId(a[f])]?"Array"!==c.util.type(a[f])||e[c.util.objId(a[f])]||(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,f,e)):(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,null,e)))}},plugins:{},highlightAll:function(a,b){for(var d,e=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),f=0;d=e[f++];)c.highlightElement(d,a===!0,b)},highlightElement:function(b,d,e){for(var f,g,h=b;h&&!a.test(h.className);)h=h.parentNode;h&&(f=(h.className.match(a)||[,""])[1],g=c.languages[f]),b.className=b.className.replace(a,"").replace(/\s+/g," ")+" language-"+f,h=b.parentNode,/pre/i.test(h.nodeName)&&(h.className=h.className.replace(a,"").replace(/\s+/g," ")+" language-"+f);var i=b.textContent,j={element:b,language:f,grammar:g,code:i};if(!i||!g)return void c.hooks.run("complete",j);if(c.hooks.run("before-highlight",j),d&&_self.Worker){var k=new Worker(c.filename);k.onmessage=function(a){j.highlightedCode=a.data,c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(j.element),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},k.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else j.highlightedCode=c.highlight(j.code,j.grammar,j.language),c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(b),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},highlight:function(a,b,e){var f=c.tokenize(a,b);return d.stringify(c.util.encode(f),e)},tokenize:function(a,b,d){var e=c.Token,f=[a],g=b.rest;if(g){for(var h in g)b[h]=g[h];delete b.rest}a:for(var h in b)if(b.hasOwnProperty(h)&&b[h]){var i=b[h];i="Array"===c.util.type(i)?i:[i];for(var j=0;j<i.length;++j){var k=i[j],l=k.inside,m=!!k.lookbehind,n=0,o=k.alias;k=k.pattern||k;for(var p=0;p<f.length;p++){var q=f[p];if(f.length>a.length)break a;if(!(q instanceof e)){k.lastIndex=0;var r=k.exec(q);if(r){m&&(n=r[1].length);var s=r.index-1+n,r=r[0].slice(n),t=r.length,u=s+t,v=q.slice(0,s+1),w=q.slice(u+1),x=[p,1];v&&x.push(v);var y=new e(h,l?c.tokenize(r,l):r,o);x.push(y),w&&x.push(w),Array.prototype.splice.apply(f,x)}}}}}return f},hooks:{all:{},add:function(a,b){var d=c.hooks.all;d[a]=d[a]||[],d[a].push(b)},run:function(a,b){var d=c.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(b)}}},d=c.Token=function(a,b,c){this.type=a,this.content=b,this.alias=c};if(d.stringify=function(a,b,e){if("string"==typeof a)return a;if("Array"===c.util.type(a))return a.map(function(c){return d.stringify(c,b,a)}).join("");var f={type:a.type,content:d.stringify(a.content,b,e),tag:"span",classes:["token",a.type],attributes:{},language:b,parent:e};if("comment"==f.type&&(f.attributes.spellcheck="true"),a.alias){var g="Array"===c.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(f.classes,g)}c.hooks.run("wrap",f);var h="";for(var i in f.attributes)h+=(h?" ":"")+i+'="'+(f.attributes[i]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+h+">"+f.content+"</"+f.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(a){var b=JSON.parse(a.data),d=b.language,e=b.code,f=b.immediateClose;_self.postMessage(c.highlight(e,c.languages[d],d)),f&&_self.close()},!1),_self.Prism):_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(c.filename=e.src,document.addEventListener&&!e.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",c.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var a={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(b){for(var c,d=b.getAttribute("data-src"),e=b,f=/\blang(?:uage)?-(?!\*)(\w+)\b/i;e&&!f.test(e.className);)e=e.parentNode;if(e&&(c=(b.className.match(f)||[,""])[1]),!c){var g=(d.match(/\.(\w+)$/)||[,""])[1];c=a[g]||g}var h=document.createElement("code");h.className="language-"+c,b.textContent="",h.textContent="Loading…",b.appendChild(h);var i=new XMLHttpRequest;i.open("GET",d,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(h.textContent=i.responseText,Prism.highlightElement(h)):i.status>=400?h.textContent="✖ Error "+i.status+" while fetching file: "+i.statusText:h.textContent="✖ Error: File does not exist or is empty")},i.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}(),function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(a){if(a.code){var b=a.element.parentNode,c=/\s*\bline-numbers\b\s*/;if(b&&/pre/i.test(b.nodeName)&&(c.test(b.className)||c.test(a.element.className))&&!a.element.querySelector(".line-numbers-rows")){c.test(a.element.className)&&(a.element.className=a.element.className.replace(c,"")),c.test(b.className)||(b.className+=" line-numbers");var d,e=a.code.match(/\n(?!$)/g),f=e?e.length+1:1,g=new Array(f+1);g=g.join("<span></span>"),d=document.createElement("span"),d.className="line-numbers-rows",d.innerHTML=g,b.hasAttribute("data-start")&&(b.style.counterReset="linenumber "+(parseInt(b.getAttribute("data-start"),10)-1)),a.element.appendChild(d)}}})}(),function(){if("undefined"!=typeof self&&self.Prism&&self.document){var a={css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",asciidoc:"AsciiDoc",aspnet:"ASP.NET (C#)",autoit:"AutoIt",autohotkey:"AutoHotkey",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",fsharp:"F#",glsl:"GLSL",http:"HTTP",inform7:"Inform 7",json:"JSON",latex:"LaTeX",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",parigp:"PARI/GP",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",jsx:"React JSX",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",yaml:"YAML"};Prism.hooks.add("before-highlight",function(b){var c=b.element.parentNode;if(c&&/pre/i.test(c.nodeName)){var d,e,f=c.getAttribute("data-language")||a[b.language]||b.language.substring(0,1).toUpperCase()+b.language.substring(1),g=c.previousSibling;g&&/\s*\bprism-show-language\b\s*/.test(g.className)&&g.firstChild&&/\s*\bprism-show-language-label\b\s*/.test(g.firstChild.className)?e=g.firstChild:(d=document.createElement("div"),e=document.createElement("div"),e.className="prism-show-language-label",d.className="prism-show-language",d.appendChild(e),c.parentNode.insertBefore(d,c)),e.innerHTML=f}})}}();