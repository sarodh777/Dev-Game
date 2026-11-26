import React from 'react';
import { ExternalLink, RotateCcw, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { EXTERNAL_GAME_URL } from '../config/keysConfig.js';
import { soundFx } from '../utils/audio.js';

export default function FinalGameScreen({ onRestart }) {
  const handlePlayGame = () => {
    soundFx.playLockOpen();
    window.open(EXTERNAL_GAME_URL, '_blank', 'noopener,noreferrer');
  };

  const handleRestart = () => {
    soundFx.playDelete();
    onRestart();
  };

  return (
    <div style={{
      maxWidth: '820px',
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      animation: 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4); }
          50% { text-shadow: 0 0 40px #ffffff, 0 0 80px rgba(255, 255, 255, 0.75); }
        }
        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.7), 0 0 50px rgba(255, 255, 255, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 45px #ffffff, 0 0 85px rgba(255, 255, 255, 0.6);
            transform: scale(1.02);
          }
        }
        .prominent-game-button {
          animation: buttonPulse 2.5s infinite ease-in-out;
        }
        .prominent-game-button:hover {
          transform: scale(1.05) translateY(-2px) !important;
          box-shadow: 0 0 60px #ffffff, 0 0 100px rgba(255, 255, 255, 0.9) !important;
        }
      `}</style>

      {/* Premium Game Access Card */}
      <div 
        className="cyber-box"
        style={{
          padding: '60px 40px',
          border: '1.5px solid #ffffff',
          boxShadow: '0 0 60px rgba(255, 255, 255, 0.3), inset 0 0 35px rgba(255, 255, 255, 0.06)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#050505'
        }}
      >
        {/* Ambient Top Light Beam */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '15%',
          right: '15%',
          height: '2px',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 20px #ffffff, 0 0 40px #ffffff'
        }} />

        {/* Security Clearance Header Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          border: '1px solid #ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.25)',
          marginBottom: '28px'
        }}>
          <ShieldCheck size={18} color="#ffffff" />
          <span style={{
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            fontFamily: 'var(--font-tech)',
            color: '#ffffff',
            fontWeight: 700,
            textTransform: 'uppercase'
          }}>
            MISSION COMPLETE // CLEARANCE 100%
          </span>
        </div>

        {/* Congratulations Banner */}
        <div style={{
          fontSize: '1.15rem',
          letterSpacing: '0.12em',
          fontFamily: 'var(--font-tech)',
          color: '#ffffff',
          fontWeight: 700,
          marginBottom: '32px',
          textShadow: '0 0 12px rgba(255, 255, 255, 0.6)'
        }}>
          Congratulations! You have unlocked the final game.
        </div>

        {/* Level Devil Hero Title */}
        <div style={{
          margin: '28px 0',
          position: 'relative',
          display: 'inline-block'
        }}>
          {/* Subtle Outer Frame */}
          <div style={{
            position: 'absolute',
            inset: '-16px -28px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            pointerEvents: 'none'
          }} />

          <h1 style={{
            fontSize: 'clamp(3rem, 7.5vw, 5.4rem)',
            fontWeight: 900,
            letterSpacing: '0.14em',
            fontFamily: 'var(--font-tech)',
            color: '#ffffff',
            margin: 0,
            textTransform: 'uppercase',
            animation: 'pulseGlow 3s ease-in-out infinite'
          }}>
            LEVEL DEVIL
          </h1>
        </div>

        {/* Subtitle: YOUR FINAL CHALLENGE AWAITS. */}
        <div style={{
          fontSize: '1.1rem',
          letterSpacing: '0.35em',
          color: '#cccccc',
          fontFamily: 'var(--font-tech)',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginTop: '12px',
          marginBottom: '42px',
          textShadow: '0 0 8px rgba(255, 255, 255, 0.4)'
        }}>
          YOUR FINAL CHALLENGE AWAITS.
        </div>

        {/* Action Controls */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          marginTop: '20px'
        }}>
          {/* Prominent Animated Button: [ PLAY LEVEL DEVIL ] with external-link icon */}
          <button
            type="button"
            onClick={handlePlayGame}
            className="cyber-button prominent-game-button"
            style={{
              minWidth: '320px',
              padding: '20px 48px',
              fontSize: '1.25rem',
              fontWeight: 900,
              letterSpacing: '0.22em',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '2px solid #ffffff',
              cursor: 'pointer'
            }}
          >
            PLAY LEVEL DEVIL
            <ExternalLink size={22} style={{ strokeWidth: 2.5 }} />
          </button>

          {/* Restart Mission Button */}
          <button
            type="button"
            onClick={handleRestart}
            className="cyber-button cyber-button-secondary"
            style={{
              minWidth: '220px',
              padding: '12px 28px',
              fontSize: '0.88rem',
              letterSpacing: '0.18em'
            }}
          >
            <RotateCcw size={16} />
            RESTART MISSION
          </button>
        </div>

        {/* Terminal Info Footer */}
        <div style={{
          marginTop: '48px',
          paddingTop: '20px',
          borderTop: '1px solid #1c1c1c',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.72rem',
          letterSpacing: '0.15em',
          color: '#555555',
          fontFamily: 'var(--font-mono)'
        }}>
          <span>GATEWAY: VERIFIED</span>
          <span>TARGET: POKI / LEVEL-DEVIL</span>
        </div>
      </div>
    </div>
  );
}
