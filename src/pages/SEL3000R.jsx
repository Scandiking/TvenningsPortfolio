import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";
import {Tab, Tabs} from "@heroui/tabs";
import {Card, CardBody, CardHeader} from "@heroui/card";
import {Image} from "@heroui/image";
import {Spacer} from "@heroui/react";
import {useState} from "react";
import { PDFViewer } from "../components/PDFViewer";


const SEL3000R = () => {
    const navigate = useNavigate();



    return (
        <div className="container mx-auto px-4 py-8">

            {/* BREADCRUMBS */}
            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/sel3000r')}>Selvstudie</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">SEL3000R - Selvstudie IT og informasjonssystemer</h1>

            <Tabs variant="solid" aria-label="Options">
                <Tab key="Rapport" title="Rapport">
                    <Card>
                        <CardHeader><h2 className="text-lg font-semibold">Mappeinnlevering av selvvalgt tema</h2></CardHeader>
                        <CardBody>
                            <p>Emnet skal gi studenten mulighet for faglig fordypning og spesialisering i et selvvalgt tema innenfor bachelorstudiet. Tema skal avtales med og godkjennes av oppnevnt veileder.</p>
                            <p>Jeg valgte temaet <em>enshittification</em>. Etter å ha brukt ulike systemer fra ulike tidsepoker så merker jeg at mye av det som blir hovedstrøm-programvare ofte er et godt produkt i seg selv, men som ødelegges av mersalg. Et eksempel på dette er hvordan praktisk talt alle spill nå maser på deg om at du må bruke mer penger. Dette skriver jeg om i rapporten. Men enshittification handler også om for eksempel sosiale medier og hvordan de er laget for å få deg til å bruke mest mulig tid på dem så de kan tjene penger på deg, mens du sitter og "doomscroller" i flere timer.</p>

                            <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/SEL3000R/Selvstudie-Kand_7076.pdf`} title="SEL3000R Rapport" />


                            <Spacer/>
                            <Spacer/>
                            <Spacer/>
                            <Spacer/>
                            <Image
                                loading="eager"
                                radius="none"
                                alt="Little badge that says grade A"
                                src="https://img.shields.io/badge/Karakter-A-gold"
                                width="100"
                                height="auto"
                            />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default SEL3000R