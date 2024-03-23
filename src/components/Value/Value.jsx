import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion.jsx";

const Value = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* right */}
        <div className="flexColStart v-right flexCenter">
          <span className="orangeText flexCenter">Our Beneficial Services</span>

          <span className="primaryText flexCenter">Value We Give to You</span>

          <span className="secondaryText flexCenter">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better & Hustlefree.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={true}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${!showAll && i >= 3 ? "hidden" : ""}`}
                uuid={i}
                key={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton ">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>

          {isMobile && !showAll && (
            <div className="show-more-container">
              <button className="show-more" onClick={toggleShowAll}>
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Value;


