import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UifCarouselComponent } from './uif-carousel.component';
import { UifCarouselItemComponent } from './uif-carousel-item.component';

const COMPONENTS = [
	UifCarouselComponent,
	UifCarouselItemComponent
];

@NgModule({
	declarations: COMPONENTS,
	imports: [
		CommonModule
	],
	exports: COMPONENTS,
	providers: []
})
export class UifCarouselModule {
}
