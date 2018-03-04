import { Component, Input } from '@angular/core';
import { PersonaCard } from './uif-persona-card.models';
import { UifPersonaViewType } from '../uif-persona/uif-persona.models';


@Component({
	selector: 'uif-persona-card',
	templateUrl: './uif-persona-card.component.html',
	styleUrls: [
		'./uif-persona-card.component.scss',
		'../uif-fabric.shared.scss'
	]
})
export class UifPersonaCardComponent {
	@Input() personaCard: PersonaCard;
	viewType: UifPersonaViewType = UifPersonaViewType.Large;
	orgViewType: UifPersonaViewType = UifPersonaViewType.Default;
}
