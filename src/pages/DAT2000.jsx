import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import AnimatedPage from '../components/AnimatedPage';
import AnimatedTabs from '../components/AnimatedTabs';
import { Card, CardBody, CardHeader } from "@heroui/card";
import CodeBlock from "../components/CodeBlock";
import { Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";
import {Spacer} from "@heroui/react";
import {Image} from "@heroui/image";
import { PDFViewer } from "../components/PDFViewer";

const DAT2000 = () => {
    const navigate = useNavigate();
    return (
        <AnimatedPage className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/dat2000')}>Database 2</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">DAT2000 - Database 2</h1>

            <AnimatedTabs variant="solid" aria-label="Options">
                    <Tab key="arbkrv1" title="Arbeidskrav 1">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Mandatory Group Assignment</h2></CardHeader>
                            <CardBody>

                                <p>
                                    <strong>Instructions</strong>
                                </p>

                                <p>
                                    This assignment builds on the “dvdrental” database that represents business processes of a DVD rental store (so make sure that you have it imported in PostgreSQL and made accessible). If you still do not have the database imported, please refer to tutorial 2 that are posted on Canvas. The database has been used to demonstrate some features of PostgreSQL in the tutorials that you have been given in this course.

                                    Now, assume that you are the newly hired database administration team by the owner of DVD rental store, and the owner asked you to evaluate the situation of the current database system and suggest some improvements or additions if possible (this is the assignment!).

                                    The assignment consists of technical questions and strategic decision-making questions. The technical questions would require querying the database to get an overview of the current situation and help answering the strategic questions regarding improvements or additions.

                                    The answer to the assignment question must be written in English and submitted on Canvas.
                                </p>

                                <p>
                                    <strong>
                                        The size of the assignment document shall not be more than 30 pages and not less than 10 pages. This is excluding the cover page.
                                    </strong>
                                </p>

                                <p>
                                    The assignment shall be delivered by Friday 25th of October as 23:59 on Canvas.
                                </p>

                                <p>
                                    Good luck :) !
                                </p>


                                <Spacer/>
                                <p className="text-lg font-bold">Oppgavesett:</p>

                                <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/DAT2000/DAT2000-1 Database 2 20.12.2024.pdf`} title="Mandatory Assignment.pdf" />

                                <Spacer/>

                                <p className="text-lg font-bold">Besvarelse:</p>

                                <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/DAT2000/Group_7_H24_DAT2000.pdf`} title="DAT2000 Arbeidskrav 1" />
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="eksamen" title="Eksamen">
                        <Card>
                            <CardHeader><h2 className="text-lg font-semibold">Eksamen</h2></CardHeader>
                            <CardBody>
                                <p>Oppgavesettet for eksamen i Database 2</p>
                                <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/DAT2000/DAT2000-1%20Database%202%2020.12.2024.pdf`} title="Examination Information Page" />
                                <p>Besvarelse på eksamen i Database 2</p>
                                <PDFViewer src={`${process.env.PUBLIC_URL}/pdfs/DAT2000/DAT2000-Eksamen.pdf`} title="Examination Information Page" />

                                <Image
                                    loading="eager"
                                    radius="none"
                                    alt="Little badge that says grade E"
                                    src="https://img.shields.io/badge/Karakter-E-orange"
                                    width="100"
                                    height="auto"
                                />
                            </CardBody>
                        </Card>
                    </Tab>
                </AnimatedTabs>

        </AnimatedPage>
    )
}

export default DAT2000;