import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Home() {
    const handleClick = () => {
        alert('Du klikket!');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">

                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-500 mb-4">Velkommen til min portfolio</h1>

                <p className="text-gray-600 dark:text-gray-500 mb-6">Jeg studerer IT og informasjonssystemer ved Universitetet i Sørøst-Norge. Denne siden fungerer som en presentasjon av det jeg har gjort på studieprogrammet, delt inn etter fag. Der det er relevant har jeg også lagt inn link til GitHub-repoer.</p>
                <div className="flex flex-wrap gap-4">
                    <Button onClick={handleClick} variant="primary">Contact Me</Button>
                    <Button onClick={handleClick} variant="secondary">View Projects</Button>
                </div>
            </div>



            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <Link to="/emner/prg1000" className="hover:shadow-lg transition-shadow">
                    <Card
                        title="Grunnleggende programmering 1"
                        description="Emnet tar for seg strukturert programmering gjennom praktisk utvikling av enkle prosedurale programmer."
                    />
                </Link>

                <Link to="/emner/dat1000" className="block hover:shadow-lg transition-shadow">
                    <Card
                        title="Database 1"
                        description="Enkel innføring i database hvor vi tar for oss entiteter og relasjonstyper og oppretter databaser, populerer tabeller og utfører enkle spørringer."
                    />
                </Link>


                <Link to="/emner/web1100" className="hover:shadow-lg transition-shadow">
                    <Card
                        title="Webutvikling og HCI"
                        description="Grunnleggende om HTML og inline- og stylesheet-CSS, men også menneske-maskin-interaksjon og tilgjengelighet (accessibility)."
                    />
                </Link>

                <Link to="/emner/inf1000" className="hover:shadow-lg transition-shadow">
                    <Card
                        title="Digital forretningsforståelse"
                        description="Fag som fokuserer på IT i forretningsverdenen og hvilken rolle IT spiller i den for å fremme drift og produksjon."
                    />
                </Link>

                <Link to="/emner/pro1000" className="hover:shadow-lg transition-shadow">
                    <Card
                        title="Praktisk prosjektarbeid"
                        description="Gruppefag som går parallelt med SYS1000 hvor vi som gruppe tar for oss det organisatoriske innen systemutvikling, inkludert gruppemøtereferater og kunderunde."
                    />
                </Link>

                <Link to="/emner/sys1000" className="hover:shadow-lg transition-shadow">
                    <Card
                        title="Systemutvikling"
                        description="Gruppefag som går parallelt med PRO1000. Vi skal lage et system på bestilling fra kunde. Dette inkluderer å lage use cases, dataflytdiagrammer og data dictionaries og testregimer ut i fra kundens ønsker og behov."
                    />
                </Link>

                <Link to="/emner/prg1100" className="hover:shadow-lg transition-shadow">
                    <Card
                        title="Grunnleggende programmering 2"
                        description="Videreføring av temaer fra Grunnleggende programmering 1, men mer robuste applikasjoner. Algoritmer, datastrukturer, filhåndtering og databasetilgang."
                    />
                </Link>

                <Link to="/emner/orl1000" className="hover:shadow-lg transition-shadow">
                    <Card
                        title="Organisering og ledelse"
                        description="Sentrale organisasjonsmessige fenomener. Verdiskaping, organisasjonsstruktur, -kultur og -identitet, beslutningstaking, ledelse av organisasjoner"
                    />
                </Link>

                <Link to="/emner/app2000" className="hover:shadow-lg transition-shadow">
                    <Card
                        title="Applikasjonsutvikling for web 1/2"
                        description="Utvikling av webapplikasjoner (som denne siden). Emnet innbefatter alle deler, tjener og klient. Bygger på Web og HCI (WEB1100), Grunnleggende programmering 1 (PRG1000) og Database 1 (DAT1000)."
                    />
                </Link>

                <Link to="/emner/dat2000" className="">
                    <Card
                        title="Database 2"
                        description="Avansert kurs. Administrasjon og drift av databasesystemer. Bygger på Database 1 (DAT1000)."
                    />
                </Link>

                <Link to="/emner/obj2000" className="">
                    <Card
                        title="Objektorientert programmering 1"
                        description="Beskrivelse kommer."
                    />
                </Link>

                <Link to="/emner/esb1000" className="">
                    <Card
                        title="Etikk og samfunnsansvar"
                        description="Beskrivelse kommer."
                    />
                </Link>

                <Link to="/app2000" className="">
                    <Card
                        title="Applikasjonsutvikling for web 2/2"
                        description="Beskrivelse kommer."
                    />
                </Link>

                <Link to="/emner/obj2100" className="">
                    <Card
                        title="Objektorientert programmering 2"
                        description="Beskrivelse kommer."
                    />
                </Link>

                <Link to="/emner/met1020" className="">
                    <Card
                        title="Samfunnsvitenskapelig metode"
                        description="Beskrivelse kommer."
                    />
                </Link>

                <Link to="/emner/sik2000" className="">
                    <Card
                        title="Informasjonssikkerhet"
                        description="Beskrivelse kommer."
                    />
                </Link>

                <Link to="/emner/bid3000" className="">
                    <Card
                        title="Business Intelligence og datavarehus"
                        description="Faget har ikke blitt holdt ennå. Beskrivelse kommer."
                    />
                </Link>


                <Card
                    title="Sustainability Marketing and Circular Economy"
                    description="Faget har ikke blitt holdt ennå. Beskrivelse kommer."
                />
                <Card
                    title="Digital Transformation"
                    description="Faget har ikke blitt holdt ennå. Beskrivelse kommer."
                />
                <Card
                    title="E-commerce"
                    description="Faget har ikke blitt holdt ennå. Beskrivelse kommer."
                />
                <Card
                    title="Bacheloroppgave i IT og informasjonssystemer"
                    description="Faget har ikke blitt holdt ennå. Beskrivelse kommer."
                />
                <Card
                    title="Praksisrefleksjon"
                    description="Faget har ikke blitt holdt ennå. Beskrivelse kommer."
                />
                <Card
                    title="Artificial Intelligence for Business Applications"
                    description="Faget har ikke blitt holdt ennå. Beskrivelse kommer."
                />

            </div>
        </div>
    );
}

export default Home;
