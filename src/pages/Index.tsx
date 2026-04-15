import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone, Droplets, Wrench, Shield, Clock, Award, ChevronRight,
  MapPin, Mail, Star, CheckCircle, ArrowRight, Headphones,
  BarChart3, Users, Calendar, Repeat, ThumbsUp, Gauge
} from "lucide-react";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "/1.jpeg";
import drillingImg from "/2.jpeg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const testimonials = [
  {
    name: "Suresh Kumar",
    location: "Electronic City",
    rating: 5,
    text: "Moni Borewells drilled our borewell in just 2 days. Excellent water yield at 350 feet. We've been using their AMC service for 3 years now — no complaints!",
    project: "Residential 6½\" Borewell",
  },
  {
    name: "Lakshmi Devi",
    location: "Bommasandra",
    rating: 5,
    text: "Our old borewell had almost dried up. Their cleaning service restored the water flow completely. Very professional team and reasonable pricing.",
    project: "Borewell Cleaning & Restoration",
  },
  {
    name: "Prasad Reddy",
    location: "Anekal",
    rating: 5,
    text: "Best borewell service in Bangalore! They completed our farm borewell with Robo drilling perfectly. Now I recommend them to all my neighbours.",
    project: "Agricultural Robo Drilling",
  },
  {
    name: "Mohammed Irfan",
    location: "Chandapura",
    rating: 5,
    text: "Called them for emergency cleaning when our borewell water turned muddy. They came within 4 hours and fixed it. Signed up for their annual maintenance right away.",
    project: "Emergency Cleaning + AMC",
  },
];

const faqs = [
  {
    q: "How deep can you drill a borewell?",
    a: "We can drill borewells up to 2,500 feet deep depending on the geological conditions. Our high-pressure rigs are equipped to handle rocky terrain, clay, and hard formations found across Bangalore.",
  },
  {
    q: "How long does it take to complete a borewell?",
    a: "A standard residential borewell (200-400 feet) takes 1-2 days. Deeper borewells or those in rocky terrain may take 2-4 days. We always provide a timeline estimate before starting.",
  },
  {
    q: "Do you provide a warranty on your drilling work?",
    a: "Yes. All our drilling projects come with a workmanship warranty. If any issues arise due to our work within the warranty period, we'll fix it at no additional cost.",
  },
  {
    q: "How often should I get my borewell cleaned?",
    a: "We recommend professional cleaning every 12-18 months for optimal water flow. Our Annual Maintenance Contract (AMC) covers periodic cleaning, inspection, and priority support — saving you money long-term.",
  },
  {
    q: "What areas in Bangalore do you serve?",
    a: "We serve all around Bangalore including Electronic City, Bommasandra, Anekal, Chandapura, HSR Layout, Sarjapur, Whitefield, JP Nagar, and surrounding areas.",
  },
  {
    q: "What is the cost of borewell drilling?",
    a: "Pricing depends on depth, terrain, and bore size. We provide free site inspection and transparent quotes. Contact us for an obligation-free estimate for your specific location.",
  },
];

const processSteps = [
  { step: "01", title: "Free Site Visit", desc: "We inspect your location, assess terrain, and recommend the best drilling approach." },
  { step: "02", title: "Transparent Quote", desc: "Detailed cost breakdown with no hidden charges. You approve before we start." },
  { step: "03", title: "Professional Drilling", desc: "Our expert team drills using high-pressure rigs with real-time depth monitoring." },
  { step: "04", title: "Quality Testing", desc: "Water yield testing, casing installation, and quality inspection before handover." },
  { step: "05", title: "Ongoing Support", desc: "Post-project support, maintenance reminders, and priority service for AMC customers." },
];

const serviceAreas = [
  "Electronic City", "Bommasandra", "Anekal", "Chandapura",
  "HSR Layout", "Sarjapur Road", "Whitefield", "Marathahalli",
  "Bannerghatta Road", "JP Nagar", "BTM Layout", "Koramangala",
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[92vh] min-h-[650px] flex items-center overflow-hidden">
      <img src={heroImg} alt="Borewell drilling in action" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary-foreground/90 text-xs font-heading tracking-wider">TRUSTED BY 500+ CUSTOMERS IN BANGALORE</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Bangalore's Most Trusted{" "}
            <span className="text-secondary">Borewell</span>{" "}
            Experts
          </motion.h1>
          <motion.p variants={fadeUp} className="text-primary-foreground/80 text-lg md:text-xl mb-8 font-body leading-relaxed max-w-xl">
            Specialist in high pressure rigs — Drilling 6½", rigs & Robo. Serving Electronic City & all of Bangalore with 10+ years of expertise.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:9663862061"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors shadow-green"
            >
              <Phone size={18} /> Call Now — 90424 32061
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-card/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:bg-card/20 transition-colors"
            >
              Get Free Quote <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-6 mt-8 pt-8 border-t border-primary-foreground/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-primary/60 border-2 border-primary-foreground/20 flex items-center justify-center">
                  <Users size={12} className="text-primary-foreground/70" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-secondary fill-secondary" />)}
              </div>
              <p className="text-primary-foreground/60 text-xs mt-0.5">Rated 4.9/5 by our customers</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { num: "500+", label: "Projects Completed", icon: <BarChart3 size={20} /> },
          { num: "10+", label: "Years Experience", icon: <Award size={20} /> },
          { num: "100%", label: "Client Satisfaction", icon: <ThumbsUp size={20} /> },
          { num: "24/7", label: "Working hours 24/7", icon: <Headphones size={20} /> },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <div className="mb-2 opacity-70">{s.icon}</div>
            <p className="font-heading text-3xl md:text-4xl font-bold">{s.num}</p>
            <p className="text-xs opacity-70 mt-1 tracking-wider font-heading">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* About Preview */}
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Your Trusted Borewell Partner Since 2014
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Moni Borewells, owned by <strong className="text-foreground">Ranjithkumar</strong>, has been delivering reliable borewell drilling and cleaning services across Bangalore for over a decade. With state-of-the-art high pressure rigs and a dedicated team of experienced drillers, we ensure quality water solutions for residential, commercial, and agricultural needs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            What sets us apart is our commitment to long-term relationships. Over 60% of our business comes from repeat customers and referrals — a testament to our quality and reliability.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors">
            Learn More About Us <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">What We Offer</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Complete borewell solutions from drilling to long-term maintenance — everything under one roof.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { img: drillingImg, title: "Borewell Drilling", desc: "Professional drilling with 6½\", rigs & Robo specifications using high pressure rigs for residential, commercial & agricultural needs.", icon: <Droplets size={24} />, features: ["6½\" & Robo Drilling", "Up to 2,500 ft depth", "All terrain capable"] },
            { img: cleaningImg, title: "Borewell Cleaning", desc: "Expert cleaning and flushing to restore water flow, remove sediment, and extend the life of your borewell.", icon: <Wrench size={24} />, features: ["Complete flushing", "Debris removal", "Flow restoration"] },
            { img: gallery1, title: "Annual Maintenance", desc: "Our AMC plans keep your borewell in peak condition year-round with scheduled maintenance and priority support.", icon: <Repeat size={24} />, features: ["Scheduled visits", "Priority response", "Cost savings"] },
          ].map((s) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-green transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle size={14} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors">
            View All Services & AMC Plans <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">How It Works</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">Our 5-Step Process</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">From site inspection to ongoing maintenance — we handle everything professionally.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((p, i) => (
              <motion.div key={p.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-heading text-lg font-bold shadow-green">
                  {p.step}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[calc(100%-20px)] h-[2px] bg-border" />
                )}
                <h3 className="font-heading text-sm text-foreground mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">The Moni Borewells Advantage</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <Shield size={28} />, title: "Quality Assured", desc: "Top-grade equipment, certified processes, and workmanship warranty on every project." },
            { icon: <Clock size={28} />, title: "On-Time Delivery", desc: "We commit to timelines and deliver — no delays, no excuses." },
            { icon: <Gauge size={28} />, title: "Advanced Equipment", desc: "Latest high pressure rigs for faster, cleaner, and deeper drilling." },
            { icon: <Headphones size={28} />, title: "24/7 Working hours", desc: "Round-the-clock emergency support for borewell breakdowns and urgent repairs." },
          ].map((f) => (
            <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-green transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                {f.icon}
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* AMC Section — Recurring Customers */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-4">
              <Repeat size={14} />
              <span className="text-xs font-heading tracking-wider">ANNUAL MAINTENANCE CONTRACT</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Keep Your Borewell Running{" "}
              <span className="text-secondary">Year After Year</span>
            </h2>
            <p className="opacity-80 leading-relaxed mb-6">
              Our Annual Maintenance Contract (AMC) ensures your borewell stays in top condition with regular checkups, priority emergency service, and significant cost savings on repairs.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Scheduled cleaning & inspection visits",
                "Priority emergency response within 4 hours",
                "15-20% discount on all repair services",
                "Free water quality testing annually",
                "Dedicated account manager for your property",
                "Transferable to new property owners",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-secondary shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-heading text-sm tracking-wider hover:opacity-90 transition-opacity">
                View AMC Plans <ArrowRight size={16} />
              </Link>
              <a href="tel:9663862061" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-6 py-3 rounded-lg font-heading text-sm tracking-wider hover:bg-primary-foreground/10 transition-colors">
                <Phone size={14} /> Talk to Us
              </a>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-2 gap-4">
            {[
              { num: "200+", label: "Active AMC Customers" },
              { num: "4 hrs", label: "Avg. Emergency Response" },
              { num: "20%", label: "Savings on Repairs" },
              { num: "98%", label: "AMC Renewal Rate" },
            ].map(s => (
              <div key={s.label} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-secondary">{s.num}</p>
                <p className="text-xs opacity-70 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Real reviews from homeowners, farmers, and businesses across Bangalore.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-heading text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location} • {t.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">Project Gallery</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">See our completed borewell projects across Bangalore.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { img: gallery1, label: "Residential Drilling" },
            { img: gallery2, label: "Farm Borewell" },
            { img: gallery3, label: "Commercial Project" },
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-xl overflow-hidden aspect-[4/3] relative group">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-primary-foreground font-heading text-sm tracking-wider">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-heading text-sm tracking-wider hover:gap-3 transition-all">
            View Full Gallery <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Service Areas */}
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">Coverage</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">Areas We Serve</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">We provide borewell services across all around Bangalore.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {serviceAreas.map(area => (
            <motion.span key={area} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 text-sm text-foreground font-heading tracking-wider hover:border-primary hover:shadow-green transition-all cursor-default">
              <MapPin size={14} className="text-primary" /> {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group bg-background border border-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-5 font-heading text-sm md:text-base text-foreground tracking-wider list-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronRight size={18} className="text-primary transition-transform group-open:rotate-90 shrink-0 ml-4" />
              </summary>
              <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">Need a Borewell? Get in Touch Today!</h2>
          <p className="opacity-80 mb-8 max-w-lg mx-auto">
            Free site inspection • Transparent pricing • No hidden charges. Contact us for a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:9663862061" className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:opacity-90 transition-opacity shadow-green">
              <Phone size={16} /> Call — 90424 32061
            </a>
            <a href="mailto:n.ranjithkumar18@gmail.com" className="inline-flex items-center gap-2 border border-primary-foreground/30 px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:bg-primary-foreground/10 transition-colors">
              <Mail size={16} /> Email Us
            </a>
          </div>
          <p className="flex items-center justify-center gap-2 text-sm opacity-70">
            <MapPin size={14} /> Electronic City, Bangalore - 560100
          </p>
        </motion.div>
      </div>
    </section>

    <WhatsAppButton />
  </Layout>
);

export default Index;
