import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifDialogContentComponent, UifDialogFooterComponent, UifDialogHeaderComponent } from './uif-dialog-subcomponents.component';
import { UifDialogComponent } from './uif-dialog.component';


const COMPONENTS = [
	UifDialogComponent,
	UifDialogContentComponent,
	UifDialogFooterComponent,
	UifDialogHeaderComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifDialogModule {
}
