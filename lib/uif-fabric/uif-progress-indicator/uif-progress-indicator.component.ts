import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'uif-progress-indicator',
	templateUrl: './uif-progress-indicator.component.html',
	styleUrls: ['./uif-progress-indicator.component.scss']
})
export class UifProgressIndicatorComponent {
	@Input() progress = 0;
	@Input() progressBarWidth = 'auto';
	@Input() indeterminate = false;
	@Input() name: String = null;
	@Input() description: String = null;
}
