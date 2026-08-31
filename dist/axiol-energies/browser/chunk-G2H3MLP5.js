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

// src/app/features/engineering-consulting/engineering-consulting.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.title;
function EngineeringConsultingComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 17);
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
    const study_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", study_r1.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(study_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r1.description);
  }
}
function EngineeringConsultingComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const srv_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(srv_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(srv_r2.desc);
  }
}
var EngineeringConsultingComponent = class _EngineeringConsultingComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.consultingServices = [
      { title: "CONCEPT AND PRELIMINARY DESIGN", desc: "Options analysis, design basis, layouts and preliminary sizing." },
      { title: "DETAILED ENGINEERING", desc: "Civil, mechanical, electrical and protection drawings and specs." },
      { title: "GRID INTERCONNECTION", desc: "Compliance studies, power quality and interconnection documentation." },
      { title: "OWNER ENGINEERING", desc: "Independent review, design checks, factory testing and site oversight." }
    ];
  }
  static {
    this.\u0275fac = function EngineeringConsultingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EngineeringConsultingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EngineeringConsultingComponent, selectors: [["app-engineering-consulting"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 0, consts: [[1, "engineering-page"], [1, "page-banner", "cyan-theme"], [1, "axiol-container"], [1, "axiol-badge", "cyan"], [1, "fa-solid", "fa-compass-drafting"], [1, "lead-text"], [1, "section-studies"], [1, "axiol-section-title"], [1, "axiol-badge"], [1, "fa-solid", "fa-microchip"], [1, "grid-3"], [1, "axiol-card", "study-card"], [1, "section-services-grid"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-briefcase"], [1, "grid-4"], [1, "axiol-card", "srv-card"], [1, "type-tag", 3, "ngClass"]], template: function EngineeringConsultingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Design Led Execution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "ENGINEERING BEFORE EQUIPMENT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Good infrastructure begins with the right design basis. Axiol\u2019s consulting services help clients define what should be built before procurement and construction lock in cost and risk. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7)(13, "span", 8);
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275text(15, " System Modeling and Simulation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h2");
        \u0275\u0275text(17, "POWER SYSTEM AND INTERCONNECTION STUDIES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "Advanced digital twin modeling to ensure statutory grid code compliance and asset longevity.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275repeaterCreate(21, EngineeringConsultingComponent_For_22_Template, 7, 4, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "section", 12)(24, "div", 2)(25, "div", 7)(26, "span", 13);
        \u0275\u0275element(27, "i", 14);
        \u0275\u0275text(28, " Consulting Scope");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2");
        \u0275\u0275text(30, "ENGINEERING AND ADVISORY SERVICES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, "Supporting developers, lenders, utilities and industrial asset owners.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 15);
        \u0275\u0275repeaterCreate(34, EngineeringConsultingComponent_For_35_Template, 5, 2, "div", 16, _forTrack1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.dataService.engineeringStudies);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.consultingServices);
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.page-banner.cyan-theme[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(6, 182, 212, 0.15) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner.cyan-theme[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.page-banner.cyan-theme[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n}\n.section-studies[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-studies[_ngcontent-%COMP%]   .study-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 2.2rem;\n}\n.section-studies[_ngcontent-%COMP%]   .study-card[_ngcontent-%COMP%]   .type-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.8rem;\n  font-size: 0.75rem;\n  font-weight: 800;\n  padding: 0.2rem 0.6rem;\n  border-radius: var(--radius-full);\n  text-transform: uppercase;\n}\n.section-studies[_ngcontent-%COMP%]   .study-card[_ngcontent-%COMP%]   .type-tag.study[_ngcontent-%COMP%] {\n  background: rgba(2, 132, 199, 0.15);\n  color: var(--accent-azure);\n}\n.section-studies[_ngcontent-%COMP%]   .study-card[_ngcontent-%COMP%]   .type-tag.design[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n}\n.section-studies[_ngcontent-%COMP%]   .study-card[_ngcontent-%COMP%]   .type-tag.assurance[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: var(--accent-amber);\n}\n.section-studies[_ngcontent-%COMP%]   .study-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n.section-studies[_ngcontent-%COMP%]   .study-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-sub);\n}\n.section-services-grid[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-services-grid[_ngcontent-%COMP%]   .srv-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: #FFFFFF;\n  margin-bottom: 0.5rem;\n  letter-spacing: 0.04em;\n}\n.section-services-grid[_ngcontent-%COMP%]   .srv-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=engineering-consulting.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EngineeringConsultingComponent, { className: "EngineeringConsultingComponent", filePath: "src\\app\\features\\engineering-consulting\\engineering-consulting.component.ts", lineNumber: 13 });
})();
export {
  EngineeringConsultingComponent
};
//# sourceMappingURL=chunk-G2H3MLP5.js.map
