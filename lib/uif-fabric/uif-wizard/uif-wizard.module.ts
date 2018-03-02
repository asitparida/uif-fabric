import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifWizardComponent } from './uif-wizard.component';
import { UifWizardPageComponent } from './uif-wizard-page.component';
import { UifWizardPageNavTitleComponent } from './uif-wizard-page-nav-title.component';
import { UifWizardPageTitleComponent } from './uif-wizard-page-title.component';
import { UifButtonModule } from '../uif-button/uif-button.module';


const COMPONENTS = [
	UifWizardComponent,
	UifWizardPageComponent,
	UifWizardPageNavTitleComponent,
	UifWizardPageTitleComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifButtonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifWizardModule {
}
