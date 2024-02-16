BLOCK_SIZE = 32;
CANVAS_WIDTH = 1024;
CANVAS_HEIGHT = 768;
var levelOne = {
    // add music
    // label
    // 
    // ------------------------ ALL BACKGROUND -------------------------------------
    cornertiles: [{x: 0, y: 0, flip: 0}, {x: BLOCK_SIZE * 31, y: 0, flip: 1}
        ,{x: 0, y: BLOCK_SIZE * 23, flip: 2}, {x: BLOCK_SIZE * 31, y: BLOCK_SIZE * 23, flip: 3}],
    topbottomwalls: [
        {x:BLOCK_SIZE * 1 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 2 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 3 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 4 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 5 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 6 , y: 0 , flip: 0},
        {x:BLOCK_SIZE * 7 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 8 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 9 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 10 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 11 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 12 , y: 0 , flip: 0}, 
        {x:BLOCK_SIZE * 13 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 14 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 15 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 16 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 17 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 18 , y: 0 , flip: 0}, 
        {x:BLOCK_SIZE * 19 , y: 0 , flip: 0},  {x:BLOCK_SIZE * 20 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 21 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 22 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 23 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 24 , y: 0 , flip: 0},
        {x:BLOCK_SIZE * 25 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 26 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 27 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 28 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 29 , y: 0 , flip: 0}, {x:BLOCK_SIZE * 30 , y: 0 , flip: 0}, 
        {x:BLOCK_SIZE * 1 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 2 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 3 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 4 , y: BLOCK_SIZE * 23 , flip: 1},
        {x:BLOCK_SIZE * 5 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 6 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 7 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 8 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 9 , y: BLOCK_SIZE * 23 , flip: 1},
        {x:BLOCK_SIZE * 10 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 11 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 12 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 13 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 14 , y: BLOCK_SIZE * 23 , flip: 1},
        {x:BLOCK_SIZE * 15 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 16 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 17 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 18 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 19 , y: BLOCK_SIZE * 23 , flip: 1},
        {x:BLOCK_SIZE * 20 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 21 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 22 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 23 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 24 , y: BLOCK_SIZE * 23 , flip: 1},
        {x:BLOCK_SIZE * 25 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 26 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 27 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 28 , y: BLOCK_SIZE * 23 , flip: 1}, {x:BLOCK_SIZE * 29 , y: BLOCK_SIZE * 23 , flip: 1},
        {x:BLOCK_SIZE * 30 , y: BLOCK_SIZE * 23 , flip: 1}],
    leftrightwalls: [
        {x: 0 , y: BLOCK_SIZE * 1 , flip: 0}, {x: 0 , y: BLOCK_SIZE * 2 , flip: 0},{x: 0 , y: BLOCK_SIZE * 3 , flip: 0},{x: 0 , y: BLOCK_SIZE * 4 , flip: 0},{x: 0 , y: BLOCK_SIZE * 5 , flip: 0},{x: 0 , y: BLOCK_SIZE * 6 , flip: 0},{x: 0 , y: BLOCK_SIZE * 7 , flip: 0},
        {x: 0 , y: BLOCK_SIZE * 8 , flip: 0},{x: 0 , y: BLOCK_SIZE * 9 , flip: 0},{x: 0 , y: BLOCK_SIZE * 10 , flip: 0},{x: 0 , y: BLOCK_SIZE * 11 , flip: 0},{x: 0 , y: BLOCK_SIZE * 12 , flip: 0},{x: 0 , y: BLOCK_SIZE * 13 , flip: 0},{x: 0 , y: BLOCK_SIZE * 14 , flip: 0},
        {x: 0 , y: BLOCK_SIZE * 15 , flip: 0},{x: 0 , y: BLOCK_SIZE * 16 , flip: 0},{x: 0 , y: BLOCK_SIZE * 17 , flip: 0},{x: 0 , y: BLOCK_SIZE * 18 , flip: 0},{x: 0 , y: BLOCK_SIZE * 19 , flip: 0},{x: 0 , y: BLOCK_SIZE * 20 , flip: 0},{x: 0 , y: BLOCK_SIZE * 21 , flip: 0},
        {x: 0 , y: BLOCK_SIZE * 22 , flip: 0}, 
        {x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 1 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 2 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 3 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 4 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 5 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 6 , flip: 1},
        {x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 7 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 8 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 9 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 10 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 11 , flip: 1},
        {x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 12 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 13 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 14 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 15 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 16 , flip: 1},
        {x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 17 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 18 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 19 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 20 , flip: 1},{x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 21 , flip: 1},
        {x: BLOCK_SIZE * 31 , y: BLOCK_SIZE * 22 , flip: 1}],
    normaltiles: [
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 1}, {x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 1},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 1},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 1},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 1},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 1},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 1},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 2},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 2},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 2},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 2},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 2},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 2},
        
        {x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 3},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 3},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 3},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 3},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 3},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 3},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 4},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 4},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 4},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 4},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 4}
        ,{x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 4},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 5},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 5},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 5},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 5},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 5},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 5},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 6},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 6},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 6},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 6},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 6},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 6},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 7},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 7},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 7},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 7},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 7},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 7},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 8},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 8},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 8},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 8},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 8},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 8},
        {x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 8},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 9},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 9},
        {x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 9},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 9},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 9},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 9},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 10},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 10},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 10},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 10},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 10},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 10},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 11},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 11},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 11},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 11},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 11},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 11},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 11},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 12},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 12},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 12},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 12},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 12},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 12},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 12},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 13},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 13},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 13},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 13},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 13},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 13},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 14},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 14},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 14},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 14},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 14},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 14},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 14},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 15},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 15},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 15},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 15},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 15},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 15},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 16},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 16},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 16},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 16},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 16},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 16},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 17},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 17},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 17},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 17},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 17},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 17},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 18},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 18},
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 18},
        {x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 18},
        {x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 18},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 18},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 19},
        {x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 19},
        {x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 19},
        {x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 19},
        {x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 19},
        {x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 19},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 19},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 19},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 20},
        {x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 20},
        {x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 20},
        {x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 20},
        {x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 20},
        {x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 20},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 20},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 21},
        {x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 21},
        {x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 21},
        {x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 21},
        {x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 21},
        {x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 21},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 21},
        
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 3 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 22},
        {x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 7 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 8 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 22},
        {x: BLOCK_SIZE * 11 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 22},
        {x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 22},
        {x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 23 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 24 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 25 , y: BLOCK_SIZE * 22},
        {x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 22},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 22},
        {x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 22}        
    ],

    rippedtiles: [
        {x: BLOCK_SIZE * 15 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 1},{x: BLOCK_SIZE * 22 , y: BLOCK_SIZE * 2},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 3},
        {x: BLOCK_SIZE * 1 , y: BLOCK_SIZE * 3},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 27 , y: BLOCK_SIZE * 4},{x: BLOCK_SIZE * 5 , y: BLOCK_SIZE * 5},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 5},
        {x: BLOCK_SIZE * 14 , y: BLOCK_SIZE * 6},{x: BLOCK_SIZE * 10 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 29 , y: BLOCK_SIZE * 7},{x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 8}, 
        {x: BLOCK_SIZE * 13 , y: BLOCK_SIZE * 9},{x: BLOCK_SIZE * 17 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 2 , y: BLOCK_SIZE * 10},{x: BLOCK_SIZE * 21 , y: BLOCK_SIZE * 11},
        {x: BLOCK_SIZE * 18 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 4 , y: BLOCK_SIZE * 13},{x: BLOCK_SIZE * 20 , y: BLOCK_SIZE * 15},{x: BLOCK_SIZE * 9 , y: BLOCK_SIZE * 16},
        {x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 16},{x: BLOCK_SIZE * 26 , y: BLOCK_SIZE * 17},{x: BLOCK_SIZE * 16 , y: BLOCK_SIZE * 18},{x: BLOCK_SIZE * 30 , y: BLOCK_SIZE * 19},
        {x: BLOCK_SIZE * 12 , y: BLOCK_SIZE * 20},{x: BLOCK_SIZE * 6 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 19 , y: BLOCK_SIZE * 21},{x: BLOCK_SIZE * 28 , y: BLOCK_SIZE * 22},
         ],
    
    // ------------------------ ALL BACKGROUND ^^^^ CAN ADD MORE ABOVE HERE -------------------------------------

    //adds a bone randomly in each quadrent of the gameboard.
    bones: [
        {x: Math.random() * (960 - 32) + 32, y: Math.random() * (154 - 32) + 32}, 
        {x: Math.random() * (960 - 32) + 32, y: Math.random() * (308 - 155) + 155},
        {x: Math.random() * (960 - 32) + 32, y: Math.random() * (462 - 318) + 309},
        {x: Math.random() * (960 - 32) + 32, y: Math.random() * (616 - 472) + 463},
        {x: Math.random() * (960 - 32) + 32, y: Math.random() * (736 - 626) + 617}
    ],

    //adds 1 red blood cell randomly in each quadrent of the gameboard.
    redbloodcells: [
        {x: Math.random() * (480 - 32) + 32, y: Math.random() * (352 - 32) + 32}, // ++
        {x: Math.random() * (992 - 480) + 480, y: Math.random() * (704 - 352) + 352}, // --
        {x: Math.random() * (992 - 480) + 480, y: Math.random() * (352 - 32) + 32}, // -+
        {x: Math.random() * (480 - 32) + 32, y: Math.random() * (704 - 352) + 352} //+-
        
    ],
    
    //add power ups (Level 1 only has speed and size powerups)
    powerups:[
        {x: Math.random() * (496 - 32) + 32, y: Math.random() * (704 - 32) + 32, type: "speed"},
        {x: Math.random() * (960 - 497) + 497, y: Math.random() * (704 - 32) + 32, type: "size"}
    ],

    //adding 1 lymphocyte
    lymphocyte: [
        {x: CANVAS_WIDTH / 2 - 104, y: CANVAS_HEIGHT / 2 - 104}
    ],

    //adding 30 cellmans
    cell: [
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
        {x: Math.random() * 1024, y: Math.random() * 768}, {x: Math.random() * 1024, y: Math.random() * 768}, 
       

    ]
    


};