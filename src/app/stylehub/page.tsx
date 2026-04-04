import Hero from "./components/Hero";
import Featured from "./components/Featured";
import ProductsGrid from "./components/ProductsGrid";

export const metadata = {
  title: "StyleHub | Premium Lifestyle Essentials",
  description: "High-end fashionable clothing for modern aesthetics.",
};

export default function StyleHubHome() {
  return (
    <>
      <Hero />
      <ProductsGrid />
      <Featured />
    </>
  );
}
