import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Button } from "@/components/ui/button";
import { 
  Smile, 
  Stethoscope, 
  Sparkles, 
  Trash2, 
  Minimize, 
  ScanLine, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Phone,
  Star,
  Quote
} from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-2">
              <Star className="w-4 h-4 mr-2 fill-teal-800" />
              Rated 4.9/5 by 200+ Patients
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 font-heading">
              Your Smile, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Our Priority</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Experience advanced, pain-free dental care in Bellandur. We combine modern technology with a gentle touch to give you the perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-14 text-lg border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/50"
                onClick={() => window.open('tel:09663661131')}
              >
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/10 border-4 border-white">
              {/* Unsplash: Friendly female dentist smiling in clinic */}
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Friendly Dentist at Dent-O-Care" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <Smile className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">New Patients Welcome</p>
                  <p className="text-xs text-slate-500">Book your first consultation today</p>
                </div>
              </div>
            </div>
            
            {/* Decorative dots grid */}
            <div className="absolute -top-10 -right-10 -z-10 text-teal-200">
              <svg width="100" height="100" fill="currentColor">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="order-2 lg:order-1 relative"
            >
              {/* Unsplash: Modern dental equipment or clean clinic interior */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                  alt="Modern Dental Equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-teal-600 rounded-3xl p-6 flex flex-col justify-center text-white shadow-xl hidden md:flex">
                <span className="text-5xl font-bold font-heading mb-2">10+</span>
                <span className="font-medium text-teal-100">Years of Experience</span>
              </div>
            </motion.div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Compassionate Care, Advanced Dentistry</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                At Dent-O-Care, we believe in treating the person, not just the tooth. We are a women-owned, LGBTQ+ friendly clinic dedicated to providing a safe, inclusive, and hygienic environment for all our patients.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Women-owned & Operated",
                  "LGBTQ+ Friendly Safe Space",
                  "Advanced Hygiene Protocols",
                  "Digital X-Rays & Imaging",
                  "Pain-free Anesthesia",
                  "Pediatric Friendly"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-teal-100 rotate-180" />
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-slate-600 italic mb-4">"The best dental experience I've ever had. Dr. Smitha is incredibly gentle and explains everything clearly. Highly recommended!"</p>
                  <p className="font-bold text-slate-900 text-sm">- Priya S.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Comprehensive Dental Solutions</h2>
            <p className="text-slate-600">From routine checkups to complex cosmetic makeovers, we offer a full range of dental treatments under one roof.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Dental Implants"
              description="Permanent solution for missing teeth. We use high-grade titanium implants that look and feel just like natural teeth."
              icon={Sparkles}
              delay={0.1}
            />
            <ServiceCard 
              title="Root Canal Treatment"
              description="Save your natural tooth with our painless single-sitting RCT performed by specialized endodontists."
              icon={Minimize}
              delay={0.2}
            />
            <ServiceCard 
              title="Cleaning & Scaling"
              description="Professional ultrasonic cleaning to remove plaque and tartar, keeping your gums healthy and breath fresh."
              icon={Sparkles}
              delay={0.3}
            />
            <ServiceCard 
              title="Orthodontics"
              description="Straighten your teeth with traditional metal braces or invisible aligners (Invisalign) for a perfect smile."
              icon={ScanLine}
              delay={0.4}
            />
            <ServiceCard 
              title="Cosmetic Dentistry"
              description="Smile makeovers with veneers, teeth whitening, and bonding to enhance the aesthetics of your smile."
              icon={Smile}
              delay={0.5}
            />
            <ServiceCard 
              title="Extractions & Surgery"
              description="Safe and painless removal of wisdom teeth and damaged teeth with advanced surgical protocols."
              icon={Trash2}
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* WHY US - FEATURE GRID */}
      <section id="why-us" className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Why Patients Trust Dent-O-Care</h2>
              <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                We combine clinical excellence with a warm, welcoming atmosphere. Our goal is to make every dental visit a positive experience.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Experienced Specialists", desc: "Team of MDS doctors for every specialty." },
                  { title: "State-of-the-Art Tech", desc: "Digital X-rays, Intraoral cameras & rotary endodontics." },
                  { title: "Transparent Pricing", desc: "No hidden charges. We explain costs upfront." },
                  { title: "Strict Sterilization", desc: "4-step sterilization protocol for 100% safety." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      <p className="text-teal-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              {/* Abstract decorative composition */}
              <div className="w-full h-[500px] bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex items-center justify-center">
                <div className="text-center">
                   <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                     <Smile className="w-12 h-12 text-primary" />
                   </div>
                   <h3 className="text-2xl font-bold mb-2">2000+</h3>
                   <p className="text-teal-100">Happy Smiles Created</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Visit Our Clinic</h2>
            <p className="text-slate-600">Conveniently located in Bellandur. Walk-ins welcome, appointments preferred.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-5 h-5 text-teal-700" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Location</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      SHOP NO:3, FIRST FLOOR,<br/>
                      SRI VEERANJANEYA COMPLEX,<br/>
                      78/5 Bellandur Main Rd,<br/>
                      Bengaluru – 560103
                    </p>
                 </div>
                 
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Phone className="w-5 h-5 text-blue-700" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Contact</h4>
                    <p className="text-slate-600 text-sm mb-2">
                      <a href="tel:09663661131" className="hover:text-primary transition-colors">096636 61131</a>
                    </p>
                    <p className="text-slate-600 text-sm">
                      <a href="mailto:contact@dentocare.com" className="hover:text-primary transition-colors">contact@dentocare.com</a>
                    </p>
                 </div>
                 
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow col-span-full">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                         <Clock className="w-5 h-5 text-orange-700" />
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900 mb-2">Clinic Hours</h4>
                         <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-slate-600">
                           <span>Monday - Saturday</span>
                           <span className="font-medium text-slate-900 text-right">9:30 AM - 9:00 PM</span>
                           <span>Sunday</span>
                           <span className="font-medium text-slate-900 text-right">10:00 AM - 1:00 PM</span>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.599723736566!2d77.6657!3d12.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzAwLjIiTiA3N8KwMzknNTYuNSJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Dent-O-Care Location"
                ></iframe>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">DENT-O-CARE</h3>
              <p className="max-w-xs text-sm leading-relaxed mb-6">
                Advanced multispeciality dental clinic in Bellandur providing comprehensive oral healthcare with a gentle touch.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold text-lg">f</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold text-lg">in</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold text-lg">G</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><ScrollLink to="home" smooth className="cursor-pointer hover:text-white">Home</ScrollLink></li>
                <li><ScrollLink to="about" smooth className="cursor-pointer hover:text-white">About Us</ScrollLink></li>
                <li><ScrollLink to="services" smooth className="cursor-pointer hover:text-white">Services</ScrollLink></li>
                <li><ScrollLink to="contact" smooth className="cursor-pointer hover:text-white">Book Appointment</ScrollLink></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Disclaimer</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Dent-O-Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
