import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UifCalloutDirectionalHint } from '../uif-callout/uif-callout.models';
import { PersonaCard } from '../uif-persona-card/uif-persona-card.models';
import { UifFacepileCard } from './uif-facepile.models';

@Component({
	selector: 'uif-facepile',
	templateUrl: './uif-facepile.component.html',
	styleUrls: [ 'uif-facepile.component.scss' ]
})
export class UifFacepileComponent {
	@Input() showFacePileAddButton = true;
	@Input() facepileCards: UifFacepileCard[] = [];
	@Input() overflowLimit = 5;
	@Output() facepileAddClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
	@Output() facepileOverflowClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
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
	onFacepileAddClick($event: MouseEvent) {
		console.log(this.facepileCards);
		this.facepileAddClick.emit($event);
	}
	onFacepileOverflowClick($event: MouseEvent) {
		this.facepileOverflowClick.emit($event);
	}
}
