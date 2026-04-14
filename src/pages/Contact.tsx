import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `*New Enquiry from Moni Borewells Website*
*Name:* ${form.name}
*Phone:* ${form.phone}
*Service:* ${form.service}
*Message:* ${form.message}`;
    window.open(`https://wa.me/919042432061?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your enquiry is being sent via WhatsApp." });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="font-heading text-sm tracking-[0.3em] opacity-70 mb-2">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="opacity-80 max-w-xl mx-auto">Free consultation • Transparent pricing • No obligation</p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-secondary text-secondary-foreground py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-sm font-heading tracking-wider">
          <AlertTriangle size={16} />
          <span>Borewell Emergency? Call now for 24/7 support:</span>
          <a href="tel:9663862061" className="underline font-bold">96638 62061</a>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-heading text-2xl text-foreground mb-6">Contact Information</h2>
              <div className="space-y-5">
                {[
                  { icon: <Phone size={20} />, label: "Phone", value: "96638 62061", href: "tel:9663862061" },
                  { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "96638 62061", href: "https://wa.me/919663862061" },
                  { icon: <Mail size={20} />, label: "Email", value: "n.ranjithkumar18@gmail.com", href: "mailto:n.ranjithkumar18@gmail.com" },
                  { icon: <MapPin size={20} />, label: "Address", value: "All around Bangalore" },
                  { icon: <Clock size={20} />, label: "Working Hours", value: "Mon - Sun: 6:00 AM - 9:00 PM" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">{c.icon}</div>
                    <div>
                      <p className="font-heading text-xs text-muted-foreground tracking-wider">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors text-sm">{c.value}</a>
                      ) : (
                        <p className="text-foreground text-sm">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  title="Moni Borewells Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9877!2d77.668!3d12.845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8e1e4c1b1b%3A0x1234567890abcdef!2sElectronic%20City%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-heading text-2xl text-foreground mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-heading text-xs text-muted-foreground mb-1.5 tracking-wider">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block font-heading text-xs text-muted-foreground mb-1.5 tracking-wider">PHONE NUMBER</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block font-heading text-xs text-muted-foreground mb-1.5 tracking-wider">SERVICE REQUIRED</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="New Borewell Drilling">New Borewell Drilling</option>
                    <option value="Borewell Cleaning">Borewell Cleaning</option>
                    <option value="Annual Maintenance Contract">Annual Maintenance Contract (AMC)</option>
                    <option value="Emergency Repair">Emergency Repair</option>
                    <option value="Site Inspection">Free Site Inspection</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-heading text-xs text-muted-foreground mb-1.5 tracking-wider">YOUR MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none text-sm"
                    placeholder="Tell us about your requirements, location, and any specific needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-sm tracking-wider hover:bg-primary/90 transition-colors shadow-green"
                >
                  <Send size={16} /> Send via WhatsApp
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Or call directly: <a href="tel:9663862061" className="text-primary">96638 62061</a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  );
};

export default Contact;
