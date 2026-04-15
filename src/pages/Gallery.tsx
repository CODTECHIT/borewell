import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, X } from "lucide-react";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import g1 from "/1.jpeg";
import g2 from "/2.jpeg";
import g3 from "/3.jpeg";
import g4 from "@/assets/gallery-4.jpg";
import drillingImg from "@/assets/service-drilling.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import heroImg from "@/assets/hero-borewell.jpg";
import aboutImg from "@/assets/about-team.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

type Category = "All" | "Drilling" | "Cleaning" | "Equipment";

const images: { src: string; alt: string; category: Category; desc: string }[] = [
  { src: g1, alt: "Drilling rig on site", category: "Drilling", desc: "6½\" borewell drilling at Electronic City — 350 ft depth" },
  { src: g2, alt: "Completed borewell with water", category: "Drilling", desc: "Successful water strike at Bommasandra residential site" },
  { src: g3, alt: "High pressure rig truck", category: "Equipment", desc: "Our high pressure rig deployed for deep drilling" },
  { src: g4, alt: "Borewell pipe installation", category: "Drilling", desc: "Casing installation for an agricultural borewell in Anekal" },
  { src: drillingImg, alt: "Drilling process", category: "Drilling", desc: "Robo drilling in progress at a commercial site" },
  { src: cleaningImg, alt: "Borewell cleaning", category: "Cleaning", desc: "Annual maintenance cleaning for an AMC customer" },
  { src: heroImg, alt: "Large drilling operation", category: "Equipment", desc: "Multi-rig setup for a large-scale project" },
  { src: aboutImg, alt: "Team at work", category: "Cleaning", desc: "Our experienced team performing borewell inspection" },
];

const categories: Category[] = ["All", "Drilling", "Cleaning", "Equipment"];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter(i => i.category === filter);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="font-heading text-sm tracking-[0.3em] opacity-70 mb-2">Our Portfolio</p>
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Project Gallery</h1>
            <p className="opacity-80 max-w-xl mx-auto">Browse our completed borewell projects across Bangalore.</p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border bg-card sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4 flex justify-center gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-heading text-sm tracking-wider transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer relative"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-primary-foreground font-heading text-xs tracking-wider bg-primary/80 self-start px-2 py-0.5 rounded mb-1">{img.category}</span>
                    <span className="text-primary-foreground text-xs">{img.desc}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} className="w-full rounded-xl" />
              <div className="mt-4 text-center">
                <p className="text-primary-foreground font-heading text-sm tracking-wider">{filtered[lightbox].desc}</p>
                <span className="text-primary-foreground/60 text-xs">{filtered[lightbox].category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl mb-4">Want Similar Results?</h2>
          <p className="opacity-80 mb-8 max-w-md mx-auto">Get a free site inspection and quote for your borewell project.</p>
          <a href="tel:9042432061" className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:opacity-90 transition-opacity">
            <Phone size={16} /> Call — 90424 32061 / 96638 62061
          </a>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Gallery;
