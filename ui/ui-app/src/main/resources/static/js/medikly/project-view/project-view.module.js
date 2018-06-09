var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/material", "@angular/flex-layout", "@angular/forms", "../shared/charts/charts.module", "ngx-perfect-scrollbar", "../shared/listing/shared-listing.module", "ngx-order-pipe", "ng2-dragula/ng2-dragula", "../shared/dialog/dialog.module", "../shared/display-documents/display-documents.module", "@covalent/core", "./main/project-view.component", "./main/info-panel/info-panel.component", "./home/home.component", "./target-component/target.component", "../shared/profile/shared-profile.module", "./target-component/target-tabs/target-tabs.component", "./assets/assets.component", "./segments/segments.component", "./reports/reports.component", "./target-component/expansion-chart/expansion-chart.component", "../services/http.service", "../shared/card-layout/card-layout.module", "./main/info-top/info-top.component", "@uirouter/angular", "../project-workspace/dialog/dialog-workspace.module"], function (require, exports, core_1, common_1, material_1, flex_layout_1, forms_1, charts_module_1, ngx_perfect_scrollbar_1, shared_listing_module_1, ngx_order_pipe_1, ng2_dragula_1, dialog_module_1, display_documents_module_1, core_2, project_view_component_1, info_panel_component_1, home_component_1, target_component_1, shared_profile_module_1, target_tabs_component_1, assets_component_1, segments_component_1, reports_component_1, expansion_chart_component_1, http_service_1, card_layout_module_1, info_top_component_1, angular_1, dialog_workspace_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HOME_STATES = {
        name: 'mdkprojectsviewhome',
        url: '/mdkprojectsviewhome',
        views: {
            "content": {
                component: home_component_1.HomeComponent,
            }
        },
        data: {
            breadcrumbRoot: true,
            displayName: "Projects Home",
            module: 'projects',
            permissions: ['']
        }
    };
    /*
    let projectsViewState = { name: 'mdkprojectsview', url: '/mdkprojectsview',
       views: {
      "content": {
        component: ProjectViewComponent,
      }},
      data: {
        breadcrumbRoot: true,
        displayName: "Project Name",
        module: 'projects',
        permissions: ['']
      }
    };
    let homeState = { name: 'mdkprojectsviewhome', url: '/mdkprojectsviewhome',    views: {
      "content": {
        component: HomeComponent,
      }}
    };
    let targetState = { name: 'view.target', url: '/target',    views: {
      "child-content": {
        component: TargetComponent,
      }}
    };
    let reportsState = { name: 'view.reports', url: '/reports',    views: {
      "child-content": {
        component: ReportsComponent,
      }}
    };
    let assetsState = { name: 'view.assets', url: '/assets',    views: {
      "child-content": {
        component: AssetsComponent,
      }}
    };
    */
    var ProjectViewModule = /** @class */ (function () {
        function ProjectViewModule() {
        }
        ProjectViewModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    //UIRouterModule.forChild({ states: [projectsViewState,homeState,targetState,reportsState,assetsState]}),
                    angular_1.UIRouterModule.forChild({ states: [exports.HOME_STATES] }),
                    ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                    material_1.MatIconModule,
                    material_1.MatCardModule,
                    material_1.MatButtonModule,
                    material_1.MatTabsModule,
                    material_1.MatListModule,
                    material_1.MatToolbarModule,
                    material_1.MatProgressBarModule,
                    material_1.MatMenuModule,
                    material_1.MatInputModule,
                    material_1.MatTooltipModule,
                    material_1.MatCheckboxModule,
                    material_1.MatSliderModule,
                    material_1.MatSelectModule,
                    charts_module_1.ChartsModule,
                    //NgxDatatableModule,
                    flex_layout_1.FlexLayoutModule,
                    shared_listing_module_1.SharedListingModule,
                    material_1.MatSidenavModule,
                    forms_1.FormsModule,
                    ngx_order_pipe_1.OrderModule,
                    ng2_dragula_1.DragulaModule,
                    dialog_module_1.DialogModule,
                    display_documents_module_1.DisplayDocumentsModule,
                    core_2.CovalentExpansionPanelModule,
                    core_2.CovalentDataTableModule,
                    core_2.CovalentSearchModule,
                    core_2.CovalentPagingModule,
                    //MatExpansionModule,
                    core_2.CovalentStepsModule,
                    shared_profile_module_1.SharedProfileModule,
                    forms_1.ReactiveFormsModule,
                    material_1.MatChipsModule,
                    core_2.CovalentChipsModule,
                    card_layout_module_1.CardLayoutModule,
                    /*    NgCircleProgressModule.forRoot({
                          // set defaults here
                          radius: 40,
                          outerStrokeWidth: 16,
                          innerStrokeWidth: 8,
                          outerStrokeColor: '#78C000',
                          innerStrokeColor: '#C7E596',
                          showSubtitle: false,
                          animationDuration: 300,
                        }),*/
                    dialog_workspace_module_1.DialogWorkspaceModule
                ],
                declarations: [
                    project_view_component_1.ProjectViewComponent,
                    home_component_1.HomeComponent,
                    target_component_1.TargetComponent,
                    target_tabs_component_1.TargetTabsComponent,
                    segments_component_1.SegmentsComponent,
                    reports_component_1.ReportsComponent,
                    expansion_chart_component_1.ExpansionChartComponent,
                    info_panel_component_1.InfoPanelComponent,
                    info_top_component_1.InfoTopComponent,
                    assets_component_1.AssetsComponent
                ],
                providers: [
                    http_service_1.HttpService
                ]
            })
        ], ProjectViewModule);
        return ProjectViewModule;
    }());
    exports.ProjectViewModule = ProjectViewModule;
});
//# sourceMappingURL=project-view.module.js.map