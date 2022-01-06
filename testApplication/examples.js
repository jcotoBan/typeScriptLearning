//Optional parameters
var _a;
var container = document.getElementById('container');
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
countdown(10);
//Template strings
var todo = {
    id: 123,
    name: "Trash",
    completed: true
};
var displayName = "Todo #".concat(todo.id); //Inject values to the string with ${expression}
//For...of
/*var array = [
  "Azxc",
  "zcvzxc",
  "rturty"
]*/
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) { //Instead of using the index, the values can be referenced
    var value = array_1[_i];
    console.log("".concat(value));
}
//lambdas
function Counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(container);
var filtered = [1, 2, 3].filter(function (x) { return x > 0; });
//Destructuring or reverse struture
var array = [123, "Pick up drycleaning", false];
var id = array[0], title = array[1], completed = array[2];
var a = 1;
var b = 5;
_a = [b, a], a = _a[0], b = _a[1];
