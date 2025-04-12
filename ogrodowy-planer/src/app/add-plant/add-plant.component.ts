import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Plant, PlantListComponent } from '../plant-list/plant-list.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-plant',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-plant.component.html',
  styleUrl: './add-plant.component.css'
})
export class AddPlantComponent {

  constructor(private router: Router) {}// Import Router do przekierowania
  // Inicjalizacja obiektu rośliny
  plant = {
    name: '',
    description: '',

  };

  onSubmit(form: NgForm){
    if (this.plant.name && this.plant.description) {
      // Zapisz roślinę do localStorage
      const existingPlants = JSON.parse(localStorage.getItem('plants') || '[]'); // Pobierz istniejące rośliny
      existingPlants.push(this.plant); // Dodaj nową roślinę
      localStorage.setItem('plants', JSON.stringify(existingPlants)); // Zapisz zaktualizowaną listę roślin
      
      alert('Roślina została dodana!'); // Powiadomienie o sukcesie`
      this.plant = { name: '', description: '' }; // Resetuj formularz`
      
      // Przekierowanie do listy roślin (jeśli używasz routera)
      this.router.navigate(['/']); // Upewnij się, że masz zainstalowany RouterModule i Router w swoim module

    } else {
      console.log('Form is invalid');
    }
  }
}


