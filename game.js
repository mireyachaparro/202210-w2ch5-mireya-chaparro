import { grid } from './grid.js';

export const game = () => {
    const aliveCell = ['0'];
    const deadCell = ['-'];
    grid[1][2] = aliveCell;
    grid[2][2] = aliveCell;
    grid[3][2] = aliveCell;
};
