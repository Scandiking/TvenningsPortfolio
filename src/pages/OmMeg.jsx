import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import AnimatedPage from '../components/AnimatedPage';

const imgBase = `${process.env.PUBLIC_URL}/images/om-meg`;
const portrait = `${imgBase}/portrett.jpg`;
const banner = `${imgBase}/banner.jpg`;

// Fritidsbilder. Hver fil finnes som <file>.jpg (1600px) og <file>-thumb.jpg (600px).
const fritid = [
    { file: "fjelltopp", caption: "På Meløytinden, 582 m.o.h." },
    { file: "padlebrett", caption: "Padlebrett på fjorden" },
    { file: "skitur", caption: "Tryning på ski i Hemsedal" },
    { file: "kveldstur-skog", caption: "Ettermiddagstur i Tanberglia" },
    { file: "varde", caption: "Ved varden på toppen av Meløytinden" },
    { file: "vintertur", caption: "Vintertur elvelangs i Hønefoss" },
    { file: "regnbue", caption: "Regnbue etter regnet langs Nordmarkveien på Meløya" },
    { file: "verksted", caption: "I hallen for å hjelpe pappa" },
    { file: "fjordutsikt", caption: "Utsikt over fjorden" },
    { file: "hosttur", caption: "Høsttur til Ringkolltoppen. Jeg gikk fra Eikli!" },
    { file: "sommerkveld", caption: "Sommerkveld" },
    { file: "sommertur", caption: "Sommertur i skogen" },
];

const linkClass = "text-primary underline underline-offset-2 hover:opacity-80";

// Styrker med konkrete eksempler hentet fra fag og egne prosjekter.
const styrker = [
    {
        title: "Tar en oppgave fra idé, til ferdig løsning, til vedlikehold",
        description: (
            <>
                <Link to="/projects/defang" className={linkClass}>Defang</Link> (Android-launcher publisert på F-Droid) og{" "}
                <a href="https://meloyvar.vercel.app" target="_blank" rel="noopener noreferrer" className={linkClass}>Meløyvær</a>{" "}
                (vær- og tidevannsapp i drift) er begge utviklet, publisert og vedlikeholdt alene. Helt fra idé, via arkitektur, til noe andre faktisk bruker.
            </>
        ),
    },
    {
        title: "Fullstack- og apputvikling",
        description: "Med min kombinasjon av kunnskap innen systemutvikling, programmering, brukeropplevelse, grafisk design etc., er jeg en god totalpakke for kost/nytte.",
    },
    {
        title: "Data, BI og maskinlæring",
        description: "To databaseemner, fra primærnøkler til ETL-pipelines. PySpark California Housing: fem-trinns distribuert datapipeline med 19 enhetstester i pytest og kontinuerlig integrasjon i GitHub Actions. Datavarehus- og KPI-dashboard i BID3000 med actionable business insights.",
    },
    {
        title: "Analytisk og nøye, vant til å levere under krav",
        description: "Praksis fra tverrfaglig IT-team i SpareBank 1 Ringerike Hadeland (Copilot-agenter og Power Apps-løsninger i drift), kombinert med solid akademisk grunnmur fra bachelorstudiet. Tar «jeg må ha en måte å ta imot bestillinger på» til ferdig utviklet løsning ved hjelp av smidig utviklingsmetodikk som iterativ inkrementell utvikling.",
    },
];

// Utvalg fra Big Five-test. Kilde: content/om-meg/big5-resultat.md (gitignoret, publiseres ikke).
// Fasettskårer er på skala 4–20 (fire spørsmål à 1–5), vist som prosent av skalaen.
// Nevrotisisme-fasetter snus (invert), siden lav skår der betyr høy stabilitet;
// `source` er det opprinnelige fasettnavnet som vises sammen med rå-skåren.
const pct = ({ score, invert }) => Math.round(((invert ? 20 - score : score - 4) / 16) * 100);

const personlighet = [
    {
        trait: "Planmessighet",
        en: "Conscientiousness",
        level: "Høy",
        text: "Jeg setter meg klare mål og følger dem.",
        facets: [
            { name: "Pliktoppfyllenhet", score: 19 },
            { name: "Kompetanse", score: 18 },
            { name: "Orden", score: 18 },
            { name: "Betenksomhet", score: 17 },
        ],
    },
    {
        trait: "Åpenhet for erfaringer",
        en: "Openness to Experience",
        level: "Høy",
        text: "Jeg er nysgjerrig og glad i å leke med idéer og løse problemer.",
        facets: [
            { name: "Intellekt", score: 18 },
            { name: "Fantasi", score: 16 },
            { name: "Estetikk", score: 15 },
        ],
    },
    {
        trait: "Medmenneskelighet",
        en: "Agreeableness",
        level: "Høy",
        text: "Jeg er ærlig, samarbeidsvillig og har ikke behov for å fremheve meg selv.",
        facets: [
            { name: "Moral", score: 19 },
            { name: "Beskjedenhet", score: 17 },
            { name: "Tillit", score: 15 },
        ],
    },
    {
        trait: "Emosjonell stabilitet",
        en: "Emotional Stability",
        level: "Høy",
        text: "Jeg har lav score på nevrotisisme: rolig og klartenkt også når det er stress og tidspress.",
        facets: [
            { name: "Tålmodighet", source: "sinne", score: 4, invert: true },
            { name: "Trygghet i sosiale situasjoner", source: "selvbevissthet", score: 7, invert: true },
            { name: "Stresstoleranse", source: "sårbarhet", score: 8, invert: true },
            { name: "Selvkontroll", source: "impulsivitet", score: 8, invert: true },
            { name: "Ro", source: "angst", score: 10, invert: true },
        ],
    },
    {
        trait: "Ekstroversjon",
        en: "Extraversion",
        level: "Lav",
        text: "Jeg er introvert. Trives best med dypt, konsentrert arbeid, men er vennlig og lett å samarbeide med.",
        facets: [
            { name: "Vennlighet", score: 13 },
            { name: "Selvmarkering", score: 12 },
        ],
    },
];

// Fullførte sertifiseringer/kurs, samt planlagte — oppdateres etterhvert som flere tas.
const sertifiseringer = [
    { title: "JavaScript Essentials 1", status: "fullført" },
    { title: "Python Essentials 1", status: "fullført" },
    { title: "Python 3 Certification Course", status: "fullført" },
    { title: "Microsoft Azure Fundamentals (AZ-900)", status: "kurs fullført" },
    { title: "Microsoft Applied Skills — Migrate SQL Server workloads to Azure SQL Database", status: "planlagt" },
    { title: "HackerRank SQL Certification", status: "planlagt" },
    { title: "DP-300 — Microsoft Certified: Azure Database Administrator Associate", status: "mål" },
];

function OmMeg() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(null); // indeks i fritid, eller null

    // Escape lukker, piltaster blar, og scrolling låses mens lightboxen er åpen.
    useEffect(() => {
        if (open === null) return;
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(null);
            if (e.key === "ArrowRight") setOpen((i) => (i + 1) % fritid.length);
            if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + fritid.length) % fritid.length);
        };
        window.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [open]);

    return (
        <AnimatedPage className="container mx-auto px-4 py-8">
            <div className="py-1">
                <Breadcrumbs>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/om-meg')}>Om meg</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm mb-6">
                <img
                    alt="Padlebrett på fjorden i kveldssol"
                    src={banner}
                    className="block w-full h-40 md:h-56 object-cover object-center_40%"
                />
            </div>

            <div className="bg-content1 rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img
                        alt="Portrett av Kristian Martin Tvenning"
                        src={portrait}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shrink-0 shadow-sm"
                    />
                    <div>
                        <h1 className="text-3xl font-medium text-foreground mb-2">Kristian Martin Tvenning</h1>
                        <p className="text-default-500 font-body mb-4">Systemutvikler med bachelorgrad i IT og informasjonssystemer fra Universitetet i Sørøst-Norge på campus Hønefoss</p>
                        <p className="font-body text-default-600 text-lg">
                            Nyutdannet systemutvikler som bygger og slipper egne applikasjoner: en Android-launcher publisert på F-Droid, en vær- og tidevannsapp i drift, og en testet datapipeline i PySpark. Erfaring med Java og Spring Boot, Kotlin og Android, React og TypeScript, SQL og Python — og praksis fra et tverrfaglig IT-team i SpareBank 1. Analytisk, nøye, og vant til å ta en oppgave fra idé til ferdig løsning.
                        </p>
                    </div>
                </div>
            </div>
            

            <div className="bg-content1 rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-medium text-foreground mb-4">Styrker og eksempler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {styrker.map((s) => (
                        <div key={s.title} className="bg-content2 rounded-lg p-4">
                            <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                            <p className="text-default-500 font-body text-sm">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-content1 rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-medium text-foreground mb-2">Personlighet</h2>
                <p className="font-body text-default-500 text-sm mb-4">Jeg har søkt på en del jobber, og det blir stadig mer vanlig å be søkerne om å ta evne- og personlighetstester. Derfor har jeg lagt inn et utvalg fra en Big Five-personlighetstest (femfaktormodellen). Prosenten viser hvor jeg ligger mellom laveste og høyeste mulige skår, ikke en sammenligning med andre.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personlighet.map((p) => (
                        <div key={p.trait} className="bg-content2 rounded-lg p-4">
                            <div className="flex items-center justify-between gap-2 mb-1">
                                <h3 className="font-semibold text-foreground">
                                    {p.trait} <span className="font-normal text-default-400">/ {p.en}</span>
                                </h3>
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                    p.level === "Høy"
                                        ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200"
                                        : "bg-default-200 text-default-600 dark:bg-default-100/20"
                                }`}>{p.level}</span>
                            </div>
                            <p className="text-default-500 font-body text-sm">{p.text}</p>
                            {p.facets && (
                                <ul className="mt-3 space-y-2">
                                    {p.facets.map((f) => (
                                        <li key={f.name}>
                                            <div className="flex items-baseline justify-between text-xs mb-1">
                                                <span className="text-default-600">{f.name}</span>
                                                <span className="font-medium text-foreground">
                                                    {pct(f)} % <span className="font-normal text-default-400">({f.source ? `${f.source} ` : ""}{f.score}/20)</span>
                                                </span>
                                            </div>
                                            <div className="h-1.5 rounded-full bg-default-200 dark:bg-default-100/20">
                                                <div className="h-full rounded-full bg-primary-200 dark:bg-primary-900"style={{ width: `${pct(f)}%` }} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            

            <div className="bg-content1 rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-medium text-foreground mb-4">Sertifiseringer</h2>
                <ul className="space-y-2">
                    {sertifiseringer.map((s) => (
                        <li key={s.title} className="flex items-center justify-between bg-content2 rounded-lg px-4 py-2">
                            <span className="font-body text-foreground text-sm">{s.title}</span>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                s.status === "planlagt" || s.status === "mål"
                                    ? "bg-default-200 text-default-600 dark:bg-default-100/20"
                                    : "bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-200"
                            }`}>{s.status}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-content1 rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-medium text-foreground mb-2">Utenfor jobb</h2>
                {/* UTKAST — skrevet ut fra bildene; juster til egne ord */}
                <p className="font-body text-default-600 mb-4">
                    Jeg går tur i all slags vær og til alle årstider. Mobilen blir gjerne igjen hjemme, men Garmin-klokka er alltid med, for en tur som ikke er logget har liksom ikke skjedd. Det er der jeg lader batteriene.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {fritid.map((b, i) => (
                        <button
                            key={b.file}
                            type="button"
                            onClick={() => setOpen(i)}
                            className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            <img
                                src={`${imgBase}/fritid/${b.file}-thumb.jpg`}
                                alt={b.caption}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 pt-6 text-left text-xs font-medium text-white">
                                {b.caption}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-content1 rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-medium text-foreground mb-4">Lenker</h2>
                <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/Scandiking" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-content2 rounded-lg text-sm font-medium text-foreground hover:bg-content3 transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/kristian-martin-tvenning-77475773" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-content2 rounded-lg text-sm font-medium text-foreground hover:bg-content3 transition-colors">LinkedIn</a>
                    <a href="https://github.com/Scandiking/Defang" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-content2 rounded-lg text-sm font-medium text-foreground hover:bg-content3 transition-colors">Defang</a>
                    <a href="https://meloyvar.vercel.app" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-content2 rounded-lg text-sm font-medium text-foreground hover:bg-content3 transition-colors">Meløyvær</a>
                </div>
            </div>

            {/* LIGHTBOX — klikk utenfor bildet eller X for å lukke, piler for å bla */}
            {open !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={fritid[open].caption}
                    onClick={() => setOpen(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <button
                        type="button"
                        onClick={() => setOpen(null)}
                        aria-label="Lukk"
                        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                            <path d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                    {[
                        { label: "Forrige", step: -1, pos: "left-2 md:left-6", d: "M15 6l-6 6 6 6" },
                        { label: "Neste", step: 1, pos: "right-2 md:right-6", d: "M9 6l6 6-6 6" },
                    ].map(({ label, step, pos, d }) => (
                        <button
                            key={label}
                            type="button"
                            aria-label={label}
                            onClick={(e) => { e.stopPropagation(); setOpen((open + step + fritid.length) % fritid.length); }}
                            className={`absolute ${pos} top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <path d={d} />
                            </svg>
                        </button>
                    ))}
                    <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full flex-col items-center gap-3">
                        <img
                            src={`${imgBase}/fritid/${fritid[open].file}.jpg`}
                            alt={fritid[open].caption}
                            className="max-h-[80vh] max-w-full w-auto rounded-lg shadow-2xl"
                        />
                        <figcaption className="text-center text-sm font-semibold text-white">
                            {fritid[open].caption} <span className="font-normal text-white/60">· {open + 1}/{fritid.length}</span>
                        </figcaption>
                    </figure>
                </div>
            )}
        </AnimatedPage>
    );
}

export default OmMeg;
