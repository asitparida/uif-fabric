import { UifCalloutDirectionalHint } from '../uif-callout/uif-callout.models';
import { PersonaItem } from '../uif-persona/uif-persona.models';
export class PersonMailItem {
	email?;
	href?;
	meta?;
	label?;
}
export class PersonChatItem {
	email?;
	href?;
	meta?;
	label?;
}
export class PersonPhoneItem {
	href?;
	meta?;
	label?;
}
export class OrgChartGroup {
	title?;
	orgItems: PersonaItem[] = [];
}
export class UifFacepileCard {
	isOpen: boolean | Boolean = false;
	personalDetails: PersonaItem = {};
	directionalHint: UifCalloutDirectionalHint = UifCalloutDirectionalHint.TopLeftEdge;
	isChatPaneActive: boolean | Boolean = true;
	isMailPaneActive: boolean | Boolean = false;
	isVideoPaneActive: boolean | Boolean = false;
	isPhonePaneActive: boolean | Boolean = false;
	isOrgPaneActive: boolean | Boolean = false;
	isPhonePaneCollapsed: boolean | Boolean = true;
	mailDetails: PersonMailItem[] = [];
	chatDetail: PersonChatItem = {};
	phoneDetails: PersonPhoneItem[] = [];
	videoDetail: PersonChatItem = {};
	orgChartGroups: OrgChartGroup[] = [];
	_uid = Math.floor(Math.random() * 10000) + '_' + Math.floor(Math.random() * 10000);
	activateChatPane() {
		this.isChatPaneActive = true;
		this.isMailPaneActive = false;
		this.isVideoPaneActive = false;
		this.isPhonePaneActive = false;
		this.isOrgPaneActive = false;
	}
	activatePhonePane() {
		this.isChatPaneActive = false;
		this.isMailPaneActive = false;
		this.isVideoPaneActive = false;
		this.isPhonePaneActive = true;
		this.isOrgPaneActive = false;
	}
	activateVideoPane() {
		this.isChatPaneActive = false;
		this.isMailPaneActive = false;
		this.isVideoPaneActive = true;
		this.isPhonePaneActive = false;
		this.isOrgPaneActive = false;
	}
	activatMailPane() {
		this.isChatPaneActive = false;
		this.isMailPaneActive = true;
		this.isVideoPaneActive = false;
		this.isPhonePaneActive = false;
		this.isOrgPaneActive = false;
	}
	activateOrgPane() {
		this.isChatPaneActive = false;
		this.isMailPaneActive = false;
		this.isVideoPaneActive = false;
		this.isPhonePaneActive = false;
		this.isOrgPaneActive = true;
	}
}
