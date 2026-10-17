/* =========================================================
   CLIENTE: Nectarworks (cliente demo de Alara)
   URL: https://alara-onboarding.vercel.app/nectarworks
   Solo datos del cliente. El diseño, las pantallas y las animaciones
   viven en el Master Template (index.html) y son iguales para todos.
   ========================================================= */
window.ALARA_CLIENT = {
  clientName: "Nectarworks",        // CLIENT NAME — aparece en los textos ("Con Nectarworks y Alara…")
  logo: "logo.png",                 // LOGO — archivo en esta misma carpeta
  banner: null,                     // BANNER IMAGE — archivo en esta carpeta (ej. "banner.jpg"); null = banner provisional azul
  accentColor: "#1B4536",           // ACCENT COLOR — color de fondo del pase
  labelColor: "auto",               // LABEL COLOR — color de las etiquetas del pase; "auto" = se calcula del Accent Color
  textColor: "#F3E8D1",             // (opcional) color del nombre en el pase; "auto" = blanco o negro según el fondo

  phone: true,                      // PHONE NUMBER — true = SÍ se pide, false = NO
  email: true,                      // EMAIL — true = SÍ se pide, false = NO
  membership: true,                 // MEMBERSHIP — true = SÍ muestra la membresía, false = NO

  // CLIENT TERMS AND CONDITIONS — "Términos del programa Nectarworks".
  // Los Términos y Condiciones de Alara son globales y NO se escriben aquí.
  clientTerms: {
    version: "1.0-demo",
    isDemo: true,                   // true = texto de ejemplo (se marca como demo)
    sections: [
      { title: "1. Registro y participación", body: "El usuario deberá proporcionar información correcta y actualizada para crear su Pase Digital." },
      { title: "2. Uso del Pase Digital", body: "El pase podrá utilizarse en los establecimientos participantes mediante Apple Wallet o Google Wallet, según la compatibilidad del dispositivo." },
      { title: "3. Beneficios y recompensas", body: "Los beneficios estarán sujetos a las condiciones específicas del programa y podrán variar según el establecimiento." },
      { title: "4. Modificaciones", body: "El comercio podrá actualizar las condiciones de su programa conforme a la legislación aplicable." }
    ]
  }
};
