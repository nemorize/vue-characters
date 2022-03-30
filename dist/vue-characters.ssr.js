'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$r = vue.defineComponent({
  name: 'Character',
  props: ['char', 'lower'],
  data: function data() {
    var _this$$props$char;

    var c = (_this$$props$char = this.$props.char) !== null && _this$$props$char !== void 0 ? _this$$props$char : this.$options.name;
    c = this.$props.lower === 'true' ? c.toLowerCase() : c.toUpperCase();
    return {
      c: c
    };
  }
});function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.toDisplayString(_ctx.c);
}script$r.render = render;var script$q = vue.defineComponent({
  name: 'A',
  extends: script$r
});var script$p = vue.defineComponent({
  name: 'B',
  extends: script$r
});var script$o = vue.defineComponent({
  name: 'C',
  extends: script$r
});var script$n = vue.defineComponent({
  name: 'D',
  extends: script$r
});var script$m = vue.defineComponent({
  name: 'E',
  extends: script$r
});var script$l = vue.defineComponent({
  name: 'F',
  extends: script$r
});var script$k = vue.defineComponent({
  name: 'G',
  extends: script$r
});var script$j = vue.defineComponent({
  name: 'H',
  extends: script$r
});var script$i = vue.defineComponent({
  name: 'I',
  extends: script$r
});var script$h = vue.defineComponent({
  name: 'J',
  extends: script$r
});var script$g = vue.defineComponent({
  name: 'K',
  extends: script$r
});var script$f = vue.defineComponent({
  name: 'L',
  extends: script$r
});var script$e = vue.defineComponent({
  name: 'M',
  extends: script$r
});var script$d = vue.defineComponent({
  name: 'N',
  extends: script$r
});var script$c = vue.defineComponent({
  name: 'O',
  extends: script$r
});var script$b = vue.defineComponent({
  name: 'P',
  extends: script$r
});var script$a = vue.defineComponent({
  name: 'Q',
  extends: script$r
});var script$9 = vue.defineComponent({
  name: 'R',
  extends: script$r
});var script$8 = vue.defineComponent({
  name: 'S',
  extends: script$r
});var script$7 = vue.defineComponent({
  name: 'T',
  extends: script$r
});var script$6 = vue.defineComponent({
  name: 'U',
  extends: script$r
});var script$5 = vue.defineComponent({
  name: 'V',
  extends: script$r
});var script$4 = vue.defineComponent({
  name: 'W',
  extends: script$r
});var script$3 = vue.defineComponent({
  name: 'X',
  extends: script$r
});var script$2 = vue.defineComponent({
  name: 'Y',
  extends: script$r
});var script$1 = vue.defineComponent({
  name: 'Z',
  extends: script$r
});var script = vue.defineComponent({
  name: 'Nbsp',
  extends: script$r,
  data: function data() {
    return {
      c: ' '
    };
  }
});/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,A:script$q,B:script$p,C:script$o,D:script$n,E:script$m,F:script$l,G:script$k,H:script$j,I:script$i,J:script$h,K:script$g,L:script$f,M:script$e,N:script$d,O:script$c,P:script$b,Q:script$a,R:script$9,S:script$8,T:script$7,U:script$6,V:script$5,W:script$4,X:script$3,Y:script$2,Z:script$1,Nbsp:script});var install = function installVueCharacters(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,A:script$q,B:script$p,C:script$o,D:script$n,E:script$m,F:script$l,G:script$k,H:script$j,I:script$i,J:script$h,K:script$g,L:script$f,M:script$e,N:script$d,O:script$c,P:script$b,Q:script$a,R:script$9,S:script$8,T:script$7,U:script$6,V:script$5,W:script$4,X:script$3,Y:script$2,Z:script$1,Nbsp:script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;