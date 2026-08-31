import {
  AxiolDataService
} from "./chunk-2BYXOY4B.js";
import "./chunk-LDDVMWZE.js";
import {
  CommonModule,
  NgClass,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T2ZPLF3I.js";

// src/app/features/equipment-warehousing/equipment-warehousing.component.ts
var _forTrack0 = ($index, $item) => $item.step;
var _forTrack1 = ($index, $item) => $item.name;
function EquipmentWarehousingComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 15);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.step);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.desc);
  }
}
function EquipmentWarehousingComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 18);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const partner_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", partner_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r2.role);
  }
}
var EquipmentWarehousingComponent = class _EquipmentWarehousingComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.warehousingSteps = [
      { step: "01", title: "SOURCE", desc: "Global procurement with bankable top tier manufacturers.", icon: "fa-earth-americas" },
      { step: "02", title: "STORE", desc: "Regional warehouse staging and inventory management.", icon: "fa-warehouse" },
      { step: "03", title: "DELIVER", desc: "Secure transit logistics, site drop and pre inspected customs clearance.", icon: "fa-truck-fast" },
      { step: "04", title: "SUPPORT", desc: "Spares buffering, warranty administration and after sales technical support.", icon: "fa-headset" }
    ];
  }
  static {
    this.\u0275fac = function EquipmentWarehousingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EquipmentWarehousingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EquipmentWarehousingComponent, selectors: [["app-equipment-warehousing"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 0, consts: [[1, "warehousing-page"], [1, "page-banner", "azure-theme"], [1, "axiol-container"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-boxes-packing"], [1, "lead-text"], [1, "section-wh-steps"], [1, "grid-4"], [1, "axiol-card", "step-box"], [1, "section-oem"], [1, "axiol-section-title"], [1, "axiol-badge", "emerald"], [1, "fa-solid", "fa-handshake"], [1, "grid-5"], [1, "axiol-card", "oem-card"], [1, "s-icon"], [1, "fa-solid", 3, "ngClass"], [1, "s-num"], [1, "oem-icon"]], template: function EquipmentWarehousingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Equipment and Supply Chain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "BANKABLE HARDWARE AND LOGISTICS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Axiol bridges global manufacturers and African projects by sourcing, warehousing, testing and delivering verified energy equipment. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7);
        \u0275\u0275repeaterCreate(13, EquipmentWarehousingComponent_For_14_Template, 9, 4, "div", 8, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "section", 9)(16, "div", 2)(17, "div", 10)(18, "span", 11);
        \u0275\u0275element(19, "i", 12);
        \u0275\u0275text(20, " OEM Alliance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h2");
        \u0275\u0275text(22, "TOP TIER MANUFACTURER PARTNERS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, "Direct integration with global energy equipment brands.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 13);
        \u0275\u0275repeaterCreate(26, EquipmentWarehousingComponent_For_27_Template, 7, 3, "div", 14, _forTrack1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.warehousingSteps);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.dataService.oemPartners);
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.page-banner[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(2, 132, 199, 0.12) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.page-banner[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n}\n.section-chain-steps[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-chain-steps[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 1024px) {\n  .section-chain-steps[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .section-chain-steps[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-chain-steps[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.section-chain-steps[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-card[_ngcontent-%COMP%]   .c-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 0.8rem;\n  color: var(--accent-emerald);\n  background: rgba(16, 185, 129, 0.1);\n  display: inline-block;\n  padding: 0.15rem 0.5rem;\n  border-radius: var(--radius-full);\n  margin-bottom: 0.75rem;\n}\n.section-chain-steps[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-card[_ngcontent-%COMP%]   .c-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: var(--radius-full);\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin: 0 auto 1rem auto;\n}\n.section-chain-steps[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n}\n.section-chain-steps[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-sub);\n}\n.section-equip-categories[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-equip-categories[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-sm);\n  background: rgba(2, 132, 199, 0.15);\n  color: var(--accent-azure);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.section-equip-categories[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n.section-equip-categories[_ngcontent-%COMP%]   .cat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=equipment-warehousing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EquipmentWarehousingComponent, { className: "EquipmentWarehousingComponent", filePath: "src\\app\\features\\equipment-warehousing\\equipment-warehousing.component.ts", lineNumber: 13 });
})();
export {
  EquipmentWarehousingComponent
};
//# sourceMappingURL=chunk-EKDQ4UIG.js.map
