import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import {Image} from "@heroui/image";
import CodeBlock from "../components/CodeBlock";
import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

const DAT1000 = () => {
    const navigate = useNavigate();

    const oppgave2=`-- Opprette database
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
`

    const oppgave3 = `-- a) 
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
ON Senter.Senternavn = Hund.HundeID;`


    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/dat1000')}>Database 1</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">DAT1000 - Database 1</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold">Entiteter og relasjoner</h2>
                            </CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>Dette arbeidskravet innebærte å designe en databasemodell med entiteter og relasjoner.</p>

                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <iframe
                                            src="/pdfs/DAT1000/DAT1000-h2023-Oblig1-Gruppe3.pdf"
                                            width="100%"
                                            height="600px"
                                            title="DAT1000 Arbeidskrav 1"
                                            className="border-0"
                                        />
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv2" title="Arbeidskrav 2">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">SQL og databaseimplementasjon</h2></CardHeader>
                            <CardBody>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <iframe
                                    src="/pdfs/DAT1000/DAT1000-h2023-Oblig2-Gruppe3.pdf"
                                    width="100%"
                                    height="600px"
                                    title="DAT1000 Arbeidskrav 2"
                                    className="border-0"
                                />
                                </div>


                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <p>Oppgave 1</p>
                                <img
                                    alt="Oppgave 1"
                                    src="/pdfs/DAT1000/7146-oppgave1.png"
                                />

                                <p>Oppgave 2</p>
                                <CodeBlock
                                    code={oppgave2}
                                    language="sql"
                                    showLineNumbers={false}
                                    maxHeight="500px"
                                />

                                <p>Oppgave 3</p>

                                <CodeBlock
                                    code={oppgave3}
                                    language="sql"
                                    showLineNumbers={false}
                                    maxHeight="500px"
                                />

                                <p>Oppgave 4a</p>
                                <img
                                    alt="Oppgave 4"
                                    src="/pdfs/DAT1000/7146-oppgave4a.png"
                                />

                                <p>Oppgave 4b</p>
                                <img
                                    alt="Oppgave 4b"
                                    src="/pdfs/DAT1000/7146-oppgave4b.png"
                                />

                                <p>Oppgave 4c</p>
                                <img
                                    alt="Oppgave 4c"
                                    src="/pdfs/DAT1000/7146-opppgave4c.png"
                                />
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default DAT1000;
