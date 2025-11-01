import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

const ORL1000 = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/orl1000')}>Organisering og ledelse</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">ORL1000 - Organisering og ledelse</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 1 Individuelt refleksjonsnotat</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>En to tre</p>
                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <iframe
                                            src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/Gnagende%20gnisninger%20blir%20glemt%20i%20gjennomgått%20gruppedynamikk.pdf`}
                                            width="100%"
                                            height="600px"
                                            title="ORL1000 Arbeidskrav 1"
                                            classname="border-0"
                                        />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                    </Tab>
                    <Tab key="arbkrv2" title="Arbeidskrav 2">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 2 Gruppekontakt (4-6 studenter per gruppe)</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>En to tre</p>
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/annotated-GRUPPEKONTRAKT-gruppe22.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="ORL1000 Arbeidskrav 2"
                                        classname="border-0"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv3" title="Arbeidskrav 3">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 3 Gruppeoppgave basert på case</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>En to tre</p>
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/annotated-ORL1000-Oblig3-Gruppe22.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="ORL1000 Arbeidskrav 3"
                                        classname="border-0"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>En to tre</p>
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/ORL1000-Eksamen.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="ORL1000 Eksamen"
                                        classname="border-0"
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

export default ORL1000;