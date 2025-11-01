import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {Tabs, Tab } from "@heroui/tabs";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {Image} from "@heroui/react";
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
                            <CardBody>Dette er et emne som strekker seg over to semestre. Eksamen er derfor ennå ikke avholdt.</CardBody>
                        </Card>
                    </Tab>

                </Tabs>
            </div>
        </div>
    )
}

export default APP2000;