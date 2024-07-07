// Define la función reportWebVitals que acepta un argumento onPerfEntry
const reportWebVitals = onPerfEntry => {
  // Comprueba si onPerfEntry está definido y es una función
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa el módulo 'web-vitals' de forma dinámica
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llama a cada función de medición de web-vitals con el argumento onPerfEntry
      getCLS(onPerfEntry); // Mide y reporta Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); // Mide y reporta First Input Delay (FID)
      getFCP(onPerfEntry); // Mide y reporta First Contentful Paint (FCP)
      getLCP(onPerfEntry); // Mide y reporta Largest Contentful Paint (LCP)
      getTTFB(onPerfEntry); // Mide y reporta Time to First Byte (TTFB)
    });
  }
};

// Exporta la función reportWebVitals como la exportación predeterminada del módulo
export default reportWebVitals;
