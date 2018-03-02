import { EventEmitter } from '@angular/core';
import { PersonaItem, UifPersonaAvailabilityType, UifPersonaViewType } from './uif-persona.models';
export declare class UifPersonaComponent {
    persona: PersonaItem;
    viewType: UifPersonaViewType;
    classes: string;
    showCancelAction: boolean;
    cancelInvoked: EventEmitter<{}>;
    PersonaAvailabilityTypes: typeof UifPersonaAvailabilityType;
    onCancel($event: any): void;
}
