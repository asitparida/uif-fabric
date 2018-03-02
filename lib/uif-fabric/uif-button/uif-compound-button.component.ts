import { Component, Input } from '@angular/core';

@Component({
	selector: 'uif-compound-button',
	template: `
	<button class="ms-Button ms-Button--compound" [class.ms-Button--compoundPrimary]="primary" [disabled]="disabled">
		<span class="ms-Button-label"><ng-content></ng-content></span>
		<span class="ms-Button-description">{{description}}</span>
	</button>
	`,
	styleUrls: [
		'./uif-button.component.scss'
	]
})
export class UifCompoundButtonComponent {
	@Input() primary = false;
	@Input() description = '';
	@Input() disabled = false;
}
