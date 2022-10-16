export let alive = 'viva';
export let dead = 'muerta';
export let grid = [
    [[dead], [dead], [dead]],
    [[dead], [alive], [dead]],
    [[dead], [dead], [dead]],
];
/*for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {}
}*/
let x = 1;
let y = 1;

let cell = grid[x][y];
//console.log(celula);
export const check = () => {
    if (
        (grid[x][y] = alive) &&
        (grid[x][y - 1] = dead) &&
        (grid[x][y + 1] = dead) &&
        (grid[x - 1][y] = dead) &&
        (grid[x + 1][y] = dead) &&
        (grid[x - 1][y - 1] = dead) &&
        (grid[x + 1][y - 1] = dead) &&
        (grid[x - 1][y + 1] = dead) &&
        (grid[x + 1][y + 1] = dead)
    ) {
        cell = dead;
    }
    console.table(grid);
    let result = [
        [[grid[x - 1][y - 1]], [grid[x][y - 1]], [grid[x + 1][y - 1]]],
        [[grid[x - 1][y]], [cell], [grid[x + 1][y]]],
        [[grid[x - 1][y + 1]], [grid[x][y + 1]], [grid[x + 1][y + 1]]],
    ];
    console.table(result);
};
check();

/*console.log('PRUEBA 2');
let grid2 = [
    [[muerta], [muerta], [muerta]],
    [[viva], [viva], [viva]],
    [[muerta], [muerta], [muerta]],
];
//grid2.forEach((element) => {
if (
    (grid[x][y] = viva) &&
    (grid[x][y - 1] = muerta) &&
    (grid[x][y + 1] = muerta) &&
    (grid[x - 1][y] = viva) &&
    (grid[x + 1][y] = viva) &&
    (grid[x - 1][y - 1] = muerta) &&
    (grid[x + 1][y - 1] = muerta) &&
    (grid[x - 1][y + 1] = muerta) &&
    (grid[x + 1][y + 1] = muerta)
) {
    grid2[x - 1][y] = muerta;
    grid2[x + 1][y] = muerta;
    grid2[x][y - 1] = viva;
    grid2[x][y + 1] = viva;
}
//});
let result2 = [
    [[grid[x - 1][y - 1]], [grid[x][y - 1]], [grid[x + 1][y - 1]]],
    [[grid[x - 1][y]], [grid[x][y]], [grid[x + 1][y]]],
    [[grid[x - 1][y + 1]], [grid[x][y + 1]], [grid[x + 1][y + 1]]],
];
console.table(result2);
*/
