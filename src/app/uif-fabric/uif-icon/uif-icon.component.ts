import { Component, Input } from '@angular/core';

@Component({
	selector: 'uif-icon',
	templateUrl: './uif-icon.component.html'
})
export class UifIconComponent {
	@Input() name;
	@Input() size = 32;
	@Input() color = '#000000';
}
