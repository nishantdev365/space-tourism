/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('././assets/home/background-home-desktop.jpg')",
        'home-tablet' : "url('././assets/home/background-home-tablet.jpg')",
        'home-mobile' : "url('././assets/home/background-home-mobile.jpg')",
        'crew-desktop' : "url('././assets/crew/background-crew-desktop.jpg')",
        'crew-tablet' : "url('././assets/crew/background-crew-tablet.jpg')",
        'crew-mobile' : "url('././assets/crew/background-crew-mobile.jpg')",
        'anousheh-ansari' : "url('././assets/crew/image-anousheh-ansari.jpg')",
        'douglas-hurley' : "url('././assets/crew/image-douglas-hurley.jpg')",
        'mark-shuttleworth' : "url('././assets/crew/image-mark-shuttleworth.jpg')",
        'victor-glover' : "url('././assets/crew/image-victor-glover.jpg')",
        'destination-desktop' : "url('././assets/destination/background-destination-desktop.jpg')",
        'destination-tablet' : "url('././assets/destination/background-destination-tablet.jpg')",
        'destination-mobile' : "url('././assets/destination/background-destination-mobile.jpg')",
        'europa' : "url('././assets/destination/image-europa.png')",
        'mars' : "url('././assets/destination/image-mars.png')",
        'moon' : "url('././assets/destination/image-moon.png')",
        'titan' : "url('././assets/destination/image-titan.png')",
        'icon-close' : "url('././assets/shared/icon-close.svg')",
        'icon-hamburger' : "url('././assets/shared/icon-hamburger.svg')",
        'logo' : "url('././assets/shared/logo.svg')",
        'technology-desktop' : "url('././assets/technology/background-technology-desktop.jpg')",
        'technology-mobile' : "url('././assets/technology/background-technology-mobile.jpg')",
        'technology-tablet' : "url('././assets/technology/background-technology-tablet.jpg')",
        'launch-vehicle-landscape' : "url('././assets/technology/image-launch-vehical-landscape.jpg')",
        'launch-vehicle-portrait' : "url('././assets/technology/image-launch-vehical-portrait.jpg')",
        'space-capsule-landscape' : "url('././assets/technology/image-space-capsule-landscape.jpg')",
        'space-capsule-potrait' : "url('././assets/technology/image-space-capsule-potrait.jpg')",
        'spaceport-landscape' : "url('././assets/technology/image-spaceport-landscape.jpg')",
        'spaceport-potrait' : "url('././assets/technology/image-spaceport-potrait.jpg')",
      },
      colors: {
        custom: {
          'rgba-white': 'rgba(255, 255, 255, 0.04)',
        },
      },
      // fontFamily: {
      //   'universal': ['Roboto', 'sans'],
      // },
      animation: {
        'spin-slow': 'spin 150s linear infinite',
      },
      screens: {
        'sm': '520px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '920px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}