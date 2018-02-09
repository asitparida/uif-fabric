import { Component, Input } from '@angular/core';
import { UifMessageType } from './uif-message-bar.models';

@Component({
	selector: 'uif-message-bar',
	templateUrl: './uif-message-bar.component.html',
	styleUrls: [ './uif-message-bar.component.scss' ]
})
export class UifMessageBarComponent {
	@Input() type: UifMessageType = UifMessageType.Default;
	UifMessageTypes = UifMessageType;
}

