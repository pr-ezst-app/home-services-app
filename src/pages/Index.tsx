import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HERO_IMG = "https://cdn.ezst.app/projects/39eaa8b9-3b93-4a14-a954-b4bf4ba83d6d/files/32f19b47-c433-4526-8af9-f4e97f0d11e3.jpg";

const services = [
  { icon: "Sparkles", title: "Cleaning", desc: "Deep cleaning, regular maintenance, post-renovation tidying", price: "from $45" },
  { icon: "Wrench", title: "Plumbing", desc: "Leak repairs, pipe installation, bathroom fixtures", price: "from $65" },
  { icon: "Zap", title: "Electrical", desc: "Wiring, outlets, lighting, panel upgrades", price: "from $80" },
  { icon: "Paintbrush", title: "Painting", desc: "Interior & exterior, wallpaper, decorative finishes", price: "from $55" },
  { icon: "Hammer", title: "Carpentry", desc: "Furniture assembly, custom woodwork, repairs", price: "from $70" },
  { icon: "Thermometer", title: "HVAC", desc: "Heating, cooling, ventilation, filter replacement", price: "from $90" },
  { icon: "Scissors", title: "Landscaping", desc: "Lawn care, pruning, seasonal clean-up", price: "from $50" },
  { icon: "Shield", title: "Security", desc: "Camera install, smart locks, alarm systems", price: "from $85" },
];

const providers = [
  { name: "Marcus Allen", role: "Master Plumber", rating: 4.9, jobs: 312, badge: "Top Rated", avatar: "MA" },
  { name: "Sofia Chen", role: "Interior Painter", rating: 4.8, jobs: 187, badge: "Verified", avatar: "SC" },
  { name: "David Torres", role: "Electrician", rating: 5.0, jobs: 428, badge: "Elite", avatar: "DT" },
  { name: "Amara Osei", role: "Cleaning Expert", rating: 4.9, jobs: 256, badge: "Top Rated", avatar: "AO" },
];

const reviews = [
  { name: "Jennifer K.", service: "Deep Cleaning", text: "Absolutely impeccable work. They transformed my home in a single day. Will book again without hesitation.", rating: 5, date: "May 2026" },
  { name: "Robert M.", service: "Electrical Repair", text: "Professional, punctual, and transparent with pricing. Fixed our panel issue in under two hours.", rating: 5, date: "Apr 2026" },
  { name: "Sarah L.", service: "Bathroom Plumbing", text: "The technician was courteous and incredibly skilled. Zero mess, perfect result.", rating: 5, date: "Apr 2026" },
  { name: "Tom H.", service: "Interior Painting", text: "Stunning finish. They took care of every detail and the cleanup was spotless.", rating: 4, date: "Mar 2026" },
];

const steps = [
  { icon: "Search", label: "Choose a Service", desc: "Browse our catalog and select the service you need" },
  { icon: "Calendar", label: "Book a Time", desc: "Pick a convenient date and confirm your appointment" },
  { icon: "CreditCard", label: "Secure Payment", desc: "Pay safely via card, Apple Pay, or bank transfer" },
  { icon: "CheckCircle", label: "Done!", desc: "A verified professional arrives at your door" },
];

const paymentMethods = ["Visa", "Mastercard", "Apple Pay", "Google Pay", "Bank Transfer"];

export default function Index() {
  const [activeNav, setActiveNav] = useState("home");
  const [selectedService, setSelectedService] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "providers", label: "Providers" },
    { id: "booking", label: "Book Now" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-body">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <Icon name="Home" size={16} className="text-gold" />
            </div>
            <span className="font-display text-xl font-semibold text-navy">HomeServe</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors ${activeNav === item.id ? "text-amber-600" : "text-muted-foreground hover:text-navy"}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-navy text-[#d4a832] hover:bg-navy/90 font-medium"
              onClick={() => scrollTo("booking")}
            >
              Book Now
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-navy" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-left py-2 text-navy hover:text-amber-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Badge className="mb-6 bg-[#d4a832]/20 text-[#d4a832] border-[#d4a832]/40 font-body text-xs tracking-widest uppercase">
              Trusted Since 2018
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-tight mb-6">
              Your Home,<br />
              <span className="text-[#d4a832] italic">Cared For.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md font-light">
              Verified professionals for every household need — from a dripping tap to a full renovation. Transparent pricing, guaranteed quality.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#d4a832] text-navy hover:bg-[#c49a28] font-semibold px-8 text-white"
                onClick={() => scrollTo("booking")}
              >
                Book a Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
                onClick={() => scrollTo("services")}
              >
                Explore Services
              </Button>
            </div>

            <div className="flex gap-10">
              {[["1,200+", "Verified Pros"], ["98%", "Satisfaction"], ["50K+", "Jobs Done"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-semibold text-[#d4a832]">{num}</div>
                  <div className="text-white/50 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust card */}
          <div className="hidden md:block animate-fade-in">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 max-w-sm ml-auto">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#d4a832]/20 flex items-center justify-center">
                  <Icon name="ShieldCheck" size={20} className="text-[#d4a832]" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Fully Insured</div>
                  <div className="text-white/50 text-xs">All providers verified & bonded</div>
                </div>
              </div>
              {[
                { icon: "Clock", text: "Same-day appointments available" },
                { icon: "Lock", text: "Secure encrypted payments" },
                { icon: "Star", text: "Money-back satisfaction guarantee" },
                { icon: "Phone", text: "24/7 customer support" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 py-3 border-b border-white/10 last:border-0">
                  <Icon name={icon} size={15} className="text-[#d4a832] shrink-0" />
                  <span className="text-white/80 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/40" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#d4a832]/15 text-amber-700 border-[#d4a832]/30 text-xs tracking-widest uppercase font-body">What We Offer</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-4">
              Every Service Your Home Needs
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              From routine maintenance to urgent repairs — we have a specialist for every situation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 hover-lift cursor-pointer group border border-border hover:border-[#d4a832]/40"
                onClick={() => { setSelectedService(s.title); scrollTo("booking"); }}
              >
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4a832]/10 transition-colors">
                  <Icon name={s.icon} size={22} className="text-navy group-hover:text-amber-700 transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">{s.desc}</p>
                <span className="text-xs font-semibold text-amber-700 bg-[#d4a832]/10 px-2 py-1 rounded-full">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section id="providers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#d4a832]/15 text-amber-700 border-[#d4a832]/30 text-xs tracking-widest uppercase font-body">Our Team</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-4">
              Meet Top Professionals
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Background-checked, licensed, and rated by thousands of homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {providers.map((p) => (
              <div key={p.name} className="bg-cream rounded-2xl p-6 hover-lift text-center border border-border">
                <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto mb-4 text-[#d4a832] font-display text-xl font-semibold">
                  {p.avatar}
                </div>
                <Badge className={`mb-3 text-xs ${p.badge === "Elite" ? "bg-[#d4a832] text-navy border-[#d4a832]" : "bg-navy/10 text-navy border-navy/20"}`}>
                  {p.badge}
                </Badge>
                <h3 className="font-display text-lg font-semibold text-navy">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.role}</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={13} className={i < Math.floor(p.rating) ? "text-[#d4a832] fill-current" : "text-border"} />
                  ))}
                  <span className="text-sm font-semibold text-navy ml-1">{p.rating}</span>
                </div>
                <p className="text-xs text-muted-foreground">{p.jobs} jobs completed</p>
                <Button
                  size="sm"
                  className="mt-4 w-full bg-navy text-[#d4a832] hover:bg-navy/90 text-xs"
                  onClick={() => scrollTo("booking")}
                >
                  Book {p.name.split(" ")[0]}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / BOOKING */}
      <section id="booking" className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a832]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4a832]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#d4a832]/20 text-[#d4a832] border-[#d4a832]/30 text-xs tracking-widest uppercase font-body">Simple Process</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
              Book in 4 Easy Steps
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">From choosing your service to welcoming your professional — it takes under 3 minutes.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {steps.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="relative inline-block mb-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto bg-white/10 border border-white/20">
                    <Icon name={step.icon} size={24} className="text-white/70" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy border-2 border-[#d4a832] flex items-center justify-center text-[#d4a832] text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{step.label}</h3>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Booking form */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-semibold text-white mb-6 text-center">Request a Service</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#d4a832]"
              />
              <Input
                placeholder="Phone Number"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#d4a832]"
              />
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-[#d4a832]"
              >
                <option value="" className="bg-[#1a2540]">Select a Service</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title} className="bg-[#1a2540]">{s.title}</option>
                ))}
              </select>
              <Input
                type="date"
                className="bg-white/10 border-white/20 text-white focus:border-[#d4a832]"
              />
              <Textarea
                placeholder="Describe your issue or request..."
                rows={3}
                className="col-span-2 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#d4a832] resize-none"
              />
            </div>

            <div className="mt-4 mb-6">
              <p className="text-white/50 text-xs mb-3 text-center">Accepted payment methods</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {paymentMethods.map((m) => (
                  <span key={m} className="text-xs bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white/70">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <Button
              className="w-full bg-[#d4a832] text-navy hover:bg-[#c49a28] font-semibold h-12 text-base"
            >
              <Icon name="Lock" size={16} className="mr-2" />
              Confirm & Book Securely
            </Button>
            <p className="text-white/30 text-xs text-center mt-3">
              256-bit SSL encryption · No charges until service is confirmed
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#d4a832]/15 text-amber-700 border-[#d4a832]/30 text-xs tracking-widest uppercase font-body">Client Stories</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-4">
              What Homeowners Say
            </h2>
            <div className="flex items-center justify-center gap-1 text-[#d4a832]">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={18} className="fill-current" />
              ))}
              <span className="ml-2 font-semibold text-navy text-lg">4.9</span>
              <span className="text-muted-foreground text-sm ml-1">/ 3,800+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-cream rounded-2xl p-6 border border-border hover-lift">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, j) => (
                    <Icon key={j} name="Star" size={13} className="text-[#d4a832] fill-current" />
                  ))}
                </div>
                <p className="text-navy/80 text-base leading-relaxed mb-5 font-light italic font-display">
                  "{r.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-navy text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.service}</div>
                  </div>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE / BECOME A PRO */}
      <section id="profile" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#d4a832]/15 text-amber-700 border-[#d4a832]/30 text-xs tracking-widest uppercase font-body">For Professionals</Badge>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mb-6 leading-tight">
                Grow Your Business with HomeServe
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Join 1,200+ professionals earning more by connecting with homeowners in their area. Set your rates, manage bookings, and get paid fast.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: "TrendingUp", text: "Earn up to $8,000/month with full schedule" },
                  { icon: "Users", text: "Access a pool of 50,000+ homeowners" },
                  { icon: "BadgeCheck", text: "Build your reputation with verified reviews" },
                  { icon: "Wallet", text: "Weekly automatic payouts — no waiting" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center shrink-0">
                      <Icon name={icon} size={16} className="text-[#d4a832]" />
                    </div>
                    <span className="text-navy text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-navy text-[#d4a832] hover:bg-navy/90 font-semibold px-8 h-12">
                Apply as a Professional
              </Button>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-navy mb-6">Create Your Profile</h3>
              <div className="space-y-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Trade / Specialty" />
                <Input placeholder="Years of Experience" type="number" />
                <Input placeholder="Your Location" />
                <Input placeholder="License Number (if applicable)" />
                <Button className="w-full bg-[#d4a832] text-navy hover:bg-[#c49a28] font-semibold h-12">
                  Get Started Free
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Free to join · No hidden fees · Paid weekly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#d4a832]/20 text-[#d4a832] border-[#d4a832]/30 text-xs tracking-widest uppercase font-body">Get in Touch</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
              We're Here to Help
            </h2>
            <p className="text-white/60 max-w-lg mx-auto">
              Questions, partnerships, or feedback — our team typically responds within 2 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "Phone", title: "Call Us", info: "+1 (800) 555-0198", sub: "Mon–Fri, 8am–8pm" },
              { icon: "Mail", title: "Email Us", info: "hello@homeserve.com", sub: "Replies within 2 hours" },
              { icon: "MapPin", title: "Visit Us", info: "New York, NY", sub: "Serving 40+ cities" },
            ].map(({ icon, title, info, sub }) => (
              <div key={title} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-[#d4a832]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={icon} size={22} className="text-[#d4a832]" />
                </div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-[#d4a832] text-sm font-medium">{info}</p>
                <p className="text-white/40 text-xs mt-1">{sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 max-w-xl mx-auto">
            <h3 className="font-display text-2xl font-semibold text-white mb-6 text-center">Send a Message</h3>
            <div className="space-y-4">
              <Input placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#d4a832]" />
              <Input placeholder="Email Address" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#d4a832]" />
              <Textarea placeholder="How can we help?" rows={4} className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#d4a832] resize-none" />
              <Button className="w-full bg-[#d4a832] text-navy hover:bg-[#c49a28] font-semibold h-12">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d1420] py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#d4a832]/20 rounded-lg flex items-center justify-center">
              <Icon name="Home" size={14} className="text-[#d4a832]" />
            </div>
            <span className="font-display text-lg text-white font-medium">HomeServe</span>
          </div>
          <p className="text-white/30 text-sm">© 2026 HomeServe. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Support"].map((link) => (
              <button key={link} className="text-white/40 text-sm hover:text-[#d4a832] transition-colors">
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}