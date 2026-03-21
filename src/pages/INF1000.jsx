import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTabs from '../components/AnimatedTabs';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@heroui/react";
import {Image} from "@heroui/image";
import { PDFViewer } from "../components/PDFViewer";

const INF1000 = () => {
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
        <AnimatedPage className="container mx-auto px-4 py-8">

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
                            <BreadcrumbItem onPress={() => navigate('/emner/inf1000')}>Informasjonssystemer</BreadcrumbItem>
                        </Breadcrumbs>
                    </div>

                    <h1 className="text-3xl font-bold mb-6">INF1000 - Digital forretningsforståelse</h1>
                    <AnimatedTabs variant="solid" aria-label="Options">
                            <Tab key="arbkrb1" title="Arbeidskrav">
                                <Card>
                                    <CardHeader><h2 className="text-lg font-semibold">Arbeidskravet i digital forretningsforståelse</h2></CardHeader>
                                    <CardBody>
                                        <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/INF1000/INF1000-Arbeidskrav1-gruppe3.pdf`} title="INF1000 Arbeidskrav" />
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="eksamen" title="Eksamen">
                                <Card>
                                    <CardHeader><h2 className="text-lg font-semibold">Eksamensbesvarelse i digital forretningsforståelse</h2></CardHeader>
                                    <CardBody>
                                        <p>Dette er hentet fra WiseFlow og er automatisert. Jeg har ikke kontroll over formateringen utover skriftstørrelse og uthevinger, derfor ser det ut som det gjør.</p>
                                        <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/INF1000/INF1000-Eksamen.pdf`} title="INF1000 Eksamen" />

                                        <Image
                                            loading="eager"
                                            radius="none"
                                            alt="Little badge that says grade B"
                                            src="https://img.shields.io/badge/Karakter-B-silver"
                                            width="100"
                                            height="auto"
                                        />

                                    </CardBody>
                                </Card>
                            </Tab>
                        </AnimatedTabs>
                </>
            )}
        </AnimatedPage>
    );
};

export default INF1000;
