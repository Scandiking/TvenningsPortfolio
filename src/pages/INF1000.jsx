import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

const INF1000 = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/inf1000')}>Informasjonssystemer</BreadcrumbItem>
                </Breadcrumbs>
            </div>

<h1 className="text-3xl font-bold mb-6">INF1000 - Digital forretningsforståelse</h1>
            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrb1" title="Arbeidskrav">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskravet i digital forretningsforståelse</h2></CardHeader>
                                <CardBody>
                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <iframe
                                            src="/pdfs/INF1000/INF1000-Arbeidskrav1-gruppe3.pdf"
                                            width="100%"
                                            height="600px"
                                            title="INF1000 Arbeidskrav"
                                            className="border-0"
                                        />
                                    </div>
                                </CardBody>

                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamensbesvarelse i digital forretningsforståelse</h2></CardHeader>
                                <CardBody>
                                    <p>Dette er hentet fra WiseFlow og er automatisert. Jeg har ikke kontroll over formateringen utover skriftstørrelse og uthevinger, derfor ser det ut som det gjør.</p>
                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <iframe
                                            src="/pdfs/INF1000/INF1000-Eksamen.pdf"
                                            width="100%"
                                            height="600px"
                                            title="INF1000 Eksamen"
                                            className="border-0"
                                        />
                                    </div>
                                </CardBody>

                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default INF1000;