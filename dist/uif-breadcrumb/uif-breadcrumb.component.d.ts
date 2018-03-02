import { OnChanges } from '@angular/core';
import { IBreadcrumbItem } from './uif-breadcrumb.models';
export declare class UifBreadcrumbComponent implements OnChanges {
    maxDisplayedItems: number;
    items: IBreadcrumbItem[];
    breadcrumbItems: IBreadcrumbItem[];
    breadcrumbItemsOverflowed: IBreadcrumbItem[];
    showOverflow: boolean;
    showOverflowContextMenu: boolean;
    ngOnChanges(): void;
    private _breadcrumbItems();
    private _breadcrumbItemsOverflowed();
}
