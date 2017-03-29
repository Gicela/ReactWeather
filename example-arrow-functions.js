var names = ['gicela', 'steve', 'Nelly', 'Alice'];

//names.forEach(function(name){
//  console.log(name);  
//})

//names.forEach((name)=> {
//    console.log('arrow function:', name);
//})

//names.forEach((name) => console.log("name", name));

//var returnMe = (name) => name + '!';
//console.log(returnMe("Gicela"));

var person = {
    name: 'Mary',
    greet: function(){
        names.forEach((name)=> console.log(this.name + ' says hello to ' + name));
    }
}
person.greet();

//challenge

//function add(a,b){
 //   return a + b;
//}
//add expression
//console.log(add(1,3));
//console.log(add(3,4));

//add statement
var addStatement = (a,b) => {
    return a + b;
};
//add statement
console.log(addStatement(1,3));
console.log(addStatement(3,4));

//add expression
var addExpression = (a,b) => a + b;
console.log(addExpression(4,7));
console.log(addExpression(3,2));

