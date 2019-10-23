import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalViewComponent } from './animal-view/animal-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AnimalService} from './services/animal.service';
import { SingleAnimalComponent } from './single-animal/single-animal.component';
import { ZooComponent } from './zoo/zoo.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path : 'animals', component: AnimalViewComponent},
  {path: 'animals/:id', component: SingleAnimalComponent},
  {path : '', component: ZooComponent },
  {path : 'zoo' , component: ZooComponent},
  {path : 'buy' , component: EditAnimalComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AnimalViewComponent,
    SingleAnimalComponent,
    ZooComponent,
    EditAnimalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
