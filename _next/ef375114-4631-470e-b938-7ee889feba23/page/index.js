
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([6],{139:function(t,e,i){var n;!function(a,s){void 0!==(n=function(){return s(a,a.document)}.call(e,i,e,t))&&(t.exports=n)}("undefined"!=typeof window?window:this,function(t,e){"use strict";function i(i){if(this.hasDeviceMotion="ondevicemotion"in t,this.options={threshold:15,timeout:1e3},"object"==typeof i)for(var n in i)i.hasOwnProperty(n)&&(this.options[n]=i[n]);if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof e.CustomEvent)this.event=new e.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof e.createEvent)return!1;this.event=e.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}return i.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},i.prototype.start=function(){this.reset(),this.hasDeviceMotion&&t.addEventListener("devicemotion",this,!1)},i.prototype.stop=function(){this.hasDeviceMotion&&t.removeEventListener("devicemotion",this,!1),this.reset()},i.prototype.devicemotion=function(e){var i,n=e.accelerationIncludingGravity,a=0,s=0,o=0;if(null===this.lastX&&null===this.lastY&&null===this.lastZ)return this.lastX=n.x,this.lastY=n.y,void(this.lastZ=n.z);a=Math.abs(this.lastX-n.x),s=Math.abs(this.lastY-n.y),o=Math.abs(this.lastZ-n.z),(a>this.options.threshold&&s>this.options.threshold||a>this.options.threshold&&o>this.options.threshold||s>this.options.threshold&&o>this.options.threshold)&&(i=new Date,i.getTime()-this.lastTime.getTime()>this.options.timeout&&(t.dispatchEvent(this.event),this.lastTime=new Date)),this.lastX=n.x,this.lastY=n.y,this.lastZ=n.z},i.prototype.handleEvent=function(t){if("function"==typeof this[t.type])return this[t.type](t)},i})},18:function(t,e,i){t.exports=i(65)},406:function(t,e,i){t.exports=i(407)},407:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(11),s=n(a),o=i(5),l=n(o),r=i(7),d=n(r),h=i(12),u=n(h),c=i(13),f=n(c),p=i(18),m=n(p),x=i(1),v=n(x),b=i(63),y=n(b),k=i(34),w=n(k),g=i(139),E=n(g),z=i(46),j=n(z),_=i(64),M=n(_),P=function(t){function e(){return(0,l.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).apply(this,arguments))}return(0,f.default)(e,t),(0,d.default)(e,[{key:"didShake",value:function(){j.default.push("create")}},{key:"componentDidMount",value:function(){this.shake=new E.default({threshold:5,timeout:200}),this.shake.start(),window.addEventListener("shake",this.didShake)}},{key:"componentWillUnmount",value:function(){this.shake.stop(),window.removeEventListener("shake",this.didShake)}},{key:"render",value:function(){return v.default.createElement("div",{className:"IntroContainer","data-jsx":2917707954},v.default.createElement(w.default,null,v.default.createElement("title",{"data-jsx":2917707954},"Ultimate Pizza Bravery")),v.default.createElement(M.default,{title:"Ultimate Pizza Bravery"},v.default.createElement("h1",{"data-jsx":2917707954},"Ultimate ",v.default.createElement("span",{className:"PizzaTitle","data-jsx":2917707954},"Pizza")," Bravery"),v.default.createElement(y.default,{prefetch:!0,href:"create"},v.default.createElement("a",{"data-jsx":2917707954},v.default.createElement("p",{"data-jsx":2917707954},"Shake your device to get started (or click here)")))),v.default.createElement(m.default,{styleId:2917707954,css:'.IntroContainer[data-jsx="2917707954"]{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:col;-ms-flex-direction:col;flex-direction:col;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}h1[data-jsx="2917707954"]{font-size:3rem;line-height:1;-webkit-text-shadow:0 4px 1px rgba(0,0,0,.25);text-shadow:0 4px 1px rgba(0,0,0,.25);-webkit-text-stroke:2px #F15A24;text-stroke:2px #F15A24;margin-top:0}.PizzaTitle[data-jsx="2917707954"]{color:#fff}'}))}}]),e}(v.default.Component);e.default=P},64:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(18),s=n(a),o=i(1),l=n(o),r=i(34),d=n(r),h=function(t){var e=t.title,i=t.children;return l.default.createElement("div",{className:"PageContainer","data-jsx":2635779118},l.default.createElement(d.default,null,l.default.createElement("title",{"data-jsx":2635779118},"Real Ultimate Bravery - ",e),l.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1","data-jsx":2635779118})),i,l.default.createElement(s.default,{styleId:2635779118,css:'html{font-size:18px;height:100%}*{box-sizing:border-box}body{background:#F15A24;color:#000;-webkit-text-align:center;text-align:center;font-size:100%;font-family:Arial, san-serif;padding:0;margin:0;min-height:100%}button{background:transparent;border:2px solid #000;border-radius:.25rem;box-shadow:2px 5px 8px rgba(0,0,0,0.15);padding:.5rem 1rem}a{color:black;font-size:16px;font-weight:bold;-webkit-text-decoration:none;text-decoration:none}h1,h2,h3,h4,h5,h6{font-family:Bitter, Georgia, serif;-webkit-text-transform:uppercase;text-transform:uppercase;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px}input[type="text"]{border-radius:5px;border:0;font-size:18px;padding:.5rem;width:100%}.PageContainer{padding:1rem;margin:0 auto;max-width:35rem}'}),l.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Bitter",rel:"stylesheet","data-jsx":2635779118}))};e.default=h}},[406]);
            return { page: comp.default }
          })
        