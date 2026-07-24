import React from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

function Personvern() {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1 mb-6">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/personvern')}>Personvern</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className="bg-content1 rounded-xl shadow-sm p-6">
                <h1 className="text-3xl font-medium text-foreground mb-4">Personvern</h1>

                <p className="font-body text-default-500 mb-4">
                    Denne nettsiden er en personlig portefølje for studiearbeid. Den er
                    laget for å vise fram fag og prosjekter, og samler ikke inn
                    personopplysninger om deg som besøker den.
                </p>

                <h2 className="text-2xl font-medium text-foreground mt-6 mb-3">Informasjonskapsler og sporing</h2>
                <p className="font-body text-default-500 mb-4">
                    Siden setter ingen informasjonskapsler (cookies) for sporing, og
                    bruker ingen analyseverktøy som Google Analytics. Det finnes derfor
                    ingenting å samtykke til, og du møter ikke noe samtykke-banner.
                </p>

                <h2 className="text-2xl font-medium text-foreground mt-6 mb-3">Lagring i nettleseren din</h2>
                <p className="font-body text-default-500 mb-4">
                    Valget ditt av lyst eller mørkt tema lagres lokalt i din egen
                    nettleser slik at siden husker det til neste besøk. Denne
                    informasjonen forlater aldri enheten din og deles ikke med noen.
                </p>

                <h2 className="text-2xl font-medium text-foreground mt-6 mb-3">Innhold fra tredjeparter</h2>
                <p className="font-body text-default-500 mb-4">
                    Enkelte bilder og merker lastes direkte fra tjenester som GitHub og
                    shields.io. Når nettleseren din henter slikt innhold, ser disse
                    tjenestene IP-adressen din, på samme måte som ved ethvert vanlig
                    besøk på en nettside. Siden sender ingen andre opplysninger om deg
                    videre.
                </p>

                <h2 className="text-2xl font-medium text-foreground mt-6 mb-3">Kontakt</h2>
                <p className="font-body text-default-500 mb-4">
                    Har du spørsmål om personvern på denne siden, kan du opprette en sak
                    (issue) på GitHub:{" "}
                    <a
                        href="https://github.com/Scandiking/TvenningsPortfolio/issues/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                    >
                        opprett en issue
                    </a>.
                </p>
            </div>
        </div>
    );
}

export default Personvern;
