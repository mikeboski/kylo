/**
 * Created by development on 20/9/17.
 */
import {NgModule} from '@angular/core';
import {MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatCheckboxModule,
  MatTabsModule,
  MatToolbarModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { DialogUploadFiles } from './upload-files/upload-files.dialog';
import { DialogAddFilesUrl } from './add-files-url/add-files-url.dialog';
import { DialogAddDescriptionFile } from './add-description-file/add-description-file.dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,
    FileUploadModule,
  ],
  declarations: [DialogUploadFiles, DialogAddFilesUrl, DialogAddDescriptionFile],
  exports: [DialogUploadFiles, DialogAddFilesUrl, DialogAddDescriptionFile],
  entryComponents: [DialogUploadFiles, DialogAddFilesUrl, DialogAddDescriptionFile],
})
export class DialogWorkspaceModule {
}
