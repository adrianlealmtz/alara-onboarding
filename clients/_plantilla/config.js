/* =========================================================
   PLANTILLA PARA UN CLIENTE NUEVO
   1. Copia esta carpeta y nómbrala con el nombre del cliente en minúsculas,
      sin espacios ni acentos (ej. "cuerno", "animal", "clavadito").
      Ese nombre será su URL: https://alara-onboarding.vercel.app/<nombre>
   2. Pon en la carpeta su logo (logo.png) y su banner (banner.jpg).
   3. Llena los datos de abajo.
   No se toca el Master Template (index.html).
   ========================================================= */
window.ALARA_CLIENT = {
  clientName: "Nombre del cliente", // CLIENT NAME
  logo: "logo.png",                 // LOGO
  banner: "banner.jpg",             // BANNER IMAGE (null = banner provisional)
  accentColor: "#000000",           // ACCENT COLOR — fondo del pase
  labelColor: "#FFFFFF",            // LABEL COLOR — etiquetas del pase ("auto" = calculado)
  textColor: "auto",                // (opcional) color del nombre en el pase

  phone: true,                      // PHONE NUMBER  (true = SÍ, false = NO)
  email: true,                      // EMAIL         (true = SÍ, false = NO)
  membership: false,                // MEMBERSHIP    (true = SÍ, false = NO)

  // CLIENT TERMS — "Términos del programa <cliente>". Los términos de Alara son globales: no van aquí.
  clientTerms: {
    version: "1.0",
    isDemo: false,
    sections: [
      { title: "1. Título de la sección", body: "Texto de la sección." }
    ]
  }
};
