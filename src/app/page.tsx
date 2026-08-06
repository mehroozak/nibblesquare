import type { Metadata } from "next";

import { CtaBanner } from "@/components/common/CtaBanner";
import { FeaturedProductCallout } from "@/components/home/FeaturedProductCallout";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";

export const metadata: Metadata = {
  title: "Nibble Square — Envision. Engineer. Excel.",
  description:
    "Nibble Square is a product engineering studio building custom software, web and mobile apps, cloud infrastructure and applied AI — and the team behind Passlay, our event ticketing platform.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <FeaturedProductCallout />
      <ServicesTeaser />
      <TestimonialsPreview />
      <CtaBanner />
    </>
  );
}
