import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import {Link, useNavigate} from 'react-router-dom';
import {Skeleton} from "@heroui/react";
import {CardBody, CardHeader} from "@heroui/card";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => alert('E-post: <mailto:km.tvenning@pm.me> / Mob: 41 85 36 42!');
    const goToProjects = () => navigate('/projects');

    const [isLoaded, setIsLoaded] = React.useState(false);
    const toggleLoad = () => {
        setIsLoaded(!isLoaded);
    };


    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}

                <div className="bg-content1 rounded-lg shadow-md p-6 mb-6"> {/* ENDRET: bg-white dark:bg-gray-800 → bg-content1 */}



                    <h1 className="text-3xl font-bold text-foreground mb-4">Velkommen til min portfolio</h1> {/* ENDRET: text-gray-800 dark:text-gray-500 → text-foreground */}
                        <Skeleton isLoaded={isLoaded} className="rounded-lg mb-6">
                            <img
                                alt="A 3D render of a desktop with a laptop, a rubber duck, a cup of coffee and a slate that seems like a phone"
                                src="https://github.com/Scandiking/scandiking/raw/master/LinkedInBanner3.png"
                                className="w-full rounded-lg"
                                onLoad={()=>setIsLoaded(true)}
                            />
                        </Skeleton>

                    <p className="text-default-500 mb-6">Jeg studerer IT og informasjonssystemer ved Universitetet i Sørøst-Norge. Denne siden fungerer som en presentasjon av det jeg har gjort på studieprogrammet, delt inn etter fag. Der det er relevant har jeg også lagt inn link til GitHub-repoer.</p> {/* ENDRET: text-gray-600 dark:text-gray-500 → text-default-500 */}

                    <div className="flex flex-wrap gap-4">
                        <Button onClick={handleClick} variant="primary">Kontakt meg</Button>
                        <Button onClick={goToProjects} variant="secondary">Se prosjekter</Button>
                    </div>
                </div>


            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                <Link to="/emner/prg1000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Grunnleggende programmering 1"
                            description="Emnet tar for seg strukturert programmering gjennom praktisk utvikling av enkle prosedurale programmer."
                        />
                    </div>
                </Link>


                <Link to="/emner/dat1000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Database 1"
                            description="Enkel innføring i database hvor vi tar for oss entiteter og relasjonstyper og oppretter databaser, populerer tabeller og utfører enkle spørringer."
                        />
                    </div>
                </Link>


                <Link to="/emner/web1100">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Webutvikling og HCI"
                            description="Grunnleggende om HTML og inline- og stylesheet-CSS, men også menneske-maskin-interaksjon og tilgjengelighet (accessibility)."
                        />
                    </div>
                </Link>

                <Link to="/emner/inf1000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Digital forretningsforståelse"
                            description="Fag som fokuserer på IT i forretningsverdenen og hvilken rolle IT spiller i den for å fremme drift og produksjon."
                        />
                    </div>
                </Link>

                <Link to="/emner/pro1000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Praktisk prosjektarbeid"
                            description="Gruppefag som går parallelt med SYS1000 hvor vi som gruppe tar for oss det organisatoriske innen systemutvikling, inkludert gruppemøtereferater og kunderunde."
                        />
                    </div>
                </Link>

                <Link to="/emner/sys1000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Systemutvikling"
                            description="Gruppefag som går parallelt med PRO1000. Vi skal lage et system på bestilling fra kunde. Dette inkluderer å lage use cases, dataflytdiagrammer og data dictionaries og testregimer ut i fra kundens ønsker og behov."
                        />
                    </div>
                </Link>

                <Link to="/emner/prg1100">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Grunnleggende programmering 2"
                            description="Videreføring av temaer fra Grunnleggende programmering 1, men mer robuste applikasjoner. Algoritmer, datastrukturer, filhåndtering og databasetilgang."
                        />
                    </div>
                </Link>

                <Link to="/emner/orl1000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Organisering og ledelse"
                            description="Sentrale organisasjonsmessige fenomener. Verdiskaping, organisasjonsstruktur, -kultur og -identitet, beslutningstaking, ledelse av organisasjoner"
                        />
                    </div>
                </Link>

                <Link to="/emner/app2000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Applikasjonsutvikling for web"
                            description="Utvikling av webapplikasjoner (som denne siden). Emnet innbefatter alle deler, tjener og klient. Bygger på Web og HCI (WEB1100), Grunnleggende programmering 1 (PRG1000) og Database 1 (DAT1000)."
                        />
                    </div>
                </Link>

                <Link to="/emner/dat2000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Database 2"
                            description="Avansert kurs. Administrasjon og drift av databasesystemer. Bygger på Database 1 (DAT1000)."
                        />
                    </div>
                </Link>

                <Link to="/emner/obj2000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Objektorientert programmering 1"
                            description="Innføring i objektorientert programmering. Grafiske brukergrensesnitt med objektorientert språk. BYgger på Grunnleggende programmering 1 og Grunnleggende programmering 2."
                        />
                    </div>
                </Link>

                <Link to="/emner/esb1000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Etikk og samfunnsansvar"
                            description="Grunnleggende innføring i etikk, etiske problemstillinger og dilemmaer med relevans for næringslivet. FN's bærekraftsmål. Samspill mellom økonomi, samfunn og miljø."
                        />
                    </div>
                </Link>

                {/*
                <Link to="/app2000" className="">
                    <Card
                        title="Applikasjonsutvikling for web 2/2"
                        description="Beskrivelse kommer."
                    />
                </Link>
                */}

                <Link to="/emner/obj2100">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Objektorientert programmering 2"
                            description="Objektorientert programmering gjennom større applikasjoner. Strømmer, tråder, asynkron prosessering."
                        />
                    </div>
                </Link>

                <Link to="/emner/met1020">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Samfunnsvitenskapelig metode"
                            description="Innføring i innsamling, bearbeidelse og tolkning av data."
                        />
                    </div>
                </Link>

                <Link to="/emner/sik2000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Informasjonssikkerhet"
                            description="Innføring i relevant lovverk og standarder for informasjonssikkerhet. Læren om trusler mot informasjonssikkerhet i virksomheter og samfunnet generelt. Sårbarhets- og risikoanalyse."
                        />
                    </div>
                </Link>

                <Link to="/emner/bid3000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Business Intelligence og datavarehus"
                            description="Også kalt forretningsanalyse på norsk. Innsamling og analyse av data for å forbedre kvaliteten på beslutninger. Et datavarehus er en database hvor data er hentet fra andre systemer og klartgjort for analyse i stedet for transaksjoner. Bygger på Database 1."
                        />
                    </div>
                </Link>

                {/*}
                <Link to="/emner/bid3000">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Bacheloroppgave i IT og informasjonssystemer"
                            description="Faget har ikke blitt holdt ennå. Beskrivelse kommer."
                        />
                    </div>
                </Link>
                */}

                <Link to="/emner/ai3000r" className="">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Artificial Intelligence for Business Applications"
                            description="Kurset fokuserer på KI's innflytelse på organisasjoner og samfunnet generelt. Bli kjenmt med prinsipper og metoder som trengs for å utvikle smarte KI data-avhengige løsninger. Varierte metoder i maskinlæring og dyplæring, så vel som data-mining."
                        />
                    </div>
                </Link>

                <Link to="/emner/ai3000r" className="">
                    <div className="block hover:shadow-lg transition-shadow rounded-lg">
                        <Card
                            title="Applikasjonsutvikling for mobile enheter"
                            description="Praktisk erfaring med utvikling av applikasjoner for mobile enheter. Android Studio, Kotlin."
                        />
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Home;
