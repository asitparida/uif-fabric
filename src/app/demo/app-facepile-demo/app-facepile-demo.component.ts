import { Component, OnInit } from '@angular/core';
import { GetSampleFacePileItem, UifFacepileCard } from '../../uif-fabric/uif-facepile/uif-facepile.models';

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
