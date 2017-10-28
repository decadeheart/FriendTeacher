webpackJsonp([9],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "submit",
    on: {
      "click": function($event) {
        _vm.login()
      }
    }
  }, [_c('span', [_vm._v("登录入口")])]), _vm._v(" "), _c('div', {
    staticClass: "submit",
    on: {
      "click": function($event) {
        _vm.register()
      }
    }
  }, [_c('span', [_vm._v("注册入口")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c785fa5", module.exports)
  }
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("ca244720", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4c785fa5&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IndexPage.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4c785fa5&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IndexPage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(144)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(72),
  /* template */
  __webpack_require__(131),
  /* scopeId */
  "data-v-4c785fa5",
  /* cssModules */
  null
)
Component.options.__file = "G:\\web\\FriendTeacher\\fe\\src\\components\\IndexPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] IndexPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c785fa5", Component.options)
  } else {
    hotAPI.reload("data-v-4c785fa5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//

var IndexPage = {
  methods: {
    login: function login() {
      location.href = "./login.html";
    },
    register: function register() {
      location.href = "./beforeLogin.html";
    }
  }
};
exports.default = IndexPage;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _IndexPage = __webpack_require__(36);

var _IndexPage2 = _interopRequireDefault(_IndexPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default({
  el: "#app",
  components: {
    "index-page": _IndexPage2.default
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.submit[data-v-4c785fa5] {\n  width: 208px;\n  height: 34px;\n  margin: 95px auto 15px auto;\n  background: #F34A37;\n  text-align: center;\n  border-radius: 4px;\n}\n.submit span[data-v-4c785fa5] {\n  font-size: 18px;\n  color: #fff;\n  font-family: 宋体;\n  line-height: 34px;\n}\n.submit img[data-v-4c785fa5] {\n  height: 14px;\n  width: 11px;\n}\n", ""]);

// exports


/***/ })

},[84]);