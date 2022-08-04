// Objects recap

// An object schema to be used to create object data
const team = {
  name : '',
  played : 0,
  win : 0,
  draw : 0,
  loss : 0,
  points : 0
};

// Copy contents of an object 
let addTeam = {...team};

// An array to hold object values
let arr = ['Arsenal', 38, 20, 15, 10, 75];

// an iterator variable used to access each array element
let a = 0;

// assign each object key to an array element
for(let key in addTeam){
  addTeam[key] = arr[a];
  a++;
}

// Empty array to hold objects
let teams = [];


// gonna repeat all the steps above for a new team


let arr2 = ['Bournemouth', 38, 5, 15, 20, 20];

let b = 0;

let addTeam2 = {...team};

for(let count in addTeam2){
  addTeam2[count] = arr2[b];
  b++;
}



// Add objects in array
teams[0] = addTeam;
teams[1] = addTeam2;

// print current items in array
for(let y = 0; y < teams.length; ++y){
  console.log(teams[y]);
}











