webpackJsonp([5],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "title"
  }, [_vm._v("轻松填写，开启共赢")]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "input-wrapper"
  }, [_c('span', {
    staticClass: "ball"
  }), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    attrs: {
      "placeholder": "大丈夫行不更名坐不改姓"
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-sex"
  }, [_c('div', {
    staticClass: "men-wrapper"
  }, [_c('span', [_vm._v("男")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.gender),
      expression: "gender"
    }],
    staticClass: "sex",
    attrs: {
      "type": "radio",
      "value": "man"
    },
    domProps: {
      "checked": _vm._q(_vm.gender, "man")
    },
    on: {
      "__c": function($event) {
        _vm.gender = "man"
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "women-wrapper"
  }, [_c('span', [_vm._v("女")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.gender),
      expression: "gender"
    }],
    staticClass: "sex",
    attrs: {
      "type": "radio",
      "value": "woman"
    },
    domProps: {
      "checked": _vm._q(_vm.gender, "woman")
    },
    on: {
      "__c": function($event) {
        _vm.gender = "woman"
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "input-wrapper"
  }, [_c('span', {
    staticClass: "ball"
  }), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v("学校")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.school),
      expression: "school"
    }],
    attrs: {
      "placeholder": "在读学校全名"
    },
    domProps: {
      "value": (_vm.school)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.school = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input-wrapper"
  }, [_c('span', {
    staticClass: "ball"
  }), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v("邮箱")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    attrs: {
      "placeholder": "无需验证"
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "long-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.subjectDemand),
      expression: "subjectDemand"
    }],
    attrs: {
      "placeholder": "数学、英语、理综"
    },
    domProps: {
      "value": (_vm.subjectDemand)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.subjectDemand = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "long-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.timeDuration),
      expression: "timeDuration"
    }],
    attrs: {
      "placeholder": "周六9:00~11:00"
    },
    domProps: {
      "value": (_vm.timeDuration)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.timeDuration = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "submit",
    class: _vm.changeColor,
    on: {
      "click": function($event) {
        _vm.submit()
      }
    }
  }, [_c('span', [_vm._v("完成注册")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../imgs/bg_img.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_vm._v("十分感谢您的填写!")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-wrapper"
  }, [_c('span', {
    staticClass: "ball"
  }), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v("科目需求")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-wrapper"
  }, [_c('span', {
    staticClass: "ball"
  }), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v("理想时段")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a9e80e5", module.exports)
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("1105659d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3a9e80e5&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StudentReg.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3a9e80e5&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StudentReg.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(140)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(78),
  /* template */
  __webpack_require__(127),
  /* scopeId */
  "data-v-3a9e80e5",
  /* cssModules */
  null
)
Component.options.__file = "G:\\web\\FriendTeacher\\fe\\src\\components\\StudentReg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] StudentReg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a9e80e5", Component.options)
  } else {
    hotAPI.reload("data-v-3a9e80e5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = __webpack_require__(8);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentReg = {
  data: function data() {
    return {
      gender: '',
      name: '',
      school: '',
      email: '',
      subjectDemand: '',
      timeDuration: '',
      changeColor: ''
    };
  },
  mounted: function mounted() {
    var self = this;
    setInterval(function () {
      if (self.gender != '' && self.name != '' && self.email != '') {
        self.changeColor = "active";
      }
      if (self.gender == '' || self.name == '' || self.email == '') {
        self.changeColor = "";
      }
    }, 100);
  },

  methods: {
    submit: function submit() {
      var self = this;
      _api2.default.studentRegister({
        name: self.name,
        gender: self.gender,
        school: self.school,
        email: self.email,
        subjectDemand: self.subjectDemand,
        timeDuration: self.timeDuration
      }).onSuccess(function (resp) {
        location.href = "./login.html";
      }).onFail(function () {
        alert("注册成功");

        location.href = "./login.html";
      });
    }
  }
}; //
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

exports.default = StudentReg;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _StudentReg = __webpack_require__(42);

var _StudentReg2 = _interopRequireDefault(_StudentReg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default({
  el: "#app",
  components: {
    "studentreg": _StudentReg2.default
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.title[data-v-3a9e80e5] {\n  width: 293px;\n  margin: 0 auto;\n  margin-top: 12px;\n  font-size: 14px;\n  font-family: 宋体;\n  color: #333333;\n}\n.input-wrapper[data-v-3a9e80e5] {\n  width: 282px;\n  height: 24px;\n  margin: 28px auto;\n}\n.input-wrapper .ball[data-v-3a9e80e5] {\n  display: inline-block;\n  height: 15px;\n  width: 15px;\n  background: #333333;\n  border-radius: 50%;\n}\n.input-wrapper .name[data-v-3a9e80e5] {\n  font-size: 18px;\n  font-family: 宋体;\n  font-weight: bold;\n  line-height: 24px;\n  margin-right: 8px;\n}\n.input-wrapper input[data-v-3a9e80e5] {\n  border: 0;\n  height: 35px;\n  width: 195px;\n  border-radius: 2px;\n  padding-left: 15px;\n}\n.title-wrapper[data-v-3a9e80e5] {\n  width: 282px;\n  height: 24px;\n  margin: 28px auto 14px auto;\n}\n.title-wrapper .ball[data-v-3a9e80e5] {\n  display: inline-block;\n  height: 15px;\n  width: 15px;\n  background: #333333;\n  border-radius: 50%;\n}\n.title-wrapper .name[data-v-3a9e80e5] {\n  font-size: 18px;\n  font-family: 宋体;\n  font-weight: bold;\n  line-height: 24px;\n  margin-right: 8px;\n}\n.long-wrapper[data-v-3a9e80e5] {\n  width: 282px;\n  height: 24px;\n  margin: 14px auto 14px auto;\n}\n.long-wrapper input[data-v-3a9e80e5] {\n  border: 0;\n  height: 35px;\n  width: 195px;\n  border-radius: 2px;\n  padding-left: 15px;\n  margin-left: 72px;\n}\n.input-sex[data-v-3a9e80e5] {\n  width: 282px;\n  height: 24px;\n  margin: 30px auto -7px auto;\n  font-size: 18px;\n  font-family: 宋体;\n  font-weight: bold;\n}\n.input-sex .men-wrapper[data-v-3a9e80e5] {\n  display: inline-block;\n  width: 50%;\n  float: left;\n  text-indent: 75px;\n}\n.input-sex .men-wrapper .sex[data-v-3a9e80e5] {\n  margin-left: 7px;\n  width: 15px;\n  height: 15px;\n  color: #fff;\n}\n.input-sex .women-wrapper[data-v-3a9e80e5] {\n  display: inline-block;\n  width: 50%;\n  float: left;\n  text-indent: 14px;\n}\n.input-sex .women-wrapper .sex[data-v-3a9e80e5] {\n  margin-left: 7px;\n  width: 15px;\n  height: 15px;\n  color: #fff;\n}\n.submit[data-v-3a9e80e5] {\n  width: 208px;\n  height: 34px;\n  margin: 49px auto 15px auto;\n  background: #D3D3D3;\n  text-align: center;\n  border-radius: 4px;\n}\n.submit span[data-v-3a9e80e5] {\n  font-size: 18px;\n  color: #fff;\n  font-family: 宋体;\n  line-height: 34px;\n}\n.submit img[data-v-3a9e80e5] {\n  height: 14px;\n  width: 11px;\n}\n.active[data-v-3a9e80e5] {\n  background: #F34A37;\n}\n.foot[data-v-3a9e80e5] {\n  text-align: center;\n  font-size: 14px;\n  font-family: 宋体;\n  color: #333333;\n}\n", ""]);

// exports


/***/ })

},[89]);