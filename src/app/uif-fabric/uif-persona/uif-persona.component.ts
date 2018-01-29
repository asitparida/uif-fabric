import { Component, Input } from '@angular/core';
import { PersonaItem, UifPersonaAvailabilityType, UifPersonaViewType } from './uif-persona.models';

@Component({
	selector: 'uif-persona',
	templateUrl: './uif-persona.component.html',
	styleUrls: [ './uif-persona.component.scss' ]
})
export class UifPersonaComponent {
	@Input() persona: PersonaItem;
	@Input() viewType: UifPersonaViewType = UifPersonaViewType.Default;
	PersonaAvailabilityTypes = UifPersonaAvailabilityType;
}
