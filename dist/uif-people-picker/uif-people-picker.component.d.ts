import { EventEmitter, OnChanges } from '@angular/core';
import { PeoplePickerGroup } from './uif-people-picker.models';
import { UifPersonaViewType, PersonaItem } from '../uif-persona/uif-persona.models';
export declare class UifPeoplePickerComponent implements OnChanges {
    pickerGroups: PeoplePickerGroup[];
    pickerGroupsChange: EventEmitter<PeoplePickerGroup[]>;
    selectedPeople: PersonaItem[];
    selectedPeopleChange: EventEmitter<PersonaItem[]>;
    searchToken: String | string;
    searchTokenChange: EventEmitter<string | String>;
    viewTypeInList: UifPersonaViewType;
    closeOnSelection: boolean | Boolean;
    allowRemovalOfPersona: boolean | Boolean;
    personaRemove: EventEmitter<PersonaItem>;
    isResultPaneOpen: boolean | Boolean;
    showCancelAction: boolean;
    viewTypeInSelection: UifPersonaViewType;
    ngOnChanges(): void;
    onInputFocussed($event: any): void;
    onInputKeyUp($event: KeyboardEvent): void;
    onSearchTokenChanged($event: any): void;
    selectPersona(groupIndex: number, itemIndex: number): void;
    deselectPersona(persona: PersonaItem): void;
    removePesona(groupIndex: number, itemIndex: number): void;
}
