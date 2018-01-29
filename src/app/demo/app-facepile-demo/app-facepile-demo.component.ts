import { Component, OnInit } from '@angular/core';
import { UifFacepileCard } from '../../uif-fabric/uif-facepile/uif-facepile.models';
import { UifCalloutDirectionalHint } from '../../uif-fabric/uif-callout/uif-callout.models';

@Component({
	selector: 'app-facepile-demo',
	templateUrl: './app-facepile-demo.component.html'
})
export class FacepileDemoComponent implements OnInit {
	personaCards: UifFacepileCard[] = [];
	ngOnInit () {
		this.personaCards.push(GetSampleFacePileItem());
		this.personaCards.push(GetSampleFacePileItem());
		this.personaCards.push(GetSampleFacePileItem());
		this.personaCards[this.personaCards.length - 1].personalDetails.imgSrc = null;
	}
}

function GetSampleFacePileItem(): UifFacepileCard {
	const card = new UifFacepileCard();
	card.personalDetails = {
		imgSrc: 'assets/profile.png',
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
