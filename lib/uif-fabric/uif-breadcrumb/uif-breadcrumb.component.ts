import { Component, Input, OnChanges } from '@angular/core';
import { IBreadcrumbItem } from './uif-breadcrumb.models';

@Component({
	selector: 'uif-breadcrumb',
	templateUrl: './uif-breadcrumb.component.html',
	styleUrls: [ './uif-breadcrumb.component.scss' ]
})
export class UifBreadcrumbComponent implements OnChanges {
	@Input() maxDisplayedItems = Number.MAX_SAFE_INTEGER;
	@Input() items: IBreadcrumbItem[] = [];
	breadcrumbItems: IBreadcrumbItem[] = [];
	breadcrumbItemsOverflowed: IBreadcrumbItem[] = [];
	showOverflow = false;
	showOverflowContextMenu = false;
	ngOnChanges() {
		this.showOverflow = false;
		this.showOverflowContextMenu = false;
		this.breadcrumbItems = this._breadcrumbItems();
		this.breadcrumbItemsOverflowed = this._breadcrumbItemsOverflowed();
	}
	private _breadcrumbItems(): any[] {
		let items = [].concat(this.items);
		this.maxDisplayedItems  = this.maxDisplayedItems ? this.maxDisplayedItems : Number.MAX_SAFE_INTEGER;
		this.showOverflow = false;
		if (this.maxDisplayedItems < items.length) {
			items = items.slice(items.length - this.maxDisplayedItems, items.length);
			this.showOverflow = true;
		}
		return items;
	}
	private _breadcrumbItemsOverflowed(): any[] {
		let items = [];
		this.maxDisplayedItems  = this.maxDisplayedItems ? this.maxDisplayedItems : Number.MAX_SAFE_INTEGER;
		if (this.maxDisplayedItems < this.items.length) {
			items = this.items.slice(0, this.items.length - this.maxDisplayedItems - 1);
		}
		return items;
	}
}
