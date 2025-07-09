"use client"
import React, { useState, useEffect } from 'react';
import { Camera, MapPin, Image, Download, Smartphone, Globe, Lock, Zap, ChevronDown, Star, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GhostPinLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const router = useRouter();
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      // (0+1)%3=1, (1+1)%3=2, (2+1)%3=0
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Pin Any Location",
      description: "Add custom GPS coordinates to any photo, anywhere in the world",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Instant Capture",
      description: "Take photos with your chosen location embedded seamlessly",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Location Freedom",
      description: "Let your memories float anywhere - break free from GPS constraints",
      color: "from-pink-400 to-rose-500"
    }
  ];

  const stats = [
    { number: "10M+", label: "Photos Enhanced" },
    { number: "500K+", label: "Active Users" },
    { number: "4.9★", label: "App Store Rating" },
    { number: "100+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full opacity-10 bg-white -top-20 -right-20 animate-pulse" />
        <div className="absolute w-64 h-64 rounded-full opacity-10 bg-white -bottom-10 -left-10 animate-pulse" />
        <div className="absolute w-32 h-32 rounded-full opacity-20 bg-white top-1/2 left-1/4 animate-bounce" style={{ animationDelay: '1s' }} />
      </div>

      {/* Animated Ghost Watermark */}
      <div className="absolute top-20 right-8 opacity-5 animate-pulse">
        <div className="w-80 h-80 text-white text-9xl flex items-center justify-center">👻</div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        {/* IMportant to center the nav bar make sure to use max-w-6xl mx-auto */}
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">👻</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-wider">GhostPin</h1>
              <p className="text-sm text-white/80 font-medium">Location Freedom</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/90 hover:text-white transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-white/90 hover:text-white transition-colors font-medium">How It Works</a>
            <a href="#download" className="text-white/90 hover:text-white transition-colors font-medium">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Pin Any Location
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                To Your Photos
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Break free from GPS constraints. Add any location to your photos and let your memories float anywhere in the world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a download={true} href="/apks/ghostpin.apk" className="group relative px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Free</span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Powerful Features</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group relative p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-white/10 ${
                  activeFeature === index ? 'bg-white/25' : 'bg-white/15'
                }`}
                style={{
                  boxShadow: activeFeature === index ? '0 25px 50px rgba(255,255,255,0.1)' : '0 15px 30px rgba(0,0,0,0.2)'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-white/80 leading-relaxed font-medium">{feature.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">How It Works</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Add Location", description: "Search and pin any location on the map or enter coordinates manually", icon: <MapPin className="w-12 h-12" /> },
              { step: "02", title: "Capture Photo", description: "Take a photo with your camera - the location will be embedded automatically", icon: <Camera className="w-12 h-12" /> },
              { step: "03", title: "Share Anywhere", description: "Your photo now has the custom location data - share it and watch the magic happen", icon: <Globe className="w-12 h-12" /> }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center text-white mx-auto backdrop-blur-sm border border-white/20">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-black font-black text-sm">
                    {item.step}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-white/80 leading-relaxed font-medium">{item.description}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-80 h-96 bg-gradient-to-br from-white/20 to-white/10 rounded-[3rem] backdrop-blur-xl border-8 border-white/20 shadow-2xl mx-auto relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-[2rem] overflow-hidden">
                  {/* Mock app interface */}
                  <div className="p-6 pt-12">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-lg">👻</span>
                      </div>
                      <div>
                        <div className="text-white font-black text-lg">GhostPin</div>
                        <div className="text-white/80 text-xs">Location Freedom</div>
                      </div>
                    </div>
                    
                    <div className="text-white/90 text-sm mb-6 leading-relaxed">
                      Pin any location to your photos. Add a spot, snap a pic, and let your memories float anywhere.
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-white/90 rounded-xl p-3 flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3" />
                        <div>
                          <div className="text-gray-800 font-bold text-xs">40.7128, -74.0060</div>
                          <div className="text-gray-600 text-xs">New York, NY</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/90 rounded-xl p-3 flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3" />
                        <div>
                          <div className="text-gray-800 font-bold text-xs">48.8566, 2.3522</div>
                          <div className="text-gray-600 text-xs">Paris, France</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 rounded-t-3xl p-4 flex justify-around">
                    <div className="w-12 h-12 bg-emerald-400 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center -mt-2">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-rose-400 rounded-xl flex items-center justify-center">
                      <Image className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements around phone */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center animate-bounce">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Download GhostPin now and start pinning your photos to any location in the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                <Smartphone className="w-5 h-5" />
                <span>Download for iOS</span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                <Download className="w-5 h-5" />
                <span>Download for Android</span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
              <span className="text-white/90 ml-2 font-medium">4.9 stars • 10,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">👻</span>
            </div>
            <div>
              <h4 className="text-xl font-black text-white tracking-wider">GhostPin</h4>
              <p className="text-sm text-white/80">Location Freedom</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-white/80">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/support" className="hover:text-white transition-colors">Support</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <p className="text-white/60 text-sm">© 2024 GhostPin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}