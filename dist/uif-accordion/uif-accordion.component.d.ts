import { QueryList, AfterViewInit } from '@angular/core';
import { UifAccordionService } from './uif-accordion.service';
import { UifAccordionItemComponent } from './uif-accordion-item.component';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
export declare class UifAccordionComponent implements AfterViewInit, OnChanges {
    private accordionService;
    oneItemOpenOnly: boolean | Boolean;
    accordionItems: QueryList<UifAccordionItemComponent>;
    initialized: boolean;
    constructor(accordionService: UifAccordionService);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
