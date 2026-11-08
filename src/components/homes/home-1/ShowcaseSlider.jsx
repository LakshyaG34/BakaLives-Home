import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const jpgImages = new Set([2, 10, 12, 20, 22]);
const heroImages = Array.from({ length: 22 }, (_, index) => {
  const number = index + 1;
  const extension = jpgImages.has(number) ? "jpg" : "png";
  return {
    src: `/images/Hero${number}.${extension}`,
    label: `Digital design study ${String(number).padStart(2, "0")}`,
  };
});

export default function ShowcaseSlider() {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const loopDistance = useRef(0);
  const paused = useRef(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !firstSetRef.current) return;
      const gap = parseFloat(window.getComputedStyle(trackRef.current).columnGap) || 0;
      loopDistance.current = firstSetRef.current.getBoundingClientRect().width + gap;
      if (loopDistance.current > 0 && x.get() <= -loopDistance.current) {
        x.set(x.get() % loopDistance.current);
      }
    };

    measure();
    const observer = window.ResizeObserver ? new ResizeObserver(measure) : null;
    if (observer && trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [x]);

  useAnimationFrame((_, delta) => {
    if (paused.current || loopDistance.current === 0) return;
    let nextX = x.get() - delta * 0.06;
    if (nextX <= -loopDistance.current) nextX += loopDistance.current;
    x.set(nextX);
  });

  const renderSet = (isDuplicate = false) => (
    <div className="showcase-set" ref={isDuplicate ? undefined : firstSetRef} aria-hidden={isDuplicate || undefined}>
      {heroImages.map((item) => (
        <article className="showcase-card" key={`${isDuplicate ? "copy-" : ""}${item.label}`}>
          <div className="showcase-image-wrap">
            <img
              src={item.src}
              alt={isDuplicate ? "" : item.label}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="showcase-card-caption">
            <span>{item.label}</span>
            <span aria-hidden="true">↗</span>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section className="home-showcase" aria-labelledby="showcase-title">
      <div className="showcase-heading">
        <div>
          <span className="showcase-eyebrow">A LITTLE INSPIRATION, IN MOTION</span>
          <h2 id="showcase-title">Different ideas.<br />Better online experiences.</h2>
        </div>
        <p>A fast-moving collection of website concepts, layouts, and digital storefront ideas.</p>
      </div>

      <div
        className="showcase-viewport"
        role="region"
        aria-label="Auto-scrolling website design gallery. Hover or focus to pause."
        tabIndex={0}
        onPointerEnter={() => { paused.current = true; }}
        onPointerLeave={() => { paused.current = false; }}
        onFocusCapture={() => { paused.current = true; }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) paused.current = false;
        }}
      >
        <motion.div ref={trackRef} className="showcase-track" style={{ x }}>
          {renderSet()}
          {renderSet(true)}
        </motion.div>
      </div>
      <div className="showcase-footer-note"><span />Hover or focus the gallery to pause its movement.</div>
    </section>
  );
}
