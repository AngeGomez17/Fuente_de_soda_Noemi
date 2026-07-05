import React from 'react';

export default function MenuCard({ product, whatsappNumber = "51900100200" }) {
  const { nombre, precio, descripcion, imagen, categoria, popular } = product;

  // Generate WhatsApp dynamic URL
  const message = `Hola, quiero pedir ${nombre}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl glass-card shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(234,88,12,0.12)] hover:border-orange-500/30">
      
      {/* Category & Popular Badges */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <span className="rounded-full bg-stone-950/90 border border-stone-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-200 backdrop-blur-md">
          {categoria}
        </span>
        {popular && (
          <span className="flex items-center gap-1 rounded-full bg-brand-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-orange-950/20 animate-pulse">
            🔥 Popular
          </span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
        <img
          src={imagen}
          alt={nombre}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
        />
        {/* Subtle vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-white leading-tight group-hover:text-brand-orange transition-colors duration-300">
            {nombre}
          </h3>
          <span className="font-display text-lg font-extrabold text-brand-orange whitespace-nowrap">
            S/ {precio.toFixed(2)}
          </span>
        </div>

        <p className="mb-6 text-sm text-stone-400 leading-relaxed line-clamp-3 flex-1">
          {descripcion}
        </p>

        {/* Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white py-3.5 px-4 font-bold text-sm tracking-wide shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-95 transition-all w-full cursor-pointer"
        >
          {/* SVG WhatsApp Icon */}
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.122 1.012 12.01 1.012c-5.437 0-9.863 4.371-9.867 9.801 0 1.708.452 3.376 1.309 4.856l-.993 3.629 3.69-.965zm10.748-5.382c-.313-.156-1.854-.915-2.137-1.018-.282-.103-.489-.156-.693.156-.204.311-.79.99-.968 1.196-.178.206-.356.233-.67.078-.313-.156-1.32-.486-2.515-1.553-.93-.829-1.558-1.854-1.74-2.165-.183-.311-.02-.48.136-.634.142-.14.313-.363.47-.543.156-.181.209-.311.313-.518.105-.207.052-.389-.026-.543-.078-.156-.693-1.67-.95-2.285-.25-.605-.503-.522-.693-.532-.18-.01-.385-.011-.591-.011-.206 0-.543.078-.827.389-.283.311-1.082 1.058-1.082 2.58 0 1.522 1.102 2.99 1.256 3.2 0 .202 2.169 3.312 5.253 4.641.734.316 1.307.505 1.753.647.737.234 1.407.201 1.937.122.59-.088 1.854-.757 2.115-1.45.26-.693.26-1.285.183-1.402-.078-.117-.282-.189-.597-.346z" />
          </svg>
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
