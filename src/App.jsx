import { useState } from 'react';
import { menuData, CATEGORIES } from './data/menuData';
import MenuCard from './components/MenuCard';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const whatsappNumber = "51900100200"; // Enlace general y para pedidos

  // Filter products based on active category
  const filteredProducts = activeCategory === 'todos'
    ? menuData
    : menuData.filter(product => product.categoria === activeCategory);

  const mainWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero realizar una consulta sobre el menú")}`;

  return (
    <div className="min-h-screen bg-brand-cream text-stone-900 selection:bg-brand-orange selection:text-white antialiased flex flex-col font-sans">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-stone-950 font-display flex items-center gap-1.5">
                <span className="text-brand-orange">Noemi</span>
                <span className="text-xs bg-brand-red text-white font-bold rounded-full px-2 py-0.5 uppercase tracking-wide">
                  Soda
                </span>
              </span>
            </div>

            {/* Delivery Status & Main WhatsApp CTA */}
            <div className="flex items-center gap-4">
              <span className="hidden xs:flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-1">
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
                className="hidden sm:inline-flex text-sm font-bold bg-stone-900 hover:bg-stone-850 text-white rounded-full px-5 py-2 shadow-sm"
              >
                Pide por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Background blobs for premium layout */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[450px] w-[450px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute top-10 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-red-100/20 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Text Area */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start animate-slide-up">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-6">
                🍔 ¡El verdadero sabor del barrio en tu mesa!
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-stone-950 leading-[1.1] tracking-tight mb-6">
                Sabor que <span className="text-brand-orange">cruje</span>,<br className="hidden sm:inline" />
                pasión que se <span className="text-brand-red">comparte</span>.
              </h1>
              <p className="text-stone-600 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                Disfruta de nuestro inigualable pollo broaster extra crujiente, hamburguesas jugosas a la parrilla y las salchipapas más contundentes de la ciudad. Hecho con ingredientes premium y con el cariño de siempre.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#menu"
                  className="flex justify-center items-center rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 font-bold shadow-lg shadow-orange-500/20 active:scale-98"
                >
                  Explorar Menú 🍗
                </a>
                <a
                  href={mainWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-900 px-8 py-4 font-bold shadow-sm active:scale-98"
                >
                  <svg className="h-5 w-5 fill-emerald-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.122 1.012 12.01 1.012c-5.437 0-9.863 4.371-9.867 9.801 0 1.708.452 3.376 1.309 4.856l-.993 3.629 3.69-.965zm10.748-5.382c-.313-.156-1.854-.915-2.137-1.018-.282-.103-.489-.156-.693.156-.204.311-.79.99-.968 1.196-.178.206-.356.233-.67.078-.313-.156-1.32-.486-2.515-1.553-.93-.829-1.558-1.854-1.74-2.165-.183-.311-.02-.48.136-.634.142-.14.313-.363.47-.543.156-.181.209-.311.313-.518.105-.207.052-.389-.026-.543-.078-.156-.693-1.67-.95-2.285-.25-.605-.503-.522-.693-.532-.18-.01-.385-.011-.591-.011-.206 0-.543.078-.827.389-.283.311-1.082 1.058-1.082 2.58 0 1.522 1.102 2.99 1.256 3.2 0 .202 2.169 3.312 5.253 4.641.734.316 1.307.505 1.753.647.737.234 1.407.201 1.937.122.59-.088 1.854-.757 2.115-1.45.26-.693.26-1.285.183-1.402-.078-.117-.282-.189-.597-.346z"/>
                  </svg>
                  Hacer una Consulta
                </a>
              </div>
            </div>

            {/* Visual/Image Area */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-square rounded-full border-4 border-white/60 shadow-2xl overflow-hidden bg-orange-100 flex items-center justify-center animate-float">
                <img
                  src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80"
                  alt="Delicious food display"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-12 border-y border-stone-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange text-2xl mb-4">
                🍗
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-stone-900">Pollo de Calidad</h3>
              <p className="text-sm text-stone-500 max-w-xs">
                Pollo fresco seleccionado del día, preparado con nuestra sazón secreta y frito al momento.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-brand-red text-2xl mb-4">
                ⚡
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-stone-900">Delivery Express</h3>
              <p className="text-sm text-stone-500 max-w-xs">
                Empaquetado especial térmico para garantizar que tus platos lleguen súper crujientes y calientes.
              </p>
            </div>

            <div className="flex flex-col items-center p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 text-2xl mb-4">
                🧀
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-stone-900">Papas al Hilo & Cremas</h3>
              <p className="text-sm text-stone-500 max-w-xs">
                Papas crocantes de corte artesanal acompañadas de una amplia variedad de salsas caseras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Products Section */}
      <section id="menu" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-950 mb-4">
            🔥 Explora Nuestro Menú
          </h2>
          <p className="text-stone-500 text-sm sm:text-base">
            Elige tu antojo del día. Haz clic en el botón de WhatsApp de cualquiera de nuestros platos para armar tu pedido al instante.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold tracking-wide active:scale-95 transition-all duration-200 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-brand-orange text-white shadow-md shadow-orange-500/10'
                  : 'bg-white hover:bg-stone-50 text-stone-600 border border-stone-200/80'
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
      <section id="contacto" className="bg-stone-900 text-stone-200 py-16 sm:py-20 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Area */}
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl font-black text-white mb-6">
                📍 Ubicación & Contacto
              </h2>
              <p className="text-stone-400 mb-8 max-w-md">
                ¿Tienes ganas de algo delicioso? Visítanos en nuestro local o solicita tu delivery directamente por WhatsApp o llamada telefónica.
              </p>

              <div className="space-y-6">
                {/* Contact items */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-800 text-brand-orange text-lg">
                    🗺️
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Dirección</h4>
                    <p className="text-sm text-stone-400">Av. Aviación 1420, San Borja, Lima, Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-800 text-brand-orange text-lg">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horario de Atención</h4>
                    <p className="text-sm text-stone-400">Lunes a Domingo: 5:00 PM – 11:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-800 text-brand-orange text-lg">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Llámanos o Escríbenos</h4>
                    <p className="text-sm text-stone-400 font-semibold text-brand-orange">
                      <a href={`tel:+${whatsappNumber}`} className="hover:underline">+51 900 100 200</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Map / Delivery Area Container */}
            <div className="lg:col-span-6 bg-stone-850 rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col justify-center">
              <h3 className="font-display font-bold text-xl text-white mb-2">Zona de Delivery</h3>
              <p className="text-xs text-stone-400 mb-6">Realizamos repartos en San Borja, Surco, y zonas aledañas.</p>
              
              {/* Graphic Mock map representation */}
              <div className="relative h-48 w-full rounded-2xl bg-stone-800/80 border border-stone-700/60 overflow-hidden flex items-center justify-center">
                {/* Radial grid representation */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <div className="absolute h-24 w-24 rounded-full bg-brand-orange/20 border border-brand-orange/40 animate-pulse flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-brand-orange shadow-md shadow-orange-500/50" />
                </div>
                <span className="absolute bottom-4 left-4 bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Área de Cobertura
                </span>
                <span className="text-xs font-semibold text-stone-400 z-10 select-none">Av. Aviación 1420 (Sede Central)</span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold py-3 rounded-xl shadow-md transition-all active:scale-95"
                >
                  Pedido Rápido
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-stone-800 hover:bg-stone-750 text-white text-sm font-bold py-3 rounded-xl border border-stone-700 transition-all active:scale-95"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 text-xs py-8 border-t border-stone-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Fuente de Soda Noemi. Todos los derechos reservados.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-stone-300">Términos</a>
            <a href="#" className="hover:text-stone-300">Privacidad</a>
            <a href="#" className="hover:text-stone-300">Soporte</a>
          </p>
        </div>
      </footer>

    </div>
  );
}
