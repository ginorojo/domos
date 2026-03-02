/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. FUNDAMENTAL PARA CLOUDFLARE PAGES
  output: 'export', 
  
  // 2. OPCIONAL PERO RECOMENDADO: Optimización de imágenes
  // Como estás usando 'export', Next.js no puede optimizar imágenes
  // en su propio servidor (Vercel). Esto le dice que las exporte tal cual.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;