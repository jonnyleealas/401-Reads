# Difference between dot and bracket notation
 let obj = {
  jane: "molly"
}

let obj2= {
  jane: "whats up",
  molly: "molly"
}


console.log(obj2[obj["jane"]])

Anything with dot notation looks directly at the object to the left and looks for the property in that object. 
Anything inside the brackets is evaluated in search of a value. So on line 12 obj2 is looking for the evaluated value inside the brackets, if there is a value it is returned. In this case the brackets evaluate obj["jane] and sees if there is a property inside of obj that is called jane. In this case there is a property called jane and its value is "molly". Now the value returned inside the brackets is "molly", since there is a property inside of obj2 called molly it returns that value. 