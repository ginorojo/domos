import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🚀 METADATA OPTIMIZADA PARA SEO
export const metadata: Metadata = {
  title: "GeoCoast | Domos Geodésicos Premium en La Serena",
  description: "Fabricación e instalación de domos geodésicos de alta eficiencia para proyectos de Glamping y refugios personales en la Región de Coquimbo. Rentabilidad garantizada.",
  keywords: ["domos geodésicos", "glamping", "la serena", "coquimbo", "valle del elqui", "construcción de domos", "domos premium"],
  
  // 🎯 ESPACIO PARA TU FAVICON
  icons: {
    icon: '/favicon.ico', // Para navegadores normales
    apple: '/apple-touch-logo1.png', // Para cuando alguien lo guarda en su iPhone
  },
  
  // Opcional pero recomendado para cuando compartan el link por WhatsApp
  openGraph: {
    title: "GeoCoast | Domos Geodésicos Premium",
    description: "La evolución del habitar. Domos llave en mano para tu proyecto de glamping.",
    type: "website",
    locale: "es_CL", // Español de Chile
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ⚠️ Cambiamos a 'es' (español) y agregamos 'scroll-smooth' para el menú
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}