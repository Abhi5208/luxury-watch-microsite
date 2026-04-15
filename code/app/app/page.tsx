import FrameSequence from "@/components/FrameSequence";

export default function Home() {
  return (
    <main>
      <section className="home-section home-section--hero" aria-labelledby="hero-title">
        <div className="home-section__content">
          <h1 id="hero-title">Precision in Shadow</h1>
          <p>A luxury watch microsite built around detail, motion, and restraint.</p>
        </div>
      </section>

      <FrameSequence />

      <section className="home-section" aria-labelledby="craftsmanship-title">
        <div className="home-section__content">
          <h2 id="craftsmanship-title">Craftsmanship</h2>
          <p>Every surface is shaped for balance, reflection, and control.</p>
          <p>The case, dial, and profile work together with quiet precision.</p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="materials-title">
        <div className="home-section__content">
          <h2 id="materials-title">Materials</h2>
          <p>Dark polished finishes meet crisp highlights and clean contrast.</p>
          <p>Metal, glass, and shadow carry the product without distraction.</p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="movement-title">
        <div className="home-section__content">
          <h2 id="movement-title">Movement</h2>
          <p>The internal mechanism is presented as the core of the experience.</p>
          <p>Scroll-driven motion gives the sequence a precise, deliberate pace.</p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="cta-title">
        <div className="home-section__content">
          <h2 id="cta-title">Experience the Collection</h2>
          <p>A focused product story for a premium watch launch.</p>
          <a className="home-section__link" href="#hero-title">
            Explore
          </a>
        </div>
      </section>
    </main>
  );
}
