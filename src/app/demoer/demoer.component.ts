import { Component, Input, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DemoerService {
	constructor(private http: Http) {}
	getTsFile(id) {
		const file = 'assets/definitions/' +  id  + '.component.ts.json';
		return this.http.get(file).map((res: any) => res.json());
	}
	getMarkupFile(id) {
		const file = 'assets/definitions/' +  id  + '.component.html.json';
		return this.http.get(file).map((res: any) => res.json());
	}
}

@Component({
	selector: 'app-demoer',
	templateUrl: './demoer.component.html',
	styleUrls: ['../app.component.scss']
})
export class DemoerComponent implements OnInit {
	@Input() id: string;
	@Input() moduleTitle: string;
	tsTokenizedInfo;
	markupTokenizedInfo;
	showCodes = false;
	showingTs = true;
	codesFetched = false;
	constructor(private demoerService: DemoerService) {}
	ngOnInit() {
	}
	onKeyUp(event: KeyboardEvent, value) {
		if (event.keyCode === 13  || event.keyCode === 32) {
			this.showingTs = value;
			event.preventDefault();
			event.stopPropagation();
		}
	}
	showCodesContent() {
		this.showCodes = !this.showCodes;
		if (!this.codesFetched) {
			this.demoerService.getTsFile(this.id).subscribe((jsonData) => {
				this.tsTokenizedInfo = jsonData;
			});
			this.demoerService.getMarkupFile(this.id).subscribe((jsonData) => {
				this.markupTokenizedInfo = jsonData;
			});
			this.codesFetched = true;
		}
	}
}
