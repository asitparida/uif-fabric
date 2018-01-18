import { Component, Input } from '@angular/core';

@Component({
	selector: 'uif-hero-button',
	template: `
	<button class="ms-Button ms-Button--hero" [class.has-icon]="icon" [disabled]="disabled" [hidden]="!icon">
		<span class="ms-Button-icon">
			<i class="ms-Icon" [ngClass]="iconName"></i>
		</span>
    	<span class="ms-Button-label"><ng-content></ng-content></span>
	</button>
	`,
	styleUrls: [
		'./uif-button.component.scss'
	]
})
export class UifHeroButtonComponent {
	@Input() primary = false;
	@Input() icon = null;
	@Input() disabled = false;
	get iconName() {
		return this.icon ? 'ms-Icon--' + this.icon : '';
	}
}
