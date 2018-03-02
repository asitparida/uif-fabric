import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export declare class UifDropdownItemService {
    private dropdownItemToggled;
    onDropdownItemToggled$: Observable<any>;
    toggleDropdown(id: any): void;
}
export declare class UifDropdownOptionComponent {
    private dropdownItemService;
    selected: boolean | Boolean;
    text: string;
    selectedChange: EventEmitter<boolean | Boolean>;
    id: string;
    constructor(dropdownItemService: UifDropdownItemService);
    fireSelection(): void;
    toggleItemSelection(): void;
}
