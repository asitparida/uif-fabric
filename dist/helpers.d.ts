export declare function GetRandomInt(): number;
export declare function GetScrollParent(node: any): any;
export declare class EventSubscribers {
    private subscribers;
    pushSubscriber(item: any): void;
    clearSubscribers(id?: string): void;
    emptySubscribers(): void;
}
