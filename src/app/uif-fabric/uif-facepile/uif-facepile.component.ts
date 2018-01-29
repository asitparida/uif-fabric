import { Component, OnInit, Input } from '@angular/core';
import { UifCalloutDirectionalHint } from '../uif-callout/uif-callout.models';
import { UifFacepileCard, GetSampleFacePileItem } from './uif-facepile.models';

@Component({
	selector: 'uif-facepile',
	templateUrl: './uif-facepile.component.html',
	styleUrls: [ 'uif-facepile.component.scss' ]
})
export class UifFacepileComponent {
	@Input() personaCards: UifFacepileCard[] = [];
	showHeader =  false;
	showArrow = false;
	showActions = false;
	contentClasses = 'facepile-content';
	calloutClasses = 'facepile-callout';
	toggleFacePiles(card: UifFacepileCard) {
		this.personaCards.forEach((item: UifFacepileCard) => {
			if (item._uid !== card._uid) {
				item.isOpen = false;
			}
		});
	}
}
