import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

// Komponent główny aplikacji z routingiem
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Planer Ogrodowy'; //Tytuł aplikacji
  isDarkMode = false; // Flaga do przechowywania stanu trybu ciemnego


  // Metoda do aktualizacji motywu na podstawie stanu trybu ciemnego
  // Dodaje lub usuwa klasę dark-mode z body
  updateTheme() {
    document.body.classList.toggle('dark-mode', this.isDarkMode); // Dodanie lub usunięcie klasy dark-mode
  }

  // Metoda do przełączania trybu ciemnego
  // Zmienia stan trybu ciemnego i aktualizuje motyw
  toggleDarkTheme(): void{
    
    this.isDarkMode = !this.isDarkMode; // Pobranie aktualnego stanu trybu ciemnego
    this.updateTheme(); // Ustawienie motywu na podstawie stanu
    // Zapisanie stanu trybu ciemnego w localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light'); // Zapisanie stanu w localStorage
   
  }

  // Inicjalizacja komponentu
  // Ustawienie stanu trybu ciemnego na podstawie localStorage
  ngOnInit(){
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark'; // Ustawienie stanu trybu ciemnego na podstawie localStorage
    this.updateTheme(); // Ustawienie motywu na podstawie stanu
  }
}
