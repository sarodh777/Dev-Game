import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import ThreePortalVault from './ThreePortalVault.jsx';
import { EXTERNAL_GAME_URL } from '../config/keysConfig.js';
import { soundFx } from '../utils/audio.js';

/**
 * Cinematic 3D Experience & Final Game Reveal
 * 
 * Flow:
 * Stage 1: Verification Complete (Status VERIFIED, "ALL SECURITY NODES VERIFIED", 8 chars illuminate, 100% progress)
 * Stage 2: Security Unlock (Deep black fade, 8 floating 3D metallic blocks converge, 3D vault-opening, "ACCESS GRANTED")
 * Stage 3: 3D Portal Animation (Multiple rotating metallic rings, glowing light, 3D particles, camera dolly)
 * Stage 4: LEVEL DEVIL Game Reveal (3D game card floating in front of portal, [ LAUNCH GAME ↗ ], [ RESTART MISSION ])
 */
export default function Cinematic3DExperience({ authData, onRestart }) {
  const chars = authData?.chars || ['H','A','C','K','A','D','K','U'];
  const room01Key = authData?.room01Key || chars.slice(0, 4).join('');
  const room02Key = authData?.room02Key || chars.slice(4, 8).join('');

  // Stages: 'verify' (1) -> 'unlock' (2) -> 'portal' (3) -> 'game_reveal' (4)
  const [stage, setStage] = useState('verify');
  const [illuminatedIdx, setIlluminatedIdx] = useState(-1);
  const [progressVal, setProgressVal] = useState(0);

  // Fail-safe ref to ensure stage progression is strictly guaranteed
  const hasFinishedRef = useRef(false);

  // Orchestrate the stage progression
  useEffect(() => {
    // Stage 1: Rapid sequential illumination of all 8 nodes (0 to 7)
    let idx = 0;
    const illumInterval = setInterval(() => {
      if (idx < 8) {
        setIlluminatedIdx(idx);
        setProgressVal(Math.round(((idx + 1) / 8) * 100));
        soundFx.playKeyTyping();
        idx++;
      } else {
        clearInterval(illumInterval);
      }
    }, 90);

    // Transition to Stage 2: Security Unlock
    const t2 = setTimeout(() => {
      setStage('unlock');
      soundFx.playLockAssemble();
    }, 1300);

    // Transition to Stage 3: 3D Portal Activation
    const t3 = setTimeout(() => {
      setStage('portal');
      soundFx.playLockOpen();
      soundFx.playPortalHum();
    }, 3200);

    // Transition to Stage 4: Game Reveal (The final permanent card)
    const t4 = setTimeout(() => {
      setStage('game_reveal');
      hasFinishedRef.current = true;
    }, 5400);

    // Master fail-safe timer: Guarantees progression to game_reveal within 6 seconds
    const masterFallback = setTimeout(() => {
      if (!hasFinishedRef.current) {
        setStage('game_reveal');
        hasFinishedRef.current = true;
      }
    }, 6000);

    return () => {
      clearInterval(illumInterval);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(masterFallback);
    };
  }, []);

  const handleLaunchGame = () => {
    soundFx.playLockOpen();
    window.open(EXTERNAL_GAME_URL, '_blank', 'noopener,noreferrer');
  };

  const handleSkipToGame = () => {
    setStage('game_reveal');
    hasFinishedRef.current = true;
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#000000',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes pulseGlowText {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4); }
          50% { text-shadow: 0 0 40px #ffffff, 0 0 80px rgba(255, 255, 255, 0.85); }
        }
        @keyframes cardFloating {
          0%, 100% { transform: translateY(0px) rotateX(1deg); }
          50% { transform: translateY(-8px) rotateX(-1deg); }
        }
        @keyframes buttonLightSweep {
          0% { left: -120%; }
          50%, 100% { left: 140%; }
        }
        @keyframes portalAuraPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.12); opacity: 1; }
        }

        .launch-game-button {
          background-color: #ffffff !important;
          color: #000000 !important;
          border: 2px solid #ffffff !important;
          font-family: var(--font-tech);
          font-size: 1.28rem;
          font-weight: 900;
          letter-spacing: 0.22em;
          padding: 20px 48px;
          cursor: pointer;
          position: relative;
          text-transform: uppercase;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 0 35px rgba(255, 255, 255, 0.75), 0 0 70px rgba(255, 255, 255, 0.3);
        }

        .launch-game-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 80%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.35), transparent);
          animation: buttonLightSweep 3s infinite ease-in-out;
        }

        .launch-game-button:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 0 60px #ffffff, 0 0 110px rgba(255, 255, 255, 0.9);
        }

        .launch-game-button:active {
          transform: scale(0.97) translateY(1px);
        }

        .floating-game-card {
          animation: cardFloating 6s ease-in-out infinite;
        }
      `}</style>

      {/* Top Bar Skip Button during animations */}
      {stage !== 'game_reveal' && (
        <button
          onClick={handleSkipToGame}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'transparent',
            border: '1px solid #444444',
            color: '#888888',
            padding: '8px 18px',
            fontFamily: 'var(--font-tech)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            cursor: 'pointer',
            zIndex: 120,
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = '#ffffff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#888888';
            e.currentTarget.style.borderColor = '#444444';
          }}
        >
          SKIP TO GAME &gt;&gt;
        </button>
      )}

      {/* ============================================================== */}
      {/* THREE.JS 3D PORTAL & VAULT CANVAS (Stages 2, 3, 4)             */}
      {/* ============================================================== */}
      {(stage === 'unlock' || stage === 'portal' || stage === 'game_reveal') && (
        <ThreePortalVault chars={chars} stage={stage} />
      )}

      {/* Central Glowing Halo behind 3D Portal */}
      {(stage === 'portal' || stage === 'game_reveal') && (
        <div style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.12) 45%, transparent 70%)',
          boxShadow: '0 0 120px rgba(255, 255, 255, 0.5), inset 0 0 80px rgba(255, 255, 255, 0.3)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          zIndex: 4,
          animation: 'portalAuraPulse 4s infinite ease-in-out'
        }} />
      )}

      {/* ============================================================== */}
      {/* STAGE 1: VERIFICATION COMPLETE (0 - 1.3s)                      */}
      {/* ============================================================== */}
      {stage === 'verify' && (
        <div style={{
          zIndex: 20,
          textAlign: 'center',
          maxWidth: '880px',
          padding: '20px',
          animation: 'fadeIn 0.3s ease'
        }}>
          {/* Status Badge: VERIFIED */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 20px',
            border: '1.5px solid #ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
            marginBottom: '20px'
          }}>
            <ShieldCheck size={18} color="#ffffff" />
            <span style={{
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
              fontFamily: 'var(--font-tech)',
              color: '#ffffff',
              fontWeight: 800
            }}>
              STATUS: VERIFIED
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            fontWeight: 800,
            letterSpacing: '0.22em',
            fontFamily: 'var(--font-tech)',
            color: '#ffffff',
            margin: '0 0 32px 0',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
          }}>
            ALL SECURITY NODES VERIFIED
          </h2>

          {/* 8 Character boxes illuminating one by one */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '32px'
          }}>
            {chars.map((char, i) => {
              const isLit = illuminatedIdx >= i;
              return (
                <div
                  key={i}
                  className={`char-input-box ${isLit ? 'illuminated' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none'
                  }}
                >
                  {char}
                </div>
              );
            })}
          </div>

          {/* 100% Progress Indicator */}
          <div style={{ maxWidth: '340px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: '#888888',
              marginBottom: '6px'
            }}>
              <span>SECURITY PROTOCOL</span>
              <span>{progressVal}%</span>
            </div>
            <div style={{ height: '3px', backgroundColor: '#222222', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                backgroundColor: '#ffffff',
                boxShadow: '0 0 8px #ffffff',
                transition: 'width 0.1s linear',
                width: `${progressVal}%`
              }} />
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* STAGE 2: SECURITY UNLOCK (1.3s - 3.2s)                         */}
      {/* ============================================================== */}
      {stage === 'unlock' && (
        <div style={{
          position: 'absolute',
          top: '12%',
          zIndex: 20,
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '0.22em',
            fontFamily: 'var(--font-tech)',
            color: '#ffffff',
            textShadow: '0 0 30px #ffffff',
            margin: '0 0 8px 0'
          }}>
            ACCESS GRANTED
          </h1>
          <div style={{
            fontSize: '1.1rem',
            letterSpacing: '0.35em',
            color: '#cccccc',
            fontFamily: 'var(--font-tech)',
            fontWeight: 700
          }}>
            FINAL CHALLENGE UNLOCKED
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* STAGE 3: 3D PORTAL ACTIVATION (3.2s - 5.4s)                   */}
      {/* ============================================================== */}
      {stage === 'portal' && (
        <div style={{
          position: 'absolute',
          bottom: '12%',
          zIndex: 20,
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease'
        }}>
          <div style={{
            fontSize: '0.95rem',
            letterSpacing: '0.4em',
            fontFamily: 'var(--font-tech)',
            color: '#ffffff',
            fontWeight: 800,
            textShadow: '0 0 15px #ffffff',
            marginBottom: '6px'
          }}>
            DIMENSIONAL GATEWAY STABILIZING
          </div>
          <div style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            color: '#888888',
            fontFamily: 'var(--font-mono)'
          }}>
            ESTABLISHING TRANS-SECTOR LINK TO DEVIL DIMENSION...
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* STAGE 4: LEVEL DEVIL GAME REVEAL CARD                          */}
      {/* ============================================================== */}
      {stage === 'game_reveal' && (
        <div 
          className="floating-game-card"
          style={{
            zIndex: 30,
            maxWidth: '780px',
            width: '92%',
            margin: '0 auto',
            animation: 'cardEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            position: 'relative'
          }}
        >
          <style>{`
            @keyframes cardEnter {
              0% { transform: scale(0.6) translateY(40px); opacity: 0; }
              100% { transform: scale(1) translateY(0); opacity: 1; }
            }
          `}</style>

          {/* Premium 3D Rectangular Card with Glowing Border */}
          <div style={{
            backgroundColor: 'rgba(5, 5, 5, 0.92)',
            backdropFilter: 'blur(16px)',
            border: '2px solid #ffffff',
            boxShadow: '0 0 60px rgba(255, 255, 255, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.08)',
            padding: '52px 36px',
            textAlign: 'center',
            position: 'relative'
          }}>
            {/* Corner Ticks */}
            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '12px', height: '12px', borderTop: '3px solid #ffffff', borderLeft: '3px solid #ffffff' }} />
            <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '12px', height: '12px', borderTop: '3px solid #ffffff', borderRight: '3px solid #ffffff' }} />
            <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '12px', height: '12px', borderBottom: '3px solid #ffffff', borderLeft: '3px solid #ffffff' }} />
            <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '12px', height: '12px', borderBottom: '3px solid #ffffff', borderRight: '3px solid #ffffff' }} />

            {/* Main Heading: ESCAPE ROOM // FINAL DESTINATION */}
            <div style={{
              fontSize: '0.88rem',
              letterSpacing: '0.42em',
              fontFamily: 'var(--font-tech)',
              color: '#aaaaaa',
              fontWeight: 800,
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              ESCAPE ROOM // FINAL DESTINATION
            </div>

            {/* Game Title: LEVEL DEVIL */}
            <div style={{ position: 'relative', margin: '20px 0 24px 0', display: 'inline-block' }}>
              <div style={{
                position: 'absolute',
                inset: '-14px -24px',
                border: '1px dashed rgba(255, 255, 255, 0.35)',
                pointerEvents: 'none'
              }} />
              <h1 style={{
                fontSize: 'clamp(3rem, 8vw, 5.6rem)',
                fontWeight: 900,
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-tech)',
                color: '#ffffff',
                margin: 0,
                textTransform: 'uppercase',
                animation: 'pulseGlowText 3s infinite ease-in-out'
              }}>
                LEVEL DEVIL
              </h1>
            </div>

            {/* Subtitle: "YOU HAVE UNLOCKED THE FINAL CHALLENGE." */}
            <div style={{
              fontSize: '1.05rem',
              letterSpacing: '0.22em',
              color: '#ffffff',
              fontFamily: 'var(--font-tech)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '40px',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.6)'
            }}>
              "YOU HAVE UNLOCKED THE FINAL CHALLENGE."
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}>
              {/* Prominent [ LAUNCH GAME ↗ ] Button */}
              <button
                type="button"
                onClick={handleLaunchGame}
                className="launch-game-button"
              >
                LAUNCH GAME
                <ExternalLink size={24} style={{ strokeWidth: 2.5 }} />
              </button>

              {/* [ RESTART MISSION ] Button */}
              <button
                type="button"
                onClick={onRestart}
                className="cyber-button cyber-button-secondary"
                style={{
                  minWidth: '200px',
                  padding: '12px 24px',
                  fontSize: '0.85rem',
                  letterSpacing: '0.2em'
                }}
              >
                <RotateCcw size={16} />
                RESTART MISSION
              </button>
            </div>

            {/* Footer Gateway Status */}
            <div style={{
              marginTop: '40px',
              paddingTop: '16px',
              borderTop: '1px solid #1c1c1c',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.7rem',
              letterSpacing: '0.16em',
              color: '#555555',
              fontFamily: 'var(--font-mono)'
            }}>
              <span>SECURITY OVERRIDE: 100%</span>
              <span>HOST: POKI // LEVEL-DEVIL</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
