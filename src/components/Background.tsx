import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleDelay: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  angle: number;
}

const Background: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate twinkling stars with varied properties
    const generateStars = () => {
      const starArray: Star[] = [];
      for (let i = 0; i < 120; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 0.5, // Varied star sizes
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleDelay: Math.random() * 5,
        });
      }
      setStars(starArray);
    };

    // Generate more shooting stars
    const generateShootingStars = () => {
      const shootingStarArray: ShootingStar[] = [];
      for (let i = 0; i < 8; i++) {
        shootingStarArray.push({
          id: i,
          x: Math.random() * 80,
          y: Math.random() * 60,
          delay: Math.random() * 8 + 2, // 2-10 seconds delay
          duration: Math.random() * 1.5 + 1, // 1-2.5 seconds duration
          angle: Math.random() * 45 + 25, // 25-70 degree angles for diagonal fall
        });
      }
      setShootingStars(shootingStarArray);
    };

    generateStars();
    generateShootingStars();
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${3 + Math.random() * 4}s infinite ease-in-out`,
            animationDelay: `${star.twinkleDelay}s`,
            boxShadow: star.size > 2 ? "0 0 4px rgba(255,255,255,0.8)" : "none",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute"
          style={{
            left: `${shootingStar.x}%`,
            top: `${shootingStar.y}%`,
            animation: `shootingStar ${shootingStar.duration}s infinite ease-out`,
            animationDelay: `${shootingStar.delay}s`,
            transform: `rotate(${shootingStar.angle}deg)`,
          }}
        >
          <div className="relative">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-white to-transparent opacity-0"></div>
          </div>
        </div>
      ))}

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes shootingStar {
          0% {
            opacity: 0;
            transform: translateX(-20px) translateY(-20px) scale(0);
          }
          15% {
            opacity: 1;
            transform: translateX(30px) translateY(30px) scale(1);
          }
          85% {
            opacity: 1;
            transform: translateX(180px) translateY(180px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(220px) translateY(220px) scale(0.3);
          }
        }
        
        .absolute .absolute {
          animation: shootingTrail var(--duration, 0.4s) ease-out;
          animation-delay: inherit;
        }
        
        @keyframes shootingTrail {
          0% {
            opacity: 0;
            width: 0;
          }
          30% {
            opacity: 0.9;
            width: 60px;
          }
          100% {
            opacity: 0;
            width: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
