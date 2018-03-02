import { UifCalloutDirectionalHint } from '../uif-callout/uif-callout.models';
import { PersonaItem } from '../uif-persona/uif-persona.models';
export declare class PersonMailItem {
    email?: any;
    href?: any;
    meta?: any;
    label?: any;
}
export declare class PersonChatItem {
    email?: any;
    href?: any;
    meta?: any;
    label?: any;
}
export declare class PersonPhoneItem {
    href?: any;
    meta?: any;
    label?: any;
}
export declare class OrgChartGroup {
    title?: any;
    orgItems: PersonaItem[];
}
export declare class PersonaCard {
    personalDetails: PersonaItem;
    directionalHint: UifCalloutDirectionalHint;
    isChatPaneActive: boolean | Boolean;
    isMailPaneActive: boolean | Boolean;
    isVideoPaneActive: boolean | Boolean;
    isPhonePaneActive: boolean | Boolean;
    isOrgPaneActive: boolean | Boolean;
    isPhonePaneCollapsed: boolean | Boolean;
    mailDetails: PersonMailItem[];
    chatDetail: PersonChatItem;
    phoneDetails: PersonPhoneItem[];
    videoDetail: PersonChatItem;
    orgChartGroups: OrgChartGroup[];
    activateChatPane(): void;
    activatePhonePane(): void;
    activateVideoPane(): void;
    activatMailPane(): void;
    activateOrgPane(): void;
}
