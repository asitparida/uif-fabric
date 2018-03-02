import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UifChoicefieldService {
	selectedValue = new Subject<any>();
	selectedValue$ = this.selectedValue.asObservable();
}
