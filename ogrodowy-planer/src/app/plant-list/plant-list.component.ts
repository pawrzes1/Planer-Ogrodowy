import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Interfejs definiujący strukturę rośliny
export interface Plant {
  id: number;
  name: string;
  description: string;
}

// Komponent listy roślin
@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent implements OnInit {
  static plantsLength: number;
  static addPlant(plant: Plant) {
    throw new Error('Method not implemented.');
  }
  // Przykładowe dane roślin (na razie statycznie w kodzie)
  plants: Plant[] = [
    { id: 1, name: 'Brzoskwinia', description: 'Roślina owocowa, wymagająca regularnych oprysków' },
    { id: 2, name: 'Borówka Amerykańska', description: 'Roślina jagodowa, wrażliwa na choroby grzybowe' },
    { id: 3, name: 'Jeżyna', description: 'Krzew owocowy, odporny na choroby' }
  ];
  
  ngOnInit(){
    // Pobierz rośliny z localStorage
    const storedPlants = localStorage.getItem('plants');
    if (storedPlants) {
      this.plants = JSON.parse(storedPlants);
    }
  }

  deletePlant(index: number) {
    this.plants.splice(index, 1); // Usuń roślinę z tablicy
    localStorage.setItem('plants', JSON.stringify(this.plants)); // Zaktualizuj localStorage
  }
}
