let viva = 'viva';
let muerta = 'muerta';
let grid = [
    [[muerta], [muerta], [muerta]],
    [[muerta], [viva], [muerta]],
    [[muerta], [muerta], [muerta]],
];
/*for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {}
}*/
let celula = grid[1][1];
//console.log(celula);
if (
    (grid[1][1] = viva) &&
    (grid[1][0] = muerta) &&
    (grid[1][2] = muerta) &&
    (grid[0][1] = muerta) &&
    (grid[2][1] = muerta) &&
    (grid[0][0] = muerta) &&
    (grid[2][0] = muerta) &&
    (grid[0][2] = muerta) &&
    (grid[2][2] = muerta)
) {
    celula = muerta;
}
console.log(celula);

let grid2 = [
    [[muerta], [muerta], [muerta]],
    [[viva], [viva], [viva]],
    [[muerta], [muerta], [muerta]],
];
grid2.forEach((element) => {
    if (
        (grid2[1][1] = viva) &&
        (grid2[1][0] = muerta) &&
        (grid2[1][2] = muerta) &&
        (grid2[0][1] = viva) &&
        (grid2[2][1] = viva) &&
        (grid2[0][0] = muerta) &&
        (grid2[2][0] = muerta) &&
        (grid2[0][2] = muerta) &&
        (grid2[2][2] = muerta)
    ) {
        grid2[0][1] = muerta;
        grid2[2][1] = muerta;
        grid2[1][0] = viva;
        grid2[1][2] = viva;
    }
});
console.log(grid2);
console.log(grid2);
console.log(grid2[0][1]);
console.log(grid2[1][0]);
