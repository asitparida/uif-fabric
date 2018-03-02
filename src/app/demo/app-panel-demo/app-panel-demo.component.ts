import { Component, Input } from '@angular/core';
import { UifPanelDirectionHint, UifPanelSizeHint } from '../../../../lib/uif-fabric/index';

@Component({
	selector: 'app-panel-demo',
	templateUrl: './app-panel-demo.component.html'
})
export class PanelDemoComponent {
	isPanelOpen = false;
	hasOverlay = true;
	isPanelClosable = true;
	hasOverlayHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	panelDirectionalHint = UifPanelDirectionHint.Right;
	panelSize = UifPanelSizeHint.Medium;
	directionalHints = [
		{ key: UifPanelDirectionHint.Right, text: 'Right' },
		{ key: UifPanelDirectionHint.Left, text: 'Left' }
	];
	sizeHints = [
		{ key: UifPanelSizeHint.Default, text: 'Default' },
		{ key: UifPanelSizeHint.Medium, text: 'Medium' },
		{ key: UifPanelSizeHint.Large, text: 'Large' },
		{ key: UifPanelSizeHint.ExtraLarge, text: 'Extra Large' },
		{ key: UifPanelSizeHint.ExtraExtraLarge, text: 'Extra Extra Large' }
	];
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
