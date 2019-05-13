!function(t){var e={};function s(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,o=t=>"function"==typeof t&&i.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},l={},c={},a=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${a}--\x3e`,d=new RegExp(`${a}|${h}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;let s=-1,i=0;const o=[],n=e=>{const r=e.content,l=document.createTreeWalker(r,133,null,!1);let c=0;for(;l.nextNode();){s++;const e=l.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const o=e.attributes;let n=0;for(let t=0;t<o.length;t++)o[t].value.indexOf(a)>=0&&n++;for(;n-- >0;){const o=t.strings[i],n=g.exec(o)[2],r=n.toLowerCase()+u,l=e.getAttribute(r).split(d);this.parts.push({type:"attribute",index:s,name:n,strings:l}),e.removeAttribute(r),i+=l.length-1}}"TEMPLATE"===e.tagName&&n(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(a)>=0){const n=e.parentNode,r=t.split(d),l=r.length-1;for(let t=0;t<l;t++)n.insertBefore(""===r[t]?f():document.createTextNode(r[t]),e),this.parts.push({type:"node",index:++s});""===r[l]?(n.insertBefore(f(),e),o.push(e)):e.data=r[l],i+=l}}else if(8===e.nodeType)if(e.data===a){const t=e.parentNode;null!==e.previousSibling&&s!==c||(s++,t.insertBefore(f(),e)),c=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(o.push(e),s--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(a,t+1));)this.parts.push({type:"node",index:-1})}}};n(e);for(const t of o)t.parentNode.removeChild(t)}}const m=t=>-1!==t.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,i=0;const o=t=>{const n=document.createTreeWalker(t,133,null,!1);let r=n.nextNode();for(;s<e.length&&null!==r;){const t=e[s];if(m(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(r,t.name,t.strings,this.options));s++}else i++,"TEMPLATE"===r.nodeName&&o(r.content),r=n.nextNode();else this._parts.push(void 0),s++}};return o(t),n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="";for(let s=0;s<t;s++){const t=this.strings[s],i=g.exec(t);e+=i?t.substr(0,i.index)+i[1]+i[2]+u+i[3]+a:t+h}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=t=>null===t||!("object"==typeof t||"function"==typeof t);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===l||v(t)&&t===this.value||(this.value=t,o(t)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const t=this.value;this.value=l,t(this)}this.value!==l&&this.committer.commit()}}class b{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=f()),t._insert(this.endNode=f())}insertAfterPart(t){t._insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;o(this._pendingValue);){const t=this._pendingValue;this._pendingValue=l,t(this)}const t=this._pendingValue;t!==l&&(v(t)?t!==this.value&&this._commitText(t):t instanceof _?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===c?(this.value=c,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const o of t)void 0===(s=e[i])&&(s=new b(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(o),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;o(this._pendingValue);){const t=this._pendingValue;this._pendingValue=l,t(this)}if(this._pendingValue===l)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=l}}class C extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new x(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class x extends w{}let P=!1;try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;o(this._pendingValue);){const t=this._pendingValue;this._pendingValue=l,t(this)}if(this._pendingValue===l)return;const t=this._pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=E(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=l}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N=new class{handleAttributeExpressions(t,e,s,i){const o=e[0];return"."===o?new C(t,e.slice(1),s).parts:"@"===o?[new A(t,e.slice(1),i.eventContext)]:"?"===o?[new k(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new b(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function T(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return void 0===(s=e.keyString.get(i))&&(s=new p(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const V=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const $=(t,...e)=>new _(t,e,"html",N),j=133;function U(t,e){const{element:{content:s},parts:i}=t,o=document.createTreeWalker(s,j,null,!1);let n=q(i),r=i[n],l=-1,c=0;const a=[];let h=null;for(;o.nextNode();){l++;const t=o.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(a.push(t),null===h&&(h=t)),null!==h&&c++;void 0!==r&&r.index===l;)r.index=null!==h?-1:r.index-c,r=i[n=q(i,n)]}a.forEach(t=>t.parentNode.removeChild(t))}const z=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,j,null,!1);for(;s.nextNode();)e++;return e},q=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(m(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const M=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),B=!1);const H=t=>e=>{const s=M(e.type,t);let i=V.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},V.set(s,i));let o=i.stringsArray.get(e.strings);if(void 0!==o)return o;const n=e.strings.join(a);if(void 0===(o=i.keyString.get(n))){const s=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(s,t),o=new p(e,s),i.keyString.set(n,o)}return i.stringsArray.set(e.strings,o),o},R=["html","svg"],F=new Set,L=(t,e,s)=>{F.add(s);const i=t.querySelectorAll("style");if(0===i.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,s);const o=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}if((t=>{R.forEach(e=>{const s=V.get(M(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),U(t,s)})})})(s),function(t,e,s=null){const{element:{content:i},parts:o}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,j,null,!1);let r=q(o),l=0,c=-1;for(;n.nextNode();)for(c++,n.currentNode===s&&(l=z(e),s.parentNode.insertBefore(e,s));-1!==r&&o[r].index===c;){if(l>0){for(;-1!==r;)o[r].index+=l,r=q(o,r);return}r=q(o,r)}}(e,o,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s),window.ShadyCSS.nativeShadow){const s=e.element.content.querySelector("style");t.insertBefore(s.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(o,e.element.content.firstChild);const t=new Set;t.add(o),U(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((t,e)=>t);const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),D={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J},Y=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Z=32;class I extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=D){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=J){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||W,o="function"==typeof i?i:i.fromAttribute;return o?o(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=D){const i=this.constructor,o=i._attributeNameForProperty(t,s);if(void 0!==o){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||D;this._updateState=this._updateState|X,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~X}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,o=i._classProperties.get(t)||D;i._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}I.finalized=!0;const tt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol();class st{constructor(t,e){if(e!==et)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(tt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const it=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof st)return t.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new st(s,et)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ot=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,o=e.length;i<o;i++){const o=e[i];Array.isArray(o)?t(o,s):s.push(o)}return s}(t);class nt extends I{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ot(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?tt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}nt.finalized=!0,nt.render=((t,e,s)=>{const i=s.scopeName,o=O.has(e),n=e instanceof ShadowRoot&&B&&t instanceof _,l=n&&!F.has(i),c=l?document.createDocumentFragment():e;if(((t,e,s)=>{let i=O.get(e);void 0===i&&(r(e,e.firstChild),O.set(e,i=new b(Object.assign({templateFactory:T},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,c,Object.assign({templateFactory:H(i)},s)),l){const t=O.get(c);O.delete(c),t.value instanceof y&&L(c,t.value.template,i),r(e,e.firstChild),e.appendChild(c),O.set(e,t)}!o&&n&&window.ShadyCSS.styleElement(e.host)});customElements.define("todo-item",class extends nt{static get properties(){return{task:{type:Object},checkedAll:{type:Boolean}}}set checkedAll(t){this._checkedAll=t.toString(),this.task&&(this.task.completed="true"===t||"some_true"===t),this.requestUpdate("task")}get checkedAll(){return this._checkedAll}static get styles(){return it`
    
    <style>.{}
    
    span {
      cursor: pointer;
      display: var(--todo-item-display, flex);
      align-items: var(--todo-item-align-items, center);
      padding: var(--todo-item-padding)
    }
    eit-switch {
      margin-right: 10px;
    }
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    `}constructor(){super(),this.task=""}render(){return $`

    <span class="${this.task.completed?"completed":""}">
      <eit-switch ?checked="${this.task.completed}" @eit-switch-checked="${this.checkedChanged}"></eit-switch>${this.task.name}
    </span>
    `}checkedChanged(t){this.task.completed=t.detail,this.requestUpdate("task")}});customElements.define("eit-switch",class extends nt{static get properties(){return{checked:{type:Boolean}}}constructor(){super(),this.checked=!1}static get styles(){return it`
    :host {
      display: inline-block;
    }
    span {
      cursor: pointer;
      display: flex;
      background-color: var(--eit-switch-background-color, #95D5D5);
      border-radius: 4px;
      width: 20px;
      height: 20px;
      line-height: 0;
      align-items: center;
      justify-content: center;
    }
    .checked {
      background-color: #4ae;
      color: #fff;
    }
    path[fill="none"], .checked path[fill="none"] {
      fill: transparent;
    }
    path {
      fill: #fff;
    }
    .checked path {
      fill: #fff;
    }
    `}render(){return $`
      <span @click="${this.doClick}">
        ${this.checked?this.checkedIcon:this.unCheckedIcon}
      </span>
    `}doClick(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("eit-switch-checked",{bubbles:!0,composed:!0,detail:this.checked}))}get checkedIcon(){return $`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`}get unCheckedIcon(){return $`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`}});const rt=new class{originalTarget(t){return"composedPath"in t?t.composedPath()[0]:"path"in t?t.path[0]:"originalTarget"in t?t.originalTarget:"srcElement"in t?t.srcElement:t.target}typeOf(t){return this.typeOf.classTypePairs||(this.typeOf.classTypePairs={},"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(t=>{this.typeOf.classTypePairs["[object "+t+"]"]=t.toLowerCase()})),null==t?String(t):"object"==typeof t||"function"==typeof t?this.typeOf.classTypePairs[toString.call(t)]||"object":typeof t}randomId(t){let e="",s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";"number"!==this.typeOf(t)&&(t=32);for(var i=t;i>0;--i)e+=s[Math.floor(Math.random()*s.length)];return e}};customElements.define("eit-input",class extends nt{static get properties(){return{label:{type:String},placeholder:{type:String},disabled:{type:Boolean},value:{type:String}}}constructor(){super(),this.disabled=!1,this.placeholder="",this.value=""}static get styles(){return it`
      :host {
        display: block;
        margin-bottom: 12px;
      }
      label {
        display: block;
        color: #888;
        margin-bottom: 4px;
        color: #59e
      }
      input {
        
        box-sizing: border-box;
        border-radius: var(--eit-input-border-radius, 5px);
        border: var(--eit-input-border, 1px solid #888);
        font-size: var(--eit-input-font-size, 1em);
        padding: var(--eit-input-padding, 5px);
        box-shadow: var(--eit-input-box-shadow);
        margin: var(--eit-input-margin);
        line-height: var(--eit-input-line-height);
        width: 100%;
        
      }
      input:focus {
        outline: none;
        border-color: #6af
      }
      input::placeholder {
        color: #ccc;
      }
      input:disabled {
        background-color: #f5f5f5;
        border-color: #eee;
      }
    `}render(){return $`
      <div>
        ${this.label?$`<label for="textField">${this.label}</label>`:""}
        <input 
          type="text" 
          id="textField"
          placeholder="${this.placeholder}" 
          ?disabled="${this.disabled}"
          @keypress="${this.lookForEnter}"
          .value="${this.value}"
        >
      </div> 
    `}lookForEnter(t){let e=t.keyCode?t.keyCode:t.which,s=rt.originalTarget(t);"13"==e&&this.dispatchEvent(new CustomEvent("eit-input-enter",{detail:{target:s}}))}});customElements.define("djm-todo-app",class extends nt{static get styles(){return[it`
    
        <style>.{}
        
        /* Estilos para el input */
        eit-input {
        
          --eit-input-padding: 16px 16px 16px 43px;
          --eit-input-border-radius: 0;
          --eit-input-border: none;
          --eit-input-background: rgba(0, 0, 0, 0.003);
          --eit-input-box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
          --eit-input-margin: 0;
          --eit-input-font-size: 24px;
          --eit-input-line-height: 1.4em;
        
        }
    
        /* Estilos para los item */
        todo-item {
    
          --todo-item-display: block;
          --todo-item-align-items: normal;
          --todo-item-padding: 15px 14px 11px;
        
        }
        
        /* Estilos para Todo App */
        .todoapp {
      
            background: #fff;
            position: relative;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
        
        }
        
        .titulo {

            font-size: 50px;
            font-weight: 100;
            text-align: center;
            text-rendering: optimizeLegibility;
        }
        
        .todo-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .todo-list li {
            font-size: 24px;
            position: relative;
            border-bottom: 1px solid #ededed;            
        }
        
        header {
            position: relative;
        }
        
        header .cleckAll {
            
            position: absolute;
            top: 50%;
            margin-left: 14px;
            transform: translateY(-50%);
            --eit-switch-background-color: #989898;
        }
        
        .todo-list li .remove {
            
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            width: 40px;
            height: 40px;
            border: 0;
            background: none;
            margin: auto 0;
            font-size: 24px;
            color: red;
        
        }
    
    `]}static get properties(){return{todos:{type:Object},packtodos:{type:Array},todoId:{type:String},titletodo:{type:String},checkedAll:{type:String}}}constructor(){super(),this.todos={},this.packtodos=[],this.todoId="djmtodolist",this.titletodo="Todos",this.checkedAll=""}connectedCallback(){super.connectedCallback();let t=localStorage.getItem(this.todoId);t&&(this.todos=JSON.parse(t)),this.packtodos=this.todos.packtodos}todoChecked(t,e){t.detail?this.todos.completados=this.todos.completados+1:this.todos.completados=this.todos.completados-1,this.packtodos[e].completed=t.detail,this.packtodos[e].todoChecked=t.detail,this.todos.checkedstate=!!this.todos.completados,this.requestUpdate("packtodos"),this.resfrestStorage()}todoCheckedAll(t){let e=this.checkedAll.toString(),s=t.detail.toString();t.detail?this.todos.completados=this.packtodos.length:this.todos.completados=0,this.todos.checkedstate=!!this.todos.completados,this.checkedAll=e===s?"some_"+s:s,this.requestUpdate("checkedall",e),this.resfrestStorage()}addNewTodo(t){let e=t.detail.target.value,s={name:e,completed:!1};t.detail.target.value="",e.length&&(this.packtodos.unshift(s),this.resfrestStorage(),this.requestUpdate())}removeTodo(t,e){let s=t.target.parentElement.querySelector("todo-item");confirm(`Estas seguro que quieres eliminar la tarea: ${s.task.name}`)&&(s.task.completed&&(this.todos.completados=this.todos.completados-1),this.packtodos.splice(e,1),this.todos.checkedstate=!!this.todos.completados,0===this.packtodos.length&&(this.todos.completados=0),this.requestUpdate(),this.resfrestStorage())}resfrestStorage(){this.updateComplete.then(()=>(this.todos.packtodos=this.packtodos,localStorage.setItem(this.todoId,JSON.stringify(this.todos))))}render(){return $`

        <h1 class="titulo">${this.titletodo}</h1>
        <header class="header">

            ${this.packtodos.length?$`<eit-switch @eit-switch-checked="${this.todoCheckedAll}" title="Seleccionar todas las Todo" ?checked="${this.todos.checkedstate}" class="cleckAll"></eit-switch>`:""}
            <eit-input placeholder="Escribe aquí lo que hay que hacer" @eit-input-enter=${this.addNewTodo}></eit-input>

        </header>
        <div class="todoapp">

            <ul class="todo-list">
                
                ${this.packtodos.map((t,e)=>$`<li><todo-item @eit-switch-checked="${t=>this.todoChecked(t,e)}" .checkedAll="${this.checkedAll}" .task=${t}></todo-item>    
                                 <button class="remove" @click="${t=>this.removeTodo(t,e)}" title="borrar este Todo">×</button>
                                </li>`)}
                
            </ul>

          </div>`}})}]);