import {
	Component, Input, OnInit,
	Injectable, ViewChild, ComponentFactoryResolver,
	AfterViewInit, ViewContainerRef, ComponentRef, OnChanges
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { COMPONENTS } from '../app.declarations';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DemoerService {
	currentDir = new Subject<string>();
	currentDirAsObservable = this.currentDir.asObservable();
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
export class DemoerComponent implements AfterViewInit {
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
		private activatedRoute: ActivatedRoute,
		private componentFactoryResolver: ComponentFactoryResolver) { }
	ngAfterViewInit() {
		this.activatedRoute.params.subscribe((params: any) => {

			if (params['id']) {
				setTimeout(() => {
					this.component = COMPONENTS.find(x => x.dir === params['id']);
					if (this.component) {
						setTimeout(() => {
							this.loadComponent();
						});
					}
					this.demoerService.currentDir.next(this.component.dir);
				});
			}
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
