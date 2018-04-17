define(["require", "exports", "./main/main.component", "./project-summary/project-summary.component", "./data-dictionary/data-dictionary.component", "./home/home.component"], function (require, exports, main_component_1, project_summary_component_1, data_dictionary_component_1, home_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProjectWorkspaceRouting = [{
            path: '',
            component: main_component_1.MainComponent,
            children: [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                }, {
                    path: 'project-summary',
                    component: project_summary_component_1.ProjectSummaryComponent
                },
                {
                    path: 'data-dictionary',
                    component: data_dictionary_component_1.DataDictionaryComponent
                }
            ]
        }];
});
//# sourceMappingURL=project-workspace.routing.js.map