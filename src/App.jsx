import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Shield, Radio } from 'lucide-react';
import CyberBackground from './components/CyberBackground';
import KeyInputConsole from './components/KeyInputConsole';
import Cinematic3DExperience from './components/Cinematic3DExperience';
import { soundFx } from './utils/audio';

export default function App() {
  // Application view state: 'input' | 'success_experience'
  const [currentView, setCurrentView] = useState('input');
  const [submittedKeys, setSubmittedKeys] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live tactical clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(Math.floor(now.getMilliseconds() / 100));
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFx.playKeyTyping();
    }
  };

  const handleAccessGranted = (validatedKeys) => {
    setSubmittedKeys(validatedKeys);
    setCurrentView('success_experience');
  };

  const handleRestartMission = () => {
    setSubmittedKeys(null);
    setCurrentView('input');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      {/* Dynamic Monochromatic Canvas Background */}
      <CyberBackground />

      {/* Top Tactical Navigation & Status Bar */}
      <header style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 32px',
        borderBottom: '1px solid #1a1a1a',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand / System Identity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            border: '1.5px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)'
          }}>
            <Shield size={18} color="#ffffff" />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              color: '#ffffff',
              textTransform: 'uppercase'
            }}>
              ESCAPE ROOM // ACCESS CONSOLE
            </div>
            <div style={{
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              color: '#666666',
              fontFamily: 'var(--font-mono)'
            }}>
              SYSTEM PROTOCOL 2-ROOM KEY VALIDATION
            </div>
          </div>
        </div>

        {/* Right Info: Live Timestamp & Audio Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Tactical Time & Status */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            color: '#888888',
            borderRight: '1px solid #222222',
            paddingRight: '18px'
          }}>
            <Radio size={12} color="#ffffff" style={{ animation: 'borderPulse 2s infinite' }} />
            <span>TIME: {currentTime}</span>
          </div>

          {/* Sound Synthesizer Toggle */}
          <button
            onClick={handleSoundToggle}
            title={isMuted ? 'Unmute SFX' : 'Mute SFX'}
            style={{
              background: 'transparent',
              border: '1px solid #333333',
              color: isMuted ? '#555555' : '#ffffff',
              cursor: 'pointer',
              padding: '7px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = isMuted ? '#333333' : '#666666';
              e.currentTarget.style.color = isMuted ? '#555555' : '#ffffff';
            }}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>{isMuted ? 'MUTED' : 'AUDIO'}</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        position: 'relative',
        zIndex: 10
      }}>
        {currentView === 'input' && (
          <div style={{ width: '100%', animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            {/* Mission Hero Header */}
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div style={{
                fontSize: '0.82rem',
                letterSpacing: '0.45em',
                color: '#888888',
                fontFamily: 'var(--font-tech)',
                marginBottom: '10px',
                textTransform: 'uppercase'
              }}>
                CHALLENGE CLEARANCE // LEVEL FINAL
              </div>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 900,
                letterSpacing: '0.16em',
                fontFamily: 'var(--font-tech)',
                color: '#ffffff',
                margin: 0,
                textTransform: 'uppercase',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.6)'
              }}>
                ESCAPE ROOM
              </h1>
              <div style={{
                width: '80px',
                height: '2px',
                backgroundColor: '#ffffff',
                margin: '14px auto 16px auto',
                boxShadow: '0 0 10px #ffffff'
              }} />
              <p style={{
                fontSize: '0.88rem',
                letterSpacing: '0.15em',
                color: '#aaaaaa',
                fontFamily: 'var(--font-mono)',
                maxWidth: '680px',
                margin: '0 auto',
                lineHeight: 1.6
              }}>
                ENTER THE EIGHT INDIVIDUAL CHARACTERS REPRESENTING TWO 4-LETTER KEYS.
                BOX 01–04 CORRESPOND TO ROOM 01 AND BOX 05–08 CORRESPOND TO ROOM 02.
              </p>
            </div>

            {/* Key Input Console */}
            <KeyInputConsole onAccessGranted={handleAccessGranted} />
          </div>
        )}

        {currentView === 'success_experience' && (
          <Cinematic3DExperience
            authData={submittedKeys}
            onRestart={handleRestartMission}
          />
        )}
      </main>

      {/* Tactical Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 20,
        borderTop: '1px solid #141414',
        padding: '16px 32px',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.7rem',
        letterSpacing: '0.18em',
        color: '#444444',
        fontFamily: 'var(--font-mono)',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <span>ENCRYPTION ARCHITECTURE: DUAL-ROOM MATRIX</span>
        <span>STATUS: SECURE TERMINAL v2.4</span>
      </footer>
    </div>
  );
}
