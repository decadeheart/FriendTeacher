webpackJsonp([11],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "logo"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "read"
  }, [_c('span', [_vm._v("我已阅读")]), _vm._v(" "), _c('a', [_vm._v("《友师友科技运营条款》")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.checked),
      expression: "checked"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.checked) ? _vm._i(_vm.checked, null) > -1 : (_vm.checked)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.checked,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.checked = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.checked = $$c
        }
      }
    }
  })]), _vm._v(" "), _c('div', {
    class: _vm.change,
    on: {
      "click": function($event) {
        _vm.next()
      }
    }
  }, [_vm._v("\n    下一步\n  ")]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab-warpper"
  }, [_c('div', {
    staticClass: "login-tab",
    attrs: {
      "onclick": "change()"
    }
  }, [_c('a', [_vm._v("注册")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "thank"
  }, [_c('div', [_vm._v("感谢您和大多数用户的决策")]), _vm._v(" "), _c('div', [_vm._v("全新高效学习平台为您开启")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "had"
  }, [_c('a', {
    attrs: {
      "href": "./login.html"
    }
  }, [_vm._v("我有账号")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4409a0ce", module.exports)
  }
}

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("027de9a8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4409a0ce&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BeforeLogin.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4409a0ce&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BeforeLogin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(141)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(128),
  /* scopeId */
  "data-v-4409a0ce",
  /* cssModules */
  null
)
Component.options.__file = "G:\\web\\FriendTeacher\\fe\\src\\components\\BeforeLogin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BeforeLogin.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4409a0ce", Component.options)
  } else {
    hotAPI.reload("data-v-4409a0ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 68:
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
//
//
//
//
//

var BeforeLogin = {
  data: function data() {
    return {
      checked: false
    };
  },

  computed: {
    change: function change() {
      if (this.checked == false) {
        return "submit";
      } else {
        return "submit active";
      }
    }
  },
  methods: {
    next: function next() {
      if (this.checked) {
        location.href = "./register.html";
      }
    }
  }
};
exports.default = BeforeLogin;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _BeforeLogin = __webpack_require__(32);

var _BeforeLogin2 = _interopRequireDefault(_BeforeLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default({
  el: "#app",
  components: {
    "beforelogin": _BeforeLogin2.default
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.logo[data-v-4409a0ce] {\n  margin: 68px auto 102px auto;\n  width: 172px;\n  height: 172px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n.tab-warpper[data-v-4409a0ce] {\n  height: 42px;\n  width: 347px;\n  margin: 0 auto;\n  margin-bottom: 19px;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 18px;\n  font-family: 宋体;\n  font-weight: bold;\n  line-height: 42px;\n  border-top: 1px #333333 solid;\n}\n.tab-warpper .login-tab[data-v-4409a0ce] {\n  width: 111px;\n  height: 42px;\n  background: #333333;\n  color: #fff;\n}\n.tab-warpper .login-tab a[data-v-4409a0ce] {\n  color: #fff;\n  text-decoration: none;\n}\n.thank[data-v-4409a0ce] {\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  font-size: 17px;\n  font-weight: bold;\n  font-family: 宋体;\n}\n.read[data-v-4409a0ce] {\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  vertical-align: center;\n  margin-bottom: 30px;\n}\n.read a[data-v-4409a0ce] {\n  text-decoration: underline;\n  color: #7583ED;\n}\n.read input[data-v-4409a0ce] {\n  height: 14px;\n  width: 14px;\n}\n.submit[data-v-4409a0ce] {\n  width: 208px;\n  height: 42px;\n  color: #fff;\n  background: #C1C1C1;\n  text-align: center;\n  margin: 0 auto;\n  line-height: 42px;\n  font-size: 18px;\n}\n.active[data-v-4409a0ce] {\n  background: #F34937;\n}\n.had[data-v-4409a0ce] {\n  width: 375px;\n  height: 24px;\n  text-align: right;\n  font-size: 11px;\n  color: #696969;\n}\n", ""]);

// exports


/***/ })

},[81]);