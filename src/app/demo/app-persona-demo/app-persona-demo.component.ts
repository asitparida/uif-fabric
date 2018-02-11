import { Component } from '@angular/core';
import { UifPersonaAvailabilityType, UifPersonaViewType, PersonaItem } from '../../uif-fabric/uif-persona/uif-persona.models';

@Component({
	selector: 'app-persona-demo',
	templateUrl: './app-persona-demo.component.html'
})
export class PersonaDemoComponent {
	persona: PersonaItem = {
		imgSrc: 'assets/profile.png',
		initials: 'AL',
		primary: 'Anton Lafferty',
		secondary: 'Accountant',
		tertiary: 'In a meeting',
		optional: 'Available at 4.00 p.m.',
		availability: UifPersonaAvailabilityType.Available
	};
	persona2 = {
		imgSrc: null,
		initials: 'ML',
		primary: 'Marcus Lowe',
		secondary: 'Sales Lead',
		tertiary: 'In a meeting',
		optional: 'Available at 4.00 p.m.',
		availability: UifPersonaAvailabilityType.Available
	};
	availability = UifPersonaAvailabilityType.Available;
	availibityHints = [
		{ key: UifPersonaAvailabilityType.Available, text: 'Available' },
		{ key: UifPersonaAvailabilityType.Away, text: 'Away' },
		{ key: UifPersonaAvailabilityType.Blocked, text: 'Blocked' },
		{ key: UifPersonaAvailabilityType.Busy, text: 'Busy' },
		{ key: UifPersonaAvailabilityType.DND, text: 'DND' },
		{ key: UifPersonaAvailabilityType.Offline, text: 'Offline' }
	];
	viewType = UifPersonaViewType.Default;
	viewTypeHints = [
		{ key: UifPersonaViewType.Default, text: 'Default' },
		{ key: UifPersonaViewType.Tiny, text: 'Tiny' },
		{ key: UifPersonaViewType.ExtraSmall, text: 'Extra Small' },
		{ key: UifPersonaViewType.Small, text: 'Small' },
		{ key: UifPersonaViewType.Large, text: 'Large' },
		{ key: UifPersonaViewType.ExtraLarge, text: 'Extra Large' }
	];
	onAvailibilityChanged(data) {
		this.persona.availability = this.availability;
		this.persona2.availability = this.availability;
	}
}
