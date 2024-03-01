BLOCK_SIZE = 32;

// w: 32X32 = 1024 h: 32X24 = 768
CANVAS_WIDTH1 = 1024;
CANVAS_HEIGHT1 = 768;
var levelOne = {
    // add music
    // label
    label: "1",
    width: 1024,
    height: 768,
    // 
    // ------------------------ ALL BACKGROUND -------------------------------------
    cornertiles: [{ x: 0, y: 0, flip: 0 }, { x: BLOCK_SIZE * 31, y: 0, flip: 1 }
        , { x: 0, y: BLOCK_SIZE * 23, flip: 2 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 23, flip: 3 }],
    topbottomwalls: [
        { x: BLOCK_SIZE * 1, y: 0, flip: 0 }, { x: BLOCK_SIZE * 2, y: 0, flip: 0 }, { x: BLOCK_SIZE * 3, y: 0, flip: 0 }, { x: BLOCK_SIZE * 4, y: 0, flip: 0 }, { x: BLOCK_SIZE * 5, y: 0, flip: 0 }, { x: BLOCK_SIZE * 6, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 7, y: 0, flip: 0 }, { x: BLOCK_SIZE * 8, y: 0, flip: 0 }, { x: BLOCK_SIZE * 9, y: 0, flip: 0 }, { x: BLOCK_SIZE * 10, y: 0, flip: 0 }, { x: BLOCK_SIZE * 11, y: 0, flip: 0 }, { x: BLOCK_SIZE * 12, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 13, y: 0, flip: 0 }, { x: BLOCK_SIZE * 14, y: 0, flip: 0 }, { x: BLOCK_SIZE * 15, y: 0, flip: 0 }, { x: BLOCK_SIZE * 16, y: 0, flip: 0 }, { x: BLOCK_SIZE * 17, y: 0, flip: 0 }, { x: BLOCK_SIZE * 18, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 19, y: 0, flip: 0 }, { x: BLOCK_SIZE * 20, y: 0, flip: 0 }, { x: BLOCK_SIZE * 21, y: 0, flip: 0 }, { x: BLOCK_SIZE * 22, y: 0, flip: 0 }, { x: BLOCK_SIZE * 23, y: 0, flip: 0 }, { x: BLOCK_SIZE * 24, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 25, y: 0, flip: 0 }, { x: BLOCK_SIZE * 26, y: 0, flip: 0 }, { x: BLOCK_SIZE * 27, y: 0, flip: 0 }, { x: BLOCK_SIZE * 28, y: 0, flip: 0 }, { x: BLOCK_SIZE * 29, y: 0, flip: 0 }, { x: BLOCK_SIZE * 30, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 23, flip: 1 }],
    leftrightwalls: [
        { x: 0, y: BLOCK_SIZE * 1, flip: 0 }, { x: 0, y: BLOCK_SIZE * 2, flip: 0 }, { x: 0, y: BLOCK_SIZE * 3, flip: 0 }, { x: 0, y: BLOCK_SIZE * 4, flip: 0 }, { x: 0, y: BLOCK_SIZE * 5, flip: 0 }, { x: 0, y: BLOCK_SIZE * 6, flip: 0 }, { x: 0, y: BLOCK_SIZE * 7, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 8, flip: 0 }, { x: 0, y: BLOCK_SIZE * 9, flip: 0 }, { x: 0, y: BLOCK_SIZE * 10, flip: 0 }, { x: 0, y: BLOCK_SIZE * 11, flip: 0 }, { x: 0, y: BLOCK_SIZE * 12, flip: 0 }, { x: 0, y: BLOCK_SIZE * 13, flip: 0 }, { x: 0, y: BLOCK_SIZE * 14, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 15, flip: 0 }, { x: 0, y: BLOCK_SIZE * 16, flip: 0 }, { x: 0, y: BLOCK_SIZE * 17, flip: 0 }, { x: 0, y: BLOCK_SIZE * 18, flip: 0 }, { x: 0, y: BLOCK_SIZE * 19, flip: 0 }, { x: 0, y: BLOCK_SIZE * 20, flip: 0 }, { x: 0, y: BLOCK_SIZE * 21, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 22, flip: 0 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 1, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 2, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 3, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 4, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 5, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 6, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 7, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 8, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 9, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 10, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 11, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 12, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 13, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 14, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 15, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 16, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 17, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 18, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 19, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 20, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 21, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 22, flip: 1 }],
    normaltiles: [
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 1 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 2 },

        { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 3 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 4 }
        , { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 4 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 5 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 6 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 7 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 8 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 9 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 10 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 11 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 12 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 13 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 14 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 15 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 16 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 17 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 18 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 19 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 20 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 21 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 22 }
    ],

    rippedtiles: [
        { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 22 },
    ],

    // ------------------------ ALL BACKGROUND ^^^^ CAN ADD MORE ABOVE HERE -------------------------------------

    //adds a bone randomly in each quadrent of the gameboard.
    bones: [
        { x: 312, y: 88 },
        { x: 263, y: 199 },
        { x: 50, y: 337 },
        { x: 682, y: 472 },
        { x: 839, y: 356 }
    ],

    //adds 1 red blood cell randomly in each quadrent of the gameboard.
    redbloodcells: [
        { x: 63, y: 40 }, // ++
        { x: 487, y: 460 }, // --
        { x: 673, y: 83 }, // -+
        { x: 260, y: 636 } //+-

    ],

    //add power ups (Level 1 only has speed and size powerups)
    powerups: [
        {x: Math.random() * ((CANVAS_WIDTH1 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT1 - 64) - 64) + 64, type: "speed" },
        { x: Math.random() * ((CANVAS_WIDTH1 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT1 - 64) - 64) + 64, type: "size" }
    ],

    //adding 1 lymphocyte
    lymphocyte: [
        { x: Math.random() * (960 - 64) + 64, y: Math.random() * (704 - 64) + 64 }
    ],

    //adding 30 cellmans
    cell: [
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
    ],

    portal: [
        { x: 480, y: 675 }
    ]

};

// w: 34X32 = 1088 h: 28X32 = 896
CANVAS_WIDTH2 = 1088;
CANVAS_HEIGHT2 = 896;
var levelTwo = {
    // add music
    // label
    label: "2",
    width: 1088,
    height: 896,
    // 
    // ------------------------ ALL BACKGROUND -------------------------------------
    cornertiles: [{ x: 0, y: 0, flip: 0 }, { x: BLOCK_SIZE * 31, y: 0, flip: 1 }
        , { x: 0, y: BLOCK_SIZE * 23, flip: 2 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 23, flip: 3 }],
    topbottomwalls: [
        { x: BLOCK_SIZE * 1, y: 0, flip: 0 }, { x: BLOCK_SIZE * 2, y: 0, flip: 0 }, { x: BLOCK_SIZE * 3, y: 0, flip: 0 }, { x: BLOCK_SIZE * 4, y: 0, flip: 0 }, { x: BLOCK_SIZE * 5, y: 0, flip: 0 }, { x: BLOCK_SIZE * 6, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 7, y: 0, flip: 0 }, { x: BLOCK_SIZE * 8, y: 0, flip: 0 }, { x: BLOCK_SIZE * 9, y: 0, flip: 0 }, { x: BLOCK_SIZE * 10, y: 0, flip: 0 }, { x: BLOCK_SIZE * 11, y: 0, flip: 0 }, { x: BLOCK_SIZE * 12, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 13, y: 0, flip: 0 }, { x: BLOCK_SIZE * 14, y: 0, flip: 0 }, { x: BLOCK_SIZE * 15, y: 0, flip: 0 }, { x: BLOCK_SIZE * 16, y: 0, flip: 0 }, { x: BLOCK_SIZE * 17, y: 0, flip: 0 }, { x: BLOCK_SIZE * 18, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 19, y: 0, flip: 0 }, { x: BLOCK_SIZE * 20, y: 0, flip: 0 }, { x: BLOCK_SIZE * 21, y: 0, flip: 0 }, { x: BLOCK_SIZE * 22, y: 0, flip: 0 }, { x: BLOCK_SIZE * 23, y: 0, flip: 0 }, { x: BLOCK_SIZE * 24, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 25, y: 0, flip: 0 }, { x: BLOCK_SIZE * 26, y: 0, flip: 0 }, { x: BLOCK_SIZE * 27, y: 0, flip: 0 }, { x: BLOCK_SIZE * 28, y: 0, flip: 0 }, { x: BLOCK_SIZE * 29, y: 0, flip: 0 }, { x: BLOCK_SIZE * 30, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 1, y: 0, flip: 0 }, { x: BLOCK_SIZE * 2, y: 0, flip: 0 }, { x: BLOCK_SIZE * 3, y: 0, flip: 0 }, { x: BLOCK_SIZE * 4, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 31, y: 0, flip: 0 }, { x: BLOCK_SIZE * 32, y: 0, flip: 0 }, { x: BLOCK_SIZE * 33, y: 0, flip: 0 }, { x: BLOCK_SIZE * 34, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 23, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 23, flip: 1 }],
    leftrightwalls: [
        { x: 0, y: BLOCK_SIZE * 1, flip: 0 }, { x: 0, y: BLOCK_SIZE * 2, flip: 0 }, { x: 0, y: BLOCK_SIZE * 3, flip: 0 }, { x: 0, y: BLOCK_SIZE * 4, flip: 0 }, { x: 0, y: BLOCK_SIZE * 5, flip: 0 }, { x: 0, y: BLOCK_SIZE * 6, flip: 0 }, { x: 0, y: BLOCK_SIZE * 7, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 8, flip: 0 }, { x: 0, y: BLOCK_SIZE * 9, flip: 0 }, { x: 0, y: BLOCK_SIZE * 10, flip: 0 }, { x: 0, y: BLOCK_SIZE * 11, flip: 0 }, { x: 0, y: BLOCK_SIZE * 12, flip: 0 }, { x: 0, y: BLOCK_SIZE * 13, flip: 0 }, { x: 0, y: BLOCK_SIZE * 14, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 15, flip: 0 }, { x: 0, y: BLOCK_SIZE * 16, flip: 0 }, { x: 0, y: BLOCK_SIZE * 17, flip: 0 }, { x: 0, y: BLOCK_SIZE * 18, flip: 0 }, { x: 0, y: BLOCK_SIZE * 19, flip: 0 }, { x: 0, y: BLOCK_SIZE * 20, flip: 0 }, { x: 0, y: BLOCK_SIZE * 21, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 22, flip: 0 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 1, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 2, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 3, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 4, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 5, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 6, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 7, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 8, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 9, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 10, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 11, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 12, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 13, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 14, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 15, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 16, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 17, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 18, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 19, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 20, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 21, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 22, flip: 1 },
        { x: 0, y: BLOCK_SIZE * 1, flip: 0 }, { x: 0, y: BLOCK_SIZE * 2, flip: 0 }, { x: 0, y: BLOCK_SIZE * 3, flip: 0 }, { x: 0, y: BLOCK_SIZE * 4, flip: 0 }, { x: 0, y: BLOCK_SIZE * 5, flip: 0 }, { x: 0, y: BLOCK_SIZE * 6, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 7, flip: 0 }, { x: 0, y: BLOCK_SIZE * 8, flip: 0 }, { x: 0, y: BLOCK_SIZE * 9, flip: 0 }, { x: 0, y: BLOCK_SIZE * 10, flip: 0 }, { x: 0, y: BLOCK_SIZE * 11, flip: 0 }, { x: 0, y: BLOCK_SIZE * 12, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 13, flip: 0 }, { x: 0, y: BLOCK_SIZE * 14, flip: 0 }, { x: 0, y: BLOCK_SIZE * 15, flip: 0 }, { x: 0, y: BLOCK_SIZE * 16, flip: 0 }, { x: 0, y: BLOCK_SIZE * 17, flip: 0 }, { x: 0, y: BLOCK_SIZE * 18, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 19, flip: 0 }, { x: 0, y: BLOCK_SIZE * 20, flip: 0 }, { x: 0, y: BLOCK_SIZE * 21, flip: 0 }, { x: 0, y: BLOCK_SIZE * 22, flip: 0 }, { x: 0, y: BLOCK_SIZE * 23, flip: 0 }, { x: 0, y: BLOCK_SIZE * 24, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 25, flip: 0 }, { x: 0, y: BLOCK_SIZE * 26, flip: 0 }, { x: 0, y: BLOCK_SIZE * 27, flip: 0 }, { x: 0, y: BLOCK_SIZE * 28, flip: 0 },

        // Repeat the same pattern for the right wall
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 1, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 2, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 3, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 4, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 5, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 6, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 7, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 8, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 9, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 10, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 11, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 12, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 13, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 14, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 15, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 16, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 17, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 18, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 19, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 20, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 21, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 22, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 24, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 25, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 26, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 27, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 28, flip: 1 }
    ],
    normaltiles: [
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 1 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 2 },

        { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 3 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 4 }
        , { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 4 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 5 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 6 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 7 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 8 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 9 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 10 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 11 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 12 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 13 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 14 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 15 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 16 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 17 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 18 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 19 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 20 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 21 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 22 },

        //adding 



    ],

    rippedtiles: [
        { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 22 },
    ],

    // ------------------------ ALL BACKGROUND ^^^^ CAN ADD MORE ABOVE HERE -------------------------------------

    // Bones might change to random locations, increase size?
    bones: [
        { x: 312, y: 88 },
        { x: 263, y: 199 },
        { x: 50, y: 337 },
        { x: 682, y: 472 },
        { x: 839, y: 356 }
    ],
    // Red blood cells random locations? increase size?
    redbloodcells: [
        { x: 63, y: 40 }, // ++
        { x: 487, y: 460 }, // --
        { x: 673, y: 83 }, // -+
        { x: 260, y: 636 } //+-
    ],
    // Power-ups
    powerups: [
        { x: Math.random() * ((CANVAS_WIDTH2 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT2 - 64) - 64) + 64, type: "speed" },
        { x: Math.random() * ((CANVAS_WIDTH2 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT2 - 64) - 64) + 64, type: "size" },
        { x: Math.random() * ((CANVAS_WIDTH2 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT2 - 64) - 64) + 64, type: "explode" },
    ],
    // 2 Lymphocyte
    lymphocyte: [
        { x: Math.random() * (960 - 64) + 64, y: Math.random() * (704 - 64) + 64 },
        { x: Math.random() * (960 - 64) + 64, y: Math.random() * (704 - 64) + 64 }
    ],
    // Cellman 40
    cell: [
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
    ],
    // Portal configuration
    portal: [
        { x: 300, y: 480 }
    ]
};

//level 3 w=36X32 = 1152 h=30X32 = 960
CANVAS_WIDTH3 = 1152;
CANVAS_HEIGHT3 = 960;
var levelThree = {
    // add music
    // label
    label: "3",
    width: 1152,
    height: 960,
    // 
    // ------------------------ ALL BACKGROUND -------------------------------------
    cornertiles: [{ x: 0, y: 0, flip: 0 }, { x: BLOCK_SIZE * 35, y: 0, flip: 1 }
        , { x: 0, y: BLOCK_SIZE * 29, flip: 2 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 29, flip: 3 }],
    topbottomwalls: [
        { x: BLOCK_SIZE * 1, y: 0, flip: 0 }, { x: BLOCK_SIZE * 2, y: 0, flip: 0 }, { x: BLOCK_SIZE * 3, y: 0, flip: 0 }, { x: BLOCK_SIZE * 4, y: 0, flip: 0 }, { x: BLOCK_SIZE * 5, y: 0, flip: 0 }, { x: BLOCK_SIZE * 6, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 7, y: 0, flip: 0 }, { x: BLOCK_SIZE * 8, y: 0, flip: 0 }, { x: BLOCK_SIZE * 9, y: 0, flip: 0 }, { x: BLOCK_SIZE * 10, y: 0, flip: 0 }, { x: BLOCK_SIZE * 11, y: 0, flip: 0 }, { x: BLOCK_SIZE * 12, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 13, y: 0, flip: 0 }, { x: BLOCK_SIZE * 14, y: 0, flip: 0 }, { x: BLOCK_SIZE * 15, y: 0, flip: 0 }, { x: BLOCK_SIZE * 16, y: 0, flip: 0 }, { x: BLOCK_SIZE * 17, y: 0, flip: 0 }, { x: BLOCK_SIZE * 18, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 19, y: 0, flip: 0 }, { x: BLOCK_SIZE * 20, y: 0, flip: 0 }, { x: BLOCK_SIZE * 21, y: 0, flip: 0 }, { x: BLOCK_SIZE * 22, y: 0, flip: 0 }, { x: BLOCK_SIZE * 23, y: 0, flip: 0 }, { x: BLOCK_SIZE * 24, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 25, y: 0, flip: 0 }, { x: BLOCK_SIZE * 26, y: 0, flip: 0 }, { x: BLOCK_SIZE * 27, y: 0, flip: 0 }, { x: BLOCK_SIZE * 28, y: 0, flip: 0 }, { x: BLOCK_SIZE * 29, y: 0, flip: 0 }, { x: BLOCK_SIZE * 30, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 31, y: 0, flip: 0 }, { x: BLOCK_SIZE * 32, y: 0, flip: 0 }, { x: BLOCK_SIZE * 33, y: 0, flip: 0 }, { x: BLOCK_SIZE * 34, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 29, flip: 1 },
        { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 29, flip: 1 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 29, flip: 1 },
        { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 29, flip: 1 },
        { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 29, flip: 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 29, flip: 1 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 29, flip: 1 }],
    leftrightwalls: [
        { x: 0, y: BLOCK_SIZE * 1, flip: 0 }, { x: 0, y: BLOCK_SIZE * 2, flip: 0 }, { x: 0, y: BLOCK_SIZE * 3, flip: 0 }, { x: 0, y: BLOCK_SIZE * 4, flip: 0 }, { x: 0, y: BLOCK_SIZE * 5, flip: 0 }, { x: 0, y: BLOCK_SIZE * 6, flip: 0 }, { x: 0, y: BLOCK_SIZE * 7, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 8, flip: 0 }, { x: 0, y: BLOCK_SIZE * 9, flip: 0 }, { x: 0, y: BLOCK_SIZE * 10, flip: 0 }, { x: 0, y: BLOCK_SIZE * 11, flip: 0 }, { x: 0, y: BLOCK_SIZE * 12, flip: 0 }, { x: 0, y: BLOCK_SIZE * 13, flip: 0 }, { x: 0, y: BLOCK_SIZE * 14, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 15, flip: 0 }, { x: 0, y: BLOCK_SIZE * 16, flip: 0 }, { x: 0, y: BLOCK_SIZE * 17, flip: 0 }, { x: 0, y: BLOCK_SIZE * 18, flip: 0 }, { x: 0, y: BLOCK_SIZE * 19, flip: 0 }, { x: 0, y: BLOCK_SIZE * 20, flip: 0 }, { x: 0, y: BLOCK_SIZE * 21, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 22, flip: 0 }, { x: 0, y: BLOCK_SIZE * 23, flip: 0 }, { x: 0, y: BLOCK_SIZE * 24, flip: 0 }, { x: 0, y: BLOCK_SIZE * 25, flip: 0 }, { x: 0, y: BLOCK_SIZE * 26, flip: 0 }, { x: 0, y: BLOCK_SIZE * 27, flip: 0 }, { x: 0, y: BLOCK_SIZE * 28, flip: 0 },
        { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 1, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 2, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 3, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 4, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 5, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 6, flip: 1 },
        { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 7, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 8, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 9, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 10, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 11, flip: 1 },
        { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 12, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 13, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 14, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 15, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 16, flip: 1 },
        { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 17, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 18, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 19, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 20, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 21, flip: 1 },
        { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 22, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 24, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 25, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 26, flip: 1 },
        { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 27, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 28, flip: 1 }],
    normaltiles: [
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 1 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 2 },

        { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 3 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 4 }
        , { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 4 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 5 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 6 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 7 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 8 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 9 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 10 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 11 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 12 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 13 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 14 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 15 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 16 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 17 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 18 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 19 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 20 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 21 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 22 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 23 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 24 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 25 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 26 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 27 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 28 }
    ],

    rippedtiles: [
        { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 24 }
    ],

    // ------------------------ ALL BACKGROUND ^^^^ CAN ADD MORE ABOVE HERE -------------------------------------

    //adds a bone randomly in each quadrent of the gameboard.
    bones: [
        { x: 264, y: 39 },
        { x: 413, y: 199 },
        { x: 50, y: 337 },
        { x: 682, y: 472 },
        { x: 839, y: 356 }
    ],

    //adds 1 red blood cell randomly in each quadrent of the gameboard.
    redbloodcells: [
        { x: 63, y: 40 },
        { x: 1024, y: 850 },
        { x: 63, y: 850 },
        { x: 1024, y: 40 }

    ],

    //add power ups (Level 1 only has speed and size powerups)
    powerups: [
        { x: Math.random() * ((CANVAS_WIDTH3 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT3 - 64) - 64) + 64, type: "speed" },
        { x: Math.random() * ((CANVAS_WIDTH3 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT3 - 64) - 64) + 64, type: "size" },
        { x: Math.random() * ((CANVAS_WIDTH3 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT3 - 64) - 64) + 64, type: "explode" },
        { x: Math.random() * ((CANVAS_WIDTH3 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT3 - 64) - 64) + 64, type: "stun" }
    ],

    //adding 3 lymphocyte
    lymphocyte: [
        { x: Math.random() * (960 - 64) + 64, y: Math.random() * (704 - 64) + 64 },
        { x: Math.random() * (960 - 64) + 64, y: Math.random() * (704 - 64) + 64 },
        { x: Math.random() * (960 - 64) + 64, y: Math.random() * (704 - 64) + 64 }
    ],

    //adding 50 cellmans
    cell: [
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 },
        { x: Math.random() * 1024, y: Math.random() * 768 }, { x: Math.random() * 1024, y: Math.random() * 768 }
    ],

    portal: [
        { x: 700, y: 480 }
    ]
};

CANVAS_WIDTH4 = 1216;
CANVAS_HEIGHT4 = 1024;
//Width: 32x38 = 1216 Height: 32x32 = 1024 
var levelFour = {
    // add music
    // label
    label: "4",
    width: 1216,
    height: 1024,
    // ------------------------ ALL BACKGROUND -------------------------------------
    cornertiles: [
        { x: 0, y: 0, flip: 0 }, { x: BLOCK_SIZE * 38, y: 0, flip: 1 },
        { x: 0, y: BLOCK_SIZE * 32, flip: 2 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 32, flip: 3 }
    ],
    topbottomwalls: [
        { x: BLOCK_SIZE * 1, y: 0, flip: 0 }, { x: BLOCK_SIZE * 2, y: 0, flip: 0 }, { x: BLOCK_SIZE * 3, y: 0, flip: 0 }, { x: BLOCK_SIZE * 4, y: 0, flip: 0 }, { x: BLOCK_SIZE * 5, y: 0, flip: 0 }, { x: BLOCK_SIZE * 6, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 7, y: 0, flip: 0 }, { x: BLOCK_SIZE * 8, y: 0, flip: 0 }, { x: BLOCK_SIZE * 9, y: 0, flip: 0 }, { x: BLOCK_SIZE * 10, y: 0, flip: 0 }, { x: BLOCK_SIZE * 11, y: 0, flip: 0 }, { x: BLOCK_SIZE * 12, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 13, y: 0, flip: 0 }, { x: BLOCK_SIZE * 14, y: 0, flip: 0 }, { x: BLOCK_SIZE * 15, y: 0, flip: 0 }, { x: BLOCK_SIZE * 16, y: 0, flip: 0 }, { x: BLOCK_SIZE * 17, y: 0, flip: 0 }, { x: BLOCK_SIZE * 18, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 19, y: 0, flip: 0 }, { x: BLOCK_SIZE * 20, y: 0, flip: 0 }, { x: BLOCK_SIZE * 21, y: 0, flip: 0 }, { x: BLOCK_SIZE * 22, y: 0, flip: 0 }, { x: BLOCK_SIZE * 23, y: 0, flip: 0 }, { x: BLOCK_SIZE * 24, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 25, y: 0, flip: 0 }, { x: BLOCK_SIZE * 26, y: 0, flip: 0 }, { x: BLOCK_SIZE * 27, y: 0, flip: 0 }, { x: BLOCK_SIZE * 28, y: 0, flip: 0 }, { x: BLOCK_SIZE * 29, y: 0, flip: 0 }, { x: BLOCK_SIZE * 30, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 31, y: 0, flip: 0 }, { x: BLOCK_SIZE * 32, y: 0, flip: 0 }, { x: BLOCK_SIZE * 33, y: 0, flip: 0 }, { x: BLOCK_SIZE * 34, y: 0, flip: 0 }, { x: BLOCK_SIZE * 35, y: 0, flip: 0 }, { x: BLOCK_SIZE * 36, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 37, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 32, flip: 1 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 32, flip: 1 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 32, flip: 1 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 32, flip: 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 32, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 32, flip: 1 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 32, flip: 1 }
    ],

    leftrightwalls: [
        { x: 0, y: BLOCK_SIZE * 1, flip: 0 }, { x: 0, y: BLOCK_SIZE * 2, flip: 0 }, { x: 0, y: BLOCK_SIZE * 3, flip: 0 }, { x: 0, y: BLOCK_SIZE * 4, flip: 0 }, { x: 0, y: BLOCK_SIZE * 5, flip: 0 }, { x: 0, y: BLOCK_SIZE * 6, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 7, flip: 0 }, { x: 0, y: BLOCK_SIZE * 8, flip: 0 }, { x: 0, y: BLOCK_SIZE * 9, flip: 0 }, { x: 0, y: BLOCK_SIZE * 10, flip: 0 }, { x: 0, y: BLOCK_SIZE * 11, flip: 0 }, { x: 0, y: BLOCK_SIZE * 12, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 13, flip: 0 }, { x: 0, y: BLOCK_SIZE * 14, flip: 0 }, { x: 0, y: BLOCK_SIZE * 15, flip: 0 }, { x: 0, y: BLOCK_SIZE * 16, flip: 0 }, { x: 0, y: BLOCK_SIZE * 17, flip: 0 }, { x: 0, y: BLOCK_SIZE * 18, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 19, flip: 0 }, { x: 0, y: BLOCK_SIZE * 20, flip: 0 }, { x: 0, y: BLOCK_SIZE * 21, flip: 0 }, { x: 0, y: BLOCK_SIZE * 22, flip: 0 }, { x: 0, y: BLOCK_SIZE * 23, flip: 0 }, { x: 0, y: BLOCK_SIZE * 24, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 25, flip: 0 }, { x: 0, y: BLOCK_SIZE * 26, flip: 0 }, { x: 0, y: BLOCK_SIZE * 27, flip: 0 }, { x: 0, y: BLOCK_SIZE * 28, flip: 0 }, { x: 0, y: BLOCK_SIZE * 29, flip: 0 }, { x: 0, y: BLOCK_SIZE * 30, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 31, flip: 0 },
        { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 1, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 2, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 3, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 4, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 5, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 6, flip: 1 },
        { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 7, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 8, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 9, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 10, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 11, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 12, flip: 1 },
        { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 13, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 14, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 15, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 16, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 17, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 18, flip: 1 },
        { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 19, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 20, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 21, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 22, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 24, flip: 1 },
        { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 25, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 26, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 27, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 28, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 30, flip: 1 },
        { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 31, flip: 1 }
    ],

    normaltiles: [
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 1 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 2 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 3 },


        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 4 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 5 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 6 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 7 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 8 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 9 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 10 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 11 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 12 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 13 },


        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 14 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 15 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 16 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 17 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 18 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 19 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 20 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 21 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 22 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 23 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 24 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 25 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 26 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 27 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 28 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 29 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 30 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 31 }
    ],

    rippedtiles: [
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 31 }
    ],

    // ------------------------ ALL BACKGROUND ^^^^ CAN ADD MORE ABOVE HERE -------------------------------------

    //adds a bone randomly in each quadrent of the gameboard.
    bones: [
        { x: 183, y: 86 },   // (0 - 608), (0-512)
        { x: 469, y: 210 },   //  (0 - 608), (0-512)
        { x: 104, y: 383 },   //  (0 - 608), (0-512)
        { x: 955, y: 205 }, // (609 - 1152), (0 - 512)
        { x: 1135, y: 106 },   // (609 - 1152), (0 - 512)
        { x: 827, y: 359 },   // (609 - 1152), (0 - 512)
        { x: 90, y: 841 },  // (0 - 608), (513 - 960)
        { x: 351, y: 567 },   // (0 - 608), (513 - 960)
        { x: 460, y: 935 },   // (0 - 608), (513 - 960)
        { x: 1011, y: 551 },    //(609 - 1152), (513 - 960)
        { x: 706, y: 762 },   // (609 - 1152), (513 - 960)
        { x: 989, y: 912 }    // (609 - 1152), (513 - 960)
    ],

    //adds 1 red blood cell randomly in each quadrent of the gameboard.
    redbloodcells: [
        { x: 57, y: 180 },   // (0 - 608), (0-512)
        { x: 284, y: 411 },   //  (0 - 608), (0-512)
        { x: 161, y: 289 },   //  (0 - 608), (0-512)
        { x: 812, y: 460 }, // (609 - 1152), (0 - 512)
        { x: 639, y: 257 },   // (609 - 1152), (0 - 512)
        { x: 904, y: 61 },   // (609 - 1152), (0 - 512)
        { x: 470, y: 695 },  // (0 - 608), (513 - 960)
        { x: 168, y: 855 },   // (0 - 608), (513 - 960)
        { x: 517, y: 611 },   // (0 - 608), (513 - 960)
        { x: 773, y: 907 },    //(609 - 1152), (513 - 960)
        { x: 931, y: 545 },   // (609 - 1152), (513 - 960)
        { x: 1079, y: 743 }    // (609 - 1152), (513 - 960)


    ],

    //add power ups (Level )
    powerups: [
        { x: Math.random() * ((CANVAS_WIDTH4 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT4 - 64) - 64) + 64, type: "speed" },
        { x: Math.random() * ((CANVAS_WIDTH4 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT4 - 64) - 64) + 64, type: "size" },
        { x: Math.random() * ((CANVAS_WIDTH4 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT4 - 64) - 64) + 64, type: "stun" },
        { x: Math.random() * ((CANVAS_WIDTH4 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT4 - 64) - 64) + 64, type: "explode" },
        { x: Math.random() * ((CANVAS_WIDTH4 - 64) - 64) + 64, y: Math.random() * ((CANVAS_HEIGHT4 - 64) - 64) + 64, type: "clone" }  
    ],

    //adding 4 lymphocytes, one in each quadrant
    lymphocyte: [
        { x: 477, y: 370 },
        { x: 857, y: 108 },
        { x: 179, y: 923 },
        { x: 1064, y: 613 }
    ],

    //adding 60 cellmans
    cell: [
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 },
        { x: Math.random() * 1216, y: Math.random() * 1024 }, { x: Math.random() * 1216, y: Math.random() * 1024 }


    ],

    portal: [
        { x: 608, y: 440 }
    ]
};


// w: 40X32 = 1280 h: 34X32 = 1088
CANVAS_WIDTH5 = 1280;
CANVAS_HEIGHT5 = 1088;
var levelFive = {
    // add music
    // label
    label: "5",
    width: 1280,
    height: 1088,
    // 
    // ------------------------ ALL BACKGROUND -------------------------------------
    cornertiles: [
        { x: 0, y: 0, flip: 0 }, { x: BLOCK_SIZE * 40, y: 0, flip: 1 },
        { x: 0, y: BLOCK_SIZE * 34, flip: 2 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 34, flip: 3 }
    ],

    topbottomwalls: [
        { x: BLOCK_SIZE * 1, y: 0, flip: 0 }, { x: BLOCK_SIZE * 2, y: 0, flip: 0 }, { x: BLOCK_SIZE * 3, y: 0, flip: 0 }, { x: BLOCK_SIZE * 4, y: 0, flip: 0 }, { x: BLOCK_SIZE * 5, y: 0, flip: 0 }, { x: BLOCK_SIZE * 6, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 7, y: 0, flip: 0 }, { x: BLOCK_SIZE * 8, y: 0, flip: 0 }, { x: BLOCK_SIZE * 9, y: 0, flip: 0 }, { x: BLOCK_SIZE * 10, y: 0, flip: 0 }, { x: BLOCK_SIZE * 11, y: 0, flip: 0 }, { x: BLOCK_SIZE * 12, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 13, y: 0, flip: 0 }, { x: BLOCK_SIZE * 14, y: 0, flip: 0 }, { x: BLOCK_SIZE * 15, y: 0, flip: 0 }, { x: BLOCK_SIZE * 16, y: 0, flip: 0 }, { x: BLOCK_SIZE * 17, y: 0, flip: 0 }, { x: BLOCK_SIZE * 18, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 19, y: 0, flip: 0 }, { x: BLOCK_SIZE * 20, y: 0, flip: 0 }, { x: BLOCK_SIZE * 21, y: 0, flip: 0 }, { x: BLOCK_SIZE * 22, y: 0, flip: 0 }, { x: BLOCK_SIZE * 23, y: 0, flip: 0 }, { x: BLOCK_SIZE * 24, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 25, y: 0, flip: 0 }, { x: BLOCK_SIZE * 26, y: 0, flip: 0 }, { x: BLOCK_SIZE * 27, y: 0, flip: 0 }, { x: BLOCK_SIZE * 28, y: 0, flip: 0 }, { x: BLOCK_SIZE * 29, y: 0, flip: 0 }, { x: BLOCK_SIZE * 30, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 31, y: 0, flip: 0 }, { x: BLOCK_SIZE * 32, y: 0, flip: 0 }, { x: BLOCK_SIZE * 33, y: 0, flip: 0 }, { x: BLOCK_SIZE * 34, y: 0, flip: 0 }, { x: BLOCK_SIZE * 35, y: 0, flip: 0 }, { x: BLOCK_SIZE * 36, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 37, y: 0, flip: 0 }, { x: BLOCK_SIZE * 38, y: 0, flip: 0 }, { x: BLOCK_SIZE * 39, y: 0, flip: 0 },
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 34, flip: 1 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 34, flip: 1 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 34, flip: 1 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 34, flip: 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 34, flip: 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 34, flip: 1 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 34, flip: 1 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 34, flip: 1 }
    ],

    leftrightwalls: [
        { x: 0, y: BLOCK_SIZE * 1, flip: 0 }, { x: 0, y: BLOCK_SIZE * 2, flip: 0 }, { x: 0, y: BLOCK_SIZE * 3, flip: 0 }, { x: 0, y: BLOCK_SIZE * 4, flip: 0 }, { x: 0, y: BLOCK_SIZE * 5, flip: 0 }, { x: 0, y: BLOCK_SIZE * 6, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 7, flip: 0 }, { x: 0, y: BLOCK_SIZE * 8, flip: 0 }, { x: 0, y: BLOCK_SIZE * 9, flip: 0 }, { x: 0, y: BLOCK_SIZE * 10, flip: 0 }, { x: 0, y: BLOCK_SIZE * 11, flip: 0 }, { x: 0, y: BLOCK_SIZE * 12, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 13, flip: 0 }, { x: 0, y: BLOCK_SIZE * 14, flip: 0 }, { x: 0, y: BLOCK_SIZE * 15, flip: 0 }, { x: 0, y: BLOCK_SIZE * 16, flip: 0 }, { x: 0, y: BLOCK_SIZE * 17, flip: 0 }, { x: 0, y: BLOCK_SIZE * 18, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 19, flip: 0 }, { x: 0, y: BLOCK_SIZE * 20, flip: 0 }, { x: 0, y: BLOCK_SIZE * 21, flip: 0 }, { x: 0, y: BLOCK_SIZE * 22, flip: 0 }, { x: 0, y: BLOCK_SIZE * 23, flip: 0 }, { x: 0, y: BLOCK_SIZE * 24, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 25, flip: 0 }, { x: 0, y: BLOCK_SIZE * 26, flip: 0 }, { x: 0, y: BLOCK_SIZE * 27, flip: 0 }, { x: 0, y: BLOCK_SIZE * 28, flip: 0 }, { x: 0, y: BLOCK_SIZE * 29, flip: 0 }, { x: 0, y: BLOCK_SIZE * 30, flip: 0 },
        { x: 0, y: BLOCK_SIZE * 31, flip: 0 }, { x: 0, y: BLOCK_SIZE * 32, flip: 0 }, { x: 0, y: BLOCK_SIZE * 33, flip: 0 },
        { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 1, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 2, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 3, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 4, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 5, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 6, flip: 1 },
        { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 7, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 8, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 9, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 10, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 11, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 12, flip: 1 },
        { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 13, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 14, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 15, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 16, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 17, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 18, flip: 1 },
        { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 19, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 20, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 21, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 22, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 23, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 24, flip: 1 },
        { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 25, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 26, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 27, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 28, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 29, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 30, flip: 1 },
        { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 31, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 32, flip: 1 }, { x: BLOCK_SIZE * 40, y: BLOCK_SIZE * 33, flip: 1 }
    ],

    normaltiles: [
        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 1 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 1 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 2 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 2 },  { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 2 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 3 },
        { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 3 },  { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 3 }, 
        { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 3 },


        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 4 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 4 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 5 },
        { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 5 }, 
        { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 5 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 6 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 6 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 7 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 7 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 8 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 8 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 9 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 9 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 10 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 10 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 11 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 11 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 12 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 12 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 13 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 13 },


        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 14 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 14 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 15 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 15 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 16 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 16 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 17 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 17 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 18 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 18 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 19 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 19 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 20 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 20 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 21 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 21 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 22 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 22 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 23 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 23 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 24 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 24 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 25 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 25 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 26 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 26 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 27 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 27 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 28 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 28 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 29 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 29 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 30 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 30 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 31 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 31 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 31 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 32 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 32 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 32 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 32 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 32 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 32 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 32 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 32 },

        { x: BLOCK_SIZE * 1, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 3, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 6, y: BLOCK_SIZE * 33 },
        { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 8, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 9, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 12, y: BLOCK_SIZE * 33 },
        { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 15, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 33 },
        { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 22, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 23, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 33 },
        { x: BLOCK_SIZE * 25, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 28, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 30, y: BLOCK_SIZE * 33 },
        { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 33 },
        { x: BLOCK_SIZE * 37, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 38, y: BLOCK_SIZE * 33 }, { x: BLOCK_SIZE * 39, y: BLOCK_SIZE * 33 }
    ],

    rippedtiles: [
        { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 1 }, { x: BLOCK_SIZE * 29, y: BLOCK_SIZE * 2 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 3 }, { x: BLOCK_SIZE * 32, y: BLOCK_SIZE * 4 }, { x: BLOCK_SIZE * 13, y: BLOCK_SIZE * 5 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 6 },
        { x: BLOCK_SIZE * 10, y: BLOCK_SIZE * 7 }, { x: BLOCK_SIZE * 18, y: BLOCK_SIZE * 8 }, { x: BLOCK_SIZE * 26, y: BLOCK_SIZE * 9 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 10 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 11 }, { x: BLOCK_SIZE * 34, y: BLOCK_SIZE * 12 },
        { x: BLOCK_SIZE * 14, y: BLOCK_SIZE * 13 }, { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 14 }, { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 15 }, { x: BLOCK_SIZE * 16, y: BLOCK_SIZE * 16 }, { x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 17 }, { x: BLOCK_SIZE * 5, y: BLOCK_SIZE * 18 },
        { x: BLOCK_SIZE * 33, y: BLOCK_SIZE * 19 }, { x: BLOCK_SIZE * 17, y: BLOCK_SIZE * 20 }, { x: BLOCK_SIZE * 20, y: BLOCK_SIZE * 21 }, { x: BLOCK_SIZE * 7, y: BLOCK_SIZE * 22 }, { x: BLOCK_SIZE * 11, y: BLOCK_SIZE * 23 }, { x: BLOCK_SIZE * 24, y: BLOCK_SIZE * 24 },
        { x: BLOCK_SIZE * 2, y: BLOCK_SIZE * 25 }, { x: BLOCK_SIZE * 27, y: BLOCK_SIZE * 26 }, { x: BLOCK_SIZE * 19, y: BLOCK_SIZE * 27 }, { x: BLOCK_SIZE * 36, y: BLOCK_SIZE * 28 }, { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 29 }, { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 30 },
        { x: BLOCK_SIZE * 35, y: BLOCK_SIZE * 31 },  { x: BLOCK_SIZE * 21, y: BLOCK_SIZE * 32 },  { x: BLOCK_SIZE * 4, y: BLOCK_SIZE * 33 }
    ],

    // ------------------------ ALL BACKGROUND ^^^^ CAN ADD MORE ABOVE HERE -------------------------------------

    //adds a bones in each quadrent of the gameboard.
    bones: [
        { x: 215, y: 118 },   // (0 - 608), (0-512)
        { x: 501, y: 210 },   //  (0 - 608), (0-512)
        { x: 136, y: 415 },   //  (0 - 608), (0-512)
        { x: 987, y: 205 }, // (609 - 1152), (0 - 512)
        { x: 1167, y: 138 },   // (609 - 1152), (0 - 512)
        { x: 859, y: 359 },   // (609 - 1152), (0 - 512)
        { x: 122, y: 873 },  // (0 - 608), (513 - 960)
        { x: 383, y: 567 },   // (0 - 608), (513 - 960)
        { x: 492, y: 967 },   // (0 - 608), (513 - 960)
        { x: 1043, y: 551 },    //(609 - 1152), (513 - 960)
        { x: 738, y: 794 },   // (609 - 1152), (513 - 960)
        { x: 1021, y: 912 }    // (609 - 1152), (513 - 960)
    ],

    //adds red blood cellsin each quadrent of the gameboard.
    redbloodcells: [
        { x: 57, y: 212 },   // (0 - 608), (0-512)
        { x: 316, y: 443 },   //  (0 - 608), (0-512)
        { x: 193, y: 321 },   //  (0 - 608), (0-512)
        { x: 844, y: 492 }, // (609 - 1152), (0 - 512)
        { x: 671, y: 289 },   // (609 - 1152), (0 - 512)
        { x: 936, y: 93 },   // (609 - 1152), (0 - 512)
        { x: 502, y: 727 },  // (0 - 608), (513 - 960)
        { x: 200, y: 887 },   // (0 - 608), (513 - 960)
        { x: 549, y:  643},   // (0 - 608), (513 - 960)
        { x: 805, y: 939 },    //(609 - 1152), (513 - 960)
        { x: 963, y: 500 },   // (609 - 1152), (513 - 960)
        { x: 1111, y: 775 }    // (609 - 1152), (513 - 960)
    ],

    //add power ups (Level 5 only has )
    powerups: [],

    //adding  lymphocyte
    lymphocyte: [],

    //adding  cellmans
    cell: [],

    portal: []

};