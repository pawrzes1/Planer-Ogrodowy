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
  title = 'Planer Ogrodowy';
  isDarkMode = false; // Flaga do przechowywania stanu trybu ciemnego

  constructor() {
    
  }

  updateTheme() {
    document.body.classList.toggle('dark-mode', this.isDarkMode); // Dodanie lub usunięcie klasy dark-mode
  }

  toggleTheme(){
    
    this.isDarkMode = !this.isDarkMode; // Pobranie aktualnego stanu trybu ciemnego
    this.updateTheme(); // Ustawienie motywu na podstawie stanu
    // Zapisanie stanu trybu ciemnego w localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light'); // Zapisanie stanu w localStorage
   
  }

  ngOnInit(){
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark'; // Ustawienie stanu trybu ciemnego na podstawie localStorage
    this.updateTheme(); // Ustawienie motywu na podstawie stanu
  }
}
