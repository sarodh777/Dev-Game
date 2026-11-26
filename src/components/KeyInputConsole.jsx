import React, { useState, useRef, useEffect } from 'react';
import { Shield, Lock, RefreshCw, AlertTriangle } from 'lucide-react';
import { validateAccessCode } from '../utils/validation.js';
import { soundFx } from '../utils/audio.js';

export default function KeyInputConsole({ onAccessGranted }) {
  // Exactly 8 individual character boxes
  const [chars, setChars] = useState(Array(8).fill(''));
  const [errorMessage, setErrorMessage] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);

  // Auto-focus first character box on load
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Filled count (0/8 to 8/8)
  const filledCount = chars.filter(c => c && c.trim().length === 1).length;
  const isAllFilled = filledCount === 8;

  // Handle single character change
  const handleChange = (index, value) => {
    // Only accept alphabetic characters, uppercase
    const lettersOnly = value.toUpperCase().replace(/[^A-Z]/g, '');
    const char = lettersOnly.length > 0 ? lettersOnly.slice(-1) : '';

    const newChars = [...chars];
    newChars[index] = char;
    setChars(newChars);
    setErrorMessage('');
    setIsGlitching(false);

    if (char) {
      soundFx.playKeyTyping();
      // Auto move to next box if not on the last one
      if (index < 7) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Keyboard navigation & smart backspace
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      soundFx.playDelete();

      if (chars[index] !== '') {
        // Clear current box
        const newChars = [...chars];
        newChars[index] = '';
        setChars(newChars);
      } else if (index > 0) {
        // Move to previous box and clear it
        const newChars = [...chars];
        newChars[index - 1] = '';
        setChars(newChars);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft') {
      if (index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowRight') {
      if (index < 7) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (isAllFilled) {
        handleVerify();
      }
    }
  };

  // Paste support: 8-character string distribution
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteText = e.clipboardData.getData('text');
    if (!pasteText) return;

    // Extract up to 8 letters
    const letters = pasteText.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 8);
    if (letters.length === 0) return;

    soundFx.playKeyTyping();
    const newChars = [...chars];
    for (let i = 0; i < letters.length; i++) {
      newChars[i] = letters[i];
    }
    setChars(newChars);
    setErrorMessage('');
    setIsGlitching(false);

    // Focus next empty or last box
    const focusTarget = Math.min(letters.length, 7);
    inputRefs.current[focusTarget]?.focus();
  };

  // Reset all boxes
  const handleReset = () => {
    soundFx.playDelete();
    setChars(Array(8).fill(''));
    setErrorMessage('');
    setIsGlitching(false);
    setIsVerifying(false);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  };

  // Verify access keys
  const handleVerify = () => {
    if (isVerifying || !isAllFilled) return;

    setIsVerifying(true);
    setErrorMessage('');
    setIsGlitching(false);
    soundFx.playVerifyScan();

    setTimeout(() => {
      const result = validateAccessCode(chars);

      if (result.isValid) {
        // Trigger sequential illumination and cinematic sequence
        onAccessGranted({
          chars,
          room01Key: result.room01Key,
          room02Key: result.room02Key
        });
      } else {
        setIsVerifying(false);
        soundFx.playError();
        setIsGlitching(true);
        // Error requirement: Display ACCESS DENIED with monochrome glitch animation, never reveal correct keys
        setErrorMessage("ACCESS DENIED");
      }
    }, 250);
  };

  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
      {/* Console Frame */}
      <div 
        className={`cyber-box ${isGlitching ? 'shake-box' : ''}`}
        style={{
          padding: '40px 32px',
          border: errorMessage ? '1px solid #ffffff' : '1px solid #333333',
          boxShadow: errorMessage ? '0 0 30px rgba(255, 255, 255, 0.4)' : '0 10px 40px rgba(0, 0, 0, 0.85)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Terminal Header & Progress (0/8 to 8/8) */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #222222',
          paddingBottom: '18px',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 8px #ffffff',
              borderRadius: '50%'
            }} />
            <span style={{
              fontFamily: 'var(--font-tech)',
              letterSpacing: '0.22em',
              fontSize: '0.82rem',
              color: '#cccccc',
              textTransform: 'uppercase'
            }}>
              ESCAPE ROOM // SECURITY MATRIX
            </span>
          </div>

          {/* Progress Indicator: 0/8 to 8/8 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{
              fontSize: '0.88rem',
              fontFamily: 'var(--font-mono)',
              color: isAllFilled ? '#ffffff' : '#888888',
              fontWeight: 800,
              letterSpacing: '0.1em'
            }}>
              PROGRESS: {filledCount}/8
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '10px',
                    height: '8px',
                    border: '1px solid #444444',
                    backgroundColor: chars[i] ? '#ffffff' : '#141414',
                    boxShadow: chars[i] ? '0 0 8px rgba(255,255,255,0.8)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Room Labels above the 8 boxes */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '16px',
          gap: '24px'
        }}>
          {/* Room 01 Header */}
          <div style={{
            flex: '1',
            maxWidth: '280px',
            textAlign: 'center',
            borderBottom: '1px solid #333333',
            paddingBottom: '6px'
          }}>
            <span style={{
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              fontFamily: 'var(--font-tech)',
              color: '#aaaaaa',
              fontWeight: 700
            }}>
              ROOM 01 KEY // BOX 01–04
            </span>
          </div>

          {/* Divider */}
          <div style={{ color: '#444444', fontSize: '0.9rem', fontWeight: 700 }}>
            +
          </div>

          {/* Room 02 Header */}
          <div style={{
            flex: '1',
            maxWidth: '280px',
            textAlign: 'center',
            borderBottom: '1px solid #333333',
            paddingBottom: '6px'
          }}>
            <span style={{
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              fontFamily: 'var(--font-tech)',
              color: '#aaaaaa',
              fontWeight: 700
            }}>
              ROOM 02 KEY // BOX 05–08
            </span>
          </div>
        </div>

        {/* Exactly EIGHT Individual Character Input Boxes in a Single Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '32px',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          padding: '10px 4px'
        }}>
          {/* BOX 01 to 04 (Room 01) */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {chars.slice(0, 4).map((c, idx) => {
              const globalIdx = idx;
              return (
                <div key={globalIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <input
                    ref={el => (inputRefs.current[globalIdx] = el)}
                    type="text"
                    maxLength={1}
                    value={c}
                    onChange={e => handleChange(globalIdx, e.target.value)}
                    onKeyDown={e => handleKeyDown(globalIdx, e)}
                    onPaste={handlePaste}
                    disabled={isVerifying}
                    className={`char-input-box ${c ? 'filled' : ''}`}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <span style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    color: '#555555',
                    fontFamily: 'var(--font-tech)'
                  }}>
                    0{globalIdx + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Clean Visual Separator between Box 04 and Box 05 */}
          <div style={{
            width: '2px',
            height: '60px',
            backgroundColor: '#333333',
            margin: '0 10px',
            alignSelf: 'flex-start'
          }} />

          {/* BOX 05 to 08 (Room 02) */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {chars.slice(4, 8).map((c, idx) => {
              const globalIdx = idx + 4;
              return (
                <div key={globalIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <input
                    ref={el => (inputRefs.current[globalIdx] = el)}
                    type="text"
                    maxLength={1}
                    value={c}
                    onChange={e => handleChange(globalIdx, e.target.value)}
                    onKeyDown={e => handleKeyDown(globalIdx, e)}
                    onPaste={handlePaste}
                    disabled={isVerifying}
                    className={`char-input-box ${c ? 'filled' : ''}`}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <span style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    color: '#555555',
                    fontFamily: 'var(--font-tech)'
                  }}>
                    0{globalIdx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status / Glitch Error Alert Box */}
        <div style={{
          minHeight: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '32px',
          padding: '12px 20px',
          backgroundColor: errorMessage ? 'rgba(255, 255, 255, 0.08)' : (isVerifying ? 'rgba(255, 255, 255, 0.04)' : 'transparent'),
          border: errorMessage ? '1px solid #ffffff' : (isVerifying ? '1px solid #444444' : '1px solid transparent'),
          transition: 'all 0.3s ease'
        }}>
          {isVerifying ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
              <div className="spin-slow" style={{ display: 'flex' }}>
                <RefreshCw size={16} />
              </div>
              <span style={{ fontSize: '0.88rem', letterSpacing: '0.2em', fontFamily: 'var(--font-mono)' }}>
                VERIFYING DUAL SECURITY CODES...
              </span>
            </div>
          ) : errorMessage ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AlertTriangle size={20} color="#ffffff" />
              <span 
                className={isGlitching ? 'monochrome-glitch' : ''}
                style={{
                  fontSize: '1.05rem',
                  letterSpacing: '0.25em',
                  fontFamily: 'var(--font-tech)',
                  fontWeight: 800,
                  color: '#ffffff',
                  textTransform: 'uppercase'
                }}
              >
                {errorMessage}
              </span>
            </div>
          ) : (
            <span style={{
              fontSize: '0.78rem',
              letterSpacing: '0.16em',
              color: '#666666',
              fontFamily: 'var(--font-mono)'
            }}>
              ENTER 4 CHARACTERS FROM ROOM 01 [BOX 01–04] AND 4 CHARACTERS FROM ROOM 02 [BOX 05–08]
            </span>
          )}
        </div>

        {/* Buttons Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <button
            type="button"
            onClick={handleReset}
            disabled={isVerifying || chars.every(c => c === '')}
            className="cyber-button cyber-button-secondary"
            style={{ minWidth: '150px' }}
          >
            <RefreshCw size={16} />
            RESET
          </button>

          <button
            type="button"
            onClick={handleVerify}
            disabled={isVerifying || !isAllFilled}
            className="cyber-button"
            style={{
              minWidth: '220px',
              backgroundColor: isAllFilled ? '#ffffff' : '#000000',
              color: isAllFilled ? '#000000' : '#ffffff',
              borderColor: '#ffffff',
              boxShadow: isAllFilled ? '0 0 30px rgba(255, 255, 255, 0.5)' : 'none'
            }}
          >
            <Lock size={16} />
            {isVerifying ? 'VERIFYING...' : 'VERIFY ACCESS'}
          </button>
        </div>
      </div>
    </div>
  );
}
