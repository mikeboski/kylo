define(["require", "exports", "./main/project-view.component", "./home/home.component", "./target-component/target.component", "./segments/segments.component", "../shared/display-documents/mode-card/mode-card.component", "../shared/display-documents/mode-list/mode-list.component", "./reports/reports.component", "./assets/assets.component"], function (require, exports, project_view_component_1, home_component_1, target_component_1, segments_component_1, mode_card_component_1, mode_list_component_1, reports_component_1, assets_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectViewRoutes = [
        { path: ':id/workspace', loadChildren: '../project-workspace/project-workspace.module#ProjectWorkspaceModule' },
        {
            path: ':id',
            component: project_view_component_1.ProjectViewComponent,
            children: [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                }, {
                    path: 'target',
                    component: target_component_1.TargetComponent
                },
                {
                    path: 'measure/reports',
                    component: reports_component_1.ReportsComponent
                },
                {
                    path: 'assets',
                    component: assets_component_1.AssetsComponent
                },
                {
                    path: 'personalize/segments',
                    component: segments_component_1.SegmentsComponent,
                    children: [
                        { path: '', redirectTo: 'recent', pathMatch: 'full' },
                        {
                            path: 'recent',
                            component: mode_card_component_1.ModeCardComponent
                        },
                        {
                            path: 'shared',
                            component: mode_card_component_1.ModeCardComponent
                        },
                        {
                            path: 'starred',
                            component: mode_card_component_1.ModeCardComponent
                        },
                        {
                            path: 'archive',
                            component: mode_card_component_1.ModeCardComponent
                        },
                        {
                            path: 'list',
                            component: mode_list_component_1.ModeListComponent
                        }
                    ]
                }
            ]
        }
    ];
});
/**
 *
 *   children: [
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {
   path: 'home',
   component: ProjectsComponent,
   children: [
     {path: '', redirectTo: 'recent', pathMatch: 'full'},
     {
       path: 'recent',
       component: ModeCardComponent
     },
     {
       path: 'shared',
       component: ModeCardComponent
     },
     {
       path: 'starred',
       component: ModeCardComponent
     },
     {
       path: 'archive',
       component: ModeCardComponent
     },
     {
       path: 'list',
       component: ModeListComponent
     }
   ]
 },
 *
 */
//# sourceMappingURL=project-view.routing.js.map