import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Code } from "@heroui/react";
import { IpynbRenderer } from 'react-ipynb-renderer';

import 'react-ipynb-renderer/dist/styles/monokai.css';
import 'katex/dist/katex.min.css';

const AI3000R = () => {
    const [notebook, setNotebook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/Scandiking/NY-Housing-Prices_Machine_Learning_Model/master/NY-Housing-Prices_Machine_Learning_Model.ipynb';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!data.cells) throw new Error('Invalid notebook format');
                setNotebook(data);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);




    return (
        <div className="container mx-auto px-4 py-8">
            <div className="py-1">
                <Breadcrumbs>
                    <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
                    <BreadcrumbItem href="/emner">Emner</BreadcrumbItem>
                    <BreadcrumbItem href="/emner/ai3000r">Artifical Intelligence for Business Applications</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">AI3000R - Artificial Intelligence for Business Applications</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold">Arbeidskrav 1</h2>
                            </CardHeader>
                            <CardBody>
                                <p className="mb-4">

                                    <Card>
                                        <CardBody className="bg-blue-50 dark:bg-blue-950/30">
                                            <p>Om du ikke ser en .ipynb-fil her kan du se arbeidskravet på <a href="https://github.com/Scandiking/NY-Housing-Prices_Machine_Learning_Model/blob/master/NY-Housing-Prices_Machine_Learning_Model.ipynb" className="text-blue-500 hover:underline">GitHub</a>.</p>
                                        </CardBody>
                                    </Card>
                                </p>
                                <p>Dette arbeidskravet gikk ut på å lage en maskinlæringsmodell med en nøyaktighet på R²>0.8. Altså en maskinlæringsmodell som kunne forklare over 80% av prisvariansen. Vi gikk for en modell som baserte seg på features fra NY-Housing-datasettet fra Kaggle. Features er antall bad, antall soverom, kvadratfot (dette er data fra USA), location osv. Dette har vi brukt som avhengige variabler, mens den uavhengige er prisestimatet. Modellen vår nådde R² på 0.814 som var innenfor målet på 0.8. </p>

                                {loading && <p>Loading notebook...</p>}
                                {error && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                        <p className="font-bold">Error:</p>
                                        <p>{error}</p>
                                    </div>
                                )}
                                {notebook && (
                                    <div className="overflow-auto max-w-full">
                                        <IpynbRenderer ipynb={notebook} />
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab key="AI3000REksamen" title="Eksamen" isDisabled={true}>
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold">Eksamen</h2>
                            </CardHeader>
                            <CardBody></CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default AI3000R;
