import { QueryList, AfterViewInit, OnChanges } from '@angular/core';
import { UifAccordionService } from './uif-accordion.service';
import { UifAccordionItemComponent } from './uif-accordion-item.component';
export declare class UifAccordionComponent implements AfterViewInit, OnChanges {
    private accordionService;
    oneItemOpenOnly: boolean | Boolean;
    accordionItems: QueryList<UifAccordionItemComponent>;
    initialized: boolean;
    constructor(accordionService: UifAccordionService);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
