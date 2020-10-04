function recursiveAdd*a,b){
    what is the base case?
    if(b===0){ return a;}
    return recursiveAdd(a+1, b-1)'
}
conoslle.log(add(2,5));
console.log(recursiveAdd(2,5));


Stacks: pop, push, peek.
Pop:takes from top. returns value.
push: adds to the top
peek: see the top and return it.
isEmpty: boolean
Traversing a stack is volatile traversal. 
We can traverse a stack using a while loop. while(!isEmtpty) or while(peek())

whilt(!isempty){
    do work
}
return

coding interview
- can i use my stack implementation
- know the methods and how they work. 

let family = [ 'jon, cathy , zach, allie]

family.forEch(person => familyStack.push(person));

console.log(json.stringify(familystack, null, 4));

data sturcture questions always use stack