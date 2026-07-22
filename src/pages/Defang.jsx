import { useNavigate } from "react-router-dom";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedTabs from "../components/AnimatedTabs";

// Skjermbilder fra et ferskt debug-bygg (v0.1.6), kjørt i Android-emulator og
// tatt med `adb screencap`. Filene ligger i public/images/Defang/.
const SHOTS = [
    { file: "intent_gate.png", title: "Intent gate", caption: "Pause i fullskjerm: en opplysning, en «spor stien»-sveip og nedtelling før en overvåket app åpnes." },
    { file: "onboarding.png", title: "Onboarding", caption: "«This is a speed bump. Not a wall.» Tonen settes direkte, uten pekefinger." },
    { file: "cue_loop.png", title: "Cue → rutine → belønning", caption: "Onboarding forklarer vane-loopen appene har industrialisert." },
    { file: "watched_apps.png", title: "Overvåkede apper", caption: "Sorter apper i Verktøy / Overvåket / Gjemt. Du velger hvilke som får fartsdumpen." },
    { file: "timer_adjustment.png", title: "Tidsinnstillinger", caption: "Portforsinkelse (8 sek), øktgrense (15 min) og nedkjøling (30 min)." },
    { file: "tidbit_library.png", title: "Tidbit-bibliotek", caption: "Kildebelagte fakta om manipulerende design — pull-to-refresh, uendelig scroll, variabel belønning." },
];

// Egen ramme per tema: lyse skjermbilder når siden er i lys modus, mørke
// skjermbilder (samme skjermer, tatt i Android sitt nattmodus) i mørk modus.
function PhoneShot({ file, title, caption }) {
    const base = `${process.env.PUBLIC_URL}/images/Defang`;
    const darkFile = file.replace(/\.png$/, "_dark.png");
    return (
        <figure className="flex flex-col gap-3">
            <div className="mx-auto w-full max-w-[240px] aspect-[9/20] rounded-[0.75rem] border-4 border-black bg-content2 overflow-hidden shadow-md">
                <img
                    src={`${base}/${file}`}
                    alt={`Defang – ${title}`}
                    loading="lazy"
                    className="h-full w-full object-cover dark:hidden"
                />
                <img
                    src={`${base}/${darkFile}`}
                    alt={`Defang – ${title}`}
                    loading="lazy"
                    className="hidden h-full w-full object-cover dark:block"
                />
            </div>
            <figcaption className="text-center">
                <span className="block text-sm font-semibold text-foreground">{title}</span>
                <span className="block text-xs text-default-500">{caption}</span>
            </figcaption>
        </figure>
    );
}

const Defang = () => {
    const navigate = useNavigate();

    return (
        <AnimatedPage className="container mx-auto px-4 py-8">

            {/* BREADCRUMBS */}
            <div className="py-1">
                <Breadcrumbs key="solid">
                    <BreadcrumbItem onPress={() => navigate("/")}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate("/projects")}>Prosjekter</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate("/projects/defang")}>Defang</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            {/* TITTEL + INGRESS */}
            <h1 className="text-3xl font-bold mb-2">Defang — en fartsdump, ikke en mur</h1>
            <p className="text-default-500 max-w-3xl mb-5">
                Android-oppstarter som legger en bevisst pause mellom impulsen og handlingen. Ikke en blokker
                som tvinger deg til bråslutt, men et verktøy som bryter selve vane-loopen bak
                tankeløs scrolling. Bygget i Kotlin med Jetpack Compose og AccessibilityService.
            </p>

            {/* LENKER */}
            <div className="flex flex-wrap gap-2 mb-8">
                <a
                    href="https://github.com/Scandiking/Defang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-default-300 text-foreground text-sm font-medium hover:bg-content2 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
                    </svg>
                    Se kode på GitHub
                </a>
                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-content2 text-default-600 text-xs font-medium">
                    Kotlin · Jetpack Compose · GPLv3 · v0.1.6
                </span>
            </div>

            {/* FANER */}
            <AnimatedTabs variant="solid" aria-label="Defang">

                {/* --- OVERSIKT --- */}
                <Tab key="oversikt" title="Oversikt">
                    <Card>
                        <CardBody className="gap-4 leading-relaxed">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Problemet</h2>
                                <p className="text-default-600">
                                    Sosiale apper er ikke laget for å bli lagt fra seg. De er konstruert rundt
                                    vane-loopen <span className="font-medium text-foreground">signal → rutine → belønning</span>:
                                    en varsling er signalet, appen åpner seg umiddelbart, og en algoritmestyrt feed med
                                    uendelig scroll leverer uforutsigbare belønninger som holder deg der. Så lenge som mulig.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Hvorfor eksisterende tiltak ikke holder</h2>
                                <p className="text-default-600">
                                    Systemtiltak som gråtoner, digitalt velvære, de fleste minimalistiske launchere, angriper bare
                                    <span className="font-medium text-foreground"> signal-fasen</span>. De gjør ingenting når
                                    appen først er åpen. Verre er det at Instagrams egen tidsgrense kommer med en
                                    «15 minutter til»-knapp du trykker på uten å tenke. Grensen finnes, men utgangen er så
                                    friksjonsfri at den trener deg til å <em>ignorere</em> grensen, ikke respektere den.
                                    Mottiltaket blir en del av vanen.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Løsningen: friksjon, ikke forbud</h2>
                                <p className="text-default-600">
                                    Defang blokkerer ikke. Du kan fortsatt åpne Instagram, og du kan fortsatt overstyre
                                    timeren. Poenget er å legge inn nettopp nok friksjon til at du må <em>ville</em> det —
                                    å gjøre den ubevisste åpningen bevisst. En mur skaper press, og press krever utløp.
                                    En fartsdump skaper pause. Pause til å gjøre et bevisst valg.
                                </p>
                            </div>
                            <div className="rounded-lg bg-content2 p-4">
                                <p className="text-sm text-default-600">
                                    <span className="font-semibold text-foreground">Vanebrudd, ikke symptombehandling.</span>{" "}
                                    En ren blokker fjerner bare tilgangen, altså symptomet. I det øyeblikket blokkeren er borte,
                                    er loopen intakt, og man har gått tilbake igjen. Defang retter seg mot selve loopen: den bryter <em>signalet</em> med en
                                    pause før, og forsøker å gi en <em>ekte belønning</em> etterpå.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </Tab>

                {/* --- HJERNEN BAK --- */}
                <Tab key="hjernen" title="Hjernen bak">
                    <div className="flex flex-col gap-4">
                        <Card>
                            <CardHeader className="pb-0">
                                <h2 className="text-xl font-semibold">Cue → rutine → belønning</h2>
                            </CardHeader>
                            <CardBody className="leading-relaxed text-default-600">
                                <p>
                                    Hver vane går på en tredelt loop: et <span className="font-medium text-foreground">signal (cue)</span> utløser
                                    en <span className="font-medium text-foreground">rutine</span> som gir en <span className="font-medium text-foreground">belønning</span>.
                                    Apper har industrialisert signalet. Den røde badgen, varselet på nøyaktig riktig tidspunkt, muskelminnet
                                    som låser opp telefonen når du kjeder deg...  Alt er designede signaler som starter rutinen før du har
                                    bestemt deg for noe. Defang angriper to punkter loopen faktisk lar seg røre på: signalet før, og landingen etter.
                                </p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader className="pb-0">
                                <h2 className="text-xl font-semibold">Dopamin: kortvarig vs. vedvarende</h2>
                            </CardHeader>
                            <CardBody className="leading-relaxed text-default-600">
                                <p>
                                    Et scroll gir en dopamin-topp som falmer på sekunder. Dette er akkurat kort nok til at du trenger neste ladning.
                                    Å fullføre noe konkret gir en annen slags belønning: den som varer. Derfor foreslår Defang små,
                                    fullførbare oppgaver («sett én ting tilbake der den hører hjemme») etter en økt. Ikke for å gjøre deg
                                    produktiv, men for å gi belønningssystemet noe <em>ekte</em> å jobbe med før loopen resettes.
                                </p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader className="pb-0">
                                <h2 className="text-xl font-semibold">Sosial validering: hjernen ser ingen forskjell</h2>
                            </CardHeader>
                            <CardBody className="leading-relaxed text-default-600">
                                <p>
                                    Hjernen skiller ikke en <span className="font-medium text-foreground">Instagram-like</span> fra
                                    noen som står foran deg, smiler og gir to tomler opp. Samme belønningskrets, samme signal om
                                    sosial aksept, samme dopamin. Det er dette som gjør like-knappen så potent: den kaprer en
                                    eldgammel mekanisme for flokktilhørighet og leverer den i uforutsigbare doser, når som helst,
                                    gjennom en glassplate i lomma di. Følelsen er ekte. Det er leveringssystemet som er manipulert.
                                </p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader className="pb-0">
                                <h2 className="text-xl font-semibold">Deceptive design / dark patterns</h2>
                            </CardHeader>
                            <CardBody className="leading-relaxed text-default-600 gap-3">
                                <p>Mekanismene er ikke tilfeldige. De er valgt bevisst, mot deg:</p>
                                <ul className="list-disc pl-5 space-y-1.5">
                                    <li><span className="font-medium text-foreground">Pull-to-refresh</span> er modellert på spilleautomaten. Det er <em>uforutsigbarheten</em> i hva som dukker opp (variabel belønning) som holder tommelen i gang.</li>
                                    <li><span className="font-medium text-foreground">Den røde badgen</span> er rød fordi rød kaprer oppmerksomhet raskere enn noen annen farge. Fargen er en beslutning.</li>
                                    <li><span className="font-medium text-foreground">Varslingen</span> kommer på et optimalisert tidspunkt. Signalet er tunet for å treffe når du er mest mottakelig.</li>
                                    <li><span className="font-medium text-foreground">Uendelig scroll og autoplay</span> fjerner ethvert naturlig stoppunkt der du ellers ville tatt en beslutning.</li>
                                    <li><span className="font-medium text-foreground">Fargekodet feed</span> gjør innholdet «belønnende» å se på. Derfor kan Defang legge gråtone <em>bare</em> på overvåkede apper.</li>
                                </ul>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader className="pb-0">
                                <h2 className="text-xl font-semibold">Pausen er der refleksjonen bor</h2>
                            </CardHeader>
                            <CardBody className="leading-relaxed text-default-600">
                                <p>
                                    Systemene som jobber mot deg er ikke rettet mot kunnskapen din. Du vet allerede om <em>"algoritmen"</em>. Systemene er rettet mot den delen av
                                    hjernen din som handler før du tenker. Å vite at Instagram er designet for å holde deg der, har ikke
                                    vært nok. Defang ber deg ikke prøve hardere. Den setter en liten pause mellom impulsen og
                                    handlingen — og det er i den pausen prefrontal cortex, den bevisste beslutningen, får plass.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </Tab>

                {/* --- SLIK VIRKER DET --- */}
                <Tab key="virker" title="Slik virker det">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { t: "Intensjonsport", d: "Når du åpner en overvåket app, dukker en full-skjerms pause opp før appen laster. Du leser en tidbit om hvordan appen manipulerer deg, og velger et forhåndsdeklarert formål — eller venter ut nedtellingen. Kan alltid avbrytes: det er en fartsdump, ikke en felle." },
                            { t: "Sesjonstidtaker (HUD)", d: "Inne i appen teller en liten HUD ned øktgrensen din (standard 15 min). Når den når null, skyves appen automatisk til bakgrunnen." },
                            { t: "Sluttkort med friksjon", d: "Ved øktslutt: hvor lenge du var inne, ditt eget oppgitte formål vs. tid brukt, og «Jeg trenger mer tid» — men knappen er skjult de første 30 sekundene, krever en skriftlig begrunnelse (min. 10 tegn), og gjelder bare én gang per dag på tvers av alle apper." },
                            { t: "Nedkjølingslås", d: "Etter økta (eller forlengelsen) låses appen en cooldown-periode (standard 30 min). Å lukke og umiddelbart åpne igjen blokkeres. Låsen overlever omstart av telefonen." },
                            { t: "Per-app gråtone", d: "Overvåkede apper rendres i gråtone via en overlay — de dopamin-kodede fargene som gjør feeden belønnende fjernes, mens kamera, kart og kalkulator beholder fargene." },
                            { t: "Varselssamling", d: "Varsler fra overvåkede apper holdes tilbake og leveres samlet i tidsvinduer du velger. Anrop og meldinger fra kontakter i adresseboka slipper alltid gjennom." },
                        ].map((f) => (
                            <Card key={f.t} className="h-full">
                                <CardBody className="gap-1.5">
                                    <h3 className="text-lg font-semibold text-foreground">{f.t}</h3>
                                    <p className="text-sm text-default-600 leading-relaxed">{f.d}</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Tab>

                {/* --- SKJERMBILDER --- */}
                <Tab key="skjermbilder" title="Skjermbilder">
                    <Card>
                        <CardBody className="gap-6">
                            <p className="text-sm text-default-500">
                                Skjermbilder fra et ferskt debug-bygg (v0.1.6), kjørt i Android-emulator.
                                De følger temaet på siden — bytt til lys/mørk modus for å se appens eget lyse eller mørke tema.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
                                {SHOTS.map((s) => (
                                    <PhoneShot key={s.file} {...s} />
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </Tab>

                {/* --- TEKNOLOGI --- */}
                <Tab key="teknologi" title="Teknologi">
                    <Card>
                        <CardBody className="gap-4 leading-relaxed text-default-600">
                            <div>
                                <h2 className="text-xl font-semibold text-foreground mb-2">Teknologistabel</h2>
                                <ul className="list-disc pl-5 space-y-1.5">
                                    <li><span className="font-medium text-foreground">Kotlin + Jetpack Compose</span> — launcher- og innstillings-UI.</li>
                                    <li><span className="font-medium text-foreground">AccessibilityService</span> — deteksjon av app i forgrunnen via <code>TYPE_WINDOW_STATE_CHANGED</code>.</li>
                                    <li><span className="font-medium text-foreground">View-baserte overlays</span> — intent gate, HUD og end card kjører i tjenesten, uten Activity-livssyklus.</li>
                                    <li><span className="font-medium text-foreground">Room</span> — persistering av økter og app-konfigurasjon.</li>
                                    <li><span className="font-medium text-foreground">DataStore</span> — onboarding-status og daglig forlengelses-sporing.</li>
                                    <li><span className="font-medium text-foreground">Hilt</span> — dependency injection.</li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-3 py-1 rounded-full bg-content2 text-default-600">minSdk 26 (Android 8.0)</span>
                                <span className="px-3 py-1 rounded-full bg-content2 text-default-600">targetSdk 35</span>
                                <span className="px-3 py-1 rounded-full bg-content2 text-default-600">Ingen root</span>
                                <span className="px-3 py-1 rounded-full bg-content2 text-default-600">GPLv3</span>
                            </div>
                            <p className="text-sm text-default-500">
                                Plattformbegrensning: uten root eller et tredjeparts-API kan ikke launcheren fjerne Reels-fanen,
                                skru av pull-to-refresh eller endre feed-algoritmen. Defang eier <em>signalet</em> og <em>landingen</em> —
                                ikke innsiden av appen.
                            </p>
                        </CardBody>
                    </Card>
                </Tab>

            </AnimatedTabs>
        </AnimatedPage>
    );
};

export default Defang;
