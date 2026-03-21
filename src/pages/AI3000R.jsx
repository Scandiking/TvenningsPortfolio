import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab } from "@heroui/tabs";
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTabs from '../components/AnimatedTabs';
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { IpynbRenderer } from 'react-ipynb-renderer';
import 'react-ipynb-renderer/dist/styles/monokai.css';
import {Image} from "@heroui/image";
//import './notebooks/AI3000R/NY-Housing-Prices_Machine_Learning_Model.ipynb';
import { PDFViewer } from "../components/PDFViewer";


const AI3000R = () => {
    const navigate = useNavigate();
    const [notebook, setNotebook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fixNotebook = (notebook) => {
        return {
            ...notebook,
            cells: notebook.cells.map(cell => {
                if (cell.cell_type === 'markdown') {
                    const source = Array.isArray(cell.source)
                        ? cell.source.join('')
                        : cell.source;

                    const fixed = source.replace(/\\space/g, '~');

                    return { ...cell, source: fixed };
                }
                return cell;
            })
        };
    };


    // const fixMathBackslashes = (notebook) => {
    //     return {
    //         ...notebook,
    //         cells: notebook.cells.map(cell => {
    //             if (cell.cell_type === 'markdown') {
    //                 const source = Array.isArray(cell.source)
    //                     ? cell.source.join('')
    //                     : cell.source;
    //
    //                 const fixed = source.replace(/\$([^$]*?)\$/g, (match) => {
    //                     return match.replace(/\\/g, '\\\\');
    //                 });
    //
    //                 return { ...cell, source: fixed };
    //             }
    //             return cell;
    //         })
    //     };
    // };

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/Scandiking/NY-Housing-Prices_Machine_Learning_Model/master/NY-Housing-Prices_Machine_Learning_Model.ipynb';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!data.cells) throw new Error('Invalid notebook format');
                setNotebook(fixNotebook(data));
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);


    return (
        <AnimatedPage className="container mx-auto px-4 py-8">
            <div className="py-1">
                <Breadcrumbs>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/ai3000r')}>Artifical Intelligence for Business Applications</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">AI3000R - Artificial Intelligence for Business Applications</h1>

            <AnimatedTabs variant="solid" aria-label="Options">
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

                    <Tab key="AI3000REksamen" title="Eksamen">
                        <Card>
                            <CardHeader>
                                <h2 className="text-lg font-semibold">Eksamen</h2>
                            </CardHeader>
                            <CardBody>

                                <h2 className="text-md font-semibold">Oppgavesett</h2>
                                <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/AI3000R/AI3000R_Written examination.pdf`} title="AI3000R Eksamen Oppgavesett" />

                                <h2 className="text-md font-semibold">Besvarelse</h2>
                                <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/AI3000R/7066-Min besvarelse.pdf`} title="AI3000R Eksamen - Studentens besvarelse" />

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
        </AnimatedPage>
    );
};

export default AI3000R;
