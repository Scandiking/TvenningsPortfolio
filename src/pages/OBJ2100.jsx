import React from 'react';
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import CodeBlock from "../components/CodeBlock";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { useNavigate } from "react-router-dom";
import {Code, Spacer} from "@heroui/react";

const OBJ2100 = () => {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner')}>Emner</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/emner/obj2100')}>Objektorientert programmering 2</BreadcrumbItem>
                </Breadcrumbs>
            </div>

        <h1 className="text-3xl font-bold mb-6">Objektorientert programmering 2</h1>

        <div className="flex w-full flex-col">
            <Tabs variant="solid" aria-label="Options">

                <Tab key="arbkrv1" title="Arbeidskrav 1">
                    <Card>
                        <CardHeader><h2 className="text-lg font-semibold">Spring Boot Mail Server REST API with PostgreSQL</h2></CardHeader>
                        <CardBody>
                            <div className="rounded-lg">

                                <p className="text-md font-regular">Dette arbeidskravet gikk ut på å lage et REST API for en mail server. Koderepositoriumet finner du på <a href="https://github.com/Scandiking/emailAPIserver?tab=readme-ov-file#assignment-text">Arbeidskrav: Mail Server using REST API</a>.</p>
                                <p className="text-xl font-bold">Oppgavebeskrivelse</p>
                                <p className="text-lg font-bold">Spring Boot Mail Server REST API with PostgreSQL</p>

                                <Spacer/>

                                <p><strong>Objectives</strong></p>

                                    <ol className="list-decimal pl-5">
                                        <li>Learn how to set up a Spring Boot application with Maven</li>
                                        <li>Implement RESTful web services with Spring</li>
                                        <li>Use Spring Data JPA to integrate with a PostgreSQL database</li>
                                        <li>Practice designing and implementing database entities and relationships</li>
                                    </ol>

                                <Spacer/>

                                <p><strong>Requirements</strong></p>
                                    <ul className="list-disc pl-5">
                                        <li>Java JDK 20 or above</li>
                                        <li>Maven (for project management and build)</li>
                                        <li>Spring Boot (latest stable version)</li>
                                        <li>Spring data JPA</li>
                                        <li>PostgreSQL (database)</li>
                                        <li>Lombok (optional, to reduce boilerplate code</li>
                                    </ul>

                                    <p><strong>Assignment tasks:</strong></p>
                                    <ol className="list-decimal pl-5">
                                        <li>Project setup</li>
                                            <ul className="list-disc pl-5">
                                                <li>
                                                    <p>Create a new Spring Boot project using Spring Initializr (<a href="https://start.spring.io/">https://start.spring.io/</a>). Choose Maven as the build tool and include dependencies for Spring Web, Spring Data JPA, and PostgreSQL driver.</p>
                                                </li>
                                            </ul>
                                        <li>Database configuration</li>
                                            <ul className="list-disc pl-5">
                                                <li>Install PostgreSQL and create a new database for your application.</li>
                                                <li>Configure your application to connect to the PostgreSQL database by updating <Code>application.properties</Code> with the correct database URL, username, and password.</li>

                                            </ul>
                                        <li>Model Definition</li>
                                            <ul className="list-disc pl-5">
                                                <li>
                                                    <p>Define (at least) two main entities: <Code>User</Code> and <Code>Email</Code>. Consider adding more entities if you want.</p>
                                                </li>
                                                <ul className="list-disc pl-5">
                                                    <li>The <Code>User</Code> entity should include fields like <Code>id</Code> (primary key), <Code>username</Code>, <Code>email</Code>, <Code>password</Code>.</li>
                                                    <li>The <Code>Email</Code> entity should have fields such as <Code>id</Code> (primary key), <Code>fromEmail</Code>, <Code>toEmail</Code>, <Code>subject</Code>, <Code>body</Code>, <Code>timestamp</Code>.</li>
                                                </ul>
                                                <li>
                                                    <p>Use JPA annotations to map these entities to your PostgreSQL database tables.</p>
                                                </li>
                                            </ul>
                                        <li>Repository Layer</li>
                                        <ul className="list-disc pl-5">
                                            <li>Create JPA repositories for each entity to facilitate CRUD operations.</li>
                                        </ul>
                                        <li>Service Layer</li>
                                            <ul className="list-disc pl-5">
                                                <li>Implement service classes to encapsulate the business logic for user and email management.</li>
                                            </ul>
                                        <li>Controller Layer</li>
                                            <ul className="list-disc pl-5">
                                                <li>Develop REST controllers to expose HTTP endpoints for managing users and emails.</li>
                                                <li>Endpoints could include user creation, deletion, update, fetching user details, sending emails, listing received/sent emails, and email deletion.</li>
                                            </ul>
                                        <li>Documentation</li>
                                        <ul className="list-disc pl-5">
                                            <li>Document your REST API endpoints using tools like Swagger or Spring Rest Docs</li>
                                        </ul>
                                    </ol>

                                <p className="text-lg font-semibold">Submission Guidelines</p>
                                <ul className="list-disc pl-5">
                                    <li>Ensure your code is well-structured, properly commented, and follows Java coding best practices.</li>
                                    <li>Include a <Code>README.md</Code> file with setup instructions, including how to configure and start the PostgreSQL database, build and run your Spring Boot application, and any other relevant information.</li>
                                    <li>Submit your project as a zip file or provide a link to a Git repository containing your Maven project.</li>
                                </ul>
                                <p className="text-lg font-semibold">Evaluation Criteria</p>
                                <ul className="list-disc pl-5">
                                    <li>Correctness: Application functions according to the requirements</li>
                                    <li>Code Quality: Clean code practices, including meaningful variable names, proper structuring, and comments where necessary.</li>
                                    <li>Database Integration: Effective use of Spring Data JPA with PostgreSQL</li>
                                    <li>Documentation: Clarity and completeness of documentation for using the API and setting up the project.</li>
                                </ul>

                            </div>
                        </CardBody>
                    </Card>
                </Tab>

                <Tab key="eksamen" title="Eksamen">
                    <Card>
                        <CardHeader><h2 className="text-lg font-semibold">OBJ2100 V25, Arbeidskrav</h2></CardHeader>
                        <CardBody>
                            <div className="rounded-lg">

                                <p>Innhold fra eksamen her...</p>

                            </div>
                        </CardBody>
                    </Card>
                </Tab>

            </Tabs>
        </div>

        </div>

    );
};

export default OBJ2100;