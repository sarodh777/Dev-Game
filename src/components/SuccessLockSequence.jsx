import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/audio.js';

/**
 * Cinematic Success Animation Sequence
 * 
 * Requirements:
 * 1. Eight characters illuminate sequentially.
 * 2. Four-character groups visually separate.
 * 3. A geometric lock opens.
 * 4. Display ACCESS GRANTED.
 * 5. Reveal the LEVEL DEVIL game card.
 */
export default function SuccessLockSequence({ authData, onSequenceComplete }) {
  const chars = authData?.chars || Array(8).fill('');
  const room01Key = authData?.room01Key || chars.slice(0, 4).join('');
  const room02Key = authData?.room02Key || chars.slice(4, 8).join('');

  // Illuminated character index: -1 to 7
  const [illuminatedIdx, setIlluminatedIdx] = useState(-1);
  // Stages: 'illuminate' | 'separate' | 'lock_open' | 'access_granted' | 'complete'
  const [stage, setStage] = useState('illuminate');
  const [rotation, setRotation] = useState(0);

  // Rotation frame for SVG lock
  useEffect(() => {
    let frameId;
    const animate = () => {
      setRotation(prev => (prev + 0.8) % 360);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Orchestrate the cinematic sequence (fast, punchy timing)
  useEffect(() => {
    // Stage 1: Fast sequential illumination of the 8 characters
    let currentIdx = 0;
    const stepInterval = setInterval(() => {
      if (currentIdx < 8) {
        setIlluminatedIdx(currentIdx);
        soundFx.playKeyTyping();
        currentIdx++;
      } else {
        clearInterval(stepInterval);

        // Stage 2: Groups visually separate
        setTimeout(() => {
          setStage('separate');
          soundFx.playLockAssemble();
        }, 200);

        // Stage 3: Geometric lock opens
        setTimeout(() => {
          setStage('lock_open');
          soundFx.playLockOpen();
        }, 900);

        // Stage 4: ACCESS GRANTED typography
        setTimeout(() => {
          setStage('access_granted');
        }, 1800);

        // Stage 5: Reveal LEVEL DEVIL game card
        setTimeout(() => {
          setStage('complete');
          onSequenceComplete();
        }, 4000);
      }
    }, 70);

    return () => clearInterval(stepInterval);
  }, [onSequenceComplete]);

  // Determine separation offset
  const isSeparated = stage === 'separate' || stage === 'lock_open' || stage === 'access_granted' || stage === 'complete';
  const isLockActive = stage === 'lock_open' || stage === 'access_granted';

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
      {/* Skip button in corner */}
      <button
        onClick={onSequenceComplete}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'transparent',
          border: '1px solid #333333',
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
          e.currentTarget.style.borderColor = '#333333';
        }}
      >
        SKIP CINEMATIC &gt;&gt;
      </button>

      {/* Main Animation Stage */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '900px',
        padding: '20px'
      }}>
        {/* Animated Headline */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          transition: 'opacity 0.6s ease'
        }}>
          <div style={{
            fontSize: '0.82rem',
            letterSpacing: '0.35em',
            color: '#888888',
            fontFamily: 'var(--font-tech)',
            marginBottom: '8px',
            textTransform: 'uppercase'
          }}>
            SECURITY DECRYPT IN PROGRESS
          </div>
          <div style={{
            fontSize: '1.4rem',
            letterSpacing: '0.25em',
            fontFamily: 'var(--font-tech)',
            fontWeight: 800,
            color: '#ffffff',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.7)'
          }}>
            {stage === 'illuminate' && 'SEQUENTIAL CODE VERIFICATION'}
            {stage === 'separate' && 'DUAL-ZONE CIPHER SEPARATION'}
            {(stage === 'lock_open' || stage === 'access_granted') && 'CENTRAL GEOMETRIC LOCK DISENGAGED'}
          </div>
        </div>

        {/* The Eight Character Boxes with Separation and Sequential Glow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          gap: '24px',
          margin: '20px 0'
        }}>
          {/* Room 01 Group (Boxes 01–04) */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: isSeparated ? 'translateX(-60px)' : 'translateX(0)',
            transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {isSeparated && (
              <span style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                fontFamily: 'var(--font-tech)',
                color: '#cccccc',
                marginBottom: '12px',
                fontWeight: 700
              }}>
                ROOM 01 // {room01Key}
              </span>
            )}
            <div style={{ display: 'flex', gap: '10px' }}>
              {chars.slice(0, 4).map((c, i) => {
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
                    {c}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Central Geometric Lock mechanism when separated */}
          {isSeparated && (
            <div style={{
              position: 'absolute',
              zIndex: 10,
              width: '140px',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'lockPop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}>
              <style>{`
                @keyframes lockPop {
                  0% { transform: scale(0.2); opacity: 0; }
                  100% { transform: scale(1); opacity: 1; }
                }
                @keyframes coreBurst {
                  0% { transform: scale(0.6); opacity: 0.5; }
                  50% { transform: scale(1.6); opacity: 1; }
                  100% { transform: scale(2.2); opacity: 0; }
                }
              `}</style>

              <svg
                viewBox="0 0 200 200"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute'
                }}
              >
                {/* Outer Rotating Gear Ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  style={{
                    transformOrigin: 'center',
                    transform: `rotate(${rotation}deg)`
                  }}
                />

                {/* Inner Counter-Rotating Octagon */}
                <polygon
                  points="100,45 139,61 155,100 139,139 100,155 61,139 45,100 61,61"
                  fill="rgba(0, 0, 0, 0.85)"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  style={{
                    transformOrigin: 'center',
                    transform: `rotate(-${rotation * 1.5}deg)`,
                    filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))'
                  }}
                />

                {/* Center Core */}
                <circle cx="100" cy="100" r="22" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />

                {/* Crosshairs */}
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Lock opening burst */}
                {isLockActive && (
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    fill="#ffffff"
                    style={{
                      filter: 'blur(8px)',
                      animation: 'coreBurst 1.2s ease-out forwards'
                    }}
                  />
                )}
              </svg>
            </div>
          )}

          {/* Room 02 Group (Boxes 05–08) */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: isSeparated ? 'translateX(60px)' : 'translateX(0)',
            transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            {isSeparated && (
              <span style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                fontFamily: 'var(--font-tech)',
                color: '#cccccc',
                marginBottom: '12px',
                fontWeight: 700
              }}>
                ROOM 02 // {room02Key}
              </span>
            )}
            <div style={{ display: 'flex', gap: '10px' }}>
              {chars.slice(4, 8).map((c, i) => {
                const globalIdx = i + 4;
                const isLit = illuminatedIdx >= globalIdx;
                return (
                  <div
                    key={globalIdx}
                    className={`char-input-box ${isLit ? 'illuminated' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none'
                    }}
                  >
                    {c}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ACCESS GRANTED Typography Reveal */}
        {stage === 'access_granted' && (
          <div style={{
            marginTop: '36px',
            textAlign: 'center',
            animation: 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}>
            <style>{`
              @keyframes scaleIn {
                0% { transform: scale(0.85); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
              }
            `}</style>
            <div style={{
              border: '2px solid #ffffff',
              padding: '24px 52px',
              backgroundColor: '#000000',
              boxShadow: '0 0 50px rgba(255, 255, 255, 0.8), inset 0 0 25px rgba(255, 255, 255, 0.2)'
            }}>
              <h1 style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 900,
                letterSpacing: '0.2em',
                fontFamily: 'var(--font-tech)',
                color: '#ffffff',
                textShadow: '0 0 30px #ffffff',
                margin: '0 0 12px 0'
              }}>
                ACCESS GRANTED
              </h1>
              <div style={{
                fontSize: '1.35rem',
                letterSpacing: '0.25em',
                color: '#ffffff',
                fontFamily: 'var(--font-tech)',
                fontWeight: 800,
                marginBottom: '8px',
                textShadow: '0 0 15px rgba(255, 255, 255, 0.7)'
              }}>
                ALL KEYS VERIFIED
              </div>
              <div style={{
                fontSize: '1.05rem',
                letterSpacing: '0.3em',
                color: '#cccccc',
                fontFamily: 'var(--font-tech)',
                fontWeight: 700
              }}>
                ESCAPE ROOM COMPLETED
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Footer */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{
          fontSize: '0.72rem',
          letterSpacing: '0.25em',
          color: '#666666',
          fontFamily: 'var(--font-mono)'
        }}>
          {stage === 'illuminate' && 'SCANNING ENCRYPTION NODES [1-8]...'}
          {stage === 'separate' && 'ISOLATING DUAL CIPHER COMPONENTS...'}
          {stage === 'lock_open' && 'DISENGAGING GEOMETRIC LOCK TUMBLERS...'}
          {stage === 'access_granted' && 'AUTHENTICATION GRANTED // PREPARING FINAL CHALLENGE...'}
        </span>
        <div style={{ width: '220px', height: '2px', backgroundColor: '#222222' }}>
          <div style={{
            height: '100%',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 8px #ffffff',
            transition: 'width 0.4s ease',
            width: 
              stage === 'illuminate' ? `${((illuminatedIdx + 1) / 8) * 50}%` :
              stage === 'separate' ? '70%' :
              stage === 'lock_open' ? '85%' : '100%'
          }} />
        </div>
      </div>
    </div>
  );
}
