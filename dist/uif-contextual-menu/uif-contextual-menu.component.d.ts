import { EventEmitter, OnChanges, ElementRef, AfterContentInit, QueryList, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { UifContextualMenuDirectionHint } from './uif-contextual-menu.models';
import { UifContextualMenuItemComponent, UifContextMenuService } from './uif-contextual-menu-subcomponents.component';
import 'rxjs/add/observable/fromEvent';
export declare class UifContextualMenuComponent implements OnChanges, AfterContentInit, OnInit, OnDestroy {
    private elementRef;
    private contextMenuService;
    isOpen: boolean | Boolean;
    isOpenChange: EventEmitter<boolean | Boolean>;
    isMultiSelect: boolean | Boolean;
    directionHint: UifContextualMenuDirectionHint;
    UifContextualMenuDirectionHints: typeof UifContextualMenuDirectionHint;
    menuItems: QueryList<UifContextualMenuItemComponent>;
    isSubMenu: boolean;
    nativeMenuTrigger: any;
    nativeMenu: any;
    private onDocumnetKeyUpListener;
    constructor(elementRef: ElementRef, contextMenuService: UifContextMenuService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    clearDocumentListener(): void;
    addDocumentListener(): void;
}
