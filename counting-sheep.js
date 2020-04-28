// 1. Counting Sheep

const countingSheep = (numSheeps) => {
  if (numSheeps === 0) {
    return console.log("All sheep jumped over the fence");
  }

  console.log(numSheeps + ": Another sheep jumps over the fence");
  return countingSheep(numSheeps - 1);
};

// countingSheep(3);

// 2 Power Calculator
function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  }
  if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, exponent - 1);
}

// console.log(powerCalculator(10, 2));

// 3 Reverse String

function reversedString(str) {
  if (str.length === 0) {
      return '';
  }
  return reversedString(str.substr(1)) + str[0]
  // return  str[str.length - 1] + reversedString(str.slice(0, -1));
};

// console.log(reversedString('string'));

// 4. nth Triangular Number

function triangleNumber(n) {
  if (n === 0) {
    return 0;
  }
  return n + triangleNumber(n - 1);

}

// console.log(triangleNumber(8));

// 5 String Splitter

function stringSplitter(string, splitter) {
  // Base Case
  if (string.indexOf(splitter) === -1) {
      return [string.slice(0, string.length)]
  }

  // General Case

  return [string.slice(0, string.indexOf(splitter)), ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter)]
}

// console.log(stringSplitter('02/20/2020', '/'))

// 6 Fibonacci

function fibonacci(num) {
  if (num === 1) {
      return [0];
  }
  if (num === 2) {
      return [1, 1];
  }
  const arr = fibonacci(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
};

// console.log(fibonacci(4));

// 7 Factorial

function factorial(num) {
  if (num <= 1) {
      return 1;
  }
  return num * factorial(num -1);
};

// console.log(factorial(3));

// 8 and 9 Find a way out of the maze

let mySmallMaze = [
  ['X', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
]

let maze = [
  ['X', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

/**
* Start at the starting point given in fx
* 
*/

const mazeRunner = function(maze){
  const completed = []
  const mazeRun = function(currMaze, currLocation, letters=""){
      //Check if we can go right.
      if (currLocation[1]<currMaze[0].length-1){
          if (currMaze[currLocation[0]][currLocation[1]+1] === "e"){
              const newletters = letters + "R"
              completed.push(newletters)
              //console.log(newletters,"done")
              return newletters
          }
          if (currMaze[currLocation[0]][currLocation[1]+1] === " "){
              const newletters = letters + "R"
              currMaze[currLocation[0]][currLocation[1]+1]= "X"
              //console.log(newletters)
              //console.log(currMaze)
              mazeRun([...currMaze],[currLocation[0],currLocation[1]+1],newletters)
          }
      }
      //Check if we can go down.
      if(currLocation[0]<currMaze.length-1){
          if (currMaze[currLocation[0]+1][currLocation[1]] === "e"){
              letters = letters + "D"
              //console.log(letters,"done")
              completed.push(letters)
              return letters
          }
          if (currMaze[currLocation[0]+1][currLocation[1]] === " "){
              const newletters = letters + "D"
              currMaze[currLocation[0]+1][currLocation[1]]= "X"
              //console.log(newletters)
              //console.log(currMaze)
              mazeRun([...currMaze],[currLocation[0]+1,currLocation[1]],newletters)
          }
      }
      //Check if we can go left.
      if(currLocation[0]>0){
          if (currMaze[currLocation[0]][currLocation[1]-1] === "e"){
              const newletters = letters + "L"
              //console.log(newletters,"done")
              completed.push(newletters)
              return newletters
          }
          if (currMaze[currLocation[0]][currLocation[1]-1] === " "){
              const newletters = letters + "L"
              currMaze[currLocation[0]][currLocation[1]-1]= "X"
              //console.log(newletters)
              //console.log(currMaze)
              mazeRun([...currMaze],[currLocation[0],currLocation[1]-1],newletters)
          }
      }
      //Check if we can go up.
      if (currLocation[0]>0){
          if (currMaze[currLocation[0]-1][currLocation[1]] === "e"){
              const newletters = letters + "U"
              //console.log(newletters,"done")
              completed.push(newletters)
              return newletters
          }
          if (currMaze[currLocation[0]-1][currLocation[1]] === " "){
              const newletters = letters + "U"
              currMaze[currLocation[0]-1][currLocation[1]]= "X"
              //console.log(newletters)
              //console.log(currMaze)
              mazeRun([...currMaze],[currLocation[0]-1,currLocation[1]],newletters)
          }
      }
  }
  
  
  var i = 0
  while (i<maze.length){
      console.log(maze[i])
      i++
  }
  mazeRun([...maze],[0,0])
  //console.log(completed)
  //return all solution
  return completed
}

// console.log(mazeRunner(mySmallMaze))

// console.log(mazeRunner(maze))

// 10 Anagram

const genAnagram = (word)=>{
  const anagrams = []
  const genAnagramHelper = (word,anagram = "")=>{
      if (word === ""){
          console.log('created',anagram)
          anagrams.push(anagram)
          return
      }
      for (let i = 0 ; i<word.length; i++){
          anagram += word[i];
          //recursive portion we call the function again
          console.log(anagram,i)
          console.log('input',word.slice(0,i)+word.slice(i+1),anagram,i)
          //put it on and explore
          genAnagramHelper(word.slice(0,i)+word.slice(i+1),anagram)
          //take off the letter and try again.
          anagram = anagram.slice(0,anagram.length-1)
          console.log('here-popping',anagram)
      }  
  }
  genAnagramHelper(word)
  return anagrams
}


// console.log(genAnagram('fds'))

// 11 Organizational Chart

const org = [
  {id: 'Zuckerberg', boss: null},
  {id: 'Schroepfer', boss: 'Zuckerberg'},
  {id: 'Schrage', boss: 'Zuckerberg'},
  {id: 'Sandberg', boss: 'Zuckerberg'},
  {id: 'Bosworth', boss:'Schroepfer' },
  {id: 'Zhao', boss:'Schroepfer' },
  {id: 'Steve', boss:'Bosworth' },
  {id: 'Kyle', boss:'Bosworth' },
  {id: 'Andra', boss:'Bosworth' },
  {id: 'Richie', boss: 'Zhao'},
  {id: 'Sofia', boss: 'Zhao'},
  {id: 'Jen', boss: 'Zhao'},
  {id: 'VanDyck', boss:'Schrage' },
  {id: 'Swain', boss:'Schrage' },
  {id: 'Sabrina', boss:'VanDyck' },
  {id: 'Michelle', boss:'VanDyck' },
  {id: 'Josh', boss:'VanDyck' },
  {id: 'Blanch', boss:'Swain' },
  {id: 'Tom', boss:'Swain' },
  {id: 'Joe', boss:'Swain' },
  {id: 'Goler', boss:'Sandberg' },
  {id: 'Hernandez', boss:'Sandberg' },
  {id: 'Moissinac', boss:'Sandberg' },
  {id: 'Kelley', boss:'Sandberg' },
  {id: 'Eddie', boss:'Goler' },
  {id: 'Julie', boss:'Goler' },
  {id: 'Annie', boss:'Goler' },
  {id: 'Rowi', boss:'Hernandez'},
  {id: 'Inga', boss:'Hernandez'},
  {id: 'Morgan', boss:'Hernandez'},
  {id: 'Amy', boss:'Moissinac'},
  {id: 'Chuck', boss:'Moissinac'},
  {id: 'Vinni', boss:'Moissinac'},
  {id: 'Eric', boss:'Kelley'},
  {id: 'Ana', boss:'Kelley'},
  {id: 'Wes', boss:'Kelley'},
];

function organize(org, boss) {
  let node = {};

  org
    .filter(item => item.boss === boss)
    .forEach(item => node[item.id] = organize(org, item.id));
  return node;  
}

// console.log(JSON.stringify(organize(org, null)));

//12 Binary Representation

function binary(num) {
  if (num === 0) {
      return '0';
  }
  const dividedNum = Math.floor(num/2);
  const remainder = num % 2;
  if (dividedNum === 0) {
      return `${remainder}`;
  }
  return binary(dividedNum) + remainder.toString();
};

console.log(binary(25));