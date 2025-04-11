# Ogrodowy Planer

Aplikacja webowa napisana w Angularze, która pomaga zaplanować uprawy w ogrodzie.

## Opis

„Ogrodowy Planer” to prosta aplikacja typu SPA (Single Page Application), w której można:

- wyświetlać listę roślin uprawianych w ogrodzie,
- dodawać nowe rośliny (w przyszłości),
- rozwijać aplikację o przypomnienia i planowanie zabiegów ogrodniczych.

## Technologie

- Angular 17 (standalone components)
- TypeScript
- SCSS
- Routing (w kolejnych etapach)
- Angular CLI + Vite

## Widok główny

Po uruchomieniu aplikacji widzimy:

- tytuł aplikacji
- krótki opis
- listę roślin (nazwa + opis)

### Przykładowe rośliny

- **Brzoskwinia** – roślina owocowa, wymagająca regularnych oprysków
- **Borówka amerykańska** – roślina jagodowa, wrażliwa na choroby grzybowe
- **Jeżyna** – krzew owocowy, odporny na choroby

## Struktura projektu

src/ 
├── app/ 
│ ├── app.component.ts            # Główny komponent aplikacji 
│ ├── app.routes.ts               # Routing aplikacji 
│ └── plant-list/                 # Komponent wyświetlający listę roślin 
│ ├── plant-list.component.ts 
│ ├── plant-list.component.html 
│ └── plant-list.component.scss
