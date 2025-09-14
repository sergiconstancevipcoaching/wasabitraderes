import React from 'react';
import { Zap, Wifi, Heart, Building2, ArrowRight, Star } from 'lucide-react';

const services = [
  {
    title: "Energía",
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    buttonAction: "#formulario",
    buttonType: "internal",
    companies: [
      { name: "Iberdrola", logo: "/Logo_Iberdrola_(2023).svg.png" },
      { name: "Endesa", logo: "/Logo-Endesa.png" },
      { name: "Naturgy", logo: "/Naturgy.svg.png" },
      { name: "Nobe", logo: "/nobe.png" },
      { name: "Wasabi", logo: "🔥" },
      { name: "Podo", logo: "/podo.png" }
    ]
  },
  {
    title: "Telecomunicaciones",
    icon: Wifi,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    buttonAction: "https://wasabitel.com",
    buttonType: "external",
    companies: [
      { name: "Vodafone", logo: "📱" },
      { name: "Movistar", logo: "📞" },
      { name: "O2", logo: "🌐" },
      { name: "Wasabitel", logo: "📡" }
    ]
  },
  {
    title: "Salud",
    icon: Heart,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    buttonAction: "whatsapp",
    buttonType: "whatsapp",
    companies: [
      { name: "Adeslas", logo: "🏥" },
      { name: "DKV", logo: "💊" },
      { name: "Sanitas", logo: "🩺" },
      { name: "Caser", logo: "❤️" }
    ]
  }
];

const handleButtonClick = (service: any) => {
  if (service.buttonType === "whatsapp") {
    const message = `Hola, estoy interesado en ver los seguros de salud disponibles. 

Me gustaría recibir información sobre:
- Adeslas
- DKV  
- Sanitas
- Caser

¿Podrían ayudarme con una comparativa personalizada?`;
    
    const whatsappUrl = `https://wa.me/34621508300?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  } else if (service.buttonType === "external") {
    window.open(service.buttonAction, '_blank');
  }
  // For internal links, the default href behavior will work
};
export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-black mb-6 lg:mb-8">
            <Building2 className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
            TODOS LOS SERVICIOS
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 lg:mb-6">
            Comparamos las Mejores
            <span className="block bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Compañías del Mercado
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
            <span className="text-blue-600 font-black text-xl lg:text-2xl">Acceso directo</span> a las principales 
            empresas de energía, telecomunicaciones y seguros de salud
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6 lg:mb-8">
                <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg`}>
                  <service.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-bold text-sm lg:text-base">
                  {service.companies.length} compañías disponibles
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                {service.companies.map((company, companyIndex) => (
                  <div key={companyIndex} className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-3 lg:p-4 text-center hover:shadow-md transition-all duration-200 hover:scale-105`}>
                    <div className="h-8 lg:h-10 mb-2 flex items-center justify-center">
                      {company.logo.startsWith('/') ? (
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <div className="text-2xl lg:text-3xl">{company.logo}</div>
                      )}
                    </div>
                    <div className="text-gray-800 font-black text-xs lg:text-sm">{company.name}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                {service.buttonType === "internal" ? (
                  <a 
                    href={service.buttonAction}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 lg:py-4 rounded-2xl font-black text-sm lg:text-base hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105`}
                  >
                    <span>COMPARAR {service.title.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                ) : (
                  <button 
                    onClick={() => handleButtonClick(service)}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 lg:py-4 rounded-2xl font-black text-sm lg:text-base hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105`}
                  >
                    <span>
                      {service.title === "Salud" ? "VER SEGUROS" : 
                       service.title === "Telecomunicaciones" ? "IR A WASABITEL" : 
                       `COMPARAR ${service.title.toUpperCase()}`}
                    </span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="flex items-center justify-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
              <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current" />
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black">¡Todas las Compañías en un Solo Lugar!</h3>
              <Star className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 fill-current" />
            </div>
            <p className="text-lg lg:text-xl xl:text-2xl mb-6 lg:mb-8 text-blue-100">
              Comparamos <span className="font-black text-yellow-300">TODAS las ofertas disponibles</span> para encontrar la mejor opción para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <a 
                href="#formulario" 
                className="inline-flex items-center bg-white text-blue-700 px-8 lg:px-12 py-4 lg:py-6 rounded-2xl font-black text-lg lg:text-xl shadow-lg hover:bg-gray-50 transition-colors"
              >
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                EMPEZAR COMPARACIÓN
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-2 lg:ml-3" />
              </a>
              <div className="flex items-center space-x-2 lg:space-x-3 text-blue-200">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-black text-base lg:text-lg">4.9/5 - +10,000 clientes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}