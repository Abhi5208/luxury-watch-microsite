export default function AboutPage() {
  return (
    <main className="content-page">
      <section className="content-section content-section--hero" aria-labelledby="about-title">
        <div className="content-section__inner">
          <h1 id="about-title">Built for Quiet Precision</h1>
          <p>
            Atelier Noir is a study in restrained luxury, mechanical clarity,
            and the confidence of a watch that does not need to announce itself.
          </p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="philosophy-title">
        <div className="content-section__inner">
          <h2 id="philosophy-title">Brand Philosophy</h2>
          <p>
            The brand is shaped around focus, proportion, and presence. Every
            interaction should feel deliberate, calm, and resolved.
          </p>
          <p>
            The product story favors shadow, reflection, and detail over noise.
          </p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="about-craftsmanship-title">
        <div className="content-section__inner">
          <h2 id="about-craftsmanship-title">Craftsmanship</h2>
          <p>
            Each component is considered as part of a complete object: case,
            dial, glass, crown, and bracelet working as a single composition.
          </p>
          <p>
            Finishing is treated as a functional detail, shaping how the watch
            catches light across every angle.
          </p>
        </div>
      </section>

      <section className="content-section" aria-labelledby="engineering-title">
        <div className="content-section__inner">
          <h2 id="engineering-title">Materials and Engineering</h2>
          <p>
            Polished metal, clean glass, and precise internal geometry define
            the visual language of the collection.
          </p>
          <p>
            The engineering story is presented through restraint, giving the
            movement and material surfaces enough space to speak.
          </p>
        </div>
      </section>
    </main>
  );
}
