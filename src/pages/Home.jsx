import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import SEO from "../components/SEO";

function Home() {
  return (  
    <>
     <SEO
    title="Modern AI CRM Platform"
    description="CloudFlow CRM helps businesses automate workflows, manage customers, and grow revenue using AI."
    keywords="CRM, SaaS, AI CRM, Business Automation, CloudFlow"
    url="https://cloudflow-crm.vercel.app/"
  />

  <Hero />

  <Trusted />

  <WhyChoose />

  <HowItWorks />

  <Features />

  <Stats />

  

  <Testimonials />

  <FAQ />

  <CTA />
</>
  );
}

export default Home;