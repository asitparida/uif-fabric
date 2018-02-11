import { Component } from '@angular/core';
import { UifMessageType } from '../../uif-fabric/uif-message-bar/uif-message-bar.models';

@Component({
	selector: 'app-messagebar-demo',
	templateUrl: './app-messagebar-demo.component.html'
})
export class MessageBarDemoComponent {
	messageBarTypeDefault = UifMessageType.Default;
	messageBarTypeSuccess = UifMessageType.Success;
	messageBarTypeError = UifMessageType.Error;
	messageBarTypeBlocked = UifMessageType.Blocked;
	messageBarTypeWarning = UifMessageType.Warning;
	messageBarTypeSevereWarning = UifMessageType.SevereWarning;
}

