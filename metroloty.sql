-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 08 Lis 2023, 20:17
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `metroloty`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `aktualnosci`
--

CREATE TABLE `aktualnosci` (
  `id` int(11) NOT NULL,
  `tytul` varchar(255) COLLATE utf8_polish_ci NOT NULL,
  `artykul` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `aktualnosci`
--

INSERT INTO `aktualnosci` (`id`, `tytul`, `artykul`) VALUES
(1, 'Kto dręczy ptaka', 'Wkrótce w kinach! Jestem zaszczycony poinformować, że nasza fundacja jest głównym sponsorem filmu \"Kto dręczy ptaka\". W filmie tym poza wielowątkową fabułą pełną scen akcji doświadczymy wizualizacji lotu w przyszłej sieci MetroLoty™!'),
(2, 'Prace nad pilot AI rozpoczęte!', 'Śmiało możemy ogłosić, że prace nad sztuczną inteligencją zdolną do prowadzenia naszych samolotów zaczęły rozpoczęte. Drużyna odpowiedzialna za prace informuje, że jak na razie prace idą pomyślnie, ale nie jest w stanie określić czasu lub kwoty na ukończenie prac.'),
(3, 'Pierwsze próby otrzymania dotacji rządowych', 'MetroLoty™ to przyszłość a kto inny jak nie rząd dba o przyszłość nas wszystkich. Dlatego nasza fundacja wysłała już wniosek do rządu w sprawie budowy naszych wspaniałych sieci tuneli. Wierzymy, że szanowni politycy wybrani przez nasz wspaniały naród będą chętni do współpracy w imię przyszłości Polski.'),
(4, 'Spotkanie integracyjne na rzecz MetroLoty™!', 'Już 27.10.2023 na ulicy Zmyślonowa 15 odbędzie się spotkanie na rzecz MetroLoty™! Będzie można zapytać o dowolne pytania w sprawie MetroLoty™, a także będzie to jedna z najlepszych okazji do dołączenia do naszej fundacji. Będzie też zaprezentowana Makieta z wizualizacją tunelu, jaki i samolotu. Wizualizacja ta będzie najlepszym sposobem, by zrozumieć i podziwiać piękno MetroLoty™.'),
(5, 'Pierwsze próby otrzymania dotacji rządowych part 2', 'Niestety nie otrzymaliśmy dotacji. Natomiast rząd poinformował nas o problemach prawnych związanych z naszymi planami. Dlatego Podwyższamy potrzebne fundusze do 30 000 złotych w celu opłacenia w przyszłości podatków związanych z nową technologią.'),
(6, 'MIĘDZYNARODOWE TARGI LOGISTYKI MAGAZYNOWEJ!', 'Już 24-26 stycznia 2024 odbędą się Targi Logistyki TransLogistica Poland w Warszawie, na których chcemy, aby nasza fundacja miała pozwolenie zaprezentować MetroLoty™. Co prawda tematem jest transport magazynowy, ale nie ma rzeczy niemożliwych dla MetroLoty™! Potrzebujemy tylko uzbierać 2 000 złotych do końca 2023 roku, abyśmy mogli spróbować tam naszych sił.'),
(7, 'Spotkanie integracyjne na rzecz MetroLoty™! Finał', 'Dziękujemy wszystkim którzy przybyli na pierwszym spotkaniu w sprawie MetroLoty™. A dla tych, co nie mogli przybyć, to nie ma co się martwić. Niedługo wszystkie pytania i ważne aspekty ze spotkania zostaną ujawnione na stronie. Między innymi zostały podane dane samolotów, których wykup jest planowany przez fundacje, jak i informacje o pierwszej stacji MetroLoty™ na świecie, która powstanie w przyszłości.');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `petycje`
--

CREATE TABLE `petycje` (
  `id` int(11) NOT NULL,
  `imie` varchar(25) COLLATE utf8_polish_ci NOT NULL,
  `nazwisko` varchar(25) COLLATE utf8_polish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_polish_ci NOT NULL,
  `wiadomosc` text COLLATE utf8_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `petycje`
--

INSERT INTO `petycje` (`id`, `imie`, `nazwisko`, `email`, `wiadomosc`) VALUES
(1, 'asdf', 'asdf', 'asdfasdf@asdfsd.com', 'sdfgsdfnhsdhsdfgsdfhdfghfdhsfdsdfg'),
(2, 'asd', 'asdasd', 'asd@as.pl', ''),
(3, 'asdd', 'asdd', 'asd@ss.pl', ''),
(4, 'asd11', 'asdwa223', 'asdasd@ss.pl', ''),
(5, 'aasd', 'asad', 'a@asd.pl', ''),
(6, 'asdd', 'asdd', 'asd@ss.pl', ''),
(7, 'asdd', 'asd', 'asddsadasZ@gmail.com', ''),
(8, 'asdd', 'asdd', 'asd@asd2.pl', ''),
(9, 'sddd', 'asdd', 'asdsd@asd.pl', ''),
(10, 'asdasd', 'asdasd', 'asdasdsa@asd.pl', ''),
(11, 'asdas', 'asdasd', 'asdadsa@asd.pl', ''),
(12, 'asd', 'asd', 'asdsd2@s.pl', ''),
(13, 'adsd', 'asdd', 'asd2@gm.pl', ''),
(14, 'asd', 'asd', 'asdasda@sadd.pl', ''),
(15, 'asd', 'asd', 'asdasd@asd.pl', ''),
(16, 'asd', 'asd', 'asdds@gmail.com', ''),
(17, 'miki', 'wus', 'malpa123@gmail.com', 'tak popieram tą innowacyjną technologie'),
(18, 'asd', 'asd', 'malpa123@gmail.com', ''),
(19, '\'asd\'', '\'asd\'', '\'malpa123@gmail.com\'', '\'\''),
(20, 'asd', 'asd', 'malpa1223@gmail.com', ''),
(21, 'asd', 'asd', 'asdsad@asd.kk', ''),
(22, 'asd', 'asd', 'asddsadsadsa@sa.ss', 'asdfhfsdgsddfsggfsdfsdggfsdfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdgfsdg'),
(23, 'asd', 'asd', 'asasddaaasdfsdfsdsasd@gds.pl', 'dfsghdfdfgfdfjg'),
(24, 'asd', 'asd', 'asdfasdfsadfdas@asdsf.pl', 'asdfasdfgdrtsasdfg');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `aktualnosci`
--
ALTER TABLE `aktualnosci`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `petycje`
--
ALTER TABLE `petycje`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `aktualnosci`
--
ALTER TABLE `aktualnosci`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `petycje`
--
ALTER TABLE `petycje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
