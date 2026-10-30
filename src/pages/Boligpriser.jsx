import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedTabs from "../components/AnimatedTabs";

// Grafer generert av selve pipelinen (output/figures/ i pyspark-california-housing),
// konvertert til WebP. Hvit bakgrunn, så de vises på et hvitt kort i begge temaer.
const IMG_BASE = `${process.env.PUBLIC_URL}/images/Boligpriser`;
const REPO = "https://github.com/Scandiking/pyspark-california-housing";

const CLUSTER_MAP = {
    file: "04_geographic_price_clusters.webp",
    title: "Prisregioner funnet automatisk",
    caption: "Datamaskinen fant Californias dyre kyst og billige innland, uten kart og bare ut fra tallene. Hvert kryss er midten av en prisregion.",
};

const FINDINGS = [
    {
        file: "06_income_vs_value.webp",
        title: "Inntekt styrer prisen mest",
        caption: "Jo høyere inntekt i området, jo dyrere boliger. Ingen annen faktor henger like tett sammen med prisen.",
    },
    {
        file: "02_price_by_income.webp",
        title: "De rikeste områdene er ~3× dyrere",
        caption: "Rundt 390 000 dollar i snitt i øverste inntektsgruppe, mot rundt 125 000 i den laveste.",
    },
    {
        file: "07_value_box_by_ocean.webp",
        title: "Kysten koster dobbelt",
        caption: "Områder ved kysten og bukta ligger på omtrent dobbel pris av innlandet, og prisene varierer mer.",
    },
    {
        file: "05_value_distribution.webp",
        title: "Et skjult tak i dataene",
        caption: "Folketellingen kuttet alle verdier på 500 000 dollar. Pipelinen oppdager og merker disse radene, i stedet for å late som de er ekte.",
    },
    {
        file: "01_correlation_heatmap.webp",
        title: "Hva henger sammen med hva",
        caption: "Oversikt over hvor sterkt hver egenskap henger sammen med de andre. Inntekt lyser tydeligst opp mot pris.",
    },
    {
        file: "03_price_by_ocean_proximity.webp",
        title: "Snittpris per beliggenhet",
        caption: "Samme kysteffekt, vist som snitt per kategori. Øyene og bukta ligger øverst, innlandet klart lavest.",
    },
];

const STATS = [
    { value: "20 640", label: "boligområder analysert" },
    { value: "5", label: "prisregioner funnet automatisk" },
    { value: "5,2 mill.", label: "rader i skaleringstest" },
    { value: "31", label: "automatiske tester" },
];

// Konkret dokumentasjon på ferdigheter, hentet fra det prosjektet faktisk gjør.
const SKILLS = [
    { title: "Datakvalitet", text: "Fant og fylte inn 207 manglende verdier, fjernet ugyldige rader og merket verdier som var kunstig avkuttet." },
    { title: "Skalerbar kode", text: "Samme kode kjørt på 5,2 millioner rader uten én linje endret." },
    { title: "Testing og automatisering", text: "31 automatiske tester som kjøres på nytt ved hver endring, via GitHub Actions." },
    { title: "Formidling", text: "Funnene presentert i sju grafer, forklart uten fagspråk." },
];

const icon = (d) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
);

const STEPS = [
    {
        n: 1, label: "Hente",
        text: "Leser inn rådataene.",
        tech: "Eksplisitt skjema, ingen inferSchema",
        icon: icon("M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"),
    },
    {
        n: 2, label: "Rydde",
        text: "Fyller inn tall som mangler, fjerner feil og merker mistenkelige verdier.",
        tech: "Median-imputering av 207 null-verdier",
        icon: icon("M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"),
    },
    {
        n: 3, label: "Berike",
        text: "Regner ut nye, mer nyttige tall, som rom per husstand.",
        tech: "6 nye features, inntekts- og aldersgrupper",
        icon: icon("M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"),
    },
    {
        n: 4, label: "Analysere",
        text: "Finner mønstre og grupperer områdene i prisregioner.",
        tech: "Aggregering + k-means i Spark MLlib",
        icon: icon("m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"),
    },
    {
        n: 5, label: "Visualisere",
        text: "Lager grafene du ser på denne siden.",
        tech: "matplotlib + seaborn, 7 figurer",
        icon: icon("M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"),
    },
];

const BENCH = [
    { label: "1×", rows: 20640, rowsText: "20 640 rader", time: "3,3 s" },
    { label: "50×", rows: 1032000, rowsText: "1 032 000 rader", time: "6,5 s" },
    { label: "250×", rows: 5160000, rowsText: "5 160 000 rader", time: "45,7 s" },
];
const BENCH_MAX = BENCH[BENCH.length - 1].rows;

const LOG_LINES = [
    "17:01:34 | INFO  | ingest    | loaded 20,640 rows, 10 columns (3.8s)",
    "17:01:37 | INFO  | clean     | imputed 207 nulls, 0 dupes, dropped 0 invalid -> 20,640 rows (3.0s)",
    "17:01:37 | INFO  | transform | added 6 features (0.1s)",
    "17:01:48 | INFO  | analysis  | k-means (k=5) converged in 20 iterations, WSSSE=10,222 (3.6s)",
    "17:01:50 | INFO  | pipeline  | pipeline finished in 23.7s",
];

const TECH = ["Python", "Apache Spark (PySpark 3.5)", "Spark MLlib", "pandas", "matplotlib", "seaborn", "pytest", "GitHub Actions", "Dev Containers"];

// Alle 31 testene i tests/ (pytest teller hver parametriserte variant som én test),
// gruppert etter steget i pipelinen de sjekker.
const TESTS = [
    {
        group: "Rydde",
        items: [
            "Manglende antall soverom blir fylt inn, så ingen hull står igjen.",
            "Hullet fylles med medianen: av 10, 30 og 50 blir det 30.",
            "Rader med null husstander eller null innbyggere fjernes.",
            "To helt like rader blir til én.",
            "Boligverdier på taket (500 001 dollar) blir merket.",
            "Boligalder på taket (52 år) blir merket.",
            "Rader uten feil får være i fred: 5 inn, 5 ut.",
        ],
    },
    {
        group: "Berike",
        items: [
            "Forholdstallene regnes riktig, f.eks. 100 rom og 10 husstander gir 10 rom per husstand.",
            "Inntekt 1,5 havner i gruppen under 20k.",
            "Inntekt 3,0 havner i gruppen 20-40k.",
            "Inntekt 5,0 havner i gruppen 40-60k.",
            "Inntekt 7,0 havner i gruppen 60-80k.",
            "Inntekt 9,0 havner i gruppen 80k+.",
            "Boligalder 5 år havner i gruppen 0-10 år.",
            "Boligalder 18 år havner i gruppen 10-25 år.",
            "Boligalder 30 år havner i gruppen 25-40 år.",
            "Boligalder 45 år havner i gruppen 40+ år.",
            "Alle seks nye kolonner er på plass.",
            "Ingen rader legges til eller forsvinner: 4 inn, 4 ut.",
        ],
    },
    {
        group: "Analysere",
        items: [
            "k-means finner nøyaktig 5 prisregioner når punktene er tydelig spredt.",
            "Resultatet har kolonnene kartet trenger: region, snittpris og midtpunkt.",
            "Snittpris per beliggenhet gir nøyaktig én rad per kategori.",
        ],
    },
    {
        group: "Visualisere",
        items: [
            "Inntektsgrafen lagres som en PNG-fil som ikke er tom.",
            "Fordelingsgrafen lagres som en PNG-fil med riktig navn.",
        ],
    },
    {
        group: "Oppsettsjekk før kjøring",
        items: [
            "En støttet Python-versjon blir godkjent.",
            "En Python-versjon som ikke støttes, stoppes med tydelig feilmelding.",
            "PySpark installert: godkjent.",
            "PySpark mangler: tydelig feilmelding.",
            "Java finnes ikke: tydelig feilmelding, siden Spark trenger Java.",
            "Java finnes og starter: godkjent.",
            "Java finnes, men starter ikke: tydelig feilmelding.",
        ],
    },
];
const TEST_TOTAL = TESTS.reduce((n, g) => n + g.items.length, 0);

// Klikkbar graf som åpner seg i fullskjerm.
function ChartFigure({ chart, onOpen, className = "" }) {
    return (
        <button
            type="button"
            onClick={() => onOpen(chart)}
            aria-label={`Vis «${chart.title}» i fullskjerm`}
            className={`block w-full rounded-lg bg-white p-2 shadow-sm cursor-zoom-in transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
        >
            <img src={`${IMG_BASE}/${chart.file}`} alt={chart.title} loading="lazy" className="w-full h-auto rounded" />
        </button>
    );
}

function Person({ className = "w-6 h-6" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    );
}

function Pile({ count }) {
    return (
        <div className="flex flex-col-reverse gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="h-1.5 w-8 rounded-sm bg-primary/70" />
            ))}
        </div>
    );
}

// Illustrasjon: én arbeider med én stor bunke vs. fire arbeidere med hver sin lille bunke.
function SplitWorkIllustration() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-default-600">
            <div className="rounded-lg bg-content2 p-4 flex flex-col items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-default-500">Vanlig måte</span>
                <div className="flex items-end gap-3 h-28">
                    <Person className="w-8 h-8 text-default-500" />
                    <Pile count={12} />
                </div>
                <span className="text-sm text-center">Én maskin tar alt. Går tregt, eller går tom for minne.</span>
            </div>
            <div className="rounded-lg bg-primary/10 p-4 flex flex-col items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">Med Spark</span>
                <div className="flex items-end gap-3 h-28">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <Pile count={3} />
                            <Person className="w-6 h-6 text-primary" />
                        </div>
                    ))}
                    <span className="text-2xl font-bold text-primary self-center">→ Σ</span>
                </div>
                <span className="text-sm text-center">Jobben deles opp, kjøres samtidig og legges sammen.</span>
            </div>
        </div>
    );
}

function Arrow() {
    return (
        <div className="flex items-center justify-center text-default-400 rotate-90 lg:rotate-0" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </div>
    );
}

function StepCard({ step }) {
    return (
        <div className="flex-1 rounded-lg bg-content1 p-4 shadow-sm flex flex-col gap-2 min-w-0">
            <div className="flex items-center gap-2 text-primary">
                {step.icon}
                <span className="text-xs font-semibold text-default-500">{step.n}</span>
            </div>
            <h3 className="font-semibold text-foreground">{step.label}</h3>
            <p className="text-sm text-default-600">{step.text}</p>
            <p className="text-xs text-default-400 mt-auto">{step.tech}</p>
        </div>
    );
}

const Boligpriser = () => {
    const navigate = useNavigate();
    const [lightbox, setLightbox] = useState(null);

    // Lukk med Escape og lås scrolling mens modalen er åpen.
    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e) => e.key === "Escape" && setLightbox(null);
        window.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [lightbox]);

    return (
        <AnimatedPage className="container mx-auto px-4 py-8">

            {/* BREADCRUMBS */}
            <div className="py-1">
                <Breadcrumbs key="solid">
                    <BreadcrumbItem onPress={() => navigate("/")}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate("/projects")}>Prosjekter</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate("/projects/boligpriser")}>Boligpriser i California</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            {/* TITTEL + INGRESS */}
            <h1 className="text-3xl font-bold mb-2">Boligpriser i California: hva styrer prisen?</h1>
            <p className="text-default-500 max-w-3xl mb-5">
                Jeg tok boligdata for 20 640 områder i California og ryddet opp i dem: fylte inn tall som manglet
                og fjernet rader som ikke ga mening. Deretter lot jeg datamaskinen finne ut hva som driver prisene,
                og hvilke områder som hører sammen. Alt er bygget med verktøy laget for datamengder som er for
                store for én datamaskin.
            </p>

            {/* LENKER */}
            <div className="flex flex-wrap gap-2 mb-8">
                <a
                    href={REPO}
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
                    Python · PySpark · MLlib · MIT
                </span>
            </div>

            {/* FANER */}
            <AnimatedTabs variant="solid" aria-label="Boligpriser i California">

                {/* --- OVERSIKT --- */}
                <Tab key="oversikt" title="Oversikt">
                    <div className="flex flex-col gap-4">
                        <Card>
                            <CardBody className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                <div className="flex flex-col gap-4 leading-relaxed">
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">Kort fortalt</h2>
                                        <p className="text-default-600">
                                            Datasettet beskriver boligene i hele California, fordelt på 20 640 små områder fra
                                            folketellingen i 1990. Hvert område har vanligvis mellom 600 og 3 000 innbyggere.
                                            For hvert område finnes boligpris, inntekt, antall rom og beliggenhet.
                                        </p>
                                        <p className="text-default-600 mt-2">
                                            Programmet rydder opp i dataene, finner hva som henger sammen med prisen, og
                                            deler delstaten inn i prisregioner helt på egen hånd.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">Hvorfor er det nyttig?</h2>
                                        <p className="text-default-600">
                                            Det er samme oppskrift som brukes på banktransaksjoner, salgstall og sensordata:
                                            hent, rydd, finn mønstre, og vis det frem så folk kan ta beslutninger.
                                        </p>
                                    </div>
                                </div>
                                <figure className="flex flex-col gap-2">
                                    <ChartFigure chart={CLUSTER_MAP} onOpen={setLightbox} />
                                    <figcaption className="text-xs text-default-500 text-center">{CLUSTER_MAP.caption}</figcaption>
                                </figure>
                            </CardBody>
                        </Card>

                        {/* NØKKELTALL */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {STATS.map((s) => (
                                <Card key={s.label}>
                                    <CardBody className="items-center text-center py-5 gap-1">
                                        <span className="text-3xl font-bold text-primary">{s.value}</span>
                                        <span className="text-sm text-default-500">{s.label}</span>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>

                        <Card>
                            <CardHeader className="pb-0">
                                <h2 className="text-xl font-semibold">Hva er Spark?</h2>
                            </CardHeader>
                            <CardBody className="gap-4">
                                <p className="text-default-600 leading-relaxed">
                                    Apache Spark er et gratis verktøy med åpen kildekode for å behandle store datamengder.
                                    I stedet for at én datamaskin går gjennom alt, deler Spark dataene i biter og lar mange
                                    maskiner, eller mange prosessorkjerner, jobbe på hver sin bit samtidig. Etterpå legges
                                    svarene sammen. PySpark betyr at Spark styres fra Python.
                                </p>
                                <SplitWorkIllustration />
                                <p className="text-default-600 leading-relaxed">
                                    Spark er laget for data som er for store for Excel eller én server. Koden min er skrevet
                                    slik at den fungerer likt på 20 000 rader og på millioner.
                                </p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardHeader className="pb-0">
                                <h2 className="text-xl font-semibold">Kompetanse i praksis</h2>
                            </CardHeader>
                            <CardBody>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {SKILLS.map((s) => (
                                        <div key={s.title} className="rounded-lg bg-content2 p-4">
                                            <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                                            <p className="text-sm text-default-600">{s.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Tab>

                {/* --- FUNNENE --- */}
                <Tab key="funn" title="Funnene">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {FINDINGS.map((f) => (
                            <Card key={f.file}>
                                <CardBody className="gap-3">
                                    <ChartFigure chart={f} onOpen={setLightbox} />
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                                        <p className="text-sm text-default-600">{f.caption}</p>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Tab>

                {/* --- SLIK VIRKER DET --- */}
                <Tab key="virker" title="Slik virker det">
                    <Card>
                        <CardBody className="gap-4">
                            <p className="text-default-600">
                                Fem steg, ett ansvar hver. Det tunge arbeidet skjer fordelt i Spark. Bare små, ferdige
                                resultater flyttes til én maskin for å tegne grafer.
                            </p>
                            <div className="flex flex-col lg:flex-row gap-3 lg:items-stretch">
                                <div className="flex-[4] rounded-xl bg-primary/10 p-3 flex flex-col gap-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">Spark: fordelt på mange kjerner</span>
                                    <div className="flex flex-col lg:flex-row gap-2 lg:items-stretch">
                                        {STEPS.slice(0, 4).map((s, i) => (
                                            <div key={s.n} className="contents">
                                                {i > 0 && <Arrow />}
                                                <StepCard step={s} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Arrow />
                                <div className="flex-1 rounded-xl bg-warning/10 p-3 flex flex-col gap-2">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-warning-600">Én maskin: små resultater</span>
                                    <StepCard step={STEPS[4]} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Tab>

                {/* --- SKALERING --- */}
                <Tab key="skalering" title="Skalering">
                    <Card>
                        <CardBody className="gap-6">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary">250× mer data</p>
                                <p className="text-default-600">og null linjer endret i koden.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {BENCH.map((b) => (
                                    <div key={b.label} className="flex flex-col gap-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium text-foreground">{b.label} · {b.rowsText}</span>
                                            <span className="text-default-500">{b.time}</span>
                                        </div>
                                        <div className="h-4 w-full rounded-full bg-content2 overflow-hidden">
                                            <div
                                                className="h-full rounded-full bg-primary"
                                                style={{ width: `${Math.max((b.rows / BENCH_MAX) * 100, 1.5)}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-default-600 leading-relaxed">
                                Jeg blåste opp datasettet til over 5 millioner rader og kjørte nøyaktig samme kode. Jo mer
                                data, jo flere rader i sekundet. Spark er bygget for nettopp dette. Målt på én bærbar PC
                                med 8 kjerner; på en ekte klynge endres bare én innstilling.
                            </p>
                        </CardBody>
                    </Card>
                </Tab>

                {/* --- TEKNOLOGI --- */}
                <Tab key="teknologi" title="Teknologi">
                    <div className="flex flex-col gap-4">
                        <Card>
                            <CardBody className="gap-5 leading-relaxed text-default-600">
                                <div className="flex flex-wrap gap-2 text-xs">
                                    {TECH.map((t) => (
                                        <span key={t} className="px-3 py-1 rounded-full bg-content2 text-default-600">{t}</span>
                                    ))}
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-foreground mb-2">En kjøring</h2>
                                    <pre className="rounded-lg bg-zinc-900 text-zinc-100 text-xs p-4 overflow-x-auto"><code>{LOG_LINES.join("\n")}</code></pre>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-foreground mb-2">Kvalitet</h2>
                                    <ul className="list-disc pl-5 space-y-1.5">
                                        <li><span className="font-medium text-foreground">31 pytest-tester</span> kjører ekte Spark-jobber på små, håndlagde datasett med kjente svar.</li>
                                        <li><span className="font-medium text-foreground">GitHub Actions</span> kjører testene ved hver push.</li>
                                        <li><span className="font-medium text-foreground">Dev Container:</span> klon, åpne, kjør. Ikke noe manuelt Java- eller Spark-oppsett.</li>
                                        <li><span className="font-medium text-foreground">Strukturert logging</span> med tid og radtall per steg.</li>
                                        <li><span className="font-medium text-foreground">Oppsettsjekk</span> av Python, PySpark og Java gir tydelig feilmelding i stedet for en stack trace.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-foreground mb-2">Valg jeg kan forsvare</h2>
                                    <ul className="list-disc pl-5 space-y-1.5">
                                        <li><span className="font-medium text-foreground">Eksplisitt skjema:</span> raskere og tryggere enn å la Spark gjette datatyper.</li>
                                        <li><span className="font-medium text-foreground">Median, ikke snitt,</span> for manglende verdier. Romtall har en lang hale som drar snittet opp.</li>
                                        <li><span className="font-medium text-foreground">Standardisering før k-means:</span> ellers drukner koordinatene i prisene, og geografien forsvinner.</li>
                                        <li><span className="font-medium text-foreground">«Crunch big, collect small»:</span> rådataene hentes aldri til driveren, bare ferdige aggregater.</li>
                                        <li><span className="font-medium text-foreground">cache()</span> på DataFrame som gjenbrukes av fire analyser.</li>
                                    </ul>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="rounded-lg bg-content2 p-4">
                                        <h3 className="font-semibold text-foreground mb-2">Hva jeg lærte</h3>
                                        <p className="text-sm">
                                            Lazy evaluation og når en action faktisk starter arbeid, hvorfor shuffles er dyre,
                                            hvordan driver og executors henger sammen, og hvordan man tester Spark-logikk deterministisk.
                                        </p>
                                    </div>
                                    <div className="rounded-lg bg-content2 p-4">
                                        <h3 className="font-semibold text-foreground mb-2">Neste steg</h3>
                                        <p className="text-sm">
                                            Parquet i stedet for CSV, datakvalitetsporter (f.eks. Great Expectations),
                                            orkestrering med Airflow, og Structured Streaming for løpende data.
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* ALLE TESTENE */}
                        <Card>
                            <CardHeader className="pb-0 flex-col items-start gap-1">
                                <h2 className="text-xl font-semibold">Alle {TEST_TOTAL} testene</h2>
                                <p className="text-sm text-default-500">
                                    Hver test bygger et lite datasett med en kjent feil eller et kjent svar, og sjekker at
                                    koden gjør nøyaktig det den skal. Feiler en test, peker den rett på regelen som er brutt.
                                </p>
                            </CardHeader>
                            <CardBody>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {TESTS.map((g) => (
                                        <div key={g.group} className="rounded-lg bg-content2 p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-semibold text-foreground">{g.group}</h3>
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-success/15 text-success-600">{g.items.length} tester</span>
                                            </div>
                                            <ul className="space-y-1.5 text-sm text-default-600">
                                                {g.items.map((t) => (
                                                    <li key={t} className="flex gap-2">
                                                        <span className="text-success shrink-0" aria-hidden="true">✓</span>
                                                        <span>{t}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Tab>

            </AnimatedTabs>

            {/* LIGHTBOX: klikk utenfor bildet eller X for å lukke */}
            {lightbox && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightbox.title}
                    onClick={() => setLightbox(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                >
                    <button
                        type="button"
                        onClick={() => setLightbox(null)}
                        aria-label="Lukk"
                        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                    <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full flex-col items-center gap-3">
                        <img
                            src={`${IMG_BASE}/${lightbox.file}`}
                            alt={lightbox.title}
                            className="max-h-[80vh] w-auto max-w-full rounded-lg bg-white p-2 shadow-2xl"
                        />
                        <figcaption className="text-center text-white max-w-md">
                            <span className="block text-sm font-semibold">{lightbox.title}</span>
                            <span className="block text-xs text-white/70">{lightbox.caption}</span>
                        </figcaption>
                    </figure>
                </div>
            )}
        </AnimatedPage>
    );
};

export default Boligpriser;
