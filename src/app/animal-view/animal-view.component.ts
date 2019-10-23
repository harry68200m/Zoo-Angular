import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../services/animal.service';

@Component({
  selector: 'app-animal-view',
  templateUrl: './animal-view.component.html',
  styleUrls: ['./animal-view.component.scss']
})
export class AnimalViewComponent implements OnInit {

  animals: any [];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.animals;
  }

}
