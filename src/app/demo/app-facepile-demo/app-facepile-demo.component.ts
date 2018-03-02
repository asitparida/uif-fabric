import { Component, OnInit } from '@angular/core';
import { UifFacepileCard, PersonaCard, UifPersonaAvailabilityType, UifCalloutDirectionalHint } from '../../../../lib/uif-fabric/uif-fabric';

@Component({
	selector: 'app-facepile-demo',
	templateUrl: './app-facepile-demo.component.html'
})
export class FacepileDemoComponent implements OnInit {
	facepileCards: UifFacepileCard[] = [];
	ngOnInit () {
		for (let i = 0; i < 8; i++) {
			const card = new UifFacepileCard();
			card.personaCard = GetSampleFacePileItem();
			this.facepileCards.push(card);
		}
		this.facepileCards[this.facepileCards.length - 1].personaCard.personalDetails.imgSrc = null;
	}
	onFacepileAddClick() {
		alert('facepile add clicked');
	}
	onFacepileOverflowClick() {
		alert('facepile overflow clicked');
	}
}

function GetSampleFacePileItem(): PersonaCard {
	const card = new PersonaCard();
	card.personalDetails = {
		imgSrc: 'assets/profile.png',
		initials: 'AL',
		primary: 'Anton Lafferty',
		secondary: 'Accountant',
		tertiary: 'In a meeting',
		optional: 'Available at 4.00 p.m.',
		availability: UifPersonaAvailabilityType.Available
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
				{ primary: 'Russel Miller', secondary: 'Sales', initials: 'RM', availability: GetRandomAvailability() },
				{ primary: 'Douglas Fielder', secondary: 'Public Relations', initials: 'DF', availability: GetRandomAvailability() }
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
				{ primary: 'Harvey Wallin', secondary: 'Sales', initials: 'HW', availability: GetRandomAvailability() },
				{ primary: 'Marcus Lauer', secondary: 'Sales', initials: 'ML', availability: GetRandomAvailability() },
				{ primary: 'Marcel Groce', secondary: 'Delivery', initials: 'MG', availability: GetRandomAvailability() },
				{ primary: 'Jessica Fischer', secondary: 'Marketing', initials: 'JF', availability: GetRandomAvailability() },
			]
		}
	];
	return card;
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
