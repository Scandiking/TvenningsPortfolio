-- Opprette database for "Bildedelingstjeneste
CREATE SCHEMA Bildedelingstjeneste;

-- Om du trenger å slette, bruk denne:
DROP SCHEMA IF EXISTS Bildedelingstjeneste;

-- Velge den nye databasen for spørringer
USE Bildedelingstjeneste;

-- Opprette tabellen Bilde
CREATE TABLE Bilde 
(
BildeID CHAR(16) NOT NULL,
Beskrivelse TEXT(250),
OpplastetDato DATE,
Fotograf CHAR(20) NOT NULL,
CONSTRAINT BildePK PRIMARY KEY(BildeID),
CONSTRAINT FotografFK FOREIGN KEY(Fotograf) REFERENCES Bruker(BrukerID)
);

-- Sette inn data i tabellen Bilde

INSERT INTO Bilde (BildeID, Beskrivelse, OpplastetDato, Fotograf) 
VALUES 
('1', 'Sjekk ut dette bildesettet fra Kari og Jens sitt bryllup!','2018-06-12', 'BryllupsfotoAS'),
('2', 'Kranførerbevis i hånda og dama i toppen av krana! Svever høyt!', '2018-06-12', 'Kranjenta'),
('3','Se min kjole den er rød som økonomien min!','2018-06-12','MonsterHunter69'),
('4','Meløy Kirke er så fin til bryllup og julefeiring!','2018-06-12','HunterGatherer'),
('5','Kom til samfunssalen i dag! Ute er det martna, og Bodil steker sveler!','2018-06-12','AbsoluttBest'),
('6','Klar til fjelltur!','2018-06-13','GustiMedio'),
('7','Tok de syv søstre på syv timer. Rolf Einar Jensen, we are coming for you!','2018-06-13','GustiMedio'),
('8','Turen ned tar vi meget chill','2018-06-13','GustiMedio'),
('9','Løvenes Konge, sjekk den manken','2018-06-13','LeSurikart'),
('10','Første bilde på Bildedelingstjeneste','2018-06-13','no1palsam'),
('11','Her med Rolf Skjærvold som hadde forrige rekord til I DAG (han hadde 3h58m, jeg 3h43m)','2018-06-13','GustiMedio'),
('12','Er det dette som er å være en sånn der early adopter?','2018-06-14','sangpus'),
('13','Hvem valgte å kalle det Bildedelingstjeneste? Så generisk','2018-06-14','5lacka'),
('14','Elghjerte! Perfekt i jaktgryte!','2018-06-16','BasedViking'),
('15','Det er visstnok juni, men her er det snø!','2018-06-20','AlisTheGamer'),
('16','Vi akte ned Trollstigen. Ikke gjør det.','2018-06-20','AlisTheGamer'),
('1234123412341234','Kan vi velge hva som helst på BildeID?','2018-06-14','Vegardinh0'),
('XXXXXXXXXXXXXXXX','Det går med bare Xer vaffal','2018-06-14','vegardinh0'),
('AAAAAAAAAAAAAAAA','Bare Aer går oxo','2018-06-14','Vegardinh0'),
('0000000000000000','Skjønnært. ær a-z å 0-9','2018-06-14','Vegardinh0'),
('abcdefghijklmnop','Alfabet malfabet','2018-06-15','14kROSE'),
('pokemonjaktihone','Er det noen i Hønefoss som fortsatt spiller Pokémon Go?','2018-06-20','Skjegguara'),
('kanmanvelgeselv0','Bare sjekker ting','2018-06-21','Skjegguara'),
('halvpart','Bare sjekker ting','2018-06-21','Lenelykke'),
('halvhalvpart','Bare sjekker tin','2018-06-21','Lenelykke'),
('kvartparthalv','Bare sjekker tang','2018-06-21','Lenelykke'),
('Nietschze','Er det sånn man skriver det? Nitsje? Nietzche? Nietschze?','2018-06-22','MarkyMark1977'),
('SENDMEMES','Hei Google søk på','2018-06-22','MarkyMark1977'),
('09AZthatsit','Hvorfor ikke ÆØÅ? Domener støtter ÆØÅ nå.','2018-06-22','Gytis777e'),
('kultaavelge','Savner sånne apper man kunne personalisere, velge farger og sånn, kan velge BildeID her da lol','2018-06-22','Gytis777e'),
('facebook','facebook','2018-06-22','MrCleitinX'),
('pic100', 'Molde', '2023-11-02', 'VincentDogau' ),
('M0LD3','I e frå Molde','2022-05-14','MrCleitinX'),
('M00LD','Litta tur rundtu Molde','2023-06-13','VincentDogau'),
('MoOlD','Moldelig','2022-07-12','Olav'),
('Moldeh','Vafler','2019-08-11','IdaHenriette376'),
('Mholdeeh','Hauduken i Molde','2023-09-10','Kranjenta');

SELECT * FROM Bruker; 

-- Opprette tabellen Bruker
CREATE TABLE Bruker
(
BrukerID CHAR(20) NOT NULL,
Fornavn CHAR(30),
Etternavn CHAR(30),
Epost CHAR(60),
CONSTRAINT BrukerPK PRIMARY KEY(BrukerID)
);

-- Sette inn data i tabellen Bruker
INSERT INTO Bruker (BrukerID, Fornavn, Etternavn, Epost)
VALUES
('BryllupsfotoAS', 'Charlotte', 'Christensen', 'Bryllupsfoto@charlotte.com'),
('Kranjenta','Alexa','Aleksandersen','jenta_i_krana@hotmail.com'),
('MonsterHunter69','Mona','Lewinsky','MonHun@live.no'),
('HunterGatherer','Hunter','Biden','hubi@gop.com'),
('Martian1994yoyo','Kristian Martin','Tvenning','km.tvenning@protonmail.com'),
('AbsoluttBest','Absolutt','Best','absolutt@best.no'),
('Airball84','Emma','Ball','air@ballin.xyz'),
('GustiMedio','Gustav','Medusa','GM@levant.org'),
('Irisbaluba','Iris','Ivar','iriv@avfallsbehandling.no'),
('LeSurikart','Timon','Puumba','hakuna@matata.sw'),
('no1palsam','Balsamico','Blomkål','matlaging@kjokken.tv'),
('SaintJean12','Jean','Pierre','levis@pierrerobert.com'),
('sangpus','Lene','Marlin','Poplater@2000.no'),
('Vegardinh0','Vegard','Ronaldinho','Veg.Ron@bodo.kommune.no'),
('14kROSE','Tre','Rose','ukjentesmaker@vinmonopolet.no'),
('19194irhdndnd','Irma','Radidadadu','irma@yahoo.com'),
('2011Poketrainer', 'Jon', 'Doe', 'jon@gmail.com'),
('2017ChaBoom', 'John', 'Smith', 'john@protonmail.com'),
('3ShaDoW17', 'Noah', 'Jones', 'shadow@online.no'),
('5lacka', 'Sofie', 'Smith', 'black@telenor.no'),
('5StarChick80687', 'Olivia', 'Chick', 'starry@gmail.com'),
('AlisTheGamer', 'Nora', 'Gamergurrl', 'alice@gmail.com'),
('Almonada34', 'Al', 'Monada', 'al@protonmail.com'),
('Arethas123', 'Aksel', 'Ethan', 'ari@yahoo.com'),
('Awelsdeskinny2', 'Ingrid', 'Olsen', 'awe@yahoo.com'),
('Trulzing', 'Truls', 'Valsgård', 'truls@protonmail.com'),
('VulpeenJP', 'Isak', 'Jakobsen', 'vulpeen@gmail.com'),
('Quervo1975', 'Oskar', 'Mannerud', 'quervo@yahoo.com'),
('BasedViking', 'Henrik', 'Henriksen', 'based@gmail.com'),
('Lenelykke', 'Lene', 'Bratli', 'lene@yahoo.com'),
('camaleon662', 'Leon', 'Cameron', 'cam@gmail.com'),
('MarkyMark1977', 'Mark', 'Markson', 'mark@yahoo.com'),
('Drocoloss11', 'Filip', 'Sandvik', 'dro@gmail.com'),
('Gytis777e', 'Thea', 'Syversen', 'gytis@yahoo.com'),
('MiguelKing2', 'Miguel', 'King', 'miguel@gmail.com'),
('GrumpySnuggyBar', 'Magnus', 'Gustavsen', 'grumpy@gmail.com'),
('dadou67', 'Dad', 'Dou', 'dad@yahoo.com'),
('Shrek2HDonDVD', 'Edvard', 'Berg', 'shrek@gmail.com'),
('ZulmaBunny', 'Zulma', 'Zaratustra', 'zulma@yahoo.com'),
('Parkseung88', 'Park', 'Seung', 'park@gmail.com'),
('Lebedwin', 'August', 'Berger', 'leb@yahoo.com'),
('Kartapuce21', 'Vilma', 'Gustavsen', 'karta@gmail.com'),
('Jimmymauger', 'Jimmy', 'Mauger', 'jimmy@gmail.com'),
('JCP43', 'James Carl', 'Persson', 'jcp@yahoo.com'),
('Jflloooo', 'Jay', 'Flo', 'jf@gmail.com'),
('miyaw1018', 'Mia', 'Wattson', 'miya@yahoo.com'),
('MrCleitinX', 'Lucas', 'Cleitin', 'mr@gmail.com'),
('LeonyKT', 'Leon', 'Kittman Thames', 'leony@yahoo.com'),
('Blazan111', 'Blaze', 'Oney', 'blazan@gmail.com'),
('RogueFudge', 'Ida', 'Hansen', 'rogue@yahoo.com'),
('SJJ961202', 'Shawn', 'Jameson', 'sjj@gmail.com'),
('Girnard', 'Aiden', 'Nerdrum', 'gir@yahoo.com'),
('F11nnnnn', 'Finn', 'Braathen', 'finn@gmail.com'),
('OleSandved', 'Ole', 'Sandved', 'ole@gmail.com'),
('Eliiizard', 'Elisabeth', 'Olsen', 'eli@yahoo.com'),
('jjjiiimmmyyyo', 'Jimmy', 'Valmer', 'jimmy@yahoo.com'),
('kkkkkqp', 'Vera', 'Persson', 'kk@gmail.com'),
('kingaddrock', 'Stephen', 'King', 'king@yahoo.com'),
('innis27', 'Misha', 'Innis', 'innis@gmail.com'),
('Mish2202', 'Mish', 'Innabords', 'mish@yahoo.com'),
('Ritchenmg', 'Richard', 'Greene', 'ritch@gmail.com'),
('ColinxRobinson', 'Colin', 'Robinson', 'colin@yahoo.com'),
('Masjiyan', 'Mas', 'Jiyan', 'mas@yahoo.com'),
('Candyeshop', 'Candy', 'Shop', 'candy@gmail.com'),
('Guitarsimmi', 'Simen', 'Neverdal', 'simen@protonmail.com'),
('ElSimono', 'Simon', 'Valermo', 'el@yahoo.com'),
('Vincentdogau', 'Vincent', 'Dogau', 'vincent@gmail.com'),
('OhBooi', 'Ole', 'Bauhaus', 'oh@yahoo.com'),
('kailmuil', 'Oluf', 'Rallkattli', 'kail@yahoo.com'),
('MandoCommandoh', 'Mando', 'Commandoh', 'mando@gmail.com'),
('ukrainian23', 'Alex', 'Khomenko', 'alex@protonmail.com'),
('Staan0505', 'Stan', 'Marsh', 'staan@yahoo.com'),
('DoktorCalle', 'Calle', 'Hellevang', 'doktor@gmail.com'),
('Elaadidu', 'Aadidu', 'Dadadah', 'el@yahoo.com'),
('bbeafernandes', 'Bea', 'Fernandez', 'bbea@gmail.com'),
('Kakemonster623', 'Karoline', 'Myrvang', 'kakemonster@yahoo.com'),
('jinimidnight', 'Jim', 'Myrvang', 'jinimi@gmail.com'),
('Siseamdal105', 'Sissel', 'Amdahl', 'siseamdal@yahoo.com'),
('Hafugl', 'Sjur', 'Guttormsen', 'hafugl@gmail.com'),
('MinnieMae22', 'Minnie', 'Mae', 'minnie@yahoo.com'),
('koru5025', 'Kari', 'Rustad', 'koru@gmail.com'),
('Drakehode', 'Daniel', 'Haavik', 'drakehode@yahoo.com'),
('Trentrobi', 'Trent', 'Robinson', 'trent@yahoo.com'),
('FlippyDi', 'Philip', 'Diorno', 'flippy@gmail.com'),
('Usarik', 'Richard', 'Smith', 'usarik@yahoo.com'),
('Brohemad', 'Brede', 'Madlamark', 'brohemad@gmail.com'),
('Panielot', 'Preben', 'Elset', 'panielot@yahoo.com'),
('Sanderv2010', 'Sander', 'Vetvedt', 'sander@gmail.com'),
('strongarm37', 'Ole', 'Lotveit', 'strongarm@yahoo.com'),
('Sh4rkill3r', 'Shawn', 'Mendez', 'sh4rkill3r@gmail.com'),
('FireAnnt', 'Amalie', 'Vik', 'fireannt@yahoo.com'),
('PyroGreta', 'Greta', 'Kinaputt', 'greta@gmail.com'),
('Raging4luv', 'Ravi', 'DJ', 'raging4luv@yahoo.com'),
('Olav', 'Olav', 'Kierulf', 'olav@yahoo.com'),
('RyU2Playz', 'Patrick', 'Greve', 'ryu2playz@gmail.com'),
('Skruff1804', 'Hilde', 'Doris', 'skruff1804@gmail.com'),
('morash2020', 'Morgan', 'Johansson', 'morash2020@yahoo.com'),
('VegardX', 'Vegard', 'Lotveit', 'vegard@gmail.com'),
('Begnamoen', 'Karl', 'Begnamoen', 'begnamoen@yahoo.com'),
('Skjegguara', 'Kenneth Andre', 'Hansen', 'skjegguara@gmail.com'),
('Stusselig', 'Lone', 'Nyløkken', 'lonenylokken@ydombaas.no'),
('EiyVo', 'Eyvind', 'Vonbraaten', 'eiyvo@gmail.com'),
('yuwuumi', 'Yuwu', 'Yumikuna', 'yuwuumi@yahoo.com'),
('Surajsijwali', 'Ramapatrikuna', 'Surajsijwalison', 'surajsijwali@gmail.com'),
('Donutka', 'Nutka', 'Donut', 'donutka@gmail.com'),
('Benjameen1', 'Benjameen1', 'Andersen', 'benjameen1@gmail.com'),
('chickihicki', 'Chickihicki', 'Pedersen', 'chickihicki@yahoo.com'),
('chilinutt', 'Chilinutt', 'Nilsen', 'chilinutt@gmail.com'),
('Killerpat75', 'Killerpat75', 'Kristiansen', 'killerpat75@yahoo.com'),
('LilBoiEli5', 'LilBoiEli5', 'Jensen', 'lilboieli5@gmail.com'),
('newbyeing', 'Newbyeing', 'Karlsen', 'newbyeing@yahoo.com'),
('Pikashika20', 'Pikashika20', 'Jansen', 'pikashika20@gmail.com'),
('StrongKaspa', 'StrongKaspa', 'Stiansen', 'strongkaspa@yahoo.com'),
('KModalen', 'KModalen', 'Kaspersen', 'kmodalen@gmail.com'),
('gibagiba56', 'Gibagiba56', 'Bratli', 'gibagiba56@yahoo.com'),
('leewoongbee', 'Sseongyyong', 'Wong Lee', 'sseongyyong@yahoo.com'),
('lux192', 'Ole Jacob', 'Johansen', 'ole@yahoo.com'),
('ReaperOHH', 'ReaperOHH', 'Fredriksen', 'reaperohh@yahoo.com'),
('SKLB2014', 'SKLB2014', 'Swendsen', 'sklb2014@yahoo.com'),
('Sabvne', 'Sabvne', 'Olsen', 'sabvne@yahoo.com'),
('AriaCatchum', 'AriaCatchum', 'Olsen', 'ariacatchum@yahoo.com'),
('bulldizer84', 'Bulldizer84', 'Olsson', 'bulldizer84@yahoo.com'),
('EmanuelBlaaflat', 'Emanuel', 'Blaflaat', 'emanuel@yahoo.com'),
('Laurits7000', 'Laurits', 'Schoepenhauer', 'laurits@yahoo.com'),
('KongenTommy768', 'KongenTommy768', 'Brattli', 'kongentommy768@yahoo.com'),
('PhoManFuChu', 'PhoManFuChu', 'Pettersen', 'phomanfuchu@yahoo.com'),
('HK094', 'HK094', 'Eriksen', 'hk094@yahoo.com'),
('PitbullCharisma', 'PitbullCharisma', 'Johansen', 'pitbullcharisma@yahoo.com'),
('RoxyThePhoenix', 'RoxyThePhoenix', 'Stiansen', 'roxythephoenix@yahoo.com'),
('Tobiz0rZ', 'Tobias', 'Berg', 'tobias@yahoo.com'),
('Inticketss', 'Inticketss', 'Haugen', 'inticketss@yahoo.com'),
('KevinBlaaflat', 'Kevin', 'Blaflaat', 'kevin@yahoo.com'),
('SyverHM', 'Syver', 'Magnussen', 'syver@yahoo.com'),
('FixatoRzz', 'FixatoRzz', 'Hagen', 'fixatorzz@yahoo.com'),
('Nicegirl123321', 'Lena', 'Andreassen', 'lena@yahoo.com'),
('Snuten2k', 'Snuten2k', 'Jacobsen', 'snuten2k@yahoo.com'),
('Tijgerissnel', 'Tijgerissnel', 'Tollefsen', 'tijgerissnel@yahoo.com'),
('tkfjchx', 'T', 'Solberg', 't@yahoo.com'),
('BaldmenTiktok', 'BaldmenTiktok', 'Moen', 'baldmentiktok@yahoo.com'),
('doctahEmery', 'Emelie', 'Johansen', 'emelie@yahoo.com'),
('grincheux1980', 'Grincheux', 'Gundersen', 'grincheux@yahoo.com'),
('IlllIllll', 'Illl', 'Iversen', 'illl@yahoo.com'),
('JackCharlieHook', 'Jacob', 'Kroksleiven', 'jacob@yahoo.com'),
('jederei', 'Jederei', 'Strøm', 'jederei@yahoo.com'),
('realkingmemo', 'RealKingMemo', 'Moe', 'realkingmemo@yahoo.com'),
('tomsparky2222', 'Tom', 'Knutsen', 'tom@yahoo.com'),
('Xellefel', 'Xellefel', 'Sørensen', 'xellefel@yahoo.com'),
('Flako26', 'Flako26', 'Brattøy', 'flako26@yahoo.com'),
('Foss89632', 'Foss89632', 'Svendsen', 'foss89632@yahoo.com'),
('kakana22', 'Kakana22', 'Petersen', 'kakana22@yahoo.com'),
('LillCold', 'Lill', 'Kolderud', 'lill@yahoo.com'),
('Ninjaerdal121', 'Tobias', 'Erdal', 'tobias@yahoo.com'),
('PokemanCoin1000', 'PokemanCoin1000', 'Paulsen', 'pokemancoin1000@yahoo.com'),
('sk773k', 'Sk773k', 'Halvorsen', 'sk773k@yahoo.com'),
('Abrecricas', 'Abrecricas', 'Peterson', 'abrecricas@yahoo.com'),
('Benito222', 'Benito222', 'Stiansen', 'benito222@yahoo.com'),
('Edrielle', 'Edrielle', 'Petersen', 'edrielle@yahoo.com'),
('IdaHenriette376', 'Ida Henriette', 'Tostrup Neverdal', 'ida@yahoo.com'),
('istvan900', 'Robert', 'Spielmann', 'robert@yahoo.com'),
('jgcolorado', 'JG Colorado', 'Petersen', 'jg@yahoo.com'),
('KrumpinGudOne', 'KrumpinGudOne', 'Olsson', 'krumpin@yahoo.com'),
('mglokss', 'MGlokss', 'Eliassen', 'mglokss@yahoo.com'),
('MysticMacks', 'MysticMacks', 'Olsen', 'mysticmacks@yahoo.com'),
('R3miel7', 'R3miel7', 'Hansen', 'r3miel7@yahoo.com'),
('ReyiCx', 'ReyiCx', 'Hansson', 'reyicx@yahoo.com'),
('Rodraigoxd', 'Tito', 'Rodriguez', 'tito@yahoo.com'),
('s10an2r', 'S10an2r', 'Hansen', 's10an2r@yahoo.com'),
('SanjiSenji', 'Ramapatrikuna', 'Sanjisenjisen', 'ramapatrikuna@yahoo.com'),
('SpaceCowboy', 'SpaceCowboy', 'Swendson', 'spacecowboy@yahoo.com'),
('TherealAnte', 'Ante', 'Kuhmunen', 'ante@yahoo.com'),
('Viktorya1322', 'Viktoria', 'Olsson', 'viktoria@yahoo.com'),
('Delmoria04', 'Delmoria04', 'Swendsen', 'delmoria04@yahoo.com'),
('Hendt09', 'Hendt09', 'Svensen', 'hendt09@yahoo.com'),
('Kokosbollen002', 'Kokosbollen002', 'Svensen', 'kokosbollen002@yahoo.com'),
('Partyman601465', 'Partyman601465', 'Olsen', 'partyman601465@yahoo.com'),
('sdwer88', 'Sdwer88', 'Olsen', 'sdwer88@yahoo.com');

-- Slette tabellen bruker
DROP TABLE Bruker;

-- Vise alle kolonner i tabellen bruker
SELECT *
FROM Bruker;

-- Vise etternavn, fornavn, og epost for alle brukere, alfabetisert på etternavn
SELECT Etternavn,Fornavn,Epost
FROM Bruker 
ORDER BY Etternavn;

-- Opprette tabellen Likes
CREATE TABLE Likes
(
BildeID CHAR(16) NOT NULL,
BrukerID CHAR(20),
CONSTRAINT LikesPK PRIMARY KEY(BildeID, BrukerID),
CONSTRAINT LikesBildeFK FOREIGN KEY(BildeID) REFERENCES Bilde (BildeID),
CONSTRAINT LikesBrukerFK FOREIGN KEY (BrukerID) REFERENCES Bruker (BrukerID)
);

-- Sette inn data i tabellen likes
INSERT INTO Likes(BildeID, BrukerID)
VALUES
('1','Kranjenta'),
('1','Skjegguara'),
('1','IdaHenriette376'),
('1','LillCold'),
('1','Edrielle'),
('1','Nicegirl123321'),
('2','Kranjenta'),
('2','IdaHenriette376'),
('2','Edrielle'),
('3','Nicegirl123321'),
('4','HunterGatherer'),
('2','Xellefel'),
('5','Flako26'),
('4','AlisTheGamer'),
('4','BryllupsfotoAS'),
('XXXXXXXXXXXXXXXX','MarkyMark1977'),
('AAAAAAAAAAAAAAAA','MarkyMark1977'),
('1234123412341234','Vegardinh0'),
('14','BasedViking'),
('14','5lacka'),
('14','Kranjenta'),
('14','GustiMedio'),
('14','sangpus'),
('14','AbsoluttBest'),
('5','14kROSE'),
('0000000000000000','Vegardinh0'),
('09AZthatsit','Gytis777e'),
('11','dadou67'),
('11','Parkseung88'),
('11','JCP43'),
('11','Girnard'),
('11','Hafugl'),
('pic100','VincentDogau');

-- Opprette tabellen Kommentar
CREATE TABLE Kommentar
(
BildeID CHAR(16),
BrukerID CHAR(20),
Kommentar TEXT(300),
CONSTRAINT KommentarPK PRIMARY KEY (BildeID, BrukerID),
CONSTRAINT KommentarBildeIDFK FOREIGN KEY (BildeID) REFERENCES Bilde(BildeID),
CONSTRAINT KommentarBrukerIDFK FOREIGN KEY (BrukerID) REFERENCES Bruker(BrukerID)
);

INSERT INTO Kommentar(BildeID, BrukerID, Kommentar)
VALUES
('1','Kranjenta','fint'),
('1','Skjegguara','flott'),
('1','IdaHenriette376','sjaluu'),
('1','LillCold','FYF HAR DU SETT'),
('1','Edrielle','Beste fargen'),
('1','Nicegirl123321','snakk om valg av kjole'),
('2','IdaHenriette376','Flinkeste og beste på annlegget'),
('2','Edrielle','elskk! gratulerer babe'),
('2','SpaceCowboy','pass på å ikke ødellegg no! gratulerer'),
('4','SpaceCowboy','MELØY ALLTID I MITT HJERTE'),
('4','Kranjenta','Skal lage en bedre vei til den flotte kirka'),
('16','sangpus','har ikke tenkt til det heller'),
('16','Edrielle','Huff gikk det bra eller?'),
('16','IdaHenriette376','Lever ihvertfall da'),
('16','Skjegguara','Skal spille pokemon der jeg'),
('15','Edrielle','FIKK IKKE SVAR,GIKK DET BRA?!'),
('10','AbsoluttBest','Lover godt'),
('6','SpaceCowboy','#VakreMolde'),
('pic100','Skjegguara','Mr DingDong er på rømmen');

-- Opprette tabellen Emneknagg
CREATE TABLE Emneknagg
(
EmneknaggID CHAR(9),
Emneknagg CHAR(30),
CONSTRAINT EmneknaggIDPK PRIMARY KEY(EmneknaggID)
);

INSERT INTO Emneknagg (EmneknaggID, Emneknagg)
VALUES
('1','Funny'),
('2','Music'),
('3','Movies'),
('4','Sports'),
('5','Food'),
('6', 'Travel'),
('7', 'Technology'),
('8', 'Fashion'),
('9', 'Books'),
('10', 'Gaming'),
('11', 'History'),
('12', 'Art'),
('13', 'Science'),
('14', 'Nature'),
('15', 'Health'),
('16', 'Rosemaling'),
('17', 'MoldeFK'),
('18', 'FergaIMolde'),
('19', 'MoldeKommune'),
('20', 'Moldenser'),
('21', 'VisitMolde'),
('22', '#VakreMolde');

-- Opprette tabellen TagForBilde
CREATE TABLE TagForBilde
(
BildeID CHAR(16),
EmneknaggID CHAR(9),
CONSTRAINT TagForBildePK PRIMARY KEY(BildeID, EmneknaggID),
CONSTRAINT BildeIDFK FOREIGN KEY(BildeID) REFERENCES Bilde(BildeID),
CONSTRAINT EmneknaggIDFK FOREIGN KEY(EmneknaggID) REFERENCES Emneknagg(EmneknaggID)
);


INSERT INTO TagForBilde (BildeID, EmneknaggID)
VALUES
('1','1'),
('2','2'),
('3','3'),
('4','4'),
('5','5'),
('6','6'),
('7','7'),
('8','8'),
('9','9'),
('AAAAAAAAAAAAAAAA','10'),
('abcdefghijklmnop','11'),
('facebook','12'),
('halvhalvpart','13'),
('halvpart','14'),
('kanmanvelgeselv0','15'),
('kultaavelge','16'),
('kvartparthalv','14'),
('Nietschze','2'),
('SENDMEMES','5'),
('XXXXXXXXXXXXXXXX','12'),
('M0LD3','17'),
('M00LD','18'),
('MoOlD','19'),
('Moldeh','20'),
('Mholdeeh','21'),
('15','22');


-- ******************************************************
-- OPPGAVE 2 - DEL 2 
-- ******************************************************

-- b) lag en spørring som gir informasjon om alle bilder
SELECT *
FROM Bilde;

-- c) Lag en spørring som viser etternavn, fornavn og epost for alle brukere, 
--    alfabetisert på etternavn
SELECT Etternavn, Fornavn, Epost
FROM Bruker
ORDER BY Etternavn ASC;

-- d) Lag en spørring som viser alle bilder som er lastet opp etter 1.5.2023
SELECT BildeID, OpplastetDato
FROM Bilde
WHERE OpplastetDato > '2023-05-01'
ORDER BY OpplastetDato;

-- e) Lag en spørring som viser antaller brukere av bildedelingstjenestesn
SELECT COUNT(*)
FROM Bruker;

-- f) Lag en spørring som viser alle brukere og teller opp antallet opplastede 
--    bilder for hver bruker. Oversikten skal også vise brukere som ennå ikke 
--    har lastet opp bilder.
SELECT Bruker.BrukerID, COUNT(Bilde.BildeID) AS AntallOpplastedeBilder
FROM Bruker
LEFT JOIN Bilde ON Bruker.BrukerID = Bilde.Fotograf
GROUP BY Bruker.BrukerID
ORDER BY AntallOpplastedeBilder DESC;

-- g) Lag en spørring som gir oversikt over hvilke brukere som aldri har 
--    lastet opp bilder
SELECT Bruker.BrukerID 
FROM Bruker
WHERE Bruker.BrukerID NOT IN (SELECT DISTINCT Fotograf FROM Bilde);dildo

-- h) Lag en spørring som viser hvilke bilder som aldri har vært kommentert
SELECT Bilde.BildeID, Bilde.Beskrivelse
FROM Bilde
LEFT JOIN Kommentar ON Bilde.BildeID = Kommentar.BildeID
WHERE Kommentar.BildeID IS NULL;

-- i) Lag en spørring som viser hvem som "har likt" bildet 'pic100'
SELECT BrukerID
FROM Likes
WHERE BildeID = 'pic100';

-- j) Lag en spørring som teller opp antall likes for alle bilder, 
--    også de bildene som ingen "har likt".
SELECT COUNT(*) AS TotalLike
FROM Likes;

-- k) Lag en spørring som viser alle kommentarer for bildet 'pic100'
SELECT Kommentar
FROM Kommentar
WHERE Kommentar.BildeID = 'pic100';

-- l) Lag en spørring som viser emneknaggID og emneknaggen for alle emneknagger 
--    som inneholder 'Molde'. Resultatet skal sorteres på emneknaggen.
SELECT EmneknaggID, Emneknagg
FROM Emneknagg
WHERE Emneknagg LIKE '%Molde%'
ORDER BY Emneknagg;

-- m) Lag en spørring som viser informasjon om bilder og fotograf for de bildene 
--    som er tagget med emneknaggen '#VakreMolde'.
SELECT Bilde.BildeID, Bilde.Beskrivelse, Bilde.OpplastetDato, Bilde.Fotograf
FROM Bilde
WHERE Bilde.BildeID IN 
(
SELECT BildeID
FROM TagForBilde
WHERE EmneknaggID
IN
(
SELECT EmneknaggID
FROM Emneknagg
WHERE Emneknagg = '#VakreMolde'
)
);

SELECT Bilde.BildeID, Bilde.Beskrivelse, Bilde.OpplastetDato, Bilde.Fotograf
FROM Bilde
INNER JOIN Emneknagg
ON Bilde.BildeID = Emneknagg.EmneknaggID
WHERE Emneknagg='#VakreMolde';

SELECT *
FROM Kommentar;
SELECT *
FROM Bilde;

SELECT B.BildeID, B.Beskrivelse, B.OpplastetDato, B.Fotograf
FROM Bilde AS B
JOIN TagForBilde AS TB ON B.BildeID = TB.BildeID
JOIN Emneknagg AS E ON TB.EmneknaggID = E.EmneknaggID
WHERE E.Emneknagg = '#VakreMolde';

SELECT Bilde.BildeID, Bilde.Beskrivelse, Bilde.OpplastetDato, Bilde.Fotograf
FROM Bilde
JOIN TagForBilde ON Bilde.BildeID = TagForBilde.BildeID
JOIN Emneknagg ON TagForBilde.EmneknaggID = Emneknagg.EmneknaggID
WHERE Emneknagg.Emneknagg = '#VakreMolde';

-- n) Lag en spørring som viser brukerID, fornavn, etternavn og kommentar for
--    alle brukere som har kommentert bilder som er tagget med emneknaggen
--    '#VakreMolde'
SELECT Bruker.BrukerID, Bruker.Fornavn, Bruker.Etternavn, Kommentar.Kommentar
FROM Bruker
JOIN Kommentar ON Bruker.BrukerID = Kommentar.BrukerID
WHERE Kommentar.BildeID IN 
(
SELECT TagForBilde.BildeID 
FROM TagForBilde 
JOIN Emneknagg ON TagForBilde.EmneknaggID = Emneknagg.EmneknaggID
WHERE Emneknagg.EmneknaggID = '#VakreMolde'
);

SELECT DISTINCT Bruker.BrukerID, Bruker.Fornavn, Bruker.Etternavn, Kommentar.Kommentar
FROM Bruker
JOIN Kommentar ON Bruker.BrukerID = Kommentar.BrukerID
JOIN TagForBilde ON Kommentar.BildeID = TagForBilde.BildeID
JOIN Emneknagg ON TagForBilde.EmneknaggID = Emneknagg.EmneknaggID
WHERE Emneknagg.Emneknagg = '#VakreMolde';


-- o) Lag SQL-setningen for å registrere brukeren Kari Karisen med e-postadresse 
--    kari@kari.no og brukerID 'kar100'.
INSERT INTO Bruker (BrukerID, Fornavn, Etternavn, Epost)
VALUES 
('kar100', 'Kari', 'Karisen', 'kari@kari.no');

DELETE FROM Bruker 
WHERE BrukerID = 'kar100';

-- p) Lag View-et MangeLikes som finner bildeID, beskrivelse og opplastet dato 
--    for alle bilder med 100 likes eller flere.
CREATE VIEW MangeLikes AS
SELECT Bilde.BildeID, Bilde.Beskrivelse, Bilde.OpplastetDato
FROM Bilde
WHERE Bilde.BildeID IN
(
SELECT Likes.BildeID
FROM Likes
GROUP BY Likes.BildeID
HAVING COUNT(*) >= 100
);

DROP VIEW MangeLikes;

-- q) Lag SQL-setningen for å opprette brukeren Moderator med passordet 
--    'ghva948'.
CREATE USER 'Moderator' IDENTIFIED BY 'ghva948';

-- r) Lag SQL-setningen for å gi brukeren Moderator sletterettigheter i 
--    tabellen Kommentar.
GRANT DELETE ON Kommentar TO Moderator;

-- s) Lag en spørring som gir oversikt over det bildet/de bildene som har vært 
--    kommentert flest ganger (flere kan altså ha "like mange og flest").
SELECT BildeID, COUNT(*) AS AntallKommentarer
FROM Kommentar
GROUP BY BildeID
ORDER BY AntallKommentarer DESC;

-- t) Brukeren 'kar100' har blitt uvenner med brukeren 'ant100', og vil at alle 
--    kommentarer brukeren 'ant100' har lagt inn på hennes bilder blir slettet. 
--    Lag SQL-setningen for denne slettingen.
DELETE FROM Kommentar
WHERE BrukerID = 'ant100'
AND BildeID IN
(
SELECT BildeID
FROM Bilde
WHERE Fotograf = 'kar100'
);