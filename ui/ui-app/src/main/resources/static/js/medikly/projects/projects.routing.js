define(["require", "exports", "./home/projects.component", "./main/main.component", "./workflow/workflow.component", "../shared/display-documents/mode-card/mode-card.component", "../shared/display-documents/mode-list/mode-list.component"], function (require, exports, projects_component_1, main_component_1, workflow_component_1, mode_card_component_1, mode_list_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectsRoutes = [{
            path: '',
            component: main_component_1.MainComponent,
            children: [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                {
                    path: 'home',
                    component: projects_component_1.ProjectsComponent,
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
                },
                {
                    path: 'workflow',
                    component: workflow_component_1.WorkflowComponent
                }
            ]
        },
    ];
});
//# sourceMappingURL=projects.routing.js.map