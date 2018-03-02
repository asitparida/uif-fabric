import { ElementRef, OnChanges, AfterContentInit } from '@angular/core';
import { UifContextualMenuComponent } from './uif-contextual-menu.component';
import { Observable } from 'rxjs/Observable';
export declare class UifContextMenuService {
    private multiSelected;
    onMultiSelectionCheck: Observable<string>;
    checkForMultiSelection(currentId: string): void;
}
export declare class UifContextualMenuTriggerDirective {
    elRef: ElementRef;
    constructor(elRef: ElementRef);
}
export declare class UifContextualMenuItemComponent implements OnChanges, AfterContentInit {
    private contextMenuService;
    tabIndex: number;
    selected: boolean | Boolean;
    disabled: boolean | Boolean;
    hasSubMenu: boolean | Boolean;
    subMenu: UifContextualMenuComponent;
    subMenuOpen: boolean | Boolean;
    id: string;
    constructor(contextMenuService: UifContextMenuService);
    onSelectionChange(): void;
    ngOnChanges(): void;
    ngAfterContentInit(): void;
    closeSubMenu(): void;
}
export declare class UifContextualMenuItemDividerComponent {
}
export declare class UifContextualMenuItemHeaderComponent {
}
