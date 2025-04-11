import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Komponent główny aplikacji z routingiem
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ogrodowy Planer';
}
