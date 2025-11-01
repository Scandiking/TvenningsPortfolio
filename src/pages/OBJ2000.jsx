import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import {Image} from "@heroui/image";
import CodeBlock from "../components/CodeBlock";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

const OBJ2000 = () => {
    const navigate = useNavigate();
// --- --- --- --- ---
// oppgave 1A
// --- --- --- --- ---
const oppg1_a = `
// DEL 3 - CASE (JAVA PROGRAMMERINGSOPPGAVE / OOP-DESIGN)

abstract class Animal {
  // Attributter
  // En string variabel for å representere dyrets navn
  protected String name;
  // En konstrukttor som setteer navnet
  public Animal(String name)
  
  // Metoder
  // En abstrakt metode makeSound() som skal implementeres av subklasser
  public abstract void makeSound();
}
`

// --- --- --- --- ---
// oppgave 1B
// --- --- --- --- ---
const oppgave1_b = `
// Lag subklasser dog cat bird
// Da oppgaven implementer bare det viktigste oppgaven spør etter er navn på dyret utelatt

// Subklasse dog
class Dog extends Animal {
@ Override // Overstyringen
public void makeSound() {
  System.out.println("Bjeff"); // Returnert String
  }
}
// Subklasse cat
class Cat extends Animal {
  @ Override
  public void makeSound() {
    System.out.println("Mjau");
  }
}

// Subklasse bird
class Bird extends Animal {
@ Override
public void makeSound() {
  System.out.println("Kvitre")
  }
}
`

// --- --- --- --- ---
// oppgave 1C
// --- --- --- --- ---
const oppgave1_c = `
// Implementer klassen Zoo med følgende funksjoner:
// En liste som lagrer objekter av typen animal
import java.util.ArrayList
import java.util.List
import java.util.Scanner

private List<Animal> animals;
public Zoo() {
animals = new ArrayList<>();
}

// En metode addAnimal(Animal animal) for å legge til et dyr i listen
public void addAnimal(Animal animal) {
  animals.add(animal);
}



// Bruk exception handling for å håndtere feil, for eksempel hvis et dyr har et tomt navn eller null-verdi
try {
 System.out.println("Skriv inn navn på hunden: ");
 String hundenavn = scanner.nextLine(); // antar at Scannerklasse er importert og instansenavnet er scanner
 Dog dog = new Dog(hundenavn);
 zoo.addAnimal
} catch (IllegalArgumentException feil) { // referer til dog-klassen som extender Animal hvor vi finner enkel if statement \`if (name == null || name.isEmpty()) { throw new IllegalArgumentException("Du må skrive inn noe")\`
  System.out.println("Feil: " + feil.getMessage());
}
`

// --- --- --- --- ---
// oppgave 1D
// --- --- --- --- ---
const oppgave1_d = `// Utvid Zoo med rapportfunksjon
// Legg til en metode generateReport() som teller hvor mange dyr det finnes av hver type og skriver dette ut som en rapport

public generateReport() {
  for (Animal animal : animals) {
    if animals.contains(Dog) {
    return animals.length
    dogcount = animals++
    }
  }
  for (Animal animal: animals) {
    if animals.contains(Cat) {
      return animals.length
      catcount = animals++
    }
  }
  for (Animal animal : animals) {
    if animals.contains(Bird) {
      return animals.length
      birdcount = animals++
    }
  }
  }
  
  System.out.println("There are " + dogcount + " dogs");
  System.out.println("There are " + catcount + " cats");
  System.out.println("There are " + birdcount + " birds");
  System.out.println("There are " + dogcount + catcount + birdcount + " animals in the zoo.");
}`

// --- --- --- --- ---
// oppgave 1E
// --- --- --- --- ---
const oppgave1_e = `// Opprett flere objekter av dog cat bird
Cat cat1 = new Cat("Mons")
Dog dog1 = new Dog("Kira")
Bird bird1 = new Bird("Pip")


// Legg til dyrene i dyreparken, inkludert et tilfelle med feilinput
zoo.addAnimal(cat); // Riktig forekomstnavn er cat1, ikke cat
zoo.addAnimal(dog1);
zoo.addAnimal(bird1);

// Kjør metoden makeAllSounds() for å få alle dyrene til å lage lyd
zoo.makeAllSounds(); // gitt at forekomstnavn på Zoo er zoo

// Generer en rapport over antall dyr i dyreparken
zoo.generateReport(); // --- || ---`

const oppgave2 = `

// Oppgave 2 a
// En metode for å fjerne en flate basert på navn
public fjerneFlate() {
  System.out.println("Hva heter flaten du vil fjerne?");
  flateÅFjerne = scanner.nextline(); //utagngspunkt importert scanner
  if flateÅfjerne.equals(Flate flater) {
    for flater where flateÅfjerne
     flater.remove();
  }
}

// Oppgave 2 b
// En metode for å fjerne en malingstype. En malingstype kan bare fjernes dersom ingen flater har referanser til den
public fjerneMalingstype() {
  System.out.println("Hvilken malingstype vil du fjerne?");
  malTypÅFjerne = scanner.nextline();
  if (!malTypÅfjerne references Flate flater) {
    materiale.remove(malTypÅFjerne);
  } else {
    System.out.println("Du kan ikke fjerne en malingstype som refererer til den. Fjern referansene først.");
  }
}

// Oppgave 2 c
// Lag et klientprogram for å prøve ut disse metodene. Få samme utskrift som eksempelutskriften helt til slutt i vedlegget.
oppussing.fjerneFlate();
oppussing.fjerneMalingstype();
`

const dikt_enkel_diktgenerator = `
/*

// Arbeidskrav for anledning til å fremstille seg til eksamen i OBJ2000
// Obligatorisk oppgave 1: Diktgenerator
// Kristian Martin Tvenning
    _____________________________________
    |[] xterm                     |_|-|x|
    |"""""""""""""""""""""""""""""""""|"|
    | $ pwd /home/user/OBJ2000        | |
    | $ ls Enkel_diktgenerator.java   |_|
    | $ javac Enkel_diktgenerator.java|_|
    | $ java Enkel_diktgenerator      |_|
    |_________________________________|/|

Dette er en besvarelse på arbeidskrav for OBJ2000 ved Universitetet i Sørøst-Norge høsten 2024.
1. del er å lage en diktgenerator (med GUI eller uten).
Etter å ha gjort en prosedural versjon som teknisk sett oppfyller kravspesifikasjon har jeg valgt å
prøve på en GUI-løsning i stedet.

    _______________________________________________________________
    |[] Windows PowerShell                                  |_|-|x|
    |"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""|"|
    | PS C:\\Users\\%you%>                                        | |
    | PS C:\\Users\\%you%> cd Downloads                           |_|
    | PS C:\\Users\\%you%\\Downloads> _                            | |
    | PS C:\\Users\\%you%\\Downloads> java Enkel_diktgenerator.java| |
    |___________________________________________________________|/|

// Chat Generative Pre-trained Transformer 4o har bistått til korreks i denne oppgaven.
// Introduction to Java Programming and Data Structures, Y. Daniel Liang har bistått med
// grunnleggende rammeverk (input, processing, output) og konvensjonell rekkefølge.
// Etter vurdering er det tenkt at dette programmet skal publiseres på
// https://github.com/Scandiking
 */


import javax.swing.*; // for GUI
import java.awt.*; // for gbc grid layout
import java.awt.event.ActionEvent; // for å gjøre en handling når knapp blir trykket
import java.awt.event.ActionListener; // for å "lytte" på om knapp blir trykket


// Opprette klassen
public class Enkel_diktgenerator {
    // Tildele main
    public static void main(String[] args) {

        // Uncomment følgende om du foretrekker GUI mer lik din plattform
        // fremfor Java's \`CrossPlatformLookAndFeel\` kalt "Java L&F"/"Metal".
        // Ja, error handlingen er påbudt i dette tilfellet.

        /*
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }
        */

        // Opprette ramme for GUI-komponenter
        JFrame frame = new JFrame("Tvenning-Tech's Enkel diktgenerator v.RC2"); // Titulere vindu for adekvat HCI
        // spesifisere at vi vil bruke GridBag som layout
        frame.setLayout(new GridBagLayout());
        // og opprette GridBagLayout-objektinstans
        GridBagConstraints gbc = new GridBagConstraints(); // Instantiere constraint-objekt med variabelnavn gbc

        // "Bilde" (Memo emoji)
        JLabel illustrasjon = new JLabel("📝");
        // sette fonter med støtte for emoji for å slippe firkant-boks
        illustrasjon.setFont(new Font("Aptos, Noto Sans, SansSerif", Font.PLAIN, 72));
        gbc.gridx = 1;
        gbc.gridy = 0;
        // adde illustrasjon-elementet til frame-frame'n vha gbc-layoutobjektinstansen
        frame.add(illustrasjon, gbc);

        // Opprette knapp for å legge til ord (i ordlista)
        JButton leggTilOrd = new JButton("Legg til ord"); // Opprette knapp
        gbc.gridx=0; // sette grid posisjon på x akse vha GridBagConstraint-objektinstansen vi kalte variabel gbc
        gbc.gridy=1; // sette grid posisjon på y akse
        frame.add(leggTilOrd, gbc); // Hvilken widget som skal addes til hvilken ramme

        JButton enkeltDikt = new JButton("Enkelt dikt"); // Opprette knapp
        gbc.gridx=1; // beveger oss +1 på X-akse (en til høyre)
        gbc.gridy=1;
        frame.add(enkeltDikt, gbc);

        JButton avslutt = new JButton("Avslutt"); // Opprette knapp
        gbc.gridx=2; // beveger oss enda +1 på X-akse (en til høyre for den ene til høyre)
        gbc.gridy=1; // fortsatt samme rad
        frame.add(avslutt, gbc); // legge til widgeten til frame-rammen

        // Selv om vi kan lukke programvinduet uten EXIT_ON_CLOSE og ikke se det mer
        // så kjører fortsatt prosessen. Med EXIT sikrer vi at programmet stenges ordentlig.
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(512, 200); // Sette initiell vindusstørrelse
        frame.setVisible(true); // Vise GUI (sakral del av H i HCI)

        // Action listeners
        leggTilOrd.addActionListener(new ActionListener() {
            // Overstyre en metode fra en superklasse (dette er superklassen)
            @Override
            // Action performed ved å trykke på knappen er...
            public void actionPerformed(ActionEvent e) {
                // ...opneAddWordsWindows()-metoden fra LeggTilOrdVindu-underklassen
                LeggTilOrdVindu.opneAddWordsWindows();
            }
        });

        // samme med enkeltDikt.
        enkeltDikt.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                EnkeltDiktVindu.opneEnkeltDiktVindu();
            }
        });

        avslutt.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // frame.dispose i stedet for EXIT fordi vi bare skal dispose rammen og
                // ikke nødvendigvis avslutte hele programmet
                frame.dispose();
            }
        });

    }
}

// Kristian Martin Tvenning
// Universitetet i Sørøst-Norge 2024
`

const dikt_enkeltdiktvindu = `
// Arbeidskrav for anledning til å fremstille seg til eksamen i OBJ2000
// Obligatorisk oppgave 1: Diktgenerator
// Kristian Martin Tvenning

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class EnkeltDiktVindu {
    public static void opneEnkeltDiktVindu() {
        // Opprette ramme
        JFrame enkeltDiktFrame = new JFrame("Enkelt dikt");
        // Opprette gbc som grid manager
        enkeltDiktFrame.setLayout(new GridBagLayout());
        // Instantiere gbc ojekt
        GridBagConstraints gbc = new GridBagConstraints();

        enkeltDiktFrame.setSize(500, 400);
        enkeltDiktFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        enkeltDiktFrame.setVisible(true);

        // Opprette område hvor diktet skal vises
        JTextArea poemArea = new JTextArea(6, 20);
        // Skal kun vise tekst, derfor ikke editable
        poemArea.setEditable(false);
        // Setter font og størrelse
        // Fonten erstattes med generisk font om den ikke finnes på brukerens datamaskin
        poemArea.setFont(new Font("Roboto", Font.PLAIN, 16));
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        gbc.fill = GridBagConstraints.BOTH;
        enkeltDiktFrame.add(new JScrollPane(poemArea), gbc);

        // Legge inn knapper
        // "Lag dikt fra ordlisten"
        JButton lagDikt = new JButton("Lag dikt fra ordlisten");
        gbc.gridx = 0;
        gbc.gridy = 2;
        enkeltDiktFrame.add(lagDikt, gbc);

        // Avbryt
        JButton avbryt = new JButton("Avbryt");
        gbc.gridx = 0;
        gbc.gridy = 3;
        enkeltDiktFrame.add(avbryt, gbc);

        avbryt.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                enkeltDiktFrame.dispose();
            }

        });

        // Hente ord fra array
        LeggTilOrdVindu leggTilOrd = new LeggTilOrdVindu();
        String[] wordsArray = leggTilOrd.getWordsArray();

        lagDikt.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
            // Ingen ord, intet dikt.
            if (wordsArray == null || wordsArray.length == 0) {
                JOptionPane.showMessageDialog(enkeltDiktFrame, "Ingen ord tilgjengelig. Legg til ord først!");
                return;
            }

            // Opprette en liste med strings fra arrayet
            List<String> wordList = new ArrayList<>(Arrays.asList(wordsArray));
            // Røre rundt på rekkefølgen
            Collections.shuffle(wordList);

            // så lenge wordList er under 16 ord
            while (wordList.size() < 16) {
                // legg til flere ord
                wordList.addAll(Arrays.asList(wordsArray));
            }

            // Bruke StringBuilder fremfor konkatenasjon for ytelse (fordi vi slipper å skape nye objekter for hver string)
            // StringBuilder skal vi bruke for å legge til tekst i poemArea.
            StringBuilder poem = new StringBuilder(); // instantierer objekt
            // 4 ord på 4 linjer er 16 ord
            // derfor øker vi i med 1 for hvert ord
            for (int i = 0; i <16; i++) {
                // etter wordList har 16 elementer appendes dette til poem-StringBuilderobjektet
                poem.append(wordList.get(i));

                // Algoritmen for diktstrukturen
                // Vi kan enkelt sette inn newlinekarakteren for å få en ny linje etter hvert fjerde ord ved å bruke
                if ((i + 1) % 4 == 0) {
                    // og om regnestykket stemmer setter vi inn ny linje
                    poem.append("\\n");
                } else {
                    // ellers setter vi bare inn mellomrom til if-testen blir true
                    poem.append(" ");
                }
            }

            // Gjør om dikt til string og setText inn i poemArea
            poemArea.setText(poem.toString());

            }
        });


    }


}

// Kristian Martin Tvenning
`

const dikt_leggtilordvindu = `
// Arbeidskrav for anledning til å fremstille seg til eksamen i OBJ2000
// Obligatorisk oppgave 1: Diktgenerator
// Kristian Martin Tvenning

// Tilretteleggelse
import javax.swing.*; // for GUI
import java.awt.*; // for GUI (spesifikt GridBagLayout)
import java.awt.event.ActionEvent; // * importerer ikke underpakker så vi importerer dem spesifikt
import java.awt.event.ActionListener; // ActionEvent og -Listener behøves for JButton-funksjoner vi skal bruke

public class LeggTilOrdVindu {

    // Opprette array for tekststrenger (ordliste)
    private static String[] wordsArray;

    public static void opneAddWordsWindows() {
        // Opprette rammen leggTilOrdFrame og titulere den "Legg til ord"
        JFrame leggTilOrdFrame = new JFrame("Legg til ord");
        // sette Layout som manager og opprette GridBagLayoutobjekt
        leggTilOrdFrame.setLayout(new GridBagLayout());
        // Opprette objektinstans kalt gbc
        GridBagConstraints gbc = new GridBagConstraints();

        JTextField[] wordFields = new JTextField[16];


        // I stedet for å legge til 16 forskjellige JLabels bruker vi en for-løkke med counter og ++
        for (int i = 0; i < 16; i++) {
            // Kolonneplassering horisontal er konstant så den er 0
            gbc.gridx = 0;
            // Kolonneplassering vertikalt er variabel i
            gbc.gridy = i;


            // Justering for at "Ord 1: " label skal være som de andre:
            gbc.fill = GridBagConstraints.NONE;
            // "Ankre" label-tekst til høyre i kolonnen
            gbc.anchor = GridBagConstraints.LINE_END;
            // sette inn "Ord 1:, Ord 2:, osv
            leggTilOrdFrame.add(new JLabel("Ord " + (i + 1) + ": "), gbc);

            gbc.weightx = 1.0;
            gbc.weighty = 1.0;

            // Løkken brukes også for JTextField
            // men vi setter JTextField i kolonne 2, indeks 1
            gbc.gridx = 1;
            // og sier at JTextField skaleres iht kolonnestørrelsen i vinduet ("strekkes")
            gbc.fill = GridBagConstraints.HORIZONTAL;
            wordFields[i] = new JTextField(20);
            leggTilOrdFrame.add(wordFields[i], gbc);
        }

        // Avbryt-knapp
        JButton cancelButton = new JButton("Avbryt");
        gbc.gridx=2;
        gbc.gridy = 18;
        // gbc distribuerer ikke knappebredde jevnt så la oss spesifisere at
        gbc.weightx = 0.5;
        // og add'e cancelButton til i leggTilOrdFrame
        leggTilOrdFrame.add(cancelButton, gbc);

        // Knapp for å gjennomføre handling (legge til i ordlista som skal brukes for nytt dikt)
        JButton submitButton = new JButton("Legg inn ord");
        // Hvor "Legg inn ord"-knappen skal plasseres
        gbc.gridx = 3;
        gbc.gridy = 18;
        // Ledeteksten har en gridwidth på 2 og weightx for cancelButton er satt til 0.5
        // så la oss sette submitButton til 0.5 for 50/50 fordeling av knappestørrelse
        gbc.weightx = 0.5;
        // Adde submitButton til leggTilOrdFrame'n
        leggTilOrdFrame.add(submitButton, gbc);

        // Legge vekt på gode ledetekster for bruker
        JTextArea ledetekst = new JTextArea(" Du må skrive inn minst ett ord.\\n " +
                "Det fungerer best med mellom seks og åtte ord.");
        // Skal bare vise tekst og ikke noe vits i å forandre teksten
        ledetekst.setEditable(false);
        // JTextArea gir hvit bakgrunnsfarge og "monospace font" og det er ikke ønskelig for gjennomgående grafisk tema
        // og derfor setter vi bakgrunn ved å gette bakgrunnen til contentpane fra leggTilOrdFrame
        ledetekst.setBackground(leggTilOrdFrame.getContentPane().getBackground());
        gbc.gridx = 2;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        gbc.gridheight = 2;
        leggTilOrdFrame.add(ledetekst, gbc);

        // Legge vekt på gode ledetekster for bruker
        // "Felle" er å skrive inn bare substantiver
        JTextArea ledetekst2 = new JTextArea(" Prøv å varier mellom ordklasser.\\n" +
                " Varier bruk av substantiver, verb og adjektiv.");
        ledetekst2.setEditable(false);
        // Sette JTextArea til samme farge som frame for en mer gjennomgående look and feel
        ledetekst2.setBackground(leggTilOrdFrame.getContentPane().getBackground());
        gbc.gridx = 2;
        gbc.gridy = 4;
        // Spesifisere tekstens utstrekking i GUI-laget (sprer utover 2 kolonner og rader)
        gbc.gridwidth = 2;
        gbc.gridheight = 2;
        // og adder ledetekst 2 til leggTilOrdFramen via GridBagConstrains
        leggTilOrdFrame.add(ledetekst2, gbc);

        // submit "leverer inn" ordene til ordlista
        submitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String[] tempArray = new String[16];
                int wordCount = 0;
                for (int i = 0; i < 16; i++) {
                    String word = wordFields[i].getText().trim();
                    if (!word.isEmpty()) {
                        tempArray[wordCount++] = word;
                    }
                }
                if (wordCount < 1) {
                    // om wordCount er < 1 får man beskjed om at man trenger minst ett ord for å lage dikt
                    // men gir ledetekst for "bedre dikt"
                    JOptionPane.showMessageDialog(leggTilOrdFrame, "Du må fylle inn minst et ord.\\n " +
                            "Fra og med 6 til og med 8 fungerer best.");
                } else {
                    wordsArray = new String[wordCount];
                    System.arraycopy(tempArray, 0, wordsArray, 0, wordCount);
                    // Kontrollprint:
                    // System.out.println("Ord som har blitt tastet inn: " + String.join(", ", wordsArray));
                    // Ledetekst som bekrefter brukerens handling
                    JOptionPane.showMessageDialog(leggTilOrdFrame, "Ord lagt til!");
                    leggTilOrdFrame.dispose();
                }
            }
        });

        cancelButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                leggTilOrdFrame.dispose();

            }
        });



        leggTilOrdFrame.setSize(600, 512);
        leggTilOrdFrame.setVisible(true);

    }

    public static String[] getWordsArray() {
        return wordsArray;
    }

}
`

// ----------------------------------
// OBLIGATORISK OPPGAVE 2: DATAKLYNGE
// ----------------------------------

const dataklynge_dataklynge = `
// Arbeidskrav for anledning til å fremstille seg til eksamen i OBJ2000
// Obligatorisk oppgave 2: Dataklynge
// Kristian Martin Tvenning

import java.util.ArrayList;

public class Dataklynge {

    // Antall noderPerRack
    // final for optimering
    private final int noderPerRack;
    // Liste for racks
    private final ArrayList<Rack> racks;

    // Oppretter ny instans av dataklynge medfølgende attributter
    public Dataklynge(int noderPerRackArg) {
        this.noderPerRack = noderPerRackArg;
        // ArrayList for å holde rede på rack i dataklyngen
        this.racks = new ArrayList<>();
        // legge til rack i dataklyngen med gitt antall noder i gjeldende rack
        this.racks.add(new Rack(noderPerRack));
    }

    // Metode for å legge til enkelt node
    public void nyNode(int minne, int prosessorer) {
        // Opprette ny instans av Node-objekt med gitt minne, prosessorer
        Node nyNode = new Node(minne, prosessorer);
        // Legg til nyNode i ledig rack vha leggTilNodeiAvailableRack-metoden
        leggTilNodeiAvailableRack(nyNode);
    }

    // Metode for å legge til flere noder med gitt minne, prosessorer
    public void nyeNoder(int antallNoder, int minne, int prosessorer) {
        // og går igjennom løkka for hver gang i er < antallNoder, og kjører nyNode-metoden
        // til i != < antallNoder.
        for (int i = 0; i < antallNoder; i++) {
            nyNode(minne, prosessorer);
        }
    }

    // Endring fra datastrukturtegning
    private void leggTilNodeiAvailableRack(Node node) {
        // for-each loop for å finne rack med ledig plass til noder
        for (Rack rack : racks) {
            if (rack.leggTilNode(node)) {
                // om return == true, legges nodene til i det ledige racket
                return;
            }
        }
        // ellers opprettes ny instans av Rack-objekt
        Rack nyttRack = new Rack(noderPerRack);
        // hvor man legger til nodene
        nyttRack.leggTilNode(node);
        // og legger dette til i arrayListen
        racks.add(nyttRack);
    }


    public int antNoder() {
        int totalNoder = 0;
        for (Rack rack : racks) {
            totalNoder += rack.getAntallNoder();
        }
        return totalNoder;
    }

    // "Lag en metode antProsessorer i Dataklynge som returnerer det totale antall prosessorer i dataklyngen"
    public int antProsessorer() {
        // setter initiell verdi
        int totalProsessorer = 0;
        // for each løkke som sjekker array
        for (Rack rack : racks) {
            // reiterer initialverdien med addisjonstilordningsoperator (Liang, 2022, s. 78)
            totalProsessorer += rack.antProsessorer();
        }
        // og returnerer resultatet etter å ha gått ut av for-each-løkka
        return totalProsessorer;
    }

    // Til print i hovedprogram for "Antall racks: {tall} vha .size
    public int antRacks() {
        // bruker .size for å "telle" elementer i array
        return racks.size();
    }

    // Til print i hovedprogram for "noder med minst x GB: {tall}
    public int noderMedNokMinne(int paakrevdMinne) {
        // gjentar fra i sted ved å sette initialverdi
        int antallNoderMedNokMinne = 0;
        // sjekker vha løkke
        for (Rack rack : racks) {
            // og bruker addisjonstilordningsoperator for å reiterere initialverdien til en endelig verdi
            antallNoderMedNokMinne += rack.noderMedNokMinne(paakrevdMinne);
        }
        // og returnerer endelig verdi
        return antallNoderMedNokMinne;
    }

    // Returnerer etterspurt info iht datastrukturtegning og legger til "hjelpetekst for mennesker" i stedet for å kun
    // vise tilsynelatende tilfeldige tall


    @Override
    public String toString() {
        return "Dataklynge: " +
                "\\nAntall racks: " + antRacks() +
                "\\nAntall noder: " + antNoder() +
                "\\nAntall prosessorer: " + antProsessorer();
    }

}
`

const dataklynge_node = `
// Arbeidskrav for anledning til å fremstille seg til eksamen i OBJ2000
// Obligatorisk oppgave 2: Dataklynge
// Kristian Martin Tvenning

public class Node {

    // navn minne, type int
    // final pga optimalisering, og i praksis konstant (minneallokering)
    private final int minne;
    // navn prosessorer, type int
    private final int antProsessorer;


    // Noder
    public Node(int minne, int antProsessorer) {
        this.minne = minne;
        this.antProsessorer = antProsessorer;
    }

    // metode for å hente RAM
    public int getMinne() {
        return minne;
    }

    // metode for å hente antall prosessorer
    public int getAntProsessorer() {
        return antProsessorer;
    }

    // toString metode for human computer interaction
    @Override
    public String toString() {
        return "Node med " + minne + " GB minne og " + antProsessorer + " prosessorer";
    }
}

`

const dataklynge_rack = `
// Arbeidskrav for anledning til å fremstille seg til eksamen i OBJ2000
// Obligatorisk oppgave 2: Dataklynge
// Kristian Martin Tvenning

// ArrayList for å holde rede på noder
import java.util.ArrayList;
public class Rack {
    // hva som er maks antall noder i racket
    // final modifier pga ytelse fra kompilator
    private final int maksNoder;
    // ArrayList for å holde rede på nodene
    // final modifier pga ytelse fra kompilator
    private final ArrayList<Node> noder;


    // Konstruktør
    public Rack(int maksNoder) {
        // Initialiserer maksNoder-variabel
        this.maksNoder = maksNoder;
        // Initialiserer ArrayListen (tom)
        this.noder = new ArrayList<>();
    }

    // Metoder
    // Legge til node i rack
    public boolean leggTilNode(Node node) {
        // Om size i maksNoder-listen er < maksNoder et rack kan ha
        // (som spesifiseres i tekstfilen "Dataklynge.txt")
        if (noder.size() < maksNoder) {
            // så legger vi til node i noder-ArrayListen
            noder.add(node);
            return true;
        }
        // om racket er fullt får vi false
        return false;
    }

    // antall noder lagret i racket ved å bruke .size() av noder-arrayListen
    public int getAntallNoder() {
        return noder.size();
    }

    // antall prosessorer i et rack
    public int antProsessorer() {
        // initiell verdi (starter å telle på 0)
        int totalProsessorer = 0;
        // går igjennom lista med noder fra hver instans av Node-objekt
        for (Node node : noder) {
            // og legger til tallet fra getAntProsessorer i totalProsessorer-variabeln
            totalProsessorer += node.getAntProsessorer();
        }
        // og til slutt returnerer resultatet av denne tellingen
        return totalProsessorer;
    }


    public int noderMedNokMinne(int paakrevdMinne) {
        // setter initiell verdi
        int antall = 0;
        // går gjennom noder-ArrayListen for hver instans av Node-klassen
        for (Node node : noder) {
            // og om minnet som gettes er større eller lik ppakrevdMinne...
            if (node.getMinne() >= paakrevdMinne) {
                // ... legges dette til i antall-lista
                antall++;
            }
        }
        // og returnerer antall
        return antall;
    }

    @Override
    // String for human computer interaction
    // praktisk bruk av klassens attributter
    public String toString() {
        return "Legg til noder: " + noder + "Maks noder: " + maksNoder;
    }
}

`

const dataklynge_hovedprogram = `
/*
Arbeidskrav for anledning til å fremstille seg til eksamen i OBJ2000
Obligatorisk oppgave 2: Dataklynge
Kristian Martin Tvenning

_______________________________________________________
| [C:\\] cmd.exe                                 |_|-|X|
|"""""""""""""""""""""""""""""""""""""""""""""""""""|^|
| Microsoft Windows [Version 10.0.22631.4317]       |"|
| C:\\Users\\%you%>                                   | |
| C:\\Users\\%you%>cd Downloads                       | |
| C:\\Users\\%you%\\Downloads> javac Hovedprogram.java | |
| C:\\Users\\%you%\\Downloads> java Hovedprogram       | |
| Noder med minst 32 GB:  666                       | |
| Noder med minst 64 GB:  666                       | |
| Noder med minst 128 GB:  16                       | |
| Antall prosessorer:     682                       | |
| Antall racks:            56                       | |
|                                                   | |
| C:\\Users\\%you%\\Downloads>_                        |_|
|___________________________________________________|v|

ASCII-art inspirert av første oppføring på https://www.asciiart.eu/computers/amiga,
men skrevet selv. Ikke kopiert.

------------------------------
Disclaimer: Chat Generative Pre-trained Transformer 4o og JetBrains AI Assistant har bistått i utformingen av denne
besvarelsen, men kun i "detaljform" f.eks ved autocomplete av import-setninger eller å se gjennom
"dumme idiotfeil" som manglende krøllparanteser her og der, men ikke som i "bruk av AI til en komplett løsning av
arbeidskravet er en dårlig idé". Denne teksten er her pga "bruker du delvis kode eller får delvis hjelp fra et verktøy,
så er det etisk riktig å referere til dette".
------------------------------

For å kjøre programmet kompilerer man Hovedprogram via terminal og kjører det.
Det som er viktig er å ha alle fire filene i samme mappe. Altså Dataklynge.java, Hovedprogram.java, Node.java og Rack.java
I samme mappe som de forenevnte filene er kjører man følgende i terminalen:
> javac Hovedprogram.java   // for å kompilere
> java Hovedprogram         // for å kjøre
 */


import java.io.File; // for å lese fra fil i deloppgave E
import java.io.FileNotFoundException; // for å si fra til bruker om filen mangler
import java.util.Scanner; // for å skanne tall (lese integere)

public class Hovedprogram {
    public static void main(String[] args) {
        /*
        // Kontrollprinter:
        System.out.println("---");

        Node node = new Node(64, 2);
        System.out.println("Node: " + node);

        Rack rack = new Rack(2);
        System.out.println("Rack: " + rack);

        Dataklynge dataklynge = new Dataklynge(12);
        System.out.println("Dataklynge: " + dataklynge);

        System.out.println("---");
        */

        // java.io.File har obligatorisk try/catch-blokk
        try {
            // Vi prøver å lese fra fil "dataklynge.txt"
            // og oppretter en dataklynge Abel
            // filnavn som parameter
            Dataklynge abel = lesFraFil("Dataklynge.txt");

            // Kontroll for å se om feilmelding fungerer som tiltenkt:
            // Dataklynge abel = lesFraFil("dataklump.txt");


            // Dataklynge-klassens metode noderMedNokMinne for objektinstansen Abel
            int noderMinst32GB = abel.noderMedNokMinne(32);
            int noderMinst64GB = abel.noderMedNokMinne(64);
            int noderMinst128GB = abel.noderMedNokMinne(128);

            // Dataklynge-klassens metode antProsessorer for objektinstansen Abel
            int totaltAntallProsessorer = abel.antProsessorer();
            // Dataklynge-klassens metode antRacks for objektinstansen Abel
            int totaltAntallRacks = abel.antRacks();

            // Etterspurt print
            // IDE kan gi "falsk positiv" om svake feil om variabler som aldri blir brukt.
            // Det er fordi de er kommentert ut.
            /*
            System.out.println("Noder med minst 32 GB RAM: " + noderMinst32GB);
            System.out.println("Noder med minst 64 GB: " + noderMinst64GB);
            System.out.println("Noder med minst 128 GB: " + noderMinst128GB);
            System.out.println("Antall prosessorer: " + totaltAntallProsessorer);
            System.out.println("Antall rack: " + totaltAntallRacks);
            */


        // Om vi ikke finner filen sier vi det til brukeren
        // og bruker e for error
        // og printer e for feilkode til bruk for feilsøking
        } catch (FileNotFoundException e) {
            System.out.println("Filen ble ikke funnet. Feilkode:\\n" + e);
        }
    }

    // Statisk metode lesFraFil
    public static Dataklynge lesFraFil(String fil) throws FileNotFoundException {
        // Instansiere skannerobjekt, kaller instansen filskanner
        Scanner filskanner = new Scanner(new File("Dataklynge.txt"));
        // lese integertall
        // max antall noder per rack (første tall i tekstfil alene på første linje)
        int noderPerRack = filskanner.nextInt();
        // Opprette ny dataklynge
        Dataklynge dataklynge = new Dataklynge(noderPerRack);

        // Fra fil Dataklynge.txt
        System.out.println("Fra filen " + fil + " finner vi:");
        // Nummerere racknummer ved å sette initialverdi
        int rackNummer = 1;

        // så lenge filskanner hasNext hvor token er hva som helst:
        while (filskanner.hasNext()) {
            // ...les neste heltall
            int antallNoder = filskanner.nextInt(); // antall noder (første tall andre linje)
            int minnePerNode = filskanner.nextInt(); // minne per node (andre tall andre linje)
            int antallProsessorerPerNode = filskanner.nextInt(); // antall prosessorer per node (tredje tall andre linje

            System.out.println("\\nRack " + rackNummer + ":");
            System.out.println(" - Antall noder: " + antallNoder);
            System.out.println(" - Minne noder:  " + minnePerNode);
            System.out.println(" - Prosessorer:  " + antallProsessorerPerNode);


            // Øke racknummer med +1 for hver gjennomgang av løkka (som utenfor løkka er 1) slik at rackNummer
            // som nå er tilordnet heltall 1 legges til tilorndet verdi +1 (1+1)
            rackNummer++;

            // "andre linje" er første gang i while-løkka, neste linje blir da tredje linje i fila (altså 16, 1024, 2)
            dataklynge.nyeNoder(antallNoder, minnePerNode, antallProsessorerPerNode);
        }

        filskanner.close(); // stenge fil for ordentlig håndtering av datastrømmer
        return dataklynge; // returnere sett med tall fra dataklyngeklassen sin metode nyeNoder




    }
}
// Disclaimer: Chat Generative Pre-trained Transformer 4o og JetBrains AI Assistant har bistått i utformingen av denne
// besvarelsen, men kun i "detaljform" f.eks ved autocomplete av import-setninger eller å se gjennom
// "dumme idiotfeil" som manglende krøllparanteser her og der, men ikke som i "bruk av AI til en komplett løsning av
// arbeidskravet er en dårlig idé".
// Denne teksten er her pga "bruker du delvis kode eller får delvis hjelp fra et verktøy, så er det etisk
// riktig å referere til dette".
`

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/obj2000')}>Objektorientert programmering 1</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">Objektorientert programmering 1</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">OBJ2000 H24, Arbeidskrav</h2></CardHeader>
                            <CardBody>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/OBJ2000/Arbeidskrav_H2024_OBJ2000.pdf"
                                        width="100%"
                                        height="600px"
                                        title="OBJ2000 Arbeidskrav 1"
                                        className="border-0"
                                    />
                                </div>

                                <h2 className="text-lg font-semibold">Obligatorisk oppgave 1: Diktgenerator</h2>

                                <p>Enkel_diktgenerator.java:</p>

                                <CodeBlock
                                    code={dikt_enkel_diktgenerator}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <p>EnkeltDiktVindu.java</p>

                                <CodeBlock
                                    code={dikt_enkeltdiktvindu}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <p>LeggTilOrdVindu.java</p>

                                <CodeBlock
                                    code={dikt_leggtilordvindu}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <h2 className="text-lg font-semibold">Obligatorisk oppgave 2: Dataklynge</h2>

                                <p>Dataklynge.java</p>
                                <CodeBlock code={dataklynge_dataklynge} language="java" showLineNumbers={true} maxHeight="500px"/>
                                <p>Node.java</p>
                                <CodeBlock code={dataklynge_node} language="java" showLineNumbers={true} maxHeight="500px"/>
                                <p>Rack.java</p>
                                <CodeBlock code={dataklynge_rack} language="java" showLineNumbers={true} maxHeight="500px"/>
                                <p>Hovedprogram.java</p>
                                <CodeBlock code={dataklynge_hovedprogram} language="java" showLineNumbers={true} maxHeight="500px"/>

                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">En to tre</h2></CardHeader>
                            <CardBody>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/OBJ2000/OBJ2000-1%20Objektorientert%20programmering%201%2017.12.2024.pdf"
                                        width="100%"
                                        height="600px"
                                        title="OBJ2000 Eksamen"
                                        className="border-0"
                                    />
                                </div>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/OBJ2000/OBJ2000-Eksamen.pdf"
                                        width="100%"
                                        height="600px"
                                        title="OBJ2000 Eksamen"
                                        className="border-0"
                                    />
                                </div>

                                <p>Oppgave 1a:</p>
                                <CodeBlock
                                    code={oppg1_a}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <p>Oppgave 1b:</p>
                                <CodeBlock
                                    code={oppgave1_b}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <p>Oppgave 1c:</p>
                                <CodeBlock
                                    code={oppgave1_c}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <p>Oppgave 1d:</p>
                                <CodeBlock
                                    code={oppgave1_d}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <p>Oppgave 1e:</p>
                                <CodeBlock
                                    code={oppgave1_e}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />

                                <p>Oppgave 2:</p>
                                <CodeBlock
                                    code={oppgave2}
                                    language="java"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />


                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </div>
    );
};

export default OBJ2000;