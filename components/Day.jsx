import React, { useState } from 'react';
import Accordion from './Accordion';

const Day = () => {
  const [expanded, setExpanded] = useState(false);

  

  const accordionIds = [
    // Add your FAQ data here
   {
      title:"Dzień 1",
      description: [
        "Historia tatuażu",
        "Zakładanie własnego studia (sanepid, ubezpieczenie, wymogi, sprzęt, marketing)",
        "Zasady BHP",
        "Dezynfekcja i sterylizacja",
        "Omówienie sprzętu i narzędzi (maszynki, igły, tusze, zasilacze, leżanki)",
        "Przygotowanie stanowiska pracy",
        "Przygotowanie sprzętu (zasilacz, okablowanie, maszynka)",
        "Informacje dla klientów przed/ po zabiegu",
        "Praca z klientem",
        "Przeciwwskazania do tatuażu.",
        "Choroby skóry"
      ],
      theory: [
        "Podstawy rysunku (linearny, światłocieniowy)",
        "Narzędzia kreślarskie",
        "Geometria i kropkowanie w rysunku",
        "Techniki ołówkowe",
        "Rysunek na kalce",
        "Kaligrafia i cyfrowe czcionki"
      ],
      practice: [
        "Ćwiczenia z rysowania",
        "Rysunek linearny (old school, newschool)",
        "Rysunek realistyczny",
        "Przygotowanie skóry do zabiegu",

      ]
   },
   {
    title:"Dzień 2",
    description: null,
    theory: [
        "Rodzaje współcześnie stosowanych technik tatuatorskich",
        "Opracowanie wzoru w odpowiedniej stylistyce (realizm, old school, newschool)",
        "Omówienie anatomi i sposobów lokalizacji wzorów",
        "Przygotowanie skóry do zabiegu",
        "Transfer wzoru (środki i techniki)",
        "Tatuaż krok po kroku, czyli omówienie poszczególnych etapów tatuowania"
      ],
      practice: [
        "Ćwiczenia linearne. Napisy i małe formy wykonywane na sztucznej skórze",
        "Omówienie rezultatów + korekta",
      ]
 },
 {
    title:"Dzień 3",
    description: null,
    theory: null,
      practice: [
        "Projektowanie dużych wzorów- format A4, w różnych stylistykach",
        "Wykonanie projektu stylistyki realizm/grafika z elementem kolorowym (prace realizowane na sztucznej skórze)",
        "Omówienie rezultatów + korekta"
      ]
 },
 {
    title:"Dzień 4",
    description: null,
    theory: null,
    practice: [
        "Projektowanie wzorów w różnych stylistykach z uwzględnieniem kolorów",
        "Wykonanie projektu na silikonowym odlewie dłoni (ćwiczenie na modelu trójwymiarowym)",
        "Wykonanie zaprojektowanego wzoru na żywym modelu.",
        "Omówienie rezultatów + korekta",
    ]
 }
  ];

  return (
    <div className='dayAccordion'>
      
      <div className="faq-items">
        {accordionIds.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
            description2={item.theory}
            practice={item.practice}
          />
        ))}
      </div>
    </div>
  );
};

export default Day;