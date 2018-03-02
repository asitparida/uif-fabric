import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
