import { EventEmitter, OnChanges } from '@angular/core';
import { UifPanelDirectionHint, UifPanelSizeHint } from './uif-panel.models';
export declare class UifPanelComponent implements OnChanges {
    isOpen: boolean | Boolean;
    isOpenChange: EventEmitter<boolean | Boolean>;
    hasOverlay: boolean | Boolean;
    isClosable: boolean | Boolean;
    directionalHint: UifPanelDirectionHint;
    size: UifPanelSizeHint;
    ngOnChanges(): void;
    closePane(): void;
}
