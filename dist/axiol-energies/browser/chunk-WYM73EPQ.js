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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T2ZPLF3I.js";

// src/app/features/oil-gas/oil-gas.component.ts
var _forTrack0 = ($index, $item) => $item.stepNumber;
function OilGasComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275element(4, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", step_r1.stepNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", step_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.stage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.description);
  }
}
var OilGasComponent = class _OilGasComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
  }
  static {
    this.\u0275fac = function OilGasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OilGasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OilGasComponent, selectors: [["app-oil-gas"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 0, consts: [[1, "oil-gas-page"], [1, "page-banner", "amber-theme"], [1, "axiol-container", "banner-grid"], [1, "banner-text"], [1, "axiol-badge", "amber"], [1, "fa-solid", "fa-oil-well"], [1, "lead-text"], [1, "banner-media", "axiol-card"], [1, "media-frame"], ["src", "assets/images/oil-gas-depot.png", "alt", "Axiol Petroleum Fuel Depot Facility", "onerror", "this.src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'"], [1, "media-caption"], [1, "badge"], [1, "fa-solid", "fa-gas-pump"], [1, "title"], [1, "section-fuel-architecture"], [1, "axiol-container"], [1, "axiol-section-title"], [1, "fa-solid", "fa-gears"], [1, "fuel-steps-grid"], [1, "axiol-card", "step-card"], [1, "section-capabilities"], [1, "axiol-badge"], [1, "fa-solid", "fa-list-check"], [1, "grid-3"], [1, "axiol-card", "scope-card"], [1, "scope-img"], ["src", "assets/images/oil-gas-depot.png", "alt", "Bulk Storage Tanks", "onerror", "this.src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'"], ["src", "assets/images/equipment-warehouse.png", "alt", "Smart Fuel Dispensers & Metering", "onerror", "this.src='https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'"], ["src", "assets/images/technical-training.png", "alt", "Maintenance & Operations Support", "onerror", "this.src='https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'"], [1, "step-num"], [1, "step-icon"], [1, "fa-solid", 3, "ngClass"]], template: function OilGasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275text(6, " Business Pillar 01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "PETROLEUM INFRASTRUCTURE & FUEL MANAGEMENT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, " Delivering bulk supply, storage tanks, fuel transfer pumps, smart metering, and automated fuel management systems across mining, agriculture, transport, and commercial operations in Africa. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
        \u0275\u0275element(13, "img", 9);
        \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
        \u0275\u0275element(16, "i", 12);
        \u0275\u0275text(17, " Fuel Asset Architecture");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 13);
        \u0275\u0275text(19, "Engineered Fuel Depot & Smart Automated Metering");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(20, "section", 14)(21, "div", 15)(22, "div", 16)(23, "span", 4);
        \u0275\u0275element(24, "i", 17);
        \u0275\u0275text(25, " Fuel Value Chain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h2");
        \u0275\u0275text(27, "COMPLETE TURNKEY FUEL SYSTEM ARCHITECTURE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "Axiol designs, builds, operates and maintains complete onsite fuel infrastructure to prevent fuel loss, control costs, and secure supply.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 18);
        \u0275\u0275repeaterCreate(31, OilGasComponent_For_32_Template, 9, 4, "div", 19, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "section", 20)(34, "div", 15)(35, "div", 16)(36, "span", 21);
        \u0275\u0275element(37, "i", 22);
        \u0275\u0275text(38, " Turnkey Scope");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h2");
        \u0275\u0275text(40, "CORE PETROLEUM CAPABILITIES");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 23)(42, "div", 24)(43, "div", 25);
        \u0275\u0275element(44, "img", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h3");
        \u0275\u0275text(46, "BULK FUEL SUPPLY & STORAGE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p");
        \u0275\u0275text(48, "Aboveground and underground steel tank farm installations, bunding walls, leak detection, and environmental containment systems built to international standards.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 24)(50, "div", 25);
        \u0275\u0275element(51, "img", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "h3");
        \u0275\u0275text(53, "SMART METERING & RECONCILIATION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p");
        \u0275\u0275text(55, "High-flow digital meters, ATG automatic tank gauging, RFID vehicle tag identification, and real-time cloud fuel reconciliation telemetry.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 24)(57, "div", 25);
        \u0275\u0275element(58, "img", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h3");
        \u0275\u0275text(60, "ONSITE OPERATIONS & MAINTENANCE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p");
        \u0275\u0275text(62, "Dedicated fuel technicians, calibration services, pump overhauls, filter replacements, and 24/7 emergency response for zero downtime.");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(31);
        \u0275\u0275repeater(ctx.dataService.fuelArchitecture);
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.page-banner.amber-theme[_ngcontent-%COMP%] {\n  padding: 4rem 0 3rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(245, 158, 11, 0.15) 0%,\n      rgb(8, 12, 20) 70%);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem;\n  align-items: center;\n}\n@media (max-width: 992px) {\n  .page-banner.amber-theme[_ngcontent-%COMP%]   .banner-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 3.5vw, 3rem);\n  margin: 1rem 0;\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: var(--text-sub);\n  line-height: 1.6;\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  border-radius: var(--radius-lg);\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  aspect-ratio: 16/10;\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]   .media-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  inset-x: 0;\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      to top,\n      rgba(8, 12, 20, 0.95) 0%,\n      rgba(8, 12, 20, 0) 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]   .media-caption[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--accent-amber);\n  text-transform: uppercase;\n}\n.page-banner.amber-theme[_ngcontent-%COMP%]   .banner-media[_ngcontent-%COMP%]   .media-frame[_ngcontent-%COMP%]   .media-caption[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #FFFFFF;\n}\n.section-fuel-architecture[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-fuel-architecture[_ngcontent-%COMP%]   .fuel-steps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 1024px) {\n  .section-fuel-architecture[_ngcontent-%COMP%]   .fuel-steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .section-fuel-architecture[_ngcontent-%COMP%]   .fuel-steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-fuel-architecture[_ngcontent-%COMP%]   .fuel-steps-grid[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 2.2rem;\n  text-align: center;\n  border-top: 3px solid var(--accent-amber);\n}\n.section-fuel-architecture[_ngcontent-%COMP%]   .fuel-steps-grid[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.8rem;\n  right: 0.8rem;\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 0.75rem;\n  color: var(--accent-amber);\n}\n.section-fuel-architecture[_ngcontent-%COMP%]   .fuel-steps-grid[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-full);\n  background: rgba(245, 158, 11, 0.15);\n  color: var(--accent-amber);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  margin: 0 auto 1rem auto;\n}\n.section-fuel-architecture[_ngcontent-%COMP%]   .fuel-steps-grid[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n}\n.section-fuel-architecture[_ngcontent-%COMP%]   .fuel-steps-grid[_ngcontent-%COMP%]   .step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-sub);\n  line-height: 1.4;\n}\n.section-capabilities[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-capabilities[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.section-capabilities[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]   .scope-img[_ngcontent-%COMP%] {\n  height: 180px;\n  overflow: hidden;\n}\n.section-capabilities[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]   .scope-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.section-capabilities[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]:hover   .scope-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.section-capabilities[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  margin: 1.25rem 1.25rem 0.4rem 1.25rem;\n}\n.section-capabilities[_ngcontent-%COMP%]   .scope-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  margin: 0 1.25rem 1.25rem 1.25rem;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=oil-gas.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OilGasComponent, { className: "OilGasComponent", filePath: "src\\app\\features\\oil-gas\\oil-gas.component.ts", lineNumber: 13 });
})();
export {
  OilGasComponent
};
//# sourceMappingURL=chunk-WYM73EPQ.js.map
