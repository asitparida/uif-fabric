import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UifChoicefieldService {
	selectedValue = new Subject<any>();
	selectedValueAsObservable = this.selectedValue.asObservable();
}
