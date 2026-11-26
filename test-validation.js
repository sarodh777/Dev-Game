import { validateAccessCode } from './src/utils/validation.js';
import { ROOM_01_KEYS, ROOM_02_KEYS } from './src/config/keysConfig.js';

console.log('--- TESTING UPDATED 8-CHARACTER 2-ROOM VALIDATION ---');

const testCases = [
  { input: 'HACKADKU'.split(''), expected: true, name: 'HACK + ADKU' },
  { input: 'HACKNAIS'.split(''), expected: true, name: 'HACK + NAIS' },
  { input: 'HACKNPQF'.split(''), expected: true, name: 'HACK + NPQF' },
  { input: 'JAVAHSDP'.split(''), expected: true, name: 'JAVA + HSDP' },
  { input: 'MASKXVUY'.split(''), expected: true, name: 'MASK + XVUY' },
  { input: 'CODEMIBC'.split(''), expected: true, name: 'CODE + MIBC' },
  { input: 'hackadku'.split(''), expected: true, name: 'lowercase hackadku' },
  { input: 'HACKXXXX'.split(''), expected: false, name: 'HACK + XXXX (Invalid Room 02)' },
  { input: 'YYYYADKU'.split(''), expected: false, name: 'YYYY + ADKU (Invalid Room 01)' },
  { input: 'ADKUHACK'.split(''), expected: false, name: 'ADKU + HACK (Reversed: Room 02 in front)' },
  { input: ['H','A','C','K','A','D','K',''], expected: false, name: 'Incomplete 7 characters' }
];

let allPassed = true;
for (const tc of testCases) {
  const res = validateAccessCode(tc.input);
  if (res.isValid !== tc.expected) {
    allPassed = false;
    console.error(`❌ FAILED: ${tc.name} -> Expected ${tc.expected}, got ${res.isValid}`);
  } else {
    console.log(`✅ PASSED: ${tc.name}`);
  }
}

if (!allPassed) {
  process.exit(1);
}
console.log('🌟 ALL 11 TESTS PASSED!');
