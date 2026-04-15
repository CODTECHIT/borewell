import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Wrench, CheckCircle, Phone, Repeat, Shield, Clock, Star, ArrowRight, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import drillingImg from "@/assets/service-drilling.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const amcPlans = [
  {
    name: "Basic",
    tagline: "For Homes",
    features: [
      "1 scheduled cleaning per year",
      "Annual water quality test",
      "Phone support during business hours",
      "Basic inspection report",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    tagline: "Most Popular",
    features: [
      "2 scheduled cleanings per year",
      "Bi-annual water quality tests",
      "Priority phone & WhatsApp support",
      "Detailed inspection report",
      "Emergency response within 6 hours",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    tagline: "For Businesses & Farms",
    features: [
      "3 scheduled cleanings per year",
      "Quarterly water quality tests",
      "24/7 dedicated support line",
      "Comprehensive inspection report",
      "Emergency response within 4 hours",
      "Free minor repairs included",
      "Transferable to new owners",
    ],
    highlight: false,
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="font-heading text-sm tracking-[0.3em] opacity-70 mb-2">What We Do</p>
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="opacity-80 max-w-xl mx-auto">Complete borewell solutions — from drilling to lifetime maintenance.</p>
        </motion.div>
      </div>
    </section>

    {/* Video Gallery */}
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">See Our Work in Action</h2>
          <p className="text-muted-foreground text-sm">Watch our borewell drilling and cleaning operations</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "/11.mp4",
            "/12.mp4",
            "/13.mp4",
          ].map((video, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-xl overflow-hidden shadow-green aspect-[9/16] md:aspect-[3/4] group"
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Drilling */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-xl overflow-hidden shadow-green">
              <img src={drillingImg} alt="Borewell drilling" className="w-full object-cover" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Droplets size={28} />
            </div>
            <h2 className="font-heading text-3xl text-foreground mb-2">Borewell Drilling</h2>
            <p className="text-sm text-primary font-heading tracking-wider mb-4">RESIDENTIAL • COMMERCIAL • AGRICULTURAL</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We provide professional borewell drilling services using high pressure rigs capable of drilling through the toughest terrains across Bangalore. Our experienced team ensures precise, clean drilling with minimal disruption.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                "6½\" Borewell Drilling",
                "rigs & 6½\" Drilling",
                "Robo Drilling",
                "High Pressure Rigs",
                "Up to 2,500 ft depth",
                "All terrain capable",
                "Residential & Commercial",
                "Agricultural Borewells",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle size={14} className="text-primary shrink-0" /> {item}
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/919042432061?text=${encodeURIComponent("*Enquiry for Borewell Drilling Quote* \nI would like to get a quote for a new borewell drilling project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors"
            >
              <Phone size={14} /> Get Drilling Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Cleaning */}
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 md:order-1">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Wrench size={28} />
            </div>
            <h2 className="font-heading text-3xl text-foreground mb-2">Borewell Cleaning</h2>
            <p className="text-sm text-primary font-heading tracking-wider mb-4">MAINTENANCE • RESTORATION • EMERGENCY</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Over time, borewells accumulate sediment, mineral deposits, and debris — reducing water flow and quality. Our professional cleaning services use specialized equipment to restore your borewell to peak performance.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                "Complete borewell flushing",
                "Sediment & debris removal",
                "Water flow restoration",
                "Health inspection",
                "Preventive maintenance",
                "Emergency cleaning",
                "Water quality testing",
                "Performance reports",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle size={14} className="text-primary shrink-0" /> {item}
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/919663862061?text=${encodeURIComponent("*Enquiry for Borewell Cleaning Service* \nI would like to book a borewell cleaning service.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors"
            >
              <Phone size={14} /> Book Cleaning Service
            </a>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-green">
              <img src={cleaningImg} alt="Borewell cleaning" className="w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* AMC Plans */}
    <section className="py-20 bg-card" id="amc">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Repeat size={14} className="text-primary" />
            <span className="text-primary text-xs font-heading tracking-wider">ANNUAL MAINTENANCE CONTRACT</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">AMC Plans for Worry-Free Borewells</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Choose a maintenance plan and never worry about borewell problems again. Our AMC customers enjoy priority service and significant savings.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {amcPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`rounded-xl border p-6 flex flex-col ${plan.highlight
                ? "border-primary bg-primary/5 shadow-green relative"
                : "border-border bg-background"
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-xs font-heading tracking-wider flex items-center gap-1">
                  <Star size={12} /> MOST POPULAR
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle size={14} className="text-primary shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/919042432061?text=${encodeURIComponent(`*Enquiry for AMC Plan: ${plan.name}* \nI am interested in the ${plan.name} AMC plan for my borewell.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading text-sm tracking-wider transition-colors ${plan.highlight
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            💡 <strong className="text-foreground">Tip:</strong> AMC customers save an average of ₹5,000–₹15,000 per year on emergency repairs and get priority service.
          </p>
        </div>
      </div>
    </section>

    {/* Why AMC */}
    <section className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <Shield size={24} />, title: "Prevent Breakdowns", desc: "Regular maintenance catches problems before they become costly." },
            { icon: <Clock size={24} />, title: "Priority Response", desc: "AMC customers get emergency service within 4-6 hours." },
            { icon: <Zap size={24} />, title: "Cost Savings", desc: "Save 15-20% on repairs and avoid expensive emergency charges." },
            { icon: <Repeat size={24} />, title: "Peace of Mind", desc: "Scheduled visits mean your borewell is always in top shape." },
          ].map(f => (
            <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center p-5 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">{f.icon}</div>
              <h3 className="font-heading text-base text-foreground mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl mb-4">Ready to Get Started?</h2>
        <p className="opacity-80 mb-8 max-w-md mx-auto">Free site inspection and transparent pricing — contact us today for a no-obligation quote.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:9042432061" className="inline-flex items-center justify-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:opacity-90 transition-opacity">
            <Phone size={16} /> Call 90424 32061 / 96638 62061
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:bg-primary-foreground/10 transition-colors">
            Send Enquiry <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    <WhatsAppButton />
  </Layout>
);

export default Services;
