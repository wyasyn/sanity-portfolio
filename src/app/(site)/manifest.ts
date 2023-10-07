import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yasin Walum',
    short_name: 'Walum',
    description: 'Yasin Walum - Web Developer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#2b2b2b',
    theme_color: '#d1d1d1',
    orientation: "portrait-primary",
    icons: [
      {
        src: '/icons/fav-72x86.png',
        sizes: 'any',
        type: 'image',
      },
    ],
  }
}