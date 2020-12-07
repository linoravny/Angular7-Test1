import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ai-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating:number;
  @Output() raitingClicked:EventEmitter<string> = new EventEmitter<string>();
  starWidth:number;
  faStar = faStar;

  ngOnChanges(): void{ //listen to @input change
    this.starWidth = (18)*this.rating;
  }

  onClick(): void{
    this.raitingClicked.emit(`This rating ${this.rating} was clicked`);
  }
}
