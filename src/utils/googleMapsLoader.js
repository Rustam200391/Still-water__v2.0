import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyAWmspvQhFt66ek1H_nBldNOO62Q-zIXAs',
  version: 'weekly',
  libraries: ['places'],
});

export default loader