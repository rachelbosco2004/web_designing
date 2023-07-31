let nos=[1,2,3,4,5];
console.log(nos);
nos.shift(2);
console.log("Nos after shift:",nos);
nos.unshift(1);
console.log("Nos after unshift:",nos);
nos.splice(0,3);
console.log("Nos after splice deletion:",nos);
//insert elements in between using splice
nos.splice(2,2,7,8);
console.log("Nos after splice addition:",nos);
f=["a","b","c"];
console.log(f);
f.splice(1,0,"d","e","f");
console.log("Values after addition",f);
g=["x","y","z"];