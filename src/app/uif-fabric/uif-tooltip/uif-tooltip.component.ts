import { Component, Input } from '@angular/core';
import { UifCalloutTriggerHint, UifCalloutDirectionalHint } from '../index';

@Component({
	selector: '[uifTooltip]',
	templateUrl: './uif-tooltip.component.html',
	styleUrls: ['./uif-tooltip.component.scss']
})
export class UifTooltipComponent {
	// tslint:disable: no-input-rename
	@Input('uifTooltip') tooltipMsg;
	showClose = false;
	isTooltip = true;
	calloutTriggerHint = UifCalloutTriggerHint.HoverInBlurOut;
	directionHint = UifCalloutDirectionalHint.TopCenter;
	gap = 5;
	showArrow = true;
	// tslint:enable: no-input-rename
}
