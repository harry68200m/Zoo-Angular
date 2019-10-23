import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../services/animal.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.scss']
})
export class SingleAnimalComponent implements OnInit {

  name = 'name';
  type = 'type';
  cri = 'cri';

  constructor(private animalService: AnimalService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.name = this.animalService.getAnimalById(+id).name;
    this.type = this.animalService.getAnimalById(+id).type;
    this.cri = this.animalService.getAnimalById(+id).cri;
  }

}
