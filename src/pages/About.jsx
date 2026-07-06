import React from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import {useNavigate} from "react-router-dom";

function About() {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem onPress={() => navigate('/')}>Hjem</BreadcrumbItem>
                    <BreadcrumbItem onPress={() => navigate('/about')}>Om meg</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className="bg-content1 rounded-xl shadow-sm p-6">
                <h1 className="text-3xl font-medium text-foreground mb-4">Om meg</h1>
                <p className="font-body text-default-500 mb-4">
                    Hei! Jeg er en 31 år gammel tech-entusiast som har brukt personlige datamaskiner siden jeg var 4 år og fikk lov av pappa å spille Moto Racer (1997) på vår Compaq Presario 5600.
                </p>
                <p className="font-body text-default-500 mb-4">
                    Nå noen år senere har jeg sett det enorme potensialet det ligger i datamaskiner og jeg har sett frykt for datamaskiner hos den jevne person snu om til å bli ansett som et nyttig verktøy, og jeg vil gjerne bli med på å lage de nyttige verktøyene.
                </p>
                <h2 className="text-2xl font-medium text-foreground mt-6 mb-3">Mine ferdigheter</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 rounded-full font-body text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 rounded-full font-body text-sm font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 rounded-full font-body text-sm font-medium">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 rounded-full font-body text-sm font-medium">HTML/CSS</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 rounded-full font-body text-sm font-medium">Responsive Design</span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200 rounded-full font-body text-sm font-medium">UI/UX</span>
                </div>
            </div>
        </div>
    );
}

export default About;
