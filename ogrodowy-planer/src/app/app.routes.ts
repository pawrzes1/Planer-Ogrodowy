import { Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';

export const routes: Routes = [
  {
    path: '',
    component: PlantListComponent,
  },

  {
    path: 'dodaj',
    component: AddPlantComponent,
  },


  // przyszłe ścieżki np. do formularza dodawania roślin:
  // {
  //   path: 'dodaj',
  //   component: AddPlantComponent
  // }
];
