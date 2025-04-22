# Ogrodowy Planer

Aplikacja webowa stworzona w Angularze, która pozwala na zarządzanie roślinami ogrodowymi. Użytkownik może dodawać rośliny, usuwać je z listy, a wszystkie dane są zapisywane lokalnie w przeglądarce dzięki `localStorage`.

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

## Przykładowe rośliny

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


##  Uruchamianie projektu lokalnie

1. Sklonuj repozytorium:

```bash
git clone https://github.com/pawrzes1/Planer-Ogrodowy.git
```

2. Przejdź do katalogu projektu:

```bash
cd Planer-Ogrodowy
```

3. Zainstaluj zależności:

```bash
npm install
```

4. Uruchom aplikację:

```bash
ng serve
```

5. Wejdź w przeglądarce na `http://localhost:4200`

---

##  Pomysły na rozwój

- Kategorie roślin (np. warzywa, owoce, ozdobne)
- Terminarz prac ogrodniczych
- Notatki do roślin
- Przypomnienia o podlewaniu i opryskach
- Eksport/import danych do pliku

---

##  Licencja

Projekt stworzony w celach edukacyjnych. Możesz korzystać i rozwijać go wedle uznania.

---

##  Autor

**Paweł Rzesa**  
[GitHub: pawrzes1](https://github.com/pawrzes1)
