import { EventEmitter } from '@angular/core';
export declare class UifMessageBannerComponent {
    isOpen: boolean | Boolean;
    isOpenChange: EventEmitter<boolean | Boolean>;
    hasOverlay: boolean | Boolean;
    isClosable: boolean | Boolean;
    closePane(): void;
}
