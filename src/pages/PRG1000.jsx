import React from 'react';
import {Tabs, Tab} from "@heroui/tabs";
import {Card, CardBody, CardHeader} from "@heroui/card";
// import {Image} from "@heroui/image";
// import {Image} from "heroui/react";
import CodeBlock from "../components/CodeBlock";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";


const PRG1000 = () => {
    const navigate = useNavigate();

    const arbkrav1code = `# Obligatorisk arbeidskrav, individuell, innlevering 1
# Strømberegning

# While-løkke for programreprise
program_restart = 'j'
while program_restart == 'j':
    
    # Inndata
    strompris = int(input('Hva koster strømmen? Oppgi i øre: '))
    stromforbruk = int(input('Hvor mye har du brukt? Oppgi i kwh: '))
    stromstotte = 1.0

    # Beregning
    # Strømpris over eller lik 70 øre/kWh og forbruk under 5k kWh
    if strompris >=70 and stromforbruk < 5000:
        stromstotte = 0.1
        kostnad = (strompris * stromforbruk) * stromstotte
        kostnad_kr = kostnad/100
        # Viser bruker angitte og utregnede priser
        print(f'Strømpris: {strompris} øre/kWh')
        print(f'Strømforbruk: {stromforbruk} kWh')
        print(f'Du får 90% avslag.')
        print(f'Total kostnad: {kostnad_kr:.2f} kr')
    else:
        # Strømpris over eller lik 70 øre og forbruk over eller lik 5k kWh
        if strompris >=70 and stromforbruk >=5000:
            # Regner ut første del
            stromstotte = 0.1
            rabattpris = 5000 * strompris * stromstotte
            # Regner ut andre del
            gjenv_forbruk = stromforbruk - 5000
            gjenv_pris = gjenv_forbruk * strompris
            kostnad = rabattpris + gjenv_pris
            # Viser bruker angitte og utregnede priser
            print(f'Strømpris: {strompris} øre/kWh')
            print(f'Strømforbruk: {stromforbruk} kWh')
            print('Du får 90% avslag på de første 5000 kWh.')
            print(f'Kostnad for de første 5000 kWh etter støtte: {rabattpris / 100 :.2f} kr')
            print(f'Kostnad for de siste {gjenv_forbruk} kWh uten støtte: {gjenv_pris / 100 :.2f} kr')
            print(f'Total kostnad: {kostnad / 100:.2f} kr')
        else:
            # Strømpris under 70 øre
            if strompris <70 and stromforbruk>5000:
                kostnad = strompris * stromforbruk
                print(f'Strømpris: {strompris} øre/kWh')
                print(f'Strømforbruk: {stromforbruk} kWh')
                print('Du får ikke avslag.')
                print(f'Total kostnad: {kostnad / 100:.2f} kr')
            # Strømpris under 70 øre, filler for programkart
            else:
                kostnad = strompris * stromforbruk
                print(f'Strømpris: {strompris} øre/kWh')
                print(f'Strømforbruk: {stromforbruk} kWh')
                print('Du får ikke avslag.')
                print(f'Total kostnad: {kostnad / 100:.2f} kr')
    # Linje for bedre lesbarhet ved gjentatt kjøring
    print('-'*50)
    # Spørre bruker om restart av program
    program_restart = input('Vil du kjøre programmet en gang til? (j/n): ')

# Informere bruker om at programmet er avsluttet.
print('Program avsluttet.')
`
// ---------------------------------------------------
/* ARBEIDSKRAV 2*/
// ---------------------------------------------------


const arbkrav2code = `# Arbeidskrav 2 - NPRTK

# ************************************************
# STARTMENY 
# ************************************************

# Vise meny
def hovedmeny():
    print('/**----------------------------------------------**\\\\')
    print('| Velkommen til Norsk Parson Russell Terrier Klubb |')
    print('\\**----------------------------------------------**/')
    print()
    print("Tast [1]+[enter] for å legge til ny hundeeier.")
    print("Tast [2]+[enter] for å legge til ny hund.")
    print("Tast [3]+[enter] for å slette hundeeier.")
    print("Tast [4]+[enter] for å skrive ut liste over alle hunder fra oppdretter.")
    print("Tast [9]+[enter] for å avslutte program. ")
    print()

# ************************************************
# LEGGE TIL HUNDEEIER
# ************************************************

#Legge til hundeeier, men bare om hundeeier_ID ikke finnes fra før

def legge_til_hundeeier():

    # Create a variable to control the loop
    enda_en_hundeeier = True

    while enda_en_hundeeier:
        # Get the data to be entered:
        print()
        print('Tast inn følgende data:')
        hundeeier_ID = input('HundeeierID: ')

        # Check if dog owner ID already exists
        hundeeier_finnes = False
        with open('hundeeier.txt', 'r') as hundeeier_fil:
            for line in hundeeier_fil:
                if line.strip() == hundeeier_ID:
                    hundeeier_finnes = True

        # If dog owner ID doesn't exist, add the entry to the file
        if not hundeeier_finnes:
            hundeeier_fornavn = input('Hundeeierens fornavn: ')
            hundeeier_etternavn = input('Hundeeierens etternavn: ')
            with open('hundeeier.txt', 'a') as hundeeier_fil:
                hundeeier_fil.write(f'{hundeeier_ID}\\n')
                hundeeier_fil.write(f'{hundeeier_fornavn}\\n')
                hundeeier_fil.write(f'{hundeeier_etternavn}\\n')

                print('***********************')
                print('* Hundeeier lagt til! *')
                print('***********************')

        else:
            print('******************************')
            print('* Hundeeier finnes allerede! *')
            print('******************************')

        # Check if the user wants to add another dog owner
        enda_en_eier = input('Legge til enda en eier? (y/n): ')
        if enda_en_eier.lower() != 'y':
            enda_en_hundeeier = False
        


# ************************************************
# LEGGE TIL HUND 
# ************************************************

# Legge til hund, men bare om
# - hunden ikke finnes fra før
# - oppdretter finnes fra før
# - eier finnes fra før
# før hunden registreres
    
def legge_til_hund():

    # Create a variable to control the loop
    enda_en_hund = True

    while enda_en_hund:
        #Get the data to be entered:
        print()
        print('Tast inn følgende data: ')
        hund_id = input('HundeID: ')

        #Sjekk om hund_id allerede finnes
        hund_id_finnes = False
        with open('hund.txt', 'r') as hund_fil:
            for line in hund_fil:
                if line.strip() == hund_id:
                    hund_id_finnes = True
    
        if hund_id_finnes:
            print('************************')
            print('Hunden finnes allerede! ')
            print('************************')
            enda_en_hund = input('Legge til ny hund? (y/n): ')
            if enda_en_hund != 'y':
                enda_en_hund = False

        if not hund_id_finnes:
        # Sjekk om oppdretter finnes fra før
            oppdr_finnes = False
            oppdr_id=input('OppdretterID: ')
            with open('oppdretter.txt', 'r') as oppdr_fil:
                for line in oppdr_fil:
                    if line.strip() == oppdr_id:
                        oppdr_finnes = True
            if not oppdr_finnes:
                print('Oppdretter finnes ikke. Hunden kan ikke l3gges til.')
                
        if hund_id_finnes==False and oppdr_finnes==True:
        #Sjekk om eier finnes fra før
            eier_finnes = False
            hundeeier_id = input('Hundeeiers ID: ')
            with open('hundeeier.txt', 'r') as hundeeier_fil:
                for line in hundeeier_fil:
                    if line.strip() == hundeeier_id:
                        eier_finnes = True

                        if eier_finnes == True:
            
                            hund_navn = input('Hundens navn:')
                            hund_kjonn = input('Hundens kjonn: ')
                            hund_fodt = input('Hvilket år er hunden født: ')

                            # Legg til hunnden i hund.txt filen
                            with open('hund.txt', 'a') as hund_fil:
                                hund_fil.write(f'{hund_id}\\n')
                                hund_fil.write(f'{oppdr_id}\\n')
                                hund_fil.write(f'{hundeeier_id}\\n')
                                hund_fil.write(f'{hund_navn}\\n')
                                hund_fil.write(f'{hund_kjonn}\\n')
                                hund_fil.write(f'{hund_fodt}\\n')

                            print('***************************')
                            print('Hunden er lagt til i filen!')
                            print('***************************')

                            # Check if the user wants to add another dog
                            enda_en_hund = input('Vil du legge til enda en hund? y/n:')
                            if enda_en_hund !='y':
                                enda_en_hund = False
                        else: 
                            print('Hundeeier finnes ikke. Hunden kan ikke legges til.')

        

# ************************************************
# SLETTE HUNDEEIER 
# ************************************************

# Remove og rename funksjon
import os

def slette_hundeeier():

    #Create a variable to control the loop
    slette_enda_en = True

    while slette_enda_en:
        # Hvilken hundeeier skal slettes?
        hundeeier_ID_sok = input('Hvilken hundeeier vil du slette? Bruk hundeeierID: ')

        # Åpne hundeeier-fila
        hundeeier_fil = open('hundeeier.txt', 'r')

        # Åpne temp-fila
        hundeeier_temp = open('hundeeier_temp.txt', 'w')

        # Les første linja
        hundeeier_ID = hundeeier_fil.readline()

        # Flag to check if the record exists
        slette_enda_en = False

        while hundeeier_ID != '':
            # Les fornavn
            he_fornavn = hundeeier_fil.readline()
            he_etternavn = hundeeier_fil.readline()

            # Strip the \\n from description
            hundeeier_ID = hundeeier_ID.strip()

            # If this is not the record to delete, then
            # write it to the temporary file.
            if hundeeier_ID != hundeeier_ID_sok:
                # Write the record to the temp file
                hundeeier_temp.write(f'{hundeeier_ID}\\n')
                hundeeier_temp.write(f'{he_fornavn}\\n')
                hundeeier_temp.write(f'{he_etternavn}\\n')
            else:
                # Set the found flag to True
                slette_enda_en = True

            # Les neste hundeeier ID
            hundeeier_ID = hundeeier_fil.readline()

        # Close the hundeeierfil og tempfil
        hundeeier_fil.close()
        hundeeier_temp.close()

        if slette_enda_en:
            # Delete the original hundeeierfil
            os.remove('hundeeier.txt')

            # Give new name to tempfila
            os.rename('hundeeier_temp.txt', 'hundeeier.txt')
            print('******************************')
            print('Hundeeieren har blitt slettet!')
            print('******************************')
        else:
            print()
            print('Hundeeieren ble ikke funnet.')
            print('Hundeeieren er kanskje allerede slettet.')
            print()

        # Ask the user if they want to delete another Hundeeier
        slette_enda_en = input('Slette enda en hundeeier? (y/n): ')
        if slette_enda_en != 'y':
            slette_enda_en=False


    
# ************************************************
# UTSKRIFT AV ALLE HUNDER FRA OPPDRETTER
# ************************************************

# This program allows the user to search the oppdretter.txt for oppføringer som matcher navn på kennel
def print_hunder_fra_oppdretter():
    
    # Create a variable to control the loop
    enda_en_print = True
    while enda_en_print:
        # Bruk boolsk variabel for flagg
        found = False

        # Få søk fra bruker (kennelnavn)
        sok_kennel_navn = input('Skriv inn kennelnavn: ')

        # Open the coffee.txt file
        oppdretter_fil = open('oppdretter.txt', 'r')

        # Read the file line by line
        for line in oppdretter_fil:
            oppdretter_id = line.strip('\\n')
            kennel_navn = oppdretter_fil.readline().rstrip('\\n')
            ke_fn = oppdretter_fil.readline().rstrip('\\n')
            ke_en = oppdretter_fil.readline().rstrip('\\n')

            if kennel_navn == sok_kennel_navn:
                # Display the record
                print(f'KennelID: {oppdretter_id}\\n')
                print(f'Kennelnavn: {kennel_navn}\\n')
                print(f'Kenneleiers fornavn: {ke_fn}\\n')
                print(f'Kenneleiers etternavn: {ke_en}\\n')

                # Set the found flag to True.
                found = True

        # Close the file
        oppdretter_fil.close()

        if not found:
            print('Ingen oppdretter med det angitte kennelnavnet ble funnet. ')
        else:
            enda_en_print = input('Søke på nytt? (y/n): ')
            if enda_en_print != 'y':
                enda_en_print = False

    

# ************************************************
# HOVEDMENY 
# ************************************************
kjore_program = True
while kjore_program == True:
    hovedmeny()
    menyvalg = input('Tast inn tall for å velge hva du vil gjøre: ')
    
    if menyvalg == '1':
        legge_til_hundeeier()
    else:
        if menyvalg == '2':
            legge_til_hund()
        else:
            if menyvalg == '3':
                slette_hundeeier()
            else:
                if menyvalg == '4':
                    print_hunder_fra_oppdretter()
                else:
                    if menyvalg == '9':
                        print('Programmet er avsluttet. ')
                        kjore_program = False
                    else:
                        print('Ugyldig valg. Tast 1, 2, 3 eller 9: ')

    
else:
    kjore_program = False`


const prg1000_oppgave2 = `from tkinter import *

def finn_bruker():
  bruker_ID_sok = int(ent_bruker_ID_sok.get())
  funnet = False
  brukerfil = open('bruker.txt', 'r')
  bruker_ID = brukerfil.readline()
    while bruker_ID !='':
      bruker_ID = bruker_ID.rstrip('\\n')
      fornavn = brukerfil.readline().rstrip('\\n')
      etternavn = brukerfil.readline().rstrip('\\n')
      epost = brukerfil.readline().rstrip('\\n')
      if bruker_ID_sok = bruker_ID
        funnet = True
          if funnet == True
            fornavn.set
            etternavn.set
            epost.set
          else:
            bruker_ID.set('BrukerID ikke funnet')
      else:
        bruker_ID = brukerfil.readline()
  
  window=Tk()
  
  #Vi gir vinduet et navn
  window.title('Finn bruker')
  
  # Labeler
  lbl_oppgi_brukerID = Label(window, text='Oppgi brukerID: ')
  lbl_oppgi_brukerID.grid(row=0,column=0,padx=10,pady=10,sticky='E')
  
  lbl_fornavn = Label(window, text='Fornavn: ')
  lbl_fornavn.grid(row=1,column=0,padx=10,pady=10,sticky='E')
  
  lbl_etternavn = Label(window, text='Etternavn: ')
  lbl_etternavn.grid(row=2,column=0,padx=10,pady=10,sticky='E')
  
  lbl_epost = Label(window, text='Epost: ')
  lbl_epost.grid(row=3,column=0,padx=10,pady=10,sticky='E')
  
  # Inndatafelt, lesefelt
  bruker_ID_sok=StringVar()
  ent_bruker_ID_sok = Entry(window, width=10, textvariable=bruker_ID_sok)
  ent_bruker_ID_sok.grid(row=0,column=1,padx=10,pady=10,sticky='W')
  
  fornavn = StringVar()
  ent_fornavn = Entry(window, width=25, state='readonly',textvariable=fornavn)
  ent_fornavn.grid(row=1,column=1,padx=10,pady=10,sticky='W')
  
  etternavn = StringVar()
  ent_etternavn = Entry(window, width=25, state='readonly', textvariable=etternavn)
  ent_etternavn.grid(row=2,column=1,padx=10,pady=10,sticky='W')
  
  epost = StringVar()
  ent_epost = Entry(window, width=25, state='readonly', textvariable=epost)
  ent_epost.grid(row=3,column=1,padx=10,pady=10,sticky='W')

  # Knapp
  btn_finn_bruker = Button(window, text='Finn bruker', command=finn_bruker)
  btn_finn_bruker.grid(row=0,column=2, padx=10,pady=10,sticky='W')
  
  btn_avslutt = Button(window, text='Avslutt', command=window.destroy)
  btn_avslutt.grid(row=4,column=2,padx=10,pady=10,sticky='W')
  
  window.mainloop()
  `

const prg1000_oppgave3 = `registrer_nytt_bilde():
  ny_bildeID = input('Oppgi ID for nytt bilde: ')
  # Inntil vi har funnet bildet, må vi gå ut ifra at det ikke eksisterer
  finnes_fra_for = False
  # Åpne fil med poster i lesemodus
  bildefil = open('bilde.txt', 'r')
  # Lese første linje i første post før løkka
  bildeID = bildefil.readline()
  # Så lenge ikke EOF
  while bildeID !='':
    bildeID = bildeID.rstrip('\\n')
    # Om bildene har samme bildeID...
    if ny_bildeID == bildeID:
      # så "finnes bildet fra før".
      finnes_fra_for = True
      
      print('Bildet eksisterer fra før. Kan ikke legge til.')
      # Lese resten av feltene i posten
      beskrivelse = bildefil.readline().rstrip('\\n')
      opplastet_dato = bildefil.readline().rstrip('\\n')
      fotograf = bildefil.readline().rstrip('\\n')
      # Sette  "lesehodet" tilbake
      bildeID = bildefil.readline()
  bildefil.close()
    # Om bildet IKKE finnes fra før
    if finnes_fra_for == False
      # så er det vits i å ta imot mer info...
      ny_bildeID = input('Angi bildeID: ')
      ny_beskrivelse = input('Beskrivelse: ')
      ny_opplastet_dato = input('Dato: ')
      ny_epost = input('Epost: ')
      #...som vi skriver linje for linje til bildefil.
      bildefil.write(ny_bildeID+'\\n')
      bildefil.write(ny_beskrivelse+'\\n')
      bildefil.write(ny_opplastet_dato+'\\n')
      bildefil.write(ny_epost+'\\n')
    # Om bildet allerede finnes gjør vi ikke annet enn en print for brukerens del.
    if finnes_fra_for == True:
      print('Bildet eksisterer allerede. Prøv en annen bildeID.')
  bildefil.close()
`

const prg1000_oppgave4 = `def slett_bilde():
  funnet = False
  # Ta imot bildeID for sletting av bildet inkl tilhørende kommentarer og likes
  bildeID_sok = input('Oppgi bildeID for bildet (inkl. kommentarer og likes) du vil slette: ')
  
  # Åpne filer
  bildefil = open('bilde.txt', 'r')
  bildefil_temp = open('bilde_temp.txt', 'w')
  
  # Lese første felt i første post før løkka
  bildeID = bildefil.readline()
  
  # Så lenge bildeID søk ikke stemmer overens med noen bildeID i fil, søk til EOF:
  while bildeID !='':
    beskrivelse = bildefil.readline()
    opplastet_dato = bildefil.readline()
    fotograf = bildefil.readline()
    
    bildeID = bildeID.rstrip('\\n')
    
    # Om dette ikke er en post som skal slettes, skriv posten til den midlertidige fila
    if bildeID_sok != bildeID
      bilde_temp.write(f'{beskrivelse}\\n')
      bilde_temp.write(f'{opplastet_dato}\\n')
      bilde_temp.write(f'{fotograf}\\n')
    else:
      funnet = True
      # Åpne filen kommentar forbundet med bildeID
      kommentarfil = open('kommentar.txt', 'r')
      kommentarfil_temp = open('kommentar.txt', 'w')
      
      #Lese første felt i første post før løkka
      bildeID = kommentarfil.readline()
      # Så lenge bildeID søk ikke stemmer overens med noen bildeID i fil, søk til EOF:
      while bildeID !='':
        brukerID = kommentarfil.readline()
        kommentar = kommentarfil.readline()
        
        bildeID = kommentarfil.rstrip('\\n')
        
        # Om dette ikke er en post som skal slettes, skriv posten til den midlertidige fila
        if bildeID_sok != bildeID
          kommentarfil_temp.write(f'{brukerID\\n')
          kommentarfil_temp.write(f'{kommentar\\n')
        else:
          funnet = True
          # Åpne filen likes forbundet med bildeID
          likesfil = open('likes.txt', 'r')
          likesfil_temp = open('likes_temp.txt','w')
          
          # Lese første felt i første post før løkka
          bildeID = likesfil.readline()
          # Så lenge bildeID søk ikke stemmer overens med noen bildeID i fil, søk til EOF
          while bildeID!='':
            brukerID = likesfil.readline()
            
            bildeID = likesfil.rstrip('\\n')
            
            if bildeID != bildeID_sok
              likesfil_temp.write(f'{brukerID\\n')
            else:
              funnet = True
              
          likesfil.close()
          likesfil_temp.close()
          os.remove('likes.txt')
          os.rename('likes_temp.txt','likes.txt')
          
      kommentarfil.close()
      kommentarfil_temp.close()
      os.remove('kommentar.txt')
      os.rename('kommentar_temp.txt','kommentar.txt')
  
  bildefil.close()
  bildefil_temp.close()
  os.remove('bilde.txt')
  os.rename('bilde_temp.txt, bilde.txt')
  
  if funnet:
    print('Filen har blitt slettet')
  else:
    print('Fant ikke bildet. Kanskje det allerede er slettet.')`

const prg1000_oppgave5 = `def bilde_med_kommentarer():
  utskrift_info_bilde = input('Hvilket bilde vil du skrive ut info fra? Oppgi bildeID: ')
  funnet = False
  bildefil = open('bilde.txt', 'r')
  
  # Les første felt i første post før løkka
  bildeID = bildefil.readline()
  while bildeID !='':
    
    # Les resten av posten
    beskrivelse = bildefil.readline()
    opplastet_dato = bildefil.readline()
    fotograf = bildefil.readline()
    
    # Les første linje i neste post
    bildeID = bildeID.rstrip('\\n')
    
    if bildeID == utskrift_info_bilde:
      funnet = True
      if funnet == True:
        kommentarfil = open('kommentar.txt', 'r')
        
        #Lese første linje  i frste post før løkka
        bildeID = kommentarfil.readline()
        while bildeID!='':
          #Les resten av postne
          brukerID = kommentarfil.readline()
          kommentar = kommentarfil.readline()
          
          #Lesf røste linje i neste post
          bildeID = kommentarfil.readline()
        kommentarfil.close()
        
        
        brukerfil = open('bruker.txt', 'r')
        
        #Lese første linje i første post før løkka
        brukerID = brukerfil.readline()
        while brukerID!='':
          fornavn = brukerfil.readline()
          etternavn = brukerfil.readline()
          epost = brukerfil.readline()
          
          #Lesf ørste linje i neste post
          brukerID = brukerfil.readline()
        brukerfil.close()
      else:
        funnet = False
    else:
      print('BildeID ble ikke funnet.')
          
          
    bildeID = bildefil.readline()
  bildefil.close()
  
  if funnet:
    print('Info: 'bildeID,' 'beskrivelse,' 'fornavn,' 'etternavn,' 'kommentar' ')
  if not funnet:
    print('BildeID ble ikke funnet. Kan ikke slette noe som ikke fins.')`




    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/prg1000')}>Grunnleggende programmering 1</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">PRG1000 - Grunnleggende programmering</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold mb-2">Strømstøttekalkulator</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>
                                        Dette arbeidskravet innebærte å lage en strømstøttekalkulator. Programmet er skrevet i Python og regner ut om man får strømstøtte eller ikke basert på brukerens input.
                                    </p>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Kildekode</h3>
                                        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                                            Under er Python-koden for kalkulatoren:
                                        </p>

                                        {/* Implementer CodeBlock-komponenten med Python-kode */}
                                        <CodeBlock
                                            code={arbkrav1code}
                                            language="python"
                                            showLineNumbers={true}
                                            maxHeight="500px"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Programbeskrivelse</h3>
                                        <p className="mb-2">
                                            Programmet er proseduralt og baserer seg på å spørre bruker om input. Basert på denne inputen kjører programmet gjennom if/else-testene for å gjøre utregninger og printe resultat. Programmet spør så brukeren om det skal kjøre på nytt.
                                        </p>

                                        <h3 className="text-lg font-semibold mb-2">Programkart</h3>

                                        <div className="overflow-auto border border-gray-200 dark:border-gray-700 rounded-lg" >
                                        <img
                                            alt="Programkart for strømstøttekalkulator"
                                            src={`${process.env.PUBLIC_URL}/images/PRG1000-Oblig1-KMT.drawio.png`}
                                            className="rounded-lg border border-gray-200 dark:border-gray-700"
                                            onError={(e) => {
                                                console.error("Bildet kunne ikke lastes");
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/300x300?text=Programkart"
                                            }}
                                        />
                                        </div>

                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv2" title="Arbeidskrav 2">
                        <Card>
                            <CardHeader><h3 className="text-lg font-semibold mb-2">Norsk Parson Russel-Terrier Klubb</h3></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>
                                        Dette arbeidskravet innebærer å utvikle et medlemsregister for
                                        Norsk Parson Russel-Terrier Klubb. Programmet er skrevet i Python
                                        og håndterer registrering av medlemmer og deres hunder.
                                    </p>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Kildekode</h3>
                                        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                                            Under er Python-koden for medlemsregisteret:
                                        </p>

                                        {/* Implementer CodeBlock-komponenten med Python-kode */}
                                        <CodeBlock
                                            code={arbkrav2code}
                                            language="python"
                                            showLineNumbers={true}
                                            maxHeight="500px"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Programbeskrivelse</h3>
                                        <p className="mb-2">
                                            Programmet består av tre hovedklasser:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li><strong>Medlem</strong> - Representerer et klubbmedlem med personlig informasjon og tilknyttede hunder</li>
                                            <li><strong>Hund</strong> - Representerer en hund med navn, alder og kjønn</li>
                                            <li><strong>Medlemsregister</strong> - Håndterer lagring og administrasjon av medlemmer</li>
                                        </ul>

                                        <p className="mt-3">
                                            Programmet demonstrerer objektorientert programmering med klasser,
                                            arv, innkapsling og objektinteraksjon. Det viser også grunnleggende
                                            datastrukturer som lister og ordbøker.
                                        </p>

                                        <div className="overflow-auto border border-gray-200 dark:border-gray-700 rounded-lg" >
                                            <img
                                                alt="Programkart for hundekennelklubb"
                                                src={`${process.env.PUBLIC_URL}/images/Arbeidskrav2-12.drawio.png`}
                                                className="rounded-lg border border-gray-200 dark:border-gray-700"
                                                onError={(e) => {
                                                    console.error("Bildet kunne ikke lastes");
                                                    e.target.onerror = null;
                                                    e.target.src = "https://placehold.co/300x300?text=Programkart"
                                                }}
                                            />
                                        </div>


                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h3 className="text-lg font-semibold mb-2">Eksamen</h3></CardHeader>
                            <CardBody>
                                <p>Oppgavesettet er ikke tilgjengelig, så besvarelsen gis uten oppgavesett. Det er ikke mye utover "Tegn programkart til denne koden", og "Kod denne funksjonen".</p>

                            <p className="py-2">Oppgave 1 (beklager bildekvaliteten, dette er en begrensning i eksamensprogrammet Wiseflow.</p>
                            <img
                                alt="Programkart av oppgitt kode"
                                src="/images/7036-oppgave1.png"
                                className="rounded-lg border border-gray-200 dark:border-gray-700"
                            />

                            <p className="p-2">Oppgave 2</p>
                            <div>

                                <CodeBlock
                                    code={prg1000_oppgave2}
                                    language="python"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />
                            </div>

                            <p className="p-2">Oppgave 3</p>
                            <div>
                                <CodeBlock
                                    code={prg1000_oppgave3}
                                    language="python"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />
                            </div>

                            <p className="p-2">Oppgave 4</p>
                            <div>
                                <CodeBlock
                                    code={prg1000_oppgave4}
                                    language="python"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />
                            </div>

                            <p className="p-2">Oppgave 5</p>
                            <div>
                                <CodeBlock
                                    code={prg1000_oppgave5}
                                    language="python"
                                    showLineNumbers={true}
                                    maxHeight="500px"
                                />
                            </div>

                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};


export default PRG1000;
