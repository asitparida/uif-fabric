import { Component, Input } from '@angular/core';
import { UifPersonaAvailabilityType } from '../../../../lib/uif-fabric/uif-fabric';

@Component({
	selector: 'app-orgchart-demo',
	templateUrl: './app-orgchart-demo.component.html'
})
export class OrgChartDemoComponent {
	orgChartGroups = [
		{
			orgItems: [
				{ primary: 'Russel Miller', secondary: 'Sales', initials: 'RM', availability: GetRandomAvailability() },
				{ primary: 'Douglas Fielder', secondary: 'Public Relations', initials: 'DF', availability: GetRandomAvailability() }
			]
		},
		{
			title: 'Manager',
			orgItems: [
				{ primary: 'Grant Steel', secondary: 'Sales', initials: 'GS', imgSrc: 'assets/profile.png' },
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
