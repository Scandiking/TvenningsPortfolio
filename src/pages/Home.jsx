import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import {Link, useNavigate} from 'react-router-dom';
import {Image} from "@heroui/image";
import { motion } from 'framer-motion';

const duck = `${process.env.PUBLIC_URL}/images/LinkedInBanner3.png`;

// Utvalgte prosjekter — vist først for å lede med det sterkeste arbeidet.
const featured = [
    {
        title: "Defang",
        to: "/projects/defang",
        tag: "Kotlin · Jetpack Compose",
        description: "Android-launcher som legger inn en bevisst pause før du åpner apper som Instagram og TikTok — intensjonsspørsmål, nedtelling og øktgrense før scrollingen.",
    },
    {
        title: "Maskinlæring: boligpriser",
        to: "/emner/ai3000r",
        tag: "Maskinlæring · Python",
        description: "Regresjonsmodell som predikerer boligpriser fra California housing-datasettet, med datautforsking, trening og evaluering i Jupyter.",
    },
    {
        title: "Business Intelligence & datavarehus",
        to: "/emner/bid3000",
        tag: "Power BI · Datavarehus",
        description: "BI-dashboard bygget på et datavarehus: KPI-er, fortjeneste-, kanselerings- og RFM-basert kundesegmentanalyse.",
    },
];

// Emner i best-først rekkefølge: mest avanserte og anvendte fag øverst,
// innføringsfag nederst, og fag som ennå ikke har egen side helt til slutt.
const courses = [
    { to: "/emner/ai3000r", title: "Artificial Intelligence for Business Applications", description: "Kurset fokuserer på KI's innflytelse på organisasjoner og samfunnet generelt. Bli kjenmt med prinsipper og metoder som trengs for å utvikle smarte KI data-avhengige løsninger. Varierte metoder i maskinlæring og dyplæring, så vel som data-mining." },
    { to: "/emner/bid3000", title: "Business Intelligence og datavarehus", description: "Også kalt forretningsanalyse på norsk. Innsamling og analyse av data for å forbedre kvaliteten på beslutninger. Et datavarehus er en database hvor data er hentet fra andre systemer og klartgjort for analyse i stedet for transaksjoner. Bygger på Database 1." },
    { to: "/emner/app2000", title: "Applikasjonsutvikling for web", description: "Utvikling av webapplikasjoner (som denne siden). Emnet innbefatter alle deler, tjener og klient. Bygger på Web og HCI (WEB1100), Grunnleggende programmering 1 (PRG1000) og Database 1 (DAT1000)." },
    { to: "/emner/sik2000", title: "Informasjonssikkerhet", description: "Innføring i relevant lovverk og standarder for informasjonssikkerhet. Læren om trusler mot informasjonssikkerhet i virksomheter og samfunnet generelt. Sårbarhets- og risikoanalyse." },
    { to: "/emner/mob3000", title: "Applikasjonsutvikling for mobile enheter", description: "Praktisk erfaring med utvikling av applikasjoner for mobile enheter. Android Studio, Kotlin." },
    { to: "/emner/sel3000r", title: "Selvstudie IT og informasjonssystemer", description: "Fordypning og spesialisering i selvvalgt tema innenfor bachelorstudiet. Tema skal avtales med og godkjennes av oppnevnt veileder. Jeg valgte temaet 'enshittification'." },
    { to: "/emner/obj2100", title: "Objektorientert programmering 2", description: "Objektorientert programmering gjennom større applikasjoner. Strømmer, tråder, asynkron prosessering." },
    { to: "/emner/obj2000", title: "Objektorientert programmering 1", description: "Innføring i objektorientert programmering. Grafiske brukergrensesnitt med objektorientert språk. BYgger på Grunnleggende programmering 1 og Grunnleggende programmering 2." },
    { to: "/emner/dat2000", title: "Database 2", description: "Avansert kurs. Administrasjon og drift av databasesystemer. Bygger på Database 1 (DAT1000)." },
    { to: "/emner/prg1100", title: "Grunnleggende programmering 2", description: "Videreføring av temaer fra Grunnleggende programmering 1, men mer robuste applikasjoner. Algoritmer, datastrukturer, filhåndtering og databasetilgang." },
    { to: "/emner/sys1000", title: "Systemutvikling", description: "Gruppefag som går parallelt med PRO1000. Vi skal lage et system på bestilling fra kunde. Dette inkluderer å lage use cases, dataflytdiagrammer og data dictionaries og testregimer ut i fra kundens ønsker og behov." },
    { to: "/emner/pro1000", title: "Praktisk prosjektarbeid", description: "Gruppefag som går parallelt med SYS1000 hvor vi som gruppe tar for oss det organisatoriske innen systemutvikling, inkludert gruppemøtereferater og kunderunde." },
    { to: "/emner/met1020", title: "Samfunnsvitenskapelig metode", description: "Innføring i innsamling, bearbeidelse og tolkning av data." },
    { to: "/emner/web1100", title: "Webutvikling og HCI", description: "Grunnleggende om HTML og inline- og stylesheet-CSS, men også menneske-maskin-interaksjon og tilgjengelighet (accessibility)." },
    { to: "/emner/dat1000", title: "Database 1", description: "Enkel innføring i database hvor vi tar for oss entiteter og relasjonstyper og oppretter databaser, populerer tabeller og utfører enkle spørringer." },
    { to: "/emner/prg1000", title: "Grunnleggende programmering 1", description: "Emnet tar for seg strukturert programmering gjennom praktisk utvikling av enkle prosedurale programmer." },
    { to: "/emner/inf1000", title: "Digital forretningsforståelse", description: "Fag som fokuserer på IT i forretningsverdenen og hvilken rolle IT spiller i den for å fremme drift og produksjon." },
    { to: "/emner/orl1000", title: "Organisering og ledelse", description: "Sentrale organisasjonsmessige fenomener. Verdiskaping, organisasjonsstruktur, -kultur og -identitet, beslutningstaking, ledelse av organisasjoner" },
    { to: "/emner/esb1000", title: "Etikk og samfunnsansvar", description: "Grunnleggende innføring i etikk, etiske problemstillinger og dilemmaer med relevans for næringslivet. FN's bærekraftsmål. Samspill mellom økonomi, samfunn og miljø." },
    { to: "/emner/sss3000r", title: "IoT-teknologi og Mikrokontrollere i Smarte Systemer", description: "Kurs i IoT hvor man lærer å designe og bygge skalerbare IoT-løsninger med webteknologier, API-er og skybasert datautveksling – med fokus på både teknisk arkitektur og samfunnsmessige utfordringer som sikkerhet og personvern" },
    { to: "/emner/inf2020", title: "Operativsystemer", description: "Grunnleggende kurs i Windows/Linux: lærer prosess- og minnehåndtering, filsystemer, nettverk og maskinvare – praktiske ferdigheter for å forstå og jobbe med moderne operativsystemer." },
];

function Home() {
    const navigate = useNavigate();

    const handleClick = () => alert('E-post: <mailto:km.tvenning@pm.me> / Mob: 41 85 36 42!');
    const goToProjects = () => navigate('/projects');


    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-content1 rounded-xl p-6 mb-8 shadow-sm"
                >

                    <h1 className="text-3xl font-medium text-foreground mb-4">Velkommen til min portfolio</h1>

                    <div>
                        <Image
                            loading="eager"
                            radius="sm"
                            alt="A 3D render of a desktop with a laptop, a rubber duck, a cup of coffee and a slate that seems like a phone"
                            src={duck}
                            width="100%"

                        />
                    </div>


                    <p className="font-body text-default-500 mb-6">Jeg studerer IT og informasjonssystemer ved Universitetet i Sørøst-Norge. Denne siden fungerer som en presentasjon av det jeg har gjort på studieprogrammet, delt inn etter fag. Der det er relevant har jeg også lagt inn link til GitHub-repoer.</p>

                    <div className="flex flex-wrap gap-4">
                        <Button onClick={handleClick} variant="primary">Kontakt meg</Button>
                        <Button onClick={goToProjects} variant="secondary">Se prosjekter</Button>
                        <a href="https://github.com/Scandiking" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">GitHub</Button>
                        </a>
                    </div>
                </motion.div>


            {/* Utvalgte prosjekter — ledende arbeid vises først */}
            <section className="mb-10">
                <div className="flex items-baseline justify-between mb-4">
                    <h2 className="text-2xl font-medium text-foreground">Utvalgte prosjekter</h2>
                    <Link to="/projects" className="text-sm text-primary hover:underline">Alle prosjekter →</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featured.map((p) => (
                        <Link key={p.to} to={p.to} className="group block h-full">
                            <div className="bg-content1 rounded-xl h-full shadow-sm border-l-4 border-primary transition-shadow duration-200 hover:shadow-lg">
                                <div className="p-6 h-full flex flex-col gap-3">
                                    <span className="inline-flex self-start items-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 px-3 py-1 text-xs font-medium">
                                        {p.tag}
                                    </span>
                                    <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                                    <p className="text-default-500 text-sm">{p.description}</p>
                                    <span className="mt-auto pt-2 text-sm text-primary group-hover:underline">Les mer →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>


            {/* Emner */}
            <h2 className="text-2xl font-medium text-foreground mb-4">Emner</h2>
            <div className="course-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((c) => (
                    <Link key={c.to} to={c.to}>
                        <div className="block hover:shadow-lg transition-shadow rounded-lg">
                            <Card title={c.title} description={c.description} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
