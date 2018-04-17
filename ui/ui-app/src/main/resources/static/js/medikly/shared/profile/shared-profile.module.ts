import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileHeaderCardComponent} from './profile-header-card/profile-header-card.component';
import {ProfileKeyStatsComponent} from './profile-key-stats/profile-key-stats.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatListModule
    ],
    declarations: [ProfileHeaderCardComponent, ProfileKeyStatsComponent],
    exports: [ProfileHeaderCardComponent, ProfileKeyStatsComponent]
})
export class SharedProfileModule {
}