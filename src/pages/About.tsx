import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Users, Target, Zap, Phone, CheckCircle, ChevronRight, BarChart3, Shield, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import aboutImg from "@/assets/about-team.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const milestones = [
  { year: "2014", event: "Moni Borewells founded by Ranjithkumar in Electronic City" },
  { year: "2016", event: "Expanded to Robo drilling services with high pressure rigs" },
  { year: "2018", event: "Crossed 200+ completed borewell projects" },
  { year: "2020", event: "Launched Annual Maintenance Contracts (AMC)" },
  { year: "2022", event: "Serving all around Bangalore" },
  { year: "2024", event: "500+ projects completed with 200+ AMC customers" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
      <img src={aboutImg} alt="Our team at work" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="font-heading text-sm tracking-[0.3em] text-primary-foreground/70 mb-2">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground">Know Our Story</h1>
        </motion.div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">Our Story</p>
            <h2 className="font-heading text-3xl text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Moni Borewells is a Bangalore-based borewell drilling company owned and operated by <strong className="text-foreground">Ranjithkumar</strong>. With over a decade of experience in the borewell industry, we have established ourselves as a trusted name in Electronic City and surrounding areas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We specialize in drilling 6½" borewells, rigs & 6½" borewells, and Robo drilling using state-of-the-art high pressure rigs. Our mission is to provide reliable, efficient, and affordable water solutions to <strong className="text-foreground">domestic</strong>, <strong className="text-foreground">industrial</strong>, and <strong className="text-foreground">agricultural</strong> sectors across Bangalore.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              What truly sets us apart is our focus on long-term customer relationships. Over 60% of our business comes from repeat customers and referrals — because when we drill your borewell, we're there for the lifetime of it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:9663862061" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors">
                <Phone size={14} /> Contact Owner
              </a>
              <Link to="/services#amc" className="inline-flex items-center gap-2 text-primary font-heading text-sm tracking-wider hover:gap-3 transition-all">
                View AMC Plans <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-2 gap-4">
            {[
              { num: "500+", label: "Projects Done" },
              { num: "10+", label: "Years Experience" },
              { num: "200+", label: "AMC Customers" },
              { num: "60%", label: "Repeat Business" },
            ].map(s => (
              <div key={s.label} className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{s.num}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">Our Journey</p>
          <h2 className="font-heading text-3xl text-foreground">Key Milestones</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-0">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4 relative">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xs font-bold shrink-0 z-10">
                  {m.year.slice(2)}
                </div>
                {i < milestones.length - 1 && <div className="w-[2px] flex-1 bg-border" />}
              </div>
              <div className="pb-8">
                <p className="font-heading text-sm text-primary">{m.year}</p>
                <p className="text-foreground text-sm">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">What Drives Us</p>
          <h2 className="font-heading text-3xl text-foreground">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <Award size={28} />, title: "Excellence", desc: "We strive for the highest quality in every project we undertake." },
            { icon: <Users size={28} />, title: "Customer First", desc: "Your satisfaction and long-term trust are our top priorities." },
            { icon: <Target size={28} />, title: "Precision", desc: "Accurate drilling with advanced equipment and proven techniques." },
            { icon: <Zap size={28} />, title: "Efficiency", desc: "Timely project completion without compromising on quality." },
          ].map((v) => (
            <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center p-6 bg-background rounded-xl border border-border hover:shadow-green transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">{v.icon}</div>
              <h3 className="font-heading text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Equipment */}
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-heading text-sm tracking-[0.2em] text-primary mb-2">Our Equipment</p>
          <h2 className="font-heading text-3xl text-foreground">Industry-Grade Machinery</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <BarChart3 size={24} />, title: "High Pressure Rigs", desc: "State-of-the-art rigs capable of drilling through hard rock formations up to 2,500 feet." },
            { icon: <Shield size={24} />, title: "Safety Equipment", desc: "Full safety gear, blowout preventers, and environmental protection measures on every site." },
            { icon: <Clock size={24} />, title: "Monitoring Systems", desc: "Real-time depth monitoring and water yield testing equipment for accurate results." },
          ].map(e => (
            <motion.div key={e.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">{e.icon}</div>
              <h3 className="font-heading text-base text-foreground mb-2">{e.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl mb-4">Let's Work Together</h2>
        <p className="opacity-80 mb-8 max-w-md mx-auto">Whether it's a new borewell or maintenance of an existing one — we're here to help.</p>
        <a href="tel:9663862061" className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:opacity-90 transition-opacity">
          <Phone size={16} /> Call Ranjithkumar — 96638 62061
        </a>
      </div>
    </section>

    <WhatsAppButton />
  </Layout>
);

export default About;
