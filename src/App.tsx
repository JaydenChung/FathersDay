import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 500);
    const timer2 = setTimeout(() => setShowSubtext(true), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Subtle Yankees Pinstripe Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 12px, #1e293b 12px, #1e293b 14px)',
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Drifting Hearts */}
        <div className="absolute top-10 left-10 animate-drift opacity-40">
          <Heart className="w-16 h-16 text-red-200" />
        </div>
        <div className="absolute bottom-10 right-10 animate-drift delay-1000 opacity-30">
          <Heart className="w-20 h-20 text-blue-200" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <Heart className="w-12 h-12 text-red-300 opacity-60" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float-delayed">
          <Heart className="w-10 h-10 text-blue-300 opacity-50" />
        </div>
        
        {/* Sparkling Circles */}
        <div className="absolute top-1/3 left-20 w-6 h-6 bg-blue-200 rounded-full animate-sparkle opacity-60"></div>
        <div className="absolute top-2/3 right-32 w-8 h-8 bg-red-200 rounded-full animate-sparkle delay-1000 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-300 rounded-full animate-sparkle delay-500 opacity-70"></div>
        
        {/* Waving Elements */}
        <div className="absolute top-40 right-20 w-16 h-16 border-4 border-slate-200 rounded-full animate-wave opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 border-4 border-blue-200 rounded-full animate-wave delay-700 opacity-50"></div>
        
        {/* Additional Decorative Elements */}
        <div className="absolute top-1/2 right-1/3 w-10 h-10 rotate-45 border-2 border-red-200 animate-spin-slow opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-gradient-to-br from-blue-200 to-transparent rounded-full animate-pulse-slow opacity-60"></div>

        {/* New Spiral Hearts */}
        <div className="absolute top-1/4 right-1/4 animate-spiral">
          <Heart className="w-8 h-8 text-pink-300 opacity-50" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-spiral delay-1000">
          <Heart className="w-10 h-10 text-red-200 opacity-40" />
        </div>

        {/* Zigzag Elements */}
        <div className="absolute top-20 left-1/3 animate-zigzag">
          <div className="w-4 h-4 bg-blue-400 rotate-45 opacity-30"></div>
        </div>
        <div className="absolute bottom-20 right-1/3 animate-zigzag delay-1000">
          <div className="w-6 h-6 bg-red-300 rounded-full opacity-40"></div>
        </div>

        {/* Bouncing and Rotating Elements */}
        <div className="absolute top-1/3 right-20 animate-bounce-rotate">
          <div className="w-8 h-8 border-4 border-pink-300 rotate-45 opacity-40"></div>
        </div>
        <div className="absolute bottom-1/3 left-20 animate-bounce-rotate delay-500">
          <Heart className="w-10 h-10 text-blue-300 opacity-30" />
        </div>

        {/* Diagonal Floating Elements */}
        <div className="absolute top-40 right-40 animate-float-diagonal">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-40 left-40 animate-float-diagonal delay-1000">
          <div className="w-8 h-8 bg-gradient-to-tr from-red-200 to-blue-200 rounded-full opacity-30"></div>
        </div>

        {/* Scaling and Fading Elements */}
        <div className="absolute top-1/2 right-1/2 animate-scale-fade">
          <Heart className="w-12 h-12 text-pink-400 opacity-40" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 animate-scale-fade delay-2000">
          <div className="w-10 h-10 border-2 border-blue-300 rounded-full opacity-30"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Main Message */}
        <div className={`text-center transition-all duration-1000 transform mb-8 ${
          showMessage ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="inline-block text-slate-800 hover:text-slate-700 transition-colors duration-300">H</span>
            <span className="inline-block text-blue-600 hover:text-blue-500 transition-colors duration-300 delay-75">A</span>
            <span className="inline-block text-slate-800 hover:text-slate-700 transition-colors duration-300 delay-150">P</span>
            <span className="inline-block text-blue-600 hover:text-blue-500 transition-colors duration-300 delay-225">P</span>
            <span className="inline-block text-slate-800 hover:text-slate-700 transition-colors duration-300 delay-300">Y</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6 tracking-wide">
            <span className="text-blue-600">FATHER'S</span>{' '}
            <span className="text-slate-800">DAY</span>
          </h2>

          <div className="flex items-center justify-center">
            <Heart className="text-red-500 w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Photo Card Section */}
        <div className={`transition-all duration-1000 transform mb-8 ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-xl max-w-sm mx-auto">
            {/* Photo Area */}
            <div className="relative mb-4">
              <img 
                src="/FAM.jpg" 
                alt="Dad's Photo" 
                className="w-64 h-64 object-cover rounded-2xl mx-auto border-4 border-slate-800 shadow-lg"
              />
            </div>

            {/* Card Title */}
            <div className="text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Custom Message Section */}
        <div className={`text-center transition-all duration-1000 delay-500 transform max-w-3xl mx-auto ${
          showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              I'm so happy i get to spend this time with you before i graduate! I miss you so much and can't wait to see you after I come back from Asia! I love you so much and can't wait to be back in L.A with you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;