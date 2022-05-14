import { openBlock, createElementBlock, createElementVNode } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const _hoisted_1 = { style: { "color": "blue" } };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("strong", null, "TESTE LF-UI", -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("br", null, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_4);
}
var input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { input as LuInput };
