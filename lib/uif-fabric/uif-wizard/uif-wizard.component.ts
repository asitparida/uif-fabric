import { Component, AfterViewInit, ContentChildren, QueryList, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { UifWizardService } from './uif-wizard.service';
import { UifWizardPageComponent } from './uif-wizard-page.component';
import { UiFWizardNavigation } from './uif-wizard.models';

@Component({
	selector: 'uif-wizard',
	templateUrl: './uif-wizard.component.html',
	styleUrls: [
		'./uif-wizard.component.scss',
		'../uif-fabric.shared.scss'
	],
	providers: [ UifWizardService ]
})
export class UifWizardComponent implements AfterViewInit {
	@ContentChildren(UifWizardPageComponent) pages: QueryList<UifWizardPageComponent> = null;
	@Input() classes = '';
	@Input() showPageIndexInNav: Boolean = false;
	@Input() showStepMarkers: Boolean = false;
	@Input() wizardNavigation: UiFWizardNavigation = UiFWizardNavigation.SideNavigation;
	@Input() showNavTitles: Boolean = true;
	@Output() wizardOnNext?: EventEmitter<number> = new EventEmitter<number>();
	@Output() wizardOnPrevious?: EventEmitter<number> = new EventEmitter<number>();
	@Output() wizardOnFinish?: EventEmitter<any> = new EventEmitter<any>();
	@Output() wizardOnCancel?: EventEmitter<any> = new EventEmitter<any>();
	UiFWizardNavigations = UiFWizardNavigation;
	activePageIndex: number = null;
	showLoader: Boolean = false;
	showWizard: Boolean = false;
	constructor(
		private wizardService: UifWizardService
	) { }
	ngAfterViewInit() {
		this.pages.changes.subscribe((pages) => {
			this.wizardService.loadPages(pages);
		});
		this.wizardService.activePageIndex$.subscribe((i: number) => {
			this.activePageIndex = i;
		});
		this.wizardService.nextPageInvoked$.subscribe((i: number) => {
			this.wizardOnNext.emit(i);
		});
		this.wizardService.previousPageInvoked$.subscribe((i: number) => {
			this.wizardOnPrevious.emit(i);
		});
		this.wizardService.cancelWizardInvoked$.subscribe(() => {
			this.close();
			this.wizardOnCancel.emit();
		});
		this.wizardService.isFinished$.subscribe(() => {
			this.wizardOnFinish.emit();
		});
		setTimeout(() => {
			this.wizardService.loadPages(this.pages);
			this.wizardService.init();
		});
	}
	activatePage(i: number) {
		this.wizardService.activatePage(i);
	}
	reset() {
		console.log('reset');
		this.wizardService.resetWizard();
	}
	open() {
		this.showWizard = true;
	}
	close() {
		this.showWizard = false;
	}
}
