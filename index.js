let m ="extravaganza";
let n =m.slice(8);
console.log({n});


let o ="The quick fox jumped over the lazy dog";
let p =o.slice(0,4) + "eat" + o.slice(4);
console.log({p});

const story ="The quick brown fox jumps over the lazy dog"
let countThe = (story.toLowerCase().split("the").length-1);
console.log(`"the" appears:${countThe} times`);

let countBrown = (story.toLowerCase().split("brown").length-1);
console.log(`"brown" appears: ${countBrown} times`);

const pupils = "The pupils are reading in the library";
let wordAre = pupils.includes("are");
console.log(`"are" found: ${wordAre}`);

const pupils1 = "The child was sitting on the table before it fell";
let wordSitting = pupils1.includes("sitting");
console.log(`"sitting" found: ${wordSitting}`);


let a ="wonderful";
let b = a.toUpperCase();
console.log({b});

let c = "amazing";
let d = c.toLowerCase();
console.log({d});

let e = "UndERneath";
let f = e.toLowerCase();
console.log({f});

let titleCaseWord = "A wonderful world"
 .split(" ")
    .map( word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(titleCaseWord);












