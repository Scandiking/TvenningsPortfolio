import React, {useEffect} from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import IpynbRenderer from '@signcl/react-ipynb-renderer';
import notebookData from '../notebooks/AI3000R/NY-Housing-Prices_Machine_Learning_Model.ipynb';

const AI3000R = () => {
    const [notebook, setNotebook] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        console.log('Attempting to fetch from:', '/notebooks/AI3000R/NY-Housing-Prices_Machine_Learning_Model.ipynb');


        fetch('/notebooks/AI3000R/NY-Housing-Prices_Machine_Learning_Model.ipynb')
            .then(res => {
                console.log('Response status:', res.status);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                console.log('Notebook loaded:', data);
                setNotebook(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading notebook:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">

            {loading ? <p>Loading...</p> : notebook && <IpynbRenderer ipynb={notebook} />}

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
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
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 1</h2></CardHeader>
                            <CardBody>
                                <p>Du kan se arbeidskravet på <a href="https://github.com/Scandiking/NY-Housing-Prices_Machine_Learning_Model/blob/master/NY-Housing-Prices_Machine_Learning_Model.ipynb">GitHub</a></p>




                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab key="AI3000REksamen" title="Eksamen" isDisabled={true}>
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody></CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default AI3000R;
