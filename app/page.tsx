import { Card } from "@/components/ui/card"
import { MessageSquare, Timer, TrendingUp, Settings, HeartHandshake, Shield } from 'lucide-react'

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {/* Large blobs with higher opacity */}
    <div className="absolute -top-20 -left-16 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-32 left-40 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-4000" />
    <div className="absolute bottom-40 right-40 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-3000" />
    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-5000" />
    
    {/* Additional animated geometric shapes */}
    <div className="absolute top-1/4 right-1/4 w-32 h-32 border-8 border-green-300 rotate-45 animate-spin-slow opacity-100" />
    <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border-8 border-blue-300 rounded-full animate-bounce animation-delay-1000 opacity-100" />
    <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-red-200 rotate-12 animate-pulse opacity-100" />
    
    {/* New larger shapes with higher opacity */}
    <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-indigo-400 rounded-lg rotate-45 animate-float animation-delay-2000 opacity-100" />
    <div className="absolute top-1/4 left-2/3 w-36 h-36 border-4 border-orange-300 rounded-lg animate-spin-reverse animation-delay-3000 opacity-100" />
    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border-4 border-purple-400 rotate-12 animate-morph opacity-100" />
    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-teal-400 rounded-full animate-ping opacity-100" />
    
    {/* Additional decorative shapes */}
    <div className="absolute top-1/6 left-1/6 w-16 h-16 bg-yellow-300 rounded-full animate-pulse opacity-100" />
    <div className="absolute bottom-1/6 right-1/6 w-16 h-16 bg-pink-300 rounded-full animate-pulse animation-delay-1000 opacity-100" />
    <div className="absolute top-3/4 left-1/2 w-20 h-20 bg-blue-300 rotate-45 animate-spin-slow opacity-100" />
    
    {/* New scattered small elements */}
    <div className="absolute top-1/8 left-1/3 w-12 h-12 bg-green-300 rounded-full animate-bounce animation-delay-2000 opacity-100" />
    <div className="absolute bottom-1/8 right-1/3 w-12 h-12 bg-purple-300 rounded-full animate-bounce animation-delay-3000 opacity-100" />
    <div className="absolute top-2/3 left-1/8 w-16 h-16 border-4 border-red-300 rotate-45 animate-spin-slow opacity-100" />
    <div className="absolute bottom-2/3 right-1/8 w-16 h-16 border-4 border-blue-300 rotate-45 animate-morph opacity-100" />
    
    {/* Additional geometric patterns */}
    <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg rotate-12 animate-float animation-delay-4000 opacity-100" />
    <div className="absolute bottom-1/2 left-1/6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg rotate-45 animate-float animation-delay-5000 opacity-100" />
    
    {/* Diamond shapes */}
    <div className="absolute top-1/4 right-1/2 w-20 h-20 bg-yellow-400 rotate-45 animate-spin-slow opacity-100" />
    <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-pink-400 rotate-45 animate-spin-reverse opacity-100" />
    
    {/* Triangular elements (created using borders) */}
    <div className="absolute top-1/3 right-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-teal-400 animate-bounce animation-delay-4000 opacity-100" />
    <div className="absolute bottom-1/3 left-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[52px] border-t-orange-400 animate-bounce animation-delay-5000 opacity-100" />
  </div>
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50/90 to-white/85">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Bot WhatsApp para tu Negocio
          </h1>
          <p className="text-2xl text-gray-600 mb-8">Automatiza tus ventas y trabaja 80% menos mientras aumentas tus cierres en un 30%</p>
          <img 
            src="/waVapeBot/img/800x400.jpeg" 
            alt="Dashboard WhatsApp" 
            className="rounded-lg shadow-xl mb-8 mx-auto"
          />
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all hover:scale-105">
            ¡Comienza Ahora!
          </button>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ventajas de Nuestro Bot</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-12 h-12 text-green-500" />,
                title: "Respuesta Instantánea",
                description: "Atiende a tus clientes 24/7 sin demoras ni esperas"
              },
              {
                icon: <Timer className="w-12 h-12 text-blue-500" />,
                title: "Ahorra 80% de Tiempo",
                description: "Automatiza las consultas frecuentes y dedícate a lo importante"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
                title: "Aumenta Ventas 30%",
                description: "Mejora tu tasa de conversión con respuestas inmediatas"
              },
              {
                icon: <Settings className="w-12 h-12 text-orange-500" />,
                title: "Configuración Completa",
                description: "Precios, zonas, productos y más, todo personalizado"
              },
              {
                icon: <HeartHandshake className="w-12 h-12 text-red-500" />,
                title: "Soporte Dedicado",
                description: "Ajustes y cambios incluidos en tu plan mensual"
              },
              {
                icon: <Shield className="w-12 h-12 text-gray-700" />,
                title: "Máxima Seguridad",
                description: "Protección de datos y cifrado de extremo a extremo"
              }
            ].map((ventaja, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105 bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  {ventaja.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{ventaja.title}</h3>
                  <p className="text-gray-600">{ventaja.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Inversión</h2>
          <Card className="p-8 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Plan Completo</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Timer className="w-4 h-4 mr-2" /> Configuración inicial: $700 USD</li>
                  <li className="flex items-center"><MessageSquare className="w-4 h-4 mr-2" /> Mensualidad: $150 USD</li>
                </ul>
                <p className="mt-4 text-gray-600">Incluye configuración completa, número de WhatsApp, cambios ilimitados y soporte 24/7</p>
              </div>
              <button className="mt-6 md:mt-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all hover:scale-105">
                Contactar Ahora
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Mira cómo funciona</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="/waVapeBot/img/400x600.png" 
              alt="Demo WhatsApp 1" 
              className="rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105"
            />
            <img 
              src="/waVapeBot/img/400x600.png" 
              alt="Demo WhatsApp 2" 
              className="rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}