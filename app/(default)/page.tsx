export const metadata = {
  title: "Home - Trackgenai",
  description: "Page description",
};

import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Features02 />
      {/* <Features03 /> */}
      {/* <TestimonialsCarousel /> */}
      {/* <Features04 /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
