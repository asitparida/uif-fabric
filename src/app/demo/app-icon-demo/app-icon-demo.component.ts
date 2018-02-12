import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import * as Icons from '../../../../node_modules/office-ui-fabric-core/src/data/icons.json';

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
		{ key: '#000000', text: 'black' },
		{ key: '#333333', text: 'neutralPrimary' },
		{ key: '#005a9e', text: 'themeDark' },
		{ key: '#0078d7', text: 'themePrimary' },
		{ key: '#ffb900', text: 'yellow' },
		{ key: '#ff8c00', text: 'orange' },
		{ key: '#e81123', text: 'red' },
		{ key: '#5c2d91', text: 'purple' },
		{ key: '#0078d7', text: 'blue' },
		{ key: '#b4009e', text: 'magenta' },
		{ key: '#008272', text: 'teal' },
		{ key: '#107c10', text: 'green' },
	];
	size = 32;
	sizeHints = [
		{ key: 16, text: '16' },
		{ key: 24, text: '24' },
		{ key: 32, text: '32' },
		{ key: 48, text: '48' },
	];
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
