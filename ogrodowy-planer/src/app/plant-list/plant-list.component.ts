import { CommonModule } from '@angular/common';
import id from '@angular/common/locales/id';
import { Component, OnInit } from '@angular/core';

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
export class PlantListComponent implements OnInit {
  static plantsLength: number;
  static addPlant(plant: Plant) {
    throw new Error('Method not implemented.');
  }
  // Przykładowe dane roślin (na razie statycznie w kodzie)
  plants: Plant[] = [];
  
  ngOnInit(){
    if(typeof localStorage !== 'undefined'){
      const storedPlants = localStorage.getItem('plants'); // Załaduj rośliny z localStorage
   
    
      // Sprawdź, czy rośliny są już zapisane w localStorage
      // Jeśli tak, to je zainicjalizuj, jeśli nie, to ustaw domyślne rośliny
      if (storedPlants) {
        this.plants = JSON.parse(storedPlants);
      }else {
        // Ustaw domyślne rośliny, jeśli nie ma ich w localStorage
        this.plants = [
          { id: '1', name: 'Brzoskwinia', description: 'Roślina owocowa, wymagająca regularnych oprysków' },
          { id: '2', name: 'Borówka Amerykańska', description: 'Roślina jagodowa, wrażliwa na choroby grzybowe' },
          { id: '3', name: 'Jeżyna', description: 'Krzew owocowy, odporny na choroby' }
        ]; // Ustaw domyślne rośliny, jeśli nie ma ich w localStorage
        localStorage.setItem('plants', JSON.stringify(this.plants)); // Zapisz domyślne rośliny do localStorage
      }
    } else {
      console.error('localStorage is not supported in this environment');
    }
  }

  deletePlant(index: number) {
    this.plants = this.plants.filter((_, i) => i !== index); // Usuń roślinę z tablicy
    localStorage.setItem('plants', JSON.stringify(this.plants)); // Zaktualizuj localStorage
  }

  resetPlants(): void {

    const defaultPlants: Plant[] = [
      { id: '1', name: 'Brzoskwinia', description: 'Roślina owocowa, wymagająca regularnych oprysków' }, 
      { id: '2', name: 'Borówka Amerykańska', description: 'Roślina jagodowa, wrażliwa na choroby grzybowe' },
      { id: '3', name: 'Jeżyna', description: 'Krzew owocowy, odporny na choroby' }
    ]; // Ustaw domyślne rośliny, jeśli nie ma ich w localStorage
    
    localStorage.setItem('plants', JSON.stringify(defaultPlants)); // Zapisz domyślne rośliny do localStorage 
    this.plants = defaultPlants; // Resetuj formularz
    alert('Rośliny zostały zresetowane do domyślnych wartości!'); // Powiadomienie o sukcesie
}
}
