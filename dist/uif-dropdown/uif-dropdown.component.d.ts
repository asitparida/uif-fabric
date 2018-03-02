import { AfterContentInit, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { UifDropdownOptionComponent, UifDropdownItemService } from './uif-dropdown-subcomponents.component';
import { IUifDropdownItem } from './uif-dropdown.models';
import 'rxjs/add/observable/fromEvent';
export declare class UifDropdownComponent implements AfterContentInit, OnInit, OnDestroy {
    private dropdownItemService;
    isOpen: boolean | Boolean;
    isOpenChange: EventEmitter<boolean | Boolean>;
    title: string | String;
    isMultiSelectable: boolean | Boolean;
    options: IUifDropdownItem[];
    showSelectedText: boolean | Boolean;
    isDisabled: boolean | Boolean;
    customOptions: UifDropdownOptionComponent[];
    showNative: boolean;
    showCustomOptions: boolean;
    private onDocumnetKeyUpListener;
    constructor(dropdownItemService: UifDropdownItemService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    toggleDropdown(): void;
    toggleItemSelection(item: IUifDropdownItem): void;
    getCurrentSelected(): string;
    clearDocumentListener(): void;
    addDocumentListener(): void;
}
