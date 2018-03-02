import { Component, Input, Output, EventEmitter, ContentChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UifPivotService } from './uif-pivot.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'pivot-title, [pivotTitle]',
	template: '<ng-content></ng-content>'
})
export class UifPivotTitleComponent {
}

@Component({
	selector: 'pivot-content, [pivotContent]',
	template: '<ng-content></ng-content>'
})
export class UifPivotContentComponent {
}


@Component({
	selector: 'uif-pivot-item',
	templateUrl: './uif-pivot-item.component.html',
	styleUrls: ['./uif-pivot.component.scss']
})
export class UifPivotItemComponent implements AfterViewInit {
	@ContentChild(UifPivotTitleComponent, { read: ElementRef }) title: ElementRef;
	@Input() active: boolean | Boolean = false;
	@Output() activeChange = new EventEmitter<boolean | Boolean>();
	@Output() pivotLoaded: EventEmitter<{}> = new EventEmitter<{}>();
	private id: string = null;
	constructor(
		private sanitizer: DomSanitizer,
		private pivotService: UifPivotService
	) {}
	ngAfterViewInit() {
		this.pivotService.activePivot$.subscribe((id: string) => {
			this.activeChange.emit(this.active);
			if (this.getId() === id) {
				this.pivotLoaded.emit();
			}
		});
	}
	getId() {
		return this.id;
	}
	setId(id) {
		this.id = id;
	}
	getTitle() {
		let result = '';
		if (this.title && this.title.nativeElement) {
			result = (this.title.nativeElement as Element).innerHTML;
		}
		return this.sanitizer.bypassSecurityTrustHtml(result);
	}
}
