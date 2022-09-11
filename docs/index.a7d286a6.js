/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(t,e,i,n){"use strict";var r,s=["","webkit","Moz","MS","ms","o"],o=e.createElement("div"),a=Math.round,h=Math.abs,u=Date.now;function c(t,e,i){return setTimeout(g(t,i),e)}function l(t,e,i){return!!Array.isArray(t)&&(p(t,i[e],i),!0)}function p(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function f(e,i,n){var r="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=new Error("get-stack-trace"),n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=t.console&&(t.console.warn||t.console.log);return s&&s.call(t.console,r,n),e.apply(this,arguments)}}r="function"!=typeof Object.assign?function(t){if(t===n||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(r!==n&&null!==r)for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])}return e}:Object.assign;var d=f((function(t,e,i){for(var r=Object.keys(e),s=0;s<r.length;)(!i||i&&t[r[s]]===n)&&(t[r[s]]=e[r[s]]),s++;return t}),"extend","Use `assign`."),v=f((function(t,e){return d(t,e,!0)}),"merge","Use `assign`.");function m(t,e,i){var n,s=e.prototype;(n=t.prototype=Object.create(s)).constructor=t,n._super=s,i&&r(n,i)}function g(t,e){return function(){return t.apply(e,arguments)}}function T(t,e){return"function"==typeof t?t.apply(e&&e[0]||n,e):t}function y(t,e){return t===n?e:t}function E(t,e,i){p(C(e),(function(e){t.addEventListener(e,i,!1)}))}function I(t,e,i){p(C(e),(function(e){t.removeEventListener(e,i,!1)}))}function A(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function _(t,e){return t.indexOf(e)>-1}function C(t){return t.trim().split(/\s+/g)}function S(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function P(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];S(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort((function(t,i){return t[e]>i[e]})):n.sort()),n}function D(t,e){for(var i,r,o=e[0].toUpperCase()+e.slice(1),a=0;a<s.length;){if((r=(i=s[a])?i+o:e)in t)return r;a++}return n}var x=1;function w(e){var i=e.ownerDocument||e;return i.defaultView||i.parentWindow||t}var O="ontouchstart"in t,R=D(t,"PointerEvent")!==n,M=O&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),z="touch",N="mouse",X=24,Y=["x","y"],F=["clientX","clientY"];function W(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){T(t.options.enable,[t])&&i.handler(e)},this.init()}function q(t,e,i){var r=i.pointers.length,s=i.changedPointers.length,o=1&e&&r-s==0,a=12&e&&r-s==0;i.isFirst=!!o,i.isFinal=!!a,o&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,r=e.pointers,s=r.length;i.firstInput||(i.firstInput=k(e));s>1&&!i.firstMultiple?i.firstMultiple=k(e):1===s&&(i.firstMultiple=!1);var o=i.firstInput,a=i.firstMultiple,c=a?a.center:o.center,l=e.center=H(r);e.timeStamp=u(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=j(c,l),e.distance=V(c,l),function(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};1!==e.eventType&&4!==s.eventType||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y});e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}(i,e),e.offsetDirection=U(e.deltaX,e.deltaY);var p=L(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=p.x,e.overallVelocityY=p.y,e.overallVelocity=h(p.x)>h(p.y)?p.x:p.y,e.scale=a?(f=a.pointers,d=r,V(d[0],d[1],F)/V(f[0],f[1],F)):1,e.rotation=a?function(t,e){return j(e[1],e[0],F)+j(t[1],t[0],F)}(a.pointers,r):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,r,s,o,a=t.lastInterval||e,u=e.timeStamp-a.timeStamp;if(8!=e.eventType&&(u>25||a.velocity===n)){var c=e.deltaX-a.deltaX,l=e.deltaY-a.deltaY,p=L(u,c,l);r=p.x,s=p.y,i=h(p.x)>h(p.y)?p.x:p.y,o=U(c,l),t.lastInterval=e}else i=a.velocity,r=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=r,e.velocityY=s,e.direction=o}(i,e);var f,d;var v=t.element;A(e.srcEvent.target,v)&&(v=e.srcEvent.target);e.target=v}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function k(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:a(t.pointers[i].clientX),clientY:a(t.pointers[i].clientY)},i++;return{timeStamp:u(),pointers:e,center:H(e),deltaX:t.deltaX,deltaY:t.deltaY}}function H(t){var e=t.length;if(1===e)return{x:a(t[0].clientX),y:a(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:a(i/e),y:a(n/e)}}function L(t,e,i){return{x:e/t||0,y:i/t||0}}function U(t,e){return t===e?1:h(t)>=h(e)?t<0?2:4:e<0?8:16}function V(t,e,i){i||(i=Y);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function j(t,e,i){i||(i=Y);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}W.prototype={handler:function(){},init:function(){this.evEl&&E(this.element,this.evEl,this.domHandler),this.evTarget&&E(this.target,this.evTarget,this.domHandler),this.evWin&&E(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(w(this.element),this.evWin,this.domHandler)}};var G={mousedown:1,mousemove:2,mouseup:4},Z="mousedown",B="mousemove mouseup";function $(){this.evEl=Z,this.evWin=B,this.pressed=!1,W.apply(this,arguments)}m($,W,{handler:function(t){var e=G[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:N,srcEvent:t}))}});var J={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},K={2:z,3:"pen",4:N,5:"kinect"},Q="pointerdown",tt="pointermove pointerup pointercancel";function et(){this.evEl=Q,this.evWin=tt,W.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}t.MSPointerEvent&&!t.PointerEvent&&(Q="MSPointerDown",tt="MSPointerMove MSPointerUp MSPointerCancel"),m(et,W,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=J[n],s=K[t.pointerType]||t.pointerType,o=s==z,a=S(e,t.pointerId,"pointerId");1&r&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):12&r&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var it={touchstart:1,touchmove:2,touchend:4,touchcancel:8},nt="touchstart",rt="touchstart touchmove touchend touchcancel";function st(){this.evTarget=nt,this.evWin=rt,this.started=!1,W.apply(this,arguments)}function ot(t,e){var i=b(t.touches),n=b(t.changedTouches);return 12&e&&(i=P(i.concat(n),"identifier",!0)),[i,n]}m(st,W,{handler:function(t){var e=it[t.type];if(1===e&&(this.started=!0),this.started){var i=ot.call(this,t,e);12&e&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:z,srcEvent:t})}}});var at={touchstart:1,touchmove:2,touchend:4,touchcancel:8},ht="touchstart touchmove touchend touchcancel";function ut(){this.evTarget=ht,this.targetIds={},W.apply(this,arguments)}function ct(t,e){var i=b(t.touches),n=this.targetIds;if(3&e&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=b(t.changedTouches),a=[],h=this.target;if(s=i.filter((function(t){return A(t.target,h)})),1===e)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<o.length;)n[o[r].identifier]&&a.push(o[r]),12&e&&delete n[o[r].identifier],r++;return a.length?[P(s.concat(a),"identifier",!0),a]:void 0}m(ut,W,{handler:function(t){var e=at[t.type],i=ct.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:z,srcEvent:t})}});function lt(){W.apply(this,arguments);var t=g(this.handler,this);this.touch=new ut(this.manager,t),this.mouse=new $(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function pt(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,ft.call(this,e)):12&t&&ft.call(this,e)}function ft(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout((function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)}),2500)}}function dt(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(s<=25&&o<=25)return!0}return!1}m(lt,W,{handler:function(t,e,i){var n=i.pointerType==z,r=i.pointerType==N;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)pt.call(this,e,i);else if(r&&dt.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var vt=D(o.style,"touchAction"),mt=vt!==n,gt="compute",Tt="auto",yt="manipulation",Et="none",It="pan-x",At="pan-y",_t=function(){if(!mt)return!1;var e={},i=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){e[n]=!i||t.CSS.supports("touch-action",n)})),e}();function Ct(t,e){this.manager=t,this.set(e)}Ct.prototype={set:function(t){t==gt&&(t=this.compute()),mt&&this.manager.element.style&&_t[t]&&(this.manager.element.style[vt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return p(this.manager.recognizers,(function(e){T(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(_(t,Et))return Et;var e=_(t,It),i=_(t,At);return e&&i?Et:e||i?e?It:At:_(t,yt)?yt:Tt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,r=_(n,Et)&&!_t.none,s=_(n,At)&&!_t["pan-y"],o=_(n,It)&&!_t["pan-x"];if(r){var a=1===t.pointers.length,h=t.distance<2,u=t.deltaTime<250;if(a&&h&&u)return}if(!o||!s)return r||s&&6&i||o&&i&X?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var St=32;function bt(t){this.options=r({},this.defaults,t||{}),this.id=x++,this.manager=null,this.options.enable=y(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function Pt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function Dt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function xt(t,e){var i=e.manager;return i?i.get(t):t}function wt(){bt.apply(this,arguments)}function Ot(){wt.apply(this,arguments),this.pX=null,this.pY=null}function Rt(){wt.apply(this,arguments)}function Mt(){bt.apply(this,arguments),this._timer=null,this._input=null}function zt(){wt.apply(this,arguments)}function Nt(){wt.apply(this,arguments)}function Xt(){bt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Yt(t,e){return(e=e||{}).recognizers=y(e.recognizers,Yt.defaults.preset),new Ft(t,e)}bt.prototype={defaults:{},set:function(t){return r(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(l(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=xt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return l(t,"dropRecognizeWith",this)||(t=xt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(l(t,"requireFailure",this))return this;var e=this.requireFail;return-1===S(e,t=xt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(l(t,"dropRequireFailure",this))return this;t=xt(t,this);var e=S(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<8&&n(e.options.event+Pt(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=8&&n(e.options.event+Pt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=St},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=r({},t);if(!T(this.options.enable,[this,e]))return this.reset(),void(this.state=St);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},m(wt,bt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=6&e,r=this.attrTest(t);return n&&(8&i||!r)?16|e:n||r?4&i?8|e:2&e?4|e:2:St}}),m(Ot,wt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push(At),t&X&&e.push(It),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(6&e.direction?(r=0===s?1:s<0?2:4,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?1:o<0?8:16,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return wt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Dt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),m(Rt,wt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Et]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),m(Mt,bt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Tt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),this._timer=c((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return St},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=u(),this.manager.emit(this.options.event,this._input)))}}),m(zt,wt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Et]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),m(Nt,wt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return Ot.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return 30&i?e=t.overallVelocity:6&i?e=t.overallVelocityX:i&X&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&h(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=Dt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),m(Xt,bt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[yt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(n&&r&&i){if(4!=t.eventType)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||V(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=c((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return St},failTimeout:function(){return this._timer=c((function(){this.state=St}),this.options.interval,this),St},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Yt.VERSION="2.0.7",Yt.defaults={domEvents:!1,touchAction:gt,enable:!0,inputTarget:null,inputClass:null,preset:[[zt,{enable:!1}],[Rt,{enable:!1},["rotate"]],[Nt,{direction:6}],[Ot,{direction:6},["swipe"]],[Xt],[Xt,{event:"doubletap",taps:2},["tap"]],[Mt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Ft(t,e){var i;this.options=r({},Yt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(R?et:M?ut:O?lt:$))(i,q),this.touchAction=new Ct(this,this.options.touchAction),Wt(this,!0),p(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function Wt(t,e){var i,n=t.element;n.style&&(p(t.options.cssProps,(function(r,s){i=D(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}Ft.prototype={set:function(t){return r(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,r=e.curRecognizer;(!r||r&&8&r.state)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&14&i.state&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof bt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(l(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(l(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=S(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==n&&e!==n){var i=this.handlers;return p(C(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this}},off:function(t,e){if(t!==n){var i=this.handlers;return p(C(t),(function(t){e?i[t]&&i[t].splice(S(i[t],e),1):delete i[t]})),this}},emit:function(t,i){this.options.domEvents&&function(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}(t,i);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){i.type=t,i.preventDefault=function(){i.srcEvent.preventDefault()};for(var r=0;r<n.length;)n[r](i),r++}},destroy:function(){this.element&&Wt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},r(Yt,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:St,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:X,DIRECTION_ALL:30,Manager:Ft,Input:W,TouchAction:Ct,TouchInput:ut,MouseInput:$,PointerEventInput:et,TouchMouseInput:lt,SingleTouchInput:st,Recognizer:bt,AttrRecognizer:wt,Tap:Xt,Pan:Ot,Swipe:Nt,Pinch:Rt,Rotate:zt,Press:Mt,on:E,off:I,each:p,merge:v,extend:d,assign:r,inherit:m,bindFn:g,prefixed:D}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=Yt,"function"==typeof define&&define.amd?define((function(){return Yt})):"undefined"!=typeof module&&module.exports?module.exports=Yt:t.Hammer=Yt}(window,document);