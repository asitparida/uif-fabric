import { AfterViewInit, QueryList, EventEmitter } from '@angular/core';
import { UifWizardService } from './uif-wizard.service';
import { UifWizardPageComponent } from './uif-wizard-page.component';
import { UiFWizardNavigation } from './uif-wizard.models';
export declare class UifWizardComponent implements AfterViewInit {
    private wizardService;
    pages: QueryList<UifWizardPageComponent>;
    classes: string;
    showPageIndexInNav: Boolean;
    showStepMarkers: Boolean;
    wizardNavigation: UiFWizardNavigation;
    showNavTitles: Boolean;
    wizardOnNext?: EventEmitter<number>;
    wizardOnPrevious?: EventEmitter<number>;
    wizardOnFinish?: EventEmitter<any>;
    wizardOnCancel?: EventEmitter<any>;
    UiFWizardNavigations: typeof UiFWizardNavigation;
    activePageIndex: number;
    showLoader: Boolean;
    showWizard: Boolean;
    constructor(wizardService: UifWizardService);
    ngAfterViewInit(): void;
    activatePage(i: number): void;
    reset(): void;
    open(): void;
    close(): void;
}
