import Image from 'next/image';
import styles from './page.module.css';
import Map from '../component/Map';

const Home = () => {
  const address = '1600 Amphitheatre Parkway, Mountain View, CA';
  
  return (
    <div>
      <h1>Google Maps Example</h1>
      <Map address={address} />
    </div>
  );
};
export default Home;
