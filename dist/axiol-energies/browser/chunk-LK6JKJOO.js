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
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T2ZPLF3I.js";

// src/app/features/electrical-infra/electrical-infra.component.ts
function ElectricalInfraComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cap_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cap_r1);
  }
}
var ElectricalInfraComponent = class _ElectricalInfraComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.networkCapabilities = [
      "LV / MV distribution networks",
      "High-voltage transmission lines",
      "Substations & switching stations",
      "Transformers and switchgear",
      "Underground cable networks",
      "Protection & control systems",
      "SCADA and telecommunications",
      "Metering and smart-grid infrastructure",
      "Industrial electrical systems",
      "Testing, commissioning & O&M"
    ];
  }
  static {
    this.\u0275fac = function ElectricalInfraComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ElectricalInfraComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ElectricalInfraComponent, selectors: [["app-electrical-infra"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 0, consts: [[1, "electrical-page"], [1, "page-banner", "azure-theme"], [1, "axiol-container"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-bolt"], [1, "lead-text"], [1, "section-infra-scopes"], [1, "grid-4"], [1, "axiol-card", "scope-card"], [1, "icon", "azure"], [1, "fa-solid", "fa-tower-cell"], [1, "fa-solid", "fa-network-wired"], [1, "fa-solid", "fa-charging-station"], [1, "fa-solid", "fa-industry"], [1, "section-capabilities"], [1, "axiol-section-title"], [1, "fa-solid", "fa-list-check"], [1, "grid-2"], [1, "axiol-card", "cap-item"], [1, "check-icon"], [1, "fa-solid", "fa-bolt-lightning"]], template: function ElectricalInfraComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Business Pillar 03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "ELECTRICAL INFRASTRUCTURE DEVELOPMENT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " From Generation to Load \u2014 Distribution, transmission, substations, protection and controls engineered as one coordinated power system. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7)(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h3");
        \u0275\u0275text(17, "TRANSMISSION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "HV lines, line bays, protection, communications and grid interfaces.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 9);
        \u0275\u0275element(22, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h3");
        \u0275\u0275text(24, "DISTRIBUTION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "MV/LV networks, transformers, feeders, metering and customer connection.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 8)(28, "div", 9);
        \u0275\u0275element(29, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h3");
        \u0275\u0275text(31, "SUBSTATIONS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33, "Primary/secondary plant, control, protection, SCADA and auxiliary systems.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275element(36, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h3");
        \u0275\u0275text(38, "INDUSTRIAL POWER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, "Plant distribution, switchboards, backup supply, power quality and controls.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "section", 14)(42, "div", 2)(43, "div", 15)(44, "span", 3);
        \u0275\u0275element(45, "i", 16);
        \u0275\u0275text(46, " Grid Integration Scope");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "h2");
        \u0275\u0275text(48, "NETWORK CAPABILITY MATRIX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Axiol integrates generation interfaces, substations, lines, protection, control, metering and end-user distribution.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 17);
        \u0275\u0275repeaterCreate(52, ElectricalInfraComponent_For_53_Template, 5, 1, "div", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(52);
        \u0275\u0275repeater(ctx.networkCapabilities);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.page-banner.azure-theme[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(2, 132, 199, 0.15) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner.azure-theme[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.page-banner.azure-theme[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n}\n.section-infra-scopes[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-infra-scopes[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin-bottom: 1.25rem;\n}\n.section-infra-scopes[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]   .icon.azure[_ngcontent-%COMP%] {\n  background: rgba(2, 132, 199, 0.15);\n  color: var(--accent-azure);\n}\n.section-infra-scopes[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  margin-bottom: 0.5rem;\n}\n.section-infra-scopes[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n}\n.section-capabilities[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-capabilities[_ngcontent-%COMP%]   .cap-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 1.25rem;\n}\n.section-capabilities[_ngcontent-%COMP%]   .cap-item[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-full);\n  background: rgba(2, 132, 199, 0.15);\n  color: var(--accent-azure);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.section-capabilities[_ngcontent-%COMP%]   .cap-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 600;\n  font-size: 1rem;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=electrical-infra.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ElectricalInfraComponent, { className: "ElectricalInfraComponent", filePath: "src\\app\\features\\electrical-infra\\electrical-infra.component.ts", lineNumber: 13 });
})();
export {
  ElectricalInfraComponent
};
//# sourceMappingURL=chunk-LK6JKJOO.js.map
