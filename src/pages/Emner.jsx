import {BreadcrumbItem, Breadcrumbs} from "@heroui/breadcrumbs";
import React from "react";
import {Card, CardHeader, CardBody } from "@heroui/card";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@heroui/react";
// To sort on table columns:
import {useAsyncList} from "@react-stately/data";
import { Link } from "react-router-dom";

const Emner = () => {

    // Hardkodet data
    const emneData = [
        { emnekode: "DAT1000", emnenavn: "Database 1", emnebeskrivelse: "Innføring i database gjennom MySQL. Entiteter, relasjonstyper"},
        { emnekode: "INF1000", emnenavn: "Informasjonssystemer", emnebeskrivelse: "Teori om informasjonssystemer i praksis."},
        { emnekode: "PRG1000", emnenavn: "Grunnleggende programmering 1", emnebeskrivelse: "Grunnleggende programmering hvor språket som benyttes er Python. If/else-tester, while/for-løkker."},
        { emnekode: "WEB1100", emnenavn: "Webutvikling og HCI", emnebeskrivelse: "HTML, CSS og menneske-maskin-interaksjon (HCI)."},

        { emnekode: "PRO1000", emnenavn: "Praktisk prosjektarbeid", emnebeskrivelse: "Praktisk håndtering av organisering rundt systemutvikling."},
        { emnekode: "SYS1000", emnenavn: "Systemutvikling", emnebeskrivelse: "Utvikle et informasjonssystem i samband med kundemøte og \"oversette\" dette til use cases osv."},
        { emnekode: "PRG1100", emnenavn: "Grunnleggende programmering 2", emnebeskrivelse: "Utvikling av mer robuste applikasjoner ved hjelp av grafiske brukergrensesnitt og feilmeldinger og try/else."},
        { emnekode: "ORL1000", emnenavn: "Organisering og ledelse", emnebeskrivelse: "Innføring i sentrale organisasjonsmessige fenomener. Verdiskaping, makt, målstyyring, motivasjon, kommunikasjon"},

        { emnekode: "APP2000", emnenavn: "Applikasjonsutvikling for web 1/2", emnebeskrivelse: "Utvikling av webapplikasjoner, tjener- og klientside. Bør ha kompetanse om web, programmering og databaser tilsvarende Webutvikling og HCI, Grunnleggende programmering 1 og Database 1 først."},
        { emnekode: "DAT2000", emnenavn: "Database 2", emnebeskrivelse: "Avansert kurs i database ang. administrasijon og drift av RDBMS."},
        { emnekode: "OBJ2000", emnenavn: "Objektorientert programmering 1", emnebeskrivelse: "Innføring i objektorientert programmering. Grafiske brukergrensesnitt med objektorientert språk. Bygger på PRG1000 Grunnleggende programmering 1 og PRG1100 Grunnleggende programmering 2."},
        { emnekode: "ESB1000", emnenavn: "Etikk og samfunnsansvar", emnebeskrivelse: "Grunnleggende innføring i etikk, etiske problemstillinger, FNs bærekraftsmål og CSR."},

        { emnekode: "APP2000", emnenavn: "Applikasjonsutvikling for web 2/2", emnebeskrivelse: "Emnet går over to semestre, og det finaliserende semestret fokuserer på utvikling av en fungerende webapplikasjon basert på det vi har lært i første halvdel av emnet."},
        { emnekode: "OBJ2100", emnenavn: "Objektorientert programmering 2", emnebeskrivelse: "Videreutvikling av kunnskap. Strømmer, tråder og asynkron prosessering. Bygger på OBJ2000 Objektorientert programmering."},
        { emnekode: "MET1020", emnenavn: "Samfunnsvitenskapelig metode", emnebeskrivelse: "Teorio om å samle inn, bearbeidelse og tolking av data. Vitenskapsteori, problemstilling, forskningsdesign, dataanalyse."},
        { emnekode: "SIK2000", emnenavn: "Informasjonssikkerhet", emnebeskrivelse: "Lovverk og standarder for informasjonssikkerhet. Trusler mot informasjonssikkerhet i bedrifter og privat. Hvordan man kan sikre informasjon. Risiko- og sårbarhetsanalyser."},

        { emnekode: "BID3000", emnenavn: "Business Intelligence og datavarehus", emnebeskrivelse: ""},
        { emnekode: "SCE200D", emnenavn: "Sustainability Marketing and Circular Economy", emnebeskrivelse: ""},
        { emnekode: "DT3000K", emnenavn: "Digital Transformation", emnebeskrivelse: ""},
        { emnekode: "EHA3000D", emnenavn: "E-commerce", emnebeskrivelse: ""},

        {emnekode: "BOP3000", emnenavn:"Bacheloroppgave i IT og Informasjonssystemer", emnebeskrivelse: ""},
        {emnekode: "PRR3000", emnenavn:"Praksisrefleksjon", emnebeskrivelse: ""},
        {emnekode: "AI3000R", emnenavn:"Artificial Intelligence for Business Applications", emnebeskrivelse: ""}
    ];


    let list = useAsyncList({
        async load({signal}) {
            // Simulate loading delay
            await new Promise(resolve => setTimeout(resolve, 500));


            return {
                items: emneData,
            };
        },
        async sort({items, sortDescriptor}) {
            return {
                items: [...items].sort((a, b) => {
                    let first = a[sortDescriptor.column];
                    let second = b[sortDescriptor.column];
                    let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

                    if (sortDescriptor.direction === "descending") {
                        cmp *= -1;
                    }

                    return cmp;
                }),
            };
        },
    });

    // Custom cell renderer function
    const renderCell = (item, columnKey) => {
        const value = getKeyValue(item, columnKey);

        // If this is the emnekode column, render it as a link
        if (columnKey === "emnekode") {
            return (
                <Link
                    to={`/emner/${item.emnekode.toLowerCase()}`}
                    className="text-blue-600 dark:text-blue-300 hover:text-blue-800 hover:underline"
                >
                    {value}
                </Link>
            );
        }

        // For other columns, return value
        return value;
    }

    return (
        <div className="container mx-auto px-4 py-8">

            <div className="py-1">
                <Breadcrumbs key="solid" px-20>
                    <BreadcrumbItem href="/">Hjem</BreadcrumbItem>
                    <BreadcrumbItem href="/emner">Emner</BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <h1 className="text-3xl font-bold mb-6">Emner</h1>

            <div className="flex w-full flex-col">
                <Card>
                    <CardHeader>Emneoversikt</CardHeader>
                    <CardBody>


                        <Table
                            removeWrapper
                            aria-label="Example table with client side sorting"
                            className="min-h-[400px]"
                            classNames={{
                                thead: "rounded-t-xl overflow-hidden",
                                th: "first:rounded-tl-xl last:rounded-tr-xl",
                                tr: "last-of-type:last:td:first-of-type:rounded-bl-xl last-of-type:last:td:last-of-type:rounded-br-xl"
                            }}
                            sortDescriptor={list.sortDescriptor}
                            onSortChange={list.sort}
                        >
                            <TableHeader >
                                <TableColumn key="emnekode" allowsSorting>
                                    EMNEKODE
                                </TableColumn>
                                <TableColumn key="emnenavn" allowsSorting>
                                    EMNENAVN
                                </TableColumn>
                                <TableColumn key="emnebeskrivelse" allowsSorting>
                                    EMNEBESKRIVELSE
                                </TableColumn>
                            </TableHeader>
                            <TableBody
                                items={list.items}
                            >
                                {(item) => (
                                    <TableRow key={item.emnekode}>
                                        {(columnKey) => (
                                            <TableCell>
                                                {renderCell(item, columnKey)}
                                            </TableCell>
                                        )}
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Emner;
