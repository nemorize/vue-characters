import { defineComponent, toDisplayString } from 'vue';

var script$r = defineComponent({
  name: 'Character',
  props: ['char', 'lower'],

  data() {
    let c = this.$props.char ?? this.$options.name;
    c = this.$props.lower === 'true' ? c.toLowerCase() : c.toUpperCase();
    return {
      c
    };
  }

});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return toDisplayString(_ctx.c);
}

script$r.render = render;

var script$q = defineComponent({
  name: 'A',
  extends: script$r
});

var script$p = defineComponent({
  name: 'B',
  extends: script$r
});

var script$o = defineComponent({
  name: 'C',
  extends: script$r
});

var script$n = defineComponent({
  name: 'D',
  extends: script$r
});

var script$m = defineComponent({
  name: 'E',
  extends: script$r
});

var script$l = defineComponent({
  name: 'F',
  extends: script$r
});

var script$k = defineComponent({
  name: 'G',
  extends: script$r
});

var script$j = defineComponent({
  name: 'H',
  extends: script$r
});

var script$i = defineComponent({
  name: 'I',
  extends: script$r
});

var script$h = defineComponent({
  name: 'J',
  extends: script$r
});

var script$g = defineComponent({
  name: 'K',
  extends: script$r
});

var script$f = defineComponent({
  name: 'L',
  extends: script$r
});

var script$e = defineComponent({
  name: 'M',
  extends: script$r
});

var script$d = defineComponent({
  name: 'N',
  extends: script$r
});

var script$c = defineComponent({
  name: 'O',
  extends: script$r
});

var script$b = defineComponent({
  name: 'P',
  extends: script$r
});

var script$a = defineComponent({
  name: 'Q',
  extends: script$r
});

var script$9 = defineComponent({
  name: 'R',
  extends: script$r
});

var script$8 = defineComponent({
  name: 'S',
  extends: script$r
});

var script$7 = defineComponent({
  name: 'T',
  extends: script$r
});

var script$6 = defineComponent({
  name: 'U',
  extends: script$r
});

var script$5 = defineComponent({
  name: 'V',
  extends: script$r
});

var script$4 = defineComponent({
  name: 'W',
  extends: script$r
});

var script$3 = defineComponent({
  name: 'X',
  extends: script$r
});

var script$2 = defineComponent({
  name: 'Y',
  extends: script$r
});

var script$1 = defineComponent({
  name: 'Z',
  extends: script$r
});

var script = defineComponent({
  name: 'Nbsp',
  extends: script$r,

  data() {
    return {
      c: ' '
    };
  }

});

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  A: script$q,
  B: script$p,
  C: script$o,
  D: script$n,
  E: script$m,
  F: script$l,
  G: script$k,
  H: script$j,
  I: script$i,
  J: script$h,
  K: script$g,
  L: script$f,
  M: script$e,
  N: script$d,
  O: script$c,
  P: script$b,
  Q: script$a,
  R: script$9,
  S: script$8,
  T: script$7,
  U: script$6,
  V: script$5,
  W: script$4,
  X: script$3,
  Y: script$2,
  Z: script$1,
  Nbsp: script
});

// Import vue components

const install = function installVueCharacters(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script$q as A, script$p as B, script$o as C, script$n as D, script$m as E, script$l as F, script$k as G, script$j as H, script$i as I, script$h as J, script$g as K, script$f as L, script$e as M, script$d as N, script as Nbsp, script$c as O, script$b as P, script$a as Q, script$9 as R, script$8 as S, script$7 as T, script$6 as U, script$5 as V, script$4 as W, script$3 as X, script$2 as Y, script$1 as Z, install as default };
