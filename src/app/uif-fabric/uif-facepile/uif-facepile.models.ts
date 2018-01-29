import { UifCalloutDirectionalHint } from '../uif-callout/uif-callout.models';
export class PersonItem {
	imgSrc?: String;
	initials?: String;
	primary?: String;
	secondary?: String;
	tertiary?: String;
	optional?: String;
	showPresence?: boolean | Boolean = false;
}
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
	orgItems: PersonItem[] = [];
}
export class UifFacepileCard {
	isOpen: boolean | Boolean = false;
	personalDetails: PersonItem = {};
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

export function GetSampleFacePileItem(): UifFacepileCard {
	const card = new UifFacepileCard();
	card.personalDetails = {
		imgSrc: 'assets/asit_profile.png',
		initials: 'AL',
		primary: 'Anton Lafferty',
		secondary: 'Accountant',
		tertiary: 'In a meeting',
		optional: 'Available at 4.00 p.m.',
		showPresence: true
	};
	card.directionalHint = UifCalloutDirectionalHint.TopLeftEdge;
	card.mailDetails = [
		{
			email: 'alton.lafferty@outlook.com',
			label: 'alton.lafferty@outlook.com',
			href: 'mailto:alton.lafferty@outlook.com',
			meta: 'Personal'
		},
		{
			email: 'altonlafferty@contoso.com',
			label: 'alton.lafferty@contoso.com',
			href: 'mailto:altonlafferty@contoso.com',
			meta: 'Work'
		}
	];
	card.chatDetail = {
		label: 'Start Lync call',
		href: '#',
		meta: 'Lync'
	};
	card.phoneDetails = [
		{
			label: '555.206.2443',
			href: 'tel:555.206.2443',
			meta: 'Personal'
		},
		{
			label: '555.929.8240',
			href: 'tel:555.929.8240',
			meta: 'Work'
		}
	];
	card.videoDetail = {
		label: 'Start Skype call',
		href: '#',
		meta: 'Skype'
	};
	card.orgChartGroups = [
		{
			orgItems: [
				{ primary: 'Russel Miller', secondary: 'Sales', initials: 'RM' },
				{ primary: 'Douglas Fielder', secondary: 'Public Relations', initials: 'DF' }
			]
		},
		{
			title: 'Manager',
			orgItems: [
				{ primary: 'Grant Steel', secondary: 'Sales', initials: 'GS' },
			]
		},
		{
			title: 'Staff',
			orgItems: [
				{ primary: 'Harvey Wallin', secondary: 'Sales', initials: 'HW' },
				{ primary: 'Marcus Lauer', secondary: 'Sales', initials: 'ML' },
				{ primary: 'Marcel Groce', secondary: 'Delivery', initials: 'MG' },
				{ primary: 'Jessica Fischer', secondary: 'Marketing', initials: 'JF' },
			]
		}
	];
	return card;
}
