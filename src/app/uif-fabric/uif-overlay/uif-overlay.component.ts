import { Component, Input } from '@angular/core';

@Component({
	selector: 'uif-overlay',
	templateUrl: './uif-overlay.component.html',
	styleUrls: ['./uif-overlay.component.scss']
})
export class UifOverlayComponent {
	@Input() isOpen: boolean | Boolean = false;
	@Input() isDark: boolean | Boolean = true;
}
