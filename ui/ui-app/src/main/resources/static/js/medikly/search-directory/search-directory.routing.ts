import {Routes} from '@angular/router';

import {SearchDirectoryComponent} from './search-directory.component';

export const SearchDirectoryRouting: Routes = [
    {
        path: '',
        component: SearchDirectoryComponent
    },
    {
        path: ':category',
        component: SearchDirectoryComponent
    }];