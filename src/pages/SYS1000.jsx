import React from 'react';
import {Tabs, Tab} from "@heroui/tabs";
import {Card, CardHeader, CardBody } from "@heroui/react";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

const SYS1000 = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/sys1000')}>Systemutvikling</BreadcrumbItem>
                </Breadcrumbs>
            </div>


            <h1 className="text-3xl font-bold mb-6">SYS1000 - Systemutvikling</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Forberedelser">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Møte med kunde</h2></CardHeader>
                            <CardBody>
                                <p>
                                    I dette faget er det ikke ordinære arbeidskrav. Det som er "arbeidskrav" er møter med kunden for Personelltjenester og å bruke dette som grunnlag for å utvikle systemet. Det anbefales å lese rapporten, som er eksamen, for et bedre bilde av denne aktiviteten.

                                </p>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <p>

                                </p>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/SYS1000/SYS1000Rapport.pdf"
                                        width="100%"
                                        height="600px"
                                        title="DAT1000 Arbeidskrav 1"
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

export default SYS1000;