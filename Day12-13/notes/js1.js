// if(true){
// let n=9;
// console.log(n);
// }
// console.log(n);

// if(true){
// var n=9;
// console.log(n);
// }
// console.log(n);


// console.log(a);
// var a=90;

// //hoisting backprocess
// var a;
// console.log(a);
// var a=90;

// console.log(y);
// let y=90; //ReferenceError: Cannot access 'y' before initialization
// let z=99;
// function fun1(){
//   let x=9;

//   function fun2(){
//     var y=90;
    
//   console.log(x+y+z)
//   }
//   fun2();
// }
// fun1();


// a function defined inside of another function
// inner function has access to the variable and scope of the outer function
// allow for private variable and state maintenance


// function outer(){
//   let msg="hello"
//   function inner(){
//    console.log(msg);
//   }
//   inner();
// }

// outer();
// let count=0;
// function increment(){
  
//   count++;
//   console.log(`count increased to ${count}`);
// }

// increment();
// increment();
// increment();
// increment();




// function createcounter()
// {
// let count=0;
// function increment(){
  
//   count++;
//   console.log(`count increased to ${count}`);
// }
//   return {increment};
// }

// const counter=createcounter();
// counter.increment();
// counter.increment();


//  function creatGame()
//  {
// let score=0;
// function incrScore(points){
//  score+=points;
//  console.log(`+${points}pts`);
// }

// function decreScore(points){
// score-=points;
//  console.log(`-${points}pts`);
// }

// function getscore(){
//   return score;
// }
//  return {incrScore,decreScore,getscore}
// }

// const game=creatGame();

// game.incrScore(5);
// game.incrScore(6);
// game.decreScore(2);
// console.log(`the final score is ${game.getscore()} pts`);


