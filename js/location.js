webpackJsonp([8],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.inner[data-v-adba617e] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n.inner .allmap[data-v-adba617e] {\n  width: 100%;\n  height: 100%;\n}\n.inner .text[data-v-adba617e] {\n  position: absolute;\n  width: 200px;\n  height: 100px;\n  z-index: 999;\n  bottom: 0;\n  margin-bottom: 60px;\n  font-family: 宋体;\n}\n.inner .text .province[data-v-adba617e] {\n  height: 30px;\n  width: 200px;\n  background: rgba(255, 255, 255, 0.7);\n  line-height: 30px;\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000;\n}\n.inner .text .address[data-v-adba617e] {\n  height: 30px;\n  width: 200px;\n  background: rgba(255, 255, 255, 0.7);\n  line-height: 30px;\n  margin-bottom: 9px;\n  border-bottom: 1px solid #000;\n}\n.inner .text .confirm[data-v-adba617e] {\n  height: 30px;\n  width: 200px;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n  background: #FBCC0C;\n}\n", ""]);

// exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "text"
  }, [_c('div', {
    staticClass: "province"
  }, [(!_vm.province) ? _c('span', [_vm._v("请点击定位按钮")]) : _c('span', [_vm._v(_vm._s(_vm.province) + _vm._s(_vm.city))])]), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_vm._v("\n      " + _vm._s(_vm.addressDetail) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "confirm",
    on: {
      "click": function($event) {
        _vm.confirm()
      }
    }
  }, [_vm._v("确定")])]), _vm._v(" "), _c('div', {
    staticClass: "allmap",
    attrs: {
      "id": "allmap"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-adba617e", module.exports)
  }
}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("334efc38", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-adba617e&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Location.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-adba617e&scoped=true!../../node_modules/less-loader/dist/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Location.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(148)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(135),
  /* scopeId */
  "data-v-adba617e",
  /* cssModules */
  null
)
Component.options.__file = "G:\\web\\FriendTeacher\\fe\\src\\components\\Location.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Location.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-adba617e", Component.options)
  } else {
    hotAPI.reload("data-v-adba617e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 73:
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

var Loaction = {
  data: function data() {
    return {
      province: "",
      city: "",
      addressDetail: "",
      recentLng: "",
      recentLat: ""
    };
  },
  mounted: function mounted() {
    this.initialize();
  },

  methods: {
    initialize: function initialize() {
      var self = this;
      // 百度地图API功能
      var map = new BMap.Map("allmap");
      map.centerAndZoom("武汉", 11);
      // 添加带有定位的导航控件
      var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
      });
      map.addControl(navigationControl);
      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl();
      geolocationControl.addEventListener("locationSuccess", function (e) {
        // 定位成功事件
        self.recentLng = e.point.lng;
        self.recentLat = e.point.lat;
        self.city = e.addressComponent.city;
        self.province = e.addressComponent.province;
        self.addressDetail = e.addressComponent.district + e.addressComponent.street + e.addressComponent.streetNumber;
        localStorage.setItem("city", self.city);
        localStorage.setItem("recentLng", self.recentLng);
        localStorage.setItem("recentLat", self.recentLat);
        var point = new BMap.Point(e.point.lng, e.point.lat);
        var marker = new BMap.Marker(point); // 创建标注    
        map.addOverlay(marker);
        marker.enableDragging();
        marker.addEventListener("dragend", function (e) {
          var point = new BMap.Point(e.point.lng, e.point.lat);
          var gc = new BMap.Geocoder();
          gc.getLocation(point, function (rs) {
            var addComp = rs.addressComponents;
            var mapAddress = addComp.district + addComp.street + addComp.streetNumber;
            self.city = addComp.city;
            self.province = addComp.province;
            self.addressDetail = mapAddress;
          });
        });
      });
      geolocationControl.addEventListener("locationError", function (e) {
        // 定位失败事件
        alert(e.message);
      });
      map.addControl(geolocationControl);
    },
    confirm: function confirm() {
      location.href = "./teacherlist.html";
    }
  }
};
exports.default = Loaction;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _Location = __webpack_require__(37);

var _Location2 = _interopRequireDefault(_Location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default({
  el: "#app",
  components: {
    "location-page": _Location2.default
  }
});

/***/ })

},[85]);