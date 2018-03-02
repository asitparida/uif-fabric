import { Component } from '@angular/core';
import { UifContextualMenuDirectionHint } from '../../../../lib/uif-fabric';

@Component({
	selector: 'app-contextualmenu-demo',
	templateUrl: './app-contextualmenu-demo.component.html',
})
export class ContextualMenuDemoComponent {
	openMenu1 = false;
	openMenu2 = false;
	openMenu3 = false;
	openMenu4 = false;
	openSubMenu4 = true;
	dirHintMenu2  = UifContextualMenuDirectionHint.Top;
	DirectionHints = UifContextualMenuDirectionHint;
	menuItems = [
		{ key: 'panda', text: 'Panda', selected: true },
		{ key: 'koala', text: 'Koala', selected: false },
		{ key: 'sloth', text: 'Sloth', selected: false }
	];
	menuItems2 = [
		{ key: 'Ginger', text: 'Ginger', selected: true },
		{ key: 'Pepper', text: 'Pepper', selected: false },
		{ key: 'Cardamom', text: 'Cardamom', selected: false }
	];
	menuItems3 = [
		{ key: 'panda', text: 'Panda', selected: true },
		{ key: 'koala', text: 'Koala', selected: false },
		{ key: 'sloth', text: 'Sloth', selected: false },
		{ key: 'bear', text: 'Bear', selected: false },
		{ key: 'boar', text: 'Boar', selected: false}
	];
	isMultiSelect = true;
}
