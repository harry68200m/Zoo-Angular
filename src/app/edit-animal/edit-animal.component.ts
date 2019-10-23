import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../services/animal.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit {

  constructor(private animalService: AnimalService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
  const name = form.value.name;
  const type = form.value.type;
  const cri = form.value.cri;
  this.animalService.addAnimal(name, type, cri);
  this.router.navigate(['/animals']);

  }

}
