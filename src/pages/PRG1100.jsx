import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import {Card, CardBody, CardHeader } from "@heroui/card";
import CodeBlock from "../components/CodeBlock";
import {Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

const PRG1100 = () => {
    const navigate = useNavigate();

    // Arbeidskrav 1 kode
    // Overse de 860 feilene, disse er falske positiver pga newline og escape characters. Fungerer det i nettleseren er det tipp topp tommel opp.
    const prg1100_arbkrav1code = `

 |-----------------------------------------------------#
 | Arbeidskrav 1 // Norsk Parson Russell Terrier Klubb #
 |-----------------------------------------------------#

# Importere tkinter-modulen
from tkinter import *
# Opprette hovedvindu "window"
window = Tk()
# Titulere vinduet som etterspurt i oppgave
window.title('Finn hund med opplysninger om kennel og eier')


# |---------------#
# | Programlogikk #
# |---------------#

# Kodeblokk for feilhåndtering, først som tiltenkt:
try:
    # Opprette hundedictionary
    hund_txt_dic = {}
    # Åpne hundefil
    hundefil = open('hund.txt','r',encoding='utf-8')
    # Lese første linje i første post utenfor løkka
    hundeID = hundefil.readline()
    # Så lenge hundeID ikke har nådd EOF
    while hundeID !='':
        # ... så er hundeID den første leste linja i fila med newline-tegn-stripping
        hundeID = hundeID.rstrip('\\n')
        oppdretterID = hundefil.readline().rstrip('\\n')
        hundeeierID = hundefil.readline().rstrip('\\n')
        navn = hundefil.readline().rstrip('\\n')
        kjonn = hundefil.readline().rstrip('\\n')
        fodt = hundefil.readline().rstrip('\\n')

        # Data fra fil tilordnes dictionary i dictionary hund_txt_dic
        # med hundeID som key
        hund_txt_dic[hundeID] = {
        'OppdretterID': oppdretterID,
        'HundeeierID': hundeeierID,
        'Navn':navn,
        'Kjønn': kjonn,
        'Født': fodt
        }

        # Sette "lese/skrive-hodet" tilbake
        hundeID = hundefil.readline().rstrip('\\n')

    # Stenge fil for skikkelig filhåndtering
    # Ingen exceptions her i gården
    hundefil.close()

    # Kontrollprint for dictionary i dictionary-struktur:
    # print(hund_txt_dic)
    # print()
        
    # Hundeeier
    # Gjenta stegene over med andre variabelnavn og verdiantall.
    hundeeier_txt_dic = {}
    hundeeierfil = open('hundeeier.txt','r',encoding='utf-8')
    hundeeierID = hundeeierfil.readline()

    while hundeeierID != '':
        hundeeierID = hundeeierID.rstrip('\\n')
        hundeeierfornavn = hundeeierfil.readline().rstrip('\\n')
        hundeeieretternavn = hundeeierfil.readline().rstrip('\\n')

        # Data fra fil leses inn i dictionary i dictionary hundeeier_txt_dic
        hundeeier_txt_dic[hundeeierID] = {
            'Hundeeierfornavn': hundeeierfornavn,
            'Hundeeieretternavn': hundeeieretternavn
            }

        hundeeierID = hundeeierfil.readline().rstrip('\\n')

    hundeeierfil.close()

    # Oppdretter
    # Gjenta stegene over med andre variabelnavn og verdiantall.
    oppdretter_txt_dic = {}
    oppdretterfil = open('oppdretter.txt','r',encoding='utf-8')
    oppdretterID = oppdretterfil.readline()

    while oppdretterID !='':
        oppdretterID = oppdretterID.rstrip('\\n')
        kennelnavn = oppdretterfil.readline().rstrip('\\n')
        oppdretterfornavn = oppdretterfil.readline().rstrip('\\n')
        oppdretteretternavn = oppdretterfil.readline().rstrip('\\n')

        # Data fra fil leses inn i dictionary i dictionary oppdretter_txt_dic
        oppdretter_txt_dic[oppdretterID] = {
            'OppdretterID': oppdretterID,
            'Kennelnavn': kennelnavn,
            'Kenneleiers fornavn': oppdretterfornavn,
            'Kenneleiers etternavn': oppdretteretternavn
            }

        oppdretterID = oppdretterfil.readline().rstrip('\\n')

    oppdretterfil.close()

    # Kontrollprint for dictionary i dictionary-struktur
    # print(oppdretter_txt_dic)
    # print()

    # Feilhåndtering dersom en hundeID ikke finnes i dictionary for hundeopplysninger
    def hund_finnes_ikke(innskriving):
        # Slette det som blir skrevet i entry widgeten automatisk
        # når ettersøkt hund ikke finnes så man kan søke på andre
        # hundeID-er. Kanskje man kom borti en ekstra 0.
        innskriving.delete(0,END)
        # Elevere meldingsvinduet
        ingen_hund_vindu = Toplevel(window)
        # Sette fokus på det nye vinduet så det ikke "popper opp i bakgrunnen"
        ingen_hund_vindu.focus_set()
        # Titulere elevert meldingsvindu
        ingen_hund_vindu.title("Hunden finnes ikke")
        # Gi bruker beskjed i dialogvindu.
        lbl_hund_finnes_ikke = Label(ingen_hund_vindu,text='Hunden du ønsker å finne opplysninger til eksisterer ikke i registeret.')
        # Plassere label-widget i grid.
        lbl_hund_finnes_ikke.grid(row=0,column=0,padx=15,pady=15)
        # La bruker bekrefte beskjed.
        btn_ok = Button(ingen_hund_vindu,text='   OK   ', command=ingen_hund_vindu.destroy)
        # Plassere dialogvindu ift retningslinjer for knappeplassering.
        btn_ok.grid(row=1,column=0,padx=10,pady=10,sticky=E)
        
    

        
        
    # den ene def'en vi trenger for å faktisk kunne bruke "Finn hundeopplysninger"-knappen
    # event = None for både å kunne bruke venstre enkeltklikk og enter (Return)
    def finn_hundeopplysninger(event=None):
        
        # Tilordning
        hundeID_entrybox = ent_oppgi_hundeID_entrybox.get()

        # Om hundeID fått fra entrybox er lik hundeID i hund_txt_dic dictionary
        if hundeID_entrybox in hund_txt_dic:
            # er hundeinfoen i hund_txt_dic hvor key er hundeID fra entrybox
            hundeinfo = hund_txt_dic[hundeID_entrybox]
            # Sette ['Navn'] i hundenavn readonly entrybox
            ent_hundenavn_entrybox.set(hundeinfo['Navn'])
            # osv med detaljer fra hundeinfo-variabel
            ent_kennelnavn_entrybox.set(oppdretter_txt_dic[hundeinfo['OppdretterID']]['Kennelnavn'])
            ent_eiers_fornavn_entrybox.set(hundeeier_txt_dic[hundeinfo['HundeeierID']]['Hundeeierfornavn'])
            ent_kjonn_entrybox.set(hundeinfo['Kjønn'])
            ent_eiers_etternavn_entrybox.set(hundeeier_txt_dic[hundeinfo['HundeeierID']]['Hundeeieretternavn'])
        else:
            # Om hundeID fått fra entrybox ikke finnes i hund_txt_dictionary:
            # kall hund_finnes_ikke-funksjonen
            hund_finnes_ikke(ent_oppgi_hundeID)
            # Og reset entry-fieldene om man først har søkt på en
            # hund som fantes, og så en som ikke fantes, for at
            # hunden som fantes' detaljer ikke skal henge igjen
            ent_hundenavn_entrybox.set('')
            ent_kennelnavn_entrybox.set('')
            ent_eiers_fornavn_entrybox.set('')
            ent_kjonn_entrybox.set('')
            ent_eiers_etternavn_entrybox.set('')

        
            
# |------------------#
# |  Feilhåndtering  #
# |------------------#
# Kodeblokk for feilhåndtering, så som i tilfelle programmet ikke kjører som tiltenkt:
except ZeroDivisionError:
    print('Zero Division Error.\\nDelt på null.\\nVeldig rar ting å gjøre i dette programmet.')

# Programmet skal ha feilhåndtering i tilfelle en eller flere filer ikke finnes
except FileNotFoundError:
    print('''En eller flere av filene mangler.\\nDu trenger:\\n'hund.txt',\\n'hundeeier.txt' og \\n'oppdretter.txt'.''')
    
except NameError:
    print('Name Error.\\nUdefinert navn i programkode.')

except TypeError:
    print('Type Error.\\nDet er mismatch i datatyper.')

except:
    print('Noe gikk galt og det er ikke godt å si hva.\\nPrøv å slå PC-en av og på, eller kjør programmet på nytt.')
                                        



# |-------#
# |  GUI  #
# |-------#


# Labeler
lbl_hundeid = Label(text="Oppgi hundeID:")
# Plassere label vha grid, gi luft og "venstre/høyre-stille" hhv E og W
lbl_hundeid.grid(row=0,column=0,padx=15,pady=25,sticky=E)

lbl_hundenavn = Label(text="Hundenavn:")
lbl_hundenavn.grid(row=1,column=0,padx=15,pady=5,sticky=E)

lbl_kennelnavn = Label(text="Kennelnavn:")
lbl_kennelnavn.grid(row=2,column=0,padx=15,pady=5,sticky=E)

lbl_eiers_fornavn = Label(text="Eiers fornavn:")
lbl_eiers_fornavn.grid(row=3,column=0,padx=15,pady=5,sticky=E)

lbl_kjonn = Label(text="Kjønn:")
lbl_kjonn.grid(row=1,column=3,padx=15,sticky=E)

lbl_eiers_etternavn = Label(text="Eiers etternavn:")
lbl_eiers_etternavn.grid(row=3,column=3,padx=15,sticky=E)

# Entries
# Deklarere at entrybox tar imot String Variable
ent_oppgi_hundeID_entrybox = StringVar()
# Referere til hvilken textvariable som skal ta imot StringVar() entry
ent_oppgi_hundeID = Entry(window, width=10,textvariable=ent_oppgi_hundeID_entrybox)
ent_oppgi_hundeID.grid(row=0,column=1,sticky=W)
# Legge til bind så vi kan brukte <Return> for "finn_hundeopplysninger" def
# ent_oppgi_hundeID.bind("<Return>",finn_hundeopplysninger)

ent_hundenavn_entrybox = StringVar()
# State = readonly for å vise felt som kun kan leses
# ikke hint til bruker om input-felt pga "grået ut"
ent_hundenavn = Entry(window,width=20,state="readonly",textvariable=ent_hundenavn_entrybox)
ent_hundenavn.grid(row=1,column=1,sticky=W)

ent_kennelnavn_entrybox = StringVar()
ent_kennelnavn = Entry(width=25,state="readonly",textvariable=ent_kennelnavn_entrybox)
ent_kennelnavn.grid(row=2,column=1,sticky=W)

ent_eiers_fornavn_entrybox = StringVar()
ent_eiers_fornavn = Entry(width=15,state="readonly",textvariable=ent_eiers_fornavn_entrybox)
ent_eiers_fornavn.grid(row=3,column=1,sticky=W)

ent_kjonn_entrybox = StringVar()
ent_kjonn = Entry(width=10,state="readonly",textvariable=ent_kjonn_entrybox)
ent_kjonn.grid(row=1,column=4,sticky=W)

ent_eiers_etternavn_entrybox = StringVar()
ent_eiers_etternavn = Entry(state="readonly",textvariable=ent_eiers_etternavn_entrybox)
ent_eiers_etternavn.grid(row=3,column=4,padx=0,pady=5,sticky=W)

# Knapper
# command = finn_hundeopplysninger er def'en som kjøres når klikket på Button
btn_finn_hundeopplysninger = Button(text="Finn hundeopplysninger",command=finn_hundeopplysninger)
btn_finn_hundeopplysninger.grid(row=0,column=3,padx=5,pady=5,sticky=E)

btn_avslutt = Button(text="Avslutt",command=window.destroy)
btn_avslutt.grid(row=4,column=5,padx=5,pady=25,sticky=E)


window.mainloop()
`;

const hundtxt = `0001
0005
1000
Dielku
Hann
2003
0002
0010
2000
Nørre😊
Hann
2004
0003
0015
3000
Stella
Hunn
2010
0004
0020
4000
Hundiheita
Hunn
2020
0005
0025
5000
Snjóflóð
Hann
2019
0006
0005
6000
Trollfar
Hann
1974
0007
0025
7000
Bírkir Bárkur
Hunn
2024
`

const hundeeiertxt = `1000
Lars
Monsen
2000
Hans-Christian
Andersen
3000
Astrid
Lindgren
4000
Tove
Jansson
5000
Snorrí
Sturlasson
6000
Gudleik
Knotten
7000
Björk
Birkirsðóttir
`
const oppdrettertxt = `0005
Norsk Parson Russell Terrier Kennel
Lasse
Lorentzen
0010
Dansk Parson Russell Terrier Kennel
Søren
Kierkegaard
0015
Svenska Parson Russell Terrier Kënnel
Olle
Olafsson
0020
Finska Suomi Parsonna Russilla Terri Kennela
Simo
Hayha
0025
Íslénski Parson Russell Terrier Klúbburinn
Sigurd
Rós
`

const arbkrav2code = `# |----------------------------------------------------------------#
# | Arbeidskrav 2 // System for håndtering av bildedelingstjeneste #
# |----------------------------------------------------------------#

# |-----------------------------------------|
# | Tilretteleggelse                        |
# |-----------------------------------------|

# Importere GUI-håndtering
from tkinter import *

# * importerer visst ikke alt fra tkinter, så:
from tkinter import messagebox

# Importere databasetilkobler
import mysql.connector

# Åpne hovedvindu
window = Tk()

#Titulere hovedvindu
window.title("Bildedelingstjeneste")

#Koble inn databasen
mindatabase=mysql.connector.connect(host='localhost',port=3306,user='Bildesjef',passwd='eksamen2023',db='oblig2024')

#Opprette markør
settinn_markor=mindatabase.cursor()
markor = mindatabase.cursor()

# Global variabel
lbx_brukers_innhold = None
lbx_bildekommentarer = None

# |------------------------------------------|
# | Programlogikk                            |
# |------------------------------------------|

# |---------------------|
# | Brukervalg          |
# |---------------------|

# Åpne vinduet for å legge til ny bruker
def legge_til_ny_bruker():
    
    # Elevere dialogvinduet
    add_user_vindu = Toplevel(window)
    add_user_vindu.focus_force()
    
    # Titulere elevert meldingsvindu
    add_user_vindu.title("Legge til ny bruker")

    # Faktisk legg til bruker (i databasen) når klikker på "Opprett"-knappen kalt btn_ok
    # Funksjon ny bruker
    def sql_ny_bruker():

        # ta info fra entry'ene
        brukerID = ent_brukerID.get()
        fornavn = ent_fornavn_entrybox.get()
        etternavn = ent_etternavn_entrybox.get()
        epost = ent_epost_entrybox.get()

        #Sjekk om bruker eksisterer fra før
        markor.execute("SELECT * FROM Bruker WHERE brukerID = %s", (brukerID,))
        bruker_eksisterer = markor.fetchone()

        # Gi beskjed til bruker om bruker allerede eksisterer
        if bruker_eksisterer:
            # Gjøre klart til ny brukerID ved å slette den gamle
            ent_brukerID.delete(0,END)
            beskjed_vindu = Toplevel(window)
            beskjed_vindu.title("Bruker eksisterer allerede")
            beskjed_vindu.focus_force()
            lbl_eksisterer = Label(beskjed_vindu,text="Bruker eksisterer allerede fra før.\\nVelg en annen brukerID.")
            lbl_eksisterer.grid(row=0,column=0,padx=25,pady=25)
            btn_ok = Button(beskjed_vindu,text="   OK   ",command=beskjed_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky="NSEW")

        # Om bruker ikke eksisterer fra før, sett inn bruker i brukertabellen
        else:  
            sql_ny_bruker_insert="INSERT INTO Bruker (brukerID, fornavn, etternavn,epost) VALUES (%s, %s, %s, %s)"
            values = (brukerID,fornavn,etternavn,epost)
            markor.execute(sql_ny_bruker_insert,values)
            mindatabase.commit()

            # Vindu
            beskjed_lagre_vindu = Toplevel(window)
            beskjed_lagre_vindu.title("Brukerinfo")
            beskjed_lagre_vindu.focus_force()

            # Label
            # Gi beskjed til bruker om at endringen har skjedd
            lbl_bruker_lagret = Label(beskjed_lagre_vindu,text="Brukerinfo lagret!")
            lbl_bruker_lagret.grid(row=0,column=0,padx=15,pady=15,sticky=E)

            # Button
            # La bruker bekrefte at vedkommende har oppfattet endringen
            btn_ok = Button(beskjed_lagre_vindu,text="OK",command=beskjed_lagre_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,ipadx=10,sticky=E)
        
    #Labels
    lbl_brukerID = Label(add_user_vindu,text="BrukerID:")
    lbl_brukerID.grid(row=1,column=0,padx=5,pady=15,sticky=E)

    lbl_fornavn = Label(add_user_vindu,text="Fornavn:")
    lbl_fornavn.grid(row=2,column=0,padx=5,pady=15,sticky=E)

    lbl_etternavn = Label(add_user_vindu,text="Etternavn:")
    lbl_etternavn.grid(row=3,column=0,padx=5,pady=15,sticky=E)

    lbl_epost = Label(add_user_vindu,text="Epost:")
    lbl_epost.grid(row=4,column=0,padx=5,pady=15,sticky=E)

    # Entries
    ent_brukerID_entrybox = StringVar()
    ent_brukerID = Entry(add_user_vindu,width=10,textvariable=ent_brukerID_entrybox)
    ent_brukerID.grid(row=1,column=1,padx=5,pady=15,sticky=W)

    ent_fornavn_entrybox = StringVar()
    ent_fornavn = Entry(add_user_vindu,width=30,textvariable=ent_fornavn_entrybox)
    ent_fornavn.grid(row=2,column=1,padx=5,pady=15,sticky=W)

    ent_etternavn_entrybox = StringVar()
    ent_etternavn = Entry(add_user_vindu,width=20,textvariable=ent_etternavn_entrybox)
    ent_etternavn.grid(row=3,column=1,padx=5,pady=15,sticky=W)

    ent_epost_entrybox = StringVar()
    ent_epost = Entry(add_user_vindu,width=30,textvariable=ent_epost_entrybox)
    ent_epost.grid(row=4,column=1,padx=5,pady=15,sticky=W)

    #Buttons
    btn_ok = Button(add_user_vindu,text="Opprett",command=sql_ny_bruker)
    btn_ok.grid(row=5,column=3,padx=15,pady=25,sticky=E) 

    btn_avbryt = Button(add_user_vindu,text="Avbryt",command=add_user_vindu.destroy)
    btn_avbryt.grid(row=5,column=2,padx=15,pady=15,sticky=E)
    
# Endre epost på eksisterende bruker
def endre_epost():
    def lagre_endringer():

        # Ta imot ny epost, ta imot brukerID
        epost = ent_new_epost.get()
        brukerID = ent_bruker_sok.get()

        # Oppdatere epost til {brukerID}
        markor.execute("UPDATE Bruker SET epost = %s WHERE brukerID = %s", (epost, brukerID))

        # Lagre til database
        mindatabase.commit()

        # Åpne bekreftelsevindu
        email_endret_vindu = Toplevel(window)
        email_endret_vindu.title("E-post endret")
        email_endret_vindu.focus_force()
        
        
        # Gi beskjed til bruker om at eposten har blitt endret
        # Label
        lbl_email_endret = Label(email_endret_vindu,text="E-postadressen har blitt endret!")
        lbl_email_endret.grid(row=0,column=0,padx=15,pady=15)
        
        # Button
        btn_ok = Button(email_endret_vindu,text="OK",command=email_endret_vindu.destroy)
        btn_ok.grid(row=1,column=1,padx=15,pady=15,ipadx=10,sticky=E)

    def sok_bruker():

        # Ta imot brukerID
        brukerID = ent_bruker_sok.get()
        
        # Velge epost fra imottatt brukerID
        markor.execute("SELECT epost FROM Bruker WHERE brukerID = %s", (brukerID,))

        # Legge nåværende epost inn i variabel
        nuverende_epost = markor.fetchone()

        # Hvis det er en epost registrert
        if nuverende_epost:
            ent_cur_epost.config(state="normal")
            # slett om det er en annen der fra før
            ent_cur_epost.delete(0, END)
            # sett inn nåværende epost i entryboxen
            ent_cur_epost.insert(0, nuverende_epost[0])
            # som er i lesemodus
            ent_cur_epost.config(state="readonly")
        # Ellers...
        else:
            #vis feilmelding
            messagebox.showinfo("Ikke funnet","BrukerID ikke funnet.\\nKanskje eposten er oppsagt")
    
    # Elevere dialogvinduet
    change_email_vindu = Toplevel(window)
    change_email_vindu.title("Endre e-post til bruker")
    change_email_vindu.focus_force()
    
    # Labels
    lbl_endre_epost = Label(change_email_vindu,text="BrukerID:")
    lbl_endre_epost.grid(row=0,column=0,padx=5,pady=5,sticky=E)

    lbl_cur_epost = Label(change_email_vindu,text="Nåværende e-post:")
    lbl_cur_epost.grid(row=1,column=0,padx=5,pady=5,sticky=E)

    lbl_ny_epost = Label(change_email_vindu,text="Ny e-post:")
    lbl_ny_epost.grid(row=2,column=0,padx=5,pady=5,sticky=E)

    # Entries
    ent_bruker_sok_entrybox = StringVar()
    ent_bruker_sok = Entry(change_email_vindu,width=12)
    ent_bruker_sok.grid(row=0,column=1,padx=5,pady=5,sticky=W)

    ent_cur_epost_entrybox = StringVar()
    ent_cur_epost = Entry(change_email_vindu,state="readonly")
    ent_cur_epost.grid(row=1,column=1,padx=5,pady=5,sticky=W)

    ent_new_epost_entrybox = StringVar()
    ent_new_epost = Entry(change_email_vindu,width=18)
    ent_new_epost.grid(row=2,column=1,padx=5,pady=5,sticky=W)
    
    # Buttons
    btn_sok_bruker = Button(change_email_vindu,text="Søk",command=sok_bruker)
    btn_sok_bruker.grid(row=0,column=2,padx=5,pady=5,ipadx=10,sticky=W)
    
    btn_lagre = Button(change_email_vindu,text="Lagre endringer",command=lagre_endringer)
    btn_lagre.grid(row=3,column=4,padx=10,pady=10,sticky=E)

    btn_avbryt = Button(change_email_vindu,text="Avbryt",command=change_email_vindu.destroy)
    btn_avbryt.grid(row=3,column=3,padx=10,pady=20,sticky=E)

def sok_brukers_bilder():
    # ta imot variabel
        global lbx_brukers_innhold
        global lbx_bildekommentarer
        global bilder
        # Åpne nytt vindu
        sok_bruker_vindu = Toplevel(window)
        # Titulere vindu
        sok_bruker_vindu.title("Søk brukers bilder")
        sok_bruker_vindu.focus_force()

        # Ta imot brukerID
        brukerID = ent_sok_bruker.get()

        # Velge bildeID og beskrivelse hvor Fotograf er tidligere angitte brukerID
        markor.execute("SELECT BildeID, Beskrivelse FROM Bilde WHERE Fotograf = %s", (brukerID,))

        # lagre denne informasjonen i en variabel
        bilder = markor.fetchall()

        # Listeboks med bildebeskrivelser
        lbx_brukers_innhold = Listbox(sok_bruker_vindu,height=10,width=42)
        lbx_brukers_innhold.grid(row=1,column=1,rowspan=10,padx=(100,0),pady=5,sticky=NS)

        # Scrollbar til listeboks med bildebeskrivleser
        y_scroll = Scrollbar(sok_bruker_vindu, orient=VERTICAL, command=lbx_brukers_innhold.yview)
        y_scroll.grid(row=1,column=2,rowspan=10,padx=(0,100),pady=0,sticky=NS)
        # Sette denne klin inntil listeboksen
        lbx_brukers_innhold.config(yscrollcommand=y_scroll.set)

        #Binde listeboks til vis_kommentarer-eventen
        lbx_brukers_innhold.bind("<<ListboxSelect>>", vis_kommentarer)
        #Slette det som evt er i listeboksen fra før så den ikke fylles opp av tidligere irrelevante kommentarer (fra andre bilder og brukere)
        lbx_brukers_innhold.delete(0, END)

        # For hvert bilde i bilder-variabelen
        for bilde in bilder:
            # sett inn info fra andre indeks/indeks 1 i listeboksen (Beskrivelse)
            lbx_brukers_innhold.insert(END, bilde[1])

        # GUI
        lbx_bildekommentarer = Listbox(sok_bruker_vindu,height=10,width=42)
        lbx_bildekommentarer.grid(row=1,column=3,rowspan=10,padx=15,pady=15)

        lbl_brukerID_sok = Label(sok_bruker_vindu,text="BrukerID:")
        lbl_brukerID_sok.grid(row=0,column=0,padx=15,pady=15,sticky=E)

        lbl_beskrivelser = Label(sok_bruker_vindu,text="Bildebeskrivelser:")
        lbl_beskrivelser.grid(row=1,column=0,padx=15,pady=15,sticky=NE)

        lbl_kommentarer = Label(sok_bruker_vindu,text="Kommentarer:")
        lbl_kommentarer.grid(row=1,column=2,padx=15,pady=15,sticky=NE)

        ent_brukerID_sok = Entry(sok_bruker_vindu,width=8)
        ent_brukerID_sok.grid(row=0,column=1,padx=15,pady=15,sticky=W)
        ent_brukerID_sok.config(state="normal")
        ent_brukerID_sok.insert(0, brukerID)
        ent_brukerID_sok.config(state="readonly")

        btn_ok = Button(sok_bruker_vindu,text="OK",command=sok_bruker_vindu.destroy)
        btn_ok.grid(row=11,column=4,padx=15,pady=15,ipadx=10,sticky=E)

# Når man klikker på en beskrivelse i listeboksen, eller gjør en "ListboxSelect" kalles eventen:           
def vis_kommentarer(event):

    # Valgt = den beskrivelsen bruker har klikket på
    selected_index = lbx_brukers_innhold.curselection()[0]

    # bildeID = [0] i valgt av bilder (fra kommentar)
    bildeID = bilder[selected_index][0]

    # Da kan vi selecte kommentaren fra tabellen Kommentar hvor bildeID = bildeID fra
    # valget brukeren gjorde i listeboksen 
    markor.execute("SELECT Kommentaren FROM Kommentar WHERE BildeID = %s", (bildeID,))

    # og legge denne infoen i en variabel
    kommentarer = markor.fetchall()

    # og hvis det er info så...
    if kommentarer:
        # ...sletter vi det som evt er i listeboksen fra før...
        lbx_bildekommentarer.delete(0, END)
        # ... og setter inn disse i listeboksen
        for kommentar in kommentarer:
            lbx_bildekommentarer.insert(END, kommentar[0])
    # ...og hvis det ikke er noen kommentarer, så lar vi brukeren få vite det.
    else:
        lbx_bildekommentarer.delete(0, END)
        lbx_bildekommentarer.insert(END, f"(Ingen kommentarer på bildet '{bildeID}'...)")
                
# |---------------------|
# | Bildevalg           |
# |---------------------|

# Legge til nytt bilde
def legge_til_bilde():
    def publiser_bilde():
        # ta imot informasjon om det nye bildet
        bildeID = ent_bildeID.get()
        beskrivelse = ent_beskrivelse.get()
        opplastetdato = ent_oppl_dato.get()
        fotograf = ent_fotograf.get()

        # Sjekke om bildeID eksisterer fra før
        markor.execute("SELECT * FROM Bilde WHERE BildeID  = %s", (bildeID,))
        # Hvis det gjør det lagres det i denne variabelen
        bilde_eksisterer = markor.fetchone()

        # Om bilde_eksisterer (har noe i seg):
        if bilde_eksisterer:
            bilde_eksisterer_allerede_vindu=Toplevel(window)
            bilde_eksisterer_allerede_vindu.title("Bildet eksisterer allerede.")
            # ...si fra til bruker om at {bildeID} allerede eksisterer og gi tips til å komme seg videre.
            lbl_alr_exi = Label(bilde_eksisterer_allerede_vindu,text=f"Bildet '{bildeID}' eksisterer allerede.\\nVelg en annen bildeID.")
            lbl_alr_exi.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(bilde_eksisterer_allerede_vindu,text="   OK   ",command=bilde_eksisterer_allerede_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
        # om bilde_eksisterer = tom:    
        else:
            # så sett inn dataen i databasen
            markor.execute("INSERT INTO Bilde (BildeID, Beskrivelse, OpplastetDato, Fotograf) VALUES (%s, %s, %s, %s)", (bildeID, beskrivelse, opplastetdato, fotograf))
            # og hengi seg til det
            mindatabase.commit()

            bilde_lagt_til_vindu = Toplevel(window)
            bilde_lagt_til_vindu.title("Bilde lagt til")
            
            # Gi beskjed til bruker
            lbl_lagt_til = Label(bilde_lagt_til_vindu,text=f"Bildet '{bildeID}' med beskrivelsen '{beskrivelse}' har blitt lagt til!")
            lbl_lagt_til.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(bilde_lagt_til_vindu,text="OK",command=bilde_lagt_til_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,ipadx=10)
            
    leggetilbilde_vindu = Toplevel(window)
    leggetilbilde_vindu.focus_force()
    leggetilbilde_vindu.grab_set()
    leggetilbilde_vindu.title("Legg til bilde")

    # Labels
    lbl_bildeID = Label(leggetilbilde_vindu,text="BildeID:")
    lbl_bildeID.grid(row=0,column=0,padx=15,pady=15,sticky=E)
    
    lbl_beskrivelse = Label(leggetilbilde_vindu,text="Beskrivelse:")
    lbl_beskrivelse.grid(row=1,column=0,padx=15,pady=15,sticky=E)
    
    lbl_oppl_dato = Label(leggetilbilde_vindu,text="Opplastet dato:")
    lbl_oppl_dato.grid(row=2,column=0,padx=15,pady=15,sticky=E)
    
    lbl_fotograf = Label(leggetilbilde_vindu,text="Fotograf:")
    lbl_fotograf.grid(row=3,column=0,padx=15,pady=15,sticky=E)

    # Entries
    ent_bildeID = Entry(leggetilbilde_vindu,width=8)
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_beskrivelse = Entry(leggetilbilde_vindu,width=42)
    ent_beskrivelse.grid(row=1,column=1,padx=15,pady=15,sticky=W)

    ent_oppl_dato = Entry(leggetilbilde_vindu,width=10,text="woohoo :D")
    ent_oppl_dato.grid(row=2,column=1,padx=15,pady=15,sticky=W)

    ent_fotograf = Entry(leggetilbilde_vindu,width=12)
    ent_fotograf.grid (row=3,column=1,padx=15,pady=15,sticky=W)

    # Button
    btn_publiser = Button(leggetilbilde_vindu,text="Publiser",command=publiser_bilde)
    btn_publiser.grid(row=4,column=3,padx=15,pady=15,sticky=E)

    btn_avbryt = Button(leggetilbilde_vindu,text="Avbryt",command=leggetilbilde_vindu.destroy)
    btn_avbryt.grid(row=4,column=2,padx=15,pady=15,sticky=W)

# Endre beskrivelse på et bilde
def endre_bildebeskrivelse():
    def ny_bildebeskrivelse():

        # ta imot info fra entriene til bruk i spørring og entrygields
        bildeID = ent_bildeID.get()
        cur_beskr = ent_gml_beskrivelse.get()
        new_beskr = ent_ny_beskrivelse.get()

        # finne bildet
        markor.execute("SELECT * FROM Bilde WHERE BildeID = %s", (bildeID,))
        bilde_eksisterer = markor.fetchone()
        
        if bilde_eksisterer:
            if bilde_eksisterer[1] == cur_beskr:
                markor.execute("UPDATE Bilde SET Beskrivelse = %s WHERE BildeID = %s", (new_beskr, bildeID))
                mindatabase.commit()
                bildebeskrivelseoppd_vindu = Toplevel(window)
                bildebeskrivelseoppd_vindu.title("Beskrivelse endret")
                # gi beskjed til bruker
                lbl_bld_desc = Label(bildebeskrivelseoppd_vindu,text="Bildebeskrivelsen ble oppdatert!")
                lbl_bld_desc.grid(row=0,column=0,padx=15,pady=15)

                btn_ok = Button(bildebeskrivelseoppd_vindu,text="   OK   ",command=bildebeskrivelseoppd_vindu.destroy)
                btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
                
            else:
                samsvarerikke_vindu = Toplevel(window)
                samsvarerikke_vindu.title("Samsvarer ikke")
                lbl_ssv = Label(samsvarerikke_vindu,text="Den nåværende beskrivelsen samsvarer ikke med beskrivelsen i databasen.\\nHer er det no' muffens på gang.")
                lbl_ssv.grid(row=0,column=0,padx=15,pady=15)
                btn_ok = Button(samsvarerikke_vindu,text="OK",command=samsvarerikke_vindu.destroy)
                btn_ok.grid(row=1,column=1,padx=15,pady=15,ipadx=10,sticky=E)
        else:
            messagebox.showerror("Eksisterer ikke", "Dette bildet tenker ikke, derfor fins det ikke.\\nCogito ergo sum")
    
            
    def finn_bildebeskrivelse():

        bildeID = ent_bildeID.get()

        markor.execute("SELECT Beskrivelse from Bilde WHERE BildeID = %s", (bildeID,))
        beskrivelse = markor.fetchone()

        if beskrivelse:
            gml_beskrivelse = beskrivelse[0]
            ent_gml_beskrivelse.config(state="normal")
            ent_gml_beskrivelse.delete(0, END)
            ent_gml_beskrivelse.insert(0, gml_beskrivelse)
            ent_gml_beskrivelse.config(state="readonly")
        
        else:
            bildetfinnesikke_vindu = Toplevel(window)
            bildetfinnesikke_vindu.title("Bildet finnes ikke")
            bildetfinnesikke_vindu.focus_force()

            lbl_bld_fns_ike = Label(bildetfinnesikke_vindu,text="Bildet finnes ikke. Kanskje du skrev feil bildeID eller bildet har blitt slettet?")
            lbl_bld_fns_ike.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(bildetfinnesikke_vindu,text="   OK   ",command=bildetfinnesikke_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)

    def endre_beskrivelse():
        bildeID = ent_bildeID.get()
        ny_beskrivelse = ent_ny_beskrivelse.get()

        if ny_beskrivelse:
            markor.execute("UPDATE Bilde SET Beskrivelse = %s WHERE BildeID = %s", (ny_beskrivelse, bildeID))
            mindatabase.commit()
            
            ent_bildeID.config(state="normal")
            ent_bildeID.delete(0,END)
            ent_bildeID.config(state="normal")

            ent_gml_beskrivelse.config(state="normal")
            ent_gml_beskrivelse.delete(0,END)
            ent_gml_beskrivelse.config(state="readonly")
            
            ent_ny_beskrivelse.config(state="normal")
            ent_ny_beskrivelse.delete(0,END)
            ent_ny_beskrivelse.config(state="normal")

            # Gi beskjed til bruker om at oppgaven er fullført
            oppdatertbeskrivelse_vindu = Toplevel(window)
            oppdatertbeskrivelse_vindu.title("Beskrivelsen har blitt endret")

            lbl_endret = Label(oppdatertbeskrivelse_vindu,text=f"Beskrivelsen til bildet '{bildeID}' har blitt endret til '{ny_beskrivelse}'.")
            lbl_endret.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(oppdatertbeskrivelse_vindu,text="   OK   ",command=oppdatertbeskrivelse_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15)
        # Om ny beskrivelse er:
        # ...så:
        else:
            # Si fra til bruker om at det ikke er noe i boksen.
            ingennybeskrivelse_vindu = Toplevel(window)
            ingennybeskrivelse_vindu.title("Ingen ny beskrivelse")

            lbl_ikke_endret = Label(ingennybeskrivelse_vindu,text="Du har ikke oppgitt noen beskrivelse.")
            lbl_ikke_endret.grid(row=0,column=0,padx=15,pady=15)
            # ...og la bruker bekrefte at bruker vet dette.
            btn_avbryt = Button(ingennybeskrivelse_vindu,text="OK",command=ingennybeskrivelse_vindu.destroy)
            btn_avbryt.grid(row=1,column=2,padx=15,ipadx=10,pady=15)

    endrebildebeskrivelse_vindu = Toplevel(window)
    endrebildebeskrivelse_vindu.title("Endre beskrivelsen til bilde")
    endrebildebeskrivelse_vindu.focus_force()
    

    # Labels
    lbl_bildeID = Label(endrebildebeskrivelse_vindu,text="BildeID:")
    lbl_bildeID.grid(row=0,column=0,padx=15,pady=15,sticky=E)
    
    lbl_gml_beskrivelse = Label(endrebildebeskrivelse_vindu,text="Nåværende beskrivelse:")
    lbl_gml_beskrivelse.grid(row=1,column=0,padx=15,pady=15,sticky=E)

    lbl_ny_beskrivelse = Label(endrebildebeskrivelse_vindu,text="Ny beskrivelse:")
    lbl_ny_beskrivelse.grid(row=2,column=0,padx=15,pady=15,sticky=E)

    # Entry
    ent_bildeID = Entry(endrebildebeskrivelse_vindu,text="")
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_gml_beskrivelse = Entry(endrebildebeskrivelse_vindu,width=40,state="readonly")
    ent_gml_beskrivelse.grid(row=1,column=1,padx=15,pady=15,sticky=W)
    
    ent_ny_beskrivelse = Entry(endrebildebeskrivelse_vindu,width=30,text="")
    ent_ny_beskrivelse.grid(row=2,column=1,padx=15,pady=15,sticky=W)

    # Button
    btn_endre_beskrivelse = Button(endrebildebeskrivelse_vindu,text="Lagre endringer",command=endre_beskrivelse)
    btn_endre_beskrivelse.grid(row=3,column=4,padx=15,pady=15,sticky=E)

    btn_finn_beskrivelse = Button(endrebildebeskrivelse_vindu,text="Finn bildebeskrivelse",command=finn_bildebeskrivelse)
    btn_finn_beskrivelse.grid(row=0,column=2,padx=15,pady=15,sticky=N)

    btn_avbryt = Button(endrebildebeskrivelse_vindu,text="Avbryt",command=endrebildebeskrivelse_vindu.destroy)
    btn_avbryt.grid(row=3,column=3,padx=15,pady=15,sticky=W)
    
# Slette bilde
# Slette et bilde med alle kommentarer og likes (..."det ligger ikke cascade
# i databasedefinisjonen"...)
def slette_bilde():
    def sql_slette_bilde():

        # Få bildeID og beskrivelse
        bildeID = ent_bildeID.get()
        beskrivelse = ent_beskrivelse.get()

        if bildeID:
            # Slette likes og kommentarer og tagforbilde som alle REFERENCES BildeID
            markor.execute("DELETE FROM Likes WHERE BildeID = %s", (bildeID,))
            markor.execute("DELETE FROM Kommentar WHERE BildeID = %s", (bildeID,))
            markor.execute("DELETE FROM TagForBilde WHERE BildeID = %s", (bildeID,))
            # Slette "childless parent" bildeID
            markor.execute("DELETE FROM Bilde WHERE BildeID = %s", (bildeID,))
            # Lagre endringer til database
            mindatabase.commit()
                
            # Informere bruker om at bildet har blitt slettet vha dialogvindu
            bildeslettet_vindu = Toplevel(window)
            bildeslettet_vindu.title("Bilde")
            # Si til bruker at {bildeID}, {beskrivelse} har blitt slettet
            lbl_bilde_slettet = Label(bildeslettet_vindu,text=f"Bilde '{bildeID}' med beskrivelsen '{beskrivelse}' har blitt slettet!")
            lbl_bilde_slettet.grid(row=0,column=0,padx=15,pady=15)
            # La bruker klikke ok, forstått (nå er det dialog)
            btn_ok = Button(bildeslettet_vindu,text="   OK   ",command=bildeslettet_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15)
     
        else:
            # Si fra til bruker hvis det ikke er bildeID
            trengerID_vindu = Toplevel(window)
            trengerID_vindu.title("Mangler ID")
            lbl_trenger_ID = Label(trengerID_vindu,text="Du må oppgi en bildeID så programmet vet hvilket bilde som skal slettes.")
            lbl_trenger_ID.grid(row=0,column=0,padx=15,pady=15)
            btn_ok = Button(trengerID_vindu,text="OK",command=trengerID_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15)

    # Hjelpe bruker å finne ut hvilket bilde det er snakk om vha "menneskevennlige" data som beskrivelse (HCI)
    def finn_bilde():
        bildeID = ent_bildeID.get()
        if bildeID:
            markor.execute("SELECT Beskrivelse, OpplastetDato, Fotograf FROM Bilde WHERE BildeID = %s", (bildeID,))
            # Lagre query-dataen i en variabel
            bilde_info = markor.fetchone()
            # Hvis variabelen inneholder data:
            if bilde_info:
                ent_beskrivelse.config(state="normal")
                ent_beskrivelse.delete(0, "end")
                ent_beskrivelse.insert(0, bilde_info[0])
                ent_beskrivelse.config(state="readonly")

                ent_oppl_dato.config(state="normal")
                ent_oppl_dato.delete(0, "end")
                ent_oppl_dato.insert(0, bilde_info[1])
                ent_oppl_dato.config(state="readonly")
                    
                ent_fotograf.config(state="normal")
                ent_fotograf.delete(0, "end")
                ent_fotograf.insert(0, bilde_info[2])
                ent_fotograf.config(state="readonly")
            # Hvis variabelen ikke inneholder data
            else:
                # Si fra til brukeren om at bilde med {bildeID} ikke ble funnet
                bildeikkefunnet_vindu = Toplevel(window)
                bildeikkefunnet_vindu.title("Bildet ble ikke funnet")

                lbl_bildeikkefunnet = Label(bildeikkefunnet_vindu,text=f"Bildet '{bildeID}' ble ikke funnet i databasen.\\nKanskje er det allerede slettet?")
                lbl_bildeikkefunnet.grid(row=0,column=0,padx=15,pady=15,sticky=W)

                btn_ok = Button(bildeikkefunnet_vindu,text="OK",command=bildeikkefunnet_vindu.destroy)
                btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
        # Hvis det ikke er en bildeID i ent_bildeID,
        # si fra om at det ikke kan søkes på
        if not bildeID:
            ingenbildeID = Toplevel(window)
            ingenbildeID.title("Ingen bildeID")

            lbl_ingenbildeID = Label(ingenbildeID, text="Ingen bildeID oppgitt.")
            lbl_ingenbildeID.grid(row=0,column=0,padx=15,pady=15,sticky=W)

            lbl_tips = Label(ingenbildeID, text="Du må skrive inn en bildeID så systemet vet hvilket bilde som skal hentes informasjon fra.")
            lbl_tips.grid(row=1,column=0,padx=15,pady=15)

            btn_ok = Button(ingenbildeID, text="   OK   ",command=ingenbildeID.destroy)
            btn_ok.grid(row=2,column=1,padx=15,pady=15,sticky=E)    
      
    slettebilde_vindu = Toplevel(window)
    slettebilde_vindu.title("Slette bilde")
    slettebilde_vindu.focus_force()
    slettebilde_vindu.grab_set()

    # Labels
    lbl_bildeID = Label(slettebilde_vindu,text="Søk på bildeID:")
    lbl_bildeID.grid(row=0,column=0,padx=15,pady=15,sticky=E)

    lbl_beskrivelse_bilde = Label(slettebilde_vindu,text="Beskrivelse:")
    lbl_beskrivelse_bilde.grid(row=1,column=0,padx=15,pady=15,sticky=E)

    lbl_oppl_dato = Label(slettebilde_vindu,text="Opplastet dato:")
    lbl_oppl_dato.grid(row=2,column=0,padx=15,pady=15,sticky=E)

    lbl_fotograf = Label(slettebilde_vindu,text="Fotograf:")
    lbl_fotograf.grid(row=3,column=0,padx=15,pady=15,sticky=E)

    # Entries
    ent_bildeID = Entry(slettebilde_vindu,width=14)
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_beskrivelse = Entry(slettebilde_vindu,width=32,state="readonly")
    ent_beskrivelse.grid(row=1,column=1,padx=15,pady=15,sticky=W)

    ent_oppl_dato = Entry(slettebilde_vindu,width=10,state="readonly")
    ent_oppl_dato.grid(row=2,column=1,padx=15,pady=15,sticky=W)

    ent_fotograf = Entry(slettebilde_vindu,width=12,state="readonly")
    ent_fotograf.grid(row=3,column=1,padx=15,pady=15,sticky=W)

    # Button
    btn_slett_bilde = Button(slettebilde_vindu,text="Slett bilde",command=sql_slette_bilde)
    btn_slett_bilde.grid(row=4,column=5,padx=15,pady=15,sticky=W)

    btn_finn_bilde = Button(slettebilde_vindu,width=12,text="Finn bilde",command=finn_bilde)
    btn_finn_bilde.grid(row=0, column=2, padx=15, pady=15,sticky=W)

    btn_avbryt = Button(slettebilde_vindu,text="Avbryt",command=slettebilde_vindu.destroy)
    btn_avbryt.grid(row=4,column=4,padx=15,pady=15,sticky=W)

# mulig å søke på bildeID og alle kommentarer til dette bildet vises i en listeboks.
# Når en velger en kommentar i lista får en informasjon om brukeren som har lagt inn kommentaren (fornavn, etternavn)

lbx_blds_kmtr = None

def sok_bildes_kommentarer():
    global lbx_blds_kmtr, lbx_blds_brID
    
    sok_bilde_vindu = Toplevel(window)
    sok_bilde_vindu.title("Søk bildes kommentarer, og se hvem det er fra")
    sok_bilde_vindu.focus_force()

    # Ta imot bildeID
    bildeID = ent_sok_bildekommentarer.get()

    # Bruke bildeID for å finne brukerID
    markor.execute("SELECT BrukerID, Kommentaren FROM Kommentar WHERE BildeID = %s", (bildeID,))

    # Lagre brukerID, kommentar i variabel
    bildes_kommentarer = markor.fetchall()

    lbl_blds_kmtr = Label(sok_bilde_vindu,text=f"Kommentarer til bilde: '{bildeID}':")
    lbl_blds_kmtr.grid(row=0,column=0,padx=15,pady=15,sticky=E)

    lbx_blds_kmtr = Listbox(sok_bilde_vindu,width=50,height=10)
    lbx_blds_kmtr.grid(row=0,column=1,rowspan=10,padx=(15,0),pady=15,sticky=E)
    lbx_blds_kmtr.bind("<<ListboxSelect>>",update_bruker_info)
    
    blds_kmtr_scrbar = Scrollbar(sok_bilde_vindu,orient="vertical",command=lbx_blds_kmtr.yview)
    blds_kmtr_scrbar.grid(row=0,column=2,rowspan=10,padx=(0,100),pady=15,sticky=NS)
    lbx_blds_kmtr.config(yscrollcommand=blds_kmtr_scrbar.set)

    # Om bildes_kommentarer inneholer data, insert andre indeks inn i listeboksen
    if bildes_kommentarer:
        for kommentar in bildes_kommentarer:
            lbx_blds_kmtr.insert(END,kommentar[1])

    lbx_blds_brID = Listbox(sok_bilde_vindu,width=50,height=10)
    lbx_blds_brID.grid(row=0,column=3,rowspan=10,padx=(15,0),pady=15,sticky=E)

    blds_brID_scrbar = Scrollbar(sok_bilde_vindu, orient="vertical",command=lbx_blds_brID.yview)
    blds_brID_scrbar.grid(row=0,column=4,rowspan=10,padx=(0,100),pady=15,sticky=NS)
    lbx_blds_brID.config(yscrollcommand=blds_brID_scrbar.set)

    lbx_blds_brID.delete(0,END)

    # Labels
    lbl_blds_brID = Label(sok_bilde_vindu,text="Brukerinfo:")
    lbl_blds_brID.grid(row=0,column=2,padx=15,pady=15,sticky=E)

    btn_lukk = Button(sok_bilde_vindu,text="Lukk",command=sok_bilde_vindu.destroy)
    btn_lukk.grid(row=10,column=4,padx=15,pady=15,sticky=E)

# Når man curselecter i lbx_blds_kmtr:
def update_bruker_info(event):
    # slett så det ikke kommer nytt navn på ny linje på nytt klikk
    lbx_blds_brID.delete(0,END)
    selected_index = lbx_blds_kmtr.curselection()

    if selected_index:
        selected_index = selected_index[0]
        kommentaren = lbx_blds_kmtr.get(selected_index)
        markor.execute("SELECT BrukerID FROM Kommentar WHERE Kommentaren = %s", (kommentaren,))
        brukerID_result = markor.fetchone()

        if brukerID_result:
            brukerID = brukerID_result[0]
            markor.execute("SELECT Fornavn, Etternavn FROM Bruker WHERE BrukerID = %s", (brukerID,))
            brukerinfo = markor.fetchone()

            if brukerinfo:
                brukernavn = f"{brukerinfo[0]} {brukerinfo[1]}"
                lbx_blds_brID.insert(END, brukernavn)
            else:
                messagebox.showerror("Feil","Ingen brukerinfo funnet")
        else:
            messagebox.showerror("Feil","Ingen brukerID funnet")
    
    else:
        ingenkommentarer_vindu = Toplevel(window)
        ingenkommentarer_vindu.title("Slutt med det")

        lbl_kmt = Label(ingenkommentarer_vindu,text="Det er uhøflig å klikke på folk. Hold deg rolig.")
        lbl_kmt.grid(row=0,column=0,padx=15,pady=15)

        btn_ok = Button(ingenkommentarer_vindu,text="   OK   ",command=ingenkommentarer_vindu.destroy)
        btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
            
# |---------------------|
# | Kommentarvalg       |
# |---------------------|

# Legge til kommentar på et bilde.
def legge_til_kommentar():
    leggetilkommentar_vindu = Toplevel(window)
    leggetilkommentar_vindu.title("Legge til kommentar")
    leggetilkommentar_vindu.focus_set()

    def sql_ny_kommentar():

        # Ta info fra entrene
        bildeID = ent_bildeID.get()
        fra_bruker = ent_fra_bruker.get()
        kommentar = ent_kommentar.get()

        # SQL setning forå query insert
        settinnkommentar = "INSERT INTO Kommentar (BildeID, BrukerID, Kommentaren) VALUES (%s, %s, %s)"

        # sjekk om bildeID eksisterer
        markor.execute("SELECT BildeID FROM Bilde WHERE BildeID = %s", (bildeID,))
        result = markor.fetchone()

        if result:
            values = (bildeID, fra_bruker, kommentar)
            markor.execute(settinnkommentar, values)
            mindatabase.commit()

            kommentarlagttil_vindu = Toplevel(window)
            kommentarlagttil_vindu.title("Kommentar lagt til")

            lbl_kommentarlagttil = Label(kommentarlagttil_vindu,text=f"Kommentaren '{kommentar}' fra bruker '{fra_bruker}' har blitt lagt til!")
            lbl_kommentarlagttil.grid(row=1,column=1,padx=15,pady=15)

            btn_ok = Button(kommentarlagttil_vindu,text="   OK   ",command=kommentarlagttil_vindu.destroy)
            btn_ok.grid(row=2,column=2,padx=15,pady=15,sticky=E)

            ent_bildeID.config(state="normal")
            ent_bildeID.delete(0, "end")
            
            
            ent_brukerID.config(state="normal")
            ent_brukerID.delete(0, "end")
            ent_brukerID.config(state="readonly")

            ent_beskrivelse.config(state="normal")
            ent_beskrivelse.delete(0, "end")
            ent_beskrivelse.config(state="readonly")

            ent_oppl_dato.config(state="normal")
            ent_oppl_dato.delete(0, "end")
            ent_oppl_dato.config(state="readonly")

            ent_kommentar.config(state="normal")
            ent_kommentar.delete(0, "end")

            ent_fra_bruker.config(state="normal")
            ent_fra_bruker.delete(0, "end")
            
            
        else:
            bildeID_eksisterer_ikke_vindu = Toplevel(window)
            bildeID_eksisterer_ikke_vindu.title("Bildet eksisterer ikke")

            lbl_bildeeksistererikke = Label(bildeID_eksisterer_ikke_vindu,text="Bildet eksisterer ikke.")
            lbl_bildeeksistererikke.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(bildeID_eksisterer_ikke_vindu,text="OK",command=bildeID_eksisterer_ikke_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)

    def finn_bilde():
        bildeID = ent_bildeID.get()
        fotograf= ent_brukerID.get()
        beskrivelse = ent_beskrivelse.get()
        oppldato = ent_oppl_dato.get()

        if bildeID:
            markor.execute("SELECT Fotograf, Beskrivelse, OpplastetDato FROM Bilde WHERE BildeID = %s", (bildeID,))
            bilde_info = markor.fetchone()
            if bilde_info:
                ent_brukerID.config(state="normal")
                ent_brukerID.delete(0, "end")
                ent_brukerID.insert(0, bilde_info[0])
                ent_brukerID.config(state="readonly")

                ent_beskrivelse.config(state="normal")
                ent_beskrivelse.delete(0, "end")
                ent_beskrivelse.insert(0, bilde_info[1])
                ent_beskrivelse.config(state="readonly")

                ent_oppl_dato.config(state="normal")
                ent_oppl_dato.delete(0, "end")
                ent_oppl_dato.insert(0, bilde_info[2])
                ent_oppl_dato.config(state="readonly")

                
            else:
                messagebox.showerror("Ingen bildeinfo","Ingen bildeinfo funnet.")
        else:
            messagebox.showerror("Ingen bildeID","Ingen bildeID funnet.")
         

    # Label
    lbl_bildeID_sok = Label(leggetilkommentar_vindu,text="BildeID:")
    lbl_bildeID_sok.grid(row=0,column=0,padx=15,pady=15,sticky=E)

    lbl_fotograf = Label(leggetilkommentar_vindu,text="Fotograf:")
    lbl_fotograf.grid(row=1,column=0,padx=15,pady=15,sticky=E)

    lbl_beskrivelse = Label(leggetilkommentar_vindu,text="Beskrivelse:")
    lbl_beskrivelse.grid(row=2,column=0,padx=15,pady=15,sticky=E)

    lbl_oppl_dato = Label(leggetilkommentar_vindu,text="Opplastet dato:")
    lbl_oppl_dato.grid(row=3,column=0,padx=15,pady=15,sticky=E)
    
    lbl_kommentar = Label(leggetilkommentar_vindu,text="Kommentar:")
    lbl_kommentar.grid(row=4,column=0,padx=15,pady=15,sticky=E)

    lbl_fra_bruker = Label(leggetilkommentar_vindu,text="Fra bruker:")
    lbl_fra_bruker.grid(row=5,column=0,padx=15,pady=15,sticky=E)
    
    # Entry
    ent_bildeID = Entry(leggetilkommentar_vindu,width=8)
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_brukerID = Entry(leggetilkommentar_vindu,state="readonly",width=14)
    ent_brukerID.grid(row=1,column=1,padx=15,pady=15,sticky=W)

    ent_beskrivelse = Entry(leggetilkommentar_vindu,state="readonly",width=32)
    ent_beskrivelse.grid(row=2,column=1,padx=15,pady=15,sticky=W)

    ent_oppl_dato = Entry(leggetilkommentar_vindu,state="readonly")
    ent_oppl_dato.grid(row=3,column=1,padx=15,pady=15,sticky=W)

    ent_kommentar = Entry(leggetilkommentar_vindu,width=42)
    ent_kommentar.grid(row=4,column=1,padx=15,pady=15,sticky=W)

    ent_fra_bruker = Entry(leggetilkommentar_vindu)
    ent_fra_bruker.grid(row=5,column=1,padx=15,pady=15,sticky=W)
    
    # Button
    btn_bildeID_sok = Button(leggetilkommentar_vindu,text="  Søk  ",command=finn_bilde)
    btn_bildeID_sok.grid(row=0,column=1,padx=15,pady=15,sticky=E)

    btn_publiser = Button(leggetilkommentar_vindu,text="Publiser kommentar",command=sql_ny_kommentar)
    btn_publiser.grid(row=7,column=3,padx=15,pady=15,sticky=E)

    btn_avbryt = Button(leggetilkommentar_vindu,text="Avbryt",command=leggetilkommentar_vindu.destroy)
    btn_avbryt.grid(row=7,column=2,padx=15,pady=15,sticky=W)

        

def slette_kommentar():
    slettekommentar_vindu = Toplevel(window)
    slettekommentar_vindu.title("Slette kommentar")
    slettekommentar_vindu.focus_set()

    def finn_kommentar():

        bildeID = ent_bildeID.get()
        brukerID = ent_brukerID.get()
        
        finnkommentar = "SELECT Kommentaren FROM Kommentar WHERE BildeID = %s AND BrukerID = %s"
        markor = mindatabase.cursor()
        markor.execute(finnkommentar, (bildeID, brukerID))
        kommentar = markor.fetchone()

        if kommentar:
            ent_kommentar.config(state="normal")
            # Slette kommentar om det er en der fra før
            ent_kommentar.delete(0,END)
            # Sette inn kommentaren hentet fra finnkommentar-queryen lagret i variabel med indeks
            ent_kommentar.insert(0, kommentar[0])
            ent_kommentar.config(state="readonly")
        else:
            # og hvis det bildeID og brukerID ikke matcher så ingen info hentes:
            ingenkommentar_vindu = Toplevel(window)
            ingenkommentar_vindu.title("Ingen kommentar")
            ingenkommentar_vindu.focus_set()

            #gi beskjed til bruker
            lbl_ing_kmt = Label(ingenkommentar_vindu,text=f"Det finnes ingen kommentarer fra '{brukerID}' på bildet '{bildeID}'.")
            lbl_ing_kmt.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(ingenkommentar_vindu,text="OK",command=ingenkommentar_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,ipadx=10,sticky=E)
            
            # Slett ID-ene som er der, #HCI
            ent_bildeID.delete(0,END)
            ent_brukerID.delete(0,END)
            
    # funksjonen som faktisk sletter kommentaren
    def sql_slt_kmt():
        # ta imot bildeID og brukerID
        bildeID = ent_bildeID.get()
        brukerID = ent_brukerID.get()

        # lagrer info fra spørring i querydata
        querydata = "SELECT * FROM Kommentar WHERE BildeID = %s AND BrukerID = %s"
        markor = mindatabase.cursor()
        markor.execute(querydata, (bildeID, brukerID))
        # lagre kommentardata
        kommentar = markor.fetchone()

        # om det er data i kommentar etter spørring med bildeID og brukerID, ta denne
        if kommentar:
            slettquery = "DELETE FROM Kommentar WHERE BildeID = %s AND BrukerID = %s"
            markor.execute(slettquery, (bildeID, brukerID))
            mindatabase.commit()

            bleslettet_vindu = Toplevel(window)
            bleslettet_vindu.title("Kommentar ble slettet")
            bleslettet_vindu.focus_force()
            # Gi beskjed til bruker
            lbl_kmt_slt = Label(bleslettet_vindu,text=f"Kommentaren '{kommentar[2]}' fra bruker '{kommentar[1]}' ble slettet.")
            lbl_kmt_slt.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(bleslettet_vindu,text="OK",command=bleslettet_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
        # hvis det ikke er noe data i kommentar
        else:
            finsikke_vindu = Toplevel(window)
            finsikke_vindu.title("Finnes ikke")
            # gi beskjed til bruker
            lbl_kmt_eks_ike = Label(finsikke_vindu,text=f"Det finnes ingen kommentar fra bruker '{brukerID}' på bildet '{bildeID}'.")
            lbl_kmt_eks_ike.grid(row=0,column=0,padx=15,pady=15,sticky=W)

            btn_ok = Button(finsikke_vindu,text="OK",command=finsikke_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
            
    # Label
    lbl_bildeID = Label(slettekommentar_vindu,text="BildeID:")
    lbl_bildeID.grid(row=0,column=0,padx=15,pady=15,sticky=E)

    lbl_brukerID = Label(slettekommentar_vindu,text="BrukerID:")
    lbl_brukerID.grid(row=1,column=0,padx=15,pady=15,sticky=E)

    lbl_kommentarer = Label(slettekommentar_vindu,text="Kommentar:")
    lbl_kommentarer.grid(row=2,column=0,padx=15,pady=15,sticky=NE)

    # Entries
    ent_bildeID = Entry(slettekommentar_vindu,state="normal",width=8)
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_brukerID = Entry(slettekommentar_vindu,width=10)
    ent_brukerID.grid(row=1,column=1,padx=15,pady=15,sticky=W)
    
    ent_kommentar = Entry(slettekommentar_vindu,state="readonly",width=30)
    ent_kommentar.grid(row=2,column=1,padx=15,pady=15)
    
    # Buttons
    sok_bildeID = Button(slettekommentar_vindu,text="Søk",command=finn_kommentar)
    sok_bildeID.grid(row=0,column=2,rowspan=2,padx=15,pady=15,ipadx=10,sticky=NS)

    slett_kommentar = Button(slettekommentar_vindu,text="Slett kommentar",command=sql_slt_kmt)
    slett_kommentar.grid(row=3,column=4,padx=15,pady=15,sticky=E)

    avbryt = Button(slettekommentar_vindu,text="Avbryt",command=slettekommentar_vindu.destroy)
    avbryt.grid(row=3,column=3,padx=15,pady=15,sticky=E)

# |---------------------|
# | Tagger-valg         |
# |---------------------|

# legge til/slette tag'er på et bilde

def legg_til_tag():
    leggtiltag_vindu = Toplevel(window)
    leggtiltag_vindu.title("Legg til tag")
    leggtiltag_vindu.focus_force()

    #funksjon for å la bruker bestemme om det var dette bildet som skulle tagges
    def finn_bildeinfo():
        bildeID = ent_bildeID.get()
        markor.execute("SELECT * FROM Bilde WHERE BildeID = %s", (bildeID,))
        bildeinfo = markor.fetchall()

        # sette infoen inn i entry fieldsene, normale eller ikke
        if bildeinfo:
            ent_beskrivelse.delete(0, END)
            ent_beskrivelse.config(state="normal")
            ent_beskrivelse.insert(0, bildeinfo[0][1])
            ent_beskrivelse.config(state="readonly")

            ent_dato_publ.delete(0, END)
            ent_dato_publ.config(state="normal")
            ent_dato_publ.insert(0, bildeinfo[0][2])
            ent_dato_publ.config(state="readonly")

            ent_fotograf.delete(0, END)
            ent_fotograf.config(state="normal")
            ent_fotograf.insert(0, bildeinfo[0][3])
            ent_fotograf.config(state="readonly")
        # om man skriver inn en ID som ikke ligger i databasen eller ikke noe i det hele tatt:
        else:
            fyllinnmer_vindu = Toplevel(window)
            fyllinnmer_vindu.title("Detaljer, detaljer...")
            fyllinnmer_vindu.focus_force()
            lbl_fyllinn = Label(fyllinnmer_vindu,text="Du må skrive inn en bildeID så det går an å hente detaljer fra et bestemt bilde.")
            lbl_fyllinn.grid(row=0,column=0,padx=15,pady=15)
            btn_ok = Button(fyllinnmer_vindu,text="   OK   ",command=fyllinnmer_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)

    # funksjon for å hente ut menneske-lesbar info fra emneknaggID
    def finn_emneknagginfo():
        emneknaggID = ent_emneknaggID.get()
        markor.execute("SELECT * FROM Emneknagg WHERE EmneknaggID = %s", (emneknaggID,))
        emneknagginfo = markor.fetchall()
        # hvis det er funnet data, slett det som evt er der fra før og sett inn emneknaggen som tilhører emneknaggIDen
        if emneknagginfo:
            ent_emneknagg.config(state="normal")
            ent_emneknagg.delete(0,END)
            
            ent_emneknagg.insert(0,emneknagginfo[0][1])
            ent_emneknagg.config(state="readonly")
        else:
            ingeninfo_vindu = Toplevel(window)
            ingeninfo_vindu.title("Ingen info")
            ingeninfo_vindu.focus_force()
            # Gi beskjed til bruker
            lbl_ngn_inf = Label(ingeninfo_vindu,text="Du må skrive inn en emneknaggID å søke på.")
            lbl_ngn_inf.grid(row=0,column=0,padx=15,pady=15)
            btn_ok = Button(ingeninfo_vindu,text="   OK   ",command=ingeninfo_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
    
    def sql_ny_tag():
        bildeID = ent_bildeID.get()
        emneknaggID = ent_emneknaggID.get()

        # Sjekk om tag eksisterer fra før
        markor.execute("SELECT * FROM TagForBilde WHERE BildeID = %s AND EmneknaggID = %s", (bildeID, emneknaggID,))
        tag_eksisterer = markor.fetchall()

        # Om tag eksisterer, gjør alt klart til å skrive inn ny tag...
        if tag_eksisterer:
            ent_bildeID.config(state="normal")
            ent_bildeID.delete(0,END)

            ent_beskrivelse.config(state="normal")
            ent_beskrivelse.delete(0,END)
            ent_beskrivelse.config(state="readonly")

            ent_dato_publ.config(state="normal")
            ent_dato_publ.delete(0,END)
            ent_dato_publ.config(state="readonly")

            ent_fotograf.config(state="normal")
            ent_fotograf.delete(0,END)
            ent_fotograf.config(state="readonly")

            ent_emneknaggID.config(state="normal")
            ent_emneknaggID.delete(0,END)
            ent_emneknaggID.config(state="normal")

            ent_emneknagg.config(state="normal")
            ent_emneknagg.delete(0,END)
            ent_emneknagg.config(state="readonly")

            # ... og gi beskjed til bruker om at tag eksisterer fra før.
            beskjed_vindu = Toplevel(window)
            beskjed_vindu.title("Tag eksisterer")
            lbl_eksisterer = Label(beskjed_vindu,text="Tag eksisterer allerede.")
            lbl_eksisterer.grid(row=0,column=0,padx=15,pady=15)
            btn_ok = Button(beskjed_vindu,text="   OK   ",command=beskjed_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
        else:
            # ellers, sett inn tag...:
            sql_tag_insert = "INSERT INTO TagForBilde (BildeID, EmneknaggID) VALUES (%s, %s)"
            verdier = (bildeID, emneknaggID)
            markor.execute(sql_tag_insert, verdier)
            #... også i databasen
            mindatabase.commit()
            beskjed_lagre_vindu = Toplevel(window)
            beskjed_lagre_vindu.title("Lagret")
            beskjed_lagre_vindu.focus_force()

            # gi beskjed til bruker
            lbl_tag_lagret = Label(beskjed_lagre_vindu,text="Taggen ble lagt til!")
            lbl_tag_lagret.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(beskjed_lagre_vindu,text="   OK   ",command=beskjed_lagre_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)

    #GUI
    lbl_bildeID = Label(leggtiltag_vindu,text="BildeID:")
    lbl_bildeID.grid(row=0,column=0,padx=15,pady=15,sticky=E)

    lbl_beskrivelse = Label(leggtiltag_vindu,text="Bildebeskriveslse:")
    lbl_beskrivelse.grid(row=1,column=0,padx=15,pady=15,sticky=E)

    lbl_dato_publ = Label(leggtiltag_vindu,text="Dato lagt til:")
    lbl_dato_publ.grid(row=2,column=0,padx=15,pady=15,sticky=E)

    lbl_fotograf = Label(leggtiltag_vindu,text="Fotograf:")
    lbl_fotograf.grid(row=3,column=0,padx=15,pady=15,sticky=E)

    lbl_emneknaggID = Label(leggtiltag_vindu,text="EmneknaggID:")
    lbl_emneknaggID.grid(row=4,column=0,padx=15,pady=15,sticky=E)

    lbl_emneknagg = Label(leggtiltag_vindu,text="Emneknagg:")
    lbl_emneknagg.grid(row=5,column=0,padx=15,pady=15,sticky=E)

    ent_bildeID = Entry(leggtiltag_vindu,width=8)
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_beskrivelse = Entry(leggtiltag_vindu,state="readonly",width=38)
    ent_beskrivelse.grid(row=1,column=1,padx=15,pady=15,sticky=W)

    ent_dato_publ = Entry(leggtiltag_vindu,state="readonly",width=10)
    ent_dato_publ.grid(row=2,column=1,padx=15,pady=15,sticky=W)

    ent_fotograf = Entry(leggtiltag_vindu,state="readonly",width=11)
    ent_fotograf.grid(row=3,column=1,padx=15,pady=15,sticky=W)

    ent_emneknaggID = Entry(leggtiltag_vindu,width=12)
    ent_emneknaggID.grid(row=4,column=1,padx=15,pady=15,sticky=W)

    ent_emneknagg = Entry(leggtiltag_vindu,width=42,state="readonly")
    ent_emneknagg.grid(row=5,column=1,padx=15,pady=15,sticky=W)

    btn_sok_bildeID = Button(leggtiltag_vindu,text="Søk bildeID",command=finn_bildeinfo)
    btn_sok_bildeID.grid(row=0,column=2,padx=15,pady=15,sticky=W)

    btn_sok_emneknaggID = Button(leggtiltag_vindu,text="Søk emneknaggID",command=finn_emneknagginfo)
    btn_sok_emneknaggID.grid(row=4,column=2,padx=15,pady=15,sticky=W)

    btn_legg_til_tag = Button(leggtiltag_vindu,text="Legg til tag",command=sql_ny_tag)
    btn_legg_til_tag.grid(row=6,column=4,padx=15,pady=15,sticky=W)

    btn_avbryt = Button(leggtiltag_vindu,text="Avbryt",command=leggtiltag_vindu.destroy)
    btn_avbryt.grid(row=6,column=3,padx=15,pady=15,sticky=W)

def slett_tag():
    def sql_slette_tag():

        # ta imot info å søke med
        bildeID = ent_bildeID.get()
        emneknaggID = ent_emneknaggID.get()

        #om noe i bildeID og emneknaggID
        if bildeID and emneknaggID:
            # slett hvor bildeID = %s og emneknaggID = %s
            markor.execute("DELETE FROM TagForBilde WHERE BildeID = %s AND EmneknaggID = %s", (bildeID, emneknaggID,))
            verdier = markor.fetchall()
            mindatabase.commit()
            ent_bildeID.config(state="normal")
            ent_bildeID.delete(0,"end")
            ent_emneknaggID.config(state="normal")
            ent_emneknaggID.delete(0,"end")
            ent_tag.config(state="normal")
            ent_tag.delete(0,"end")
            ent_tag.config(state="readonly")
            slettet_vindu = Toplevel(window)
            slettet_vindu.title("Tag slettet")
            slettet_vindu.focus_force()
            # gi beskjed til bruker om at slettet
            lbl_slettet = Label(slettet_vindu,text=f"Tag'en med bildeID '{bildeID}' og EmneknaggID '{emneknaggID}' ble slettet!")
            lbl_slettet.grid(row=0,column=0,padx=15,pady=15)
            btn_ok = Button(slettet_vindu,text="   OK   ",command=slettet_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
        #om ikke noe i (bildeID + emneknaggID) =
        else:
            manglerinfo2_vindu = Toplevel(window)
            manglerinfo2_vindu.title("Mangler info")
            # gi beskjed til bruker om at både bildeID og emneknaggID må være utfylt før sletting 
            lbl_info = Label(manglerinfo2_vindu,text="Du må fylle inn både bildeID og emneknaggID før du kan slette.")
            lbl_info.grid(row=0,column=0,padx=15,pady=15)
            btn_ok = Button(manglerinfo2_vindu,text="   OK   ",command=manglerinfo2_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)

    # finne tag
    def finn_tag():
        # ta imot ID
        bildeID = ent_bildeID.get()
        emneknaggID = ent_emneknaggID.get()
        # om bildeID og emneknaggID inneholdet data'
        # velg BildeID og EmneknaggID fra TagForBilde-tabellen hvor BildeID og EmneknaggID er som de
        # som er oppgit
        if bildeID and emneknaggID:
            markor.execute("SELECT BildeID, EmneknaggID FROM TagForBilde WHERE BildeID = %s AND EmneknaggID = %s", (bildeID, emneknaggID,))

            # lagre dette i variabel
            tagforbilderad = markor.fetchone()

            # og sett inn tag'en i entryen
            if bildeID and emneknaggID:
                ent_tag.config(state="normal")
                ent_tag.delete(0, "end")
                ent_tag.insert(0, tagforbilderad)
                ent_tag.config(state="readonly")
                
            else:
                mangler_vindu=Toplevel(window)
                mangler_vindu.title("Har du glemt noe?")
                mangler_vindu.focus_force()
                lbl_adv = Label(mangler_vindu,text="Du må fylle inn både bildeID og emneknaggID for å kunne finne tag.")
                lbl_adv.grid(row=0,column=0,padx=15,pady=15)
                btn_ok = Button(mangler_vindu,text="   OK   ",command=mangler_vindu.destroy)
                btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
        else:
            manglerinfo_vindu = Toplevel(window)
            manglerinfo_vindu.title("Mangler ID")
            manglerinfo_vindu.focus_force()
            lbl_inf = Label(manglerinfo_vindu,text="Du må fylle inn både bildeID og EmneknaggID for å kunne finne tag.")
            lbl_inf.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(manglerinfo_vindu,text="   OK   ",command=manglerinfo_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
    #GUI   
    sletttag_vindu = Toplevel(window)
    sletttag_vindu.title("Slett tag")
    sletttag_vindu.focus_force()
    lbl_bildeID = Label(sletttag_vindu,text="BildeID:")
    lbl_bildeID.grid(row=0,column=0,padx=15,pady=15,sticky=E)

    lbl_emneknaggID = Label(sletttag_vindu,text="EmneknaggID:")
    lbl_emneknaggID.grid(row=1,column=0,padx=15,pady=15,sticky=E)

    lbl_tag = Label(sletttag_vindu,text="Tag:")
    lbl_tag.grid(row=2,column=0,padx=15,pady=15,sticky=E)

    ent_bildeID = Entry(sletttag_vindu,width=10)
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_emneknaggID = Entry(sletttag_vindu,width=8)
    ent_emneknaggID.grid(row=1,column=1,padx=15,pady=15,sticky=W)

    ent_tag = Entry(sletttag_vindu,state="readonly")
    ent_tag.grid(row=2,column=1,padx=15,pady=15,sticky=W)

    btn_sok = Button(sletttag_vindu,text="Finn tag",command=finn_tag)
    btn_sok.grid(row=0,column=2,rowspan=2,padx=15,pady=15,ipadx=15,sticky=NS)

    btn_avbryt = Button(sletttag_vindu,text="Avbryt",command=sletttag_vindu.destroy)
    btn_avbryt.grid(row=3,column=3,padx=15,pady=15,sticky=E)
    btn_slett_tag = Button(sletttag_vindu,text="Slett tag",command=sql_slette_tag)
    btn_slett_tag.grid(row=3,column=4,padx=15,pady=15,sticky=E)

# |---------------------|
# | Likerklikk          |
# |---------------------|

# Legge til/slette likes på et bilde

def legg_til_liker():
    leggtillikes_vindu = Toplevel(window)
    leggtillikes_vindu.title("Legg til likerklikk")
    leggtillikes_vindu.focus_force()
    
    def finn_likes():
        # ta info for å søke om liken er der fra før om man vil
        bildeID = ent_bildeID.get()
        brukerID = ent_brukerID.get()

        if bildeID and brukerID:
            markor.execute("SELECT * FROM Likes WHERE BildeID = %s AND BrukerID = %s", (bildeID, brukerID,))
            # ta infoen fra spørringen og sett dette i likerinfo
            likerinfo = markor.fetchall()
            #... og sett likerinfo inn i 
            if likerinfo:
                ent_bildeID.delete(0,END)
                ent_bildeID.config(state="normal")
                ent_bildeID.insert(0,likerinfo[0][0])

                ent_brukerID.delete(0,END)
                ent_brukerID.config(state="normal")
                ent_brukerID.insert(0,likerinfo[0][1])

                harlikt_vindu = Toplevel(window)
                harlikt_vindu.title("Har likt")
                harlikt_vindu.focus_force()
                # og hvis den er det, si fra til brukeren om dette
                lbl_likt = Label(harlikt_vindu,text=f"Brukeren '{brukerID}' har likt bildet '{bildeID}'.")
                lbl_likt.grid(row=0,column=0,padx=15,pady=15)

                btn_ok = Button(harlikt_vindu,text="OK",command=harlikt_vindu.destroy)
                btn_ok.grid(row=1,column=1,padx=15,pady=15,ipadx=10,sticky=E)

            # hvis ikke noe i likerinfo er det ikke gjort noe treff på (bildeID+brukerID)     
            else:
                ingenliker_vindu = Toplevel(window)
                ingenliker_vindu.title("Ingen likerklikk")
                ingenliker_vindu.focus_force()
                # gi beskjed til bruker
                lbl_ingenliker = Label(ingenliker_vindu,text=f"Brukeren '{brukerID}' har ikke likt bildet '{bildeID}'.")
                lbl_ingenliker.grid(row=0,column=0,padx=15,pady=15)
                btn_ok = Button(ingenliker_vindu,text="   OK   ",command=ingenliker_vindu.destroy)
                btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
                # slett for evt å søke på nye kombinasjoner
                ent_bildeID.delete(0,END)
                ent_brukerID.delete(0,END)
        # bare litt brukerveiledning om de ikke har fylt inn noe eller bare en ID
        else:
            glemtinfo = Toplevel(window)
            glemtinfo.title("Glemt info")
            glemtinfo.focus_force()
            lbl_glm_inf = Label(glemtinfo,text="Du må fylle inn hvilken bildeID liken skal være på, og hvilken brukerID liken kommer fra.")
            lbl_glm_inf.grid(row=0,column=0,padx=15,pady=15)
            btn_ok = Button(glemtinfo,text="   OK   ",command=glemtinfo.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
    # funksjonen for faktisk å gjennomføre like'n
    def sql_ny_like():
        bildeID = ent_bildeID.get()
        brukerID = ent_brukerID.get()
        markor.execute("SELECT * FROM Likes WHERE BildeID = %s AND BrukerID = %s", (bildeID, brukerID,))
        liker_eksisterer = markor.fetchall()

        if liker_eksisterer:
            beskjed_vindu = Toplevel(window)
            beskjed_vindu.title("Eksisterer allerede")
            beskjed_vindu.focus_force()
            lbl_eksisterer = Label(beskjed_vindu,text="Like'n eksisterer allerede.")
            lbl_eksisterer.grid(row=0,column=0,padx=15,pady=15)
            btn_ok = Button(beskjed_vindu,text="   OK   ",command=beskjed_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
        else:
            # faktisk INSERTe like'n inn i databasen
            sql_like_insert = "INSERT INTO Likes (BildeID, BrukerID) VALUES (%s, %s)"
            verdier = (bildeID, brukerID)
            markor.execute(sql_like_insert,verdier)
            mindatabase.commit()
            beskjed_lagre_vindu = Toplevel(window)
            beskjed_lagre_vindu.title("Lagret")
            beskjed_lagre_vindu.focus_force()
            # og gi bruker beskjed om dette
            lbl_like_lagret = Label(beskjed_lagre_vindu,text="Liken ble lagt til!")
            lbl_like_lagret.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(beskjed_lagre_vindu,text="   OK   ",command=beskjed_lagre_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)

    lbl_bildeID = Label(leggtillikes_vindu,text="BildeID:")
    lbl_bildeID.grid(row=0,column=0,padx=15,pady=15,sticky=E)

    lbl_brukerID = Label(leggtillikes_vindu,text="BrukerID:")
    lbl_brukerID.grid(row=1,column=0,padx=15,pady=15,sticky=E)

    ent_bildeID = Entry(leggtillikes_vindu,width=10)
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_brukerID = Entry(leggtillikes_vindu,width=8)
    ent_brukerID.grid(row=1,column=1,padx=15,pady=15,sticky=W)

    btn_avbryt = Button(leggtillikes_vindu,text="Avbryt",command=leggtillikes_vindu.destroy)
    btn_avbryt.grid(row=2,column=3,padx=15,pady=15,sticky=E)

    btn_liker = Button(leggtillikes_vindu,text="Liker ♥",command=sql_ny_like)
    btn_liker.grid(row=2,column=4,padx=15,pady=15,sticky=E)

    btn_sok_liker = Button(leggtillikes_vindu,text="Søk likerklikk",command=finn_likes)
    btn_sok_liker.grid(row=0,column=2,rowspan=2,padx=15,pady=15,ipadx=5,sticky=NS)

        
    

def slett_liker():
    def sql_slette_liker():
        bildeID = ent_bildeID.get()
        brukerID = ent_fra_bruker.get()
        # ta imot bildeID og brukerID og bruke dette ifm DELETE-querien
        if bildeID and brukerID:
            markor.execute("DELETE FROM Likes WHERE BildeID = %s AND BrukerID = %s", (bildeID, brukerID,))
            verdier = markor.fetchall()
            mindatabase.commit()

            #"ajourhold" av entry-fieldsene
            ent_bildeID.config(state="normal")
            ent_bildeID.delete(0,"end")
            ent_bildeID.config(state="normal")

            ent_beskrivelse.config(state="normal")
            ent_beskrivelse.delete(0,"end")
            ent_beskrivelse.config(state="readonly")

            ent_oppl_dato.config(state="normal")
            ent_oppl_dato.delete(0,"end")
            ent_oppl_dato.config(state="readonly")

            ent_fotograf.config(state="normal")
            ent_fotograf.delete(0,"end")
            ent_fotograf.config(state="readonly")

            ent_fra_bruker.config(state="normal")
            ent_fra_bruker.delete(0,"end")
            ent_fra_bruker.config(state="readonly")

            slettet_vindu = Toplevel(window)
            slettet_vindu.title("Slettet")
            # gi beskjed til bruker
            lbl_slt = Label(slettet_vindu,text=f"Bruker '{brukerID}' slettet likerklikket fra bildet '{bildeID}'.")
            lbl_slt.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(slettet_vindu,text="   OK    ",command=slettet_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
        else:
            manglerinfo_vindu = Toplevel(window)
            manglerinfo_vindu.title("Mangler info")
            # hjelpe bruker
            lbl_info = Label(manglerinfo_vindu,text="Mangler bildeID og/ eller brukerID.")
            lbl_info.grid(row=0,column=0,padx=15,pady=15)

            btn_ok = Button(manglerinfo_vindu,text="   OK   ",command=manglerinfo_vindu.destroy)
            btn_ok.grid(row=1,column=1,padx=15,pady=15,sticky=E)
    #funksjon for å hjelpe bruker å finne bildet vha mer kontekst som beskrivelse
    def finn_bildeinfo():
        bildeID = ent_bildeID.get()

        if bildeID:
            # Hvis det er en bildeID angitt bruk denne for å gjøre en spørring som henter ut info til entryfields
            markor.execute("SELECT Beskrivelse, OpplastetDato, Fotograf FROM Bilde WHERE BildeID = %s", (bildeID,))
            bilderad = markor.fetchall()
            # sette info i readonlyfeltene
            if bildeID:
                ent_beskrivelse.config(state="normal")
                ent_beskrivelse.delete(0,END)
                ent_beskrivelse.insert(0, bilderad[0][0])
                ent_beskrivelse.config(state="readonly")

                ent_oppl_dato.config(state="normal")
                ent_oppl_dato.delete(0,END)
                ent_oppl_dato.insert(0, bilderad[0][1])
                ent_oppl_dato.config(state="readonly")

                ent_fotograf.config(state="normal")
                ent_fotograf.delete(0,END)
                ent_fotograf.insert(0, bilderad[0][2])
                ent_fotograf.config(state="readonly")
            
    slettliker_vindu = Toplevel(window)
    slettliker_vindu.title("Slett likerklikk")

    # Labels
    lbl_bildeID = Label(slettliker_vindu,text="BildeID:")
    lbl_bildeID.grid(row=0,column=0,padx=15,pady=15,sticky=E)

    lbl_beskrivelse = Label(slettliker_vindu,text="Beskrivelse:")
    lbl_beskrivelse.grid(row=1,column=0,padx=15,pady=15,sticky=E)

    lbl_oppl_dato = Label(slettliker_vindu,text="Opplastet dato:")
    lbl_oppl_dato.grid(row=2,column=0,padx=15,pady=15,sticky=E)
    
    lbl_fotograf = Label(slettliker_vindu,text="Fotograf:")
    lbl_fotograf.grid(row=3,column=0,padx=15,pady=15,sticky=E)

    lbl_fra_bruker = Label(slettliker_vindu,text="Bruker like'n er fra:")
    lbl_fra_bruker.grid(row=4,column=0,padx=15,pady=15,sticky=E)

    # Entries
    ent_bildeID = Entry(slettliker_vindu,width=8)
    ent_bildeID.grid(row=0,column=1,padx=15,pady=15,sticky=W)

    ent_beskrivelse = Entry(slettliker_vindu,width=40,state="readonly")
    ent_beskrivelse.grid(row=1,column=1,padx=15,pady=15)

    ent_oppl_dato = Entry(slettliker_vindu,width=10,state="readonly")
    ent_oppl_dato.grid(row=2,column=1,padx=15,pady=15,sticky=W)

    ent_fotograf = Entry(slettliker_vindu,width=8,state="readonly")
    ent_fotograf.grid(row=3,column=1,padx=15,pady=15,sticky=W)

    ent_fra_bruker = Entry(slettliker_vindu,width=10)
    ent_fra_bruker.grid(row=4,column=1,padx=15,pady=15,sticky=W)

    # Buttons
    btn_finn = Button(slettliker_vindu,text="Finn bilde",command=finn_bildeinfo)
    btn_finn.grid(row=0,column=2,padx=15,pady=15,sticky=W)
    
    btn_avbryt = Button(slettliker_vindu,text="Avbryt",command=slettliker_vindu.destroy)
    btn_avbryt.grid(row=5,column=3,padx=15,pady=15,sticky=E)

    btn_slett_liker = Button(slettliker_vindu,text="Slett liker",command=sql_slette_liker)
    btn_slett_liker.grid(row=5,column=4,padx=15,pady=15,sticky=E)

# |------------------------------------------|
# | GUI                                      |
# |------------------------------------------|
# Labels
lbl_bruker = Label(text='Brukervalg')
lbl_bruker.grid(row=0,column=0,padx=5,pady=15,sticky=E)

lbl_bilde = Label(text='Bildevalg')
lbl_bilde.grid(row=1,column=0,padx=5,pady=15,sticky=E)

lbl_kommentar = Label(text='Kommentarvalg')
lbl_kommentar.grid(row=2,column=0,padx=5,pady=15,sticky=E)

lbl_tag = Label(text='Tagger')
lbl_tag.grid(row=3,column=0,padx=5,pady=15,sticky=E)

lbl_likes = Label(text='Likerklikk')
lbl_likes.grid(row=5,column=0,padx=5,pady=15,sticky=E)

lbl_brukerID = Label(text="BrukerID:")
lbl_brukerID.grid(row=0,column=5,padx=5,pady=15,sticky=E)

lbl_bildeID = Label(text="BildeID:")
lbl_bildeID.grid(row=1,column=5,padx=5,pady=15,sticky=E)

# --------------------|
# Entries             |
# --------------------|
ent_sok_bruker = Entry()
ent_sok_bruker.grid(row=0,column=6,padx=5,pady=5,sticky=E)

ent_sok_bildekommentarer = StringVar()
ent_sok_bildekommentarer = Entry()
ent_sok_bildekommentarer.grid(row=1,column=6,padx=5,pady=5,sticky=E)

# --------------------|
# Buttons             |
# --------------------|

# Legg til bruker
btn_sok = Button(text="Legg til bruker...",command=legge_til_ny_bruker)
btn_sok.grid(row=0,column=1,padx=15,pady=5,sticky=W)

# Endre epost
btn_endre_epost = Button(text='Endre brukers epost...',command=endre_epost)
btn_endre_epost.grid(row=0,column=2,padx=15,pady=5,sticky=W)

# Søk bruker
btn_sok_bruker = Button(text='Søk brukers bilder...',command=sok_brukers_bilder)
btn_sok_bruker.grid(row=0,column=7,padx=15,pady=5,sticky=W)

# Søk bildes kommentarer
btn_sok_bildekommentarer = Button(text='Søk bildes kommentarer...',command=sok_bildes_kommentarer)
btn_sok_bildekommentarer.grid(row=1,column=7,padx=15,pady=5,sticky=W)

# Legg til bilde
btn_legg_til_bilde = Button(text='Legg til bilde...',command=legge_til_bilde)
btn_legg_til_bilde.grid(row=1,column=1,padx=15,pady=5,sticky=W)

# Endre beskrivelse på bilde
btn_endre_bildebeskrivelse = Button(text='Endre bildebeskrivelse...',command=endre_bildebeskrivelse)
btn_endre_bildebeskrivelse.grid(row=1,column=2,padx=15,pady=5,sticky=W)

# Legge til likes på bilde
btn_legge_til_likes = Button(text='Legg til likes på bilde...',command=legg_til_liker)
btn_legge_til_likes.grid(row=5,column=1,padx=15,pady=5,sticky=W)

# Slette likes på bilde
btn_slette_likes = Button(text='Slett likes på bilde...',command=slett_liker)
btn_slette_likes.grid(row=5,column=4,padx=15,pady=5,sticky=W)

# Legg inn kommentar på bilde
btn_legge_til_kommentar = Button(text='Legg til kommentar...',command=legge_til_kommentar)
btn_legge_til_kommentar.grid(row=2,column=1,padx=15,pady=5,sticky=W)

# SLette kommentar på et bilde
btn_slette_kommentar = Button(text='Slett kommentar...',command=slette_kommentar)
btn_slette_kommentar.grid(row=2,column=4,padx=15,pady=5,sticky=W)

# Legg til tag på bilde
btn_legge_til_tag = Button(text='Legg til tag på bilde...',command=legg_til_tag)
btn_legge_til_tag.grid(row=3,column=1,padx=15,pady=5,sticky=W)

# Slett tag på bilde
btn_slette_tag = Button(text='Slett tag på bilde...',command=slett_tag)
btn_slette_tag.grid(row=3,column=4,padx=15,pady=5,sticky=W)

# Slette bilde (med kommentarer og likes)
btn_slette_bilde = Button(text='Slett bilde...',command=slette_bilde)
btn_slette_bilde.grid(row=1,column=4,padx=15,pady=5,sticky=W)

# Avslutte
btn_avslutt = Button(text='Avslutt program',command=window.destroy)
btn_avslutt.grid(row=6,column=8,padx=25,pady=25,sticky=E)

# Stenge ned markør og database

window.mainloop()

markor.close()
mindatabase.close()
`

const arbkrv2sqlcode = `-- Opprette database
CREATE SCHEMA IF NOT EXISTS oblig2024;
DROP SCHEMA oblig2024;
-- Bruke database
USE oblig2024;
-- --- --- --- --- ---
-- - Lage tabeller ---
-- --- --- --- --- ---
CREATE TABLE Bruker
(
BrukerID CHAR(6) PRIMARY KEY,
Fornavn CHAR(30),
Etternavn CHAR(20),
Epost CHAR(40)
);
SELECT * FROM Bruker;

DELETE FROM Bruker WHERE BrukerID LIKE '010203';
DELETE FROM Kommentar WHERE BildeID, BrukerID LIKE '010101', '020202';

CREATE TABLE Bilde
(
BildeID CHAR(6) PRIMARY KEY,
Beskrivelse CHAR(30),
OpplastetDato DATE,
Fotograf CHAR(6) NOT NULL,
FOREIGN KEY (Fotograf) REFERENCES Bruker(BrukerID)
);
SELECT * FROM Bilde;

CREATE TABLE Likes
(
BildeID CHAR(6),
BrukerID CHAR(6),
FOREIGN KEY (BildeID) REFERENCES Bilde(BildeID),
FOREIGN KEY (BrukerID) REFERENCES Bruker(BrukerID)
);

SELECT * FROM Likes;
DELETE FROM Likes WHERE BildeID = '654321' AND BrukerID = '000001';
INSERT INTO Likes
VALUES
('654321','000001');

CREATE TABLE Kommentar
(
BildeID CHAR(6),
BrukerID CHAR(6),
Kommentaren CHAR(40),
PRIMARY KEY(BildeID, BrukerID),
FOREIGN KEY (BildeID) REFERENCES Bilde(BildeID),
FOREIGN KEY (BrukerID) REFERENCES Bruker(BrukerID)
);
SELECT * FROM Kommentar;

-- sett users and privileges host fra % til localhost?
DELETE FROM Kommentar WHERE BildeID = '123456' AND BrukerID = '666333';
DELETE FROM Kommentar WHERE BildeID IN ('010101', '020202') OR BrukerID IN ('010101', '020202');

CREATE TABLE Emneknagg
(
EmneknaggID CHAR(6) PRIMARY KEY,
Emneknaggen CHAR(40)
);

CREATE TABLE TagForBilde
(
BildeID CHAR(6),
EmneknaggID CHAR(6),
PRIMARY KEY(BildeID, EmneknaggID),
FOREIGN KEY (BildeID) REFERENCES Bilde(BildeID),
FOREIGN KEY (EmneknaggID) REFERENCES Emneknagg(EmneknaggID)
);
SELECT * FROM TagForBilde;
DELETE FROM TagForBilde WHERE BildeID = '654321' AND EmneknaggID = '000001';
INSERT INTO TagForBilde VALUES ('654321','000001');
-- --- --- --- --- --- --- --- --- ---
-- Populere tabeller med data  --- ---
-- --- --- --- --- --- --- --- --- ---
INSERT INTO Bruker
VALUES
('123456','Lars','Aasgard','la@handa.no'),
('654321','Janne','Hansen','jaha@aha.no'),
('010101','Kristian','Johnsen','krijo@joda.com'),
('020202','Kenneth','Nilsen','evil.kenil@evilknievel.com'),
('999999','Olaug','Ås','olaug@aasen.com'),
('000001','Vilde','Bredesen','vilbre@gail.com'),
('000002','Trude','Drevland','trudrev@post.no'),
('333666','Ida','Fevik','ida.fevik@gmail.com'),
('666333','Martin','Sleipnes','martin.sleipnes@vg.no'),
('666999','Anette','Våland','annvaa@landet.no');

-- Opprette brukere
INSERT INTO Bruker
VALUES
('777777','Jonas','Johnsen','jojo@gmail.com'),
('888888','Karlotte','Dahl','karldahl@gmail.com'),
('999888','Kristin','Collett','kc@al.no'),
('111222','Brede','Karlsen','breka@gmail.com'),
('333444','Camilla','Ditlevsen','camdit@online.no'),
('555666','Ditlev','Nilsen','ditnil@sen.no'),
('777999','Efraim','Stiansen','e@stiansen.no'),
('888111','Mons','Stafseth','mosta@televerket.no'),
('222444','Nils','Med Skills','mmmnils@gmail.com'),
('555111','Olga','Karlsdottir','olgkarl@online.no');


-- Opprette bilder
INSERT INTO Bilde
VALUES
('654321','Jøvla nissunger!',20241224,'000001'),
('123456','Hurra for 17. mai!',20230517,'010101'),
('020202','Hurra for denne bursdagsjenta',20220705,'999999'),
('000001','SÅ fint ikveld!',20210531,'0000002'),
('666333','Enda en nordlending?',20200601,'666999'),
('010101','Fette fint på påskfjelle',00000402,'020202'),
('020202','Hva er dette såkalte påske?',00010406,'010101'),
('999999','Itpd. Blir svære saker!',00010408,'010101'),
('000001','Hei har dere fått internett nå?',15000410,'333666'),
('000002','heia troinnjoverra',12000506,'333666'),
('333666','...og nåralt',10000221,'666999'),
('666999','Vi nordlendinger er overalt',08000220,'666333');

-- Opprette bilder
INSERT INTO Bilde
VALUES
('000030','God 17 mai!',19990201,'777777'),
('000035','Gratulerer med dagen',19940517,'555111'),
('000090','Skramletog',19890517,'222444'),
('000095','Ene dagen jeg går i penklær',19950517,'333444'),
('100005','Sterk krone nå, kroneis!',19980517,'555666'),
('100010','Verden gikk ikke under',20000101,'777999'),
('300010','Godt nyttår og god undergang',19991231,'777999'),
('300020','Gratulerer Norge!',19990517,'777999'),
('500010','y2k og sol!',20050517,'777999'),
('500000','Lutefisk i kveld',20051224,'777999'),
('600000','Første vinterdag',20051201,'111222'),
('592135','Der var sommeren over',20080901,'111222'),
('975136','Sjekk denne fine bilen da',19640106,'555111'),
('157936','Japp japp japse',19890601,'777777'),
('170599','Dagen derpå, mye pavlova',20110518,'999888'),
('170600','Varmt og godt ute i dag',20150624,'999888');

INSERT INTO Bilde
VALUES
('aaaaaa','haha',20240317,'777999'),
('aaaaab','hehe',20240316,'777999'),
('aaaabb','hihi',20240315,'777999'),
('aaabbb','hoho',20240314,'777999'),
('aabbbb','huhu',20240313,'777999'),
('abbbbb','hyhy',20240312,'777999'),
('bbbbbb','hæhæ',20240311,'777999'),
('bbbbbc','høhø',20240310,'777999'),
('bbbbcc','håhå',20240309,'777999');

INSERT INTO Bilde
VALUES
('bbbccc','37* i dag. i dusjen!',20240308,'777999'),
('bbcccc','badstue når kaldt ute',20240307,'777999'),
('bccccc','potatis te middag',20240306,'777999'),
('cccccc','eplemost',20240305,'777999'),
('cccccd','her går det unna gunnar',20240304,'777999'),
('ccccdd','rydding på gang',20240303,'777999'),
('cccddd','voffsen på tur',20240302,'777999'),
('ccdddd','bang & olufsen',20240301,'777999'),
('cddddd','cervin vega 30k watt',20240229,'777999'),
('dddddd','2x12" i bagasjerommet',20240228,'777999'),
('ddddde','pigger? nei. kjetting!',20240227,'777999'),
('ddddee','aking i hundre og helvete',20240226,'777999'),
('dddeee','slalom baby',20240225,'777999');



DELETE FROM Bilde WHERE BildeID = '600000';

-- Opprette likes
INSERT INTO Likes
VALUES
('654321', '000001'),
('020202', '123456'),
('666333', '666999'),
('000002', '666999'),
('010101', '666999'),
('123456', '999999'),
('100010', '010101'),
('654321', '010101'),
('654321', '666999');

-- Opprette kommentarer
INSERT INTO Kommentar
VALUES
('654321','123456','Ekte nisseunger spiser grøt'),
('654321','654321','Faktisk spiser nisser andre ting også...'),
('654321','010101','Da jeg var ung måtte vi spise sagmugg'),
('123456','123456','For Gud og Fedrelandet'),
('123456','654321','Signe Været'),
('123456','010101','Gratulerer med dagen!'),
('000095','999999','Eier du annet enn joggebukser?'),
('000095','010101','Sløyfe er kult');

-- Opprett emneknagger
INSERT INTO Emneknagg
VALUES
('000001','GodJul'),
('000002','Påske'),
('000003','17mai'),
('000004','Grunnlovsdagen'),
('000005','Dragonforce'),
('000006','NapalmDeath'),
('000007','FreedomCall'),
('000008','Slayer'),
('000009','IronMaiden'),
('000010','medicaid'),
('000011','ico'),
('000012','ethereum'),
('000013','aca'),
('000014','crypto'),
('000015','crowdfunding'),
('000016','giveaway'),
('000017','contest'),
('000018','opioid'),
('000019','funny'),
('000020','photography');

INSERT INTO TagForBilde
VALUES
('654321','000001'),
('123456','000003'),
('000030','000003'),
('000035','000004'),
('010101','000002'),
('999999','000002'),
('000090','000003'),
('000095','000003');

-- --- --- --- --- ---
-- --- BRUKERE --- --- 
-- --- --- --- --- ---

-- Velg alle brukere
SELECT * FROM Bruker;

SELECT * FROM Kommentar;

SELECT * FROM Emneknagg;
SELECT * FROM TagForBilde;

CREATE USER Bildesjef IDENTIFIED BY 'oblig2024';

-- Opprett bruker Bildesjef
CREATE USER 'Bildesjef'@'%' IDENTIFIED BY 'oblig2024';

-- Slett bruker Bildesjef
DROP USER 'Bildesjef'@'%';

-- Sjekk om Bildesjef allerede finnes
SELECT * FROM mysql.user WHERE User = 'Bildesjef';

-- Gi tillatelser til Bildesjef
GRANT SELECT, INSERT, UPDATE, DELETE ON oblig2024.* TO 'Bildesjef'@'%';

-- Gi tilgang til brukere via roller
-- INSERT, UPDATE TIL BRUKERE på enkelt-tabell-nivå (ikke gi mer enn det som spørres etter i oppg)



-- Vis Bildesjefs privilegier
SHOW GRANTS FOR 'Bildesjef'@'%';

SHOW GRANTS FOR 'root'@'localhost';
GRANT GRANT OPTION ON *.* TO 'root'@'localhost';
GRANT CREATE USER ON *.* TO 'root'@'localhost';
SHOW GRANTS FOR 'root'@'3306';`


const eksamen1 = `biler = []
# Kontrollprint
print("Bilinfo:",biler)

# Åpner filen vi leser info fra
bilfil = open('Bil.txt','r',encoding='utf-8')

# Leser første linje i første post utenfor løkka
regnr = bilfil.readline()

# Så lenge regnr ikke har nådd EOF-merket:
while regnr != '':
  regnr = regnr.rstrip('\\n')
  
  # Les neste linje i første post inni løkka
  merke = bilfil.readline().rstrip('\\n')
  # Fortsett å lese linjene i posten
  modell = bilfil.readline().rstrip('\\n')
  startdato = bilfil.readline().rstrip('\\n')
  posisjon = bilfil.readline().rstrip('\\n')
  
  # Legger postene inn i lista, "liste-i-liste-tankegang"
  biler += [[regnr,merkemodell,startdato,posisjon]]
  # Sett "lesehodet" tilbake
  regnr = bilfil.readline() # uten strip
  
# Steng fila for riktig filhåndtering
bilfil.close()

# Kontrollprint
print(biler)

# Skrive ut regnr, merke og startdato
listelengde = len(biler)
for r in range(listelengde)
  print("Regnr:",biler[r][0],"Merke:",biler[r][1],"Startdato:",biler[r][3])`

const eksamen2 = `# Oppretter en tom dict
kunder = {}

# Åpne kundefil for lesing
kundefil = open('kunde.txt','r',encoding='utf-8')

# Lese første linje i første post utenfor løkka
mobnr = kundefil.readline()

# Så lenge ikke EOF
while mobnr != '':
  mobnr = mobnr.rstrip('\\n')
  # Lese resten
  fornavn = kundefil.readline().rstrip('\\n')
  etternavn = kundefil.readline().rstrip('\\n')
  betalingskortnr = kundefil.readline().rstrip('\\n')
  
  kunder[mobnr] = {"Fornavn": fornavn, "Etternavn": etternavn, "Betalingskortnr": betalingskortnr}
  
  # Sette skrivehodet tilbake
  mobnr = kundefil.readline() # uten strip
  
# Stenge fila for riktig filhåndtering
kundefil.close()

# Er det gjort riktig skal du se to stk { tidlig og to stk } på slutten, dette indikerer at det ER en tomdimensjonal dict
print("Kunder:",kunder)

# Programmet skal kjøre så lenge brukeren ønsker
kjore_program = True
while kjore_program:
  mobnrsok = input('Oppgi mobilnummeret du vil søke fornavn og etternavn på: ')
  
  # Om mobnr in kunder og printen er utført, spør programmet brukeren om brukeren vil søke på nytt nr eller avslutte
  if mobnrsok in kunder:
    fornavn = kunder[mobnrsok]['Fornavn']
    etternavn = kunder[mobnrsok]['Etternavn']
    print(f"{mobnrsok} har fornavn {fornavn} og etternavn {etternavn}")
    
    fortsette = int(input("Vil du søke på nytt (1) eller avslutte program (2)?"))
    
    # Hvis fortsette = 1 kjører programmet
    if fortsette == 1:
      kjore_program = True
    # Hvis fortsette = 2 avslutter programmet og brukeren får beskjed om dette
    elif fortsette == 2:
      kjore_program = False
      print("Programmet har blitt avsluttet.")
    else:
      print("Ugyldig valg. Trykk 1 eller 2 etter at du har søkt på mobilnr.")
  else:
    print("Dette mobilnummeret ble ikke funnet i listen.")
      `

const eksamen3 = `from tkinter import *
import mysql.connector

# Åpne hovedvindu
hovedvindu = Tk()
hovedvindu.title("Bil med utleieforhold og kundeopplysninger")

# Koble inn databasen
bildatabase = mysql.connector.connect(host='localhost',port=3306,user='Bilsjef',passwd='eksamen2024',db='Bildeling')
oppdrett_database = bildatabase.cursor()
markor = bildatabase.cursor()

# Hente ut detaljer fra databasen for å vise i listeboksen
markor.execute("SELECT Utleie.Regnr, Utleie.Utlevert, Kunde.Fornavn, Kunde.Etternavn FROM Utleie JOIN Kunde ON Utleie.Mobilnr = Kunde.Mobilnr")
detaljer = markor.fetchall()

# Kontrollprint
# print(detaljer)

# Sortert på utleiedato hvor [1] tilsvarer Utleie.Utlevert
sorterte_utleieforhold = sorted(detaljer, key=lambda x: x[1])

# Kontrollprint for å sjekke om stemmer
# print(sorterte_utleieforhold)

lbl_reg_utleieforhold = Listbox(hovedvindu),text="Utleieforhold")
lbl_reg_utleieforhold.grid(row=1,column=0,padx=15,pady=15,sticky=W)

# Oprrette listeboksen som uteleieforhold står i
lbx_reg_utleieforhold = Listbox(hovedvindu)
lbx_reg_utleieforhold.grid(row=2,rowspan=3,column=0,padx=15,pady=15)

# Fylle listeboksen med utlevering, sortert på utlevering
for row in sorterte_utleieforhold:
  utleietidspunkt = row[1]
  listeboksoppforing = f"{utleietidspunkt}"
  lbx_reg_utleieforhold.insert(END, listeboksoppforing)
  
# Lage event hvor klikk på element i listeboksen fører til label som viser mobilnr = {mobilnr}, fornavn = {fornavn}, etternavn = {etternavn}
def viseinfo(event):
  valgtindeks = lbx_reg_utleieforhold.curselection()
  if valgtindeks:
    valgttuppel = sorterte_utleieforhold[valgtindeks[0]]
    kunde_mobilnr_var.set(valgttuppel[4])
    kunde_fornavn_var.set(valgttuppel[2])
    kunde_etternavn_var.set(valgttuppel[3])


# ---------------
# GUI
# ---------------
kunde_mobilnr_var = StringVar()
kunde_fornavn_var = StringVar()
kunde_etternavn_var = StringVar()

# Labels
lbl_kunde_mobilnr = Label(hovedvindu,text="Kundens mobilnr er:")
lbl_kunde_mobilnr.grid(row=2,column=2,padx=15,pady=15,sticky=E)
lbl_kunde_fornavn = Label(hovedvindu,text="Fornavn:")
lbl_kunde_fornavn.grid(row=3,column=2,padx=15,pady=15,sticky=E)
lbl_kunde_etternavn = Label(hovedvindu,text="Etternavn:")
lbl_kunde_etternavn.grid(row=4,column=2,padx=15,pady=15,sticky=E)

lbl_oppgiregnr = Label(hovedvindu,text="Oppgi regnr:")
lbl_oppgiregnr.grid(row=0,column=0,padx=15,pady=15,sticky=E)

# Entries
ent_kunde_mobilnr = Entry(hovedvindu, textvariable=kunde_mobilnr_var, width=10, state='readonly')
ent_kunde_mobilnr.grid(row=2, column=3, padx=15, pady=15, sticky=W)
ent_kunde_fornavn = Entry(hovedvindu, textvariable=kunde_fornavn_var, width=14, state='readonly')
ent_kunde_fornavn.grid(row=3, column=3, padx=15, pady=15, sticky=W)
ent_kunde_etternavn = Entry(hovedvindu, textvariable=kunde_etternavn_var, width=18, state='readonly')
ent_kunde_etternavn.grid(row=4, column=3, padx=15, pady=15, sticky=W)

ent_regnr = Entry(hovedvindu,width=10)
ent_regnr.grid(row=0,column=1,padx=15,pady=15)

# Scrollbar
scr_reg_utleieforhold = Scrollbar(hovedvindu,orientation="yscroll")
scr_reg_utleieforhold.grid(row=2,rowspan=3,column=1,sticky=NS)

# Binds
lbx_reg_utleieforhold.bind("<<ListboxSelect>>", viseinfo)
lbx_reg_utleieforhold.bind("<<Y-Scroll>>", scr_reg_utleieforhold)

# Buttons
btn_finnforhold = Button(hovedvindu,text="Finn utleieforhold")
btn_finnforhold.grid(row=0,column=2,padx=15,pady=15)
btn_avslutt = Button(hovedvindu,text="Avslutt",command=hovedvindu.destroy)
btn_avslutt.grid(row=6,column=3,padx=5,pady=30,sticky=E)

hovedvindu.mainloop()`

const eksamen4 = `# Lag et program for å avslutte et leieforhold. Brukeren oppgir bilens regnr og informasjon om utleieforholdet vises.
# Brukeren registrerer resterende info om utleieforholdet og ber om at utleieforholdet avsluttes og databasen oppdateres.
# Vinduet skal se slik ut.

# Tilretteleggelse
from tkinter import *
import mysql.connector

hovedvindu = Tk()
hovedvindu.title("Bil leveres tilbake")

bildatabase = mysql.connector.connect(host='localhost',port=3306,user='Bilsjef',passwd='eksamen2024',db='Bildeling')
opprett_markor = bildatabase.cursor()
markor = bildatabase.cursor()

def finn_utleieforhold():
  regnr = ent_oppgiregnr_var.get()
  markor.execute("SELECT * FROM Utleie WHERE Regnr = %s", (regnr,))
  utleietilfelle = markor.fetchone()
  
  markor.execute("SELECT Utleie.Mobilnr, Kunde.Fornavn, Kunde.Etternavn JOIN Kunde ON Utleie.Mobilnr = Kunde.Mobilnr")
  kundetilfelle = markor.fetchone()
  
  if utleietilfelle:
    ent_startpaleieforholdet_var.set(utleietilfelle[1])
    ent_kms_utl_var.set(utleietilfelle[2])
    
    ent_fornavn_var.set(kundetilfelle[1])
    ent_enavn_var.set(kundetilfelle[2])
  
  else:
    ikkefunnet = Toplevel(hovedvindu)
    ikkefunnet.title("Ingen treff")
    lbl_ikfn = Label(ikkefunnet,text="Ikke funnet noe på dette regnr.")
    lbl_ikfn.grid(row=0,column=0,padx=15,pady=15)
    btn_ok=Button(ikkefunnet,text="OK",command=ikkefunnet.destroy)
    btn_ok.grid(row=1,column=0,padx=15,ipadx=10,pady=15,sticky=E)
  
# Lage funksjon for å avslutte leieforhold
def avslutte_leieforhold():
  
  # Definere funksjonen for å faktisk skrive til langtidslagring
  def sql_avslutteleieforhold():
    
    # Ta imot verdier fra kunden
    fornavn = ent_fornavn_var.get()
    etternavn = ent_enavn_var.get()
    
    # Ta imot verdier fra leieforholdet
    regnr = ent_oppgiregnr.get()
    utlevert = ent_startpaleieforholdet_var.get()
    kmstandutl = ent_kms_utl.get()
    mobilnr = ent_mobnr.get()
    
    tidspunktinnlevert = ent_tidsp_innl.get()
    parkeringssted = ent_parksted.get()
    kmstandinnlevert = ent_kmst_innl.get()
    leiebelop = ent_leiebelop.get()
    
    kundeverdier = (mobilnr, fornavn, etternavn)
    utleieverdier = (regnr, utlevert, kmstandutl, mobilnr, tidspunktinnlevert, kmstandinnlevert, leiebelop)
    markor.execute("INSERT INTO Kunde(Fornavn, Etternavn) VALUES (%s, %s)", kundeverdier)
    markor.execute("INSERT INTO Utleie(Regnr, Utlevert, KmUt, Mobilnr, Innlevert, KmInn, Belop) VALUES (%s, %s, %s, %s, %s, %s, %s)", utleieverdier)
    bildatabase.commit()
    
    # Bekjsed
    beskjed_vindu = Toplevel(hovedvindu)
    beskjed_vindu.title("Registrert")
    lbl_reg = Label(hovedvindu,text="Utleieforholdet ble registrert og avsluttet.")
    lbl_reg.grid(row=0,column=0,padx=15,pady=15)
    btn_ok = Button(hovedvindu,text="OK",command=beskjed_vindu.destroy)
    btn_ok.grid(row=1,column=1,padx=15,ipadx=10,pady=15,sticky=E)

# ---------------
# GUI
# ---------------

ent_fornavn_var = StringVar()
ent_enavn_var = StringVar()
ent_startpaleieforholdet_var = StringVar()
ent_kms_utl_var = StringVar()


# Labels i kolonne 1 (C0)
lbl_oppgiregnr = Label(hovedvindu,text="Oppgi regnr:")
lbl_oppgiregnr.grid(row=0,column=0,padx=15,pady=15,sticky=E)
lbl_infoomutleie = Label(hovedvindu,text="Informasjon om utleieforholdet")
lbl_infoomutleie.grid(row=1,column=0,padx=15,pady=15,sticky=E)
lbl_startpaleieforholdet = Label(hovedvindu,text="Start på leieforholdet:")
lbl_startpaleieforholdet.grid(row=2,column=0,padx=15,pady=15,sticky=E)
lbl_leidav = Label(hovedvindu,text="Leid av")
lbl_leidav.grid(row=3,column=0,padx=15,pady=15,sticky=E)
lbl_fornavn = Label(hovedvindu,text="Fornavn:")
lbl_fornavn.grid(row=4,column=0,padx=15,pady=15,sticky=E)
lbl_avsl_leie = Label(hovedvindu,text="Avslutning av utleieforholdet")
lbl_avsl_leie.grid(row=5,column=0,padx=15,pady=15,sticky=E)
lbl_tidsp_innl = Label(hovedvindu,text="Tidspunkt innlevert:")
lbl_tidsp_innl.grid(row=6,column=0,padx=15,pady=15,sticky=E)
lbl_kmst_innl = Label(hovedvindu,text="Kmstand innlevert:")
lbl_kmst_innl.grid(row=7,column=0,padx=15,pady=15,sticky=E)


# Entries i kolonne 2 (C1)
ent_oppgiregnr = Entry(hovedvindu,width=10)
ent_oppgiregnr.grid(row=0,column=1,padx=15,pady=15,sticky=W)
ent_startpaleieforholdet = Entry(hovedvindu,width=15,textvariable=ent_startpaleieforholdet_var,state="readonly")
ent_startpaleieforholdet.grid(row=2,column=1,padx=15,pady=15,sticky=W)
ent_fornavn = Entry(hovedvindu,width=15,textvariable=ent_fornavn_var,state="readonly")
ent_fornavn.grid(row=4,column=1,padx=15,pady=15,sticky=W)
ent_tidsp_innl = Entry(hovedvindu,width=15)
ent_tidsp_innl.grid(row=6,column=1,padx=15,pady=15,sticky=W)
ent_kmst_innl = Entry(hovedvindu,width=8)
ent_kmst_innl.grid(row=7,column=1,padx=15,pady=15,sticky=W)


# Labels i kolonne 3 (C2)
lbl_kms_utl = Label(hovedvindu,text="Kmstand utlevert:")
lbl_kms_utl.grid(row=2,column=2,padx=15,pady=15,sticky=E)
lbl_enavn = Label(hovedvindu,text="Etternavn:")
lbl_enavn.grid(row=4,column=2,padx=15,pady=15,sticky=E)
lbl_prksted = Label(hovedvindu,text="Parkeringssted:")
lbl_prksted.grid(row=6,column=2,padx=15,pady=15,sticky=E)
lbl_leiebelop = Label(hovedvindu,text="Leiebeløp:")
lbl_leiebelop.grid(row=7,column=2,padx=15,pady=15,sticky=E)

# Entries i kolonne 4 (C3)
ent_kms_utl = Entry(hovedvindu,textvariable=ent_kms_utl_var, state="readonly")
ent_kms_utl.grid(row=2,column=3,padx=15,pady=15,sticky=W)
ent_enavn = Entry(hovedvindu,textvariable=ent_enavn_var, state="readonly")
ent_enavn.grid(row=4,column=3,padx=15,pady=15,sticky=W)
ent_parksted = Entry(hovedvindu)
ent_parksted.grid(row=6,column=3,padx=15,pady=15,sticky=W)
ent_leiebelop = Entry(hovedvindu)
ent_leiebelop.grid(row=7,column=3,padx=15,pady=15,sticky=W)

# Buttons
btn_finnutleieforhold = Button(hovedvindu,text="Finn utleieforhold")
btn_finnutleieforhold.grid(row=0,column=2,padx=15,pady=15)
btn_avsluttutleieforhold = Button(hovedvindu,text="Avslutt utleieforhold",command=avslutte_leieforhold)
btn_avsluttutleieforhold.grid(row=8,column=4,padx=15,pady=15)
btn_avslutt = Btton(hovedvindu,text="Avslutt",command=hovedvindu.destroy)
btn_avslutt.grid(row=9,column=5,padx=15,pady=15,sticky=E)

hovedvindu.mainloop()
`

    const eksamen5 = `from tkinter import * 
import mysql.connector

bildatabase = mysql.connector.connect(host='localhost',port=3306,user='Bilsjef',passwd='eksamen2024',db='Bildeling')
opprettmarkor = bildatabase.cursor()
markor = bildatabase.cursor()

hovedvindu = Tk()
hovedvindu.title("Oppgave 5")

# Definere klasser
class Bil:
  def __init__(self,regnr,merke,modell,startdato,posisjon)
    self.__regnr = regnr
    self.__merke = merke
    self.__modell = modell
    self.__startdato = startdato
    self.__posisjon = posisjon
  
  # Gettere
  def get_regnr(self):
    return self.__regnr
  def get_merke(self):
    return self.__merke
  def get_modell(self):
    return self.__modell
  def get_startdato(self):
    return self.__startdato
  def get_posisjon(self):
    return self.__posisjon
    
  # Settere
  def set_regnr(self,regnr):
    self.__regnr = regnr
  def set_merke(self,merke):
    self.__merke = merke
  def set_modell(self,modell):
    self.__modell = modell
  def set_startdato(self,startdato):
    self.__startdato = startdato
  def set_posisjon(self, posisjon):
    self.__posisjon = posisjon
    
class Utleie:
  def __init__(self,regnr,utlevert,mobilnr,innlevert,kminn,belop)
    self.__regnr = regnr
    self.__utlevert = utlevert
    self.__mobilnr = mobilnr
    self.__innlevert = innlevert
    self.__kminn = kminn
    self.__belop = belop
    
  # Gettere
  def get_regnr(self):
      return self.__regnr
  def get_utlevert(self):
      return self.__utlevert
  def get_mobilnr(self):
      return self.__mobilnr
  def get_innlevert(self):
      return self.__innlevert
  def get_kminn(self):
      return self.__kminn
  def get_belop(self):
      return self.__belop
    
  # Settere
  def set_regnr(self,regnr):
    self.__regnr = regnr
    
  def set_utlevert(self,utlevert):
    self.__utlevert = utlevert
    
  def set_mobilnr(self,mobilnr):
    self.__mobilnr = mobilnr
    
  def set_innlevert(self,innlevert):
    self.__innlevert = innlevert
    
  def set_kminn(self,kminn):
    self.__kminn = kminn
    
  def set_belop(self,belop):
    self.__belop = belop

class Kunde:
  def __init__(self,mobilnr,fornavn,etternavn,betalingskort):
    self.__mobilnr = mobilnr
    self.__fornavn = fornavn
    self.__etternavn = etternavn
    self.__betalingskort = betalingskort
    
  # Gettere
  def get_mobilnr(self):
    return self.__mobilnr
  def get_fornavn(self):
    return self.__fornavn
  def get_etternavn(self):
    return self.__etternavn
  def get_betlaingskort(self):
    return self.__betalingskort
  
  # Settere 
  def set_mobilnr(self,mobilnr):
    self.__mobilnr = mobilnr
    
  def set_fornavn(self,fornavn):
    self.__fornavn = fornavn
    
  def set_etternavn(self,etternavn):
    self.__etternavn = etternavn
    
  def set_betalingskort(self,betalingskort):
    self.__betalingskort = betalingskort)

# Testprint
# print(Bil.get_regnr)

def avslutteleieforhold():
  
  regnr = ent_regnr.get()
  mobilnr = mobilnr.get()
  utlevert = utlevert.get()
  # Om man har ditt og datt, insert det inn i dtabasen og
  # Instansiere objektinstansene
  # som skal inn
  if regnr and mobilnr and utlevert:
    bilinstans = Bil(regnr)
    kundeinstans = Kunde(mobilnr)
    utleieinstans = Utleie(regnr,utlevert)
    
    # Også skal dette #INSERTES INTO bildatabase
    
# Resten av GUI-laget
    
hovedvindu.mainloop()
  `


    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/prg1100')}>Grunnleggende programmering 2</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">PRG1100 - Grunnleggende programmering 2</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold mb-2">Hundeopplysninger</h2></CardHeader>
                            <CardBody>

                                <p>Arbeidskravet gikk ut på å finne hundeopplysninger basert på brukerinput i et grafisk brukergrensesnitt.</p>

                                <div>
                                    <CodeBlock
                                        code={prg1100_arbkrav1code}
                                        language="python"
                                        showLineNumbers={true}
                                        maxHeight="600px"
                                    />
                                </div>

                                <p>Koden forutsetter at det eksisterer noen .txt-filer før man kan manipulere postene.</p>

                                <div>
                                    <CodeBlock
                                        code={hundtxt}
                                        language="Hund.txt"
                                        showLineNumbers={false}
                                        maxHeight="600px"
                                    />
                                </div>


                                <div>
                                    <CodeBlock
                                        code={hundeeiertxt}
                                        language="Hundeeier.txt"
                                        showLineNumbers={false}
                                        maxHeight="600px"
                                    />
                                </div>

                                <div>
                                    <CodeBlock
                                        code={oppdrettertxt}
                                        language="Oppdretter.txt"
                                        showLineNumbers={false}
                                        maxHeight="600px"
                                    />
                                </div>

                                <p>Slik det ser ut når du åpner programmet. Hovedvindu.</p>
                                <img
                                    alt="Skjermbilde av grafisk brukergrensesnitt"
                                    src="/images/PRG1100/FinnHund-1.png"
                                    width="100%"
                                    className="rounded-lg border border-gray-200 dark:border-gray-700"
                                />

                                <p>Man skriver inn hundens identifikasjonsnummer. Dette er i praksis primærnøkkelen.</p>
                                <img
                                    alt="Skjermbilde av grafisk brukergrensesnitt"
                                    src="/images/PRG1100/FinnHund-2.png"
                                    width="100%"
                                    className="rounded-lg border border-gray-200 dark:border-gray-700"
                                />

                                <p>Knappen "Finn hundeopplysninger" kjører def`en som er definert i koden over. Funksjonen leser igjennom filene og returnerer tekststrengene til Entry-widgetene som er satt til read-only.</p>
                                <img
                                    alt="Skjermbilde av grafisk brukergrensesnitt"
                                    src="/images/PRG1100/FinnHund-3.png"
                                    width="100%"
                                    className="rounded-lg border border-gray-200 dark:border-gray-700"
                                />

                                <p>Siden tekstformateringen er "utf-8" kan man skrive alle tegn i utf-8-tegnsettet. Dette er først og fremst tiltenkt tegn som à og æ "å" å, men dette tillater også klassiske Unicode-tegn som ☺ (U+263A)(må ikke forveksles med ☺️(U+FE0F)).</p>
                                <img
                                    alt="Skjermbilde av grafisk brukergrensesnitt"
                                    src="/images/PRG1100/FinnHund-4.png"
                                    width="100%"
                                    className="rounded-lg border border-gray-200 dark:border-gray-700"
                                />

                                <p>Om man taster inn en hunde-ID som ikke finnes i hund.txt får man melding om dette.</p>
                                <img
                                    alt="Skjermbilde av grafisk brukergrensesnitt"
                                    src="/images/PRG1100/FinnHund-5.png"
                                    width="100%"
                                    className="rounded-lg border border-gray-200 dark:border-gray-700"
                                />



                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv2" title="Arbeidskrav 2">
                        <Card>
                            <CardHeader></CardHeader>
                            <CardBody>
                                <div>
                                    <CodeBlock
                                        code={arbkrav2code}
                                        language="python"
                                        showLineNumbers={true}
                                        maxHeight={500}
                                    />
                                </div>

                                <div>
                                    <p>SQL-kode for å opprette tabeller og populere dem med data.</p>
                                    <CodeBlock
                                        code={arbkrv2sqlcode}
                                        language="sql"
                                        showLineNumbers={false}
                                        maxHeight={500}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader></CardHeader>
                            <CardBody>
                                <div>
                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <iframe
                                            src="/pdfs/PRG1100/PRG1100-1%20Grunnleggende%20programmering%202%2024.05.2024.pdf"
                                            width="100%"
                                            height="600px"
                                            title="PRG1100 Eksamen"
                                            className="border-0"
                                        />
                                    </div>
                                    <div>
                                        <p>Oppgave 1</p>
                                        <CodeBlock
                                            code={eksamen1}
                                            language="python"
                                            showLineNumbers={true}
                                            maxHeight={500}
                                        />
                                    </div>
                                    <div>
                                        <p>Oppgave 2</p>
                                        <CodeBlock
                                            code={eksamen2}
                                            language="python"
                                            showLineNumbers={true}
                                            maxHeight={500}
                                        />
                                    </div>
                                    <div>
                                        <p>Oppgave 3</p>
                                        <CodeBlock
                                            code={eksamen3}
                                            language="python"
                                            showLineNumbers={true}
                                            maxHeight={500}
                                        />
                                    </div>
                                    <div>
                                        <p>Oppgave 4</p>
                                        <CodeBlock
                                        code={eksamen4}
                                        language="python"
                                        showLineNumbers={true}
                                        maxHeight={500}
                                        />
                                    </div>
                                    <div>
                                        <p>Oppgave 5</p>
                                        <CodeBlock
                                            code={eksamen5}
                                            language="python"
                                            showLineNUmbers={true}
                                            maxHeight={500}
                                        />
                                    </div>
                                </div>


                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}

export default PRG1100;