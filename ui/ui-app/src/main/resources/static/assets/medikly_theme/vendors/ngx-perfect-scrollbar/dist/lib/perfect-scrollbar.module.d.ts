import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { PerfectScrollbarConfig, PerfectScrollbarConfigInterface } from './perfect-scrollbar.interfaces';
export declare const PERFECT_SCROLLBAR_GUARD: InjectionToken<any>;
export declare const PERFECT_SCROLLBAR_CONFIG: InjectionToken<any>;
export declare class PerfectScrollbarModule {
    constructor(guard: any);
    static forRoot(config?: PerfectScrollbarConfigInterface): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
export declare function provideForRootGuard(config: PerfectScrollbarConfig): any;
export declare function provideDefaultConfig(config: PerfectScrollbarConfigInterface): PerfectScrollbarConfig;
