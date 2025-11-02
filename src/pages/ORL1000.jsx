import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import {Card, CardBody, CardHeader, Spacer} from "@heroui/react";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";
import {Divider} from "@heroui/divider";

const ORL1000 = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/orl1000')}>Organisering og ledelse</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">ORL1000 - Organisering og ledelse</h1>

            <div className="flex w-full flex-col">
                <Tabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 1 Individuelt refleksjonsnotat</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <h3>Oppgave</h3>
                                    <p>1. Les kapittel 8 <i>Grupper og teamarbeid</i> (side 255-284) i boken <i>Organisasjon og ledelse</i> av Einarsen, Mathisen og Skogstad (2023).</p>
                                    <p>2. Ta utgangspunkt i et gruppe- eller teamarbeid som du har deltatt i, enten i jobb- eller studiesammenheng. Reflekter rundt dine egne erfaringer og brukt minst tre av begrepene fra kapittelet i besvarelsen din. Husk å referere til kilden(e).</p>
                                    <p>Du står fritt til å bruke andre kilder <strong>i tillegg</strong> dersom du ønsker det.</p>
                                    <h3>Formkrav</h3>
                                    <p><strong>Maksimum</strong> 1200 ord eksl. litteraturliste.</p>
                                    <p>Linjeavstand: 1,5. Skrifttype: Times New Roman. Punktstørrelse: 12. Standard marger.</p>
                                    <p>Format: PDF eller Word.</p>
                                    <p>Mer informasjon om oppgaven finner du i <a href="https://usn.instructure.com/courses/30553/files/3294393">Veiledning til arbeidskrav 1.</a>. Det er viktig at du leser denne veiledningen før du  begynner. OBS! Det er en fordel å laste ned dokumentet (ikke på mobil) før du leser det, da det inneholder "Spor endringer" for å fremheve innhold i teksten.</p>

                                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                        <iframe
                                            src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/Gnagende%20gnisninger%20blir%20glemt%20i%20gjennomgått%20gruppedynamikk.pdf`}
                                            width="100%"
                                            height="600px"
                                            title="ORL1000 Arbeidskrav 1"
                                            classname="border-0"
                                        />
                                    </div>
                                </div>

<Spacer/>
<Divider/>
<Spacer/>
                                    <p className="text-xl font-semibold">
                                        Tilbakemelding på innleveringen:
                                    </p>

                                    <CardBody>

                                        <p className="text-lg font-semibold">Kunnskap om begreper</p>
                                        <p>I denne oppgaven viser du kunnskaper om grupper og team og bruker begreper fra kapittelet. Du definerer og forklarer begrepene du bruker kort og presist, og det er bra.</p>
                                        <Spacer/>

                                        <p className="text-lg font-semibold">Anvendelse av teori</p>
                                        <p>Du bruker teorien fra pensum og knytter den opp mot din arbeidserfaring på en god måte.</p>
                                        <Spacer/>

                                        <p className="text-lg font-semibold">Refleksjon</p>
                                        <p>Gode beskrivelser og fine refleksjoner knyttet til din erfaring som teammedlem. Et grundig arbeid.</p>
                                        <Spacer/>

                                        <p className="text-lg font-semibold">Språk</p>
                                        <p>Et godt fagspråk, og det er bra du har latt noen av referansene dine bli en del av setningen og ikke kun en parantes til slutt. Du kan f.eks. skrive... I følge Einarsen... eller Einarsen et.al. (2023, s. 258) forklarer begrepet på denne måten...(sitat).</p>
                                        <Spacer/>

                                        <p className="text-lg font-semibold">Kildehenvisning og referanseliste</p>
                                        <p>Du har brukt riktig referansestil, APA 7th. Kildehenvisningene er bra, og du har et rikholdig kilderegister.</p>
                                    </CardBody>

                            </CardBody>
                        </Card>
                    </Tab>


                    <Tab key="arbkrv2" title="Arbeidskrav 2">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 2 Gruppekontakt (4-6 studenter per gruppe)</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>Hensikten med denne oppgaven er å få gruppen i gang, lage kontrakt og regler for samarbeid. Les <a href="https://usn.instructure.com/courses/30553/files/3287649?wrap=1">Veileder for arbeidskrav 2</a> før dere lager gruppekontrakten. <a href="https://usn.instructure.com/courses/30553/files/3287650?wrap=1">Mal til gruppekontrakt</a>. Fyll ut kontrakten, signer og lever den her. Det holder at én på gruppen sender inn kontrakten.</p>
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/annotated-GRUPPEKONTRAKT-gruppe22.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="ORL1000 Arbeidskrav 2"
                                        classname="border-0"
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="arbkrv3" title="Arbeidskrav 3">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Arbeidskrav 3 Gruppeoppgave basert på case</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>Her finner dere casen og tilhørende oppgaver: <a
                                        href="https://usn.instructure.com/courses/30553/files/3329369?wrap=1">Enoka -
                                        case til arbeidskrav 3</a>.</p>
                                    <p>
                                        <strong>Dere blir vurdert ut fra følgende kriterier:</strong>
                                        <ul>
                                            <li>Dere anvender/bruker begreper fra pensumlitteraturen i svarene på en
                                                relevant måte
                                            </li>
                                            <li>Dere definerer og redegjør for begrepene dere bruker</li>
                                            <li>Dere henviser til kilder i teksten og har med referanseliste på slutten.
                                                Kildehenvisninger og referanseliste skal være i henhold til APA 7th.
                                            </li>
                                        </ul>
                                    </p>
                                    <p>Dere skal altså vise at dere har kunnskap om teorien og kan bruke dette når dere
                                        svarer på oppgavene.</p>
                                    <p>Dette er en gruppeoppgave og et felles arbeid. Pass på at dere jobber sammen på
                                        en slik måte at dette blir ett produkt og ikke et resultat av at dere har delt
                                        oppgavene mellom dere.</p>
                                    <p className="text-lg font-semibold">Formkrav</p>

                                    <ul>
                                        <li>Forside med navn på oppgaven og fullt navn på alle deltakerne i gruppen</li>
                                        <li>Skrift 12 punkt</li>
                                        <li>Linjeavstand 1,5</li>
                                        <li>Leveres som ett pdf- eller word-dokument</li>
                                        <li>Maksimalt 3000 ord</li>
                                    </ul>


                                    <p className="text-lg font-semibold">Enoka - Case til arbeidskrav 3:</p>
                                    {/* CASE TIL ARBEIDSKRAV 3 */}
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/ORL1000_Arbeidskrav3_2024.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="ORL1000 Enoka - Case til arbeidskrav 3"
                                        classname="border-0"
                                    />

                                    <p className="text-lg font-semibold">Besvarelse:</p>
                                    {/* BESVARELSE */}
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/annotated-ORL1000-Oblig3-Gruppe22.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="ORL1000 Arbeidskrav 3"
                                        classname="border-0"
                                    />

                                    <p className="text-xl font-semibold">Tilbakemelding:</p>

                                    <p className="text-lg font-semibold">Innhold</p>
                                    <p>
                                        Dette er en bra besvarelse. Dere kunne også også beskrive organisasjonsformen dere argumenterer for, f.eks. som i dette tilfelle en divisjonalisert eller geografisk spredt organisasjon. Mer om dette finner dere i kompendiet. Det kan være fornuftig å tegne et organisasjonskart til besvarelsen dere skal levere på eksamen, hvis dere får et lignende spørsmål som her. Besvarelsen av 2 og 3 er også bra.
                                    </p>

                                    <p className="text-lg font-semibold">Drøfting</p>
                                    <p>
                                        Fint å se at dere har med en drøfting til hver oppgave hvor det diskuteres flere sider av en sak og bygges en argumentasjon. Lærestoffet inngår i drøftingen på en bra måte. Drøfting og argumentasjon er en viktig del av en god eksamensbesvarelse.
                                    </p>

                                    <p className="text-lg font-semibold">Kildehenvisning og referanseliste</p>
                                    <p>
                                        Kildehenvisningene i besvarelsen er i korrekt APA7 format. Ved en skoleeksamen kan vi imidlertid ikke forlange korrekte kildehenvisninger med års- og sidetall, spesielt når hjelpemidler ikke er tillatt. Det jeg derfor anbefaler på eksamen er at dere refererer til begreper, navnet på forskere, teoretikere, teorier og modeller i den grad dere husker disse. Det er bedre å referere til spesifikke forskere, f.eks. Mintzberg eller Bang enn kun til lærebokforfatterne,
                                    </p>

                                    <p className="text-lg font-semibold">Språk</p>
                                    <p>
                                        Språket i denne oppgavebesvarelsen er bra. Den er også godt skrevet og velorganisert.
                                    </p>


                                </div>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <div className="flex flex-col gap-6">
                                    <p>Oppgavesettet for besvarelsen er ikke tilgjengelig, men hovedtemaet var organisasjonskultur i og på tvers av avdelinger, alder og livsforhold. Konflikter oppstår, og vi blir spurt om hva som burde ha foregått i stedet.</p>
                                    <iframe
                                        src={`${process.env.PUBLIC_URL}/pdfs/ORL1000/ORL1000-Eksamen.pdf`}
                                        width="100%"
                                        height="600px"
                                        title="ORL1000 Eksamen"
                                        classname="border-0"
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

export default ORL1000;