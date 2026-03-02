'use client'; 
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Box, ShieldCheck, Zap, HandCoins, ExternalLink, Menu, X } from 'lucide-react';

// Variantes de animación reutilizables
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } }
};

export default function DomosGeodesicosDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-stone-50 font-sans text-stone-900 overflow-hidden">
      
      {/* NAVEGACIÓN RESPONSIVA */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10"
      >
        <div className="flex justify-between items-center p-6 lg:px-12">
         <a href="#">
           <div className="md:w-30 w-20">
            <img src="/logo1.png" alt="" />
          </div>
         </a>
          
          {/* Menú Desktop */}
          <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wide font-medium text-white items-center">
            {['Modelos', 'Inversión', 'Galería', 'Proceso'].map(item => (
              <motion.li key={item} whileHover={{ y: -2, color: '#34d399' }} className="cursor-pointer transition">
                {item}
              </motion.li>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-full font-semibold transition shadow-lg shadow-emerald-500/30 text-white"
            >
              Agendar Visita
            </motion.button>
          </ul>

          {/* Botón Hamburguesa Móvil */}
          <button 
            className="md:hidden text-white z-50 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden"
            >
              <ul className="flex flex-col items-center py-8 gap-6 text-white uppercase tracking-wider font-medium">
                {['Modelos', 'Inversión', 'Galería', 'Proceso'].map(item => (
                  <li key={item} className="cursor-pointer hover:text-emerald-400 transition" onClick={() => setMenuOpen(false)}>
                    {item}
                  </li>
                ))}
                <button className="bg-emerald-500 w-3/4 py-3 rounded-full font-bold mt-4" onClick={() => setMenuOpen(false)}>
                  Agendar Visita
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

     {/* HERO SECTION CON VIDEO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover brightness-50"
        >
          <source src="/original.mp4" type="video/mp4" />
        </video>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 text-center px-6 mt-16 max-w-5xl"
        >
          {/* TÍTULO ANIMADO PALABRA POR PALABRA */}
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mt-20 md:mt-0 mb-6 md:mb-8 leading-tight drop-shadow-2xl overflow-hidden flex flex-wrap justify-center gap-x-4 md:gap-x-6">
            {['Desconecta', 'del', 'Ruido.'].map((word, i) => (
              <motion.span key={i} variants={fadeInUp} className="inline-block">
                {word}
              </motion.span>
            ))}
            {['Conecta', 'con', 'tu'].map((word, i) => (
              <motion.span key={i + 3} variants={fadeInUp} className="inline-block text-emerald-400">
                {word}
              </motion.span>
            ))}
            {['Inversión.'].map((word, i) => (
              <motion.span key={i + 6} variants={fadeInUp} className="inline-block text-emerald-400 w-full md:w-auto">
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-2xl text-stone-200 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light tracking-wide"
          >
            Domos geodésicos de alta eficiencia para Glamping. <br className="hidden md:block"/>El refugio perfecto que <strong className="font-bold text-white">se paga solo.</strong>
          </motion.p>
          
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="bg-emerald-500 text-white w-full md:w-auto md:px-10 px-1 py-3 mb-10 md:py-5 rounded-xl text-lg md:text-xl font-bold transition shadow-2xl hover:bg-emerald-600 border border-emerald-400/50"
          >
            Ver Modelos y Precios
          </motion.button>
        </motion.div>
      </section>
      {/* SECCIÓN: ¿POR QUÉ UN DOMO GEODÉSICO? */}
      <section className="bg-neutral-950 text-white py-20 md:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 order-2 md:order-1"
          >
            <motion.h2 variants={fadeInUp} className="text-xs md:text-sm font-bold text-emerald-500 tracking-widest uppercase mb-2">Ingeniería Geodésica</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">Mucho más que una cabaña tradicional.</motion.h3>
            <motion.p variants={fadeInUp} className="text-neutral-300 text-base md:text-lg leading-relaxed">
              La geometría geodésica no es solo estética; es la estructura más resistente y eficiente diseñada por el hombre. Su forma esférica distribuye las cargas uniformemente, resistiendo vientos extremos, mientras que su volumen optimizado reduce el gasto energético en calefacción y ventilación en un 30%.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.7 } }}
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-800 group order-1 md:order-2"
          >
            <img src="/2.png" alt="Estructura de domo geodésico" className="w-full h-75 md:h-125 object-cover group-hover:scale-105 transition duration-700" />
          </motion.div>
        </div>
      </section>

      {/* QUIÉNES SOMOS + ROI */}
      <section className="py-20 md:py-24 px-6 bg-white rounded-b-[3rem] md:rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl border-4 border-stone-100">
            <img src="/1.png" alt="Equipo EcoCoast en taller" className="w-full h-75 md:h-112.5 object-cover" />
          </div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-xs md:text-sm font-bold text-emerald-500 tracking-widest uppercase">Expertos en Glamping</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">GeoCoast: Diseño Sostenible con Rentabilidad Probada.</motion.h3>
            <motion.p variants={fadeInUp} className="text-stone-600 text-base md:text-lg">Somos especialistas en la construcción geodésica premium. Creamos estructuras llave en mano, diseñadas no solo para desconectar del ruido, sino para activar un negocio altamente rentable.</motion.p>
            <motion.p variants={fadeInUp} className="text-stone-600 text-base md:text-lg">Un domo VIP bien equipado se arrienda entre $120.000 y $200.000 por noche en temporada. Con una ocupación media, recuperas tu inversión completa en menos de 10 meses.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* PLANES */}
      <section className="py-20 md:py-28 px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 space-y-3">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Planes de Inversión</h2>
            <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto">Desde la compra de tu domo hasta la experiencia resort completa lista para facturar.</p>
          </div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8 md:gap-10 items-start"
          >
            {/* Plan 1 */}
            <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-stone-200">
              <h3 className="text-2xl font-bold mb-2">Básico: DIY Kit</h3>
              <p className="text-stone-500 mb-6 text-sm md:text-base">Ideal para constructores y entusiastas.</p>
              <div className="text-4xl md:text-5xl font-bold mb-6 text-emerald-600">$2.190.000<span className="text-xs md:text-sm text-stone-400 font-medium block md:inline"> + IVA</span></div>
              <ul className="space-y-4 mb-10 text-stone-700 text-base md:text-lg">
                <li className="flex gap-3"><Box className="w-5 h-5 text-emerald-500 shrink-0"/> Kit Geodésico Completo</li>
                <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0"/> Cubierta PVC Premium</li>
                <li className="flex gap-3"><ExternalLink className="w-5 h-5 text-emerald-500 shrink-0"/> Planos de ensamblaje</li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-emerald-500 text-emerald-600 font-bold hover:bg-emerald-50 transition text-lg">Cotizar Básico</button>
            </motion.div>

            {/* Plan 2 - Destacado */}
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -10 }}
              className="bg-neutral-950 p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-emerald-500 transform md:-translate-y-5 relative"
            >
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] md:text-xs font-bold px-3 py-2 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">Más Vendido</div>
              <h3 className="text-2xl font-bold mb-2 text-white">Estándar: Instalado</h3>
              <p className="text-neutral-400 mb-6 text-sm md:text-base">Nosotros hacemos el trabajo pesado.</p>
              <div className="text-4xl md:text-5xl font-bold mb-6 text-emerald-400">$3.290.000<span className="text-xs md:text-sm text-neutral-600 font-medium block md:inline"> + IVA</span></div>
              <ul className="space-y-4 mb-10 text-neutral-300 text-base md:text-lg">
                <li className="flex gap-3"><Zap className="w-5 h-5 text-emerald-400 shrink-0"/> Todo lo del Plan DIY Kit</li>
                <li className="flex gap-3"><Zap className="w-5 h-5 text-emerald-400 shrink-0"/> Armado en tu sitio</li>
                <li className="flex gap-3"><Zap className="w-5 h-5 text-emerald-400 shrink-0"/> Aislamiento Premium</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/30 text-lg">Cotizar Estándar</button>
            </motion.div>

            {/* Plan 3 */}
            <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-stone-200">
              <h3 className="text-2xl font-bold mb-2">Pro VIP: Glamping</h3>
              <p className="text-stone-500 mb-6 text-sm md:text-base">Listo para facturar a precio premium.</p>
              <div className="text-4xl md:text-5xl font-bold mb-6 text-emerald-600">$5.190.000<span className="text-xs md:text-sm text-stone-400 font-medium block md:inline"> + IVA</span></div>
              <ul className="space-y-4 mb-10 text-stone-700 text-base md:text-lg">
                <li className="flex gap-3"><HandCoins className="w-5 h-5 text-emerald-500 shrink-0"/> Todo lo del Plan Instalado</li>
                <li className="flex gap-3"><HandCoins className="w-5 h-5 text-emerald-500 shrink-0"/> Terraza VIP de madera</li>
                <li className="flex gap-3"><HandCoins className="w-5 h-5 text-emerald-500 shrink-0"/> Jacuzzi de madera (Hot Tub)</li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-emerald-500 text-emerald-600 font-bold hover:bg-emerald-50 transition text-lg">Cotizar Pro VIP</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GALERÍA MASONRY */}
      <section className="py-20 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { src: './pomelli_image.png', span: 'col-span-1 md:col-span-2 md:row-span-2' },
              { src: '/pomelli.png', span: 'col-span-1 md:col-span-1 md:row-span-1' },
              { src: '/salvage.png', span: 'col-span-1 md:col-span-1 md:row-span-1' },
              { src: '1.png', span: 'col-span-1 md:col-span-2 md:row-span-1' },
            ].map((img, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.03 }} className={`${img.span} rounded-2xl overflow-hidden shadow-lg group h-64 md:h-auto`}>
                <img src={img.src} alt={`Domo Geodésico real ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESO & FORMULARIO DE CONTACTO */}
      <section className="bg-neutral-950 text-white py-20 md:py-28 px-6 rounded-t-[3rem] md:rounded-t-[5rem] mt-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16 md:mb-24"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 leading-tight">Del taller a tu Glamping en 4 pasos.</motion.h2>
            
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 text-center">
              {[
                { title: 'Contacto', desc: 'Asesoría técnica y evaluación preliminar.' },
                { title: 'Visita Física', desc: 'Conoces nuestros domos piloto y materiales.' },
                { title: 'Fabricación', desc: 'Estructura geodésica lista en 15 días.' },
                { title: 'Instalación', desc: 'Armado rápido en tu sitio listo para usar.' },
              ].map((step, index) => (
                <motion.div key={step.title} variants={fadeInUp} className="relative p-4 md:p-6 group">
                  <motion.div whileHover={{ scale: 1.1, backgroundColor: '#34d399', color: '#0a0a0a' }} className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 md:mb-6 text-emerald-400 border border-neutral-700 transition">
                    {index + 1}
                  </motion.div>
                  <h4 className="font-bold mb-2 text-xl">{step.title}</h4>
                  <p className="text-neutral-400 text-sm">{step.desc}</p>
                  {index < 3 && <div className="absolute top-1/2 left-full w-full h-0.5 bg-neutral-800 hidden md:block"></div>}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* FORMULARIO */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-neutral-900 p-8 md:p-12 rounded-3xl border border-neutral-800 max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 shadow-2xl"
          >
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 leading-tight">Vive la Experiencia Geodésica</h3>
              <p className="text-neutral-400 mb-6 md:mb-8 text-base md:text-lg">Agenda una visita guiada a nuestros domos piloto. Toca los materiales y conversa sobre tu proyecto con nuestros ejecutivos.</p>
              <div className="space-y-4 text-neutral-300 text-base md:text-lg">
                <p className="flex gap-3 items-center"><MapPin className="text-emerald-500 shrink-0"/> Sector Las Parcelas, La Serena</p>
                <p className="flex gap-3 items-center"><Phone className="text-emerald-500 shrink-0"/> +56 9 7187 4099</p>
                <p className="flex gap-3 items-center"><Mail className="text-emerald-500 shrink-0"/> ventas@geocoast.cl</p>
              </div>
            </div>
            
            <form className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
              <input type="text" placeholder="Tu Nombre Completo" className="p-4 md:p-5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-emerald-500 outline-none transition text-base md:text-lg" />
              <input type="tel" placeholder="Tu WhatsApp (ej. +569...)" className="p-4 md:p-5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-emerald-500 outline-none transition text-base md:text-lg" />
              <textarea rows={3} placeholder="¿Dónde tienes tu terreno?" className="p-4 md:p-5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-emerald-500 outline-none transition text-base md:text-lg"></textarea>
              <button type="button" className="bg-emerald-500 text-white font-bold py-4 md:py-5 rounded-xl hover:bg-emerald-600 transition text-lg md:text-xl shadow-lg shadow-emerald-500/30">Agendar Mi Visita VIP</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-stone-600 py-10 md:py-12 px-6 text-center text-xs md:text-sm border-t border-white/5">
        <p>© 2026 GeoCoast. Fabricación Geodésica Premium. Todos los derechos reservados.</p>
        <p className="mt-2 text-stone-400">Desarrollo técnico por <span className="text-white font-bold hover:text-emerald-400 cursor-pointer transition">FaroWeb</span></p>
      </footer>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <motion.a 
        href="https://wa.me/56971874099" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl z-50 flex items-center justify-center border-4 border-white/20"
        whileHover={{ scale: 1.1, rotate: 10 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { delay: 1, type: 'spring' } }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="md:w-8.5 md:h-8.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.833 6.365l-1.83 5.485 5.626-1.82a11.957 11.957 0 0 0 6.315 1.782h.005A12 12 0 0 0 23.89 12a11.96 11.96 0 0 0-3.507-8.48A11.96 11.96 0 0 0 11.944 0Zm.006 2.015c2.658 0 5.155 1.036 7.032 2.918A9.96 9.96 0 0 1 21.87 12a9.957 9.957 0 0 1-2.914 7.042 9.963 9.963 0 0 1-7.01 2.934h-.005a9.955 9.955 0 0 1-5.074-1.385l-.364-.216-3.766 1.218 1.008-3.664-.236-.376a9.967 9.967 0 0 1-1.52-5.553C1.987 6.46 6.452 2.015 11.95 2.015Zm-5.32 5.51c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.478s1.065 2.874 1.213 3.073c.15.198 2.096 3.2 5.077 4.487.71.307 1.264.49 1.696.627.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.694.248-1.29.174-1.413-.075-.124-.273-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.1-.47-.149-.668.148-.198.298-.767.968-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.476-.883-.788-1.48-1.762-1.653-2.06-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.2-.298.298-.496.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.58-.487-.5-.669-.51l-.57-.01Z"/>
        </svg>
      </motion.a>
    </main>
  );
}