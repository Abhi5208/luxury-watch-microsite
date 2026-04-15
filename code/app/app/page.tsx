import FrameSequence from "@/components/FrameSequence";
import HomeMotion from "@/components/HomeMotion";

export default function Home() {
  return (
    <main className="home-story">
      <HomeMotion />
      <section className="story-hero" data-reveal aria-labelledby="hero-title">
        <div className="story-hero__inner">
          <p className="story-kicker">Atelier Noir / Mechanical Study</p>
          <h1 id="hero-title">A watch revealed by restraint.</h1>
          <p>
            Precision, shadow, and controlled motion shape a product story built
            for close attention.
          </p>
        </div>
      </section>

      <FrameSequence />

      <section
        className="story-section story-section--light story-section--left story-section--tall"
        data-reveal
        aria-labelledby="craftsmanship-title"
      >
        <div className="story-section__content">
          <p className="story-kicker">Craftsmanship</p>
          <h2 id="craftsmanship-title">Craftsmanship</h2>
          <p>
            The design language is quiet, but not empty. The case profile,
            crown, dial, and glass are treated as one continuous object, tuned
            for balance in low light and close inspection.
          </p>
        </div>
      </section>

      <section
        className="story-section story-section--dark story-section--right"
        data-reveal
        aria-labelledby="materials-title"
      >
        <div className="story-section__content">
          <p className="story-kicker">Materials</p>
          <h2 id="materials-title">Metal, glass, finish.</h2>
          <p>
            The watch depends on a reduced material palette: polished metal for
            structure, glass for depth, and finishing that catches only the
            light it needs.
          </p>
          <div className="material-grid" aria-label="Material notes">
            <div>
              <span>Metal</span>
              <p>Clean geometry with sharp reflections and controlled mass.</p>
            </div>
            <div>
              <span>Glass</span>
              <p>Depth and highlight without interrupting the dial.</p>
            </div>
            <div>
              <span>Finish</span>
              <p>Dark surfaces, fine edges, and disciplined contrast.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="story-section story-section--light story-section--center story-section--compact"
        data-reveal
        aria-labelledby="movement-title"
      >
        <div className="story-section__content">
          <p className="story-kicker">Movement</p>
          <h2 id="movement-title">Engineered to be read slowly.</h2>
          <p>
            The internal architecture is not decoration. It is the product
            narrative: layers, tolerances, rhythm, and tension brought forward
            through scroll-controlled motion.
          </p>
        </div>
      </section>

      <section className="story-cta story-cta--dark" data-reveal aria-labelledby="cta-title">
        <div className="story-cta__inner">
          <p className="story-kicker">Private Preview</p>
          <h2 id="cta-title">The collection begins in silence.</h2>
          <p>Register interest for the first release window.</p>
          <a className="story-link" href="/contact">
            Request Access
          </a>
        </div>
      </section>
    </main>
  );
}
