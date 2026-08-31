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

// src/app/features/renewable-energy/renewable-energy.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function RenewableEnergyComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275element(4, "i", 26);
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
    \u0275\u0275textInterpolate(item_r1.badge);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.description);
  }
}
var RenewableEnergyComponent = class _RenewableEnergyComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
  }
  static {
    this.\u0275fac = function RenewableEnergyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RenewableEnergyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RenewableEnergyComponent, selectors: [["app-renewable-energy"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 0, consts: [[1, "renewable-page"], [1, "page-banner", "emerald-theme"], [1, "axiol-container", "banner-grid"], [1, "banner-text"], [1, "axiol-badge", "emerald"], [1, "fa-solid", "fa-leaf"], [1, "lead-text"], [1, "banner-media", "axiol-card"], [1, "media-frame"], ["src", "assets/images/solar-bess-farm.png", "alt", "Axiol Solar PV & Battery Storage Asset", "onerror", "this.src='https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'"], [1, "media-caption"], [1, "badge"], [1, "fa-solid", "fa-solar-panel"], [1, "title"], [1, "section-archetypes"], [1, "axiol-container"], [1, "grid-4"], [1, "axiol-card", "arch-card"], [1, "arch-tag"], [1, "section-tech-matrix"], [1, "axiol-section-title"], [1, "axiol-badge"], [1, "fa-solid", "fa-microchip"], [1, "axiol-card", "tech-card"], [1, "card-badge"], [1, "tech-icon"], [1, "fa-solid", 3, "ngClass"]], template: function RenewableEnergyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275text(6, " Business Pillar 02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "RENEWABLE ENERGY PORTFOLIO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, " Clean Generation, Storage & Green Molecules \u2014 Delivering bankable utility-scale, commercial & industrial (C&I), remote mini-grid, and hybrid power across Africa. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
        \u0275\u0275element(13, "img", 9);
        \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
        \u0275\u0275element(16, "i", 12);
        \u0275\u0275text(17, " Clean Generation Asset");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 13);
        \u0275\u0275text(19, "50MW Utility Solar PV & 100MWh Containerized BESS");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(20, "section", 14)(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18);
        \u0275\u0275text(25, "UTILITY-SCALE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p");
        \u0275\u0275text(27, "Grid-connected generation, hybrid plants and storage at transmission/distribution level.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 17)(29, "div", 18);
        \u0275\u0275text(30, "C&I ENERGY");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, "Behind-the-meter generation, peak management, resilience and energy-cost optimisation.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 17)(34, "div", 18);
        \u0275\u0275text(35, "REMOTE & MINI-GRID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p");
        \u0275\u0275text(37, "Hybrid power for isolated loads, institutions, agriculture and infrastructure.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 17)(39, "div", 18);
        \u0275\u0275text(40, "GRID SUPPORT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p");
        \u0275\u0275text(42, "BESS-enabled smoothing, reactive support, fast response and system services.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "section", 19)(44, "div", 15)(45, "div", 20)(46, "span", 21);
        \u0275\u0275element(47, "i", 22);
        \u0275\u0275text(48, " Technology Portfolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h2");
        \u0275\u0275text(50, "TECHNOLOGY SELECTION BASIS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, "Project-specific selection based on technical fit, bankability, warranty, local support and lifecycle performance.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 16);
        \u0275\u0275repeaterCreate(54, RenewableEnergyComponent_For_55_Template, 9, 4, "div", 23, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(54);
        \u0275\u0275repeater(ctx.dataService.renewableCategories);
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.page-banner.emerald-theme[_ngcontent-%COMP%] {\n  padding: 4rem 0 3rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(16, 185, 129, 0.15) 0%,\n      rgb(8, 12, 20) 70%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem;\n  align-items: center;\n}\n@media (max-width: 992px) {\n  .page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 3.5vw, 3rem);\n  margin: 1rem 0;\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: var(--text-sub);\n  line-height: 1.6;\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  border-radius: var(--radius-lg);\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  aspect-ratio: 16/10;\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]   .media-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  inset-x: 0;\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      to top,\n      rgba(8, 12, 20, 0.95) 0%,\n      rgba(8, 12, 20, 0) 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]   .media-caption[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--accent-emerald);\n  text-transform: uppercase;\n}\n.page-banner.emerald-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]   .media-caption[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #FFFFFF;\n}\n.section-archetypes[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.section-archetypes[_ngcontent-%COMP%]   .arch-card[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--accent-emerald);\n}\n.section-archetypes[_ngcontent-%COMP%]   .arch-card[_ngcontent-%COMP%]   .arch-tag[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 0.9rem;\n  color: var(--accent-emerald);\n  margin-bottom: 0.75rem;\n  letter-spacing: 0.05em;\n}\n.section-archetypes[_ngcontent-%COMP%]   .arch-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n.section-tech-matrix[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-tech-matrix[_ngcontent-%COMP%]   .tech-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 2.5rem;\n}\n.section-tech-matrix[_ngcontent-%COMP%]   .tech-card[_ngcontent-%COMP%]   .card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  color: var(--accent-emerald);\n  background: rgba(16, 185, 129, 0.1);\n  padding: 0.2rem 0.6rem;\n  border-radius: var(--radius-full);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n}\n.section-tech-matrix[_ngcontent-%COMP%]   .tech-card[_ngcontent-%COMP%]   .tech-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: var(--radius-md);\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin-bottom: 1rem;\n}\n.section-tech-matrix[_ngcontent-%COMP%]   .tech-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  margin-bottom: 0.5rem;\n}\n.section-tech-matrix[_ngcontent-%COMP%]   .tech-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n/*# sourceMappingURL=renewable-energy.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RenewableEnergyComponent, { className: "RenewableEnergyComponent", filePath: "src\\app\\features\\renewable-energy\\renewable-energy.component.ts", lineNumber: 13 });
})();
export {
  RenewableEnergyComponent
};
//# sourceMappingURL=chunk-6WMRNIZH.js.map
