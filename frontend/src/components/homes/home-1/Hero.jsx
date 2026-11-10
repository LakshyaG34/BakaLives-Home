import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    eyebrow: "SHOPIFY STORE SETUP",
    title: <>A better store<br />starts <em>right here.</em></>,
    description: "From first idea to first order, we build the Shopify foundation your business can grow on.",
    action: "Explore our services",
    theme: "setup",
    badge: "Your next chapter, online",
  },
  {
    eyebrow: "CUSTOM SHOPIFY DESIGN",
    title: <>Make your brand<br />impossible to <em>scroll past.</em></>,
    description: "Distinctive storefront design and thoughtful development, made to feel unmistakably yours.",
    action: "See what we create",
    theme: "design",
    badge: "A storefront that feels like you",
  },
  {
    eyebrow: "CONVERSION & GROWTH",
    title: <>Turn more visits<br />into <em>what's next.</em></>,
    description: "A faster, clearer shopping experience that helps more of your customers find their way to checkout.",
    action: "Let's grow together",
    theme: "growth",
    badge: "Built for the next big thing",
  },
];

function StorefrontVisual({ slide, index }) {
  return (
    <div className={`hero-art hero-art-${slide.theme}`} aria-label={slide.badge}>
      <div className="art-orbit art-orbit-one" />
      <div className="art-orbit art-orbit-two" />
      <div className="art-sticker">{index === 1 ? "MADE TO\nMOVE" : index === 2 ? "GROW\nWITH YOU" : "GOOD\nTHINGS\nAHEAD"}</div>
      <div className="store-window">
        <div className="store-window-bar">
          <span /><span /><span />
          <div className="store-address">yourbrand.myshopify.com</div>
        </div>
        <div className="storefront">
          <div className="store-nav"><b>YOUR BRAND</b><span>Shop&nbsp;&nbsp; About&nbsp;&nbsp; Journal</span><i>Bag (0)</i></div>
          <div className="store-hero">
            <span className="store-kicker">A LITTLE MORE YOU</span>
            <strong>{index === 1 ? "Objects for\nslow living." : index === 2 ? "Find your\nnew favorite." : "Everyday,\nmade better."}</strong>
            <span className="store-button">DISCOVER THE COLLECTION&nbsp; ↗</span>
            <div className="store-product-shape" />
          </div>
          <div className="store-footer"><span>Thoughtfully made, just for you.</span><span>01 — 03</span></div>
        </div>
      </div>
      <div className="art-note"><span className="art-note-icon">✳</span><span>{slide.badge}</span></div>
      <div className="art-stat"><span>SHOPIFY<br />EXPERTISE</span><b>01—03</b></div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="home-hero" aria-label="Shopify services">
      <Swiper
        className="home-hero-slider"
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={700}
        autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.theme}>
            <div className={`hero-slide hero-slide-${slide.theme}`}>
              <div className="hero-copy">
                <div className="hero-eyebrow"><span className="eyebrow-dot" />{slide.eyebrow}</div>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <a className="hero-action" href="#services">
                  {slide.action}<span aria-hidden="true">↗</span>
                </a>
                <div className="hero-counter"><span>0{index + 1}</span><i />03</div>
              </div>
              <StorefrontVisual slide={slide} index={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-pagination" />
    </section>
  );
}
