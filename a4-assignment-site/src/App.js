import React, { useRef } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Footer from "./components/Footer";
import styles from './App.module.css';  // Import App.module.css


const App = () => {
  const introductionRef = useRef(null);
  const dataRef = useRef(null);
  const visualizationRef = useRef(null);
  const conclusionRef = useRef(null);

  const scrollToSection = (section) => {
    let sectionRef = null;
    switch (section) {
      case "introduction":
        sectionRef = introductionRef;
        break;
      case "data":
        sectionRef = dataRef;
        break;
      case "visualization":
        sectionRef = visualizationRef;
        break;
      case "conclusion":
        sectionRef = conclusionRef;
        break;
      default:
        break;
    }

    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      {/* Main container */}
      <div className="">
        <Header />

        {/* Navigation */}
        <Navigation scrollToSection={scrollToSection} />

        {/* Content area */}
        <div >
          <Section id="introduction" title="Introduction" ref={introductionRef}>
            Persuasive data visualization plays a crucial role in telling a compelling story with numbers. In this post, we'll explore how to effectively communicate insights through visuals and data-driven narratives.
            Persuasive data visualization plays a crucial role in telling a compelling story with numbers. In this post, we'll explore how to effectively communicate insights through visuals and data-driven narratives.
            Persuasive data visualization plays a crucial role in telling a compelling story with numbers. In this post, we'll explore how to effectively communicate insights through visuals and data-driven narratives.
            Persuasive data visualization plays a crucial role in telling a compelling story with numbers. In this post, we'll explore how to effectively communicate insights through visuals and data-driven narratives.
            Persuasive data visualization plays a crucial role in telling a compelling story with numbers. In this post, we'll explore how to effectively communicate insights through visuals and data-driven narratives.
            Persuasive data visualization plays a crucial role in telling a compelling story with numbers. In this post, we'll explore how to effectively communicate insights through visuals and data-driven narratives.
            Persuasive data visualization plays a crucial role in telling a compelling story with numbers. In this post, we'll explore how to effectively communicate insights through visuals and data-driven narratives.
            Persuasive data visualization plays a crucial role in telling a compelling story with numbers. In this post, we'll explore how to effectively communicate insights through visuals and data-driven narratives.

          </Section>

          <Section id="data" title="Data" ref={dataRef}>
            The dataset used in this analysis contains information about various metrics that influence decision-making. The data has been carefully selected to highlight key trends that can be visually represented for maximum impact.
            The dataset used in this analysis contains information about various metrics that influence decision-making. The data has been carefully selected to highlight key trends that can be visually represented for maximum impact.
            The dataset used in this analysis contains information about various metrics that influence decision-making. The data has been carefully selected to highlight key trends that can be visually represented for maximum impact.
            The dataset used in this analysis contains information about various metrics that influence decision-making. The data has been carefully selected to highlight key trends that can be visually represented for maximum impact.
            The dataset used in this analysis contains information about various metrics that influence decision-making. The data has been carefully selected to highlight key trends that can be visually represented for maximum impact.

          </Section>

          <Section id="visualization" title="Visualization" ref={visualizationRef}>
            <div className="relative pb-[56.25%] mb-8">
              abcd
            </div>
            Here is the visualization of the dataset. It provides an interactive and intuitive way to understand complex data. Click and hover over the chart to explore different trends.

            Here is the visualization of the dataset. It provides an interactive and intuitive way to understand complex data. Click and hover over the chart to explore different trends.
            Here is the visualization of the dataset. It provides an interactive and intuitive way to understand complex data. Click and hover over the chart to explore different trends.
            Here is the visualization of the dataset. It provides an interactive and intuitive way to understand complex data. Click and hover over the chart to explore different trends.
            Here is the visualization of the dataset. It provides an interactive and intuitive way to understand complex data. Click and hover over the chart to explore different trends.
            Here is the visualization of the dataset. It provides an interactive and intuitive way to understand complex data. Click and hover over the chart to explore different trends.

            Here is the visualization of the dataset. It provides an interactive and intuitive way to understand complex data. Click and hover over the chart to explore different trends.
          </Section>

          <Section id="conclusion" title="Conclusion" ref={conclusionRef}>
            Data visualization is an essential tool for presenting complex information in a digestible format. By using the right visuals, we can guide audiences to insights and better decision-making. Always remember: a well-crafted visualization speaks louder than raw data.
          </Section>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
