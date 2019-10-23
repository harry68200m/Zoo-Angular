import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../services/animal.service';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent implements OnInit {

  name = 'Zootopia';
  description = 'Bienvenue dans ce super zoo avec pleins d\'animaux géniaux';
  propietaire = 'Aghiles';
  date = '10/09/2019';
  nbAnimaux = 0;
  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.nbAnimaux = this.animalService.animals.length;
  }

}
