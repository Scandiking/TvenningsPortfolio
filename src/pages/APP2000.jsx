import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {Tabs, Tab } from "@heroui/tabs";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {Image, Spacer} from "@heroui/react";
import CodeBlock from "../components/CodeBlock";
import {useNavigate} from "react-router-dom";

const APP2000 = () => {
    const navigate = useNavigate();

    const githubrepo = `gh repo clone Scandiking/GarminConnectMaterialDesignReactFrontend`
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/app2000')}>Apputvikling for web</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">APP2000 - Apputvikling for web</h1>
            <div className="flex w-full flex-col">
                <Tabs variant="solid" aira-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1/2">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 1/2</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>Dette er et arbeidskrav som består av mange filer og det er mer hensiktsmessig å laste ned repositoriumet fra <a style={{fontWeight: 'strong', textDecoration:'underline'}} href="https://github.com/Scandiking/GarminConnectMaterialDesignReactFrontend">GitHub</a> enn å vise filene her. For å vise <i>noe</i>, legger jeg inn bilder. Du finner oppgavebeskrivelsen i README.md-filen på GitHub.</p>
                                    <CodeBlock
                                        code={githubrepo}
                                        language="GitHub CLI"
                                        showLineNumbers={false}
                                    />
                                    <img
                                        alt="Screenshot of home page"
                                        src={`${process.env.PUBLIC_URL}/images/APP2000/Home.png`}
                                        width="100%"
                                    />

                                    <img
                                        alt="Screenshot of sidebar page"
                                        src={`${process.env.PUBLIC_URL}/images/APP2000/Sidebar.png`}
                                        width="100%"
                                    />

                                    <img
                                        alt="Screenshot of calendar page"
                                        src={`${process.env.PUBLIC_URL}/images/APP2000/Calendar.png`}
                                        width="100%"
                                    />

                                    <img
                                        alt="Screenshot of popover element"
                                        src={`${process.env.PUBLIC_URL}/images/APP2000/Popover.png`}
                                        width="100%"
                                    />

                                    <img
                                        alt="Screenshot of theme settings page"
                                        src={`${process.env.PUBLIC_URL}/images/APP2000/DarkTheme.png`}
                                        width="100%"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv2" title="Arbeidskrav 2/2">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 2/2</h2></CardHeader>
                            <CardBody>Arbeidskrav 2/2: SPring Boot REST API Development sikrer at hvert teammedlem har fundamentale ferdigheter i å bygge REST API-er ved hjelp av Spring Boot ved å bygge individuelle endpoints og implementere grunnleggende CRUD-operasjonalitet. Slik som med arbeidskrav 1/2 er det også lite hensiktsmessig å vise alle filene her og det er bedre å klone <a style={{fontWeight: 'strong', textDecoration:'underline'}} href="https://github.com/Scandiking/taskmanager">GitHub-repoet</a> hvor du også finner en omfattende brukerveiledning.</CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv3" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <p className="text-md">Mappeinnlevering av valgfri SPA i React. "<a href="https://github.com/Scandiking/N-g/tree/master/backend/src/main/java/com/nag">Næg"</a> er en applikasjon hvor frontend er React og backend er i Java. Det man bruker appen til er å opprette oppgaver. Disse kan man delegere til personer man deler rom med. Twisten fra andre apper er at Næg repeterer notifikasjoner i økende frekens. Standard frekvens er eksponentiell.</p>

                                <Spacer/>

                            <h3 className="text-lg font-semibold">From the <a href="https://github.com/Scandiking/N-g/tree/master">Næg GitHub repository README.md:</a></h3>

                                <CardBody className="shadow-lg">
                                <h3 className="text-lg font-semibold">What is Næg?</h3>
                                <p className="text-md">Næg is an app that helps you get others to do what they should do. How do you do that? You add <code>Task</code>s to <code>People</code> in a <code>Room</code>. What sets Næg apart from other task managing apps is the ability to set a <code>Næg frequency</code> for each task. This means you can nag people to do their tasks with varying intensity, from a gentle reminder to an all-out bombardment of notifications.</p>
                                </CardBody>

                                <Spacer/>

                            <p className="text-lg font-semibold">Prosjektrapport for faget Applikasjonsutvikling for web</p>

                                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                <iframe
                                    src={`${process.env.PUBLIC_URL}/pdfs/APP2000/Group8ReportAPP2000.pdf`}
                                    width="100%"
                                    height="600px"
                                    title="APP2000 Eksamen"
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

export default APP2000;