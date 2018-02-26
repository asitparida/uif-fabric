import { Component, ContentChild, Query, ElementRef, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { UifWizardPageTitleComponent } from './uif-wizard-page-title.component';
import { UifWizardPageNavTitleComponent } from './uif-wizard-page-nav-title.component';
import { DomSanitizer } from '@angular/platform-browser';
import { UifWizardService } from './uif-wizard.service';

@Component({
	selector: 'uif-wizard-page',
	templateUrl: './uif-wizard-page.component.html',
	styleUrls: ['./uif-wizard-page.component.scss']
})
export class UifWizardPageComponent implements AfterViewInit {
	@ContentChild(UifWizardPageTitleComponent, { read: ElementRef }) title: ElementRef;
	@ContentChild(UifWizardPageNavTitleComponent, { read: ElementRef }) navTitle: ElementRef;
	@Input() showCancelButtonOverride: Boolean = true;
	@Input() showPreviousButtonOverride: Boolean = true;
	@Input() showNextButtonOverride: Boolean = true;
	@Input() showFinishButtonOverride: Boolean = true;
	@Input() disableCancelButtonOverride: Boolean = false;
	@Input() disablePreviousButtonOverride: Boolean = false;
	@Input() disableNextButtonOverride: Boolean = false;
	@Input() disableFinishButtonOverride: Boolean = false;
	@Output() wizardPageLoaded: EventEmitter<{}> = new EventEmitter<{}>();
	showPage: Boolean = false;
	showPreviousBtn: Boolean = false;
	showNextBtn: Boolean = false;
	showFinishBtn: Boolean = false;
	showCancelBtn: Boolean = false;
	private id: string = null;
	constructor(
		private sanitizer: DomSanitizer,
		private wizardService: UifWizardService
	) { }
	ngAfterViewInit() {
		console.log('page loaded');
		this.wizardService.activePageIdObservable.subscribe((id: string) => {
			if (this.getId() === id) {
				this.wizardPageLoaded.emit();
			}
		});
	}
	getTitle() {
		let result = '';
		if (this.navTitle && this.navTitle.nativeElement) {
			result = (this.navTitle.nativeElement as Element).innerHTML;
		} else if (this.title && this.title.nativeElement) {
			result = (this.title.nativeElement as Element).innerHTML;
		}
		return this.sanitizer.bypassSecurityTrustHtml(result);
	}
	getId() {
		return this.id;
	}
	setId(id: string) {
		this.id = id;
	}
	goWizardPreviousPage() {
		this.wizardService.activatePreviousPage();
	}
	goWizardNextPage() {
		this.wizardService.activateNextPage();
	}
	goWizardFinish() {
		this.wizardService.finishWizard();
	}
	goWizardCancel() {
		this.wizardService.dismissWizard();
	}
}
