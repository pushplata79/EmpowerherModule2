const user={
  n:"ani",
  age:21,
  greet:function(){
    m=90;
  }
}
console.log(user);
console.log(JSON.stringify(user))
const m='{"n":"ani","age":21}'
console.log(JSON.parse(m))