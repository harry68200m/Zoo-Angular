import {Injectable, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class AnimalService {

  animalsSubject = new Subject<any[]>();

  animals = [
    {
      id: 0,
      name: 'Fifi',
      type: 'Autruche',
      cri: 'Ririri'
    },
    {
      id: 1,
      name: 'Riri',
      type: 'Aigle',
      cri: 'Riiiii'
    },
    {
      id: 2,
      name: 'Loulou',
      type: 'Lion',
      cri: 'Grrr'
    }
  ];

  getAnimalById(id: number) {
    const animal = this.animals.find(
      (s) => {
        return s.id === id;
      }
    );
    return animal;

  }
  emitAnimalSubject() {
    this.animalsSubject.next(this.animals.slice());
  }

  addAnimal(name: string, type: string, cri: string) {
    const animalObject = {
      id: 0,
      name: '',
      type: '',
      cri: '',
    };
    animalObject.name = name;
    animalObject.type = type;
    animalObject.cri = cri;
    animalObject.id = this.animals[(this.animals.length - 1)].id + 1;
    this.animals.push(animalObject);
    this.emitAnimalSubject();
  }

  sellAnimal(id: number){
    this.animals.splice(id, 1);
    this.emitAnimalSubject();
  }


}
