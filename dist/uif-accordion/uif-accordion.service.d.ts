import { QueryList } from '@angular/core';
import { UifAccordionItemComponent } from './uif-accordion-item.component';
export declare class UifAccordionService {
    oneItemOpenOnly: boolean;
    accordionItems: QueryList<UifAccordionItemComponent>;
    loadItems(items: QueryList<UifAccordionItemComponent>, oneItemOpenOnly: any): void;
    openItem(id: string): void;
}
