import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifModalComponent } from './uif-modal.component';
import {
	UifModalHeaderComponent,
	UifModalContentComponent,
	UifModalFooterComponent
} from './uif-modal-subcomponents.component';
import { UifDialogModule } from '../uif-dialog/uif-dialog.module';


const COMPONENTS = [
	UifModalComponent,
	UifModalHeaderComponent,
	UifModalContentComponent,
	UifModalFooterComponent,
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		UifDialogModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifModalModule {
}
