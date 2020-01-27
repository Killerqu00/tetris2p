function createPiece(type) {
    if (type === 'T') {
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ];
    } else if (type === 'O') {
        return [
            [2, 2],
            [2, 2],
        ];
    } else if (type === 'L') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3],
        ];
    } else if (type === 'J') {
        return [
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0],
        ];
    } else if (type === 'I') {
        return [
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    } else if (type === 'Z') {
        return [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0],
        ];
    }
}

const tetri = [];

const playerElements = document.querySelectorAll('.player');
[...playerElements].forEach(element => {
    const tetris = new Tetris(element);
    tetri.push(tetris);
});
const keyListener = (event) => {
    [
        [65, 68, 87, 87, 83, 32],
        [37, 39, 38, 38, 40, 32],
    ].forEach((key, index) => {
        const player = tetri[index].player;
        if (event.type === 'keydown' && !player.pause) {
            if (event.keyCode === key[0]) {
                player.move(-1);
            } else if (event.keyCode === key[1]) {
                player.move(1);
            } else if (event.keyCode === key[2]) {
                player.rotate(1);
            } else if (event.keyCode === key[3]) {
                player.rotate(1);
            }
        }
        if (event.keyCode === key[4] && !player.pause) {
            if (event.type === 'keydown') {
                if (player.dropInterval !== player.DROP_FAST) {
                    player.drop();
                    player.dropInterval = player.DROP_FAST;
                }
            } else {
                player.dropInterval = player.DROP_SLOW;
            }
        }
        if (event.keyCode === key[5]) {
            if (event.type === 'keydown') {
                player.pause = !player.pause;
            }
        }
    });
};
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.keyCode == 85 || event.ctrlKey && event.shiftKey && event.keyCode == 73 || event.keyCode == 123 || event.ctrlKey && event.keyCode == 83) {
        event.preventDefault();
    }
});
document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);
