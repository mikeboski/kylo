var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/common", "@angular/material", "@angular/flex-layout", "ngx-perfect-scrollbar", "./home/projects.component", "./workflow/workflow.component", "./main/main.component", "../shared/listing/shared-listing.module", "ngx-order-pipe", "ng2-dragula/ng2-dragula", "../shared/dialog/dialog.module", "@covalent/core", "@covalent/core", "@angular/forms", "./dialog/new-project/dialog.new-project", "@uirouter/angular", "../shared/display-documents/mode-card/mode-card.component", "../shared/display-documents/mode-list/mode-list.component", "../shared/display-documents/display-documents.service", "../shared/display-documents/display-documents.component"], function (require, exports, core_1, common_1, material_1, flex_layout_1, ngx_perfect_scrollbar_1, projects_component_1, workflow_component_1, main_component_1, shared_listing_module_1, ngx_order_pipe_1, ng2_dragula_1, dialog_module_1, core_2, core_3, forms_1, dialog_new_project_1, angular_1, mode_card_component_1, mode_list_component_1, display_documents_service_1, display_documents_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HOME_STATES = {
        name: 'projects',
        url: '/projects',
        views: {
            "content": {
                component: main_component_1.MainComponent,
            }
        }
    };
    var projectsState = { name: 'projects', url: '/projects', views: {
            "content": {
                component: main_component_1.MainComponent,
            }
        }
    };
    var homeState = { name: 'projects.home', url: '/home', views: {
            "child-content": {
                component: projects_component_1.ProjectsComponent,
            }
        },
        data: {
            breadcrumbRoot: true,
            displayName: "Projects",
            module: 'projects',
            permissions: ['']
        }
    };
    var recentState = { name: 'projects.home.recent', url: '/recent', views: {
            "display-documents": {
                component: mode_card_component_1.ModeCardComponent,
            }
        }
    };
    var sharedState = { name: 'projects.home.shared', url: '/shared', views: {
            "display-documents": {
                component: mode_card_component_1.ModeCardComponent,
            }
        }
    };
    var starredState = { name: 'projects.home.starred', url: '/starred', views: {
            "display-documents": {
                component: mode_card_component_1.ModeCardComponent,
            }
        }
    };
    var archiveState = { name: 'projects.home.archive', url: '/archive', views: {
            "display-documents": {
                component: mode_card_component_1.ModeCardComponent,
            }
        }
    };
    var listState = { name: 'projects.home.list', url: '/list', views: {
            "display-documents": {
                component: mode_list_component_1.ModeListComponent,
            }
        }
    };
    var ProjectsModule = /** @class */ (function () {
        function ProjectsModule() {
        }
        ProjectsModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                    angular_1.UIRouterModule.forChild({ states: [projectsState, homeState, recentState, sharedState, starredState, archiveState, listState] }),
                    material_1.MatIconModule,
                    material_1.MatCardModule,
                    material_1.MatButtonModule,
                    material_1.MatListModule,
                    material_1.MatToolbarModule,
                    material_1.MatProgressBarModule,
                    material_1.MatMenuModule,
                    material_1.MatTabsModule,
                    material_1.MatInputModule,
                    material_1.MatRadioModule,
                    material_1.MatCheckboxModule,
                    material_1.MatDialogModule,
                    flex_layout_1.FlexLayoutModule,
                    shared_listing_module_1.SharedListingModule,
                    flex_layout_1.FlexLayoutModule,
                    material_1.MatSidenavModule,
                    forms_1.FormsModule,
                    ngx_order_pipe_1.OrderModule,
                    ng2_dragula_1.DragulaModule,
                    dialog_module_1.DialogModule,
                    core_2.CovalentExpansionPanelModule,
                    core_3.CovalentStepsModule,
                    forms_1.ReactiveFormsModule
                ],
                declarations: [projects_component_1.ProjectsComponent, main_component_1.MainComponent, workflow_component_1.WorkflowComponent, dialog_new_project_1.DialogNewProject, display_documents_component_1.DisplayDocumentsComponent, mode_card_component_1.ModeCardComponent, mode_list_component_1.ModeListComponent
                ],
                entryComponents: [dialog_new_project_1.DialogNewProject],
                providers: [display_documents_service_1.DisplayDocumentsService]
            })
        ], ProjectsModule);
        return ProjectsModule;
    }());
    exports.ProjectsModule = ProjectsModule;
});
//# sourceMappingURL=projects.module.js.map