import Hero from "../components/Hero/Hero";
import LeistungenPreview from "../components/LeistungenPreview/LeistungenPreview";
import WhyUs from "../components/WhyUs/WhyUs";
import Team from "../components/Team/Team";
import KontaktPreview from "../components/KontaktPreview/KontaktPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <LeistungenPreview />
      <WhyUs />
      <Team />
      <KontaktPreview />
    </main>
  );
}
