import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Spark = () => (
  <svg aria-hidden="true" viewBox="0 0 28 28" fill="none">
    <path d="M14 1c.4 8.2 4.8 12.6 13 13-8.2.4-12.6 4.8-13 13C13.6 18.8 9.2 14.4 1 14 9.2 13.6 13.6 9.2 14 1Z" stroke="currentColor" />
  </svg>
);

const features = [
  { number: "01", tag: "Before the party", title: "We make it yours", body: "Custom overlays, backdrops, and details shaped around your event—not the other way around." },
  { number: "02", tag: "In the moment", title: "Guests run the show", body: "A sleek, effortless booth experience that draws everyone in and keeps the energy moving." },
  { number: "03", tag: "Before they leave", title: "Every shot, instantly", body: "Photos land straight on their phones, ready to share before the next pose even starts." },
];

const events = ["Birthdays", "Bridal showers", "Baby showers", "Private parties", "Brand pop-ups", "Special events"];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image className="hero-image" src="/guest-list-hero.png" alt="Friends enjoying a modern photo booth at an elegant event" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="The Guest List home">
            <span className="brand-main">THE GUEST LIST</span>
            <span className="brand-sub">PHOTO BOOTH CO.</span>
          </a>
          <div className="nav-links">
            <a href="#experience">The experience</a>
            <a href="#events">Events</a>
            <a href="#gallery">Gallery</a>
          </div>
          <a className="nav-cta" href="#booking">Book your date <Arrow /></a>
        </nav>

        <div className="hero-content shell">
          <div className="eyebrow"><span /> Waco, Texas & beyond</div>
          <h1>Not your average<br /><em>photo booth.</em></h1>
          <p>Luxury, customizable photo booth experiences made for events worth remembering.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#booking">Book your date <Arrow /></a>
            <a className="text-link" href="#experience">See the experience <span>↓</span></a>
          </div>
        </div>
        <div className="hero-note">Scroll to get on the list <span>↓</span></div>
        <div className="hero-stamp" aria-hidden="true"><Spark /><span>THE<br />GUEST<br />LIST</span></div>
      </section>

      <section className="marquee" aria-label="Service highlights">
        <div className="marquee-track">
          <span>Custom experience</span><i>✦</i><span>Instant images</span><i>✦</i><span>Elevated setup</span><i>✦</i><span>Unforgettable energy</span><i>✦</i>
          <span>Custom experience</span><i>✦</i><span>Instant images</span><i>✦</i><span>Elevated setup</span><i>✦</i><span>Unforgettable energy</span><i>✦</i>
        </div>
      </section>

      <section className="intro section shell" id="experience">
        <div className="section-kicker"><span>01</span> The experience</div>
        <div className="intro-copy">
          <h2>Your party.<br />Their moment.<br /><em>Everyone remembers.</em></h2>
          <div>
            <p>We&apos;re here for more than the photo. The Guest List creates the kind of experience that becomes part of the party—effortless, stylish, and seriously fun.</p>
            <a className="text-link dark" href="#booking">Create your experience <Arrow /></a>
          </div>
        </div>

        <div className="experience-showcase">
          <div className="experience-setup">
            <Image src="/complete-booth-setup.png" alt="The complete Guest List photo booth setup with an ivory backdrop and floral styling" fill sizes="(max-width: 900px) 100vw, 40vw" />
            <div className="setup-shade" />
            <div className="setup-caption">
              <span>Arrives event-ready</span>
              <p>The setup looks as good<br />as the photos feel.</p>
            </div>
          </div>
          <div className="experience-steps">
            {features.map((feature) => (
              <article className="experience-step" key={feature.number}>
                <span className="step-number">{feature.number}</span>
                <div className="step-copy">
                  <span className="step-tag">{feature.tag}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
                <span className="step-spark" aria-hidden="true">✦</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="events-visual">
          <Image src="/event-sharing.png" alt="Friends laughing as they receive their photo booth image" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="events-visual-copy">
            <span>Good times look<br />good on you.</span>
          </div>
        </div>
        <div className="events-content">
          <div className="section-kicker light"><span>02</span> Find your occasion</div>
          <h2>There&apos;s always a<br /><em>reason to celebrate.</em></h2>
          <div className="event-list">
            {events.map((event, index) => (
              <a href="#booking" key={event}><span>{String(index + 1).padStart(2, "0")}</span>{event}<Arrow /></a>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery section shell" id="gallery">
        <div className="gallery-heading">
          <div>
            <div className="section-kicker"><span>03</span> Caught on camera</div>
            <h2>A little glimpse of<br /><em>the good stuff.</em></h2>
          </div>
          <p>Real smiles. Unscripted moments. Photos your guests will actually want to keep.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-one"><Image src="/gallery-confetti.png" alt="Four friends laughing beneath a burst of gold confetti" fill sizes="(max-width: 600px) 100vw, 40vw" /></figure>
          <figure className="gallery-two"><Image src="/gallery-booth-detail.png" alt="A guest using the illuminated photo booth touchscreen" fill sizes="(max-width: 600px) 50vw, 30vw" /></figure>
          <figure className="gallery-three"><Image src="/gallery-friends.png" alt="Two friends sharing a joyful photo booth pose" fill sizes="(max-width: 600px) 50vw, 30vw" /></figure>
        </div>
      </section>

      <section className="booking section" id="booking">
        <div className="booking-glow" />
        <div className="booking-inner shell">
          <div className="booking-copy">
            <div className="section-kicker light"><span>04</span> Save your spot</div>
            <h2>Tell us about<br />your event.</h2>
            <p>Share the basics and we&apos;ll take it from there. Thoughtful details, a seamless setup, and a whole lot of fun included.</p>
            <div className="availability"><i /> Now booking 2026 events</div>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="final-cta">
        <div className="final-stars" aria-hidden="true">✦ <span>✦</span> ✦</div>
        <p>One night. Hundreds of moments.</p>
        <h2>Ready to get on<br /><em>the guest list?</em></h2>
        <a className="button button-dark" href="#booking">Let&apos;s make it happen <Arrow /></a>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-main">THE GUEST LIST</span><span className="brand-sub">PHOTO BOOTH CO.</span></a>
        <p>Luxury photo booth experiences<br />Waco, Texas & beyond</p>
        <div><a href="#top">Instagram</a><a href="#booking">Inquire</a><a href="#top">Back to top ↑</a></div>
        <small>© 2026 The Guest List Photo Booth Co.</small>
      </footer>
    </main>
  );
}
