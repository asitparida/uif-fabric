import { EventEmitter, ElementRef } from '@angular/core';
import { UifAccordionService } from './uif-accordion.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
export declare class UifAccordionItemComponent implements OnChanges {
    private accordionService;
    disabled: boolean | Boolean;
    isOpen: boolean | Boolean;
    isOpenChange: EventEmitter<boolean | Boolean>;
    contentElement: ElementRef;
    contentHolderElement: ElementRef;
    isItemOpen: boolean;
    private initialized;
    private _id;
    constructor(accordionService: UifAccordionService);
    ngOnChanges(): void;
    toggleItemOpen(): void;
    emitOpenChange(): void;
    getId(): any;
    setId(val: any): void;
    openItemDrawer(): void;
    closeItemDrawer(): void;
}
