webpackJsonp([6],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "student-wrapper",
    on: {
      "click": function($event) {
        _vm.studentHand()
      }
    }
  }, [_c('span', [_vm._v("我是学生")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "teacher-wrapper",
    on: {
      "click": function($event) {
        _vm.teacherHand()
      }
    }
  }, [_c('span', [_vm._v("我是老师")]), _vm._v(" "), _vm._m(1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../imgs/icon_10.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../imgs/icon_11.png"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46d2372f", module.exports)
  }
}

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("7798916d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-46d2372f&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-46d2372f&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(137)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(125),
  /* scopeId */
  "data-v-46d2372f",
  /* cssModules */
  null
)
Component.options.__file = "G:\\web\\FriendTeacher\\fe\\src\\components\\Register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46d2372f", Component.options)
  } else {
    hotAPI.reload("data-v-46d2372f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 75:
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

var Register = {
  methods: {
    studentHand: function studentHand() {
      location.href = "./studentreg.html";
    },
    teacherHand: function teacherHand() {
      location.href = "./teacherreg.html";
    }
  }
};
exports.default = Register;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _Register = __webpack_require__(40);

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default({
  el: "#app",
  components: {
    "register": _Register2.default
  }
});

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.inner .student-wrapper[data-v-46d2372f] {\n  background: #F5F5F5;\n  width: 285px;\n  height: 53px;\n  margin: 151px auto 76px auto;\n  font-size: 21px;\n  line-height: 53px;\n  text-align: center;\n  font-weight: bold;\n  font-family: 宋体;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.inner .student-wrapper span[data-v-46d2372f] {\n  vertical-align: top;\n}\n.inner .student-wrapper div[data-v-46d2372f] {\n  display: inline-block;\n}\n.inner .student-wrapper div img[data-v-46d2372f] {\n  padding-top: 14px;\n  margin-left: -8px;\n  height: 25px;\n}\n.inner .teacher-wrapper[data-v-46d2372f] {\n  background: #F5F5F5;\n  width: 285px;\n  height: 53px;\n  margin: 0 auto;\n  font-size: 21px;\n  line-height: 53px;\n  text-align: center;\n  font-weight: bold;\n  font-family: 宋体;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n}\n.inner .teacher-wrapper span[data-v-46d2372f] {\n  vertical-align: top;\n}\n.inner .teacher-wrapper div[data-v-46d2372f] {\n  display: inline-block;\n}\n.inner .teacher-wrapper div img[data-v-46d2372f] {\n  padding-top: 14px;\n  margin-left: -8px;\n  height: 25px;\n}\n", ""]);

// exports


/***/ })

},[85]);