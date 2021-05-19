

Report this ad

0


1
I am looking at this exercise from the book Eloquent Javascript, Chapter 4 - A List for quite some time and I'm trying to understand how this particular function works:

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

console.log( arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

Even after adding the list to the Watch window in the Debugger I can't clearly see the following:


1. How does exactly the statement from list = {value: array[i], rest: list}; get appended to the rest property of the nested object, during each iteration?


Obviously, the dot .rest or bracket ['rest'] notation are not being used, and it is not being explicitly specified that during every following iteration we are referring to the property of the object or its later nested objects, so how does it get appended to the property of each next nested object.

I am expecting for every iteration to overwrite the contents of the list object, but this is not the case.

javascript
arrays
list
object
nested
Share
Follow
asked Sep 4 '18 at 19:44

ross-u
60622 gold badges99 silver badges2222 bronze badges
1
1) Because it goes from back to front. – Luis felipe De jesus Munoz Sep 4 '18 at 19:50
@LuisfelipeDejesusMunoz Can you please give me some detail of what you mean when you say it goes from back to front ? Thanks ! – ross-u Sep 4 '18 at 19:55 
Add a comment
2 Answers

1

TL;DR: In each iteration, we create a new object containing the object from last iteration.

In the line list = {value: array[i], rest: list};, the statement on the right of the = gets evaluated first. This means we create an object {value: array[i], rest: list}, containing the current values of array[i] and list. In the first iteration, list is null and array[i] is 20, so the object looks like this:

{value: 20, rest: null}
Only then do we assign this object to list.

In the next iteration, list isn’t null anymore, but {value: 20, rest: null}. So now, the object we create and assign to list looks like this:

{value: 10, rest: {value: 20, rest: null}}
Share
Follow
answered Sep 4 '18 at 20:01

Fii
1801212 bronze badges
1
Thanks @jmb , this is the explanation and part of JS knowledge I was missing : In the line list = {value: array[i], rest: list};, the statement on the right of the = gets evaluated first. Further reading developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/… also helped. – ross-u Sep 8 '18 at 12:54 
Add a comment

1

I've tried to explain a little here. Let me know if something is unclear

function arrayToList(array) {
  // declare a empty variable to use is as a list
  let list = null;

  // Now iterate from the last element to the first. Example [10, 20]
  for (let i = array.length - 1; i >= 0; i--) {

    // iteration 1: i = 1 
    // we assign to list...
    list = {
        //the value of the current element
        value: array[i], // value = 20
        // the current list value before current assign
        rest: list // rest = null
    };
    // now it is assigned. list = {value: 20, rest: null}

    // ....

    // iteration 2: i = 0
    // we assign to list...
    list = {
        //the value of the current element
        value: array[i], // value = 10
        // the current list value before current assign
        rest: list // rest = {value: 20, rest: null}
    };
    // now it is assigned. list = {value: 10, rest: {value: 20, rest: null}}

  }
  return list;
}