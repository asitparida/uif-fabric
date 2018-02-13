import { Component, Input } from '@angular/core';
import { UifIconFlip, UifIconBadge, UifIconDir } from './uif-icon.models';

@Component({
	selector: 'uif-icon',
	templateUrl: './uif-icon.component.html',
	styleUrls: [ './uif-icon.component.scss' ]
})
export class UifIconComponent {
	@Input() name;
	@Input() size = 32;
	@Input() color = '#000000';
	@Input() flip: UifIconFlip = UifIconFlip.None;
	@Input() badge: UifIconBadge = UifIconBadge.None;
	@Input() dir: UifIconDir = UifIconDir.Up;
}
