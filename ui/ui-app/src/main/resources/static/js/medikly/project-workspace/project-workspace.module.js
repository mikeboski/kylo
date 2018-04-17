var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "./main/main.component", "./project-summary/project-summary.component", "./data-dictionary/data-dictionary.component", "./home/home.component", "./dialog/dialog-workspace.module", "@uirouter/angular", "@angular/forms", "@covalent/core", "@angular/material", "@angular/cdk/collections", "@angular/flex-layout", "ngx-perfect-scrollbar", "ng2-file-upload/ng2-file-upload", "@covalent/markdown"], function (require, exports, core_1, common_1, main_component_1, project_summary_component_1, data_dictionary_component_1, home_component_1, dialog_workspace_module_1, angular_1, forms_1, core_2, material_1, collections_1, flex_layout_1, ngx_perfect_scrollbar_1, ng2_file_upload_1, markdown_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var workspaceState = { name: 'workspace', url: '/projects/view/:id/workspace', views: {
            "content": {
                component: main_component_1.MainComponent,
            }
        },
        data: {
            breadcrumbRoot: true,
            displayName: "Project Name / Workspace",
            module: 'workspace',
            permissions: ['']
        }
    };
    var homeState = { name: 'workspace.home', url: '/home', views: {
            "child-content": {
                component: home_component_1.HomeComponent,
            }
        }
    };
    var summaryState = { name: 'workspace.summary', url: '/project-summary', views: {
            "child-content": {
                component: project_summary_component_1.ProjectSummaryComponent,
            }
        }
    };
    var dictionaryState = { name: 'workspace.dictionary', url: '/data-dictionary', views: {
            "child-content": {
                component: data_dictionary_component_1.DataDictionaryComponent,
            }
        }
    };
    var ProjectWorkspaceModule = /** @class */ (function () {
        function ProjectWorkspaceModule() {
        }
        ProjectWorkspaceModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    angular_1.UIRouterModule.forChild({ states: [workspaceState, homeState, summaryState, dictionaryState] }),
                    material_1.MatCardModule,
                    material_1.MatToolbarModule,
                    material_1.MatTabsModule,
                    material_1.MatIconModule,
                    material_1.MatTooltipModule,
                    material_1.MatButtonModule,
                    material_1.MatButtonToggleModule,
                    material_1.MatChipsModule,
                    material_1.MatListModule,
                    material_1.MatSliderModule,
                    material_1.MatInputModule,
                    material_1.MatCheckboxModule,
                    material_1.MatMenuModule,
                    material_1.MatSidenavModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    core_2.CovalentExpansionPanelModule,
                    collections_1.SelectionModel,
                    markdown_1.CovalentMarkdownModule,
                    material_1.MatRadioModule,
                    material_1.MatSelectModule,
                    material_1.MatProgressBarModule,
                    material_1.MatGridListModule,
                    flex_layout_1.FlexLayoutModule,
                    ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                    dialog_workspace_module_1.DialogWorkspaceModule,
                    ng2_file_upload_1.FileUploadModule
                ],
                declarations: [main_component_1.MainComponent, project_summary_component_1.ProjectSummaryComponent, home_component_1.HomeComponent, data_dictionary_component_1.DataDictionaryComponent]
            })
        ], ProjectWorkspaceModule);
        return ProjectWorkspaceModule;
    }());
    exports.ProjectWorkspaceModule = ProjectWorkspaceModule;
});
//# sourceMappingURL=project-workspace.module.js.map