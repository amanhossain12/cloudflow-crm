import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import PricingComparison from "../components/pricing/PricingComparison";
import PricingFAQ from "../components/pricing/PricingFAQ";
import PricingCTA from "../components/pricing/PricingCTA";
import SEO from "../components/SEO";

function Pricing() {
  return (
    <>

    <SEO
  title="Pricing"
  description="Explore flexible CloudFlow CRM pricing plans for startups, businesses, and enterprises."
  keywords="CRM Pricing, SaaS Pricing"
  url="https://cloudflow-crm.vercel.app/pricing"
/>
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}

export default Pricing;