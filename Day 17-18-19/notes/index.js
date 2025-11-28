//DOM navigation ----navigating the structure of an HTML using JS

//.firstElementChild
//.last
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children
// const ele = document.getElementById("fruits");
// const f = ele.firstElementChild;
// f.style.backgroundColor="red";

// const el = document.getElementById("vegetable");
// const f1 = el.firstElementChild;
// f1.style.backgroundColor="red";

// const ell = document.getElementById("deserts");
// const f11 = ell.firstElementChild;
// f11.style.backgroundColor="red";


// const uElement=document.querySelectorAll("ul")
// uElement.forEach(uElement=>{
//   const f=uElement.firstElementChild;
//   f.style.backgroundColor="green"
// })

// const uElement=document.querySelectorAll("ul")
// uElement.forEach(uElement=>{
//   const f=uElement.lastElementChild;
//   f.style.backgroundColor="green"
// })

// const ell = document.getElementById("mango");
// const f11 = ell.nextElementSibling;
// f11.style.backgroundColor="red";

// const ell = document.getElementById("deserts");
// const f11 = ell.previousElementSibling;
// f11.style.backgroundColor="red";

// const ell = document.getElementById("mango");
// const f11 = ell.previousElementSibling;
// f11.style.backgroundColor="red";

// const ell = document.getElementById("deserts");
// const f11 = ell.children;
// Array.from(f11).forEach(c=>{
//  c.style.backgroundColor="yellow";
// })

const ell = document.getElementById("k");
const f11 = ell.parentElement;
f11.style.backgroundColor="red";
