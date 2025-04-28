import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {Tab, Tabs} from "@heroui/tabs";
import {Card, CardHeader, CardBody} from "@heroui/card";

const ESB1000 = () => {
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
                    <BreadcrumbItem href="/emner">Emner</BreadcrumbItem>
                    <BreadcrumbItem href="/emner/esb1000">Etikk og samfunnsansvar</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">ESB1000 - Etikk og samfunnsansvar</h1>

            <Tabs variant="solid" aria-label="Options">
                <Tab key="arbkrv1" title="Arbeidskrav 1">
                    <Card>
                        <CardHeader><h2 className="text-lg font-semibold">Innlevering av iKomp-bevis</h2></CardHeader>
                        <CardBody>
                            <p>Den første arbeidsoppgaven gikk ut på å ta et kurs innen <a style={{textDecoration:'underline'}} href="https://open.uit.no/courses/course-v1:UiT+iKomp+Norsk-2024/about">kildekritikk</a> som man finner på UIT. Etter å ha bestått kurset, skulle vi laste ned kursbevis og laste dette opp på læringsplattformen Canvas.</p>
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <iframe
                                    src="/pdfs/ESB1000/UiT%20iKomp%20Norsk%20Bokmål%20Certificate%20_%20UiT%20OpenedX.pdf"
                                    width="100%"
                                    height="600px"
                                    title="ESB1000 Arbeidskrav 1"
                                    className="border-0"
                                />
                            </div>
                        </CardBody>
                    </Card>

                </Tab>
                <Tab key="arbkrv2" title="Arbeidskrav 2">
                    <Card>
                        <CardHeader><h2 className="text-lg font-semibold">Innlevering av individuell oppgave</h2></CardHeader>
                        <CardBody>
                            <p>Denne oppgaven var mer typisk for et etikkemne. Vi skulle besvare en av følgende oppgaver i Canvas-mappen:</p>

                            <div>
                            <ul className="list-circle pl-5">
                                <li className="mb-2">Oppgave 1
                                    <ul className="list-circle ml-5 mt-1">
                                        <li>Hva er etikk og moral? Ta utgangspunkt i et dillema du har efart (på arbeidsplassen, privat eller fra nyheter) og bruk dette som utgangspunkt for en etisk refleksjon.</li>
                                    </ul>
                                </li>
                                <li className="mb-2">Oppgave 2
                                    <ul className="list-circle ml-5 mt-1">
                                        <li>Definer begrepet samfunnsansvar. Bruk et eksempel fra nyheter eller egne erfaringer og drøft ut fra eksempelet hvordan private bedrifter bør forholde seg til dette.</li>
                                    </ul>
                                </li>
                                <li className="mb-2">Oppgave 3
                                    <ul className="list-circle ml-5 mt-1">
                                        <li>Ta utgangspunkt i ideen om at FNs bærekraftsmål har allmenn gyldighet, og diskuter eventuelle etiske og moralske utfordringer ved dette. Bruk konkret eksempel.</li>
                                    </ul>
                                </li>
                            </ul>

                                <p>Jeg valgte oppgave 1.</p>

                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <iframe
                                    src="/pdfs/ESB1000/annotated-Oppgave1.pdf"
                                    width="100%"
                                    height="600px"
                                    title="ESB1000 arbeidskrav"
                                    className="border-0"
                                />
                            </div>

                            </div>

                        </CardBody>
                    </Card>

                </Tab>
                <Tab key="eksamen" title="Eksamen">

                    <Card>
                        <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                        <CardBody>
                            <p>Oppgavesettet for eksamen.</p>
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <iframe
                                    src="/pdfs/ESB1000/ESB1000%20-%20Nynorsk%20og%20Bokmål.pdf"
                                    width="100%"
                                    height="600px"
                                    title="ESB1000 Eksamen"
                                    className="border-0"
                                />
                            </div>

                            <p>Min besvarelse på eksamen, oppgave 2.</p>
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <iframe
                                    src="/pdfs/ESB1000/(7850)-Min%20besvarelse.pdf"
                                    width="100%"
                                    height="600px"
                                    title="ESB1000 Eksamen"
                                    className="border-0"
                                />
                            </div>

                        </CardBody>
                    </Card>

                </Tab>
            </Tabs>



        </div>
    )
}

export default ESB1000