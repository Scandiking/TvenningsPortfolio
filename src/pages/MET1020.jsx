import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {Tab, Tabs} from "@heroui/tabs";
import { Card, CardHeader, CardBody } from "@heroui/react";

const MET1020 = () => {
    return (
        <div className = "container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
                    <BreadcrumbItem href="/emner">Emner</BreadcrumbItem>
                    <BreadcrumbItem href="/emner/met1020">Samfunnsvitenskapelig metode</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold">MET1020 - Samfunnsvitenskapelig metode</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Obligatorisk arbeidskrav</h2></CardHeader>
                            <CardBody>
                                <p>Obligatorisk arbeidskrav</p>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/MET1020/Arbeidskrav_i_MET1020_gr7.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="MET1020 Obligatorisk arbeidskrav"
                                        className="border-0"

                                    />

                                </div>

                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen (ikke avholdt ennå)" isDisabled>
                        <Card>
                            <CardHeader></CardHeader>
                            <CardBody></CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}

export default MET1020;