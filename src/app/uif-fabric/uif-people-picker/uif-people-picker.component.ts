import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PeoplePickerGroup } from './uif-people-picker.models';
import { UifPersonaViewType, PersonaItem } from '../uif-persona/uif-persona.models';
import { UifPersonaComponent } from '../uif-persona/uif-persona.component';

@Component({
	selector: 'uif-people-picker',
	templateUrl: './uif-people-picker.component.html',
	styleUrls: ['./uif-people-picker.component.scss']
})
export class UifPeoplePickerComponent implements OnChanges {
	@Input() pickerGroups: PeoplePickerGroup[] = [
		new PeoplePickerGroup()
	];
	@Output() pickerGroupsChange = new EventEmitter<PeoplePickerGroup[]>();
	@Input() selectedPeople: PersonaItem[] = [];
	@Output() selectedPeopleChange = new EventEmitter<PersonaItem[]>();
	@Input() searchToken: String | string = '';
	@Output() searchTokenChange = new EventEmitter<String | string>();
	@Input() viewTypeInList: UifPersonaViewType = UifPersonaViewType.Default;
	@Input() closeOnSelection: boolean | Boolean = false;
	@Input() allowRemovalOfPersona: boolean | Boolean = false;
	@Output() personaRemove = new EventEmitter<PersonaItem>();
	isResultPaneOpen: boolean | Boolean = false;
	showCancelAction = true;
	viewTypeInSelection = UifPersonaViewType.ExtraSmall;
	ngOnChanges() {
		if (this.viewTypeInList) {
			if (this.viewTypeInList === UifPersonaViewType.Large || this.viewTypeInList === UifPersonaViewType.ExtraLarge) {
				this.viewTypeInList = UifPersonaViewType.Default;
			}
		}
	}
	onInputFocussed() {
		this.isResultPaneOpen = true;
	}
	onInputKeyUp($event: KeyboardEvent) {
		if ($event.keyCode === 27) {
			this.isResultPaneOpen = false;
		}
	}
	onSearchTokenChanged($event: any) {
		this.searchTokenChange.emit(this.searchToken);
		if (!this.isResultPaneOpen) {
			this.isResultPaneOpen = true;
		}
	}
	selectPersona(groupIndex: number, itemIndex: number) {
		if (this.pickerGroups.length > 0) {
			if (this.pickerGroups[groupIndex].poeplePickerItems && this.pickerGroups[groupIndex].poeplePickerItems.length > 0) {
				if (this.pickerGroups[groupIndex].poeplePickerItems[itemIndex]) {
					const personaItem = this.pickerGroups[groupIndex].poeplePickerItems[itemIndex];
						this.selectedPeople.push(personaItem);
						this.selectedPeopleChange.emit(this.selectedPeople);
						if (this.closeOnSelection) {
							this.isResultPaneOpen = false;
						}
				}
			}
		}
	}
	deselectPersona(persona: PersonaItem) {
		let found = false;
		const indexOf = this.selectedPeople.indexOf(persona);
		if (this.pickerGroups.length > 0) {
			this.pickerGroups.forEach((group: PeoplePickerGroup) => {
				if (group.poeplePickerItems.length > 0) {
					group.poeplePickerItems.forEach((item: PersonaItem) => {
						if (item === persona) {
							found = true;
						}
					});
				}
			});
		}
		if (found && indexOf !== null) {
			this.selectedPeople.splice(indexOf, 1);
			this.selectedPeopleChange.emit(this.selectedPeople);
		}
	}
	removePesona(groupIndex: number, itemIndex: number) {
		if (this.pickerGroups.length > 0) {
			if (this.pickerGroups[groupIndex].poeplePickerItems && this.pickerGroups[groupIndex].poeplePickerItems.length > 0) {
				if (this.pickerGroups[groupIndex].poeplePickerItems[itemIndex]) {
					const personaRemoved = this.pickerGroups[groupIndex].poeplePickerItems.splice(itemIndex, 1);
					this.pickerGroupsChange.emit(this.pickerGroups);
					this.personaRemove.emit(personaRemoved as PersonaItem);
				}
			}
		}
	}
}
