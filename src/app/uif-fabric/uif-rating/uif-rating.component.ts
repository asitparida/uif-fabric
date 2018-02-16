import { Component, OnChanges, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UifRatingModel } from './uif-rating.models';
@Component({
	selector: 'uif-rating',
	templateUrl: './uif-rating.component.html',
	styleUrls: [ './uif-rating.component.scss' ]
})
export class UifRatingComponent implements OnChanges, OnInit {
	@Input() maxRating: Number = 5;
	@Input() rating: Number = 3;
	@Output() ratingChange = new EventEmitter<Number>();
	@Input() disabled: boolean | Boolean = false;
	@Input() icon = 'FavoriteStarFill';
	@Input() activeColor = '#0078D7';
	@Input() inactiveColor = '#D0D0D0';
	@Input() size = 18;
	stars: UifRatingModel[] = [];
	private _initialized = false;
	ngOnChanges() {
		if (this._initialized) {
			this.init();
		}
	}
	ngOnInit() {
		this.init();
	}
	init() {
		if (this.maxRating !== undefined && this.maxRating !== null) {
			if (this.stars.length !== this.maxRating) {
				this.stars = [];
				for (let i = 0; i < this.maxRating; i++) {
					this.stars.push({
						marked: false
					});
				}
			}
			this.initRating();
		}
		this._initialized = true;
	}
	initRating() {
		if (this.rating !== undefined && this.rating !== null) {
			this.stars.forEach((star: UifRatingModel, index) => {
				star.marked = index < this.rating;
				star.color = star.marked ? this.activeColor : this.inactiveColor;
				star.size = this.size + 'px';
			});
		}
	}
	changeRating(rating) {
		if (rating !== this.rating) {
			this.rating = rating;
		} else {
			this.rating = rating - 1;
		}
		this.initRating();
		this.ratingChange.emit(this.rating);
	}
}
