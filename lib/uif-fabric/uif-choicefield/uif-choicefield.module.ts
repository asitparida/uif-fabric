import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UifChoicefieldComponent } from './uif-choicefield.component';
import { UifChoicefieldItemComponent } from './uif-choicefield-item.component';

const COMPONENTS = [
	UifChoicefieldComponent,
	UifChoicefieldItemComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifChoicefieldModule {
}
