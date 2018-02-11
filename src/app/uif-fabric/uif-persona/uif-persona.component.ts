import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PersonaItem, UifPersonaAvailabilityType, UifPersonaViewType } from './uif-persona.models';

@Component({
	selector: 'uif-persona',
	templateUrl: './uif-persona.component.html',
	styleUrls: [ './uif-persona.component.scss' ]
})
export class UifPersonaComponent {
	@Input() persona: PersonaItem;
	@Input() viewType: UifPersonaViewType = UifPersonaViewType.Default;
	@Input() classes = '';
	@Input() showCancelAction = false;
	@Output() cancelInvoked = new EventEmitter<{}>();
	PersonaAvailabilityTypes = UifPersonaAvailabilityType;
	onCancel() {
		this.cancelInvoked.emit();
	}
}
