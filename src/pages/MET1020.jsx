import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {Tab, Tabs} from "@heroui/tabs";
import {Card, CardHeader, CardBody, Code} from "@heroui/react";

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
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <p>Eksamen tok form av flervalgsoppgaver og korte setninger, og er ikke tilgjengelig via <Code>.pdf</Code> og presenteres derfor som skjermdumper.</p>
                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/MET1020/p1.png"
                                        alt="Multiple Choice Test for samfunnsvitenskapelig metode"
                                        width="1260"
                                        height="11821"
                                        className="border-0"
                                    />
                                </div>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/MET1020/2A.png"
                                        alt="Oppgave 2A"
                                        width="1066"
                                        height="469"
                                        className="border-0"
                                    />
                                </div>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/MET1020/2B.png"
                                        alt="Oppgave 2B"
                                        width="1067"
                                        height="363"
                                        className="border-0"
                                    />
                                </div>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/MET1020/2C.png"
                                        alt="Oppgave 2C"
                                        width="1066"
                                        height="570"
                                        className="border-0"
                                    />
                                </div>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/MET1020/3A.png"
                                        alt="Oppgave 3A"
                                        width="1066"
                                        height="546"
                                        className="border-0"
                                    />
                                </div>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/MET1020/3B.png"
                                        alt="Oppgave 3B"
                                        width="1065"
                                        height="289"
                                        className="border-0"
                                    />
                                </div>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/MET1020/3C.png"
                                        alt="Oppgave 3C"
                                        width="1065"
                                        height="556"
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

export default MET1020;