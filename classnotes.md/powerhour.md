insomnia is postman for auth.
- use the search bar in vscode to find what certain files are being used for.

Hanna sindorf - she works on tests. 
proof code solves what its supposed to solve
assurance
a tool to help you write a more readable and maintainable code
documentaion for how your code befaves given each type of input. 
 a plan for the lofic of the code your about to write

 Who was the speaker(s) and what company or companies were they from?  What was the topic of the talk?Hanna Sindorf; Tech lead at Flyt. She discussed code testing.Share 1 or 2 ways the speaker’s information will change your approach to your career transition.I learned that learning to write test will help me be a better developer. She also showed that I may have to learn other languages.Do you have any other key take-aways, or observations about this Partner Power Hour?She seemed like she knew what she was talking about. She came out of code fellows and I hope to be as confident as her as a developer.



 julie and james from facebook and one stradedy
 everyone get hired at different times.
 keep at it. some do it through networking and others work though cold applications.
 start a tech journal. these are the things i know. i did this i worked on this. you can see how youve grown.
 stay in the mind set through the rejection. i am approacjhing a the problem just so i can get an answer but im sure there are better ways. i would also google this because i would be able to find other solutions.
reference somehting they taught you in an interview that they said in the interview.


when negotiating find out what the company pay average is . did they offer you too low? or higher than expected?

i deal with stress very well and better than most. I work best under pressure. i can learn anything.
i have dealt with the public my entire life i know how to people think. we all have something that we brought from the outside that we can bring to the development team. ive worked in retail, service industry, music. i have traveled. i have a lot of world experience.
 i think im worth more than that. but im a junior allow me to prove that. give me a set of goals and if i hit those goals allow me to renegotiate our contract.


 Remove the nodes from a linked list questions:
 psuedo
we do it ireitabley.
are we supposed to do this in place? change the actual list vs make a new list.
Edge cases: empty list
- value we are looking for appearing more than once (non- unique)
- if the head or tail has that thing,  
- is there only one?
1. start at the head
- value check, if not value move on.
- is it equal to the value? in that case we have a problem.
- take the 3 and remove it.
- what we do is  3 point to null.
- make 2 point to 4.
- make previous point to 3 next. skip over a node that i determine to be the number that im looking to take out (3)

algorithm
1. start at head call it: current
2. is the value equal to the target value (3)?
point next to null
point previous.next = current.next
move current along: move current to my next.
3. if not equal , move current and not previous.
previous = current
actually you would have to save previous before moving along.
Its beter to say make previous = current and then current = current.next
4. there is a temp 


remove(value){
    let current = this.head
    let previous = this.head

while(current)
if(current.value === value){
    let temp = current.next
    preious.next = temp
    current = temp
 }else{
      previous = current

current = current.next
 }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

linked list recursivley

i would like to interface with the database. my focus web dev, front end , back end ,api.