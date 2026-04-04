import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";

export const metadata = {
  title: "StyleHub | Premium Lifestyle Essentials",
  description: "High-end fashionable clothing for modern aesthetics.",
};

export default function StyleHubHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      {/* Brand story / Instagram feed will follow here later */}
    </>
  );
}
