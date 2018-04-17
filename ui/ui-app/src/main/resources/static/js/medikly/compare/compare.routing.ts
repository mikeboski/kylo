/**
 * Created by development on 27/7/17.
 */
import {Routes} from '@angular/router';

import {CompareComponent} from './compare.component';

export const CompareRouting: Routes = [
  {
    path: ':ids',
    component: CompareComponent
  }];
