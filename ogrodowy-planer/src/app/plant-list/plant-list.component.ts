import { CommonModule } from '@angular/common';
import id from '@angular/common/locales/id';
import { Component, OnInit } from '@angular/core';
import { PlantService } from '../services/plant.service';

// Interfejs definiujący strukturę rośliny
export interface Plant {
  id: string;
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

// Komponent listy roślin
export class PlantListComponent implements OnInit {
  // Inicjalizacja tablicy roślin
  // Tablica przechowująca rośliny
  plants: Plant[] = [];

  constructor(private plantService: PlantService) {}

  
  // Inicjalizacja komponentu
  // Użycie OnInit do załadowania danych po inicjalizacji komponentu
  ngOnInit(){
    this.plants = this.plantService.getPlants();
    console.log('Rośliny:', this.plants); // ← sprawdź w konsoli przeglądarki
  }

  
  // Metoda do usuwania rośliny z tablicy
  deletePlant(index: number) {
    this.plantService.deletePlant(index); // Usuń roślinę z serwisu
    this.plants = this.plantService.getPlants(); // Pobierz zaktualizowaną tablicę roślin
    alert('Roślina została usunięta!'); // Powiadomienie o sukcesie
  }

  // Metoda do przywrócenia stalu początkowego tablicy roślin
  resetPlants(): void {
    this.plantService.resetPlants(); // Przywróć rośliny do stanu początkowego
    this.plants = this.plantService.getPlants(); // Pobierz zaktualizowaną tablicę roślin
    alert('Rośliny zostały zresetowane!'); // Powiadomienie o sukcesie
  }

  
}
