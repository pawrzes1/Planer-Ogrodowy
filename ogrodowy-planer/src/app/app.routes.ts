import { Routes } from '@angular/router';
import { PlantListComponent } from './plant-list/plant-list.component';

export const routes: Routes = [
  {
    path: '',
    component: PlantListComponent,
  },
  // przyszłe ścieżki np. do formularza dodawania roślin:
  // {
  //   path: 'dodaj',
  //   component: AddPlantComponent
  // }
];
