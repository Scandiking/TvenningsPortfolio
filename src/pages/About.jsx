import React from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";

function About() {
    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
                    <BreadcrumbItem href="/about">Om meg</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <div className="bg-content1 rounded-lg shadow-md p-6"> {/* ENDRET: bg-white dark:bg-gray-800 → bg-content1 */}
                <h1 className="text-3xl font-bold text-foreground mb-4">Om meg</h1> {/* ENDRET: text-gray-800 dark:text-gray-500 → text-foreground */}
                <p className="text-default-500 mb-4"> {/* ENDRET: text-gray-600 dark:text-gray-500 → text-default-500 */}
                    Hei! Jeg er en 31 år gammel tech-entusiast som har brukt personlige datamaskiner siden jeg var 4 år og fikk lov av pappa å spille Moto Racer (1997) på vår Compaq Presario 5600.
                </p>
                <p className="text-default-500 mb-4"> {/* ENDRET: text-gray-600 dark:text-gray-500 → text-default-500 */}
                    Nå noen år senere har jeg sett det enorme potensialet det ligger i datamaskiner og jeg har sett frykt for datamaskiner hos den jevne person snu om til å bli ansett som et nyttig verktøy, og jeg vil gjerne bli med på å lage de nyttige verktøyene.
                </p>
                <h2 className="text-2xl font-bold text-foreground mt-6 mb-3">Mine ferdigheter</h2> {/* ENDRET: text-gray-800 → text-foreground */}
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full">React</span> {/* ENDRET: bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-500 → bg-primary-100 text-primary-800 */}
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full">JavaScript</span> {/* ENDRET: bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-500 → bg-primary-100 text-primary-800 */}
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full">Tailwind CSS</span> {/* ENDRET: bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-500 → bg-primary-100 text-primary-800 */}
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full">HTML/CSS</span> {/* ENDRET: bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-500 → bg-primary-100 text-primary-800 */}
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full">Responsive Design</span> {/* ENDRET: bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-500 → bg-primary-100 text-primary-800 */}
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full">UI/UX</span> {/* ENDRET: bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-500 → bg-primary-100 text-primary-800 */}
                </div>
            </div>
        </div>
    );
}

export default About;
