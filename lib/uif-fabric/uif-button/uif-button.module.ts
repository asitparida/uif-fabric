import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifButtonComponent } from './uif-button.component';
import { UifHeroButtonComponent } from './uif-hero-button.component';
import { UifCompoundButtonComponent } from './uif-compound-button.component';

const COMPONENTS = [
	UifButtonComponent,
	UifHeroButtonComponent,
	UifCompoundButtonComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifButtonModule {
}
