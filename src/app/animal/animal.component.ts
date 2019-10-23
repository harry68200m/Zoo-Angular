import {Component, Input, OnInit} from '@angular/core';
import {AnimalService} from '../services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  @Input() animalName: string;
  @Input() animalType: string;
  @Input() animalCri: number;
  @Input() id: number;

  constructor(private animalService: AnimalService,) { }

  ngOnInit() {
  }

  removeAnimal(idAnimal: number) {
    this.animalService.sellAnimal(idAnimal);
  }
}
