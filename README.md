# WDP Projekt Zespołowy

Kliknij, by zobaczyć efekt finalny: https://oskar-team-project.herokuapp.com/

## Inicjacja projektu

W ramach projektu grupowego zrealizowałem 7 zadań wartych łącznie 17 pkt. Projekt był nadzorowany przez mentora, a podział zadań odbywał się poprzez aplikację Jira.

Zadania, które zrealizowałem:

- Hovery buttonów w kartach produktów (1pkt);
- Ostylowanie buttonów "Ulubiony" i "Dodany do porównania" (1pkt);
- `Dodawanie do stanu aplikacji` ulubionych produktów (2pkt);
- Stworzenie sekcji "Feedback" według designu (2pkt);
- Dodanie animacji slidera w sekcji "Feedback" (2pkt);
- `Dodawanie do stanu` produktów do porównania i wyświetlanie ich w specjalnym stackbarze (3pkt);
- `Zapisanie w stanie` aplikacji odpowiedniego trybu zależenego od szerokości viewportu (3pkt);
- `Dodawanie do stanu` oceny produktu w gwiazdkach aplikacji (3pkt);

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.
