import { useState, useEffect } from 'react';
import { menuData, CATEGORIES } from './data/menuData';
import MenuCard from './components/MenuCard';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [scrollBlur, setScrollBlur] = useState(0);
  const whatsappNumber = "51900100200";

  // Scroll handler for video blur & zoom effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Normalizes scroll up to 400px (0 = no scroll, 1 = scrolled 400px or more)
      const ratio = Math.min(scrollY / 400, 1);
      setScrollBlur(ratio);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products based on category
  const filteredProducts = activeCategory === 'todos'
    ? menuData
    : menuData.filter(product => product.categoria === activeCategory);

  const mainWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero realizar una consulta sobre el menú")}`;

  return (
    <div className="min-h-screen text-stone-100 selection:bg-brand-orange selection:text-white antialiased flex flex-col font-sans relative bg-stone-950/20">

      {/* Background Video with dynamic blur & zoom on scroll */}
      <div className="fixed inset-0 -z-50 bg-stone-950 overflow-hidden">
        <video
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover origin-center transition-all duration-150 ease-out"
          style={{
            filter: `blur(${scrollBlur * 12}px) brightness(${0.75 - scrollBlur * 0.35})`,
            transform: `scale(${1 + scrollBlur * 0.05})`
          }}
        />
        {/* Cinematic dark gradients overlay - lighter, showing the background video clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-stone-950/45 to-stone-950/90" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white font-display flex items-center gap-1.5">
                <span className="text-brand-orange">Mimi</span>
                <span className="text-[10px] bg-brand-red text-white font-black rounded-full px-2.5 py-0.5 uppercase tracking-wider">
                  Soda
                </span>
              </span>
            </div>

            {/* Delivery Status & Main WhatsApp CTA */}
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 rounded-full px-2.5 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                ⚡ Delivery Activo
              </span>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex text-sm font-bold bg-white hover:bg-stone-100 text-stone-950 rounded-full px-5 py-2 shadow-md transition-all active:scale-95"
              >
                Pide por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-36 flex flex-col items-center justify-center text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center animate-slide-up">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange bg-orange-950/60 border border-orange-900/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            🍔 ¡El verdadero sabor del barrio en tu mesa!
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
            Sabor que <span className="text-brand-orange">cruje</span>,<br />
            pasión que se <span className="text-brand-red">comparte</span>.
          </h1>
          <p className="text-stone-350 text-base sm:text-xl max-w-2xl mb-10 leading-relaxed">
            Disfruta de nuestro inigualable pollo broaster extra crujiente, hamburguesas jugosas y las salchipapas más contundentes de Ancón. Hechos con el cariño de siempre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href="#menu"
              className="flex justify-center items-center rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white px-10 py-4.5 font-bold shadow-lg shadow-orange-500/20 active:scale-98 cursor-pointer text-base"
            >
              Explorar Menú 🍗
            </a>
            <a
              href={mainWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 rounded-2xl bg-stone-900/60 hover:bg-stone-900/80 border border-stone-850 text-white px-10 py-4.5 font-bold shadow-sm active:scale-98 backdrop-blur-sm cursor-pointer text-base"
            >
              <svg className="h-5 w-5 fill-emerald-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.122 1.012 12.01 1.012c-5.437 0-9.863 4.371-9.867 9.801 0 1.708.452 3.376 1.309 4.856l-.993 3.629 3.69-.965zm10.748-5.382c-.313-.156-1.854-.915-2.137-1.018-.282-.103-.489-.156-.693.156-.204.311-.79.99-.968 1.196-.178.206-.356.233-.67.078-.313-.156-1.32-.486-2.515-1.553-.93-.829-1.558-1.854-1.74-2.165-.183-.311-.02-.48.136-.634.142-.14.313-.363.47-.543.156-.181.209-.311.313-.518.105-.207.052-.389-.026-.543-.078-.156-.693-1.67-.95-2.285-.25-.605-.503-.522-.693-.532-.18-.01-.385-.011-.591-.011-.206 0-.543.078-.827.389-.283.311-1.082 1.058-1.082 2.58 0 1.522 1.102 2.99 1.256 3.2 0 .202 2.169 3.312 5.253 4.641.734.316 1.307.505 1.753.647.737.234 1.407.201 1.937.122.59-.088 1.854-.757 2.115-1.45.26-.693.26-1.285.183-1.402-.078-.117-.282-.189-.597-.346z" />
              </svg>
              Hacer una Consulta
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-stone-950/80 border-y border-stone-900/60 py-16 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-950/60 text-brand-orange border border-orange-900/50 text-2xl mb-4">
                🍗
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-white">Pollo de Calidad</h3>
              <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
                Pollo fresco seleccionado del día, preparado con nuestra sazón secreta y frito al momento.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-950/60 text-brand-red border border-red-900/50 text-2xl mb-4">
                ⚡
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-white">Delivery Express</h3>
              <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
                Empaquetado especial térmico para garantizar que tus platos lleguen súper crujientes y calientes.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-950/40 text-yellow-500 border border-yellow-900/30 text-2xl mb-4">
                🧀
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-white">Papas al Hilo & Cremas</h3>
              <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
                Papas crocantes de corte artesanal acompañadas de una amplia variedad de salsas caseras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Products Section */}
      <section id="menu" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            🔥 Explora Nuestro Menú
          </h2>
          <p className="text-stone-450 text-sm sm:text-base leading-relaxed">
            Elige tu antojo del día. Haz clic en el botón de WhatsApp de cualquiera de nuestros platos para armar tu pedido al instante.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold tracking-wide active:scale-95 transition-all duration-255 cursor-pointer border ${activeCategory === category.id
                  ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-orange-500/10'
                  : 'bg-stone-900/60 hover:bg-stone-850/80 text-stone-300 border-stone-800'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[300px] animate-fade-in">
          {filteredProducts.map(product => (
            <MenuCard
              key={product.id}
              product={product}
              whatsappNumber={whatsappNumber}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-stone-950/90 border-t border-stone-900 py-20 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Info Area */}
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl font-black text-white mb-6">
                📍 Ubicación & Contacto
              </h2>
              <p className="text-stone-400 mb-8 max-w-md leading-relaxed">
                ¿Tienes ganas de algo delicioso? Visítanos en nuestro local o solicita tu delivery directamente por WhatsApp o llamada telefónica.
              </p>

              <div className="space-y-6">
                {/* Contact items */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-brand-orange text-lg">
                    🗺️
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Dirección</h4>
                    <p className="text-sm text-stone-400">Av. Aviación 1420, San Borja, Lima, Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-brand-orange text-lg">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horario de Atención</h4>
                    <p className="text-sm text-stone-400">Lunes a Domingo: 6:00 PM – 12:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-brand-orange text-lg">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Llámanos o Escríbenos</h4>
                    <p className="text-sm text-stone-450 font-semibold">
                      <a href={`tel:+${whatsappNumber}`} className="hover:text-brand-orange text-brand-orange transition-colors">+51 900 100 200</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Map / Delivery Area Container */}
            <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 border border-stone-850/80 bg-stone-900/35 shadow-xl flex flex-col justify-center backdrop-blur-sm">
              <h3 className="font-display font-bold text-xl text-white mb-2">Zona de Delivery</h3>
              <p className="text-xs text-stone-400 mb-6 leading-relaxed">Realizamos repartos en San Borja, Surco, y zonas aledañas.</p>

              {/* Graphic Mock map representation */}
              <div className="relative h-48 w-full rounded-2xl bg-stone-950/60 border border-stone-850/50 overflow-hidden flex items-center justify-center">
                {/* Radial grid representation */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />
                <div className="absolute h-24 w-24 rounded-full bg-brand-orange/15 border border-brand-orange/35 animate-pulse flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-brand-orange shadow-md shadow-orange-500/50" />
                </div>
                <span className="absolute bottom-4 left-4 bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Área de Cobertura
                </span>
                <span className="text-xs font-semibold text-stone-500 z-10 select-none">Av. Aviación 1420 (Sede Central)</span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Pedido Rápido
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-stone-900 hover:bg-stone-850 text-stone-200 text-sm font-bold py-3 rounded-xl border border-stone-800 transition-all active:scale-95 cursor-pointer"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-600 text-xs py-8 border-t border-stone-900/60 mt-auto backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Fuente de Soda Mimi. Todos los derechos reservados.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-stone-400">Términos</a>
            <a href="#" className="hover:text-stone-400">Privacidad</a>
            <a href="#" className="hover:text-stone-400">Soporte</a>
          </p>
        </div>
      </footer>

    </div>
  );
}
