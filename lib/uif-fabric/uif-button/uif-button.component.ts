import { Component, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

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
export class UifButtonComponent implements OnChanges {
	@Input() primary = false;
	@Input() icon = null;
	@Input() disabled = false;
	@Input() outline = false;
	constructor(private elRef: ElementRef) {}
	ngOnChanges(changes: SimpleChanges) {
		for (const prop in changes) {
			if (prop === 'disabled') {
				if (changes[prop]) {
					const change = changes[prop];
					if (change.currentValue) {
						if (this.elRef && this.elRef.nativeElement) {
							(this.elRef.nativeElement as HTMLElement).setAttribute('disabled', 'disabled');
						} else {
							(this.elRef.nativeElement as HTMLElement).removeAttribute('disabled');
						}
					}
				}
			}
		}
	}
	get iconName() {
		return this.icon ? 'ms-Icon--' + this.icon : '';
	}
}
