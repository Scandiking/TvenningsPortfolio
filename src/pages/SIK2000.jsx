import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@heroui/react";
import {Image} from "@heroui/image";

const SIK2000 = () => {
    const navigate = useNavigate();

    // Lasting-state for hele siden
    const [loading, setLoading] = useState(true);
    // Teller hvor mange iframes som har fått onLoad-kall
    const [loadedCount, setLoadedCount] = useState(0);
    const totalIframes = 2; // to pdf-er

    const handleLoad = () => {
        setLoadedCount(n => n + 1);
    };

    useEffect(() => {
        if (loadedCount >= totalIframes) setLoading(false);
    },[loadedCount]);

    useEffect(() => {
        if (loadedCount >= totalIframes) return setLoading(false);
        const t = setTimeout(() => setLoading(false), 1); // maks ventetid
        return () => clearTimeout(t);
    }, [loadedCount]);

    return (
        <div className="container mx-auto px-4 py-8">

            {loading && (
                <div className="flex justify-center mb-4">
                    <Spinner size="md" aria-label="Loading" />
                </div>
            )}

            {!loading && (
                <>
                    <div className="py-1">
                        <Breadcrumbs key="solid" px-20>
                            <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                            <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                            <BreadcrumbItem onPress={() => navigate('/emner/sik2000')}>Informasjonssikkerhet</BreadcrumbItem>
                        </Breadcrumbs>
                    </div>

                    <h1 className="text-3xl font-bold mb-6">Informasjonssikkerhet</h1>

                    <div className="flex w-full flex-col">
                        <Tabs variant="solid" aria-label="Options">
                            <Tab key="arbkrv1" title="Arbeidskrav 1">
                                <Card>
                                    <CardHeader><h2 className="text-lg font-semibold">Rapport om selvvalgt emne: malvertising</h2></CardHeader>
                                    <CardBody>
                                        <div className="rounded-lg">
                                            <p>Arbeidskravet for informasjonssikkerhet var å skrive en rapport. En del av rapporten var fastsatt, mens en annen del var valgfri. I den valgfrie delen valgte jeg å skrive om "<cite>malvertising</cite>".</p>

                                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                                <iframe
                                                    src={`${process.env.PUBLIC_URL}/pdfs/SIK2000/Arbeidskrav_SIK2000.pdf`}
                                                    width="100%"
                                                    height="600px"
                                                    title="SIK1020 Obligatorisk arbeidskrav"
                                                    className="border-0"
                                                />
                                            </div>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>


                            <Tab key="eksmn" title="Eksamen">
                                <Card>
                                    <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                                    <CardBody>

                                        <p>Eksamen i informasjonssikkerhet var i form av kulepunkter med fire svaralternativer på spørsmål. Disse er dessverre ikke tilgjengelig for nedlasting via Wiseflow, men gikk på stoffet fra læreboken <i>Datasikkerhet</i> av Tom Heine Nätt.</p>

                                        <Image
                                            loading="eager"
                                            radius="none"
                                            alt="Little badge that says grade A"
                                            src="https://img.shields.io/badge/Karakter-A-gold"
                                            width="100"
                                            height="auto"
                                        />

                                    </CardBody>
                                </Card>
                            </Tab>

                        </Tabs>
                    </div>




                </>
            )}
        </div>
    );
};

export default SIK2000;