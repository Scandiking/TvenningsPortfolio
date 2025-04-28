import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import CodeBlock from "../components/CodeBlock";
import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";

const WEB1100 = () => {
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
                    <BreadcrumbItem href="/emner">Emner</BreadcrumbItem>
                    <BreadcrumbItem href="/emner/web1100">Webutvikling og HCI</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">WEB1100 - Webutvikling og HCI</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold">Finne og sette rammer</h2>
                            </CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>Den første delen av dette arbeidskravet gjaldt å finne en klient med et problem og løse dette problemet ved nettsiden ved hjelp av PACT-rammeverket og en rekke andre ting. Dette innbefatter å forme nettsiden etter hvem som skal bruke den til hvilke aktiviteter, i hvilken kontekst og med hvilken teknologi. PACT = People, Activities, Context, Technology.</p>

                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <iframe
                                            src="/pdfs/WEB1100/WEB1100-H23-A2-gr12.pdf"
                                            width="100%"
                                            height="600px"
                                            title="WEB1100 Arbeidskrav 1"
                                            className="border-0"
                                        />
                                    </div>

                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv2" title="Arbeidskrav 2">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Prototype av nettside</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>Dette er et grunnkurs hvor fokuset er på grunnleggende HTML og CSS og det har blitt tatt lite hensyn til ulike skjermstørrelser, derfor presenteres de som bilde i stedet for HTML. Som du ser i arbeidskrav 1 finner du disse bildene i den første rapporten. </p>
                                </div>

                                <p className="mt-3">Landingssiden</p>

                                    <img className="overflow-auto-border border-gray-200 dark:border-gray-700 rounded-lg"
                                        alt="Skjermdump av nettside"
                                        src="/pdfs/WEB1100/Nettside1.png"
                                        width="100%"
                                    />


                                <p className="mt-3">Kontakt-side</p>
                                    <img className="overflow-auto-border border-gray-200 dark:border-gray-700 rounded-lg"
                                        alt="Skjermdump av nettside"
                                        src="/pdfs/WEB1100/Nettside2.png"
                                        width="100%"
                                    />

                                <p className="mt-3">Anmeldelser-side</p>
                                    <img className="overflow-auto-border border-gray-200 dark:border-gray-700 rounded-lg"
                                        alt="Skjermdump av nettside"
                                        src="/pdfs/WEB1100/Nettside3.png"
                                        width="100%"
                                    />

                                <p className="mt-3">Kontakt-side</p>
                                    <img className="overflow-auto-border border-gray-200 dark:border-gray-700 rounded-lg"
                                        alt="Skjermdump av nettside"
                                        src="/pdfs/WEB1100/Nettside4.png"
                                        width="100%"
                                    />





                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                </div>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/WEB1100/Web1100-Eksamen.pdf"
                                        width="100%"
                                        height="600px"
                                        title="WEB1100 Eksamen"
                                        className="border-0"
                                    />
                                </div>


                                <p className="mt-3">Spørsmål 2.1 er laget i SafeExamBrowsers tegneverktøy som er enkelt å bruke. Det som ikke er så enkelt er å få det til å se bra ut.</p>
                                <p className="mt-3">Spørsmål 2.1:</p>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        alt="Flow-diagram of browser routes"
                                        src="/pdfs/WEB1100/Question_2-1.png"
                                        width="100%"
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

export default WEB1100;