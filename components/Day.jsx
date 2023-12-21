import React, { useState } from 'react';
import Accordion from './Accordion';

const Day = () => {
  const [expanded, setExpanded] = useState(false);

  const accordionIds = [
    // Add your FAQ data here
   {
      title:"Dzień 1",
      description:"Read Jason's Blog by going to this url - https://medium.com/@akbar123jason/creating-animated-faq-accordion-with-framer-motion-in-react-568bf100670e "
   },
   {
    title:"Dzień 2",
    description:"Read Jason's Blog by going to this url - https://medium.com/@akbar123jason/creating-animated-faq-accordion-with-framer-motion-in-react-568bf100670e "
 },
 {
    title:"Dzień 3",
    description:"Read Jason's Blog by going to this url - https://medium.com/@akbar123jason/creating-animated-faq-accordion-with-framer-motion-in-react-568bf100670e "
 },
 {
    title:"Dzień 4",
    description:"Read Jason's Blog by going to this url - https://medium.com/@akbar123jason/creating-animated-faq-accordion-with-framer-motion-in-react-568bf100670e "
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
          />
        ))}
      </div>
    </div>
  );
};

export default Day;