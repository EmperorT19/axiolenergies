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

// src/app/features/integrated-solutions/integrated-solutions.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.name;
function IntegratedSolutionsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sol_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", sol_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sol_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sol_r1.description);
  }
}
function IntegratedSolutionsComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 19);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sec_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", sec_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sec_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sec_r2.desc);
  }
}
var IntegratedSolutionsComponent = class _IntegratedSolutionsComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.sectors = [
      { name: "UTILITIES AND IPPS", desc: "Generation, storage, substations, transmission and grid studies.", icon: "fa-tower-cell" },
      { name: "MINING AND INDUSTRIAL", desc: "Fuel depots, heavy power generation, hybrid renewables and reliability.", icon: "fa-industry" },
      { name: "COMMERCIAL INFRASTRUCTURE", desc: "Rooftop solar, energy cost optimisation, EV charging and backup storage.", icon: "fa-building" },
      { name: "REMOTE COMMUNITIES", desc: "Mini grids, microhydro, solar pumping and hybrid power systems.", icon: "fa-tree-city" }
    ];
  }
  static {
    this.\u0275fac = function IntegratedSolutionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IntegratedSolutionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IntegratedSolutionsComponent, selectors: [["app-integrated-solutions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 0, consts: [[1, "solutions-page"], [1, "page-banner", "emerald-theme"], [1, "axiol-container"], [1, "axiol-badge", "emerald"], [1, "fa-solid", "fa-layer-group"], [1, "lead-text"], [1, "section-sol-grid"], [1, "axiol-section-title"], [1, "axiol-badge"], [1, "fa-solid", "fa-diagram-project"], [1, "grid-3"], [1, "axiol-card", "sol-card"], [1, "section-sectors"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-city"], [1, "grid-4"], [1, "axiol-card", "sec-card"], [1, "sol-icon"], [1, "fa-solid", 3, "ngClass"], [1, "sec-icon"]], template: function IntegratedSolutionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Multitechnology Architecture");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "INTEGRATED CLIENT SOLUTIONS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Combining solar, battery storage, conventional fuel generation and grid management to deliver tailored energy systems. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7)(13, "span", 8);
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275text(15, " Core Configurations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h2");
        \u0275\u0275text(17, "INTEGRATED SYSTEM ARCHITECTURES");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275repeaterCreate(19, IntegratedSolutionsComponent_For_20_Template, 7, 3, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "section", 12)(22, "div", 2)(23, "div", 7)(24, "span", 13);
        \u0275\u0275element(25, "i", 14);
        \u0275\u0275text(26, " Multisector Delivery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2");
        \u0275\u0275text(28, "TARGET SECTOR APPLICATIONS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275repeaterCreate(30, IntegratedSolutionsComponent_For_31_Template, 7, 3, "div", 16, _forTrack1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.dataService.integratedSolutions);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.sectors);
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.page-banner[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(16, 185, 129, 0.12) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.page-banner[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n}\n.section-tech-combos[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-tech-combos[_ngcontent-%COMP%]   .combo-card[_ngcontent-%COMP%]   .combo-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: var(--radius-md);\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin-bottom: 1.25rem;\n}\n.section-tech-combos[_ngcontent-%COMP%]   .combo-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: 0.05em;\n}\n.section-tech-combos[_ngcontent-%COMP%]   .combo-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n.section-sectors[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-sectors[_ngcontent-%COMP%]   .sec-card[_ngcontent-%COMP%]   .sec-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-sm);\n  background: rgba(2, 132, 199, 0.15);\n  color: var(--accent-azure);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n}\n.section-sectors[_ngcontent-%COMP%]   .sec-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: 0.04em;\n}\n.section-sectors[_ngcontent-%COMP%]   .sec-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=integrated-solutions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IntegratedSolutionsComponent, { className: "IntegratedSolutionsComponent", filePath: "src\\app\\features\\integrated-solutions\\integrated-solutions.component.ts", lineNumber: 13 });
})();
export {
  IntegratedSolutionsComponent
};
//# sourceMappingURL=chunk-BROSQRJV.js.map
