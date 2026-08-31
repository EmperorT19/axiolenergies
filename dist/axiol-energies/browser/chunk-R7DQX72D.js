import {
  AxiolDataService
} from "./chunk-2BYXOY4B.js";
import "./chunk-LDDVMWZE.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T2ZPLF3I.js";

// src/app/features/commercial-models/commercial-models.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function CommercialModelsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 15);
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
    const m_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.description);
  }
}
function CommercialModelsComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.desc);
  }
}
var CommercialModelsComponent = class _CommercialModelsComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.decisionCriteria = [
      { title: "BANKABLE TECHNOLOGY", desc: "Established OEMs, warranties, performance data and financing acceptance." },
      { title: "INTERFACE CLARITY", desc: "Clear battery limits, grid access points and commercial handoffs." },
      { title: "RISK ALLOCATION", desc: "Performance guarantees, liquidated damages and force majeure provisions." },
      { title: "LIFECYCLE COST", desc: "Optimising Capex versus Opex for lowest levelised cost of energy." }
    ];
  }
  static {
    this.\u0275fac = function CommercialModelsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommercialModelsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommercialModelsComponent, selectors: [["app-commercial-models"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 0, consts: [[1, "models-page"], [1, "page-banner"], [1, "axiol-container"], [1, "axiol-badge"], [1, "fa-solid", "fa-file-signature"], [1, "lead-text"], [1, "section-models-grid"], [1, "grid-3"], [1, "axiol-card", "model-card"], [1, "section-criteria"], [1, "axiol-section-title"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-scale-balanced"], [1, "grid-4"], [1, "axiol-card", "c-card"], [1, "m-tag"]], template: function CommercialModelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Contracting Flexibility");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "COMMERCIAL MODELS AND PARTNERSHIP STRUCTURES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Structuring contracts to match client risk profiles, capital allocation preference, operating capability and financing requirements. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7);
        \u0275\u0275repeaterCreate(13, CommercialModelsComponent_For_14_Template, 7, 3, "div", 8, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "section", 9)(16, "div", 2)(17, "div", 10)(18, "span", 11);
        \u0275\u0275element(19, "i", 12);
        \u0275\u0275text(20, " Bankability Focus");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h2");
        \u0275\u0275text(22, "STRUCTURE SELECTION FACTORS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13);
        \u0275\u0275repeaterCreate(24, CommercialModelsComponent_For_25_Template, 5, 2, "div", 14, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.dataService.commercialModels);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.decisionCriteria);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.page-banner[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(2, 132, 199, 0.12) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.page-banner[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n}\n.section-oem[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-oem[_ngcontent-%COMP%]   .oem-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.section-oem[_ngcontent-%COMP%]   .oem-card[_ngcontent-%COMP%]   .oem-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-sm);\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.section-oem[_ngcontent-%COMP%]   .oem-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  margin-bottom: 0.2rem;\n}\n.section-oem[_ngcontent-%COMP%]   .oem-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-sub);\n}\n.section-models-grid[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-models-grid[_ngcontent-%COMP%]   .model-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 2.2rem;\n}\n.section-models-grid[_ngcontent-%COMP%]   .model-card[_ngcontent-%COMP%]   .model-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.8rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--accent-azure);\n  background: rgba(2, 132, 199, 0.1);\n  padding: 0.15rem 0.5rem;\n  border-radius: var(--radius-full);\n}\n.section-models-grid[_ngcontent-%COMP%]   .model-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n.section-models-grid[_ngcontent-%COMP%]   .model-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n.section-criteria[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-criteria[_ngcontent-%COMP%]   .c-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--accent-amber);\n  margin-bottom: 0.5rem;\n  letter-spacing: 0.05em;\n}\n.section-criteria[_ngcontent-%COMP%]   .c-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-sub);\n  line-height: 1.4;\n}\n/*# sourceMappingURL=commercial-models.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommercialModelsComponent, { className: "CommercialModelsComponent", filePath: "src\\app\\features\\commercial-models\\commercial-models.component.ts", lineNumber: 13 });
})();
export {
  CommercialModelsComponent
};
//# sourceMappingURL=chunk-R7DQX72D.js.map
