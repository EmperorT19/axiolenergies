import {
  AxiolDataService
} from "./chunk-2BYXOY4B.js";
import {
  RouterLink
} from "./chunk-LDDVMWZE.js";
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

// src/app/features/overview/overview.component.ts
var _forTrack0 = ($index, $item) => $item.step;
function OverviewComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stage_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r1.step);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r1.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r1.description);
  }
}
var OverviewComponent = class _OverviewComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
  }
  static {
    this.\u0275fac = function OverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverviewComponent, selectors: [["app-overview"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 4, consts: [[1, "overview-page"], [1, "overview-banner"], [1, "axiol-container"], [1, "axiol-badge"], [1, "fa-solid", "fa-building"], [1, "lead-text"], [1, "section-matrix"], [1, "grid-2"], [1, "axiol-card", "matrix-card"], [1, "card-icon", "emerald"], [1, "fa-solid", "fa-eye"], [1, "card-icon", "azure"], [1, "fa-solid", "fa-bullseye"], [1, "card-icon", "amber"], [1, "fa-solid", "fa-compass"], [1, "card-icon", "cyan"], [1, "fa-solid", "fa-book-bookmark"], [1, "section-integration"], [1, "axiol-section-title"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-cubes-stacked"], [1, "integration-workflow"], [1, "wf-step"], [1, "cta-box", "axiol-card"], [1, "cta-content"], ["routerLink", "/portfolio-contact", 1, "axiol-btn", "btn-primary"], [1, "fa-solid", "fa-arrow-right"], [1, "wf-num"], [1, "wf-action"]], template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Corporate Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "WHO WE ARE & OUR BUSINESS MODEL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Axiol Energies Limited delivers energy and infrastructure solutions across conventional and low carbon energy value chains. Our model integrates fuel supply and storage, renewable power development, electrical infrastructure, EPC delivery, equipment distribution and technical capacity building. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7)(13, "div", 8)(14, "div", 9);
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h3");
        \u0275\u0275text(17, "VISION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 11);
        \u0275\u0275element(22, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h3");
        \u0275\u0275text(24, "MISSION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 8)(28, "div", 13);
        \u0275\u0275element(29, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h3");
        \u0275\u0275text(31, "PURPOSE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 15);
        \u0275\u0275element(36, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h3");
        \u0275\u0275text(38, "PHILOSOPHY");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "section", 17)(42, "div", 2)(43, "div", 18)(44, "span", 19);
        \u0275\u0275element(45, "i", 20);
        \u0275\u0275text(46, " Value Chain Convergence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "h2");
        \u0275\u0275text(48, "ONE INTEGRATED ENERGY PARTNER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Clients can engage one coordinated partner across project origination, engineering, technology selection, construction, commissioning and lifecycle support.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 21);
        \u0275\u0275repeaterCreate(52, OverviewComponent_For_53_Template, 9, 4, "div", 22, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 23)(55, "div", 24)(56, "h3");
        \u0275\u0275text(57, "Ready to Partner with Axiol Energies?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p");
        \u0275\u0275text(59, "Talk to our technical engineering team to evaluate your energy security and renewable infrastructure needs.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "a", 25);
        \u0275\u0275text(61, " Contact Engineering Team ");
        \u0275\u0275element(62, "i", 26);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.dataService.corporateOverview.vision);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.dataService.corporateOverview.mission);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.dataService.corporateOverview.purpose);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.dataService.corporateOverview.philosophy);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.dataService.valueChainStages);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.overview-banner[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(2, 132, 199, 0.12) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.overview-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.overview-banner[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n  line-height: 1.7;\n}\n.section-matrix[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-matrix[_ngcontent-%COMP%]   .matrix-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin-bottom: 1.25rem;\n}\n.section-matrix[_ngcontent-%COMP%]   .matrix-card[_ngcontent-%COMP%]   .card-icon.emerald[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n}\n.section-matrix[_ngcontent-%COMP%]   .matrix-card[_ngcontent-%COMP%]   .card-icon.azure[_ngcontent-%COMP%] {\n  background: rgba(2, 132, 199, 0.15);\n  color: var(--accent-azure);\n}\n.section-matrix[_ngcontent-%COMP%]   .matrix-card[_ngcontent-%COMP%]   .card-icon.amber[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: var(--accent-amber);\n}\n.section-matrix[_ngcontent-%COMP%]   .matrix-card[_ngcontent-%COMP%]   .card-icon.cyan[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: var(--accent-cyan);\n}\n.section-matrix[_ngcontent-%COMP%]   .matrix-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 0.75rem;\n  letter-spacing: 0.05em;\n}\n.section-matrix[_ngcontent-%COMP%]   .matrix-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-sub);\n  line-height: 1.6;\n}\n.section-integration[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-integration[_ngcontent-%COMP%]   .integration-workflow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1rem;\n  margin-bottom: 4rem;\n}\n@media (max-width: 992px) {\n  .section-integration[_ngcontent-%COMP%]   .integration-workflow[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .section-integration[_ngcontent-%COMP%]   .integration-workflow[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-integration[_ngcontent-%COMP%]   .integration-workflow[_ngcontent-%COMP%]   .wf-step[_ngcontent-%COMP%] {\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-md);\n  padding: 1.5rem 1rem;\n  text-align: center;\n}\n.section-integration[_ngcontent-%COMP%]   .integration-workflow[_ngcontent-%COMP%]   .wf-step[_ngcontent-%COMP%]   .wf-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 0.85rem;\n  color: var(--accent-emerald);\n  background: rgba(16, 185, 129, 0.1);\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: var(--radius-full);\n  margin-bottom: 0.75rem;\n}\n.section-integration[_ngcontent-%COMP%]   .integration-workflow[_ngcontent-%COMP%]   .wf-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.section-integration[_ngcontent-%COMP%]   .integration-workflow[_ngcontent-%COMP%]   .wf-step[_ngcontent-%COMP%]   .wf-action[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--accent-azure);\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  text-transform: uppercase;\n}\n.section-integration[_ngcontent-%COMP%]   .integration-workflow[_ngcontent-%COMP%]   .wf-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-sub);\n  line-height: 1.4;\n}\n.section-integration[_ngcontent-%COMP%]   .cta-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(16, 185, 129, 0.1),\n      rgba(2, 132, 199, 0.1));\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n@media (max-width: 768px) {\n  .section-integration[_ngcontent-%COMP%]   .cta-box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n    text-align: center;\n  }\n}\n.section-integration[_ngcontent-%COMP%]   .cta-box[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin-bottom: 0.4rem;\n}\n.section-integration[_ngcontent-%COMP%]   .cta-box[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-sub);\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=overview.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverviewComponent, { className: "OverviewComponent", filePath: "src\\app\\features\\overview\\overview.component.ts", lineNumber: 13 });
})();
export {
  OverviewComponent
};
//# sourceMappingURL=chunk-EH2W3QSN.js.map
