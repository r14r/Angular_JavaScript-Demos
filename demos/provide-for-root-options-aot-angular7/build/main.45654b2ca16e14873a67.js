(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0ZzE":function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),n("DHAg");var r=n("wov0");n("ZYjt").platformBrowser().bootstrapModuleFactory(r.AppModuleNgFactory)},DHAg:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),n("kzjQ"),n("0TWp")},Iid4:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=n("CcnG"),t=n("n4fE");o.MyService=t.MyService;var i=n("n4fE");o.MyServiceOptions=i.MyServiceOptions;var p=function(){function e(){}return e.forRoot=function(n){return{ngModule:e,providers:[{provide:o.FOR_ROOT_OPTIONS_TOKEN,useValue:n},{provide:i.MyServiceOptions,useFactory:l,deps:[o.FOR_ROOT_OPTIONS_TOKEN]}]}},e}();function l(e){var o=new i.MyServiceOptions;return e&&("number"==typeof e.retryCount&&(o.retryCount=e.retryCount),"number"==typeof e.retryInterval&&(o.retryInterval=e.retryInterval)),o}o.MyServiceModule=p,o.FOR_ROOT_OPTIONS_TOKEN=new r.InjectionToken("forRoot() MyService configuration."),o.provideMyServiceOptions=l},K0Kg:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.styles=["[_nghost-%COMP%] {\n  display: block ;\n  font-size: 18px ;\n}"]},Mn8e:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});n("Iid4");var r=function(){return function(e){console.group("AppComponent Constructor"),console.log("myService injectable"),console.log(e),console.groupEnd()}}();o.AppComponent=r},SmDo:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=function(){return function(){}}();o.AppModule=r},kcRK:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=n("K0Kg"),t=n("CcnG"),i=n("Mn8e"),p=n("n4fE"),l=[r.styles],c=t.ɵcrt({encapsulation:0,styles:l,data:{}});function u(e){return t.ɵvid(0,[(e()(),t.ɵted(-1,null,[" Testing forRoot() configuration, see console logging. "]))],null,null)}function a(e){return t.ɵvid(0,[(e()(),t.ɵeld(0,0,null,null,1,"my-app",[],null,null,null,u,c)),t.ɵdid(1,49152,null,0,i.AppComponent,[p.MyService],null,null)],null,null)}o.RenderType_AppComponent=c,o.View_AppComponent_0=u,o.View_AppComponent_Host_0=a;var s=t.ɵccf("my-app",i.AppComponent,a,{},{},[]);o.AppComponentNgFactory=s},n4fE:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=n("CcnG"),t=function(){function e(){this.retryCount=6,this.retryInterval=2e3}return e.ngInjectableDef=r.defineInjectable({factory:function(){return new e},token:e,providedIn:"root"}),e}();o.MyServiceOptions=t;var i=function(){function e(e){this.options=e,console.group("MyService Constructor"),console.log("Injected Options"),console.log(this.options),console.groupEnd()}return e.ngInjectableDef=r.defineInjectable({factory:function(){return new e(r.inject(t))},token:e,providedIn:"root"}),e}();o.MyService=i},wov0:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=n("CcnG"),t=n("SmDo"),i=n("Mn8e"),p=n("kcRK"),l=n("Ip0R"),c=n("ZYjt"),u=n("n4fE"),a=n("Iid4"),s=r.ɵcmf(t.AppModule,[i.AppComponent],function(e){return r.ɵmod([r.ɵmpd(512,r.ComponentFactoryResolver,r.ɵCodegenComponentFactoryResolver,[[8,[p.AppComponentNgFactory]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r.ɵmpd(5120,r.LOCALE_ID,r.ɵangular_packages_core_core_r,[[3,r.LOCALE_ID]]),r.ɵmpd(4608,l.NgLocalization,l.NgLocaleLocalization,[r.LOCALE_ID,[2,l.ɵangular_packages_common_common_a]]),r.ɵmpd(4608,r.Compiler,r.Compiler,[]),r.ɵmpd(5120,r.APP_ID,r.ɵangular_packages_core_core_g,[]),r.ɵmpd(5120,r.IterableDiffers,r.ɵangular_packages_core_core_p,[]),r.ɵmpd(5120,r.KeyValueDiffers,r.ɵangular_packages_core_core_q,[]),r.ɵmpd(4608,c.DomSanitizer,c.ɵDomSanitizerImpl,[l.DOCUMENT]),r.ɵmpd(6144,r.Sanitizer,null,[c.DomSanitizer]),r.ɵmpd(4608,c.HAMMER_GESTURE_CONFIG,c.HammerGestureConfig,[]),r.ɵmpd(5120,c.EVENT_MANAGER_PLUGINS,function(e,o,n,r,t,i,p,l){return[new c.ɵDomEventsPlugin(e,o,n),new c.ɵKeyEventsPlugin(r),new c.ɵHammerGesturesPlugin(t,i,p,l)]},[l.DOCUMENT,r.NgZone,r.PLATFORM_ID,l.DOCUMENT,l.DOCUMENT,c.HAMMER_GESTURE_CONFIG,r.ɵConsole,[2,c.HAMMER_LOADER]]),r.ɵmpd(4608,c.EventManager,c.EventManager,[c.EVENT_MANAGER_PLUGINS,r.NgZone]),r.ɵmpd(135680,c.ɵDomSharedStylesHost,c.ɵDomSharedStylesHost,[l.DOCUMENT]),r.ɵmpd(4608,c.ɵDomRendererFactory2,c.ɵDomRendererFactory2,[c.EventManager,c.ɵDomSharedStylesHost]),r.ɵmpd(6144,r.RendererFactory2,null,[c.ɵDomRendererFactory2]),r.ɵmpd(6144,c.ɵSharedStylesHost,null,[c.ɵDomSharedStylesHost]),r.ɵmpd(4608,r.Testability,r.Testability,[r.NgZone]),r.ɵmpd(5120,u.MyServiceOptions,a.provideMyServiceOptions,[a.FOR_ROOT_OPTIONS_TOKEN]),r.ɵmpd(1073742336,l.CommonModule,l.CommonModule,[]),r.ɵmpd(1024,r.ErrorHandler,c.ɵangular_packages_platform_browser_platform_browser_a,[]),r.ɵmpd(1024,r.APP_INITIALIZER,function(e){return[c.ɵangular_packages_platform_browser_platform_browser_j(e)]},[[2,r.NgProbeToken]]),r.ɵmpd(512,r.ApplicationInitStatus,r.ApplicationInitStatus,[[2,r.APP_INITIALIZER]]),r.ɵmpd(131584,r.ApplicationRef,r.ApplicationRef,[r.NgZone,r.ɵConsole,r.Injector,r.ErrorHandler,r.ComponentFactoryResolver,r.ApplicationInitStatus]),r.ɵmpd(1073742336,r.ApplicationModule,r.ApplicationModule,[r.ApplicationRef]),r.ɵmpd(1073742336,c.BrowserModule,c.BrowserModule,[[3,c.BrowserModule]]),r.ɵmpd(1073742336,a.MyServiceModule,a.MyServiceModule,[]),r.ɵmpd(1073742336,t.AppModule,t.AppModule,[]),r.ɵmpd(256,r.ɵAPP_ROOT,!0,[]),r.ɵmpd(256,a.FOR_ROOT_OPTIONS_TOKEN,{retryInterval:5e3,retryCount:3},[])])});o.AppModuleNgFactory=s},zn8P:function(e,o){function n(e){return Promise.resolve().then(function(){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[["0ZzE",1,2]]]);
//# sourceMappingURL=main.45654b2ca16e14873a67.js.map