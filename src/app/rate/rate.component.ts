import {Component, Input, OnInit} from '@angular/core';
import {IDog, RandomDogService} from '../services/random-dog.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() dogsRated;
  dog: IDog;
  dogs: IDog[];
  lastRating: string;
  constructor(private randomDog: RandomDogService) {
    this.dog = {
      message: '',
      status: ''
    };
    this.dogs = [];
    this.lastRating = '';
  }

  getDog() {
    this.randomDog.getDog().subscribe((data: {}) => {
      this.dog = data as IDog;
    });
  }

  rate(r) {
    this.dogs.push(
      {message: this.dog.message, status: r}
    );
    this.getDog();
    this.lastRating = r;
    console.log(this.dogs);
  }
  ngOnInit() {
    this.getDog();

  }

}
