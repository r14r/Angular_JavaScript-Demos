webpackJsonp([2],{54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(19),r=n(55);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},55:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),i=n(9),c=n(1),p=n(56),l=n(58),u=function(){function e(){}return e=o([c.NgModule({bootstrap:[p.AppComponent],imports:[r.BrowserModule],declarations:[p.AppComponent],providers:[{provide:i.EVENT_MANAGER_PLUGINS,useClass:l.DirectClickPlugin,multi:!0}]})],e)}();t.AppModule=u},56:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(){function e(){}return e.prototype.ngDoCheck=function(){console.warn("Change-detection algorithm at",Date.now())},e.prototype.handleDirectClick=function(e){console.log("Direct click.")},e=o([r.Component({selector:"my-app",host:{"(directclick)":"handleDirectClick( $event )"},styles:[n(57)],template:"\n\t\tThis text is contained directly within the root component.\n\t\t<p>\n\t\t\tThis text is contained within a <code>P</code> tag.\n\t\t</p>\n\t\tThis text is contained directly within the root component.\n\t"})],e)}();t.AppComponent=i},57:function(e,t){e.exports=":host {\n  border: 1px solid #CCCCCC ;\n  cursor: pointer ;\n  display: block ;\n  font-size: 18px ;\n  padding: 20px 20px 20px 20px ;\n  user-select: none ;\n  -moz-user-select: none ;\n  -webkit-user-select: none ;\n}\np {\n  background-color: #F0F0F0 ;\n  padding: 10px 10px 10px 10px ;\n}\n"},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.addEventListener=function(e,t,n){function o(){e.addEventListener("click",i,!1)}function r(){e.removeEventListener("click",i,!1)}function i(t){t.target===e&&c.run(function(){n(t)})}var c=this.manager.getZone();return c.runOutsideAngular(o),r},e.prototype.addGlobalEventListener=function(e,t,n){throw new Error("Unsupported event target "+e+" for event "+t+".")},e.prototype.supports=function(e){return"directclick"===e},e}();t.DirectClickPlugin=o}},[54]);