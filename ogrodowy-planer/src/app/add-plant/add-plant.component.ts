import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-plant',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-plant.component.html',
  styleUrl: './add-plant.component.css'
})
export class AddPlantComponent {
  plant = {
    name: '',
    description: ''
  };

  onSubmit(form: NgForm){
    if (form.valid) {
      console.log('Nowa roślina:', this.plant);
      // Tutaj można dodać logikę do wysłania danych do serwera lub innej akcji
      form.resetForm(); // Resetuje formularz po wysłaniu
    } else {
      console.log('Form is invalid');
    }
  }
}
