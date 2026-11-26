import { ROOM_01_KEYS, ROOM_02_KEYS } from '../config/keysConfig.js';

// Fast O(1) set lookup
const room01Set = new Set(ROOM_01_KEYS.map(k => k.toUpperCase().trim()));
const room02Set = new Set(ROOM_02_KEYS.map(k => k.toUpperCase().trim()));

/**
 * Validates the 8 individual character inputs:
 * - BOX 01–04: Room 01 key (must match one of the 33 valid Room 01 codes)
 * - BOX 05–08: Room 02 key (must match one of the 6 valid Room 02 codes)
 * 
 * Any valid Room 01 key can combine with any valid Room 02 key.
 * If either is invalid, reject the submission.
 * Never reveal the correct answers or indicate which position is wrong.
 */
export function validateAccessCode(characters) {
  if (!Array.isArray(characters) || characters.length !== 8) {
    return {
      isValid: false,
      reason: "ACCESS DENIED: ALL 8 CHARACTERS MUST BE ENTERED"
    };
  }

  // Sanitize each character
  const cleanChars = characters.map(c => (typeof c === 'string' ? c.toUpperCase().trim() : ''));

  // Ensure all 8 characters are filled
  if (cleanChars.some(c => c.length !== 1 || !/^[A-Z]$/.test(c))) {
    return {
      isValid: false,
      reason: "ACCESS DENIED: ALL 8 CHARACTERS REQUIRED"
    };
  }

  // Group 1: Boxes 01–04 -> Room 01 key
  const room01Key = cleanChars.slice(0, 4).join('');

  // Group 2: Boxes 05–08 -> Room 02 key
  const room02Key = cleanChars.slice(4, 8).join('');

  const isRoom01Valid = room01Set.has(room01Key);
  const isRoom02Valid = room02Set.has(room02Key);

  const isValid = isRoom01Valid && isRoom02Valid;

  return {
    isValid,
    room01Key,
    room02Key,
    cleanChars,
    reason: isValid ? null : "ACCESS DENIED: INVALID SECURITY PROTOCOL CIPHER"
  };
}
