import { Component, OnInit } from '@angular/core';
import { UifCalloutDirectionalHint } from '../../uif-fabric/uif-callout/uif-callout.models';
import { UifCalloutContentComponent } from '../../uif-fabric/uif-callout/uif-callout-subcomponents.component';

@Component({
	selector: 'app-callout-demo',
	templateUrl: './app-callout-demo.component.html',
})
export class CalloutDemoComponent implements OnInit {
	showArrow = false;
	UifCalloutDirectionalHints = UifCalloutDirectionalHint;
	hints = [];
	directionHint: UifCalloutDirectionalHint = UifCalloutDirectionalHint.TopCenter;
	ngOnInit() {
		this.hints = [
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
	}
	onHintSelected(data) {
		console.log('onHintSelected', data);
	}
	showCallout() {
		console.log('showCallout');
	}
}
