import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Image } from "@heroui/image";
import AnimatedPage from '../components/AnimatedPage';

const portrait = `${process.env.PUBLIC_URL}/images/om-meg/portrett-placeholder.svg`;
const banner = `${process.env.PUBLIC_URL}/images/om-meg/banner-placeholder.svg`;

// Styrker med konkrete eksempler hentet fra fag og egne prosjekter.
const styrker = [
    {
        title: "Tar en oppgave fra idé til ferdig, driftet løsning",
        description: "Defang (Android-launcher publisert på F-Droid) og Meløyvær (vær- og tidevannsapp i drift) er begge utviklet, publisert og vedlikeholdt alene — fra idé, via arkitektur, til noe andre faktisk bruker.",
    },
    {
        title: "Fullstack- og apputvikling",
        description: "Java/Spring Boot og React i gruppeprosjektet Någ (REST-API, JWT-autentisering, OpenAPI/Swagger), Kotlin/Jetpack Compose i Defang, TypeScript/Vite/Capacitor i Meløyvær.",
    },
    {
        title: "Data, BI og maskinlæring",
        description: "PySpark California Housing: fem-trinns distribuert datapipeline med 19 enhetstester i pytest og kontinuerlig integrasjon i GitHub Actions. Datavarehus- og KPI-dashboard i BID3000.",
    },
    {
        title: "Analytisk og nøye — vant til å levere under krav",
        description: "Praksis fra tverrfaglig IT-team i SpareBank 1 Ringerike Hadeland (Copilot-agenter og Power Apps-løsninger i drift), kombinert med solid akademisk grunnmur fra bachelorstudiet.",
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

    return (
        <AnimatedPage className="container mx-auto px-4 py-8">
            <div className="py-1">
                <Breadcrumbs>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/om-meg')}>Om meg</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm mb-6">
                <Image
                    radius="none"
                    alt="Plassholderbilde for banner — byttes ut senere"
                    src={banner}
                    className="w-full h-40 md:h-56 object-cover"
                />
            </div>

            <div className="bg-content1 rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <Image
                        radius="lg"
                        alt="Plassholderbilde for portrett — byttes ut senere"
                        src={portrait}
                        className="w-32 h-32 md:w-40 md:h-40 object-cover shrink-0"
                    />
                    <div>
                        <h1 className="text-3xl font-medium text-foreground mb-2">Kristian Martin Tvenning</h1>
                        <p className="text-default-500 font-body mb-4">Systemutvikler · Bachelor i IT og informasjonssystemer, Universitetet i Sørøst-Norge</p>
                        <p className="font-body text-default-600 text-lg">
                            Nyutdannet systemutvikler som bygger og slipper egne applikasjoner: en Android-launcher publisert på F-Droid, en vær- og tidevannsapp i drift, og en testet datapipeline i PySpark. Erfaring med Java og Spring Boot, Kotlin og Android, React og TypeScript, SQL og Python — og praksis fra et tverrfaglig IT-team i SpareBank 1. Analytisk, nøye, og vant til å ta en oppgave fra idé til ferdig løsning.
                        </p>
                    </div>
                </div>
            </div>

            {/* Elevator pitch — ment for copy-paste til søknader */}
            <div className="bg-primary-50 dark:bg-primary-950/40 border border-primary-200 dark:border-primary-800 rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-medium text-foreground mb-2">Elevator pitch</h2>
                <p className="font-body text-default-600 italic">
                    "Jeg er nyutdannet systemutvikler med bachelor i IT og informasjonssystemer fra Universitetet i Sørøst-Norge. Jeg bygger og drifter egne applikasjoner — blant annet en Android-launcher publisert på F-Droid og en værapp i aktiv drift — og har praksis fra et tverrfaglig IT-team i SpareBank 1 med Power Apps og Copilot-agenter. Jeg trives best med å ta et problem fra idé til noe som faktisk kjører i produksjon, og er analytisk, nøye og rask til å sette meg inn i nye systemer."
                </p>
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

            <div className="bg-content1 rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-medium text-foreground mb-4">Lenker</h2>
                <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/Scandiking" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-content2 rounded-lg text-sm font-medium text-foreground hover:bg-content3 transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/kristian-martin-tvenning-77475773" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-content2 rounded-lg text-sm font-medium text-foreground hover:bg-content3 transition-colors">LinkedIn</a>
                    <a href="https://github.com/Scandiking/Defang" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-content2 rounded-lg text-sm font-medium text-foreground hover:bg-content3 transition-colors">Defang</a>
                    <a href="https://meloyvar.vercel.app" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-content2 rounded-lg text-sm font-medium text-foreground hover:bg-content3 transition-colors">Meløyvær</a>
                </div>
            </div>
        </AnimatedPage>
    );
}

export default OmMeg;
