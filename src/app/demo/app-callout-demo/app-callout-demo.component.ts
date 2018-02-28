import { Component, OnInit } from '@angular/core';
import { UifCalloutDirectionalHint, UifCalloutTriggerHint } from '../../uif-fabric/index';

@Component({
	selector: 'app-callout-demo',
	templateUrl: './app-callout-demo.component.html',
})
export class CalloutDemoComponent implements OnInit {
	showArrow = true;
	isCalloutOpen = false;
	UifCalloutDirectionalHints = UifCalloutDirectionalHint;
	UifCalloutTriggerHints = UifCalloutTriggerHint;
	directionHints = [];
	arrowOptions = [];
	triggerHints = [];
	directionHint: UifCalloutDirectionalHint = UifCalloutDirectionalHint.TopCenter;
	triggerHint: UifCalloutTriggerHint = UifCalloutTriggerHint.ClickInClickOut;
	appendToBody = true;
	gap: Number = 10;
	ngOnInit() {
		this.arrowOptions = [
			{ key: true, text: 'Yes'},
			{ key: false, text: 'No'}
		];
		this.directionHints = [
			{ key: UifCalloutDirectionalHint.TopLeftEdge, text: 'Top Left Edge' },
			{ key: UifCalloutDirectionalHint.TopCenter, text: 'Top Center' },
			{ key: UifCalloutDirectionalHint.TopRightEdge, text: 'Top Right Edge' },
			{ key: UifCalloutDirectionalHint.BottomLeftEdge, text: 'Bottom Left Edge' },
			{ key: UifCalloutDirectionalHint.BottomCenter, text: 'Bottom Center' },
			{ key: UifCalloutDirectionalHint.BottomRightEdge, text: 'Bottom Right Edge' },
			{ key: UifCalloutDirectionalHint.LeftTopEdge, text: 'Left Top Edge' },
			{ key: UifCalloutDirectionalHint.LeftCenter, text: 'Left Center' },
			{ key: UifCalloutDirectionalHint.LeftBottomEdge, text: 'Left Bottom Edge' },
			{ key: UifCalloutDirectionalHint.RightTopEdge, text: 'Right Top Edge' },
			{ key: UifCalloutDirectionalHint.RightCenter, text: 'Right Center' },
			{ key: UifCalloutDirectionalHint.RightBottomEdge, text: 'Right Bottom Edge' },
		];
		this.triggerHints = [
			{ key: UifCalloutTriggerHint.ClickInClickOut, text: 'ClickInClickOut' },
			// { key: UifCalloutTriggerHint.FocusInBlurOut, text: 'FocusInBlurOut' },
			{ key: UifCalloutTriggerHint.HoverInBlurOut, text: 'HoverInBlurOut' }
		];
	}
	onHintSelected(data) {
		console.log('onHintSelected', data);
	}
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
