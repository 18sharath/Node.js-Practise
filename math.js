const  add=(x,y)=>x+y;
 const square=(x)=>x*x;
module.exports.square=square;  // default object 
module.exports.add=add;  // default object 

exports.add=add; // aslo possible 
exports.square=square; // aslo possible 