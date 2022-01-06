
//Optional parameters

var container = document.getElementById('container');

function countdown (initial, final= 0, interval= 1){//Values in case no values are passed for final and interval
  var current = initial;

  while (current > final){
    container.innerHTML = current;
    current -= interval;
  }
}

countdown(10)


//Template strings

var todo = {
  id: 123,
  name: "Trash",
  completed: true
}

var displayName = `Todo #${todo.id}` //Inject values to the string with ${expression}


//For...of

/*var array = [
  "Azxc",
  "zcvzxc",
  "rturty"
]*/

for (var value of array){ //Instead of using the index, the values can be referenced
  console.log(`${value}`);
}


//lambdas

function Counter(el){
  this.count = 0;

  el.innerHTML = this.count;

  el.addEventListener('click',
    () => { //Notice the use of the lambda function
      this.count +=1;
      el.innerHTML = this.count;
    }
  )

}

new Counter(container);

var filtered = [1, 2, 3].filter(x => x > 0)

//Destructuring or reverse struture

var array = [123, "Pick up drycleaning", false];
var [id, title, completed] = array;


var a = 1;
var b = 5;

[a,b] = [b,a]; //Assign a to b and b to a in typescript.

//Spread operator
