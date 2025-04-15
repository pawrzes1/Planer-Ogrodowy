import { Injectable } from '@angular/core';

export interface Plant {
  id: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private plants: Plant[] = [];

  constructor() {
    this.loadPlants();
  }

    // Metoda do ładowania roślin z localStorage
  private loadPlants(): void {
    const storedPlants = localStorage.getItem('plants');
    if (storedPlants) {
      this.plants = JSON.parse(storedPlants);
    } else {
      this.resetPlants();
    }
  }

    // Metoda do zapisywania roślin do localStorage
  private savePlants(): void {
    localStorage.setItem('plants', JSON.stringify(this.plants));
  }

    // Metoda do pobierania roślin
  getPlants(): Plant[] {
    return this.plants;
  }

    
    // Metoda do dodawania rośliny do tablicy
  addPlant(plant: Plant): void {
    this.plants.push(plant);
    this.savePlants();
  }

    
    // Metoda do aktualizacji rośliny w tablicy
  deletePlant(index: number): void {
    this.plants.splice(index, 1);
    this.savePlants();
  }

    
    // Metoda do aktualizacji rośliny w tablicy
  resetPlants(): void {
    this.plants = [
      { id: '1', name: 'Brzoskwinia', description: 'Roślina owocowa, wymagająca regularnych oprysków' },
      { id: '2', name: 'Borówka Amerykańska', description: 'Roślina jagodowa, wrażliwa na choroby grzybowe' },
      { id: '3', name: 'Jeżyna', description: 'Krzew owocowy, odporny na choroby' }
    ];
    this.savePlants();
  }
}
