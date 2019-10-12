import {Component, Input, OnInit} from '@angular/core';
import {IDog} from '../services/random-dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  @Input() dogs: IDog[];

  constructor() {
    console.log(this.dogs);
  }

  ngOnInit() {

  }

}
