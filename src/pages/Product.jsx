import ProductHero from "../components/product/ProductHero";
import ProductFeatures from "../components/product/ProductFeatures";
import ProductShowcase from "../components/product/ProductShowcase";
import Integrations from "../components/product/Integrations";
import ProductCTA from "../components/product/ProductCTA";
import SEO from "../components/SEO";

function Product() {
  return (
    <>
    <SEO
  title="Product"
  description="Discover CloudFlow's AI-powered CRM features, workflow automation, analytics, and integrations."
  keywords="CRM Features, Workflow Automation, AI CRM"
  url="https://cloudflow-crm.vercel.app/product"
/>
      <ProductHero />
      <ProductFeatures />
      <ProductShowcase />
      <Integrations />
      <ProductCTA />
    </>
  );
}

export default Product;