-- Opprette database
CREATE SCHEMA dogstore;

-- Bruk database
USE SCHEMA dogstore;

-- Opprette tabeller
CREATE TABLE senter
(
SenterID INT(5) PRIMARY KEY,
Senternavn CHAR(30)
);

CREATE TABLE kunde
(
Mobilnr INT(12) PRIMARY KEY,
Fornavn CHAR(40),
Etternavn CHAR(40),
Betalingskort INT(16)
);

CREATE TABLE utleie
(
BoksID INT(6)
Starttidspunkt (TIME),
HundeID INT(6),
Sluttidspunkt (TIME),
Beløp DECIMAL(5,2)
PRIMARY KEY = BoksID, Starttidspunkt
CONSTRAINT boks
  FOREIGN KEY (BoksID)
  REFERENCES Boks(BoksID)
CONSTRAINT hund
  FOREIGN KEY (hundeID)
  REFERENCES hund(hundeID)
);

CREATE TABLE boks
(
BoksID INT(5),
SenterID INT(5)
CONSTRAINT senter
  FOREIGN KEY (SenterID)
  REFERENCES Senter(SenterID)
);

CREATE TABLE hund
(
HundeID INT(6) PRIMARY KEY,
Hundenavn CHAR(40),
Rase CHAR(40),
Eier CHAR(80),
Startdato (DATE)
CONSTRAINT Eier
  FOREIGN KEY (Eier)
  REFERENCES Kunde(Mobilnr)
);

