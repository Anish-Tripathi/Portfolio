import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import AboutSkills from "./AboutSkills";
import AboutCertifications from "./AboutCertifications";
import AboutCTA from "./AboutCTA";

function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutStats />
      <AboutSkills />
      <AboutCertifications />
      <AboutCTA />
    </div>
  );
}

export default About;
