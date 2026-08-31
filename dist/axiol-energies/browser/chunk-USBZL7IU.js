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

// src/app/features/hseq-sustainability/hseq-sustainability.component.ts
var _forTrack0 = ($index, $item) => $item.code;
var _forTrack1 = ($index, $item) => $item.title;
function HseqSustainabilityComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.target);
  }
}
function HseqSustainabilityComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 16);
    \u0275\u0275element(2, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.desc);
  }
}
var HseqSustainabilityComponent = class _HseqSustainabilityComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.hseqPrinciples = [
      { title: "SAFETY FIRST", desc: "Risk assessment, method statements, toolbox talks, work permit controls, PPE and competent supervision.", icon: "fa-shield-halved" },
      { title: "ENVIRONMENTAL STEWARDSHIP", desc: "Spill prevention, waste containment, noise control, biodiversity management and ESIA compliance.", icon: "fa-leaf" },
      { title: "QUALITY ASSURANCE", desc: "Factory inspection, material verification, ITP inspection test plans and non conformance tracking.", icon: "fa-circle-check" },
      { title: "ESG INTEGRATION", desc: "Governance, carbon reduction metrics, local employment, gender inclusion and community engagement.", icon: "fa-earth-africa" }
    ];
  }
  static {
    this.\u0275fac = function HseqSustainabilityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HseqSustainabilityComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HseqSustainabilityComponent, selectors: [["app-hseq-sustainability"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 0, consts: [[1, "hseq-page"], [1, "page-banner", "amber-theme"], [1, "axiol-container"], [1, "axiol-badge", "amber"], [1, "fa-solid", "fa-shield-halved"], [1, "lead-text"], [1, "section-hseq-loop"], [1, "axiol-section-title"], [1, "axiol-badge"], [1, "fa-solid", "fa-arrows-rotate"], [1, "grid-6"], [1, "axiol-card", "loop-card"], [1, "section-hseq-principles"], [1, "grid-4"], [1, "axiol-card", "hp-card"], [1, "l-code"], [1, "hp-icon"], [1, "fa-solid", 3, "ngClass"]], template: function HseqSustainabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Governance and Standards");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "HSEQ, SUSTAINABILITY AND ESG CONTROL LOOP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Safety, health, environment and quality are integrated into every phase of Axiol\u2019s engineering, procurement and construction workflows. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7)(13, "span", 8);
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275text(15, " Closed Loop Control");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h2");
        \u0275\u0275text(17, "HSEQ CONTROL LOOP");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275repeaterCreate(19, HseqSustainabilityComponent_For_20_Template, 7, 3, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "section", 12)(22, "div", 2)(23, "div", 13);
        \u0275\u0275repeaterCreate(24, HseqSustainabilityComponent_For_25_Template, 7, 3, "div", 14, _forTrack1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.dataService.hseqLoop);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.hseqPrinciples);
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.page-banner.emerald-theme[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(16, 185, 129, 0.15) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n}\n.section-control-loop[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-control-loop[_ngcontent-%COMP%]   .loop-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 992px) {\n  .section-control-loop[_ngcontent-%COMP%]   .loop-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .section-control-loop[_ngcontent-%COMP%]   .loop-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.section-control-loop[_ngcontent-%COMP%]   .loop-grid[_ngcontent-%COMP%]   .loop-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.section-control-loop[_ngcontent-%COMP%]   .loop-grid[_ngcontent-%COMP%]   .loop-card[_ngcontent-%COMP%]   .l-code[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-full);\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-emerald),\n      #059669);\n  color: #FFFFFF;\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 0.75rem auto;\n}\n.section-control-loop[_ngcontent-%COMP%]   .loop-grid[_ngcontent-%COMP%]   .loop-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.section-control-loop[_ngcontent-%COMP%]   .loop-grid[_ngcontent-%COMP%]   .loop-card[_ngcontent-%COMP%]   .l-target[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--accent-emerald);\n  font-weight: 600;\n}\n.section-hseq-principles[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-hseq-principles[_ngcontent-%COMP%]   .hseq-card[_ngcontent-%COMP%]   .hseq-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-sm);\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n}\n.section-hseq-principles[_ngcontent-%COMP%]   .hseq-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: 0.04em;\n}\n.section-hseq-principles[_ngcontent-%COMP%]   .hseq-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n.section-outcomes[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-outcomes[_ngcontent-%COMP%]   .outcome-card[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--accent-azure);\n}\n.section-outcomes[_ngcontent-%COMP%]   .outcome-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: #FFFFFF;\n  margin-bottom: 0.5rem;\n  letter-spacing: 0.05em;\n}\n.section-outcomes[_ngcontent-%COMP%]   .outcome-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=hseq-sustainability.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HseqSustainabilityComponent, { className: "HseqSustainabilityComponent", filePath: "src\\app\\features\\hseq-sustainability\\hseq-sustainability.component.ts", lineNumber: 13 });
})();
export {
  HseqSustainabilityComponent
};
//# sourceMappingURL=chunk-USBZL7IU.js.map
