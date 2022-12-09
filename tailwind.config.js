
/* Pinegrow generated Design Panel Begin */

const pg_colors = {gray: {'50': '#f9fafb',
'100': '#f3f4f6',
'200': '#e5e7eb',
'300': '#d1d5db',
'400': '#9ca3af',
'500': '#6b7280',
'600': '#4b5563',
'700': '#374151',
'800': '#1f2937',
'900': '#111827',
},
blue: {'50': '#eff6ff',
'100': '#dbeafe',
'200': '#bfdbfe',
'300': '#93c5fd',
'400': '#60a5fa',
'500': '#3b82f6',
'600': '#2563eb',
'700': '#1d4ed8',
'800': '#1e40af',
'900': '#1e3a8a',
},
indigo: {'50': '#eef2ff',
'100': '#e0e7ff',
'200': '#c7d2fe',
'300': '#a5b4fc',
'400': '#818cf8',
'500': '#6366f1',
'600': '#4f46e5',
'700': '#4338ca',
'800': '#3730a3',
'900': '#312e81',
},
purple: {'50': '#f5f3ff',
'100': '#ede9fe',
'200': '#ddd6fe',
'300': '#c4b5fd',
'400': '#a78bfa',
'500': '#8b5cf6',
'600': '#7c3aed',
'700': '#6d28d9',
'800': '#5b21b6',
'900': '#4c1d95',
},
dwi: {'50': '#e2f6fd',
'100': '#c8ecfc',
'200': '#ade2fa',
'300': '#8fd8f9',
'400': '#6dcef7',
'500': '#3bc4f5',
'600': '#31a2cb',
'700': '#2881a2',
'800': '#1e627b',
'900': '#154556',
},
dwis: {'50': '#e2f6fd',
'100': '#c8ecfc',
'200': '#ade2fa',
'300': '#8fd8f9',
'400': '#6dcef7',
'500': '#3bc4f5',
'600': '#31a2cb',
'700': '#2881a2',
'800': '#1e627b',
'900': '#154556',
},
}

const pg_fonts = {sans: ["'Montserrat', sans-serif",
],
}                
                
    /* Pinegrow generated Design Panel End */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_pginfo/**/*.{html,js,css}",
  "./*.{html,js,css}",
  "./inc/**/*.{html,js,css}",
  ],
  theme: {
    extend: {
      colors: pg_colors, //<-- Use the pg_colors for colors
      fontFamily: pg_fonts, //<-- Use the pg_fonts for fonts
    },
  },
  plugins: [],
}