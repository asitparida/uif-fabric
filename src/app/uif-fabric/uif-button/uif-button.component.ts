import { Component, Input } from '@angular/core';

@Component({
	selector: 'uif-button',
	template: `
	<button class="ms-Button" [class.ms-Button--primary]="primary" [class.has-icon]="icon" [disabled]="disabled" [class.is-outline]="outline">
		<span class="ms-Button-icon" [hidden]="!icon">
			<i class="ms-Icon" [ngClass]="iconName"></i>
		</span>
    	<span class="ms-Button-label"><ng-content></ng-content></span>
	</button>
	`,
	styleUrls: [
		'./uif-button.component.scss'
	]
})
export class UifButtonComponent {
	@Input() primary = false;
	@Input() icon = null;
	@Input() disabled = false;
	@Input() outline = false;
	get iconName() {
		return this.icon ? 'ms-Icon--' + this.icon : '';
	}
}
