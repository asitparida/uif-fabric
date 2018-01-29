import { Component, OnInit, Input } from '@angular/core';
import { UifCalloutDirectionalHint } from '../uif-callout/uif-callout.models';
import { PersonaCard } from '../uif-persona-card/uif-persona-card.models';
import { UifFacepileCard } from './uif-facepile.models';

@Component({
	selector: 'uif-facepile',
	templateUrl: './uif-facepile.component.html',
	styleUrls: [ 'uif-facepile.component.scss' ]
})
export class UifFacepileComponent {
	@Input() facepileCards: UifFacepileCard[] = [];
	showHeader =  false;
	showArrow = false;
	showActions = false;
	contentClasses = 'facepile-content';
	calloutClasses = 'facepile-callout';
	toggleFacePiles(card: UifFacepileCard) {
		this.facepileCards.forEach((item: UifFacepileCard) => {
			if (item._uid !== card._uid) {
				item.isOpen = false;
			}
		});
	}
}
