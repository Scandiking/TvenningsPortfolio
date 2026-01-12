import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {Tab, Tabs} from "@heroui/tabs";
import {Card, CardHeader, CardBody, Code, Spacer} from "@heroui/react";
import {Image} from "@heroui/react";


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

                                    <Image
                                        radius="sm"
                                        alt="Multiple Choice Test for samfunnsvitenskapelig metode"
                                        src={`${process.env.PUBLIC_URL}/images/MET1020/p1.png`}
                                        className="border-0"
                                    />

                                <Spacer/>

                                    <Image
                                        radius="sm"
                                        src={`${process.env.PUBLIC_URL}/images/MET1020/2A.png`}
                                        alt="Oppgave 2A"
                                        className="border-0"
                                    />

                                <Spacer/>

                                    <Image
                                        radius="sm"
                                        src={`${process.env.PUBLIC_URL}/images/MET1020/2B.png`}
                                        alt="Oppgave 2B"
                                        className="border-0"
                                    />

                                <Spacer/>

                                    <Image
                                        radius="sm"
                                        src={`${process.env.PUBLIC_URL}/images/MET1020/2C.png`}
                                        alt="Oppgave 2C"
                                        className="border-0"
                                    />

                                <Spacer/>

                                    <Image
                                        radius="sm"
                                        src={`${process.env.PUBLIC_URL}/images/MET1020/3A.png`}
                                        alt="Oppgave 3A"
                                        className="border-0"
                                    />

                                <Spacer/>

                                    <Image
                                        radius="sm"
                                        src={`${process.env.PUBLIC_URL}/images/MET1020/3B.png`}
                                        alt="Oppgave 3B"
                                        className="border-0"
                                    />


                                <Spacer/>

                                    <Image
                                        radius="sm"
                                        src={`${process.env.PUBLIC_URL}/images/MET1020/3C.png`}
                                        alt="Oppgave 3C"
                                        className="border-0"
                                    />

                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}

export default MET1020;