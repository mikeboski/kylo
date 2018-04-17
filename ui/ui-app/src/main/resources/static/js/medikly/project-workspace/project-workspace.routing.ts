import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { DataDictionaryComponent } from './data-dictionary/data-dictionary.component';
import { HomeComponent } from './home/home.component';

export const ProjectWorkspaceRouting: Routes = [ {
  path: '',
  component: MainComponent,
  children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: 'home',
      component: HomeComponent
    },{
      path: 'project-summary',
      component: ProjectSummaryComponent
    },
    {
      path: 'data-dictionary',
      component: DataDictionaryComponent
    }]
}];
