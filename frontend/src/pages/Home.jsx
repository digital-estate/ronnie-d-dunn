import React, { useEffect, useState } from 'react';
import { Play, Youtube, Download, Mail, Music, Facebook, Instagram } from 'lucide-react';
import { artistData } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLogoVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleListenNow = () => {
    window.open(artistData.release.smartLink, '_blank');
  };

  const handleYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${artistData.release.youtubeId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-section relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={artistData.heroImage}
            alt={artistData.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <div className={`logo-container mb-8 transition-all duration-1000 ${logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <img 
                src={artistData.logo}
                alt={`${artistData.name} Logo`}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain logo-glow"
              />
              <div className="light-sweep"></div>
            </div>
          </div>
          
          <h1 className="hero-tagline text-xl md:text-2xl lg:text-3xl font-light max-w-4xl mb-12 px-4 text-gold-light">
            {artistData.tagline}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleListenNow}
              className="cta-button bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Button>
            <Button 
              onClick={handleYouTube}
              className="cta-button bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
            >
              <Youtube className="mr-2 h-5 w-5" />
              Watch on YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-20 md:py-32 px-4 bg-neutral-warm">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-light text-center mb-6 text-gold">
            About The Artist
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          <div className="bio-text text-lg md:text-xl leading-relaxed text-gray-300 space-y-6">
            {artistData.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="music-section py-20 md:py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-light text-center mb-6 text-gold">
            Music
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="album-artwork-container">
              <Card className="overflow-hidden bg-neutral-900 border-gold/20">
                <img 
                  src={artistData.release.artwork}
                  alt={artistData.release.title}
                  className="w-full h-auto album-artwork"
                />
              </Card>
            </div>
            
            <div className="music-info">
              <h3 className="text-3xl md:text-4xl font-light mb-4 text-gold-light">
                {artistData.release.title}
              </h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {artistData.release.description}
              </p>
              
              <Button 
                onClick={handleListenNow}
                className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-6 text-base rounded-full transition-all duration-300 hover:scale-105 mb-4"
              >
                <Music className="mr-2 h-5 w-5" />
                Listen on All Platforms
              </Button>
              
              <div className="text-center text-sm text-gray-500 mt-4">
                Available on Spotify, Apple Music, YouTube Music, and more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section py-20 md:py-32 px-4 bg-neutral-warm">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-light text-center mb-6 text-gold">
            Video
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>
          
          <div className="video-container relative rounded-lg overflow-hidden shadow-2xl border-2 border-gold/30">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${artistData.release.youtubeId}`}
                title={artistData.release.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Message & Mission Section */}
      <section className="mission-section py-20 md:py-32 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-light text-center mb-6 text-gold">
            Message & Mission
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-16"></div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {artistData.mission.map((statement, index) => (
              <Card 
                key={index}
                className="mission-card bg-neutral-900 border-gold/20 p-8 text-center hover:border-gold/50 transition-all duration-300 hover:scale-105"
              >
                <p className="text-xl md:text-2xl font-light text-gold-light">
                  {statement}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Media Section */}
      <section className="press-section py-20 md:py-32 px-4 bg-neutral-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gold">
            Press & Media
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
          
          <p className="text-lg text-gray-400 mb-12">
            For press, radio, booking, and sync licensing inquiries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Press Release
            </Button>
            <Button 
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download 1-Page EPK
            </Button>
          </div>
          
          <a 
            href={`mailto:${artistData.contact.email}`}
            className="inline-flex items-center text-gold hover:text-gold-light text-lg transition-colors duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            {artistData.contact.email}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-12 px-4 bg-black border-t border-gold/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="social-links flex gap-6">
              <a href={artistData.social.youtube} className="social-icon hover:scale-110 transition-transform duration-300">
                <Youtube className="h-6 w-6 text-gold hover:text-gold-light" />
              </a>
              <a href={artistData.social.spotify} className="social-icon hover:scale-110 transition-transform duration-300">
                <Music className="h-6 w-6 text-gold hover:text-gold-light" />
              </a>
              <a href={artistData.social.instagram} className="social-icon hover:scale-110 transition-transform duration-300">
                <Instagram className="h-6 w-6 text-gold hover:text-gold-light" />
              </a>
              <a href={artistData.social.facebook} className="social-icon hover:scale-110 transition-transform duration-300">
                <Facebook className="h-6 w-6 text-gold hover:text-gold-light" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">
                Distributed by <span className="text-gold font-semibold">{artistData.distributor}</span>
              </p>
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Ronnie D Dunn. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
