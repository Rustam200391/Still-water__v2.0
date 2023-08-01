import Image from 'next/image';
import styles from './page.module.css';
import Map from '../component/Map';

const Home = () => {
  const address = 'Nizami kuc 10, Baku, Azerbaijan';
  
  return (
    <div>
      <h1>Google Maps Example</h1>
      <Map address={address} />
    </div>
  );
};
export default Home;
