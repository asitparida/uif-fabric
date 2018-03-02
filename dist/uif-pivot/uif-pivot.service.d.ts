import { Observable } from 'rxjs/Observable';
export declare class UifPivotService {
    private pivotsCollection;
    private activePivotIndexSubject;
    private activePivotIndex;
    private activePivotId;
    activePivot$: Observable<string>;
    loadPivots(pivots: any): void;
    init(): void;
    initialize(): void;
    activatePivot(pivotIndex: number): number;
    getRandomInt(): number;
}
