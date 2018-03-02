import { EventEmitter } from '@angular/core';
import { UifModalSize } from './uif-modal.models';
export declare class UifModalComponent {
    isModal: boolean;
    isLargeHeader: boolean | Boolean;
    isOpen: boolean | Boolean;
    isOpenChange: EventEmitter<boolean | Boolean>;
    isBlocking: boolean | Boolean;
    isCloseable: boolean | Boolean;
    size: UifModalSize;
    uifModalHeader: any;
    uifModalContent: any;
    uifModalFooter: any;
    onOpenChange($event: any): void;
}
