import {
  AxiolDataService
} from "./chunk-2BYXOY4B.js";
import {
  RouterLink
} from "./chunk-LDDVMWZE.js";
import {
  CommonModule,
  NgClass,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T2ZPLF3I.js";

// src/app/features/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.step;
function HomeComponent_For_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function HomeComponent_For_163_Template_button_click_0_listener() {
      const \u0275$index_279_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveGrowth(\u0275$index_279_r2));
    });
    \u0275\u0275elementStart(1, "div", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 95)(4, "span", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const phase_r4 = ctx.$implicit;
    const \u0275$index_279_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeGrowthIndex === \u0275$index_279_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", \u0275$index_279_r2 + 1, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(phase_r4.stage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", phase_r4.capacityGrowth, " Progress");
  }
}
function HomeComponent_For_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5);
  }
}
function HomeComponent_For_207_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275listener("click", function HomeComponent_For_207_Template_div_click_0_listener() {
      const \u0275$index_367_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveStage(\u0275$index_367_r7));
    });
    \u0275\u0275elementStart(1, "div", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 101)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 102);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stage_r8 = ctx.$implicit;
    const \u0275$index_367_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeStageIndex === \u0275$index_367_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r8.step);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stage_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stage_r8.action);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.dataService = inject(AxiolDataService);
    this.activeStageIndex = 0;
    this.activeGrowthIndex = 0;
  }
  setActiveStage(index) {
    this.activeStageIndex = index;
  }
  setActiveGrowth(index) {
    this.activeGrowthIndex = index;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 220, vars: 10, consts: [[1, "asymmetric-hero"], [1, "hero-ambient-glow"], [1, "axiol-container"], [1, "hero-bento-grid"], [1, "hero-main-card"], [1, "growth-pill-badge"], [1, "pulse-dot"], [1, "hero-headline"], [1, "text-gradient-leaf"], [1, "hero-lead"], [1, "hero-btn-group"], ["routerLink", "/overview", 1, "btn-organic-primary"], [1, "fa-solid", "fa-arrow-right"], ["routerLink", "/epc-projects", 1, "btn-organic-glass"], [1, "fa-solid", "fa-diagram-project"], [1, "hero-quick-stats"], [1, "q-stat"], [1, "stat-num"], [1, "stat-lbl"], [1, "stat-divider"], [1, "hero-visual-card"], [1, "stacked-media-frame"], ["src", "assets/images/hero-banner.png", "alt", "Axiol Integrated Complex", "onerror", "this.src='https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80'", 1, "main-hero-img"], [1, "frame-glass-overlay"], [1, "eco-tag"], [1, "fa-solid", "fa-leaf"], [1, "section-bento-pillars"], [1, "bento-section-header"], [1, "header-left"], [1, "axiol-badge", "emerald"], [1, "fa-solid", "fa-cubes"], [1, "header-desc"], [1, "bento-container"], [1, "bento-card", "bento-wide", "renewable-bento"], [1, "bento-bg-img"], ["src", "assets/images/solar-bess-farm.png", "alt", "Renewable Energy", "onerror", "this.src='https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80'"], [1, "bento-img-overlay"], [1, "bento-content"], [1, "bento-pill-tag", "emerald"], [1, "fa-solid", "fa-solar-panel"], [1, "bento-features-row"], [1, "fa-solid", "fa-check"], ["routerLink", "/renewable-energy", 1, "bento-link-btn"], [1, "bento-card", "bento-tall", "oil-bento"], [1, "bento-icon-box", "amber"], [1, "fa-solid", "fa-oil-well"], [1, "bento-sub"], [1, "bento-list"], [1, "fa-solid", "fa-circle-check"], ["routerLink", "/oil-gas", 1, "bento-link-btn", "amber"], [1, "bento-card", "bento-tall", "electrical-bento"], [1, "bento-icon-box", "azure"], [1, "fa-solid", "fa-bolt"], ["routerLink", "/electrical-infra", 1, "bento-link-btn", "azure"], [1, "bento-card", "bento-wide", "capacity-bento"], ["src", "assets/images/technical-training.png", "alt", "Training Workshop", "onerror", "this.src='https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'"], [1, "bento-img-overlay", "cyan-overlay"], [1, "bento-pill-tag", "cyan"], [1, "fa-solid", "fa-graduation-cap"], ["routerLink", "/training-capacity", 1, "bento-link-btn", "cyan"], [1, "section-growth-interactive"], [1, "growth-engine-wrapper"], [1, "growth-side-nav"], [1, "section-tag-emerald"], [1, "growth-nav-buttons"], [1, "growth-nav-item", 3, "active"], [1, "growth-active-display"], [1, "active-stage-card"], [1, "card-header"], [1, "stage-badge-pill"], [1, "fa-solid", "fa-seedling"], [1, "capacity-tag"], [1, "stage-description"], [1, "growth-metrics-row"], [1, "metric-pill"], [1, "m-title"], [1, "m-val"], [1, "metric-pill", "emerald"], [1, "drivers-box"], [1, "drivers-tags"], [1, "d-tag"], [1, "section-stepper-chain"], [1, "axiol-section-title"], [1, "axiol-badge", "azure"], [1, "fa-solid", "fa-arrows-spin"], [1, "chain-grid"], [1, "chain-stepper-list"], [1, "chain-step-card", 3, "active"], [1, "chain-detail-card"], [1, "detail-badge-icon"], [1, "fa-solid", 3, "ngClass"], [1, "stage-step-tag"], ["routerLink", "/epc-projects", 1, "axiol-btn", "btn-primary"], [1, "growth-nav-item", 3, "click"], [1, "nav-step-badge"], [1, "nav-text"], [1, "stage-label"], [1, "stage-metric"], [1, "fa-solid", "fa-chevron-right", "arrow-icon"], [1, "chain-step-card", 3, "click"], [1, "c-num"], [1, "c-info"], [1, "c-action"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "span", 6);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "African Regional Energy and Infrastructure Partner");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h1", 7);
        \u0275\u0275text(10, " Integrated Energy.");
        \u0275\u0275element(11, "br");
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13, "Engineered For Growth.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "p", 9);
        \u0275\u0275text(15, " Axiol Energies delivers integrated conventional fuel, renewable power, electrical grids, and human-capacity solutions engineered to scale across African growth corridors. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10)(17, "a", 11);
        \u0275\u0275text(18, " Explore Energy Platform ");
        \u0275\u0275element(19, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "a", 13);
        \u0275\u0275element(21, "i", 14);
        \u0275\u0275text(22, " Turnkey EPC Delivery ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 15)(24, "div", 16)(25, "span", 17);
        \u0275\u0275text(26, "4+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 18);
        \u0275\u0275text(28, "Core Pillars");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "div", 19);
        \u0275\u0275elementStart(30, "div", 16)(31, "span", 17);
        \u0275\u0275text(32, "100%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 18);
        \u0275\u0275text(34, "Turnkey Capability");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "div", 19);
        \u0275\u0275elementStart(36, "div", 16)(37, "span", 17);
        \u0275\u0275text(38, "HSEQ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 18);
        \u0275\u0275text(40, "Safety Certified");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 20)(42, "div", 21);
        \u0275\u0275element(43, "img", 22);
        \u0275\u0275elementStart(44, "div", 23)(45, "div", 24);
        \u0275\u0275element(46, "i", 25);
        \u0275\u0275text(47, " Sustainable Energy Ecosystem");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "h3");
        \u0275\u0275text(49, "Pan African Energy Infrastructure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "p");
        \u0275\u0275text(51, "Solar PV \u2022 BESS Storage \u2022 Fuel Depots \u2022 Grid Substations");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(52, "section", 26)(53, "div", 2)(54, "div", 27)(55, "div", 28)(56, "span", 29);
        \u0275\u0275element(57, "i", 30);
        \u0275\u0275text(58, " Core Capabilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h2");
        \u0275\u0275text(60, "OUR BUSINESS PILLARS BENTO GRID");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "p", 31);
        \u0275\u0275text(62, " A unified multi-technology ecosystem structured to meet utility, commercial, mining, and institutional energy needs. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 32)(64, "div", 33)(65, "div", 34);
        \u0275\u0275element(66, "img", 35)(67, "div", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 37)(69, "span", 38);
        \u0275\u0275element(70, "i", 39);
        \u0275\u0275text(71, " Business Pillar 01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "h3");
        \u0275\u0275text(73, "RENEWABLE ENERGY AND STORAGE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p");
        \u0275\u0275text(75, "Utility scale solar PV, battery energy storage systems (BESS), wind, hydro, and green hydrogen solutions engineered for high performance.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 40)(77, "span");
        \u0275\u0275element(78, "i", 41);
        \u0275\u0275text(79, " Utility Solar PV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "span");
        \u0275\u0275element(81, "i", 41);
        \u0275\u0275text(82, " BESS Storage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span");
        \u0275\u0275element(84, "i", 41);
        \u0275\u0275text(85, " Microgrids");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "a", 42);
        \u0275\u0275text(87, " Explore Renewables ");
        \u0275\u0275element(88, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "div", 43)(90, "div", 37)(91, "div", 44);
        \u0275\u0275element(92, "i", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "span", 46);
        \u0275\u0275text(94, "Business Pillar 02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "h3");
        \u0275\u0275text(96, "OIL AND GAS INFRASTRUCTURE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p");
        \u0275\u0275text(98, "Bulk fuel supply, tanks, pumps, smart metering, and automated fuel depots for mining, transport, and agriculture.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul", 47)(100, "li");
        \u0275\u0275element(101, "i", 48);
        \u0275\u0275text(102, " Tank Farm Storage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "li");
        \u0275\u0275element(104, "i", 48);
        \u0275\u0275text(105, " Smart Metering");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "li");
        \u0275\u0275element(107, "i", 48);
        \u0275\u0275text(108, " Fuel Reconciliation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "a", 49);
        \u0275\u0275text(110, " Explore Oil and Gas ");
        \u0275\u0275element(111, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "div", 50)(113, "div", 37)(114, "div", 51);
        \u0275\u0275element(115, "i", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "span", 46);
        \u0275\u0275text(117, "Business Pillar 03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "h3");
        \u0275\u0275text(119, "ELECTRICAL INFRASTRUCTURE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "p");
        \u0275\u0275text(121, "Transmission, distribution lines, high voltage substations, SCADA telemetry, and grid protection controls.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "ul", 47)(123, "li");
        \u0275\u0275element(124, "i", 48);
        \u0275\u0275text(125, " Power Lines and Grids");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "li");
        \u0275\u0275element(127, "i", 48);
        \u0275\u0275text(128, " 132kV Switchyards");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "li");
        \u0275\u0275element(130, "i", 48);
        \u0275\u0275text(131, " SCADA and Protection");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "a", 53);
        \u0275\u0275text(133, " Explore Electrical ");
        \u0275\u0275element(134, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "div", 54)(136, "div", 34);
        \u0275\u0275element(137, "img", 55)(138, "div", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "div", 37)(140, "span", 57);
        \u0275\u0275element(141, "i", 58);
        \u0275\u0275text(142, " Business Pillar 04");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "h3");
        \u0275\u0275text(144, "TRAINING AND HUMAN CAPACITY BUILDING");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "p");
        \u0275\u0275text(146, "Transferring technical expertise, OEM safety certifications, solar PV commissioning skills, and institutional knowledge.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "a", 59);
        \u0275\u0275text(148, " Explore Capacity Building ");
        \u0275\u0275element(149, "i", 12);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(150, "section", 60)(151, "div", 2)(152, "div", 61)(153, "div", 62)(154, "div", 63);
        \u0275\u0275element(155, "i", 25);
        \u0275\u0275text(156, " Growth Lifecycle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "h2");
        \u0275\u0275text(158, "STAGES OF ENERGY TRANSFORMATION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "p");
        \u0275\u0275text(160, "A structured growth journey that transitions baseload energy security into sustainable, zero-carbon microgrid ecosystems.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 64);
        \u0275\u0275repeaterCreate(162, HomeComponent_For_163_Template, 9, 5, "button", 65, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "div", 66)(165, "div", 67)(166, "div", 68)(167, "span", 69);
        \u0275\u0275element(168, "i", 70);
        \u0275\u0275text(169);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "div", 71);
        \u0275\u0275text(171);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(172, "h3");
        \u0275\u0275text(173);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "p", 72);
        \u0275\u0275text(175);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "div", 73)(177, "div", 74)(178, "span", 75);
        \u0275\u0275text(179, "Baseload Target");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "span", 76);
        \u0275\u0275text(181);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "div", 77)(183, "span", 75);
        \u0275\u0275text(184, "Decarbonization");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "span", 76);
        \u0275\u0275text(186);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(187, "div", 78)(188, "h4");
        \u0275\u0275element(189, "i", 48);
        \u0275\u0275text(190, " Key Growth Pillars:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "div", 79);
        \u0275\u0275repeaterCreate(192, HomeComponent_For_193_Template, 2, 1, "span", 80, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(194, "section", 81)(195, "div", 2)(196, "div", 82)(197, "span", 83);
        \u0275\u0275element(198, "i", 84);
        \u0275\u0275text(199, " Integrated Model");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "h2");
        \u0275\u0275text(201, "COMPLETE TURNKEY VALUE CHAIN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "p");
        \u0275\u0275text(203, "Clients can engage Axiol across all six stages of project origination, design, procurement, and operations.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "div", 85)(205, "div", 86);
        \u0275\u0275repeaterCreate(206, HomeComponent_For_207_Template, 8, 5, "div", 87, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 88)(209, "div", 89);
        \u0275\u0275element(210, "i", 90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "span", 91);
        \u0275\u0275text(212);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "h3");
        \u0275\u0275text(214);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "p");
        \u0275\u0275text(216);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "a", 92);
        \u0275\u0275text(218, " Explore Turnkey Execution ");
        \u0275\u0275element(219, "i", 12);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(162);
        \u0275\u0275repeater(ctx.dataService.growthPhases);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.dataService.growthPhases[ctx.activeGrowthIndex].badge, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dataService.growthPhases[ctx.activeGrowthIndex].capacityGrowth);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dataService.growthPhases[ctx.activeGrowthIndex].title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dataService.growthPhases[ctx.activeGrowthIndex].description);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.dataService.growthPhases[ctx.activeGrowthIndex].metric);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.dataService.growthPhases[ctx.activeGrowthIndex].decarbonization);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.dataService.growthPhases[ctx.activeGrowthIndex].highlights);
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.dataService.valueChainStages);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", ctx.dataService.valueChainStages[ctx.activeStageIndex].icon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("STAGE ", ctx.dataService.valueChainStages[ctx.activeStageIndex].step, " OF 06");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dataService.valueChainStages[ctx.activeStageIndex].title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.dataService.valueChainStages[ctx.activeStageIndex].description);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink], styles: ["\n\n.asymmetric-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 4rem 0 6rem 0;\n  overflow: hidden;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-ambient-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15%;\n  left: 20%;\n  width: 650px;\n  height: 650px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(116, 198, 157, 0.18) 0%,\n      rgba(230, 126, 34, 0.12) 45%,\n      rgba(10, 21, 16, 0) 75%);\n  filter: blur(80px);\n  pointer-events: none;\n  z-index: 0;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-bento-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.25fr 1fr;\n  gap: 2.5rem;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 992px) {\n  .asymmetric-hero[_ngcontent-%COMP%]   .hero-bento-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(18, 36, 28, 0.85),\n      rgba(10, 21, 16, 0.95));\n  border: 1px solid rgba(116, 198, 157, 0.25);\n  border-radius: var(--radius-lg);\n  padding: 3.5rem;\n  box-shadow: 0 20px 50px -10px rgba(5, 14, 10, 0.7);\n}\n@media (max-width: 640px) {\n  .asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .growth-pill-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.45rem 1.1rem;\n  border-radius: var(--radius-full);\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--accent-sprout);\n  background: rgba(116, 198, 157, 0.12);\n  border: 1px solid rgba(116, 198, 157, 0.3);\n  margin-bottom: 1.5rem;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .growth-pill-badge[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: var(--radius-full);\n  background: var(--accent-sprout);\n  box-shadow: 0 0 10px var(--accent-sprout);\n  animation: _ngcontent-%COMP%_pulseDot 2s infinite;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 4.5vw, 3.6rem);\n  font-weight: 800;\n  line-height: 1.12;\n  margin-bottom: 1.2rem;\n  color: #F8FAF6;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-headline[_ngcontent-%COMP%]   .text-gradient-leaf[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #74C69D 0%,\n      #F59E0B 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-lead[_ngcontent-%COMP%] {\n  font-size: 1.12rem;\n  color: var(--text-sub);\n  line-height: 1.65;\n  margin-bottom: 2.2rem;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2.5rem;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-btn-group[_ngcontent-%COMP%]   .btn-organic-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.9rem 1.8rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-heading);\n  font-weight: 600;\n  font-size: 0.96rem;\n  background:\n    linear-gradient(\n      135deg,\n      #2D6A4F,\n      #1B4332);\n  color: #FFFFFF;\n  border: 1px solid rgba(116, 198, 157, 0.3);\n  box-shadow: 0 6px 20px rgba(45, 106, 79, 0.4);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-btn-group[_ngcontent-%COMP%]   .btn-organic-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #40916C,\n      #2D6A4F);\n  transform: translateY(-3px);\n  box-shadow: 0 10px 30px rgba(64, 145, 108, 0.55);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-btn-group[_ngcontent-%COMP%]   .btn-organic-glass[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.9rem 1.8rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-heading);\n  font-weight: 600;\n  font-size: 0.96rem;\n  background: rgba(116, 198, 157, 0.08);\n  color: var(--text-main);\n  border: 1px solid rgba(116, 198, 157, 0.25);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-btn-group[_ngcontent-%COMP%]   .btn-organic-glass[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-amber);\n  color: #F59E0B;\n  background: rgba(230, 126, 34, 0.1);\n  transform: translateY(-3px);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-quick-stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding-top: 1.8rem;\n  border-top: 1px solid rgba(116, 198, 157, 0.15);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-quick-stats[_ngcontent-%COMP%]   .q-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-quick-stats[_ngcontent-%COMP%]   .q-stat[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 1.4rem;\n  color: var(--accent-sprout);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-quick-stats[_ngcontent-%COMP%]   .q-stat[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-sub);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-main-card[_ngcontent-%COMP%]   .hero-quick-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: rgba(116, 198, 157, 0.2);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-visual-card[_ngcontent-%COMP%]   .stacked-media-frame[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  aspect-ratio: 4/5;\n  border: 1px solid rgba(116, 198, 157, 0.3);\n  box-shadow: 0 25px 50px -10px rgba(5, 14, 10, 0.8);\n}\n@media (max-width: 992px) {\n  .asymmetric-hero[_ngcontent-%COMP%]   .hero-visual-card[_ngcontent-%COMP%]   .stacked-media-frame[_ngcontent-%COMP%] {\n    aspect-ratio: 16/9;\n  }\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-visual-card[_ngcontent-%COMP%]   .stacked-media-frame[_ngcontent-%COMP%]   .main-hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-visual-card[_ngcontent-%COMP%]   .stacked-media-frame[_ngcontent-%COMP%]:hover   .main-hero-img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-visual-card[_ngcontent-%COMP%]   .stacked-media-frame[_ngcontent-%COMP%]   .frame-glass-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      to top,\n      rgba(10, 21, 16, 0.98) 0%,\n      rgba(10, 21, 16, 0.2) 80%);\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-visual-card[_ngcontent-%COMP%]   .stacked-media-frame[_ngcontent-%COMP%]   .frame-glass-overlay[_ngcontent-%COMP%]   .eco-tag[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--accent-sprout);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  margin-bottom: 0.5rem;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-visual-card[_ngcontent-%COMP%]   .stacked-media-frame[_ngcontent-%COMP%]   .frame-glass-overlay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #FFFFFF;\n  margin-bottom: 0.3rem;\n}\n.asymmetric-hero[_ngcontent-%COMP%]   .hero-visual-card[_ngcontent-%COMP%]   .stacked-media-frame[_ngcontent-%COMP%]   .frame-glass-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-sub);\n  margin: 0;\n}\n.section-bento-pillars[_ngcontent-%COMP%] {\n  padding: 5.5rem 0;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 3.5rem;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .section-bento-pillars[_ngcontent-%COMP%]   .bento-section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 3.5vw, 2.6rem);\n  margin-top: 0.6rem;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-section-header[_ngcontent-%COMP%]   .header-desc[_ngcontent-%COMP%] {\n  max-width: 460px;\n  font-size: 1.05rem;\n  color: var(--text-sub);\n  line-height: 1.6;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.8rem;\n}\n@media (max-width: 992px) {\n  .section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%] {\n  background: var(--glass-bg);\n  backdrop-filter: var(--glass-blur);\n  border: 1px solid var(--glass-border);\n  border-radius: var(--radius-lg);\n  padding: 2.2rem;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: var(--shadow-card);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: var(--glass-border-hover);\n  box-shadow: 0 20px 40px -10px rgba(5, 14, 10, 0.8);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card.bento-wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n@media (max-width: 992px) {\n  .section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card.bento-wide[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card.bento-tall[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-bg-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.7s ease;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-bg-img[_ngcontent-%COMP%]   .bento-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(10, 21, 16, 0.95) 40%,\n      rgba(10, 21, 16, 0.6) 100%);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-bg-img[_ngcontent-%COMP%]   .bento-img-overlay.cyan-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(10, 21, 16, 0.95) 30%,\n      rgba(42, 157, 143, 0.4) 100%);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]:hover   .bento-bg-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-pill-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.35rem 0.9rem;\n  border-radius: var(--radius-full);\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  width: fit-content;\n  margin-bottom: 1.2rem;\n  background: rgba(116, 198, 157, 0.15);\n  color: var(--accent-sprout);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-pill-tag.cyan[_ngcontent-%COMP%] {\n  background: rgba(82, 183, 136, 0.18);\n  color: var(--accent-cyan);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-icon-box[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  margin-bottom: 1.2rem;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-icon-box.amber[_ngcontent-%COMP%] {\n  background: rgba(230, 126, 34, 0.18);\n  color: var(--accent-amber);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-icon-box.azure[_ngcontent-%COMP%] {\n  background: rgba(42, 157, 143, 0.18);\n  color: #48CAE4;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: var(--text-sub);\n  margin-bottom: 0.3rem;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  margin-bottom: 0.8rem;\n  color: #FFFFFF;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-sub);\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-features-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.2rem;\n  margin-bottom: 1.8rem;\n  flex-wrap: wrap;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-features-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-main);\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-features-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-sprout);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.8rem;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-main);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-sprout);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-link-btn[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-family: var(--font-heading);\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: var(--accent-sprout);\n  width: fit-content;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-link-btn[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  color: #FFFFFF;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-link-btn.amber[_ngcontent-%COMP%] {\n  color: var(--accent-amber);\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-link-btn.azure[_ngcontent-%COMP%] {\n  color: #48CAE4;\n}\n.section-bento-pillars[_ngcontent-%COMP%]   .bento-container[_ngcontent-%COMP%]   .bento-card[_ngcontent-%COMP%]   .bento-content[_ngcontent-%COMP%]   .bento-link-btn.cyan[_ngcontent-%COMP%] {\n  color: var(--accent-cyan);\n}\n.section-growth-interactive[_ngcontent-%COMP%] {\n  padding: 5.5rem 0;\n  background: var(--bg-dark-surface);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.3fr;\n  gap: 3.5rem;\n  align-items: center;\n}\n@media (max-width: 992px) {\n  .section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .section-tag-emerald[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 1rem;\n  border-radius: var(--radius-full);\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--accent-sprout);\n  background: rgba(116, 198, 157, 0.15);\n  margin-bottom: 1rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 3.5vw, 2.5rem);\n  margin-bottom: 1rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--text-sub);\n  margin-bottom: 2.2rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 1.2rem 1.4rem;\n  border-radius: var(--radius-md);\n  background: rgba(18, 36, 28, 0.6);\n  border: 1px solid rgba(116, 198, 157, 0.15);\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%]   .nav-step-badge[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 0.9rem;\n  color: var(--accent-sprout);\n  background: rgba(116, 198, 157, 0.15);\n  padding: 0.4rem 0.7rem;\n  border-radius: var(--radius-sm);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   .stage-label[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: var(--text-main);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   .stage-metric[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-sub);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  color: var(--text-sub);\n  transition: transform 0.3s ease;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%]:hover, \n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(18, 36, 28, 0.95);\n  border-color: var(--accent-sprout);\n  box-shadow: 0 10px 25px -5px rgba(116, 198, 157, 0.2);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%]:hover   .nav-text[_ngcontent-%COMP%]   .stage-label[_ngcontent-%COMP%], \n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item.active[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]   .stage-label[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%], \n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-side-nav[_ngcontent-%COMP%]   .growth-nav-buttons[_ngcontent-%COMP%]   .growth-nav-item.active[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  transform: translateX(5px);\n  color: var(--accent-sprout);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(18, 36, 28, 0.95),\n      rgba(10, 21, 16, 0.98));\n  border: 1px solid rgba(116, 198, 157, 0.25);\n  border-radius: var(--radius-lg);\n  padding: 3rem;\n  box-shadow: var(--shadow-card);\n}\n@media (max-width: 640px) {\n  .section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%] {\n    padding: 1.8rem;\n  }\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .stage-badge-pill[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--accent-sprout);\n  background: rgba(116, 198, 157, 0.15);\n  padding: 0.4rem 0.9rem;\n  border-radius: var(--radius-full);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .capacity-tag[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 1.1rem;\n  color: #F59E0B;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 3vw, 2rem);\n  margin-bottom: 1rem;\n  color: #FFFFFF;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .stage-description[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--text-sub);\n  line-height: 1.65;\n  margin-bottom: 2rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .growth-metrics-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.2rem;\n  margin-bottom: 2rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .growth-metrics-row[_ngcontent-%COMP%]   .metric-pill[_ngcontent-%COMP%] {\n  background: rgba(10, 21, 16, 0.8);\n  border: 1px solid rgba(116, 198, 157, 0.2);\n  border-radius: var(--radius-md);\n  padding: 1.1rem;\n  display: flex;\n  flex-direction: column;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .growth-metrics-row[_ngcontent-%COMP%]   .metric-pill[_ngcontent-%COMP%]   .m-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-sub);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.3rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .growth-metrics-row[_ngcontent-%COMP%]   .metric-pill[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 1.25rem;\n  color: #F59E0B;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .growth-metrics-row[_ngcontent-%COMP%]   .metric-pill.emerald[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  color: var(--accent-sprout);\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .drivers-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--accent-sprout);\n  margin-bottom: 0.8rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .drivers-box[_ngcontent-%COMP%]   .drivers-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n}\n.section-growth-interactive[_ngcontent-%COMP%]   .growth-engine-wrapper[_ngcontent-%COMP%]   .growth-active-display[_ngcontent-%COMP%]   .active-stage-card[_ngcontent-%COMP%]   .drivers-box[_ngcontent-%COMP%]   .drivers-tags[_ngcontent-%COMP%]   .d-tag[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-main);\n  background: rgba(116, 198, 157, 0.1);\n  padding: 0.4rem 0.8rem;\n  border-radius: var(--radius-sm);\n  border: 1px solid rgba(116, 198, 157, 0.2);\n}\n.section-stepper-chain[_ngcontent-%COMP%] {\n  padding: 5.5rem 0;\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.2fr;\n  gap: 3rem;\n  align-items: center;\n}\n@media (max-width: 992px) {\n  .section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%]   .chain-step-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n  padding: 1rem 1.4rem;\n  border-radius: var(--radius-md);\n  background: var(--glass-bg);\n  border: 1px solid var(--glass-border);\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%]   .chain-step-card[_ngcontent-%COMP%]   .c-num[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-weight: 800;\n  font-size: 0.9rem;\n  color: var(--accent-sprout);\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%]   .chain-step-card[_ngcontent-%COMP%]   .c-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-main);\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%]   .chain-step-card[_ngcontent-%COMP%]   .c-info[_ngcontent-%COMP%]   .c-action[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-sub);\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%]   .chain-step-card[_ngcontent-%COMP%]:hover, \n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%]   .chain-step-card.active[_ngcontent-%COMP%] {\n  background: rgba(18, 36, 28, 0.9);\n  border-color: var(--accent-sprout);\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%]   .chain-step-card[_ngcontent-%COMP%]:hover   .c-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-stepper-list[_ngcontent-%COMP%]   .chain-step-card.active[_ngcontent-%COMP%]   .c-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-detail-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(18, 36, 28, 0.95),\n      rgba(10, 21, 16, 0.98));\n  border: 1px solid rgba(116, 198, 157, 0.25);\n  border-radius: var(--radius-lg);\n  padding: 3rem;\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-detail-card[_ngcontent-%COMP%]   .detail-badge-icon[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: var(--radius-md);\n  background: rgba(116, 198, 157, 0.18);\n  color: var(--accent-sprout);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  margin-bottom: 1.2rem;\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-detail-card[_ngcontent-%COMP%]   .stage-step-tag[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.1em;\n  color: var(--accent-sprout);\n  margin-bottom: 0.4rem;\n  display: block;\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-detail-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin-bottom: 1rem;\n  color: #FFFFFF;\n}\n.section-stepper-chain[_ngcontent-%COMP%]   .chain-grid[_ngcontent-%COMP%]   .chain-detail-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.08rem;\n  color: var(--text-sub);\n  line-height: 1.65;\n  margin-bottom: 2.2rem;\n}\n@keyframes _ngcontent-%COMP%_pulseDot {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.5);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\home\\home.component.ts", lineNumber: 13 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-JDR34CJ4.js.map
