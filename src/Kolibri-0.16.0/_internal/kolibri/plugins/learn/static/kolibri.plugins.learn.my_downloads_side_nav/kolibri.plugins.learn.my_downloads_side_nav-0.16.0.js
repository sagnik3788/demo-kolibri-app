!function(){"use strict";var __webpack_require__={n:function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},d:function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})}};__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)};var external_kolibriCoreAppGlobal_coreVue_vuex_constants_namespaceObject=kolibriCoreAppGlobal.coreVue.vuex.constants,external_kolibriCoreAppGlobal_utils_navComponents_namespaceObject=kolibriCoreAppGlobal.utils.navComponents,external_kolibriCoreAppGlobal_utils_navComponents_default=__webpack_require__.n(external_kolibriCoreAppGlobal_utils_navComponents_namespaceObject),external_kolibriCoreAppGlobal_utils_coreStrings_namespaceObject=kolibriCoreAppGlobal.utils.coreStrings,external_kolibriCoreAppGlobal_utils_coreStrings_default=__webpack_require__.n(external_kolibriCoreAppGlobal_utils_coreStrings_namespaceObject),external_kolibriCoreAppGlobal_urls_namespaceObject=kolibriCoreAppGlobal.urls,external_kolibriCoreAppGlobal_urls_default=__webpack_require__.n(external_kolibriCoreAppGlobal_urls_namespaceObject),plugin_data_src=(__webpack_require__.g.kolibriPluginDataGlobal||{})["kolibri.plugins.learn.my_downloads_side_nav"]||{},component={name:"MyDownloadsSideNavEntry",get url(){return external_kolibriCoreAppGlobal_urls_default()["kolibri:kolibri.plugins.learn:my_downloads"]()},get label(){return external_kolibriCoreAppGlobal_utils_coreStrings_default().$tr("myDownloadsLabel")},icon:"download",role:external_kolibriCoreAppGlobal_coreVue_vuex_constants_namespaceObject.UserKinds.LEARNER,priority:10,section:external_kolibriCoreAppGlobal_coreVue_vuex_constants_namespaceObject.NavComponentSections.ACCOUNT};plugin_data_src.allowLearnerDownloads&&external_kolibriCoreAppGlobal_utils_navComponents_default().register(component)}();
//# sourceMappingURL=kolibri.plugins.learn.my_downloads_side_nav-0.16.0.js.map