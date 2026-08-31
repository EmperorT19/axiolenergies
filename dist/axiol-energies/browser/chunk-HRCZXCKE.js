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

// src/app/features/epc-projects/epc-projects.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function EpcProjectsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 16);
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
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.desc);
  }
}
var EpcProjectsComponent = class _EpcProjectsComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.epcDetails = [
      { title: "PROJECT ORIGINATION", desc: "Opportunity screening, development strategy, land and site control and project rights coordination." },
      { title: "FEASIBILITY AND BANKABILITY", desc: "Resource assessment, technical studies, financial inputs, ESIA and grid interconnection." },
      { title: "ENGINEERING", desc: "Design basis, FEED, detailed design, specifications, bills of quantities and construction documentation." },
      { title: "PROCUREMENT", desc: "OEM engagement, bid evaluation, logistics, inspections, warranty and supply chain management." },
      { title: "CONSTRUCTION AND COMMISSIONING", desc: "Site management, HSEQ, QA/QC, testing, energisation, performance verification and handover." },
      { title: "OPERATIONS AND MAINTENANCE", desc: "Preventive maintenance, spares, monitoring, performance optimisation and lifecycle support." }
    ];
  }
  static {
    this.\u0275fac = function EpcProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpcProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpcProjectsComponent, selectors: [["app-epc-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 0, consts: [[1, "epc-page"], [1, "page-banner"], [1, "axiol-container"], [1, "axiol-badge"], [1, "fa-solid", "fa-screwdriver-wrench"], [1, "lead-text"], [1, "section-epc-breakdown"], [1, "grid-3"], [1, "axiol-card", "epc-card"], [1, "section-dev-scope"], [1, "axiol-section-title"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-list-check"], [1, "grid-2"], [1, "axiol-card", "scope-box"], [1, "fa-solid", "fa-circle-check"], [1, "card-badge"], [1, "fa-solid", "fa-gears"]], template: function EpcProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Turnkey Execution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "PROJECT DEVELOPMENT AND EPC CAPABILITY");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Axiol\u2019s EPC approach integrates engineering accountability, commercial coordination, safety, quality and system interfaces so that equipment is delivered as a functioning asset. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7);
        \u0275\u0275repeaterCreate(13, EpcProjectsComponent_For_14_Template, 7, 2, "div", 8, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "section", 9)(16, "div", 2)(17, "div", 10)(18, "span", 11);
        \u0275\u0275element(19, "i", 12);
        \u0275\u0275text(20, " Project Lifecycle Activities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h2");
        \u0275\u0275text(22, "COMPLETE TURNKEY DEVELOPMENT ACTIVITIES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, "Axiol develops renewable energy projects from opportunity identification through commissioning and commercial operation.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 13)(26, "div", 14)(27, "ul")(28, "li");
        \u0275\u0275element(29, "i", 15);
        \u0275\u0275text(30, " Site screening and resource assessment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275element(32, "i", 15);
        \u0275\u0275text(33, " Feasibility and bankability studies");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "li");
        \u0275\u0275element(35, "i", 15);
        \u0275\u0275text(36, " Land and project rights support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "li");
        \u0275\u0275element(38, "i", 15);
        \u0275\u0275text(39, " ESIA and stakeholder coordination");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "li");
        \u0275\u0275element(41, "i", 15);
        \u0275\u0275text(42, " Grid interconnection studies");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 14)(44, "ul")(45, "li");
        \u0275\u0275element(46, "i", 15);
        \u0275\u0275text(47, " PPA and captive power support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "li");
        \u0275\u0275element(49, "i", 15);
        \u0275\u0275text(50, " Financial structuring and SPV support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "li");
        \u0275\u0275element(52, "i", 15);
        \u0275\u0275text(53, " EPC and commissioning execution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "li");
        \u0275\u0275element(55, "i", 15);
        \u0275\u0275text(56, " Operations and lasting maintenance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "li");
        \u0275\u0275element(58, "i", 15);
        \u0275\u0275text(59, " Utility Scale \u2022 Commercial \u2022 Remote Grid \u2022 Hybrid");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.epcDetails);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.page-banner[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(16, 185, 129, 0.12) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.page-banner[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n}\n.section-epc-breakdown[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-epc-breakdown[_ngcontent-%COMP%]   .epc-card[_ngcontent-%COMP%]   .card-badge[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-sm);\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-bottom: 1.25rem;\n}\n.section-epc-breakdown[_ngcontent-%COMP%]   .epc-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: 0.05em;\n}\n.section-epc-breakdown[_ngcontent-%COMP%]   .epc-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-sub);\n  line-height: 1.6;\n}\n.section-dev-scope[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-dev-scope[_ngcontent-%COMP%]   .scope-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.section-dev-scope[_ngcontent-%COMP%]   .scope-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 600;\n  font-size: 1rem;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.section-dev-scope[_ngcontent-%COMP%]   .scope-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-emerald);\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=epc-projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpcProjectsComponent, { className: "EpcProjectsComponent", filePath: "src\\app\\features\\epc-projects\\epc-projects.component.ts", lineNumber: 13 });
})();
export {
  EpcProjectsComponent
};
//# sourceMappingURL=chunk-HRCZXCKE.js.map
