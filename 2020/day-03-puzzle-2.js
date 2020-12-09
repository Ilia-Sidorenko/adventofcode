/*
 https://adventofcode.com/2020/day/3#part2
 Answer 9533698720
*/

const input = [
    '...#...###......##.#..#.....##.',
    '..#.#.#....#.##.#......#.#....#',
    '......#.....#......#....#...##.',
    '...#.....##.#..#........##.....',
    '...##...##...#...#....###....#.',
    '...##...##.......#....#...#.#..',
    '..............##..#..#........#',
    '#.#....#.........#...##.#.#.#.#',
    '.#..##......#.#......#...#....#',
    '#....#..#.#.....#..#...#...#...',
    '#.#.#.....##.....#.........#...',
    '......###..#....#..#..#.#....#.',
    '##.####...#.............#.##..#',
    '....#....#..#......#.......#...',
    '...#.......#.#..#.........##.#.',
    '......#.#.....###.###..###..#..',
    '##..##.......#.#.....#..#....#.',
    '..##.#..#....#.............##.#',
    '....#.#.#..#..#........##....#.',
    '.....####..#..#.###..#....##..#',
    '#.#.......#...##.##.##..#....#.',
    '.#..#..##...####.#......#..#...',
    '#...##.......#...####......##..',
    '...#.####....#.#...###.#.#...#.',
    '....#...........#.##.##.#......',
    '.....##...#.######.#..#....#..#',
    '.#....#...##....#..######....#.',
    '...#.....#...#####.##...#..#.#.',
    '.....#...##........##.##.##.###',
    '#.#..#....##....#......#....#.#',
    '......##...#.........#....#.#..',
    '###..#..##......##.#####.###.##',
    '#.....#..##.##....#...........#',
    '##..#.#..##..#.#.....#......#..',
    '.#.##.#..#.#....##..#..#....#..',
    '.#......##..##.#...#..#.......#',
    '#....##.##..###..###......##.#.',
    '....###..##.......#.###.#....#.',
    '..##........#........##.....#..',
    '.#..#.....#...####.##...##.....',
    '....#.#.#.....#.##..##.....#..#',
    '..............#.....#...#.....#',
    '.#.....#......###...........#.#',
    '.....#.#......#.##..#..........',
    '.#......###............#.#.##..',
    '.#.#....##.#..###.....#.##..#.#',
    '.......#.#.#..#..#..#...##..#.#',
    '.#.###...##.#.#.####.#.#...#...',
    '...#.#....#......##.##.#.......',
    '#...#.....##....#........##....',
    '.....###...#.##.#......##.#..#.',
    '..#...##.##.###..#..#......####',
    '.#.##.#..#.##..##..........##..',
    '..#.#.#..#.#.....#...###.....#.',
    '..#..#.#....#.##.............##',
    '.......#..###..#.#...#.....##.#',
    '####.#.#......#..#.##.........#',
    '..........#.....#..##......###.',
    '..#..............#...#..##.....',
    '......#.#.#..#.##.....####..##.',
    '.##.#..#.#....#.......#..#.....',
    '..#..#..#.##.#....###.#.#.#.#.#',
    '.....#....#......###..#........',
    '#.#.#..#...###.....#......#.##.',
    '...#.#....#.#......#........#..',
    '..#...###.#...#..#....##...#..#',
    '.###.##..#..#...###.#..#.####..',
    '#....#..##..##..#......#...##..',
    '#.#..#...#..#...###..#.#.##....',
    '##....#....##.####...#.#.###...',
    '##.#...#.......#.##.##....#...#',
    '..#.#..........#..#.#.#....#..#',
    '..#........#...#....#....#....#',
    '..#..#....#.......#........#...',
    '......#....#....##.#....#.#.##.',
    '.##...###.##.##....##.#...###..',
    '.....##..#.#.....###..#.....###',
    '....##.#.##...##..##........#..',
    '#...#..##.#.#....#......#...#..',
    '.###.##.#........#.####....#...',
    '#.##.....#..#...#..##.##..#.#..',
    '.....#.#..#....#..#...##.##.#..',
    '.#......#####...##...#.#.###.#.',
    '#......##....#.....#......##.#.',
    '#.#.##.###.#......#####..#.....',
    '........###.#...#..#.#........#',
    '....#....###..#.##.#...#....#..',
    '..........#..#.#....#...#.#...#',
    '#.##......###.#.#.#....####...#',
    '...#.#....#........##.#.....##.',
    '.....##..#.#.#..###...##...#...',
    '#...#...#....#....##........#..',
    '.....#.........##.#......#..#..',
    '#.....##..#.###.....#....##.##.',
    '...#..#..#.#........##...##.#.#',
    '..#..##.###.....#.#.....###.##.',
    '..###.........#...##.....###...',
    '...###...##.#...##....##.......',
    '.#.#..#...###..#.#....#....#...',
    '##..#.......#....#.#...#..#..#.',
    '..#......#....####..##..#.###.#',
    '..#.......##........#.#.#..#...',
    '.#.......#.##.#.##.#.......#..#',
    '###...#...#...#...#..#...#...##',
    '..#..........#..###........##..',
    '.##..#....##......##........#.#',
    '......#.##......#......##...#.#',
    '.#.#....#.#.#........#......#..',
    '.#.#..#....####..##...##....#..',
    '.#...##..#..#..#####....##.#...',
    '.##.#.#...#...#.#...#.##.#...#.',
    '###.#...##..#.###.#.....#.##.#.',
    '#.....#.###.#.#...#..#....#.#..',
    '..##..#....#......#.........###',
    '.#...#...##......#...#.####....',
    '..#.##...##..............#.#..#',
    '..#......#..##...........#..#.#',
    '..#####...#..#.......##...###..',
    '..##..#....#.#...###.#...#.....',
    '..#....#..#.#.......#..#.#.#...',
    '.##..#.#.....##....#.......#...',
    '...#.#..###...##....#....##..#.',
    '.....##..#...##.####....##...#.',
    '.......#.........#...#.##..####',
    '........###..#..#.##.###..#....',
    '.#.#..#.##.##.........#...#....',
    '.###......#.....#....##....####',
    '.##..##...........#.....#.....#',
    '#.#.#.#.#.#.##..#.#.#..#.##....',
    '.##.##...##..#....##..###..####',
    '#..##.#......#...###.........#.',
    '#..#...#..##..#..##.....##...#.',
    '#...##..#...##.#.###.#...#.....',
    '.###.....#.......#...#.##.###.#',
    '..........#.#......#...###...##',
    '..##....#.#..#....#.###...#..##',
    '#.#..#....##.##..##.........##.',
    '#.....#.##.###.#..#....##...#..',
    '...#........##...#..###..######',
    '#..#.#.#.#...#....#....###.#..#',
    '...##.##.##.....##..#........#.',
    '..#.#....#..#.......#...##.##.#',
    '###.##.......##..#.####...#.#..',
    '....#.#.....##.....#.#.##...#..',
    '.#..##..#.....#.#..#...#..#..#.',
    '.###....##...#......#.....#....',
    '##.##.###......#...#...###.#...',
    '#...#.##...#.#....##.....####..',
    '#.#.#.#...###...##.............',
    '..#....#.....##.#...#......#...',
    '....#...#......#...#..#...#.#..',
    '.###..#.....#..#...#....#...#..',
    '..#...#.#..###.......#..#.#...#',
    '#...###.##.....#....#..#.#..##.',
    '...#.##.#.##......#.#.#.##.....',
    '........####...##...##..#....#.',
    '.#.#....#....#.#...##.###...##.',
    '#.#...###.#.#.#....#....#.#....',
    '.####.#..#.#....#..#.#..#..#...',
    '#####...#...#...#....#.#.#..##.',
    '..###.##.###...#..........#.##.',
    '##.....#...#....###..###.#.#.#.',
    '#..##.#..#..#..#...#.#...###..#',
    '##....#.#...##......#.#...#...#',
    '.##..........#.#....#...#.##..#',
    '....#....####.#.####......#.###',
    '..##.#.....####.#.####.......#.',
    '#.##.##.#.....#.##......##...#.',
    '......###..#.....#.....##......',
    '..#..#....#.#...#.....#......##',
    '##..#..#..###.#.#..#..##.....#.',
    '#....#.#.....#####...#.#.......',
    '.....#..#....#.#.#..#...#...#..',
    '............#.##......##.##.#.#',
    '....#...#.#........###....#....',
    '..#..#...###.#....##..#..###.##',
    '#.##....#...#.....##..#.##.#...',
    '...##..###...#.#.....##.#......',
    '.#..#.##.#####..#.......#..###.',
    '...#.##...###.....####.#.#.....',
    '.#......##.#.#.#.#.##.#.....#..',
    '..#.##.#..##.......#.#.....##..',
    '..................#....#...#...',
    '.##.#..#.#.#..#.......#.#..##.#',
    '....#........#......#..####..#.',
    '#...#...##..##.#..#.......##...',
    '#..#..#..#..#........####..#.#.',
    '..#.#......#..#.##.##.#.#...#.#',
    '...#..#......#.#.###.#.##..##..',
    '..#...##.....#..#...##..#.#....',
    '#.........#....#..#....##.##..#',
    '..#..#.#....#..#...#.##.....#..',
    '...#..#...#.#.....#..##..#.#...',
    '....#........#.#....##..##..#..',
    '#.....#.#..#.......#.##.....#..',
    '.#.###.###...##...##..###...#..',
    '.##.##.......#.#......#.....#.#',
    '...#....##....#..#..........#.#',
    '..#.##.........#.#.....#.....#.',
    '...#.##..##.......##..##...#...',
    '#.##......##.##..#.....##...##.',
    '#.#.#..##...#.#............#.#.',
    '....#.....#......##...#.#.....#',
    '...#.#......#.#...###.......#..',
    '......##..###....#.#...#.#####.',
    '..#..#.#.#...##.#...###..##..#.',
    '##.##.#.#.##.#..#....#...#...#.',
    '#..#....######.##.#...#...#.#..',
    '.#..#.##....#..#.#.......#....#',
    '....#....#......##....##.#.#...',
    '.###......#..#..#.......####..#',
    '.#.#.....#..###...........##...',
    '.##..##.##.....####..#..#..##..',
    '..#..##.#......#...###.##..#.#.',
    '....##..#.....###..#.##....##.#',
    '#..#......#....#.........#.....',
    '.#...#.....#.#..#..##....#.....',
    '.##..#...#..##.#..#...........#',
    '..#..##........##.......#..#...',
    '#.....#....#....#.#.#...##.#...',
    '...#...#.#.#..#.##.#.#...#.....',
    '..#..#.#....#....###....#.#.#..',
    '...###..#...#..#....#.....#....',
    '...#...#.#..#.....#...###......',
    '##......#..........#.#.#..#.#.#',
    '....#.....#.....#..#..#.#.#.#..',
    '...####...#.##...#.#..#....#.#.',
    '#.##........##.............#.##',
    '#.#.#.#.#.....................#',
    '.#.###....#..##.##.##....#.....',
    '#.#...#.####.###...#..#..#.#...',
    '.##...#..###.......##..#.#.....',
    '#.#.#.#...#...#.##.....#.......',
    '.##.#.#.#......####..#.#.......',
    '###..........#......#...##...#.',
    '.........##...#.##...#.#.......',
    '...#.#.....#...#..#...#..##..#.',
    '.#..###...#.#.........###....#.',
    '##..#...#........#.........##..',
    '.....#...#.#...#.#.#...........',
    '..#....##...#.#..#..#.##....##.',
    '.##....#.#.....##.#..#..#...##.',
    '..##......#.#...#.#.......##.#.',
    '##...#..#...##.#........#.##...',
    '#......#.##..#.#..#.###.......#',
    '#.#...#.....#.#......#.#.#.....',
    '#.....#..#.......#....##.#.#..#',
    '###.#....#..##.#.##....#....#..',
    '#.##.##....#.#..#.#...#....#...',
    '####...#####...#.....#....##.#.',
    '....#.#...#.#.##.#.#.##.#.#.###',
    '#.....##.#.....#.#......#.#..#.',
    '.#....##.#..#........#...##.#..',
    '......#...#....##....##....##..',
    '..###.....#....##.#...#..#.....',
    '#....##...##.##..##.#...#...#..',
    '#..#...#...#.#....##..#.#....#.',
    '......................#.....#..',
    '.#..#...#.........#....##...###',
    '.##.#.#...##...#...#...#..#....',
    '.#.###....#.#............##..#.',
    '###..##.#.#.#.#....##...#......',
    '.##................####...##.##',
    '.#.#.........##....#.#.##.##.#.',
    '....#...#...#...##...#.##.#..#.',
    '.#.#........#..##.....#..#....#',
    '##.#..#.#....#.....#...#...#...',
    '.#...##....#.....##....#..#.#.#',
    '####.....#..#....#......###.##.',
    '##..##.#....###.....#...#......',
    '.##.#...#.....#.#..#.#..#.#...#',
    '.....#.#..#..#..###.#...###.#..',
    '.#.#.##.#..#.#..#...#..#.......',
    '..#.....#....#.##.##.##.......#',
    '.#..##....###...#..............',
    '#....#...#.#.......#....##.#...',
    '....#.#..##.#....#..#.#....#.#.',
    '#.........##...#.#.............',
    '#.#.......##.....#...##..##.#.#',
    '.......#....#..##...#..#######.',
    '.#.#...##........#..#.....#.#..',
    '.#.......#..#......#.##.##...##',
    '.........#............#....#..#',
    '.#......#...##...##...#....###.',
    '.........#...#.#.###.......#...',
    '###.#..#.#.#.#......##...#.#...',
    '.#.........##.#....###....#.#..',
    '#.#....#..#.##.#..#....##...#..',
    '###.#...#..#..##........#.###..',
    '.....#....#..#........#..#.##.#',
    '..#.....##......#....#..#.#.#..',
    '.#.........#.....#.....#.......',
    '......#....#.###..#.#....#....#',
    '..#.#..#.#.###.........#..#..#.',
    '..#..#.#.#.........#....##.#.#.',
    '#.......#........##...##....#..',
    '##..#..#...###...#..##..#..#.#.',
    '##..#..#....#.#..##..#..#.#..#.',
    '..##.....##.#..#.#........###..',
    '..#.#..#..##........#...#....##',
    '.##..#....##..#..#..#..#.#....#',
    '#....#.....##........#.....#.##',
    '......#....#.#..#......#.##....',
    '.......#..#..#......##.........',
    '......#...#..##.....#......#..#',
    '#..#..#....##....#........##..#',
    '##....#...#.#.....#####........',
    '...#.#..#.#.##.#.##..##...#....',
    '..#..#..#..#..#....#..#..##...#',
    '.#.....#....##.##....##.....#..',
    '#...#.....#.....#.#...#.#....#.',
    '.###...#..##....#..#...#.###...',
    '....#..##..#.......#.##.##..###',
    '#.......##.....#.......#.#...##',
    '#.....#.#.#....#.#......#.#.#..',
    '..##.....#..###......##........',
    '.....#...#..##....#......#.....',
    '#..#..#....#.#...#..###.......#',
    '.....#.....#....#..#...#.#..##.',
    '#####........#...#..#..##..#.#.',
    '.#..#...#.##....#.#..#......###',
    '#.###.#..#.....##..##....#...#.',
    '.#...#.#####....##..........##.'
];

const steps = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 }
];


let xMaxPos = input[0].length;
let yMaxPos = input.length;

let treeCounts = [];
function firstApproach() {
    steps.forEach(step => {
        let xPos = 1;
        let yPos = 1;
        let treeCount = 0;
        while (yPos < yMaxPos) {
            xPos += step.x;
            yPos += step.y;
            if (xPos > xMaxPos) {
                xPos -= xMaxPos;
            }
            if (input[yPos - 1][xPos - 1] == "#") {
                treeCount++;
            }
        }
        treeCounts.push(treeCount);
    });

    let result = treeCounts.reduce(function(product, current) {
        return product * current;
    }, 1);
    console.log(result);
}

firstApproach();