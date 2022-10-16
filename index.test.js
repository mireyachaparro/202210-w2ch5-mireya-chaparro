import { grid, dead } from './index.js';
describe('Testing 1 cell', () => {
    test('if 1 cell alive check should be this dead', () => {
        let x = 1;
        let y = 1;
        let cell = grid[x][y];
        expect(cell).toBe(dead);
    });
});

//@babel/plugin-transform-modules-commonjs
