import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UiFWizardNavigation, UifWizardComponent } from '../../../../lib/uif-fabric/index';

@Component({
	selector: 'app-wizard-demo',
	templateUrl: './app-wizard-demo.component.html',
	styleUrls: [ '../../app.component.scss' ]
})
export class WizardDemoComponent implements AfterViewInit {
	isWizardShown: Boolean = false;
	sideNavEnabled: Boolean = true;
	showNavTitles: Boolean = true;
	wizardNavigation: UiFWizardNavigation = UiFWizardNavigation.SideNavigation;
	showCancelButtons: Boolean = true;
	private index = 0;
	navigationHints = [
		{ key: UiFWizardNavigation.SideNavigation, text: 'Side Navigation'},
		{ key: UiFWizardNavigation.TopNavigation, text: 'Top Navigation'},
		{ key: UiFWizardNavigation.BottomNavigation, text: 'Bottom Navigation'}
	];
	booleanHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	@ViewChild('wizard') wizard: UifWizardComponent;
	openWizard() {
		this.wizard.open();
		this.isWizardShown = true;
	}
	onWizardOpenChange() {
		if (this.isWizardShown) {
			this.wizard.open();
		} else {
			this.wizard.close();
		}
	}
	onWizardNext(i) {
		console.log('onWizardNext : index ' + i);
		setTimeout(() => {
			this.wizard.showLoader = true;
			setTimeout(() => {
				this.wizard.showLoader = false;
			}, 2000);
		});
	}
	onWizardFinish() {
		this.isWizardShown = false;
		this.wizard.close();
		setTimeout(() => {
			this.wizard.reset();
		});
	}
	onWizardCancel() {
		this.isWizardShown = false;
		this.wizard.close();
		this.wizard.reset();
	}
	ngAfterViewInit() {
		setTimeout(() => {
			this.isWizardShown = true;
			this.sideNavEnabled = true;
			this.wizard.open();
		});
	}
	onLifePageLoaded() {
		console.log('onLifePageLoaded');
	}
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
