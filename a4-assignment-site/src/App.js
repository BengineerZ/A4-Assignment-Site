import React, { useRef } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Footer from "./components/Footer";
import styles from './App.module.css';  // Import App.module.css


const App = () => {
  const introductionRef = useRef(null);
  const exploreRef = useRef(null);
  const visualizationRef = useRef(null);
  const conclusionRef = useRef(null);
  const futureRef = useRef(null);

  const scrollToSection = (section) => {
    let sectionRef = null;
    switch (section) {
      case "introduction":
        sectionRef = introductionRef;
        break;
      case "explore":
        sectionRef = exploreRef;
        break;
      case "visualization":
        sectionRef = visualizationRef;
        break;
      case "conclusion":
        sectionRef = conclusionRef;
        break;
      case "future":
        sectionRef = futureRef;
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
    <div className={styles.bg}>
      {/* Main container */}
      <div className={styles.content}>
        <Header />

        {/* Navigation */}
        <Navigation scrollToSection={scrollToSection} />

        {/* Content area */}
        <div >
          <Section id="introduction" title="Introduction" ref={introductionRef}>
          <p>Data visualization is often seen as a neutral means of presenting information, but the choices we make in designing charts, selecting data, and framing narratives can significantly influence interpretation. This assignment explores the fine line between persuasion and deception by crafting two opposing visualizations from the same dataset—one that supports a proposition and another that challenges it.</p>

          <h3>Dataset Declaration</h3>
          <p>For this project, I chose <strong>abortion data by U.S. state</strong> from the <strong>Guttmacher Institute</strong>, which provides insights into abortion rates, providers, and demographics across the country. Given the politically charged nature of this topic, ethical considerations in data representation are especially critical. To complement this dataset, I chose to merge this with the <strong>2020 U.S. voting results dataset</strong>, which details state-by-state election outcomes and voting trends. In addition, to help with plotting, I used the <strong>Natural Earth States and Provinces</strong> dataset, providing locations and boundaries of US states.</p>

          <p><strong>My proposition:</strong>
          <em> "Rebublican abortion policies and restrictions lead to a decrease in abortion rates."</em></p>

          <p>To examine this claim, I created two visualizations:</p>
          <ul>
              <li>One that <strong>supports</strong> the proposition, using techniques that emphasize a correlation between restrictions and declining abortion rates.</li>
              <li>One that <strong>challenges</strong> the proposition, highlighting other factors that contribute to abortion rates.</li>
          </ul>

          <p>Through this exercise, I aim to uncover how visual design, data transformations, and framing influence perception—and where we draw the line between ethical persuasion and misleading representation.</p>
          </Section>

          <Section id="explore" title="Exploratory Visual Analysis " ref={exploreRef}>
          <p>Before creating the final persuasive visualizations, I conducted an exploratory analysis to better understand patterns, trends, and potential relationships within the datasets. This step was crucial for identifying key insights, assessing data quality, and determining which variables were most relevant to my proposition.</p>
          <p>Using the <strong>abortion data by U.S. state</strong> from the Guttmacher Institute and the <strong>2020 U.S. voting results dataset</strong>, I examined correlations between abortion rates, policy restrictions, and political leanings. I visualized distributions, trends over time, and geographic variations to uncover any significant patterns that could support or challenge the proposed claim.</p>
          <p>Key questions I explored included:</p>
          <ul>
              <li>Are there regional trends in abortion access and rates?</li>
              <li>Is there an observable relationship between political alignment (e.g., red vs. blue states) and abortion rates?</li>
              <li>How does public spending correlate with abortion rate or political leaning?</li>
          </ul>

          <p>The insights gained from this exploratory analysis informed my design decisions for the final visualizations, helping me determine how to most effectively present contrasting perspectives on the proposition. Throughout this section, I also discuss relevant data transformations, and perform initial persuasion analysis.</p>

          <h3>Voting Patterns in the 2020 election</h3>
          <figure >
            <img src={require('./imgs/election_results.png')} alt="Voting Patterns in the 2020 Election" style={{ width: "100%" }}/>
            <figcaption>Voting Patterns in the 2020 U.S. Election by State</figcaption>
          </figure>

          <p>This first plot shows the voting patterns of US states in the 2020 US Election. Each state is labelled, and the color indicates the voting: Red - Trump, vs Blue - Biden. This serves as an introduction to the geographic voting patterns of US states.</p>

          <h3>Abortion Rate vs 2020 Voting</h3>
          <figure >
            <img src={require('./imgs/abortion_rate_vs_voting.png')} alt="Voting Patterns in the 2020 Election" style={{ width: "100%" }}/>
            <figcaption>Abortion Rate in 2020 vs Voting Patterns in the 2020 U.S. Election by State</figcaption>
          </figure>

          <p>This plot is a bar chart which highlights the abortion rate per 1000 women (15-44) for each state. In addition, each bar is colored with the voting patterns in the 2020 election. From this plot, we can see the discrepancy between Republican and Democratic states in relation to abortion statistics. That is, Democratic states generally have higher abortion rates, while Republican states generally have lower abortion rates.</p>
    
          <h4>Persuasion Analysis</h4>
          <p>We can also begin to conduct a partial persuasion analysis for these plots. For example, consider the hypothesis:</p>
          
          <strong>Example Proposition:</strong>
          <p><strong>"Republican states have lower abortion rates due to restrictive policies."</strong></p>
          
          <strong>Key Design Decisions:</strong>
          <ul>
              <li><strong>Scaling of the Y-axis:</strong> <span class={styles.earnest}>Score: 1 (Earnest)</span>
                  <ul>
                      <li>Choosing an appropriate scale ensures the differences in abortion rates are not exaggerated or minimized.</li>
                  </ul>
              </li>
              
              <li><strong>Bar color based on vote:</strong> <span class={styles.deceptive}>Score: -0.5 (Deceptive)</span>
                  <ul>
                      <li>On the surface, this is a completely earnest decision and is simply a visualization of the data.</li>
                      <li>However, because humans are drawn to regions of color first, this can have the effect of visually overemphasizing Democratic states with high abortion rates and visually reducing Republican states with low abortion rates.</li>
                  </ul>
              </li>
              
              <li><strong>Sorting states by value:</strong> <span class={styles.earnest}>Score: 1 (Earnest)</span>
                  <ul>
                      <li>Sorting the chart by value helps the reader visually analyze trends.</li>
                  </ul>
              </li>
              
              <li><strong>Omission of Confounding Variables:</strong> <span class={styles.deceptive}>Score: -1 (Deceptive)</span>
                  <ul>
                      <li>If factors like socioeconomic status or healthcare access are not included, the visualization may overstate the impact of political alignment, especially in relation to the broad scope of the proposition made.</li>
                  </ul>
              </li>
          </ul>



          <h3>Available Abortion Care in US States</h3>

          <p>In this section of exploratory data analysis, we look at changing access to abortion care across US states and voting patterns.</p>

          <figure >
            <img src={require('./imgs/available_care.png')} alt="Voting Patterns in the 2020 Election" style={{ width: "100%" }}/>
            <figcaption>% of women living in a county without a clinic by state - election results are highlighted by color.</figcaption>
          </figure>

          <p>This plot shows a bar chart, similar to the previous plot, indicating the percentage of women aged 15-44 living in a state county without an abortion clinic in 2020. As before, we color each bar by political leaning according to the 2020 election.</p>

          <p>Here we see the clear general trend that in republican states, more women don’t have access to abortion care (no access to a clinic). Notably, this plot shares much of the same design decisions as the previous plot, and a similar persuasion analysis can be applied.
          </p>


          <figure >
            <img src={require('./imgs/percentage_change.png')} alt="Voting Patterns in the 2020 Election" style={{ width: "100%" }}/>
            <figcaption>% change in abortion clinics by state, 2017-2020</figcaption>
          </figure>

          <p>This plot shows the percentage change in abortion clinics by state from 2017 to 2020. The color of each bar indicates the political leaning of the state. This plot helps to visualize the changes in abortion clinic availability over time and how they relate to political alignment.</p>

          <p> In particular, there appears to be little correlation between the change in abortion clinics and political leaning of the state. This is surprising given the previous plots, and warrants a persuasion analysis</p>

          <strong>Example Proposition:</strong>
          <p><strong>"The Democrats are closing down just as many abortion clinics as republicans"</strong></p>
          <strong>Key Design Decisions:</strong>
          <ul>
              <li><strong>Y-axis Normalisation</strong> <span class={styles.deceptive}>Score: -1.5 (Deceptive)</span>
                  <ul>
                      <li>Looking closely, the plot is of the '% change in the number of abortion clinics'. This means that it hides the absolute number of abortion clinics opened/closed during this time period.</li>
                      <li>In addition, this has no bearing on the size of the state or the population density surrounding those abortion clinics. </li>
                  </ul>
              </li>
          </ul>



          <h3>Abortion Expenditure</h3>
          <figure >
            <img src={require('./imgs/rates_expenditure.png')} alt="Voting Patterns in the 2020 Election" style={{ width: "100%" }}/>
            <figcaption>State public abortion funding per capita vs abortion rates (2015). The size of each bubble indicates percentage out-of-state travel for abortion. </figcaption>
          </figure>

          <p>This plot shows the state public abortion funding per capita vs abortion rates in 2015. The size of each bubble indicates the percentage of out-of-state travel for abortion. This plot helps to visualize the relationship between state funding, abortion rates, and the need for out-of-state travel for abortion services.</p>

          <p>From this plot, we can see that states with higher abortion rates tend to higher public funding per capita for abortion services, although the correlation is poor. A more clear conclusion from this plot is that for states which have low public expenditure, there is significant out of state travel. That is to say, individuals looking for abortion services generally leave states with low public expenditure for care.</p>

            <h4>Data Transformation</h4>
            <p>This plot required data transformation. In particular, this involved combining the expenditure data with population data of each state to explicitly normalize the public expenditure.</p>

          <strong>Example Proposition:</strong>
          <p><strong>"The Democrats fund abortion care"</strong></p>
          <strong>Key Design Decisions:</strong>
          <ul>
              <li><strong>X-axis Normalisation</strong> <span class={styles.earnest}>Score: 1.5 (Earnest)</span>
                  <ul>
                      <li>By explicitly normalizing the x-axis by the state population, and plotting the spending per capita, we reduce the visual impact of large states on distracting from any useful correlations in the data</li>
                  </ul>
              </li>
          </ul>
            
          </Section>

          <Section id="visualization" title="Visualization" ref={visualizationRef}>

            
            
            <p>In this section, I design two visualizations that take opposing perspectives on the proposition: "Republican abortion policies and restrictions lead to a decrease in abortion rates." One visualization aims to persuade the reader that this proposition is true, while the other seeks to challenge it.</p>

            <h1>Supporting the Proposition</h1>

            <figure >
              <img src={require('./imgs/vis_pos2.png')} alt="Voting Patterns in the 2020 Election" style={{ width: "100%" }}/>
              <figcaption> No. of abortions per 1,000 women aged 15–44, by state of occurrence, 2020</figcaption>
            </figure>


            <p>This plot illustrates the number of abortions per 1000 women aged 15-44 by state of occurrence in 2020. The color of each state on the map indicates its political leaning, while the color intensity represents the abortion statistics. The plot aims to show the relationship between a state's political affiliation and its abortion rates. Notably, there is a general trend that Republican states have lower abortion rates compared to Democratic states, supporting the proposition that Republican abortion policies and restrictions lead to a decrease in abortion rates.</p>

            <h4>Persuasion Analysis</h4>

            <ul>
    <li><strong>Use of Color to Indicate Political Affiliation:</strong> <span class={styles.deceptive}>Score: -0.5 (Deceptive)</span>
        <ul>
            <li>The visualization uses red and blue to correspond with Republican and Democratic states, reinforcing a partisan interpretation of abortion rates.</li>
            <li>While this is a common approach in political data visualization, it subtly primes the viewer to attribute abortion rate differences directly to political affiliation, potentially ignoring other influencing factors.</li>
            <li>A more neutral color scheme could reduce potential bias and allow the data to stand on its own, although this goes against the purpose of the plot.</li>
        </ul>
    </li>

    <li><strong>Highlighting Extreme Cases (Annotations on Select States):</strong> <span class={styles.deceptive}>Score: -1 (Deceptive)</span>
        <ul>
            <li>The visualization selectively annotates states with the highest and lowest abortion rates, reinforcing a stark contrast.</li>
            <li>The chosen states (e.g., Missouri with 0.1 vs District of Columbia 48.9) create an exaggerated perception that Democratic states have exceptionally high abortion rates while Republican states have nearly eliminated abortions.</li>
            <li>This choice omits middle-ground cases, making the argument appear stronger than it may be in reality. A more balanced approach would include a broader range of states to provide a full picture of the trend.</li>
            <li>However, these markers still use real data, which prevents the deception score from being higher.</li>
        </ul>
    </li>

    <li><strong>Implication of Causation Between Policy and Abortion Rates:</strong> <span class={styles.deceptive}>Score: -1.5 (Deceptive)</span>
        <ul>
            <li>By correlating abortion rates directly with political alignment, the figure implies that Republican policies cause lower abortion rates.</li>
            <li>However, it does not account for other key factors such as population density, access to contraception, socioeconomic conditions, and out-of-state abortion travel.</li>
            <li>States with low abortion rates may have more restrictive laws, but this does not necessarily mean there are fewer abortions— <strong>some individuals may seek abortions elsewhere or turn to alternative methods (see the next plot!)</strong> .</li>
            <li>A stronger argument would require additional data, such as birth rates, unintended pregnancy rates, or out-of-state abortion statistics.</li>
        </ul>
    </li>

    <li><strong>Scaling and Placement of Annotations:</strong> <span class={styles.deceptive}>Score: -0.5 (Somewhat Deceptive)</span>
        <ul>
            <li>The numbers (e.g., "0.1" and "48.9") are emphasized through large markers, visually exaggerating the difference between states.</li>
            <li>While the data itself may be accurate, the presentation influences perception by making Democratic states appear dramatically high and Republican states dramatically low.</li>
            <li>A more objective representation could use a continuous gradient or a bar chart alongside the map to contextualize differences.</li>
        </ul>
    </li>

    <li><strong>Lack of Context on Abortion Access and Reporting Differences:</strong> <span class={styles.deceptive}>Score: -1 (Deceptive)</span>
        <ul>
            <li>The visualization does not acknowledge differences in abortion reporting and access.</li>
            <li>For example, states with highly restrictive abortion laws may underreport abortions, as individuals travel out of state or self-manage their abortions.</li>
            <li>Without this context, the visualization implies that fewer abortions are happening rather than being displaced elsewhere.</li>
        </ul>
    </li>
</ul>

<h3>Final Reflection</h3>
<p>
    This visualization is persuasive but somewhat misleading in how it presents the relationship between abortion rates and political affiliation. While it effectively highlights differences in abortion rates across states, it does so in a way that overemphasizes extremes and suggests a direct causal link between Republican policies and reduced abortion rates without accounting for other key factors.
</p>
<p>To improve the objectivity of this visualization, the following changes could be made:</p>
<ul>
    <li>Use a neutral color scheme instead of red/blue to reduce partisan framing - perhaps partisan factors could be included in a separate plot.</li>
    <li>Include a broader range of states in annotations instead of focusing on extreme cases.</li>
    <li>Provide additional context on factors influencing abortion rates, such as out-of-state travel, clinic availability, and socioeconomic variables.</li>
</ul>
<p>
    While the visualization successfully reinforces a political argument, it does so by omitting crucial context that would lead to a more complete understanding of the data.
</p>



            <h1>Against the Proposition</h1>

            <figure >
              <img src={require('./imgs/vis_neg.png')} alt="Voting Patterns in the 2020 Election" style={{ width: "100%" }}/>
              <figcaption> Percentage of Residents Obtaining Abortions Who Traveled Out of State for Care, 2020</figcaption>
            </figure>

            <p>This plot shows the percentage of residents obtaining abortions who traveled out of state for care in 2020. The color of each state on the map indicates the political leaning of the state. 
              The color intensity of the plot indicates the percentage of residents who traveled out of state for care.</p>


             <p>This plot helps to visualize geographically relationship between political learning, abortion rates, and the need for out-of-state travel for abortion services. 
              We see that the states with the highest percentage of residents traveling out of state for care are generally Republican states, those with strict abortion laws and policies. 
              This illustrates the lack of abortion care in these states, leading to residents seeking care elsewhere.
              In relation to the original proposition, this plot goes against the idea that Republican abortion policies and restrictions lead to a decrease in abortion rates by highlighting that in such state, residents simply travel out of state for care, which may not be captured in the abortion rate data alone.
              </p>

            <h4>Persuasion Analysis</h4>
            <p>Let's conduct a persuasion analysis for this plot in relation to our original hypothesis</p>

            <ul>
    <li><strong>Use of Color to Indicate Political Alignment:</strong> <span class={styles.deceptive}>Score: -0.5 (Deceptive)</span>
        <ul>
            <li>The use of red and blue, commonly associated with Republican and Democratic states, strongly ties abortion travel rates to political alignment.</li>
            <li>While political leadership influences abortion policies, the visualization visually implies a direct causation that may not account for other critical factors like healthcare infrastructure or socio-economic conditions.</li>
            <li>An alternative approach could have been using a neutral gradient, but the chosen color scheme makes the political contrast visually striking.</li>
        </ul>
    </li>
    
    <li><strong>Emphasis on Higher Travel Rates via Color Gradient:</strong> <span class={styles.earnest}>Score: 1 (Earnest)</span>
        <ul>
            <li>The gradient effectively highlights disparities in abortion access, making it easy to see which states experience higher outbound travel for abortion services.</li>
            <li>This directs attention toward areas where restrictions or lack of clinics could be a factor.</li>
            <li>One potential improvement could be adding a numerical scale for travel rates to provide more precise context rather than relying purely on color.</li>
        </ul>
    </li>

    <li><strong>Use of Arrows to Indicate Travel Flow:</strong> <span class={styles.earnest}>Score: 0.5 (Earnest)</span>
        <ul>
            <li>The arrows clearly illustrate the movement of residents seeking abortions outside their home states.</li>
            <li>This avoids confusion and provides a strong visual cue on where people are going for care.</li>
            <li>Without the arrows, viewers would have to infer travel patterns manually, making interpretation more difficult.</li>
            <li>A possible enhancement would be differentiating arrow thickness based on the volume of travel to add another layer of insight.</li>
        </ul>
    </li>

    <li><strong>Lack of Population Normalization:</strong> <span class={styles.deceptive}>Score: -1 (Deceptive)</span>
        <ul>
            <li>The visualization does not normalize the data by state population, making small states like Wyoming appear disproportionately significant in terms of travel rates.</li>
            <li>A state with a smaller population but a high percentage of out-of-state abortions could seem equivalent in magnitude to a larger state, leading to potential misinterpretations.</li>
            <li>An alternative approach could be adjusting color intensity based on raw travel numbers rather than percentages, though this might reduce clarity in state-by-state comparisons.</li>
        </ul>
    </li>

    <li><strong>Omission of Confounding Variables (e.g., Clinic Availability, Legal Restrictions, Economic Factors):</strong> <span class={styles.deceptive}>Score: -1.5 (Deceptive)</span>
        <ul>
            <li>The visualization does not account for key factors like the number of abortion clinics per state, legal barriers, or income disparities, all of which significantly impact out-of-state abortion travel rates.</li>
            <li>This omission could lead viewers to mistakenly attribute the observed patterns solely to political affiliation rather than broader structural factors.</li>
            <li>One possible improvement would be adding a side panel or overlay with context on abortion restrictions and clinic density to provide a fuller picture.</li>
        </ul>
    </li>
</ul>

<h3>Final Reflection</h3>
<p>Creating this visualization required balancing clarity, persuasion, and ethical responsibility. The most straightforward decisions were those related to visual clarity, such as using arrows for travel flow. However, challenges arose when making choices about color schemes and data normalization, as these had the potential to subtly (or overtly) shape the viewer’s interpretation.</p>

<p>Ethical visualization involves transparently representing data while avoiding misleading implications. A key distinction between "acceptable persuasion" and "misleading visualization" lies in whether the design choices obscure or distort critical context. In this case, while the visualization effectively highlights disparities in abortion access, it risks oversimplification by heavily emphasizing political partisanship without acknowledging other factors.</p>



          </Section>

          <Section id="conclusion" title="Data Transformation and Implementation Details" ref={conclusionRef}>
          <h2>Data Merging and Integration</h2>
        <p>The abortion dataset is merged with election data:</p>
        <pre><code class="language-python">df.merge(election_data[['state', 'trump_win']])</code></pre>
        <p>This integration allows for visualizing the correlation between state political leanings and abortion-related statistics.</p>

        <h2>Data Cleaning and Type Conversion</h2>
        <p>Missing values are handled:</p>
        <pre><code class="language-python">na_values=["unavailable", "n/a", "N/A", "NA", "nr", "\leq 1000"]</code></pre>
        <p>Numerical conversion is enforced:</p>
        <pre><code class="language-python">pd.to_numeric(..., errors='coerce')</code></pre>
        <p>Ensuring proper sorting and scaling.</p>

        <h2>Geospatial Data Processing</h2>
        <p>A shapefile is read using GeoPandas:</p>
        <pre><code class="language-python">gpd.read_file(shapefile_path)</code></pre>
        <p>Data is filtered to include only the United States:</p>
        <pre><code class="language-python">gdf[gdf['admin'] == 'United States of America']</code></pre>
        <p>A mapping between state abbreviations and full state names is created:</p>
        <pre><code class="language-python">state_abbr_to_state = election_data.set_index('state_abr')['state'].to_dict()</code></pre>

        <h2>Colormap-Based Data Normalization</h2>
        <p>Normalization of abortion rates and travel percentages is done:</p>
        <pre><code class="language-python">plt.Normalize(vmin=..., vmax=...)</code></pre>
        <p>Custom Republican (red) and Democrat (blue) colormaps are created:</p>
        <pre><code class="language-python">LinearSegmentedColormap.from_list()</code></pre>
        <p>Color values for states are dynamically assigned based on abortion rates or travel percentages.</p>

        <h2>Text and Label Adjustments</h2>
        <p>Geometric centroids are used for state label positioning:</p>
        <pre><code class="language-python">row['geometry'].centroid.x, row['geometry'].centroid.y</code></pre>
        <p>Overlapping text labels are identified and repositioned:</p>
        <pre><code class="language-python">adjust_text()</code></pre>
        <p>Leader lines are drawn between labels and states if repositioning occurs.</p>





          </Section>

          <Section id="future" title="Future Work: Interactive Visualization" ref={futureRef}>
          <p>While static visualizations can be highly effective in persuasion, interactive elements add a layer of engagement that allows viewers to explore data dynamically, revealing trends and biases in a more transparent manner. In the case of abortion rates and policy analysis, interactivity could serve both persuasive and ethical purposes—offering nuanced insights while also mitigating misleading interpretations.</p>
    
    <h3>1. Implementing an Interactive Time Slider</h3>
    <div class="highlight">
        <strong>Why?</strong>
        <p>Currently, the visualization presents abortion rates as a static snapshot from 2020. However, policies and trends shift over time. An interactive <strong>time slider</strong> could allow users to explore how abortion rates have changed over multiple years in relation to political shifts, highlighting policy impact over time rather than implying a direct, immediate effect.</p>
    </div>
    
    <h3>2. Clickable State Comparisons</h3>
    <div class="highlight">
        <strong>Why?</strong>
        <p>Static maps generalize data across states, but policy effects differ widely depending on geography, population, and local healthcare infrastructure. An interactive <strong>state comparison feature</strong> would allow users to select two states and compare their abortion rates, clinic access, and travel rates in a <strong>side-by-side chart.</strong></p>
    </div>
    
    <h3>3. Filter by Policy Type</h3>
    <div class="highlight">
        <strong>Why?</strong>
        <p>Not all Republican-led states have identical policies—some have strict bans, while others impose moderate restrictions. Adding an interactive <strong>policy filter</strong> would allow users to see how different levels of restriction correlate with abortion rates.</p>
    </div>
    
    <h2>Why Interactivity Matters for Persuasion</h2>
    <ul>
        <li><strong>Engagement:</strong> Interactive tools make users actively engage with data, which strengthens message retention.</li>
        <li><strong>Selective Emphasis:</strong> Users are guided toward specific comparisons or insights that reinforce the visualization’s argument.</li>
        <li><strong>Subtle Bias Control:</strong> Designers can control the default view, subtly guiding initial impressions before users explore deeper.</li>
        <li><strong>Transparency (or Deception):</strong> Interactivity allows either a full picture of data (making it more ethical) or strategic omissions (making it more persuasive or deceptive).</li>
    </ul>
    
    <p>Interactivity introduces both <strong>ethical responsibility and persuasive power.</strong> If used responsibly, it helps prevent misleading interpretations by allowing users to explore beyond a single narrative. However, it can also be manipulated to reinforce bias—such as setting a default view that disproportionately highlights certain trends.</p>
    
          </Section>

        </div>


        <Footer />
      </div>
    </div>
  );
};

export default App;
