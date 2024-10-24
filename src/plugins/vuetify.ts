/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
//import 'vuetify/styles'
import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'

/*
THEMES
*/
const purpleDarkTheme = {
  dark: true,
  colors: {
    background: '#0f091e',      // Fondo oscuro y profundo
    surface: '#1A1A1A',         // Superficie oscura pero contrastante
    'surface-bright': '#242424', // Brillantez mínima para destacar algunos elementos
    'surface-light': '#2E2E2E',  // Tono claro para detalles
    'c': '#4A148C', // Un púrpura oscuro y menos saturado
    'on-surface-variant': '#7E57C2',  // Menos saturación en el púrpura claro para no ser vibrante
    primary: '#301b60',         // Un morado profundo, casi negro, como color principal
    'primary-darken-1': '#311B92',  // Morado más oscuro para variantes de contraste
    secondary: '#673AB7',       // Tono morado secundario intermedio
    'secondary-darken-1': '#4527A0',  // Secundario más oscuro para detalles importantes
    error: '#D32F2F',           // Mantener el rojo de error para buena visibilidad
    info: '#0288D1',            // Azul menos vibrante pero útil para mensajes informativos
    success: '#388E3C',         // Verde estándar para éxito
    warning: '#FFA000',         // Naranja clásico para advertencias
  },
  variables: {
    'border-color': '#211245',  // Usar el color primary oscuro para bordes
    'border-opacity': 0.12,     // Mantener opacidad baja para no ser intrusivo
    'high-emphasis-opacity': 0.87,  // Alta opacidad para elementos importantes
    'medium-emphasis-opacity': 0.60,  // Opacidad media para contenido de menos prioridad
    'disabled-opacity': 0.38,   // Mantener opacidad baja para elementos deshabilitados
    'idle-opacity': 0.05,       // Suave opacidad cuando los elementos están inactivos
    'hover-opacity': 0.1,       // Aumentar un poco la opacidad al pasar el mouse
    'focus-opacity': 0.15,      // Mayor visibilidad en elementos enfocados
    'selected-opacity': 0.12,   // Ligero aumento de opacidad para elementos seleccionados
    'activated-opacity': 0.14,  // Activación moderada en elementos interactuados
    'pressed-opacity': 0.18,    // Más visible cuando se presiona un elemento
    'dragged-opacity': 0.1,     // Opacidad notable en elementos arrastrados
    'theme-kbd': '#7E57C2',     // Teclas con tono morado claro
    'theme-on-kbd': '#FFFFFF',  // Texto de las teclas en blanco
    'theme-code': '#4527A0',    // Color morado más oscuro para bloques de código
    'theme-on-code': '#FFFFFF', // Texto en blanco dentro de los bloques de código
  },
};


const greenDarkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    'surface-bright': '#2A2A2A',
    'surface-light': '#383838',
    'surface-variant': '#4CAF50',
    'on-surface-variant': '#A5D6A7',
    primary: '#388E3C',
    'primary-darken-1': '#2E7D32',
    secondary: '#66BB6A',
    'secondary-darken-1': '#43A047',
    error: '#F44336',
    info: '#0288D1',
    success: '#81C784',
    warning: '#FFB300',
  },
  variables: {
    'border-color': '#FFFFFF',
    'border-opacity': 0.16,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.08,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.16,
    'dragged-opacity': 0.08,
    'theme-kbd': '#C8E6C9',
    'theme-on-kbd': '#1B5E20',
    'theme-code': '#1B5E20',
    'theme-on-code': '#FFFFFF',
  },
};

const deepBlueDarkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    'surface-bright': '#2A2A2A',
    'surface-light': '#383838',
    'surface-variant': '#1E88E5',
    'on-surface-variant': '#BBDEFB',
    primary: '#1565C0',
    'primary-darken-1': '#0D47A1',
    secondary: '#64B5F6',
    'secondary-darken-1': '#1976D2',
    error: '#EF5350',
    info: '#29B6F6',
    success: '#4CAF50',
    warning: '#FFB300',
  },
  variables: {
    'border-color': '#FFFFFF',
    'border-opacity': 0.16,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.08,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.16,
    'dragged-opacity': 0.08,
    'theme-kbd': '#BBDEFB',
    'theme-on-kbd': '#0D47A1',
    'theme-code': '#0D47A1',
    'theme-on-code': '#FFFFFF',
  },
};


const blueGreyDarkTheme = {
  dark: true,
  colors: {
    background: '#2c2c2c',
    surface: '#1E1E1E',
    'surface-bright': '#2A2A2A',
    'surface-light': '#383838',
    'surface-variant': '#607D8B',
    'on-surface-variant': '#CFD8DC',
    primary: '#546E7A',
    'primary-darken-1': '#455A64',
    secondary: '#78909C',
    'secondary-darken-1': '#37474F',
    error: '#E53935',
    info: '#29B6F6',
    success: '#66BB6A',
    warning: '#FFB300',
  },
  variables: {
    'border-color': '#FFFFFF',
    'border-opacity': 0.16,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.08,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.16,
    'dragged-opacity': 0.08,
    'theme-kbd': '#CFD8DC',
    'theme-on-kbd': '#37474F',
    'theme-code': '#37474F',
    'theme-on-code': '#FFFFFF',
  },
};

const tealLightTheme = {
  dark: false,
  colors: {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    'surface-bright': '#E0F2F1',
    'surface-light': '#B2DFDB',
    'surface-variant': '#009688',
    'on-surface-variant': '#00796B',
    primary: '#009688',
    'primary-darken-1': '#00796B',
    secondary: '#80CBC4',
    'secondary-darken-1': '#4DB6AC',
    error: '#E53935',
    info: '#039BE5',
    success: '#43A047',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#00796B',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#004D40',
    'theme-on-code': '#FFFFFF',
  },
};


const blueIndigoLightTheme = {
  dark: false,
  colors: {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    'surface-bright': '#E3F2FD',
    'surface-light': '#BBDEFB',
    'surface-variant': '#3F51B5',
    'on-surface-variant': '#C5CAE9',
    primary: '#3F51B5',
    'primary-darken-1': '#303F9F',
    secondary: '#9FA8DA',
    'secondary-darken-1': '#5C6BC0',
    error: '#D32F2F',
    info: '#0288D1',
    success: '#388E3C',
    warning: '#FFA000',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#C5CAE9',
    'theme-on-kbd': '#1A237E',
    'theme-code': '#1A237E',
    'theme-on-code': '#FFFFFF',
  },
};



// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
/*export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
})*/
export default createVuetify({
  theme: {
    defaultTheme: 'purpleDarkTheme',
    themes: {
      purpleDarkTheme,
      greenDarkTheme,
      deepBlueDarkTheme,
      blueGreyDarkTheme,
      tealLightTheme,
      blueIndigoLightTheme
    },
  },
})