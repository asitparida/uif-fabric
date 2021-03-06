export enum UifPersonaViewType {
	Default = '',
	Tiny = 'ms-Persona--tiny',
	ExtraSmall = 'ms-Persona--xs',
	Small = 'ms-Persona--sm',
	Large = 'ms-Persona--lg',
	ExtraLarge = 'ms-Persona--xl'
}
export enum UifPersonaAvailabilityType {
	Available = 'ms-Persona--available',
	Away = 'ms-Persona--away',
	Blocked = 'ms-Persona--blocked',
	Busy = 'ms-Persona--busy',
	DND = 'ms-Persona--dnd',
	Offline = 'ms-Persona--offline',
	Facepile = 'ms-Persona--facepile'
}
export class PersonaItem {
	id?: String;
	imgSrc?: String;
	initials?: String;
	primary?: String;
	secondary?: String;
	tertiary?: String;
	optional?: String;
	availability?: UifPersonaAvailabilityType = UifPersonaAvailabilityType.Offline;
	constructor() {
		this.id =  Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
	}
}
