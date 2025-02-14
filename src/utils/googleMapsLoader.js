import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: 'weekly',
  libraries: ['places'],
});


console.log("Google Maps Loader инициализирован");

console.log("API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);


export default loader