import { Component, Input, OnInit,
	Injectable, ViewChild, ComponentFactoryResolver, AfterViewInit, ViewContainerRef, ComponentRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class DemoerService {
	constructor(private http: HttpClient) { }
	getTsFile(id) {
		const file = 'assets/definitions/' + id + '.component.ts.json';
		return this.http.get(file);
	}
	getMarkupFile(id) {
		const file = 'assets/definitions/' + id + '.component.html.json';
		return this.http.get(file);
	}
}

@Component({
	selector: 'app-demoer',
	templateUrl: './demoer.component.html',
	styleUrls: ['../app.component.scss']
})
export class DemoerComponent implements OnInit, AfterViewInit, OnChanges {
	@Input() component: any;
	tsTokenizedInfo;
	markupTokenizedInfo;
	showCodes = false;
	showingTs = true;
	codesFetched = false;
	@ViewChild('componentHost', { read: ViewContainerRef }) componentHost;
	componentRef: ComponentRef<any>;
	_initialized = false;
	constructor(
		private demoerService: DemoerService,
		private componentFactoryResolver: ComponentFactoryResolver) { }
	ngOnInit() {
	}
	ngOnChanges() {
		if (this._initialized) {
			if (this.component && this.component.componentId) {
				setTimeout(() => {
					this.loadComponent();
				});
			}
		}
	}
	ngAfterViewInit() {
		setTimeout(() => {
			this.loadComponent();
		});
	}
	loadComponent() {
		if (this.component && this.component.componentId) {
			this.componentHost.clear();
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component.componentId);
			this.componentRef = this.componentHost.createComponent(componentFactory);
		}
		this.fetchCodes();
		this._initialized = true;
	}
	onKeyUp(event: KeyboardEvent, value) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			this.showingTs = value;
			event.preventDefault();
			event.stopPropagation();
		}
	}
	showCodesContent() {
		this.showCodes = !this.showCodes;
		this.fetchCodes();
	}
	fetchCodes() {
		this.demoerService.getTsFile(this.component.id).subscribe((jsonData) => {
			this.tsTokenizedInfo = jsonData;
		});
		this.demoerService.getMarkupFile(this.component.id).subscribe((jsonData) => {
			this.markupTokenizedInfo = jsonData;
		});
	}
}
