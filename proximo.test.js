import {describe, it, expect} from 'vitest';
import {proximo} from './proximo.js';

describe('proximo()', async => {
    it('proximo(0) deve ser 1', () => {
        expect(proximo(0)).toBe(1);
    });
    it('proximo(1) deve ser 3', () => {
      expect(proximo(1)).toBe(3);
    });
    it('proximo(2) deve ser 5', () => {
        expect(proximo(2)).toBe(5); 
    });
    it('proximo(3) deve ser 4', () => {
        expect(proximo(3)).toBe(4);
    });
    it('proximo(4) deve ser 6', () => {
        expect(proximo(4)).toBe(6);
    });
});