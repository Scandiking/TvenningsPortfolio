import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

const PRO1000 = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/pro1000')}>Praktisk prosjektarbeid</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">PRO1000 - Praktisk prosjektarbeid</h1>

            <div className="flex-w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="mp1" title="Milepæl 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">PowerPoint-presentasjon</h2></CardHeader>
                            <CardBody>
                                <p>
                                    Milepæl 1 fant sted den 06.02.2024 klokken 13:55. Her skulle gruppen både presentere
                                    prosjektplan og SWOT-analyse. Den 01.02.2024 hadde vi et gruppemøte hvor vi planla
                                    presentasjonen til milepæl 1 med planlagt gruppegjennomgang tidligere på dagen den
                                    06.02.2024.
                                </p>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/PRO1000/Prosjektplan%20og%20SWOT-presentasjon.pdf"
                                        width="100%"
                                        height="600px"
                                        title="Presentasjon av milepæl 1"
                                        className="border-0"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="mp2" title="Milepæl 2">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">PowerPoint-presentasjon</h2></CardHeader>
                            <CardBody>
                                <p>
                                    Milepæl 2 skulle presenteres tirsdag 13.02.2024 kl. 14.15. Det som skulle presenteres var
                                    valgt systemutviklingsmetodikk og en SWOT-analyse på prosjektgruppenivå. Det faglige
                                    grunnlaget for valget av systemutviklingsmetodikk ble undervist i systemutvikling. Vi
                                    organiserte arbeidet ved at alle først leste om de forskjellige metodene og gjorde seg opp noen
                                    tanker om hvilken som passet best. 08.02.2024 hadde vi et gruppemøte hvor vi tok en runde
                                    rundt bordet og diskuterte ulike innfallsvinkler til systemutviklingsmetodikk og bestemte oss
                                    for iterativ inkrementell. Vi fordelte ulike metoder til presentasjonen og jobbet så individuelt
                                    med selve presentasjonen. Vi jobbet også frem en SWOT på prosjektgruppenivå på bakgrunn
                                    av SWOT på individnivå. På presentasjonsdagen møttes vi for å forberede oss. Vi hadde en
                                    testpresentasjon for å luke ut eventuelle feil og for å stille bedre forberedt.
                                </p>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/PRO1000/Metodologi%20og%20gruppe-SWOT.pdf"
                                        width="100%"
                                        height="600px"
                                        title="Presentasjon av milepæl 1"
                                        className="border-0"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="mp3" title="Milepæl 3">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">PowerPoint-presentasjon</h2></CardHeader>
                            <CardBody>
                                <p>
                                    ilepæl 3 fant sted den 20.02.2024 klokken 12:15. Her presenterer gruppen om
                                    datainnsamlingsmetodikk, og begrunnet valgt metode for innsamling av data. I forkant av
                                    møtet så hadde vi et gruppemøte hvor vi gikk gjennom presentasjon for å godkjenne innholdet
                                    oss imellom.
                                </p>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/PRO1000/milepæl3.pdf"
                                        width="100%"
                                        height="600px"
                                        title="Presentasjon av milepæl 1"
                                        className="border-0"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="mp4" title="Milepæl 4">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">PowerPoint-presentasjon</h2></CardHeader>
                            <CardBody>
                                <p>
                                    Milepæl 4 ble gjennomført den 09.04 klokken 12:15 og tok for seg temaene opplæringsplan,
                                    testplan og innføringsstrategi.
                                </p>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/PRO1000/Milepael_4.pdf"
                                        width="100%"
                                        height="600px"
                                        title="Presentasjon av milepæl 1"
                                        className="border-0"
                                    />
                                </div>



                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Rapport</h2></CardHeader>
                            <CardBody>
                                <p>Denne rapporten teller som eksamen i dette faget. Det er blant annet derfor vi har kandidatnummer i stedet for navnene våre til tross for at det er åpenbart for sensor hvem som er hvem.</p>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/PRO1000/RapportPRO1000.pdf"
                                        width="100%"
                                        height="600px"
                                        title=""
                                        className="border-0"
                                    />
                                </div>

                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default PRO1000;