import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import * as Icons from '../../../../node_modules/office-ui-fabric-core/src/data/icons.json';
import { UifIconFlip, UifIconBadge, UifIconDir } from '../../uif-fabric/uif-icon/uif-icon.models';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
	transform(value: Array<any>, token: string): Array<any> {
		const result = value.filter( x => x.name.toLowerCase().indexOf(token.toLowerCase()) !== -1);
		return result;
	}
}

@Component({
	selector: 'app-icon-demo',
	templateUrl: './app-icon-demo.component.html'
})
export class IconDemoComponent implements OnInit {
	_ORIGINAL_ICONS = Icons;
	originalLength = 0;
	icons = [];
	filters = [
		{ key: 'Fill', active: false },
		{ key: 'Logo', active: false },
		{ key: 'Solid', active: false },
		{ key: 'Emoji', active: false }
	];
	searchToken = '';
	noOfIconsToShow = 100;
	showIconsSizerBtn = true;
	color = '#000000';
	colorHints = [
		{ key: '#000000', text: 'Black' },
		{ key: '#333333', text: 'Neutral Primary' },
		{ key: '#005a9e', text: 'Theme Dark' },
		{ key: '#0078d7', text: 'Theme Primary' },
		{ key: '#ffb900', text: 'Yellow' },
		{ key: '#ff8c00', text: 'Orange' },
		{ key: '#e81123', text: 'Red' },
		{ key: '#5c2d91', text: 'Purple' },
		{ key: '#0078d7', text: 'Blue' },
		{ key: '#b4009e', text: 'Magenta' },
		{ key: '#008272', text: 'Teal' },
		{ key: '#107c10', text: 'Green' },
	];
	size = 32;
	sizeHints = [
		{ key: 16, text: '16' },
		{ key: 24, text: '24' },
		{ key: 32, text: '32' },
		{ key: 48, text: '48' },
	];
	UifIconFlips = UifIconFlip;
	flip = UifIconFlip.None;
	flipHints = [
		{ key: UifIconFlip.None, text: 'None' },
		{ key: UifIconFlip.Horizontal, text: 'Horizontal' },
		{ key: UifIconFlip.Vertical, text: 'Vertical' }
	];
	UifIconBadges = UifIconBadge;
	badge = UifIconBadge.None;
	badgeHints = [
		{ key: UifIconBadge.None, text: 'None' },
		{ key: UifIconBadge.AlertBadge, text: 'Alert Badge' },
		{ key: UifIconBadge.SuccessBadge, text: 'Success Badge' },
		{ key: UifIconBadge.WarningBadge, text: 'Warning Badge' }
	];
	UifIconDirs = UifIconDir;
	dir = UifIconDir.Up;
	dirHints = [
		{ key: UifIconDir.Up, text: 'Up' },
		{ key: UifIconDir.Right, text: 'Right' },
		{ key: UifIconDir.Down, text: 'Down' },
		{ key: UifIconDir.Left, text: 'Left' }
	];
	constructor() {
		const icons = [].concat(this._ORIGINAL_ICONS);
		icons.forEach((icon: any) => {
			icon.code = `&#x${icon.unicode};`;
		});
	}
	applyFilters() {
		let icons = [].concat(this._ORIGINAL_ICONS);
		const filterApplied = this.filters.reduce((prev, curr) => prev || curr.active, false);
		if (filterApplied) {
			const temp = [];
			icons.forEach((icon: any) => {
				let exists = true;
				for (let i = 0; i < this.filters.length; i++) {
					if (this.filters[i].active) {
						exists = exists && icon.name.toLowerCase().indexOf(this.filters[i].key.toLowerCase()) !== -1;
					}
				}
				if (exists) {
					temp.push(icon);
				}
			});
			icons = temp;
		}
		this.icons = icons;
		this.checkForSize();
	}
	toggleSize() {
		if (this.noOfIconsToShow !== 100) {
			this.noOfIconsToShow = 100;
		} else {
			this.noOfIconsToShow = this.originalLength;
		}
	}
	checkForSize() {
		if (this.icons.length < 100) {
			this.showIconsSizerBtn = false;
			this.noOfIconsToShow = 100;
		} else {
			this.showIconsSizerBtn = true;
		}
	}
	ngOnInit() {
		this.icons = [].concat(this._ORIGINAL_ICONS);
		this.originalLength = this.icons.length;
		this.checkForSize();
	}
}
