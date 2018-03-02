import { Component, Input, EventEmitter, Output, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'uif-chips',
	templateUrl: './uif-chips.component.html',
	styleUrls: ['./uif-chips.component.scss']
})
export class UifChipsComponent implements AfterViewInit, OnDestroy {
	@Input() tags: Array<string> = [];
	@Output() tagsChange = new EventEmitter<Array<string>>();
	@Input() removeItem = false;
	@ViewChild('tagInput') tagInput;
	newTag = '';
	onKeyupListener: Subscription = null;
	activeIndex = null;
	ngOnDestroy() {
		this.clearListener();
	}
	ngAfterViewInit() {
		this.clearListener();
		this.onKeyupListener = Observable.fromEvent(this.tagInput.nativeElement, 'keyup')
			.subscribe(($event: KeyboardEvent) => {
				this.activeIndex = null;
				if ($event.key === 'Enter') {
					this.addNewTag();
				} else if ($event.key === 'Backspace') {
					this.removeLastTag();
				}
			});
	}
	clearListener() {
		if (this.onKeyupListener) {
			this.onKeyupListener.unsubscribe();
			this.onKeyupListener = null;
		}
	}
	addNewTag() {
		if (this.newTag.trim() !== '') {
			this.tags.push(this.newTag);
			this.tagsChange.emit(this.tags);
			this.newTag = '';
		}
	}
	removeLastTag() {
		if (this.newTag === '') {
			if (this.tags.length > 0) {
				this.tags.splice(this.tags.length - 1, 1);
				this.tagsChange.emit(this.tags);
			}
		}
	}
	removeTag(index) {
		this.tags.splice(index, 1);
		this.tagsChange.emit(this.tags);
		if (this.activeIndex) {
			this.activeIndex = null;
			if (this.tags.length > 0) {
				this.activeIndex = this.tags.length - 1;
			}
		}
	}
	resetActiveStatus() {
		this.activeIndex = null;
	}
}
