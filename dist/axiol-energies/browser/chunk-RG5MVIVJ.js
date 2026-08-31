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
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T2ZPLF3I.js";

// src/app/features/training-capacity/training-capacity.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function TrainingCapacityComponent_For_20_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const aud_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(aud_r1);
  }
}
function TrainingCapacityComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275repeaterCreate(8, TrainingCapacityComponent_For_20_For_9_Template, 2, 1, "span", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prog_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", prog_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prog_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prog_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(prog_r2.targetAudience);
  }
}
function TrainingCapacityComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 21);
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
    const aud_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", aud_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(aud_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(aud_r3.desc);
  }
}
var TrainingCapacityComponent = class _TrainingCapacityComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.targetAudiences = [
      { title: "CLIENT OPERATORS", desc: "Operating teams responsible for daily plant performance.", icon: "fa-user-gear" },
      { title: "UTILITY ENGINEERS", desc: "Engineers managing grid integration and power distribution.", icon: "fa-user-shield" },
      { title: "CONTRACTORS AND TECHNICIANS", desc: "Field teams executing installation and maintenance tasks.", icon: "fa-users-gear" },
      { title: "INSTITUTIONAL TEAMS", desc: "Regulators, asset managers and public sector infrastructure leads.", icon: "fa-building-user" }
    ];
  }
  static {
    this.\u0275fac = function TrainingCapacityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrainingCapacityComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrainingCapacityComponent, selectors: [["app-training-capacity"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 0, consts: [[1, "training-page"], [1, "page-banner", "cyan-theme"], [1, "axiol-container"], [1, "axiol-badge", "cyan"], [1, "fa-solid", "fa-graduation-cap"], [1, "lead-text"], [1, "section-programs"], [1, "axiol-section-title"], [1, "axiol-badge"], [1, "fa-solid", "fa-book-open"], [1, "grid-3"], [1, "axiol-card", "prog-card"], [1, "section-audiences"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-users"], [1, "grid-4"], [1, "axiol-card", "aud-card"], [1, "p-icon"], [1, "fa-solid", 3, "ngClass"], [1, "audience-tags"], [1, "a-tag"], [1, "aud-icon"]], template: function TrainingCapacityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Human Capital Development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "TRAINING AND CAPACITY BUILDING");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " Infrastructure performs best when operators, engineers and technicians understand how to run, maintain and protect it safely. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "section", 6)(11, "div", 2)(12, "div", 7)(13, "span", 8);
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275text(15, " Curricula Portfolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h2");
        \u0275\u0275text(17, "TRAINING PROGRAMMES");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275repeaterCreate(19, TrainingCapacityComponent_For_20_Template, 10, 3, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "section", 12)(22, "div", 2)(23, "div", 7)(24, "span", 13);
        \u0275\u0275element(25, "i", 14);
        \u0275\u0275text(26, " Participant Profiles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2");
        \u0275\u0275text(28, "WHO WE TRAIN");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 15);
        \u0275\u0275repeaterCreate(30, TrainingCapacityComponent_For_31_Template, 7, 3, "div", 16, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.dataService.capacityPrograms);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.targetAudiences);
      }
    }, dependencies: [CommonModule, NgClass], styles: ["\n\n.page-banner.cyan-theme[_ngcontent-%COMP%] {\n  padding: 5rem 0 3.5rem 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(6, 182, 212, 0.15) 0%,\n      rgb(8, 12, 20) 70%);\n  text-align: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.page-banner.cyan-theme[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.2rem, 4vw, 3.2rem);\n  margin: 1.25rem 0;\n}\n.page-banner.cyan-theme[_ngcontent-%COMP%]   .lead-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-sub);\n  max-width: 860px;\n  margin: 0 auto;\n}\n.section-audiences[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n.section-audiences[_ngcontent-%COMP%]   .aud-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n}\n.section-audiences[_ngcontent-%COMP%]   .aud-card[_ngcontent-%COMP%]   .icon.cyan[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.15);\n  color: var(--accent-cyan);\n}\n.section-audiences[_ngcontent-%COMP%]   .aud-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: 0.04em;\n}\n.section-audiences[_ngcontent-%COMP%]   .aud-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  line-height: 1.5;\n}\n.section-programmes[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-programmes[_ngcontent-%COMP%]   .prog-card[_ngcontent-%COMP%]   .prog-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--radius-sm);\n  background: rgba(16, 185, 129, 0.15);\n  color: var(--accent-emerald);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  margin-bottom: 1rem;\n}\n.section-programmes[_ngcontent-%COMP%]   .prog-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n.section-programmes[_ngcontent-%COMP%]   .prog-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  margin-bottom: 1.25rem;\n  line-height: 1.5;\n}\n.section-programmes[_ngcontent-%COMP%]   .prog-card[_ngcontent-%COMP%]   .target-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.section-programmes[_ngcontent-%COMP%]   .prog-card[_ngcontent-%COMP%]   .target-tags[_ngcontent-%COMP%]   .t-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--accent-emerald);\n  padding: 0.15rem 0.5rem;\n  border-radius: var(--radius-full);\n}\n/*# sourceMappingURL=training-capacity.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrainingCapacityComponent, { className: "TrainingCapacityComponent", filePath: "src\\app\\features\\training-capacity\\training-capacity.component.ts", lineNumber: 13 });
})();
export {
  TrainingCapacityComponent
};
//# sourceMappingURL=chunk-RG5MVIVJ.js.map
