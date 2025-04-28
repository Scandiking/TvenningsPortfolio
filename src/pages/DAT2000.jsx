import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import CodeBlock from "../components/CodeBlock";
import { Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";

const DAT2000 = () => {
    return (
        <div className = "container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
                    <BreadcrumbItem href="/emner">Emner</BreadcrumbItem>
                    <BreadcrumbItem href="/emner/dat2000">Database 2</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">DAT2000 - Database 2</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Mandatory Group Assignment</h2></CardHeader>
                            <CardBody>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/DAT2000/Group_7_H24_DAT2000.pdf"
                                        width="100%"
                                        height="600px"
                                        title="DAT2000 Arbeidskrav 1"
                                        className="border-0"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <p>Oppgavesettet for eksamen i Database 2</p>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/DAT2000/DAT2000-1%20Database%202%2020.12.2024.pdf"
                                        width="100%"
                                        height="600px"
                                        title="Examination Information Page"
                                        className="border-0"
                                    />
                                </div>
                                <p>Besvarelse på eksamen i Database 2</p>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src="/pdfs/DAT2000/DAT2000-Eksamen.pdf"
                                        width="100%"
                                        height="600px"
                                        title="Examination Information Page"
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

export default DAT2000;