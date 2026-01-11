import {useNavigate} from "react-router-dom";
import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {Tab, Tabs} from "@heroui/tabs";
import {Card, CardBody, CardHeader} from "@heroui/card";

const MOB3000 = () => {
    const navigate = useNavigate();

    return (
        <div className = "container mx-auto px-4 py-8">

            {/* BREADCRUMBS */}
            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/mob3000')}>Applikasjonsutvikling for mobile enheter</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            {/* EMNENAVN */}
            <h1 className="text-3xl font-bold mb-6">MOB3000 - Applikasjonsutvikling for mobile enheter</h1>

            {/* FANER */}
            <Tabs variant="solid" aria-label="Options">
                <Tab key="arbkrv" title="Applikasjonsutvikling">
                    <Card>
                        <CardHeader>
                            <CardBody>
                                <p>Ingen formelle arbeidskrav i dette faget. Faget går ut på å utvikle en Android-app for en mobil enhet, hvor vi kunne velge mellom Java og Kotlin som språk. Har du en Android-telefon kan du laste ned appen <a href="https://github.com/JonasELH/DartBud">her</a>. Vi planlegger også å gjøre den tilgjengelig fra Google Play Store på et senere tidspunkt.</p>

                                <div>
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/MOB3000/DartBud_g1.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="MOB3000 Rapport"
                                        className="border-0"
                                    />
                                </div>
                            </CardBody>
                        </CardHeader>
                    </Card>
                </Tab>
            </Tabs>

        </div>
    )
}

export default MOB3000