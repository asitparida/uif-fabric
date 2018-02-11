import { Component } from '@angular/core';
import { PeoplePickerGroup } from '../../uif-fabric/uif-people-picker/uif-people-picker.models';
import { UifPersonaAvailabilityType, PersonaItem, UifPersonaViewType } from '../../uif-fabric/uif-persona/uif-persona.models';

@Component({
	selector: 'app-peoplepicker-demo',
	templateUrl: './app-peoplepicker-demo.component.html'
})
export class PeoplePickerDemoComponent {
	token;
	pickerGroups: PeoplePickerGroup[] = [
		{
			title: 'Contacts',
			poeplePickerItems: [
				{ primary: 'Russel Miller', secondary: 'Sales', initials: 'RM', availability: GetRandomAvailability() },
				{ primary: 'Douglas Fielder', secondary: 'Public Relations', initials: 'DF', availability: GetRandomAvailability() },
				{ primary: 'Grant Steel', secondary: 'Sales', initials: 'GS', imgSrc: 'assets/profile.png' },
			]
		},
		{
			title: 'Staff',
			poeplePickerItems: [
				{ primary: 'Harvey Wallin', secondary: 'Sales', initials: 'HW', availability: GetRandomAvailability() },
				{ primary: 'Marcus Lauer', secondary: 'Sales', initials: 'ML', availability: GetRandomAvailability() },
				{ primary: 'Marcel Groce', secondary: 'Delivery', initials: 'MG', availability: GetRandomAvailability() },
				{ primary: 'Jessica Fischer', secondary: 'Marketing', initials: 'JF', availability: GetRandomAvailability() },
			]
		}
	];
	selectedPeople = [
		this.pickerGroups[0].poeplePickerItems[2],
		this.pickerGroups[1].poeplePickerItems[0]
	];
	allowRemovalOfPersona = true;
	closeOnSelection = true;
	viewTypeInList = UifPersonaViewType.Default;
	viewTypeHints = [
		{ key: UifPersonaViewType.Default, text: 'Default' },
		{ key: UifPersonaViewType.Tiny, text: 'Tiny' },
		{ key: UifPersonaViewType.ExtraSmall, text: 'Extra Small' },
		{ key: UifPersonaViewType.Small, text: 'Small' }
	];
	booleanHints = [
		{ key: true, text: 'Yes'},
		{ key: false, text: 'No'}
	];
	onSearchTokenChanged($event: any) {
	}
	onPersonaRemoved(persona: PersonaItem) {
		console.log(persona);
		console.log(this.pickerGroups);
	}
	getSelectedJson() {
		return this.selectedPeople.map((option) => {
			return ` \n name: ${option.primary}, Org: ${option.secondary}`;
		});
	}
	getBoolean(val): boolean {
		if (typeof val === 'boolean') {
			return val;
		} else {
			return val === 'false' ? false : true;
		}
	}
}
function GetRandomAvailability(): UifPersonaAvailabilityType {
	const results = [
		UifPersonaAvailabilityType.Available,
		UifPersonaAvailabilityType.Away,
		UifPersonaAvailabilityType.Blocked,
		UifPersonaAvailabilityType.Busy,
		UifPersonaAvailabilityType.DND,
		UifPersonaAvailabilityType.Offline
	];
	return results[Math.floor(Math.random() * results.length)];
}

