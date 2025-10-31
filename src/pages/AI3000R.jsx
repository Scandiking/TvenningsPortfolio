import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import CodeBlock from "../components/CodeBlock";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";

const AI3000R = () => {
    return (
        <div className = "container mx-auto px-4 py-8">

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

                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv2" title="Arbeidskrav 2">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 2</h2></CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="AI3000REksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>


        </div>
    )
}

export default AI3000R;