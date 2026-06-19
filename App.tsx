import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Star,
  Activity, 
  Zap,
  Target,
  Menu, 
  X,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  ShieldCheck,
  Home as HomeIcon,
  Building,
  Briefcase
} from 'lucide-react';
import { cn } from './lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Components ---

const PilatesSlider = () => {
  const slides = [
    { 
      img: "https://lh3.googleusercontent.com/d/177BntrnlQTMMkpvpxIT6ScWxXIJhK8Jy=s1200",
      title: "KLİNİK PİLATES",
      subtitle: "Vücudunuzu esnetin, merkezinizi güçlendirin."
    },
    { 
      img: "https://lh3.googleusercontent.com/d/1vRSIjLFmAWMrtmWZs7PMNnpkpfoHDARt=s1200",
      title: "EMS VE TEKNOLOJİ",
      subtitle: "Geleceğin antrenman sistemleri ile tanışın."
    },
    { 
      img: "https://lh3.googleusercontent.com/d/1d2PCvv9nKZftS6jUWjEexMjknfqPjH9k=s1200",
      title: "BİOREZONANS",
      subtitle: "Vücut frekanslarını dengeleyerek iştah kontrolü."
    }
  ];

  return (
    <div className="h-[60vh] md:h-[80vh] w-full relative group select-none">
      <Swiper
        key="pilates-slider"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={800}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full overflow-hidden">
              <img 
                src={slide.img} 
                className="h-full w-full object-cover transition-transform duration-700" 
                alt={slide.title} 
                referrerPolicy="no-referrer" 
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = `https://picsum.photos/seed/${slide.title}/1920/1080`;
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl"
                >
                  {slide.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  className="text-lg md:text-xl text-brand-neon font-bold uppercase tracking-widest drop-shadow-lg"
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' }) => {
  const variants = {
    primary: 'bg-brand-neon text-black hover:bg-opacity-90 shadow-[0_0_20px_rgba(57,255,20,0.3)]',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    ghost: 'text-white hover:bg-white/5'
  };

  return (
    <button 
      className={cn(
        'px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm', className)} {...props}>
    {children}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:scale-110 transition-transform">
            <img 
              src="https://lh3.googleusercontent.com/d/1AXuRtmnSbETxcPl2ADUPyAdle2SHvq3g" 
              alt="Virafit Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/virafit-logo/100/100";
              }}
            />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">VİRAFİT</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link 
            to="/" 
            className={cn(
              "text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none select-none cursor-pointer",
              pathname === "/" ? "text-brand-neon" : "text-white hover:text-brand-neon"
            )}
          >
            ANASAYFA
          </Link>
          <Link 
            to="/services" 
            className={cn(
              "text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none select-none cursor-pointer",
              pathname === "/services" ? "text-brand-neon" : "text-white hover:text-brand-neon"
            )}
          >
            HİZMETLER
          </Link>
          <Link 
            to="/before-after" 
            className={cn(
              "text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none select-none cursor-pointer",
              pathname === "/before-after" ? "text-brand-neon" : "text-white hover:text-brand-neon"
            )}
          >
            ÖNCESİ SONRASI
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none select-none cursor-pointer",
              pathname === "/about" ? "text-brand-neon" : "text-white hover:text-brand-neon"
            )}
          >
            HAKKIMIZDA
          </Link>
          <Link 
            to="/blog" 
            className={cn(
              "text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none select-none cursor-pointer",
              pathname === "/blog" ? "text-brand-neon" : "text-white hover:text-brand-neon"
            )}
          >
            BLOG
          </Link>
          <Link 
            to="/appointment" 
            className="ml-4 px-6 py-2.5 bg-[#ffd200] hover:bg-[#e6bd00] text-black text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,210,0,0.25)]"
          >
            RANDEVU AL
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 p-8">
              <Link to="/" className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-neon" onClick={() => setIsMobileMenuOpen(false)}>ANASAYFA</Link>
              <Link to="/services" className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-neon" onClick={() => setIsMobileMenuOpen(false)}>HİZMETLER</Link>
              <Link to="/before-after" className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-neon" onClick={() => setIsMobileMenuOpen(false)}>ÖNCESİ SONRASI</Link>
              <Link to="/about" className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-neon" onClick={() => setIsMobileMenuOpen(false)}>HAKKIMIZDA</Link>
              <Link to="/blog" className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-neon" onClick={() => setIsMobileMenuOpen(false)}>BLOG</Link>
              <Link 
                to="/appointment" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-[#ffd200] hover:bg-[#e6bd00] text-black font-black text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(255,210,0,0.2)]"
              >
                RANDEVU AL (BOOK NOW)
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <ResultsSection />
      <Testimonials />
      <HomeServiceSection />
    </main>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-brand-neon font-black uppercase tracking-[0.3em] text-xs mb-4">Sonuç Odaklı Yaklaşım</p>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-12 text-white">
          ÖNCE <span className="text-brand-pink">SONUÇ</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/[0.02]">
            <h3 className="text-4xl font-black text-brand-neon mb-2">%93</h3>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Sigara Bırakma Başarısı</p>
          </Card>
          <Card className="bg-white/[0.02]">
            <h3 className="text-4xl font-black text-brand-pink mb-2">25 DK</h3>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">EMS Antrenman Süresi</p>
          </Card>
          <Card className="bg-white/[0.02]">
            <h3 className="text-4xl font-black text-white mb-2">KİŞİYE ÖZEL</h3>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Dönüşüm Planı</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Ayşe Y.", text: "EMS ile 2 ayda inanılmaz bir sıkılaşma yaşadım. Sinem Hanım'ın ilgisi harika.", rating: 5 },
    { name: "Mehmet K.", text: "Biorezonans ile sigarayı tek seansta bıraktım. Hiç zorlanmadım, herkese tavsiye ederim.", rating: 5 },
    { name: "Selin B.", text: "Tatlı krizlerim Biorezonans sayesinde bitti. Kendimi çok daha enerjik hissediyorum.", rating: 5 },
  ];

  return (
    <section className="py-24 px-6 bg-brand-surface/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center text-white">DANIŞAN YORUMLARI</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Card key={i} className="flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} className="fill-brand-neon text-brand-neon" />)}
              </div>
              <p className="text-gray-300 italic">"{review.text}"</p>
              <p className="font-bold text-white">- {review.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeServiceSection = () => {
  return (
    <section className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-neon font-black uppercase tracking-[0.3em] text-xs">
                <ShieldCheck size={16} />
                <span>Güvenilir & Profesyonel</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                EVİNİZİN <br /> KONFORUNDA <br />
                <span className="text-brand-neon">HİZMET ALIN</span>
              </h2>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Tüm seanslarımızı kendi evinizin veya ofisinizin rahatlığında gerçekleştirebiliriz. Size en uygun ortamda, en yüksek verimi hedefliyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3 p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-neon/30 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 flex items-center justify-center text-brand-neon group-hover:scale-110 transition-transform">
                  <HomeIcon size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white">Evde</span>
              </div>
              <div className="flex flex-col gap-3 p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-brand-neon/30 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 flex items-center justify-center text-brand-neon group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white">Ofiste</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/appointment">
                <Button className="group">
                  RANDEVU AL
                  <Activity className="group-hover:animate-pulse" size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Image Container with decorative borders */}
            <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-[4/5] border-2 border-white/10 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1cMc9DjYTWf2CfD5wahX0h5TU4Vs6UpCY=s1024" 
                className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-1000" 
                alt="Home Service"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-neon flex items-center justify-center text-black">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Profesyonel Ekip</p>
                  <p className="text-gray-300 text-xs uppercase tracking-widest">Sertifikalı Uzmanlar</p>
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-neon/20 rounded-[4rem] -z-10" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-brand-pink/20 rounded-[4rem] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-24">
      <Services />
      <DetailedServices />
    </div>
  );
};

const DetailedServices = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Biorezonans */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-black text-brand-neon uppercase mb-6">MORA BİOREZONANS</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-xl font-bold text-white">Kendini Zorlamadan Değişim Mümkün</p>
              <p>Diyetlere başlayıp yarım bırakıyor musun? Tatlı krizleri ve sürekli açlık hissi seni zorluyor mu? Mora biorezonans ile vücudunun dengesini yeniden kurarak, kilo verme sürecini daha kolay ve sürdürülebilir hale getirebilirsin.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-brand-neon font-bold text-sm mb-1">İştah Kontrolü</p>
                  <p className="text-xs text-gray-400">Tatlı ve karbonhidrat isteğini azaltır.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-brand-neon font-bold text-sm mb-1">Gıda Silme</p>
                  <p className="text-xs text-gray-400">Bağımlılık yapan gıdalara karşı isteği azaltır.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden bg-brand-dark border border-white/10 shadow-2xl">
            <img src="https://lh3.googleusercontent.com/d/1wa2knjaID3KeixceXBG2vQfrqbFu3lKq=s2048" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000" alt="Biorezonans" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Sigara Bırakma */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="h-[350px] md:h-[500px] rounded-[3rem] overflow-hidden bg-brand-dark border border-white/10 shadow-2xl">
            <img src="https://lh3.googleusercontent.com/d/1_-Gv34zD0uJbMAiJFaE4AeelYABemTG9=s2048" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000" alt="Sigara Bırakma" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-brand-neon uppercase mb-6">SİGARA BIRAKMA</h2>
            <div className="space-y-4 text-gray-300">
              <h4 className="text-xl font-bold text-white mb-2">Sigara Bırakmak Artık Daha Kolay</h4>
              <p>Mora biorezonans ile sigara isteğini azaltmaya ve bırakma sürecini daha konforlu hale getirmeye destek oluyoruz. %93 başarı oranı ile tek seansta özgürlüğe adım atın.</p>
              <ul className="space-y-2 pt-4">
                <li className="flex items-center gap-2"><Zap size={16} className="text-brand-neon" /> Tek seansta etkili sonuç</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-brand-neon" /> Yoksunluk belirtilerini minimize eder</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-brand-neon" /> Tamamen doğal ve yan etkisiz</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Meridyen Terapi */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-black text-brand-neon uppercase mb-6">MERİDYEN TERAPİ</h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-xl font-bold text-white">Enerji Akışınızı Dengeleyin</p>
              <p>Vücudun enerji kanallarını (meridyenleri) özel bir teknoloji ile uyararak blokajları açan, ağrıları hafifleten ve genel iyilik halini artıran modern bir terapi yöntemidir.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-brand-neon font-bold text-sm mb-1">Ağrı Yönetimi</p>
                  <p className="text-xs text-gray-400">Kas ve eklem ağrılarında hızlı rahatlama.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-brand-neon font-bold text-sm mb-1">Detoks Etkisi</p>
                  <p className="text-xs text-gray-400">Lenfatik drenajı destekler.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[350px] md:h-[500px] rounded-[3rem] overflow-hidden bg-brand-dark border border-white/10 shadow-2xl">
            <img src="https://lh3.googleusercontent.com/d/1a1sI8zozu4rof3z1mPp5K7yfbT2knsJV=s2048" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Meridyen Terapi" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Klinik Pilates */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="h-[350px] md:h-[500px] rounded-[3rem] overflow-hidden bg-brand-dark border border-white/10 shadow-2xl">
            <img src="https://lh3.googleusercontent.com/d/1kj1iFpR07885a46oPEzxCZ9hgmHyPDYs=s2048" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Klinik Pilates" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-brand-pink uppercase mb-6">KLİNİK PİLATES</h2>
            <div className="space-y-4 text-gray-300">
              <h4 className="text-xl font-bold text-white mb-2">Güçlü Merkez, Sağlıklı Beden</h4>
              <p>Klinik pilates, duruş bozukluklarını düzeltmek, esnekliği artırmak ve merkez bölge kaslarını güçlendirmek için uzman eşliğinde uygulanan bir egzersiz sistemidir.</p>
              <ul className="space-y-2 pt-4">
                <li className="flex items-center gap-2"><Zap size={16} className="text-brand-pink" /> Duruş (Postür) analizi</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-brand-pink" /> Omurga sağlığı desteği</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-brand-pink" /> Kişiye özel egzersiz planı</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EMS */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="h-[350px] md:h-[600px] rounded-[3rem] overflow-hidden bg-brand-dark border border-white/10 shadow-2xl">
            <img src="https://lh3.googleusercontent.com/d/1ZDrXBv_mChqbjR78yADI4VLjdNyXcORR=s2048" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="EMS" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black text-brand-pink uppercase mb-6">EMS ANTRENMAN</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-xl font-bold text-white">EMS Nedir ve Nasıl Çalışır?</p>
                <p>EMS (Elektriksel Kas Stimülasyonu), kasları dışarıdan gönderilen düşük frekanslı elektrik sinyalleri ile uyararak kasılmalarını sağlayan gelişmiş bir teknolojidir. Sadece 25 dakika sürer ve bu da 4 saatlik geleneksel kuvvet antrenmanından daha etkilidir.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Zap size={16} className="text-brand-pink" /> Kısa sürede yüksek kas aktivasyonu</li>
                  <li className="flex items-center gap-2"><Zap size={16} className="text-brand-pink" /> Derin kas gruplarını çalıştırır</li>
                  <li className="flex items-center gap-2"><Zap size={16} className="text-brand-pink" /> Eklemleri zorlamadan güçlenme</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-brand-pink font-bold text-sm mb-1 uppercase">Faydaları</p>
                <ul className="text-[10px] text-gray-400 space-y-1">
                  <li>• Kas Güçlendirme</li>
                  <li>• Vücut Şekillendirme</li>
                  <li>• Metabolizma Hızlandırma</li>
                  <li>• Duruş İyileştirme</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-brand-pink font-bold text-sm mb-1 uppercase">Sıkça Sorulanlar</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-white font-bold">Ağrılı mı?</p>
                    <p className="text-[9px] text-gray-500">Hayır, yoğun ama konforludur.</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white font-bold">Sonuç?</p>
                    <p className="text-[9px] text-gray-500">8-12 seans düzenli kullanım.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-brand-pink/5 rounded-3xl border border-brand-pink/20">
              <p className="text-white font-bold mb-2 uppercase text-sm">Değişim ve Şekillenme</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                EMS doğrudan yağ yakmaz ancak kas kütlesini artırarak metabolizmayı hızlandırır. Karın, bel, kalça ve bacak bölgelerinde hızlı sıkılaşma sağlar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24">
      <AboutSection />
    </div>
  );
};

const StorySection = () => {
  return (
    <section className="py-24 px-6 bg-brand-surface/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase mb-8 text-white">HİKAYEMİZ</h2>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Virafit, herkese aynı programı uygulayan bir spor salonu değil; bedeni anlayan, değişimi planlayan kişiye özel bir dönüşüm stüdyosudur. Her beden farklıdır. Bu yüzden Virafit’te her program, sana özel olarak planlanır.
          </p>
          <p>
            Burası bir spor salonu değil… Beden değişimi ve dengeleme stüdyosu. Saatlerce spor yapmak zorunda değilsin. Önemli olan doğru kas aktivasyonu ve doğru planlama.
          </p>
          <p className="text-brand-neon font-bold">
            Virafit ile bedenini yeniden keşfet, gücünü geri kazan.
          </p>
        </div>
      </div>
    </section>
  );
};

const BeforeAfterPage = () => {
  const transformations = [
    { id: "1U-c_o63shd3G8S9Go0auXefcsha96B3T", title: "Dönüşüm 01", category: "Bölgesel İncelme" },
    { id: "1DfxWtKThW18bRuFMA80v0r3FOfPy4vDS", title: "Dönüşüm 02", category: "Sıkılaşma" },
    { id: "1B5JgUmIk5veir7jCvWbLKWRebqi9d_I-", title: "Dönüşüm 03", category: "Kas Gelişimi" },
    { id: "1hA-pfEn7s4JeCE24yyCaiO2oxofrAAiw", title: "Dönüşüm 04", category: "Postür Düzeltme" },
    { id: "136Ms-AK2UtiVkvmB5TPYTzHSmtgSG6aJ", title: "Dönüşüm 05", category: "EMS Sonuç" },
    { id: "1q9Xl4fcP0gfjyS8qzrc2lwyn39UvaCkB", title: "Dönüşüm 06", category: "Kilo Kontrolü" },
    { id: "1o2UTpkIdjbSJnYw8Ne1dWeHLdAeRxEM6", title: "Dönüşüm 07", category: "Vücut Şekillendirme" },
    { id: "1BLaS4I0TdORE-eeAku8CqL2wgP0lciTY", title: "Dönüşüm 08", category: "Total Değişim" },
  ];

  return (
    <div className="relative pt-32 px-6 pb-32 min-h-screen bg-brand-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-radial from-brand-pink/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-brand-pink/50" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-pink">Başarı Hikayeleri</span>
            <div className="h-[1px] w-12 bg-brand-pink/50" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-serif italic text-center mb-12 tracking-tight leading-none"
          >
            Öncesi <span className="text-brand-pink font-sans not-italic font-black">&</span> Sonrası
          </motion.h1>
        </div>

        {/* Slider Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group before-after-slider"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{ 
              delay: 3500, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={1200}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="pb-20"
          >
            {transformations.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="group relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-brand-dark transition-all duration-700 hover:border-brand-pink/30">
                  <img 
                    src={`https://lh3.googleusercontent.com/d/${item.id}=s1024`}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-[1.1] group-hover:scale-125"
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-[1px] w-8 bg-brand-neon" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-neon">{item.category}</span>
                    </div>
                    <h3 className="text-3xl font-serif italic text-white">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-pink hover:border-brand-pink transition-all z-10 hidden xl:flex">
            ←
          </button>
          <button className="swiper-button-next-custom absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-pink hover:border-brand-pink transition-all z-10 hidden xl:flex">
            →
          </button>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-brand-pink/5 blur-[100px] rounded-full" />
          <div className="relative p-12 md:p-20 rounded-[4rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent" />
            
            <span className="text-xs font-black uppercase tracking-[0.5em] text-brand-pink mb-8 block">Dönüşüm Sırası Sende</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-8 leading-tight">
              Kendi hikayeni <br /> <span className="text-brand-neon font-sans not-italic font-black uppercase">bizimle yaz</span>
            </h2>
            
            <Link 
              to="/appointment" 
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full overflow-hidden transition-all hover:pr-16 active:scale-95"
            >
              <span className="relative z-10">Randevu Al</span>
              <div className="absolute right-6 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                →
              </div>
              <div className="absolute inset-0 bg-brand-neon translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        .before-after-slider .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
        }
        .before-after-slider .swiper-pagination-bullet-active {
          background: #FF007F !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

const BlogPage = () => {
  const posts = [
    { title: "Biorezonans ile Sigara Bırakma", date: "20 Mart 2026", excerpt: "Sigara bağımlılığından kurtulmak artık çok daha kolay. Mora terapi ile tek seansta özgürlüğe adım atın." },
    { title: "EMS Antrenmanının Avantajları", date: "15 Mart 2026", excerpt: "Haftada sadece 25 dakika ayırarak nasıl fit kalabilirsiniz? EMS teknolojisinin detayları." },
    { title: "Sağlıklı Beslenme İpuçları", date: "10 Mart 2026", excerpt: "Diyetisyenimizden kilo verme sürecinizi hızlandıracak altın öneriler." },
  ];

  return (
    <div className="pt-32 px-6 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-16 text-white">VİRAFİT <span className="text-brand-neon">BLOG</span></h1>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="hover:border-brand-neon transition-colors cursor-pointer group">
              <p className="text-xs text-brand-neon font-bold mb-2">{post.date}</p>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-brand-neon transition-colors uppercase">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <p className="text-white font-bold text-xs uppercase tracking-widest">Devamını Oku →</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const AppointmentPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    howHear: [] as string[],
    interestedServices: [] as string[],
    goals: [] as string[],
    challenges: [] as string[],
    pastExperience: [] as string[],
    importance: 10,
    timeframe: [] as string[],
    additionalInfo: '',
    smsConsentMarketing: true,
    smsConsentTransactional: true
  });

  const toggleCheckbox = (field: 'howHear' | 'interestedServices' | 'goals' | 'challenges' | 'pastExperience' | 'timeframe', value: string) => {
    setForm((prev) => {
      const current = prev[field] || [];
      const updated = current.includes(value)
        ? current.filter((v: string) => v !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.phone) {
      alert("Lütfen ad soyad, e-posta ve telefon alanlarını zorunlu olarak doldurun.");
      return;
    }

    const whatsappNumber = "905411234229";
    
    // Format message with line breaks and premium emojis
    const formattedMessage = encodeURIComponent(
      `*🔥 VİRAFİT ONLİNE RANDEVU TALEBİ 🔥*\n\n` +
      `👤 *AD SOYAD:* ${form.name}\n` +
      `📧 *E-POSTA:* ${form.email}\n` +
      `📞 *TELEFON:* ${form.phone}\n\n` +
      `📢 *Bizden Nasıl Haberdar Oldu:*\n${form.howHear.length > 0 ? form.howHear.map(x => `  • ${x}`).join('\n') : '  Belirtilmedi'}\n\n` +
      `⚡ *İlgilendiği Hizmetler:*\n${form.interestedServices.length > 0 ? form.interestedServices.map(x => `  • ${x}`).join('\n') : '  Belirtilmedi'}\n\n` +
      `🎯 *Dönüşüm / Sağlık Hedefleri:*\n${form.goals.length > 0 ? form.goals.map(x => `  • ${x}`).join('\n') : '  Belirtilmedi'}\n\n` +
      `⚠️ *En Büyük Sıkıntı / Engeli:*\n${form.challenges.length > 0 ? form.challenges.map(x => `  • ${x}`).join('\n') : '  Belirtilmedi'}\n\n` +
      `🌿 *Geçmiş Hizmet / Yatırım Deneyimi:*\n${form.pastExperience.length > 0 ? form.pastExperience.map(x => `  • ${x}`).join('\n') : '  Belirtilmedi'}\n\n` +
      `⭐ *Yolculuk Önem Derecesi:* ${form.importance} / 10\n\n` +
      `📅 *Görüşme Zamanı Tercihi:*\n${form.timeframe.length > 0 ? form.timeframe.map(x => `  • ${x}`).join('\n') : '  Belirtilmedi'}\n\n` +
      `✍️ *Ekstra Not/Sakatlık Bilgisi:* ${form.additionalInfo || 'Yok'}\n\n` +
      `📢 *Kampanyalardan Haberdar Olma İzni:* ${form.smsConsentMarketing ? 'Kabul Ediyor' : 'Kabul Etmiyor'}\n` +
      `📅 *Hatırlatıcı İletişim İzni:* ${form.smsConsentTransactional ? 'Kabul Ediyor' : 'Kabul Etmiyor'}`
    );
    
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${formattedMessage}`, '_blank');
  };

  const sectionHeader = (title: string) => (
    <div className="flex items-center gap-3 mb-6 mt-12 pb-3 border-b border-white/5">
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-pink/20 text-brand-pink">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">{title}</h3>
    </div>
  );

  const CustomCheckbox = ({ checked, label, onClick }: { checked: boolean; label: string; onClick: () => void; key?: React.Key }) => (
    <div 
      onClick={onClick}
      className={`group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
        checked 
          ? 'bg-brand-pink/5 border-brand-pink/40 text-white' 
          : 'bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/[0.02] hover:border-white/10 hover:text-gray-200'
      }`}
    >
      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
        checked 
          ? 'bg-brand-pink border-brand-pink text-white shadow-[0_0_12px_rgba(255,0,127,0.3)]' 
          : 'border-white/20'
      }`}>
        {checked && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <span className="text-sm font-medium leading-tight">{label}</span>
    </div>
  );

  return (
    <div className="relative pt-32 px-6 pb-24 min-h-screen bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-brand-pink/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif italic text-white mb-4 leading-none"
          >
            VİRAFİT ile Dönüşümünü Başlat
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-brand-pink leading-relaxed max-w-2xl mx-auto mt-4"
          >
            Kendinize en uygun hizmetlerimizi seçerek kişiselleştirilmiş randevu talebinizi hemen WhatsApp hattımıza ulaştırın.
          </motion.p>
        </div>

        <Card className="p-8 md:p-12 border-white/5 bg-white/[0.01] backdrop-blur-md rounded-[3rem]">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {sectionHeader("1. İletişim Bilgileriniz")}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Ad Soyad *</label>
                <input 
                  type="text" 
                  required 
                  value={form.name}
                  placeholder="Ahmet Yılmaz"
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-brand-neon transition-all text-white text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">E-Posta Adresi *</label>
                <input 
                  type="email" 
                  required 
                  value={form.email}
                  placeholder="ahmet@example.com"
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-brand-neon transition-all text-white text-sm" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Telefon Numarası *</label>
              <input 
                type="tel" 
                required 
                value={form.phone}
                placeholder="0555 123 4567"
                onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-brand-neon transition-all text-white text-sm" 
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Bizden nasıl haberdar oldunuz? *</label>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Google Arama Motoru",
                  "Instagram",
                  "Tavsiye / Tanıdık Referansı",
                  "Sosyal Medya Reklamları",
                  "Bölgeden geçiyorum / Gördüm"
                ].map((option) => (
                  <CustomCheckbox 
                    key={option}
                    checked={form.howHear.includes(option)}
                    label={option}
                    onClick={() => toggleCheckbox('howHear', option)}
                  />
                ))}
              </div>
            </div>

            {sectionHeader("2. İlgilendiğiniz Virafit Hizmetleri")}
            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Hangi program veya terapilerimizle ilgileniyorsunuz? *</label>
              <p className="text-xs text-gray-500 italic mt-[-8px]">Birden fazla hizmet seçebilirsiniz.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "EMS Antrenmanı (25 Dakikada Yoğun Sıkılaşma)",
                  "Mora Biorezonans (Gıda Silme ve İştah Kontrolü)",
                  "Sigara Bırakma (Mora Biorezonans Desteği)",
                  "Klinik Pilates (Postür Analizi ve Esneklik)",
                  "Meridyen Terapi (Kas/Eklem Ağrıları ve Detoks)",
                  "Diyetisyen & Yaşam Tarzı Beslenme"
                ].map((option) => (
                  <CustomCheckbox 
                    key={option}
                    checked={form.interestedServices.includes(option)}
                    label={option}
                    onClick={() => toggleCheckbox('interestedServices', option)}
                  />
                ))}
              </div>
            </div>

            {sectionHeader("3. Dönüşüm ve Sağlık Hedefleriniz")}
            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Dönüşümünüzde en çok neye ulaşmak istiyorsunuz? *</label>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Hızlı ve bölgesel sıkılaşmak / kilo kontrolü",
                  "Sigara bağımlılığına kalıcı son vermek",
                  "Tatlı krizleri, gıda bağımlılıkları ve iştahı yönetmek",
                  "Omurga sağlığını güçlendirmek & dik duruş kazanmak",
                  "Kronik kas, eklem ve fıtık ağrılarından arınmak",
                  "Kişiye özel dengeli beslenme alışkanlığı kazanmak",
                  "Metabolizmayı hızlandırıp enerjik hissetmek"
                ].map((option) => (
                  <CustomCheckbox 
                    key={option}
                    checked={form.goals.includes(option)}
                    label={option}
                    onClick={() => toggleCheckbox('goals', option)}
                  />
                ))}
              </div>
            </div>

            {sectionHeader("4. Yaşadığınız En Büyük Sıkıntı")}
            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Şu an kendinizi en çok hangi konuda engellenmiş hissediyorsunuz? *</label>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Yoğun günlük tempoda spora/fiziksel aktiviteye zaman bulamamak",
                  "Geçmek bilmeyen sırt, boyun, eklem ağrıları veya duruş kusurları",
                  "Zararlı yiyeceklere / tatlılara karşı koyamamak ve sürekli acıkmak",
                  "Defalarca denememe rağmen sigarayı kendi başıma bırakamamak",
                  "Diyet listelerinden çabuk sıkılmak ve motivasyon kaybı yaşamak",
                  "Vücut ağrıları ve blokajlar sebebiyle sürekli yorgun/halsiz uyanmak"
                ].map((option) => (
                  <CustomCheckbox 
                    key={option}
                    checked={form.challenges.includes(option)}
                    label={option}
                    onClick={() => toggleCheckbox('challenges', option)}
                  />
                ))}
              </div>
            </div>

            {sectionHeader("5. Geçmiş Hizmet / Yatırım Geçmişiniz")}
            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Sağlıklı bir yaşam için daha önce hangi yöntemleri denediniz? *</label>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Eğitmen eşliğinde özel ders (PT) veya aletli pilates yaptım",
                  "Diyetisyen danışmanlığı alarak kilo vermeyi denedim",
                  "Farklı biorezonans/frekans terapileri ya da alternatif masajlar denedim",
                  "Hayır, sağlığım için profesyonelce bir sürece ilk defa başlayacağım"
                ].map((option) => (
                  <CustomCheckbox 
                    key={option}
                    checked={form.pastExperience.includes(option)}
                    label={option}
                    onClick={() => toggleCheckbox('pastExperience', option)}
                  />
                ))}
              </div>
            </div>

            {sectionHeader("6. Önem Derecesi")}
            <div className="space-y-4">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Sertifikalı uzmanlarımızın rehberliğinde hedefe ulaşmak şu an sizin için ne kadar önemli? *</label>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setForm(p => ({ ...p, importance: val }))}
                    className={`py-4 rounded-xl border font-black transition-all duration-300 text-center flex items-center justify-center ${
                      form.importance === val
                        ? 'bg-brand-pink border-brand-pink text-white shadow-lg shadow-brand-pink/30 scale-105'
                        : 'border-white/10 bg-white/[0.01] text-gray-400 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest px-1">
                <span>Az Önemli</span>
                <span>Benim İçin Çok Kritik / Hayati</span>
              </div>
            </div>

            {sectionHeader("7. Randevu ve Görüşme Tercihleriniz")}
            <div className="space-y-4">
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Formu ulaştırdıktan sonra hedefimiz, 24-48 saat içinde size özel bir analiz programı hazırlayarak iletişime geçmektir. Sizlere en konforlu ve doğru zamanda ulaşmamız için saat aralıklarını belirtebilirsiniz.
              </p>
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Çağrı ve Randevu Planlaması İçin Tercih Saatleriniz *</label>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Sabah Seansı (08:00 - 11:00)",
                  "Öğle Seansı (11:00 - 14:00)",
                  "Öğleden Sonra Seansı (14:00 - 17:00)",
                  "Akşam Seansı (17:00 - 20:00)"
                ].map((option) => (
                  <CustomCheckbox 
                    key={option}
                    checked={form.timeframe.includes(option)}
                    label={option}
                    onClick={() => toggleCheckbox('timeframe', option)}
                  />
                ))}
              </div>

              {/* Informative Callout box matching screenshot style */}
              <div className="p-6 rounded-3xl bg-brand-pink/[0.02] border-l-4 border-brand-pink md:p-8 my-6">
                <p className="text-sm font-black text-white uppercase tracking-[0.15em] mb-2">RANDEVU PLANLAMA SÜRECİ</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  Sertifikalı VİRAFİT ekibimiz, seçmiş olduğunuz en uygun saat dilimlerini baz alarak ön görüşme/danışmanlık seansınız öncesinde size WhatsApp üzerinden randevu teyit mesajı gönderecektir.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  "Zamanınızın çok kıymetli olduğunun bilincindeyiz. Sizinle yapacağımız bu detaylı ön görüşme, tamamen size özel bir yolculuk tasarlamamıza olanak sağlayacaktır."
                </p>
              </div>
            </div>

            {sectionHeader("8. Eklemek İstediğiniz Özel Not veya Şikayetler")}
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">Varsa özel rahatsızlıklar, fıtık, sakatlık veya ek notlarınız (İsteğe Bağlı)</label>
              <textarea 
                value={form.additionalInfo}
                placeholder="Örn: Bel/boyun fıtığım mevcut, şu gıdalara bağımlılığım var veya şu tarihlerde başlamak istiyorum vb..."
                onChange={(e) => setForm({...form, additionalInfo: e.target.value})}
                className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-brand-neon transition-all text-white text-sm resize-none" 
              />
            </div>

            {sectionHeader("9. Bilgilendirme ve İletişim Tercihleri")}
            <div className="space-y-4">
              <CustomCheckbox 
                checked={form.smsConsentMarketing}
                label="Bana özel sürpriz indirimler, Mora terapi kampanyaları ve yeni fitness fırsatlarından WhatsApp & SMS veya E-Posta ile haberdar olmak istiyorum."
                onClick={() => setForm(p => ({ ...p, smsConsentMarketing: !p.smsConsentMarketing }))}
              />
              <CustomCheckbox 
                checked={form.smsConsentTransactional}
                label="Randevu takipleri, teyit bildirimleri ve randevu saatlerime dair bilgilendirme duyurularını WhatsApp ve SMS aracılığı ile almayı onaylıyorum."
                onClick={() => setForm(p => ({ ...p, smsConsentTransactional: !p.smsConsentTransactional }))}
              />
            </div>

            {/* Submit button section with modern and beautiful look */}
            <div className="pt-8 text-center space-y-6">
              <p className="text-xs text-gray-500 leading-normal">
                Bu randevu formunu doldurup göndererek, <span className="underline cursor-pointer hover:text-white">Kullanım Şartlarımızı</span> ve <span className="underline cursor-pointer hover:text-white">KiK Verilerinin İşlenmesi Politikasını</span> kabul etmiş olursunuz.
              </p>

              <button 
                type="submit" 
                className="w-full py-5 rounded-[2.5rem] bg-[#ffd200] hover:bg-[#e6bd00] text-black font-black text-lg md:text-xl uppercase tracking-widest shadow-[0_0_30px_rgba(255,210,0,0.2)] hover:shadow-[0_0_40px_rgba(255,210,0,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Dönüşüm Talebini Gönder (Submit)
              </button>

              <p className="text-xs md:text-sm text-gray-400 font-bold tracking-wider pt-2">
                🔮 Dönüşümünüz şimdi başlıyor, haydi gerçekleştirelim!
              </p>
            </div>

          </form>
        </Card>
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [
    { url: "https://lh3.googleusercontent.com/d/1FieZlYjC32xrYOffY4PJwvLjf2oqtyxK=s1200", alt: "EMS Antrenman" },
    { url: "https://lh3.googleusercontent.com/d/18IYD9CZ8D0QfWRh6W-Oc7uFvmZCQJ_BB=s1200", alt: "Biorezonans" },
    { url: "https://lh3.googleusercontent.com/d/177BntrnlQTMMkpvpxIT6ScWxXIJhK8Jy=s1200", alt: "Klinik Pilates" }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center px-6 scroll-mt-20">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImage}
            src={images[currentImage].url} 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover brightness-50" 
            alt={images[currentImage].alt}
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority={currentImage === 0 ? "high" : "auto"}
            onError={(e) => {
              e.currentTarget.src = `https://picsum.photos/seed/${images[currentImage].alt}/1920/1080`;
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark" />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-8 text-white">
            KENDİNİ ZORLAMADAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-pink glow-neon">
              DEĞİŞİM MÜMKÜN
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Mora Biorezonans, EMS ve kişiye özel beslenme programları ile vücudunuzun dengesini yeniden kurun. <br />
            <span className="text-brand-neon font-bold">Stüdyomuzda veya evinizin konforunda!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button className="w-full sm:w-auto">ONLINE RANDEVU</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="w-full sm:w-auto">HİZMETLERİMİZİ İNCELE</Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-2 bg-brand-neon rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-neon font-black uppercase tracking-[0.3em] text-xs mb-4">Hakkımızda</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white">
              VİRAFİT İLE <br /> <span className="text-brand-pink">BEDENİNİ</span> YENİDEN KEŞFET
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-xl font-medium text-white">
                Virafit, herkese aynı programı uygulayan bir spor salonu değil; bedeni anlayan, değişimi planlayan kişiye özel bir dönüşüm stüdyosudur.
              </p>
              <p>
                Her beden farklıdır. Bu yüzden Virafit’te her program, sana özel olarak planlanır. Saatlerce spor yapmak zorunda değilsin. Önemli olan doğru kas aktivasyonu ve doğru planlama.
              </p>
              
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-2xl font-black text-brand-neon uppercase mb-4">Neden Virafit?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Zap size={20} className="text-brand-neon shrink-0 mt-1" />
                    <span>Kişiye özel beden yönetimi ve bilimsel temelli uygulamalar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap size={20} className="text-brand-neon shrink-0 mt-1" />
                    <span>Randevu sistemiyle çalışan butik VIP stüdyo deneyimi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap size={20} className="text-brand-neon shrink-0 mt-1" />
                    <span>Kalabalıktan uzak, tamamen sana odaklı bir süreç.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <p className="text-brand-neon font-bold text-xl">
                  Virafit ile bedenini yeniden keşfet, gücünü geri kazan.
                </p>
              </div>

              <div className="pt-8">
                <p className="text-lg italic text-brand-pink font-bold">
                  Burası bir spor salonu değil… Beden değişimi ve dengeleme stüdyosu.
                </p>
                <p className="mt-4">
                  Doğru analiz + doğru plan = gerçek sonuç. Seni daha hafif bir vücut, rahatlamış bir dolaşım ve enerjik bir yaşam bekliyor.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Sinem Karaca"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "EMS Antrenmanı",
      desc: "20 dakikada 4 saatlik antrenman etkisi. Evinizde veya stüdyomuzda.",
      img: "https://lh3.googleusercontent.com/d/1ZDrXBv_mChqbjR78yADI4VLjdNyXcORR=s1024",
      tag: "Popüler"
    },
    {
      title: "Biorezonans",
      desc: "Vücut frekanslarını dengeleyerek iştah kontrolü ve sigara bırakma.",
      img: "https://lh3.googleusercontent.com/d/1wa2knjaID3KeixceXBG2vQfrqbFu3lKq=s1024",
      tag: "Teknolojik"
    },
    {
      title: "Diyetisyen",
      desc: "Kişiye özel beslenme programları ve uzman takibi.",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
      tag: "Beslenme"
    },
    {
      title: "Meridyen Terapi",
      desc: "Vücut enerjisini dengeleyen özel masaj terapisi.",
      img: "https://lh3.googleusercontent.com/d/1a1sI8zozu4rof3z1mPp5K7yfbT2knsJV=s1024",
      tag: "Terapi",
      position: "object-cover",
      scale: "scale-100",
      h: "h-[300px] md:h-[400px]"
    },
    {
      title: "Sigarayı Bırakma",
      desc: "Mora biorezonans ile sigara isteğini azaltmaya ve bırakma sürecini daha konforlu hale getirmeye destek oluyoruz.",
      img: "https://lh3.googleusercontent.com/d/1_-Gv34zD0uJbMAiJFaE4AeelYABemTG9=s1024",
      tag: "Odaklı",
      position: "object-center",
      scale: "scale-100"
    },
    {
      title: "Klinik Pilates",
      desc: "Esneklik ve merkez bölge güçlendirme.",
      img: "https://lh3.googleusercontent.com/d/1kj1iFpR07885a46oPEzxCZ9hgmHyPDYs=s1024",
      tag: "Denge",
      position: "object-cover",
      scale: "scale-100",
      h: "h-[300px] md:h-[400px]"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-brand-surface/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-brand-neon font-black uppercase tracking-[0.3em] text-xs mb-4">Neler Yapıyoruz?</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-white">
              HİZMETLERİMİZ <br /> <span className="text-brand-pink">GÜÇLENİN</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const CardContent = (
              <div className={`group relative ${service.h || 'h-[400px]'} rounded-[3rem] overflow-hidden border border-white/5 cursor-pointer`}>
                <img 
                  src={service.img} 
                  className={`absolute inset-0 w-full h-full object-cover ${service.position || 'object-center'} ${service.scale || 'scale-100'} group-hover:scale-110 transition-all duration-1000`}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${service.title}/800/800`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-neon/20 text-brand-neon text-[10px] font-black uppercase tracking-widest mb-4 w-fit">
                    {service.tag}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-brand-dark pt-20 min-h-screen flex flex-col scroll-mt-20">
      <PilatesSlider />
      
      {/* Aesthetic Gap & Title */}
      <div className="relative py-24 px-6 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-neon to-transparent opacity-50" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-neon/5 blur-[120px] rounded-full" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-pink/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-neon font-black uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Bize Ulaşın
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white"
          >
            SİZİ BEKLİYORUZ <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-pink">
              KURTKÖY STÜDYOMUZ
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Map Section with Professional Spacing */}
      <div className="px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative group"
        >
          <div className="absolute inset-0 bg-brand-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
          <iframe 
            src="https://maps.google.com/maps?q=Kurtköy%20Yenişehir%20Pendik%20İstanbul&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-0"
          ></iframe>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-neon font-bold uppercase tracking-widest mb-4">Sorularınız mı var?</p>
            <h2 className="text-5xl font-black uppercase tracking-tighter">Bize Ulaşın</h2>
          </div>
          
          <Card className="p-10 border-white/10 bg-white/[0.03]">
            <form 
              className="space-y-6" 
              action="https://formspree.io/f/virafit.info@hotmail.com" 
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tam Adınız</label>
                  <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-neon transition-all" placeholder="Ad Soyad" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Telefon Numarası</label>
                  <input name="phone" type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-neon transition-all" placeholder="(5XX) XXX XX XX" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">E-posta Adresi</label>
                <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-neon transition-all" placeholder="ornek@mail.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Mesajınız</label>
                <textarea name="message" rows={5} required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-brand-neon transition-all resize-none" placeholder="Mesajınızı buraya yazın..."></textarea>
              </div>
              <Button type="submit" className="w-full py-5 text-xl uppercase tracking-widest">Gönder</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

const EnhancedFooter = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto mb-20">
        {/* Brand Info */}
        <div className="max-w-md space-y-6">
          <div className="flex items-center gap-2">
            <Activity className="text-brand-neon w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter">VİRAFİT</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Daha sağlıklı ve güçlü bir versiyonunuza giden yolculuk burada başlıyor.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} className="text-brand-neon" />
              <span>Kurtköy Pendik İstanbul</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Phone size={18} className="text-brand-neon" />
              <span>05411234229</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail size={18} className="text-brand-neon" />
              <span>virafit.info@hotmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-neon hover:text-black transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-neon hover:text-black transition-all"><Twitter size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-neon hover:text-black transition-all"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-black">© 2026 Virafit. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-neon selection:text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/before-after" element={<BeforeAfterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <EnhancedFooter />
    </div>
  );
}
