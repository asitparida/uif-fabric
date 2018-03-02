import { UifCalloutDirectionalHint } from '../uif-callout/uif-callout.models';
import { PersonaItem } from '../uif-persona/uif-persona.models';
import { PersonaCard } from '../uif-persona-card/uif-persona-card.models';
export class UifFacepileCard {
	isOpen?: boolean | Boolean = false;
	personaCard: PersonaCard;
	_uid?: string = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
	directionalHint?: UifCalloutDirectionalHint = UifCalloutDirectionalHint.TopLeftEdge;
}
