import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';
import logo from './assets/logo.png'; // Import your background image
import Subscribe from './components/Subscribe';
import Card from './components/Card';
import { FaFingerprint , FaMugHot, FaBolt } from 'react-icons/fa';



function App() {
  return (
    <>
    <div className='header'>
        <img src={logo} alt="Logo" className="logo" />
        <Subscribe />
    </div>
    <section className="container">
      {/* Background Image */}
      <div className="background"></div>

      {/* Content over the background */}
      <div className="clock_content">
        
        <h1>Çatınızın Altında Akıllı Çözümler</h1>
        <h3>Akıllı Ev ve Ofis Sistemleri ile <br/> Tanışmaya Hazır Mısınız?</h3>
      
        <FlipClockCountdown
          className="flip-clock"
          to={new Date().getTime() + 60 * 24 * 3600 * 1000}  // 60 days in milliseconds
          labels={["GÜN", "SAAT", "DAKİKA", "SANİYE"]}
          duration={0.5}
        />
        <div className="card-container">
          <Card name="Güvenli" icon={<FaFingerprint size={50} color="#E6D7B3" />} />
          <Card name="Konforlu" icon={<FaMugHot size={50} color="#E6D7B3" />} />
          <Card name="Tasarruflu" icon={<FaBolt size={50} color="#E6D7B3" />} />
        </div>
      </div>
    </section>
    </>
    
  );
}

export default App;
