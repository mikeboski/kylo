var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "./dialog-rename-file.component", "./dialog-remove-file.component", "./dialog-label.component", "./dialog-folder.component", "./dialog-create.component", "@angular/material", "@angular/forms", "@angular/flex-layout", "@angular/common"], function (require, exports, core_1, dialog_rename_file_component_1, dialog_remove_file_component_1, dialog_label_component_1, dialog_folder_component_1, dialog_create_component_1, material_1, forms_1, flex_layout_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogModule = /** @class */ (function () {
        function DialogModule() {
        }
        DialogModule = __decorate([
            core_1.NgModule({
                imports: [
                    material_1.MatButtonModule,
                    material_1.MatDialogModule,
                    material_1.MatInputModule,
                    forms_1.FormsModule,
                    material_1.MatCardModule,
                    material_1.MatIconModule,
                    material_1.MatRadioModule,
                    material_1.MatProgressBarModule,
                    material_1.MatToolbarModule,
                    forms_1.ReactiveFormsModule,
                    flex_layout_1.FlexLayoutModule,
                    common_1.CommonModule,
                ],
                declarations: [dialog_folder_component_1.DialogFolder, dialog_label_component_1.DialogLabel, dialog_remove_file_component_1.DialogRemoveFile, dialog_rename_file_component_1.DialogRenameFile, dialog_create_component_1.DialogCreate],
                exports: [dialog_folder_component_1.DialogFolder, dialog_label_component_1.DialogLabel, dialog_remove_file_component_1.DialogRemoveFile, dialog_rename_file_component_1.DialogRenameFile, dialog_create_component_1.DialogCreate],
                entryComponents: [
                    dialog_folder_component_1.DialogFolder, dialog_label_component_1.DialogLabel, dialog_rename_file_component_1.DialogRenameFile, dialog_remove_file_component_1.DialogRemoveFile, dialog_create_component_1.DialogCreate
                ],
            })
        ], DialogModule);
        return DialogModule;
    }());
    exports.DialogModule = DialogModule;
});
//# sourceMappingURL=dialog.module.js.map