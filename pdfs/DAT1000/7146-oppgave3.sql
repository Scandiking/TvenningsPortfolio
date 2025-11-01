-- a) 
SELECT *
FROM hund;

-- b) 
SELECT Etternavn, Fornavn, Mobilnr
FROM kunde
ORDER BY Etternavn ASC;

-- c)
SELECT *
FROM hund
WHERE Startdato >'2020-01-01';

-- d)  
SELECT Mobilnr, COUNT(*) AS AntallKunder
FROM Kunde;

-- e)
SELECT *
FROM Kunde
LEFT JOIN Utleie ON Kunde.Mobilnr, Kunde.Fornavn, Kunde.Etternavn, Kunde.Betalingskort = Utleie.Starttidspunkt
WHERE Utleie.Starttidspunkt;

-- f)
SELECT *
FROM Kunde
WHERE Betalingskort IS NULL; 

-- g)
SELECT *
FROM Utleie
WHERE BoksID, Starttidspunkt IS NULL;

-- h)
INSERT INTO Kunde (Mobilnr, Fornavn, Etternavn, Betalingskort)
VALUES
('004711111111','Tore','Hundemann','1111222233334444');

-- i)
CREATE VIEW LedigeBokser
SELECT Boks.BoksID, Boks.SenterID
FROM Boks
WHERE Utleie.Starttidspunkt IS NULL;

-- j)
CREATE USER Hundesjef IDENTIFIED BY Passord;

-- k)
GRANT SELECT ON LedigeBokser TO Hundesjef;

-- l)
SELECT Utleie.BoksID, COUNT(Utleie.BoksID,Utleie.Starttidspunkt) AS AntallUtleier
FROM Utleie
LEFT JOIN Senter ON Utleie.BoksID = Senter.Senternavn
GROUP BY Utleie.BoksID
HAVING COUNT(*) >100;

-- m)
SELECT Kunde.Mobilnr, Kunde.Fornavn, Kunde.Etternavn
FROM Kunde
LEFT JOIN Utleie ON Kunde.Mobilnr = Utleie.Beløp
ORDER BY Beløp DESC;

-- n)
SELECT COUNT(*) Utleie.BoksID, Utleie.Starttidspunkt
FROM Utleie
WHERE Utleie.BoksID, Utleie.Starttidspunkt = '' AS AntallLedige
LEFT JOIN Senter
ON Senter.SenterID = Utleie.BoksID
LEFT JOIN Senter
ON Senter.Senternavn = Utleie.BoksID;

-- o)
SELECT Utleie.BoksID, Utleie.Starttidspunkt
FROM Utleie
WHERE BoksID, Starttidspunkt IS NOT NULL
LEFT JOIN Kunde
ON Kunde.Etternavn, Kunde.Mobilnr = Utleie.BoksID, Utleie.Starttidspunkt
LEFT JOIN Senter
ON Senter.Senternavn = Utleie.BoksID, Utleie.Starttidspunkt;

-- p)
SELECT HundeID, Hundenavn
FROM Hund
WHERE Utleie.Starttidspunkt = TIME + 03:00
LEFT JOIN Kunde
ON Kunde.Etternavn, Kunde.Mobilnr = Hund.HundeID
LEFT JOIN Utleie
ON Utleie.BoksID, Utleie.Starttidspunkt = Hund.HundeID
LEFT JOIN Senter
ON Senter.Senternavn = Hund.HundeID;