import { OnChanges, EventEmitter } from '@angular/core';
import { UifModalSize } from '../uif-modal/index';
export declare class UifDialogComponent implements OnChanges {
    isModal: boolean | Boolean;
    modalSize: UifModalSize;
    isOpen: boolean | Boolean;
    isOpenChange: EventEmitter<boolean | Boolean>;
    isBlocking: boolean | Boolean;
    isLargeHeader: boolean | Boolean;
    isCloseable: boolean | Boolean;
    uifDialogHeader: any;
    uifDialogContent: any;
    uifDialogFooter: any;
    originalOveflowStyle: any;
    originalOveflowStyleAvailable: boolean;
    ngOnChanges(): void;
    closeDialog(): void;
}
