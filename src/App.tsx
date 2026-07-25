import { useState, useEffect } from 'react';

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const Check = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const PHONE = '+917845083016';
const PHONE_DISPLAY = '+91 78450 83016';
const EMAIL = 'Nurmuhamed.mohideen@gmail.com';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <nav className="flex items-center justify-between h-[72px] md:h-[84px]">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-gold/20 to-gold/60 flex items-center justify-center shadow-lg shadow-gold/10">
                <span className="font-display text-xl md:text-2xl text-goldDark font-semibold tracking-tight leading-none">KP</span>
              </div>
              <div className="leading-tight">
                <span className="block font-display text-base md:text-xl text-ink tracking-tight">Konkan Palace</span>
                <span className="block text-[10px] md:text-xs text-inkMuted tracking-[0.15em] uppercase font-semibold">Lodge &mdash; Chiplun</span>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="px-4 py-2 rounded-full text-sm font-medium text-inkSoft hover:text-ink hover:bg-white/50 transition-colors">{l.label}</a>
              ))}
            </div>
            <div className="hidden md:block">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-gold to-goldDark text-white shadow-xl shadow-gold/20 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-300">
                <span>Call Now</span>
                <Phone />
              </a>
            </div>
            <button className="md:hidden p-2 rounded-xl hover:bg-white/40 transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </nav>
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pb-6 pt-2 flex flex-col gap-1 glass-card-strong rounded-2xl p-2 shadow-2xl shadow-black/5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-base font-medium text-inkSoft hover:text-ink hover:bg-white/50 transition-colors">{l.label}</a>
              ))}
              <a href={`tel:${PHONE}`} className="mt-2 mx-2 px-5 py-3 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-gold to-goldDark text-white shadow-lg shadow-gold/20">Call Now</a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10" />
        <img src="images/exterior/unnamed (4).jpg" alt="Konkan Palace Lodge" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.5)' }} />
        <div className="mx-auto max-w-6xl px-5 md:px-8 relative z-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">Open 24/7 &middot; Behind Juna Bus Stand</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] tracking-tight text-white mb-6">
              Konkan <br />
              <span className="gold-gradient-text italic font-light">Palace Lodge</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-8">
              Clean, affordable non-AC rooms in the heart of Chiplun. Free WiFi, 24/7 hot water, and warm hospitality — right behind Juna Bus Stand.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-gold to-goldDark text-white shadow-2xl shadow-gold/30 hover:-translate-y-1 transition-all duration-300">
                <Phone /> Book Now &middot; {PHONE_DISPLAY}
              </a>
              <a href="#rooms" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white/20 transition-all">View Rooms &darr;</a>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: <MapPin className="text-gold" />, text: 'Central Chiplun' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>, text: '24/7 Hot Water' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 8.6 16 6 16 6s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 8v8c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>, text: 'Free Parking' },
              ].map((chip) => (
                <span key={chip.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/15">
                  {chip.icon}{chip.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-goldDark mb-4">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-4">Comfort That <span className="italic font-light gold-gradient-text">Fits Your Budget</span></h2>
            <p className="text-inkMuted max-w-xl mx-auto">Everything you need for a comfortable stay in Chiplun — at the most affordable prices.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Clean Non-AC Rooms', desc: 'Well-ventilated rooms with fans, fresh linens, and daily housekeeping for a comfortable stay.', icon: '🏠' },
              { title: 'Central Location', desc: 'Behind Juna Bus Stand, Bazaarpeth. Walking distance to market, eateries, and local transport.', icon: '📍' },
              { title: '24/7 Hot Water', desc: 'Reliable hot water supply around the clock with full power backup for uninterrupted stays.', icon: '🚿' },
              { title: 'Free Parking & WiFi', desc: 'Ample on-site parking for cars and bikes plus complimentary high-speed WiFi for all guests.', icon: '🅿️' },
            ].map((item) => (
              <div key={item.title} className="group block glass-card rounded-[1.75rem] p-7 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(28,28,28,0.1)] transition-all duration-300">
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="font-display text-xl text-ink mb-2.5">{item.title}</h3>
                <p className="text-sm text-inkMuted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-goldDark mb-4">Accommodation</span>
            <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.05] mb-5">Affordable <span className="italic font-light gold-gradient-text">Non-AC Rooms</span></h2>
            <p className="text-inkMuted max-w-xl mx-auto">Choose from our clean, well-ventilated rooms — perfect for solo travelers, couples, and families.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { img: 'images/rooms/unnamed.jpg', alt: 'Standard Single Room', badge: '1 Guest', name: 'Standard Single Room', price: '550', features: ['Single bed with fresh linens', 'Fan & attached bathroom', 'City view & work desk', 'Free WiFi'], rating: '4.8', stars: 5 },
              { img: 'images/rooms/unnamed (1).jpg', alt: 'Standard Double Room', badge: '2 Guests', name: 'Standard Double Room', price: '700', features: ['Double bed with fresh linens', 'Fan & attached bathroom', 'City view & wardrobe', 'Free WiFi'], rating: '4.6', stars: 5 },
              { img: 'images/rooms/unnamed (2).jpg', alt: 'Family Room', badge: '3 Guests', name: 'Family Room (Triple Bed)', price: '1300', features: ['Three beds with fresh linens', 'Fan & attached bathroom', 'Balcony & city view', 'Free WiFi'], rating: '4.5', stars: 5 },
            ].map((room) => (
              <div key={room.name} className="glass-card rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 flex flex-col">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img src={room.img} alt={room.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/80 backdrop-blur-md text-goldDark shadow-sm">{room.badge}</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: room.stars }).map((_, i) => <Star key={i} />)}
                    <span className="text-xs text-inkMuted ml-1">{room.rating}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-[1.75rem] text-ink mb-3">{room.name}</h3>
                  <ul className="space-y-2 mb-6 text-sm text-inkSoft">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5"><Check className="text-gold shrink-0" /><span>{f}</span></li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 border-t border-white/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-inkMuted">Starting at</span>
                      <span className="block font-display text-2xl text-ink">₹{room.price}</span>
                      <span className="text-[11px] text-inkMuted">per night</span>
                    </div>
                    <a href={`tel:${PHONE}`} className="px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-gold to-goldDark text-white shadow-lg shadow-gold/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">Book Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-goldDark mb-4">Where We Are</span>
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-5">In the Heart of <span className="italic font-light gold-gradient-text">Chiplun</span></h2>
                <p className="text-inkSoft leading-relaxed mb-6">Konkan Palace Lodge sits at <strong>1648, Behind Juna Bus Stand, Bazaarpeth</strong> — a prime central spot within walking distance of transit hubs, local markets, and attractions across Ratnagiri district.</p>
                <div className="glass-card rounded-2xl p-6 shadow-lg shadow-black/5 mb-6">
                  <h4 className="font-display text-xl text-ink mb-5">Nearby Distances</h4>
                  <div className="space-y-4">
                    {[
                      { label: 'Juna Bus Stand', value: '0 min walk', sub: 'Right behind the lodge' },
                      { label: 'Chiplun Railway Station', value: '8 min drive', sub: 'Approx. 2.5 km' },
                      { label: 'Parshuram Temple', value: '12 min drive', sub: 'Approx. 6 km' },
                      { label: 'Sawatsada Waterfall', value: '25 min drive', sub: 'Approx. 15 km' },
                      { label: 'Bazaarpeth Market', value: '2 min walk', sub: 'Fresh produce & local shops' },
                    ].map((d) => (
                      <div key={d.label} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold/15 to-gold/30 flex items-center justify-center text-goldDark shrink-0 shadow-md shadow-gold/10"><MapPin /></div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-ink">{d.label}</span>
                            <span className="text-xs font-bold text-goldDark bg-gold/10 px-2 py-0.5 rounded-full">{d.value}</span>
                          </div>
                          <span className="text-xs text-inkMuted">{d.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="glass-card rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5 h-full flex flex-col">
                <div className="flex-1 min-h-[400px]">
                  <iframe
                    title="Konkan Palace Lodge Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.4!2d73.512511!3d17.5322482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc209007ae52897%3A0xbf414be514bde964!2sKonkan%20Palace%20Lodge!5e0!3m2!1sen!2sin!4v1"
                    className="w-full h-full border-0"
                    style={{ minHeight: '400px' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6 md:p-8 bg-white/70 backdrop-blur-md border-t border-white/40">
                  <h3 className="font-display text-xl text-ink mb-1">Konkan Palace Lodge</h3>
                  <p className="text-sm text-inkSoft">1648, Behind Juna Bus Stand, Bazaarpeth, Chiplun, Maharashtra 415605</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a href="https://www.google.com/maps/dir//Konkan+Palace+Lodge+Chiplun" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-gold to-goldDark text-white shadow-md shadow-gold/15 hover:shadow-lg hover:-translate-y-0.5 transition-all"><MapPin /> Get Directions</a>
                    <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-ink text-white hover:bg-ink/90 shadow-md hover:-translate-y-0.5 transition-all"><Phone /> Call Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] glass-card-strong shadow-2xl shadow-black/5">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-gold/10 to-gold/20 blur-[80px] -translate-y-1/3 translate-x-1/4" />
            <div className="relative z-10 px-8 md:px-14 py-14 md:py-20 text-center">
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-5">Book Direct. <br /><span className="italic font-light gold-gradient-text">Best Rates Guaranteed.</span></h2>
              <p className="text-inkSoft max-w-lg mx-auto mb-8 text-base md:text-lg">Call or WhatsApp us for instant confirmation and the lowest prices. No middleman, no extra charges.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base md:text-lg font-bold bg-gradient-to-r from-gold to-goldDark text-white shadow-2xl shadow-gold/30 hover:-translate-y-1 transition-all duration-300"><Phone /> Call {PHONE_DISPLAY}</a>
                <a href={`https://wa.me/${PHONE.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base md:text-lg font-bold bg-white border-2 border-gold/30 text-ink hover:bg-gold/5 hover:-translate-y-1 transition-all duration-300">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="border-t border-white/40 bg-white/40 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-8">
            <div className="md:col-span-5">
              <a href="#home" className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/60 flex items-center justify-center shadow-lg shadow-gold/10">
                  <span className="font-display text-xl text-goldDark font-semibold tracking-tight">KP</span>
                </div>
                <div className="leading-tight">
                  <span className="block font-display text-xl text-ink tracking-tight">Konkan Palace</span>
                  <span className="block text-[10px] text-inkMuted tracking-[0.15em] uppercase font-semibold">Lodge &mdash; Chiplun</span>
                </div>
              </a>
              <p className="text-sm text-inkSoft leading-relaxed max-w-sm mb-6">Clean, affordable non-AC rooms in the heart of Chiplun. We welcome families, business travelers, pilgrims, and transit guests with comfortable rooms and warm service.</p>
              <div className="flex gap-2">
                <a href={`tel:${PHONE}`} aria-label="Call" className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/15 to-gold/25 flex items-center justify-center text-goldDark hover:text-white hover:bg-gold transition-all"><Phone /></a>
                <a href={`https://wa.me/${PHONE.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-xl bg-gradient-to-br from-ink/5 to-ink/10 flex items-center justify-center text-ink hover:text-white hover:bg-ink transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="font-display text-lg text-ink mb-5">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-inkMuted hover:text-goldDark font-medium transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-display text-lg text-ink mb-5">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="text-goldDark shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-ink">Address</span>
                    <span className="text-inkMuted">1648, Behind Juna Bus Stand, Bazaarpeth, Chiplun, Maharashtra 415605</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-goldDark shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-ink">Phone</span>
                    <a href={`tel:${PHONE}`} className="text-inkMuted hover:text-goldDark transition-colors">{PHONE_DISPLAY}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A6882E" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div>
                    <span className="block font-semibold text-ink">Email</span>
                    <a href={`mailto:${EMAIL}`} className="text-inkMuted hover:text-goldDark transition-colors">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-goldDark shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-ink">Business Hours</span>
                    <span className="text-inkMuted">Open 24 hours &middot; 7 days a week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-white/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-inkMuted">
            <p>&copy; {new Date().getFullYear()} Konkan Palace Lodge. All rights reserved.</p>
            <p>Built with care for travelers visiting Chiplun, Maharashtra.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href={`tel:${PHONE}`} className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-goldDark text-white shadow-2xl shadow-gold/30 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="Call Now">
          <Phone />
        </a>
        <a href={`https://wa.me/${PHONE.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20 flex items-center justify-center text-xl hover:scale-110 transition-transform" title="WhatsApp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </div>
  );
}