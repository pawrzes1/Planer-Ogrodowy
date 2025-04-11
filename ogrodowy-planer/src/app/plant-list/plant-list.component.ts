import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
export class PlantListComponent {
  // Przykładowe dane roślin (na razie statycznie w kodzie)
  plants: Plant[] = [
    { id: 1, name: 'Brzoskwinia', description: 'Roślina owocowa, wymagająca regularnych oprysków' },
    { id: 2, name: 'Borówka Amerykańska', description: 'Roślina jagodowa, wrażliwa na choroby grzybowe' },
    { id: 3, name: 'Jeżyna', description: 'Krzew owocowy, odporny na choroby' }
  ];

  // Pomocnicza funkcja do optymalizacji wyświetlania listy (trackBy)
  trackById(index: number, item: Plant): number {
    return item.id;
  }
}
